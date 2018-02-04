'use strict';

// 3rd eye の使いすぎによるゲームオーバー

var base_scene = require('../hakurei').scene.base;

var Util = require('../hakurei').util;

var SceneGameover = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneGameover, base_scene);

SceneGameover.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	this.core.audio_loader.stopBGM();
};


SceneGameover.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if (this.frame_count === 60 * 5) {
		this.core.changeScene("title");
	}
};

SceneGameover.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	ctx.save();
	ctx.fillStyle = 'black';
	//ctx.globalAlpha = 0.5;
	ctx.fillRect(0, 0, this.width, this.height);

	ctx.restore();
};
module.exports = SceneGameover;
