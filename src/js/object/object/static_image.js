'use strict';
var base_object = require('./base');
var Util = require('../../hakurei').util;

var ObjectStaticImage = function(core) {
	base_object.apply(this, arguments);

	// 画像オブジェクト
	this.image = null;

	// 画像の拡縮
	this.scale = 1;

	this.serif = null;

	this._width  = null;
	this._height = null;

	this._action_name = null;

	this._sound_name  = null;
};
Util.inherit(ObjectStaticImage, base_object);

ObjectStaticImage.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this.image = null;
	this.scale = 1;
	this.serif = null;

	this._width  = null;
	this._height = null;

	this._action_name = null;

	this._sound_name  = null;
};
ObjectStaticImage.prototype.addImage = function(image_name, scale){
	this.image = this.core.image_loader.getImage(image_name);
	this.scale = scale || 1;
};
ObjectStaticImage.prototype.addSerif = function(serif) {
	this.serif = serif;
};
ObjectStaticImage.prototype.addSize = function(width, height){
	this._width  = width;
	this._height = height;
};
ObjectStaticImage.prototype.addKoishiAction = function(action_name){
	this._action_name  = action_name;
};
ObjectStaticImage.prototype.addSound = function(sound_name){
	this._sound_name  = sound_name;
};



ObjectStaticImage.prototype.onCollision = function(obj){
	this.scene.mainStage().koishi().setMoveTargetObject(obj, this);
	this.scene.mainStage().koishi().setAfterMoveCallback(Util.bind(this.onCollisionAfterKoishiWalk, this));
};


ObjectStaticImage.prototype.onCollisionAfterKoishiWalk = function(){
	// 会話するオブジェクトなので、クリックしたら会話する
	this.scene.mainStage().changeSubScene("talk", this.serif);

	// こいしのアクション
	if (this._action_name) {
		this.scene.mainStage().koishi().actionByName(this._action_name);
	}

	// 音を再生
	if (this._sound_name) {
		this.core.playSound(this._sound_name);
	}
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
	if(this._width) return this._width;
	return this.image.width * this.scale;
};

ObjectStaticImage.prototype.collisionHeight = function(){
	if(this._height) return this._height;
	return this.image.height * this.scale;
};

module.exports = ObjectStaticImage;
