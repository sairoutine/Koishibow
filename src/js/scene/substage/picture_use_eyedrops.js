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

	this._pos_x = -this.root().width/2;
};
SceneSubStageJournal.prototype.update = function(){
	base_scene.prototype.update.apply(this, arguments);

	if(this.frame_count <= 15) {
		this._pos_x += this.root().width/15;
	}
	else if(this.frame_count === 30) {
		this.core.audio_loader.playSound("use_eyedrops");
	}
	else if(this.frame_count <= 150) {
		// 何もしない
	}
	else if(this.frame_count <= 165) {
		this._pos_x += this.root().width/15;
	}
	// プレイに戻る
	else if(this.frame_count > 180) {
		this.root().changeSubScene("play");
	}
};

SceneSubStageJournal.prototype.afterDraw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	ctx.save();

	var picture = this.core.image_loader.getImage("picture_use_eyedrops");

	var width = picture.width * 2/3;
	var height = picture.height * 2/3;

	ctx.translate(this._pos_x, this.root().height/2);
	ctx.drawImage(picture,
		-width/2,
		-height/2,
		width,
		height
	);

	ctx.restore();

};
module.exports = SceneSubStageJournal;
