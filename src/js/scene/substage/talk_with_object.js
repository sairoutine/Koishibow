'use strict';

var base_scene = require('./base');
var SerifManager = require('../../hakurei').serif_manager;
var Util = require('../../hakurei').util;

// クリックしてから次のセリフに移るまでの待機カウント
var NEXT_TO_SERIF_WAITING_COUNT = 6;

var SceneSubStageObjectTalk = function(core) {
	base_scene.apply(this, arguments);

	this._serif = new SerifManager();

	// クリック待ちカーソルの状態
	this._cursor_y = 0; // カーソル位置
	this._cursor_reverse = false; // カーソルが↑移動中かどうか

	// クリックしてから次のセリフに移るまでの待機カウント
	this._next_to_serif_waiting_count = 0;

	// 会話対象のオブジェクト
	this._target_object = null;
};
Util.inherit(SceneSubStageObjectTalk, base_scene);

SceneSubStageObjectTalk.prototype.init = function(serif_list, obj, auto_start_flag){
	base_scene.prototype.init.apply(this, arguments);

	// クリック待ちカーソルの状態
	this._cursor_y = 0;
	this._cursor_reverse = false;

	// クリックしてから次のセリフに移るまでの待機カウント
	this._next_to_serif_waiting_count = 0;

	// セリフデータの生成
	var serif_script = serif_list;
	this._serif.init(serif_script, auto_start_flag);

	// 会話対象のオブジェクト
	this._target_object = obj;
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
	else if(this.core.input_manager.isLeftClickPush()) { // セリフ送り待機中はクリックできない
		if(this._serif.isEnd()) {

			// オブジェクトに触れた際の会話だった場合、
			// 触れた際のモーションにこいしがなっているため
			this.root().koishi.setWaitAnime();

			// セリフ終わり
			this.root().changeSubScene("play");
		}
		else {
			// 次のセリフへ
			this._next_to_serif_waiting_count = NEXT_TO_SERIF_WAITING_COUNT;
		}
	}

};

SceneSubStageObjectTalk.prototype.afterDraw = function(){
	base_scene.prototype.draw.apply(this, arguments);

	// セリフ送り待機中は表示しない
	if(!this._next_to_serif_waiting_count) {
		// メッセージウィンドウ表示
		this._showMessageWindow();

		// メッセージ表示
		this._showMessage();
	}
};

// セリフウィンドウ表示
SceneSubStageObjectTalk.prototype._showMessageWindow = function(){
	var ctx = this.core.ctx;
	ctx.save();

	var fukidashi = this.core.image_loader.getImage('fukidashi');

	// ウィンドウの位置
	var message_window_pos = this._getMessageWindowPos();
	var x = message_window_pos.x;
	var y = message_window_pos.y;
	var is_reflect = message_window_pos.is_reflect;

	if (!x && !y) return;

	// ウィンドウの大きさ
	var scale = this._getMessageWindowScale();

	if(is_reflect) {
		x = -x; // 反転
		ctx.transform(-1, 0, 0, 1, fukidashi.width, 0); // 左右反転
	}

	ctx.drawImage(fukidashi,
		x,
		y,
		fukidashi.width * scale,
		fukidashi.height * scale
	);
	ctx.restore();
};

// セリフ表示
SceneSubStageObjectTalk.prototype._showMessage = function() {
	var ctx = this.core.ctx;

	// セリフ表示
	var lines = this._serif.lines();

	if (!lines.length) return;

	ctx.save();

	// セリフの色
	var font_color = Util.hexToRGBString("#d4c9aa");

	ctx.fillStyle = font_color;
	ctx.font = "18px 'OradanoGSRR'";
	ctx.textAlign = 'left';
	ctx.textBaseAlign = 'middle';

	var message_text_pos = this._getMessageTextPos();
	var x = message_text_pos.x;
	var y = message_text_pos.y;

	for(var i = 0, len = lines.length; i < len; i++) {
		y+= 30;
		ctx.fillText(lines[i], x, y); // 1行表示

	}
	// クリック待ちカーソル表示
	if (this._serif.isWaitingNext()) {

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

	ctx.restore();
};

// セリフ表示を右に表示させるかどうか
SceneSubStageObjectTalk.prototype._isShowRight = function(){
	var chara_name = this._serif.getChara();
	if (chara_name === "koishi") {
		var x = this.root().koishi.x();

		var scene_center_x = this.root().width / 2;

		if (x > scene_center_x) {
			return true;
		}
		else {
			return false;
		}
	}
	else if (chara_name === "me") {
		// オブジェクトが会話する場合
		// TODO:
		throw new Error("TODO:");
	}
	else {
		return false;
	}
};

// メッセージウィンドウの位置を取得
SceneSubStageObjectTalk.prototype._getMessageWindowPos = function(){
	var chara_name = this._serif.getChara();

	var is_reflect = !this._isShowRight();

	var x,y;

	if (chara_name === "koishi") {
		if(is_reflect) {
			x = this.root().koishi.x() - 550;
			y = this.root().koishi.y() - 330;
		}
		else {
			x = this.root().koishi.x() - 300;
			y = this.root().koishi.y() - 330;
		}
	}
	else if (chara_name === "me") {
		// オブジェクトが会話する場合
		// TODO:
		throw new Error("TODO:");
	}
	else {
		x = 0;
		y = 0;
	}

	return {
		is_reflect: is_reflect,
		x: x,
		y: y,
	};
};

// ウィンドウの大きさ
SceneSubStageObjectTalk.prototype._getMessageWindowScale = function(){
	var scale;
	if (this._serif.getSerifRowsCount() === 2) {
		scale = 0.5;
	}
	else {
		scale = 0.4;
	}
	return scale;
};

// メッセージテキストの開始位置を取得
SceneSubStageObjectTalk.prototype._getMessageTextPos = function(){
	var chara_name = this._serif.getChara();

	var is_reflect = !this._isShowRight();

	var x,y;

	if (chara_name === "koishi") {
		if(is_reflect) {
			x = this.root().koishi.x() + 80;
			y = this.root().koishi.y() - 290;
		}
		else {
			x = this.root().koishi.x() - 220;
			y = this.root().koishi.y() - 290;
		}

	}
	else if (chara_name === "me") {
		// オブジェクトが会話する場合
		// TODO:
		throw new Error("TODO:");
	}
	else {
		throw new Error("Unrecognized chara name: " . chara_name);
	}

	return {
		is_reflect: is_reflect,
		x: x,
		y: y,
	};
};




module.exports = SceneSubStageObjectTalk;
