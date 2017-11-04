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

SceneSubStageTalk.prototype.init = function(serif_list){
	base_scene.prototype.init.apply(this, arguments);

	// セリフデータの生成
	var serif_script = [];
	for (var i = 0, len = serif_list.length; i < len; i++) {
		var serif = serif_list[i];

		serif_script.push({"chara":"koishi","serif": serif});
	}

	this.serif.init(serif_script);
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

	if(!this._isShowRight()) {
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

	// セリフの色
	var font_color = Util.hexToRGBString("#d4c9aa");

	ctx.fillStyle = font_color;
	ctx.font = "18px 'OradanoGSRR'";
	ctx.textAlign = 'left';
	ctx.textBaseAlign = 'middle';

	var x,y;
	if(!this._isShowRight()) {
		x = this.koishi().x() + 80;
		y = this.koishi().y() - 300;
	}
	else {
		x = this.koishi().x() - 220;
		y = this.koishi().y() - 300;
	}

	// セリフ表示
	var lines = this.serif.lines();
	if (lines.length) {
		// セリフテキストの y 座標初期位置
		y = y + 40;

		for(var i = 0, len = lines.length; i < len; i++) {
			ctx.fillText(lines[i], x, y); // 1行表示

			y+= 30;
		}
	}

	ctx.restore();
};




module.exports = SceneSubStageTalk;
