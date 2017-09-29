'use strict';

var base_object = require('../hakurei').object.base;
var util = require('../hakurei').util;
var CONSTANT = require('../hakurei').constant;

var SsaPlayer = require('../vendor/SsaPlayer/src/SsaPlayer');
var SsImageList = SsaPlayer.SsImageList;
var SsAnimation = SsaPlayer.SsAnimation;
var SsSprite = SsaPlayer.SsSprite;

var SpriteStudio = function(scene) {
	base_object.apply(this, arguments);
};
util.inherit(SpriteStudio, base_object);

SpriteStudio.prototype.init = function(x, y, jsonData, data_index, opt){
	base_object.prototype.init.apply(this, arguments);
	this.x(x);
	this.y(y);
	data_index = data_index || 0;

	this.scale_size = opt && opt.scale ? opt.scale : 1.0;
	this.width = jsonData[data_index].animation.CanvasWidth;
	this.height = jsonData[data_index].animation.CanvasHeight;

	this.is_reflect = false;

	// TODO: preload
	this.imageList = new SsImageList(jsonData[data_index].images, "./image/", true);
	this.animation = new SsAnimation(jsonData[data_index].animation, this.imageList);

	var ss = new SsSprite(this.animation);

	this.sprite = ss;
};

SpriteStudio.prototype.changeAnimation = function(jsonData){
	var data_index = 0;
	this.width = jsonData[data_index].animation.CanvasWidth;
	this.height = jsonData[data_index].animation.CanvasHeight;

	this.animation = new SsAnimation(jsonData[data_index].animation, this.imageList);

	this.sprite.setAnimation(this.animation);

};





SpriteStudio.prototype.beforeDraw = function(){
	base_object.prototype.beforeDraw.apply(this, arguments);

	// update ss state
	this.sprite.rootScaleX = this.scaleWidth();
	this.sprite.rootScaleY = this.scaleHeight();
	this.sprite.x = this.width/2;
	this.sprite.y = this.height/2;
};

// 画面更新
SpriteStudio.prototype.draw = function(){
	if (!this.isShow()) return;
	var ctx = this.core.ctx;

	// create canvas
	var canvas = document.createElement('canvas');
	canvas.width  = this.width;
	canvas.height = this.height;
	var ctx2 = canvas.getContext('2d');
	var t = new Date().getTime();
	this.sprite.draw(ctx2, t);


	// draw
	ctx.save();
	ctx.translate(this.x(), this.y());
	if (this.isReflect()) {
		ctx.transform(-1, 0, 0, 1, 0, 0);
	}
	ctx.drawImage(canvas, -this.width/2, -this.height/2);

	ctx.restore();
};

SpriteStudio.prototype.isShow = function(){
	return true;
};
SpriteStudio.prototype.scaleWidth = function(){
	return this.scale_size;
};
SpriteStudio.prototype.scaleHeight = function(){
	return this.scale_size;
};
SpriteStudio.prototype.isReflect = function(){
	return this.is_reflect;
};

SpriteStudio.prototype.setReflect = function(flag){
	this.is_reflect = flag;
};

// TODO:
SpriteStudio.prototype.alpha = function() {
	return 1.0;
};

module.exports = SpriteStudio;
