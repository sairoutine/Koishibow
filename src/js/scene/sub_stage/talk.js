'use strict';
var base_scene = require('./base');
var Util = require('../../hakurei').util;

var SerifManager = require('../../hakurei').serif_manager;

var SceneSubStageTalk = function(core, stage) {
	base_scene.apply(this, arguments);

	this.serif = new SerifManager();
};
Util.inherit(SceneSubStageTalk, base_scene);

SceneSubStageTalk.prototype.init = function(serif_list){
	base_scene.prototype.init.apply(this, arguments);

	// クリック待ちカーソルの状態
	this._cursor_y = 0;
	this._cursor_reverse = false;

	// セリフデータの生成
	var serif_script = [];
	for (var i = 0, len = serif_list.length; i < len; i++) {
		var serif = serif_list[i];

		serif_script.push({"chara":"koishi","serif": serif});
	}

	this.serif.init(serif_script);


	this._serif_waiting_count = 0;
};

SceneSubStageTalk.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if(this._serif_waiting_count) {
		this._serif_waiting_count--;

		if (this._serif_waiting_count === 0) {
			// セリフを送る
			this.serif.next();
		}
	}

	if(this.core.input_manager.isLeftClickPush()) {
		if(this.serif.isEnd()) {
			this.mainStage().koishi().setWait();
			// セリフ終わり
			this.mainStage().changeSubScene("play");
		}
		else {
			this._serif_waiting_count = 6;
		}
	}

};

SceneSubStageTalk.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	ctx.save();

	if(!this._serif_waiting_count) {
		// メッセージウィンドウ表示
		this._showMessageWindow();

		// メッセージ表示
		this._showMessage();
	}

	ctx.restore();
};

// セリフ表示を右に表示させるかどうか
SceneSubStageTalk.prototype._isShowRight = function(){
	var x = this.koishi().x();

	var scene_center_x = this.mainStage().width / 2;

	if (x > scene_center_x) {
		return true;
	}
	else {
		return false;
	}
};

// セリフウィンドウ表示
SceneSubStageTalk.prototype._showMessageWindow = function(){
	var ctx = this.core.ctx;
	ctx.save();

	var x,y;
	if(!this._isShowRight()) {
		x = this.koishi().x() - 550;
		y = this.koishi().y() - 330;
	}
	else {
		x = this.koishi().x() - 300;
		y = this.koishi().y() - 330;
	}

	var fukidashi = this.core.image_loader.getImage('fukidashi');

	var width, height;
	if (this.serif.getSerifRowsCount() === 2) {
		height = fukidashi.height * 0.5;
	}
	else {
		height = fukidashi.height * 0.4;
	}

	if(!this._isShowRight()) {
		x = -x; // 反転
		ctx.transform(-1, 0, 0, 1, fukidashi.width, 0); // 左右反転
	}

	ctx.drawImage(fukidashi,
					x,
					y,
					fukidashi.width * 0.4,
					height
	);
	ctx.restore();
};

// セリフ表示
SceneSubStageTalk.prototype._showMessage = function() {
	var ctx = this.core.ctx;
	ctx.save();

	// セリフの色
	var font_color = Util.hexToRGBString("#d4c9aa");

	ctx.fillStyle = font_color;
	ctx.font = "18px 'OradanoGSRR'";
	ctx.textAlign = 'left';
	ctx.textBaseAlign = 'middle';

	var x,y;
	if(!this._isShowRight()) {
		x = this.koishi().x() + 80;
		y = this.koishi().y() - 290;
	}
	else {
		x = this.koishi().x() - 220;
		y = this.koishi().y() - 290;
	}

	// セリフ表示
	var lines = this.serif.lines();
	if (lines.length) {
		for(var i = 0, len = lines.length; i < len; i++) {
			y+= 30;
			ctx.fillText(lines[i], x, y); // 1行表示

		}
		// クリック待ちカーソル
		if (this.serif.isWaitingNext()) {

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
				x + lines[lines.length-1].length*18,
				y - 18 + 2 + this._cursor_y,
				cursor.width*2/3,
				cursor.height*2/3
			);
		}
	}

	ctx.restore();
};

module.exports = SceneSubStageTalk;
