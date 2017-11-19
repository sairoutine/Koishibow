'use strict';

var base_scene = require('../hakurei').scene.base;

var Util = require('../hakurei').util;
var CONSTANT = require('../constant');

var SceneHowto = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneHowto, base_scene);

SceneHowto.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	// フェードインする
	this.setFadeIn(60, "black");

	// イベント再生後はフェードアウトする
	this.setFadeOut(60, "black");
};


SceneHowto.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if(this.core.input_manager.isLeftClickPush()) {
		this.core.playSound("show_journal");
		this.core.changeScene("stage", "chapter0_myroom");
	}
};

// 画面更新
SceneHowto.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	ctx.save();
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, this.width, this.height);
	ctx.restore();

	ctx.save();

	var howto = this.core.image_loader.getImage("howto");

	ctx.translate(this.width/2, this.height/2);
	ctx.drawImage(howto,
					-howto.width*3/8,
					-howto.height*3/8,
					howto.width*3/4,
					howto.height*3/4);

	ctx.restore();
};
module.exports = SceneHowto;
