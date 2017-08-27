'use strict';
var base_scene = require('./base');
var Util = require('../../hakurei').util;

var SerifManager = require('../../hakurei').serif_manager;
var serif_script = require("../../serif/objects/1"); // rename objects -> pieces

var SceneSubStageTalk = function(core, stage) {
	base_scene.apply(this, arguments);

	this.serif = new SerifManager();
};
Util.inherit(SceneSubStageTalk, base_scene);

SceneSubStageTalk.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	this.serif.init(serif_script); // TODO: 他のセリフにも対応
};

SceneSubStageTalk.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if(this.core.input_manager.isLeftClickPush()) {
		if(this.serif.is_end()) {
			// セリフ終わり
			this.mainStage().changeSubScene("play");
		}
		else {
			// セリフを送る
			this.serif.next();
		}
	}

};

SceneSubStageTalk.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	ctx.save();

	// メッセージウィンドウ表示
	this._showMessageWindow();

	// メッセージ表示
	this._showMessage();

	ctx.restore();
};



// セリフウィンドウ表示
SceneSubStageTalk.prototype._showMessageWindow = function(){
	var ctx = this.core.ctx;
	ctx.save();

	var x = this.koishi().x() - 0;
	var y = this.koishi().y() - 330;

	var fukidashi = this.core.image_loader.getImage('fukidashi');

	// TODO: 実装
	if(false) {
		x = -x; // 反転
		ctx.transform(-1, 0, 0, 1, fukidashi.width, 0); // 左右反転
	}

	ctx.drawImage(fukidashi,
					x,
					y,
					fukidashi.width * 0.4,
					fukidashi.height * 0.4
	);
	ctx.restore();
};

// セリフ表示
SceneSubStageTalk.prototype._showMessage = function() {
	var ctx = this.core.ctx;
	ctx.save();

	/*
	// セリフの色
	var font_color = this.serif.font_color();
	if(font_color) {
		font_color = util.hexToRGBString(font_color);
	}
	else {
		font_color = 'rgb(255, 255, 255)';
	}
	*/

	ctx.font = "18px 'OradanoGSRR'";
	ctx.textAlign = 'left';
	ctx.textBaseAlign = 'middle';

	var x = this.koishi().x() + 20;
	var y = this.koishi().y() - 300;

	x = x + 60;
	// セリフ表示
	var lines = this.serif.lines();
	if (lines.length) {
		// セリフテキストの y 座標初期位置
		y = y + 40;

		for(var i = 0, len = lines.length; i < len; i++) {
			ctx.fillStyle = "black";
			ctx.fillText(lines[i], x, y); // 1行表示

			y+= 30;
		}
	}

	ctx.restore();
};




module.exports = SceneSubStageTalk;
