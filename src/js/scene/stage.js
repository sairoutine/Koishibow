'use strict';

var base_scene = require('../hakurei').scene.base;
var util = require('../hakurei').util;
var CONSTANT = require('../hakurei').constant;

var jsonData = require('../animetest');
var SS = require('../object/sprite_studio');

var SceneStage = function(core) {
	base_scene.apply(this, arguments);

	this.sprite = new SS(this);
	this.sprite.init(180, 360, jsonData, 0, {scale: 0.4, width: 200, height: 500});
};
util.inherit(SceneStage, base_scene);

SceneStage.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);
};




SceneStage.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);
	// 左クリックしたところを取得
	// TODO: 移動
	if(this.core.input_manager.isLeftClickPush()) {
		console.log(this.core.input_manager.mousePositionX(), this.core.input_manager.mousePositionY());
	}

	this.sprite.beforeDraw();
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
	this.sprite.draw();
};

module.exports = SceneStage;
