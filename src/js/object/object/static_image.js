'use strict';
var base_object = require('../../hakurei').object.base;
var Util = require('../../hakurei').util;

var ObjectStaticImage = function(core) {
	base_object.apply(this, arguments);

	// 画像オブジェクト
	this.image = null;

	// 画像の拡縮
	this.scale = 1;
};
Util.inherit(ObjectStaticImage, base_object);

ObjectStaticImage.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this.image = null;
	this.scale = 1;
};
ObjectStaticImage.prototype.addImage = function(image_name, scale){
	this.image = this.core.image_loader.getImage(image_name);
	this.scale = scale || 1;
};

ObjectStaticImage.prototype.onCollision = function(obj){
	// TODO:
	// 会話するオブジェクトなので、クリックしたら会話する
	//this.scene.mainStage().changeSubScene("talk");
};

ObjectStaticImage.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	if (!this.image) return;
	var ctx = this.core.ctx;
	var image = this.image;

	// 背景描画
	ctx.save();
	ctx.translate(this.x(), this.y());
	ctx.drawImage(image,
					-image.width*this.scale/2,
					-image.height*this.scale/2,
					image.width * this.scale,
					image.height * this.scale);
	ctx.restore();
};



ObjectStaticImage.prototype.collisionWidth = function(){
	return this.image.width * this.scale;
};

ObjectStaticImage.prototype.collisionHeight = function(){
	return this.image.height * this.scale;
};

module.exports = ObjectStaticImage;
