'use strict';

// タイトル画面の放置演出

var base_scene = require('../hakurei').scene.base;

var Util = require('../hakurei').util;

var SceneHowto = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneHowto, base_scene);

SceneHowto.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	this.core.audio_loader.stopBGM();
	this.core.audio_loader.playSound("leaving_title");
};


SceneHowto.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if (this.frame_count === 85 * 60 - 60) {
		this.core.scene_manager.changeScene("title");
	}
};

// 画面更新
SceneHowto.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	ctx.save();

	var image = this.core.image_loader.getImage("leaving_title");

	ctx.drawImage(image,
		0,
		0,
		image.width,
		image.height,
		0,
		0,
		this.width,
		this.height
	);

	ctx.restore();
};
module.exports = SceneHowto;
