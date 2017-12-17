'use strict';

// TODO: use_eyedrops だけでなく、picture クラス(指定の1枚絵を表示する)
// としてしまっていいかも

var base_scene = require('./base');

var Util = require('../../hakurei').util;

var SceneSubStageJournal = function(core) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneSubStageJournal, base_scene);

SceneSubStageJournal.prototype.init = function(picture_name){
	base_scene.prototype.init.apply(this, arguments);

	this._pos_x = -this.root().width;
};

SceneSubStageJournal.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if(this.frame_count < 30) {
		this._pos_x += this.root().width/30;
	}
	else if(this.frame_count < 90) {
		// 何もしない
	}
	else if(this.frame_count < 120) {
		this._pos_x += this.root().width/30;
	}
	// プレイに戻る
	else if(this.frame_count > 120) {
		this.core.audio_loader.playSound("use_eyedrops");
		this.root().changeSubScene("play");
	}
};

SceneSubStageJournal.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	ctx.save();

	var picture = this.core.image_loader.getImage("picture_use_eyedrops");

	var width = picture.width * 2/3;
	var height = picture.height * 2/3;

	ctx.translate(this.root().width/2 + this._pos_x, this.root().height/2);
	ctx.drawImage(picture,
		-width/2,
		-height/2,
		width,
		height
	);

	ctx.restore();

};
module.exports = SceneSubStageJournal;
