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
	this._text_lines = [];

	var lines = text_data.split("\n");
	var self = this;
	lines.forEach(function(line) {
		self._text_lines = self._text_lines.concat(splitByLength(line, 22));
	});
	this._picture = picture_name;
};

function splitByLength(str, length) {
    var resultArr = [];
    if (!str || !length || length < 1) {
        return resultArr;
    }
    var index = 0;
    var start = index;
    var end = start + length;
    while (start < str.length) {
        resultArr[index] = str.substring(start, end);
        index++;
        start = end;
        end = start + length;
    }
    return resultArr;
}


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
	if(!this._picture) return;
	var ctx = this.core.ctx;

	ctx.save();

	var x = this.width/2 - 300/2;
	var y = 70;

	var picture = this.core.image_loader.getImage(this._picture);

	ctx.drawImage(picture,
					0,
					0,
					picture.width,
					picture.height,
					x,
					y,
					300,
					picture.height*300/picture.width);

	var clip = this.core.image_loader.getImage("paper_clip");

	ctx.drawImage(clip,
					this.width/2-clip.width/3,
					y - 5,
					clip.width*2/3,
					clip.height*2/3
	);



	ctx.restore();
};

// セリフ表示
SceneSubStageTalk.prototype._showMessage = function() {
	var ctx = this.core.ctx;
	ctx.save();

	// セリフの色
	var font_color = Util.hexToRGBString("#8B0000");

	ctx.fillStyle = font_color;
	ctx.font = "18px 'OradanoGSRR'";

	var x,y;
	if (this._picture) {
		x = 280;
		y = 260;
	}
	else {
		x = 280;
		y = 100;
	}
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
