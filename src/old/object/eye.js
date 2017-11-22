'use strict';
var base_object = require('../hakurei').object.sprite;
var Util = require('../hakurei').util;
var CONSTANT = require('../constant');

var ObjectEye = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectEye, base_object);

ObjectEye.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
	this.setPosition();
};

ObjectEye.prototype.onCollision = function(obj){
	var stage = this.scene.mainStage();


	if (stage.isUsingEye()) {
		// サードアイOff
		stage.unUseEye();
	}
	else {
		// サードアイOn
		stage.useEye();
	}
};


ObjectEye.prototype.setPosition = function(){
	this.x(this.scene.mainStage().width - 48 - 20);
	this.y(this.scene.mainStage().height - 70);
};

ObjectEye.prototype.collisionWidth = function(){
	return 200;
};

ObjectEye.prototype.collisionHeight = function(){
	return 160;
};

ObjectEye.prototype.spriteName = function(){
	return "eye";
};
ObjectEye.prototype.spriteIndices = function(){
	return [{x: 0, y: 0}];
};
ObjectEye.prototype.spriteWidth = function(){
	return 260;
};
ObjectEye.prototype.spriteHeight = function(){
	return 180;
};
ObjectEye.prototype.scaleHeight = function(){
	return 0.8;
};
ObjectEye.prototype.scaleWidth = function(){
	return 0.8;
};
module.exports = ObjectEye;
