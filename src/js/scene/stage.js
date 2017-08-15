'use strict';

var base_scene = require('../hakurei').scene.base;
var util = require('../hakurei').util;
var CONSTANT = require('../hakurei').constant;

var jsonData = require('../animetest');
var SsaPlayer = require('../vendor/SsaPlayer');
var SsImageList = SsaPlayer.SsImageList;
var SsAnimation = SsaPlayer.SsAnimation;
var SsSprite = SsaPlayer.SsSprite;

var SceneStage = function(core) {
	base_scene.apply(this, arguments);
};
util.inherit(SceneStage, base_scene);

SceneStage.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	var data = jsonData;

	var data_index = 0;

	var imageList = new SsImageList(data[data_index].images, "./image/", true);
	var animation = new SsAnimation(data[data_index].animation, imageList);

	var sp1 = new SsSprite(animation);

	sp1.x = 180;
	sp1.y = 360;
	sp1.rootScaleX = 0.4;
	sp1.rootScaleY = 0.4;

	this.sprite = sp1;
};




SceneStage.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);


	// 左クリックしたところを取得
	// TODO: 移動
	if(this.core.input_manager.isLeftClickPush()) {
		console.log(this.core.input_manager.mousePositionX(), this.core.input_manager.mousePositionY());
	}
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

	ctx.save();
	var t = new Date().getTime();
	this.sprite.draw(ctx, t);
	ctx.restore();
};

module.exports = SceneStage;
