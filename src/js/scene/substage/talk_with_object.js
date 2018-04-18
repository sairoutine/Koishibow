'use strict';

// オブジェクトとの会話サブシーン
var base_scene = require('./base');
var ScenarioManager = require('../../hakurei').manager.scenario;
var Util = require('../../hakurei').util;
var CONSTANT_BUTTON = require('../../hakurei').constant.button;

// クリックしてから次のセリフに移るまでの待機カウント
var NEXT_TO_SERIF_WAITING_COUNT = 6;

// 状態
var STATE_TALKING  = 1; // セリフ表示
var STATE_WAITING  = 2; // セリフ非表示
var STATE_JUNCTION = 3; // 会話の選択肢表示

var SceneSubStageObjectTalk = function(core) {
	base_scene.apply(this, arguments);

	this._serif = new ScenarioManager();

	// クリック待ちカーソルの状態
	this._cursor_y = 0; // カーソル位置
	this._cursor_reverse = false; // カーソルが↑移動中かどうか

	this._state = STATE_TALKING;
};
Util.inherit(SceneSubStageObjectTalk, base_scene);

SceneSubStageObjectTalk.prototype.init = function(serif_list, obj){
	base_scene.prototype.init.apply(this, arguments);

	// クリック待ちカーソルの状態
	this._cursor_y = 0;
	this._cursor_reverse = false;

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

	if(this._state === STATE_TALKING) {
		if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
			if(this._serif.isEnd()) {

				// オブジェクトに触れた際の会話だった場合、
				// 触れた際のモーションにこいしがなっているため
				this.root().koishi.setWaitAnime();

				// セリフ終わり
				this.root().changeSubScene("play");
			}
			else {
				if(this._serif.isStart()) {
					if(this._serif.isCurrentSerifExistsJunction()) {
						this._state = STATE_JUNCTION;
					}
					else {
						this._state = STATE_WAITING;

						// Nフレーム後に次のセリフへ
						var self = this;
						this.core.time_manager.setTimeout(function () {
							// セリフを送る
							self._serif.next();

							// 表情変更
							self._actionExpression();

							self._state = STATE_TALKING;

						}, NEXT_TO_SERIF_WAITING_COUNT);
					}
				}
			}
		}
	}
	else if(this._state === STATE_WAITING) {
		// 何もしない
	}
	else if(this._state === STATE_JUNCTION) {
		// TODO:
	}
};

SceneSubStageObjectTalk.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);

	// セリフ送り待機中は表示しない
	if(this._state === STATE_TALKING) {
		// セリフ表示
		this._showMessage();

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
			y - 18 + 2 + this._cursor_y, // TODO: 要調整
			cursor.width*2/3,
			cursor.height*2/3
		);
	}
	*/
	}
	else if(this._state === STATE_WAITING) {
		// 何もしない
	}
	else if(this._state === STATE_JUNCTION) {
		// TODO:
	}
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
		this._serif.getCurrentSentenceNum()
	);
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
