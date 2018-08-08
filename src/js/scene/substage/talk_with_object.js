'use strict';

// オブジェクトとの会話サブシーン
var base_scene = require('./base');
var ScenarioManager = require('../../hakurei').Manager.Scenario;
var TimeManager = require('../../hakurei').Manager.Time;
var Util = require('../../hakurei').util;
var CONSTANT_BUTTON = require('../../hakurei').constant.button;
var DrawSerif = require('../../logic/draw_serif');

// クリックしてから次のセリフに移るまでの待機カウント
var NEXT_TO_SERIF_WAITING_COUNT = 6;

// 状態
var STATE_TALKING  = 1; // セリフ表示
var STATE_WAITING  = 2; // セリフ非表示
var STATE_JUNCTION = 3; // 会話の選択肢表示
var STATE_END      = 4; // 会話終了

var SceneSubStageObjectTalk = function(core) {
	base_scene.apply(this, arguments);

	this._serif = new ScenarioManager(core, {
		// 会話で使う条件分岐
		criteria: {
			// アイテムを持っていれば
			existsItem: function (core, item_id) {
				return core.save_manager.item.existsItem(item_id) ? 0 : 1;
			},
			// アイテムすべて持っていれば
			existsItemAll: function (core, item_ids) {
				var args = Array.prototype.slice.call(arguments); // convert arguments to array
				core = args.shift();
				for (var i = 0, len = args.length; i < len; i++) {
					if(!core.save_manager.item.existsItem(args[i])) { // 1つでも持っていなければ
						return 1;
					}
				}

				return 0;
			},
			// id のセリフを再生済かどうか
			isPlayed: function (core, id) {
				return core.save_manager.scenario.getPlayedCount(id) ? 0 : 1;
			},

			// max_num まで1ずつ上昇し、それを超えると最初に戻る
			circulate: function (core, id, max_num) {
				var index = core.save_manager.scenario.getPlayedCount(id);

				core.save_manager.scenario.incrementPlayedCount(id);

				return index % max_num;
			},
			// max_num まで1ずつ上昇し、それを超えると最大値を返し続ける
			limit: function (core, id, max_num) {
				var index = core.save_manager.scenario.getPlayedCount(id);

				if (index >= max_num) return max_num;

				core.save_manager.scenario.incrementPlayedCount(id);

				return index;
			},
		}
	});

	// フレーム数によるイベント管理
	var self = this;
	this._time = new TimeManager(this.core);
	this._time.setFrameCountFunction(function () {
		return self.frame_count;
	});

	// クリック待ちカーソルの状態
	this._cursor_y = 0; // カーソル位置
	this._cursor_reverse = false; // カーソルが↑移動中かどうか

	// 今、会話のどの選択肢を選んでいるか
	this._junction_focus_index = 0;

	this._state = STATE_TALKING;
};
Util.inherit(SceneSubStageObjectTalk, base_scene);

SceneSubStageObjectTalk.prototype.init = function(serif_list){
	base_scene.prototype.init.apply(this, arguments);

	// クリック待ちカーソルの状態
	this._cursor_y = 0;
	this._cursor_reverse = false;

	// 今、会話のどの選択肢を選んでいるか
	this._junction_focus_index = 0;

	this._state = STATE_TALKING;

	// セリフデータの生成
	this._serif.init(serif_list);

	// セリフ再生開始
	if (this.isSerifAutoStart()) {
		this._serif.start();

		// 表情変更
		this._actionExpression();
	}
};

SceneSubStageObjectTalk.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	this._time.executeEvents();

	if(this._state === STATE_TALKING) {
		this._updateInTalking();
	}
	else if(this._state === STATE_WAITING) {
		// 何もしない
	}
	else if(this._state === STATE_JUNCTION) {
		this._updateInJunction();
	}
	else if(this._state === STATE_END) {
		// オブジェクトに触れた際の会話だった場合、
		// 触れた際のモーションにこいしがなっているため
		this.root().koishi.setWaitAnime();

		// セリフ サブシーン終わり
		this.root().changeSubScene("play");
	}
	else {
		throw new Error("illegal talking state: " + this._state);
	}
};
// 会話中の処理
SceneSubStageObjectTalk.prototype._updateInTalking = function(){
	if(!this._serif.isStart()) return;

	// 会話以外の処理
	this._updateProcess();
	// 会話処理
	this._updateTalk();
};

// 会話以外の処理
// 処理がなければ false を返す
SceneSubStageObjectTalk.prototype._updateProcess = function(){
	var option = this._serif.getCurrentOption();

	// Z ボタンが押されたら
	// あるいは空文字 = オプションの内容だけ処理したい
	if(this._serif.getCurrentMaxLengthLetters() === 0 || this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
		// ムービーを再生
		if (option.playMovie) {
			var scene_manager = this.core.scene_manager;
			scene_manager.setFadeOut(0);
			scene_manager.changeScene("movie", option.playMovie, function () {
				scene_manager.returnScene("stage");
			});
			return true;
		}
		// 別のシーンへ遷移
		else if (option.changeScene) {
			this.core.scene_manager.changeScene(option.changeScene);
			return true;
		}
		// 別のフィールドへ遷移
		else if (option.changeField) {
			this.core.scene_manager.changeScene("stage", option.changeField);
			return true;
		}
		// 別のイベントを再生
		else if (option.playEvent) {
			this.core.scene_manager.setFadeOut(0);
			this.core.scene_manager.changeScene("event_talk", option.playEvent);
			return true;
		}
		// 別のイベントを再生(旧)
		else if (option.playEventOld) {
			this.core.scene_manager.setFadeOut(0);
			this.core.scene_manager.changeScene("event_talk_old", option.playEventOld);
			return true;
		}
		// アイテム獲得
		else if (option.getItem) {
			// アイテム追加
			this.core.save_manager.item.addItem(option.getItem);

			// アイテム獲得のみ、別のシーンへ遷移と組み合わせられる
			if (option.changeField) {
				this.core.scene_manager.changeScene("stage", option.changeField);
				return true;
			}
			else {
				// アイテム獲得演出へ遷移
				this.root().changeSubScene("got_item", option.getItem, "talk_with_object");
				return true;
			}
		}
		// アイテム使用
		else if (option.useItem) {
			var use_item_id = option.useItem;

			this.core.save_manager.item.reduceItem(use_item_id);

			// アイテム使用演出へ遷移
			this.root().changeSubScene("use_item", use_item_id, "talk_with_object");
			return true;
		}
		// 1枚絵を表示
		else if (option.showPicture) {
			// セリフ終わり
			this.root().changeSubScene("picture", option.showPicture, "talk_with_object");
			return true;
		}
		// フラグを下ろす
		else if (option.resetFlag) {
			this.core.save_manager.scenario.resetPlayedCount(option.resetFlag);
			return true;
		}
		// アイテムを削除
		else if (option.deleteItem) {
			var delete_item_id = option.deleteItem;
			this.core.save_manager.item.reduceItem(delete_item_id);
			return true;
		}


	}

	return false;
};

// 会話の処理
SceneSubStageObjectTalk.prototype._updateTalk = function(){
	// Z ボタンが押されたら
	// あるいは空文字 = オプションの内容だけ処理したい
	if(this._serif.getCurrentMaxLengthLetters() === 0 || this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
		// 会話がもう終わりなら
		if(this._serif.isEnd()) {
			this._state = STATE_END;
		}
		// 会話 継続中
		else {
			// 会話への回答の選択肢があるなら、次のセリフには進めずに
			// 選択肢を表示する
			if(this._serif.isCurrentSerifExistsJunction()) {
				this._state = STATE_JUNCTION;
			}
			// 次のセリフへ
			else {
				// Nフレーム後に次のセリフへ
				this._gotoNextSerif();
			}
		}
	}
};

// Nフレーム後に次のセリフへ
SceneSubStageObjectTalk.prototype._gotoNextSerif = function(choice){
	var self = this;

	self._state = STATE_WAITING;

	self._time.setTimeout(function () {
		self._state = STATE_TALKING;

		// セリフを送る
		self._serif.next(choice);

		// 表情変更
		self._actionExpression();
	}, NEXT_TO_SERIF_WAITING_COUNT);
};

// 会話 選択肢の処理
SceneSubStageObjectTalk.prototype._updateInJunction = function(){
	// Zボタン 選択肢の決定
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
		// Nフレーム後に次のセリフへ
		this._gotoNextSerif(this._junction_focus_index);

		// 選んでる選択肢のリセット
		this._junction_focus_index = 0;
	}
	// ↑ボタン 選択肢の移動
	else if (this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_UP)) {
		this._junction_focus_index--;
	}
	// ↓ボタン 選択肢の移動
	else if (this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_DOWN)) {
		this._junction_focus_index++;
	}

	// 選択肢が上下はみ出ないように
	var junction_list = this._serif.getCurrentJunctionList();
	this._junction_focus_index = Util.clamp(this._junction_focus_index, 0, junction_list.length - 1);
};

SceneSubStageObjectTalk.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);

	// セリフ送り待機中は表示しない
	if(this._state === STATE_TALKING) {
		// セリフ表示
		this._showMessage();

		// クリック待ちカーソル表示
		this._showMessageCursor();
	}
	else if(this._state === STATE_WAITING) {
		// 何も表示しない
	}
	else if(this._state === STATE_JUNCTION) {
		// 会話 選択肢 表示
		this._showJunction();
	}
	else if(this._state === STATE_END) {
		// 何もしない
	}
};

// クリック待ちカーソル表示
SceneSubStageObjectTalk.prototype._showMessageCursor = function(){
		// TODO:
	/*
	// クリック待ちカーソル表示
	if (!this._serif.isEnd() && this._serif.isPrintLetterEnd()) {

		// カーソルを上下に移動させる
		if (this._cursor_reverse) {
			this._cursor_y-=0.25;
		}
		else {
			this._cursor_y+=0.25;
		}

		if (this._cursor_y > 6) {
			this._cursor_reverse = true;
		}
		else if (this._cursor_y === 0) {
			this._cursor_reverse = false;
		}

		var cursor = this.core.image_loader.getImage("fukidashi_arrow");
		ctx.drawImage(cursor,
			x + lines[lines.length-1].length*18, // 18 -> font size
			y - 18 + 2 + this._cursor_y,
			cursor.width*2/3,
			cursor.height*2/3
		);
	}
	*/
};

// セリフ表示
SceneSubStageObjectTalk.prototype._showMessage = function() {
	if(!this._serif.isStart()) return;

	// 現在喋っているオブジェクト名(こいしの場合は koishi)
	var chara_name = this._serif.getCurrentCharaNameByPosition();

	// オブジェクトを取得
	var obj = this.root().getPiece(chara_name);
	if(!obj) throw new Error(chara_name + " doesn't exist");

	// 表示
	obj.showMessage(
		this._serif.getCurrentPrintedSentences(),
		this._serif.getCurrentMaxLengthLetters(),
		this._serif.getCurrentSentenceNum(),
		// オプション
		{
			fontSize: this._serif.getCurrentOption().fontSize,
			fontName: this._serif.getCurrentOption().fontName,
		}
	);
};
// 会話 選択肢 表示
SceneSubStageObjectTalk.prototype._showJunction = function() {
	if(!this._serif.isStart()) return;

	// こいしを取得
	var obj = this.root().koishi;

	// 表示
	var ctx = this.core.ctx;
	var junction_off = this.core.image_loader.getImage('junction_off');
	var junction_on  = this.core.image_loader.getImage('junction_on');

	var junction_list = this._serif.getCurrentJunctionList();
	DrawSerif.drawJunction(obj, ctx, junction_off, junction_on, junction_list, this._junction_focus_index);
};


// 表情(アニメ)
SceneSubStageObjectTalk.prototype._actionExpression = function() {
	// 表情
	var expression = this._serif.getCurrentCharaExpressionByPosition();

	// 現在喋っているオブジェクト名(こいしの場合は koishi)
	var chara_name = this._serif.getCurrentCharaNameByPosition();

	// オブジェクトを取得
	var obj = this.root().getPiece(chara_name);
	if(!obj) throw new Error(chara_name + " doesn't exist");

	// TODO: 基底クラスに必要であることを定義したい
	// アニメ実行
	if(expression) {
		// TODO: 文字の直指定やめたい
		if (expression === "back") {
			// 待機モーションに戻す
			obj.setWaitAnime();
		}
		else {
			obj.actionByObject(expression);
		}
	}
};



// シーン開始時にセリフを開始させるかどうか
SceneSubStageObjectTalk.prototype.isSerifAutoStart = function() {
	return true;
};

module.exports = SceneSubStageObjectTalk;
