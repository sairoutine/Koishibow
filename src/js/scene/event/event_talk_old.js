'use strict';

/* chapter3 だけで使われる古いイベントシステム */

// talk_with_object と共通の処理が多いのでまとめたい

var BaseScene = require('../../hakurei').Scene.Base;
var ScenarioManager = require('../../hakurei').Manager.Scenario;
var TimeManager = require('../../hakurei').Manager.Time;
var Util = require('../../hakurei').Util;
var CONSTANT_BUTTON = require('../../hakurei').Constant.Button;
var DrawSerif = require('../../logic/draw_serif');

var CommonProcess = require('../../logic/common_process');
var AnimeMap = require('../../config/event_anime');
var EventTalkOldMasterRepository = require('../../repository/event_talk_old');
var ObjectPoint = require('../../hakurei').object.point;
var SS = require('../../object/anime_object');
var BlackMist = require('../../object/black_mist');

var CONSTANT = require('../../constant');

// クリックしてから次のセリフに移るまでの待機カウント
var NEXT_TO_SERIF_WAITING_COUNT = 6;

// 状態
var STATE_TALKING  = 1; // セリフ表示
var STATE_WAITING  = 2; // セリフ非表示
var STATE_JUNCTION = 3; // 会話の選択肢表示
var STATE_END      = 4; // 会話終了


var SceneEventTalk = function(core) {
	BaseScene.apply(this, arguments);

	// event_talk 固有 start
	this.ss_list = [];
	// セリフ表示位置
	this._serif_position = new ObjectPoint(this);
	// 黒いもや
	this._black_mist = new BlackMist(this);
	// event_talk 固有 end

	// セリフ
	this._serif = new ScenarioManager(core, {
		// 会話で使う条件分岐
		criteria: {
			// アイテムを持っていれば
			existsItem: function (core, item_id) {
				return core.save_manager.item.existsItem(item_id) ? 0 : 1;
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

	// 今、会話のどの選択肢を選んでいるか
	this._junction_focus_index = 0;

	this._state = STATE_WAITING;
};
Util.inherit(SceneEventTalk, BaseScene);

SceneEventTalk.prototype.init = function(event_name){
	BaseScene.prototype.init.apply(this, arguments);

	// event_talk 固有 start
	this._master = EventTalkOldMasterRepository.find(event_name);

	if (!this._master) {
		throw new Error("Can't find event master: " + event_name);
	}

	// フェードインする
	this.core.scene_manager.setFadeIn(120, "black");

	// フェードアウトする
	this.core.scene_manager.setFadeOut(120, "black");

	// BGM再生
	if (this._master.bgm()) {
		this.core.audio_loader.changeBGM(this._master.bgm());
	}

	// チャプター開始時のSE再生
	if (this._master.startSE()) {
		this.core.audio_loader.playSound(this._master.startSE());
	}

	var serif_list = this._master.serifs();

	// ss の init
	this._initSS();

	this.removeAllObject();
	this._serif_position.init();

	this.addObjects(this.ss_list);
	this.addObject(this._serif_position);

	// 黒い霧
	this._black_mist.init();

	// event_talk 固有 end

	// 今、会話のどの選択肢を選んでいるか
	this._junction_focus_index = 0;

	this._state = STATE_WAITING;

	// セリフデータの生成
	this._serif.init(serif_list);

	// event_talk 固有 start
	this._startSerif();
	// event_talk 固有 end
};

SceneEventTalk.prototype._initSS = function(){
	this.ss_list = [];
	for (var i = 0; i < this._master.animeNum(); i++) {
		var ss = new SS(this);
		ss.x(this.width/2);
		ss.y(this.height/2);

		var default_anime;
		if (this._master.startAnime()) {
			default_anime = this._master.expAnimes()[this._master.startAnime()][i];
		}
		else {
			var first_key = Object.keys(this._master.expAnimes())[0];
			default_anime = this._master.expAnimes()[first_key][i]; // 仮で最初のアニメを入れておく
		}

		var anime_conf = {
			default: AnimeMap[default_anime],
		};
		for (var name in this._master.expAnimes()) {
			var obj_anime_list = this._master.expAnimes()[name];
			var anime_name = obj_anime_list[i];
			anime_conf[name] = AnimeMap[anime_name];

			if(!anime_conf[name]) throw new Error("Can't find anime json: " + anime_name);
		}

		ss.setAnime(anime_conf);
		ss.init();

		this.ss_list.push(ss);
	}
};
SceneEventTalk.prototype._startSerif = function(){
	var self = this;
	var start_function = function () {
		// セリフ再生開始
		if (self.isSerifAutoStart()) {
			// 表情を次へ
			self._serif.start();

			// 表情→セリフの順に再生するので、セリフ再生は一旦止める
			self._serif.pausePrintLetter();

			// 表情 再生
			self._actionExpression(function () {
				self._state = STATE_TALKING;

				// その後、止めたセリフ再生を再開
				self._serif.resumePrintLetter();
			});
		}
	};

	if (this._master.startAnime()) {
		// アニメ再生開始
		for (var i = 0, len = this.ss_list.length; i < len; i++) {
			var ss = this.ss_list[i];
			if (i === 0) {
				ss.playAnimationOnce(this._master.startAnime(), start_function);
			}
			else {
				ss.playAnimationOnce(this._master.startAnime());
			}
		}
	}
	else {
		// セリフ再生開始
		start_function();
	}
};


SceneEventTalk.prototype.beforeDraw = function(){
	BaseScene.prototype.beforeDraw.apply(this, arguments);

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
		// event_talk 固有 start
		var self = this;
		this._state = STATE_WAITING;

		if (this._master.endAnime()) {
			for (var i = 0, len = this.ss_list.length; i < len; i++) {
				var ss = this.ss_list[i];
				if (i === 0) {
					ss.playAnimationOnce(this._master.endAnime(), function () {
						self._endProcess();
					});
				}
				else {
					ss.playAnimationOnce(this._master.endAnime());
				}
			}
		}
		else {
			// N 秒後にイベント終了処理
			self._time.setTimeout(function () {
				self._endProcess();
			}, 60);
		}
		// event_talk 固有 end
	}
	else {
		throw new Error("illegal talking state: " + this._state);
	}

	// event_talk 固有 start
	this._black_mist.beforeDraw();

	// 左クリック位置を出力
	if (CONSTANT.DEBUG.ON) {
		if(this.core.input_manager.isLeftClickPush()) {
			var x = this.core.input_manager.mousePositionX();
			var y = this.core.input_manager.mousePositionY();

			console.log("x: " + x + ", y: " + y);
		}
	}
	// event_talk 固有 end
};

SceneEventTalk.prototype._endProcess = function(){
	// イベント終わりのSE再生
	if (this._master.endSE()) {
		this.core.audio_loader.playSound(this._master.endSE());
	}

	// BGM をフェードアウト
	if (this._master.bgm()) {
		this.core.audio_loader.fadeOutBGM(2);
	}

	// ユーザー定義の最後の処理
	CommonProcess.exec(this.core, this._master.endProcess());
};


// 会話中の処理
SceneEventTalk.prototype._updateInTalking = function(){
	if(!this._serif.isStart()) return;

	// 会話以外の処理
	this._updateProcess();
	// 会話処理
	this._updateTalk();
};

// 会話以外の処理
// 処理がなければ false を返す
SceneEventTalk.prototype._updateProcess = function(){
	var option = this._serif.getCurrentOption();

	// Z ボタンが押されたら
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
		// 別のシーンへ遷移
		if (option.changeScene) {
			this.core.scene_manager.changeScene(option.changeScene);
			return true;
		}
		// 別のフィールドへ遷移
		if (option.changeField) {
			this.core.scene_manager.changeScene("stage", option.changeField);
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
	}

	return false;
};

// 会話の処理
SceneEventTalk.prototype._updateTalk = function(){
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
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
SceneEventTalk.prototype._gotoNextSerif = function(choice){
	var self = this;

	self._state = STATE_WAITING;

	// 表情を次へ
	self._serif.next(choice);

	// 表情→セリフの順に再生するので、セリフ再生は一旦止める
	self._serif.pausePrintLetter();

	// 表情 再生
	self._actionExpression(function () {
		self._state = STATE_TALKING;

		// その後、止めたセリフ再生を再開
		self._serif.resumePrintLetter();
	});
};

// 会話 選択肢の処理
SceneEventTalk.prototype._updateInJunction = function(){
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

SceneEventTalk.prototype.draw = function(){
	// 背景表示
	if (this._master.bg()) {
		var ctx = this.core.ctx;
		var bg = this.core.image_loader.getImage(this._master.bg());
		ctx.save();
		ctx.drawImage(bg,
			0,
			0,
			bg.width,
			bg.height,
			0,
			0,
			this.width,
			this.height
		);
		ctx.restore();
	}

	BaseScene.prototype.draw.apply(this, arguments);

	// セリフ送り待機中は表示しない
	if(this._state === STATE_TALKING) {
		// セリフ表示
		this._showMessage();
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

	// event_talk 固有 start
	this._black_mist.draw();
	// event_talk 固有 end
};

// event_talk 固有 start
SceneEventTalk.prototype._showMessage = function(){
	var option = this._serif.getCurrentOption();
	this._serif_position.setPosition(option.x, option.y);

	// セリフ取得
	var lines = this._serif.getCurrentPrintedSentences();
	var width = this._serif.getCurrentMaxLengthLetters();
	var height = this._serif.getCurrentSentenceNum();

	if (!lines.length) return;

	var ctx = this.core.ctx;
	var fukidashi = this.core.image_loader.getImage(this._master.serifWindow());
	DrawSerif.drawWindow(this._serif_position, ctx, fukidashi, lines, width, height);
	DrawSerif.drawText(this._serif_position, ctx, lines, width, height,
		// オプション
		{
			fontSize: this._serif.getCurrentOption().fontSize,
			fontName: this._serif.getCurrentOption().fontName,
		}
	);
};
// 会話 選択肢 表示
SceneEventTalk.prototype._showJunction = function() {
	if(!this._serif.isStart()) return;

	var option = this._serif.getCurrentOption();
	var obj = this._serif_position;
	obj.setPosition(option.x, option.y);

	// 表示
	var ctx = this.core.ctx;
	var junction_off = this.core.image_loader.getImage('junction_off');
	var junction_on  = this.core.image_loader.getImage('junction_on');

	var junction_list = this._serif.getCurrentJunctionList();
	DrawSerif.drawJunction(obj, ctx, junction_off, junction_on, junction_list, this._junction_focus_index);
};
// アニメ
SceneEventTalk.prototype._actionExpression = function(callback) {
	callback = callback || function () {};
	// 表情
	var expression = this._serif.getCurrentCharaExpressionByPosition();
	if(!expression) {
		// 表情終了を待たない分、N 秒だけ待つ
		this._time.setTimeout(function () {
			callback();
		}, NEXT_TO_SERIF_WAITING_COUNT);
		return;
	}

	var option = this._serif.getCurrentOption();

	var i, len, ss;
	if (option.loop) {
		for (i = 0, len = this.ss_list.length; i < len; i++) {
			ss = this.ss_list[i];
			ss.playAnimationInfinity(expression);
		}

		// 表情終了を待たない分、N 秒だけ待つ
		this._time.setTimeout(function () {
			callback();
		}, NEXT_TO_SERIF_WAITING_COUNT);
	}
	else {
		for (i = 0, len = this.ss_list.length; i < len; i++) {
			ss = this.ss_list[i];
			if (i === 0) {
				ss.playAnimationOnce(expression, callback);
			}
			else {
				ss.playAnimationOnce(expression);
			}
		}

	}
};
// event_talk 固有 end

// black_mist が参照する
SceneEventTalk.prototype.isUsingEye = function(){
	return false;
};
// シーン開始時にセリフを開始させるかどうか
SceneEventTalk.prototype.isSerifAutoStart = function() {
	return true;
};


module.exports = SceneEventTalk;
