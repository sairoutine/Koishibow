'use strict';

// オブジェクトとの会話サブシーン
var base_scene = require('./base');
var ScenarioManager = require('../../hakurei').manager.scenario;
var Util = require('../../hakurei').util;
var CONSTANT_BUTTON = require('../../hakurei').constant.button;

// クリックしてから次のセリフに移るまでの待機カウント
var NEXT_TO_SERIF_WAITING_COUNT = 6;

var SceneSubStageObjectTalk = function(core) {
	base_scene.apply(this, arguments);

	this._serif = new ScenarioManager();

	// クリック待ちカーソルの状態
	this._cursor_y = 0; // カーソル位置
	this._cursor_reverse = false; // カーソルが↑移動中かどうか

	// クリックしてから次のセリフに移るまでの待機カウント
	this._next_to_serif_waiting_count = 0;
};
Util.inherit(SceneSubStageObjectTalk, base_scene);

SceneSubStageObjectTalk.prototype.init = function(serif_list, obj){
	base_scene.prototype.init.apply(this, arguments);

	// クリック待ちカーソルの状態
	this._cursor_y = 0;
	this._cursor_reverse = false;

	// クリックしてから次のセリフに移るまでの待機カウント
	this._next_to_serif_waiting_count = 0;

	// セリフデータの生成
	this._serif.init(serif_list);

	// セリフ再生開始
	if (this.isSerifAutoStart()) {
		this._serif.start();
	}
};

SceneSubStageObjectTalk.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	// クリックしてから一定時間経ったら、次のセリフに移る
	if(this._next_to_serif_waiting_count) {
		this._next_to_serif_waiting_count--;

		if (this._next_to_serif_waiting_count === 0) {
			// セリフを送る
			this._serif.next();
		}
	}
	else if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
		if(this._serif.isEnd()) {

			// オブジェクトに触れた際の会話だった場合、
			// 触れた際のモーションにこいしがなっているため
			this.root().koishi.setWaitAnime();

			// セリフ終わり
			this.root().changeSubScene("play");
		}
		else {
			if(this._serif.isStart()) {
				// 次のセリフへ
				this._next_to_serif_waiting_count = NEXT_TO_SERIF_WAITING_COUNT;
			}
		}
	}

};

SceneSubStageObjectTalk.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);

	// セリフ送り待機中は表示しない
	if(!this._next_to_serif_waiting_count) {
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
	obj.showMessage(this._serif.getCurrentPrintedSentences());
};

// シーン開始時にセリフを開始させるかどうか
SceneSubStageObjectTalk.prototype.isSerifAutoStart = function() {
	return true;
};

module.exports = SceneSubStageObjectTalk;
