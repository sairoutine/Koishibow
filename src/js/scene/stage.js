'use strict';

var base_scene = require('../hakurei').scene.base;
var util = require('../hakurei').util;
var CONSTANT = require('../hakurei').constant;
var Koishi = require('../object/koishi');

var SceneStage = function(core) {
	base_scene.apply(this, arguments);

	this.koishi = new Koishi(this);
	this.koishi.init(180, 360);
};
util.inherit(SceneStage, base_scene);

SceneStage.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);
	// 左クリックしたところを取得
	// TODO: 移動
	if(this.core.input_manager.isLeftClickPush()) {
		console.log(this.core.input_manager.mousePositionX(), this.core.input_manager.mousePositionY());
	}

	this.koishi.beforeDraw();
};

// 画面更新
SceneStage.prototype.draw = function(){
	this.core.clearCanvas();
	var ctx = this.core.ctx;


	var title_bg = this.core.image_loader.getImage('bg');
	ctx.save();
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
	this.koishi.draw();
};

module.exports = SceneStage;
