'use strict';

var base_scene = require('../hakurei').scene.base;

var Util = require('../hakurei').util;
var CONSTANT = require('../constant');

var SceneEvent = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneEvent, base_scene);

SceneEvent.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	// フェードインする
	this.setFadeIn(120, "black");

	// イベント再生後はフェードアウトする
	this.setFadeOut(120, "black");
};


SceneEvent.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if(this.frame_count === 240) {
		this.core.changeScene("title");
	}
};

// 画面更新
SceneEvent.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);

	var ctx = this.core.ctx;

	ctx.save();

	var title_bg = this.core.image_loader.getImage("tobecontinued");

	ctx.drawImage(title_bg,
					0,
					0,
					title_bg.width,
					title_bg.height,
					0,
					0,
					this.core.width,
					this.core.height);

	ctx.restore();


};
module.exports = SceneEvent;
