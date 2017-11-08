'use strict';
var base_scene = require('./base');
var Util = require('../../hakurei').util;

var SerifManager = require('../../hakurei').serif_manager;

var SceneSubStageTalk = function(core, stage) {
	base_scene.apply(this, arguments);

	this._text_lines = [];

	this._picture = null;

};
Util.inherit(SceneSubStageTalk, base_scene);

SceneSubStageTalk.prototype.init = function(text_data, picture_name){
	base_scene.prototype.init.apply(this, arguments);
	this._text_lines = text_data.split("\n");

	this._picture = picture_name;
};

SceneSubStageTalk.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	// プレイに戻る
	if(this.core.input_manager.isLeftClickPush()) {
		this.core.playSound("show_journal");
		this.mainStage().changeSubScene("play");
	}
};

SceneSubStageTalk.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	// メッセージウィンドウ表示
	this._showMessageWindow();

	// ピクチャ表示
	this._showPicture();

	// メッセージ表示
	this._showMessage();
};

// セリフウィンドウ表示
SceneSubStageTalk.prototype._showMessageWindow = function(){
	var ctx = this.core.ctx;
	ctx.save();

	var paper_open = this.core.image_loader.getImage('paper_open');

	ctx.translate(this.mainStage().width/2, this.mainStage().height/2);
	ctx.drawImage(paper_open,
					-paper_open.width/3,
					-paper_open.height/3,
					paper_open.width * 2/3,
					paper_open.height * 2/3
	);
	ctx.restore();
};

// ピクチャ表示
SceneSubStageTalk.prototype._showPicture = function() {
	// TODO:
};

// セリフ表示
SceneSubStageTalk.prototype._showMessage = function() {
	var ctx = this.core.ctx;
	ctx.save();

	// セリフの色
	var font_color = Util.hexToRGBString("#8B0000");

	ctx.fillStyle = font_color;
	ctx.font = "18px 'OradanoGSRR'";

	var x = 280;
	var y = 100;

	// セリフ表示
	var lines = this._text_lines;
	if (lines.length) {
		for(var i = 0, len = lines.length; i < len; i++) {
			y+= 30;
			ctx.fillText(lines[i], x, y); // 1行表示

		}
	}

	ctx.restore();
};

module.exports = SceneSubStageTalk;
