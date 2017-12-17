'use strict';
var base_object = require('../../hakurei').object.sprite;
var Util = require('../../hakurei').util;
var CONSTANT = require('../../constant');

var ObjectEye = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectEye, base_object);

ObjectEye.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
	this.setPosition();
};

ObjectEye.prototype.onCollision = function(obj){
	if (this.scene.isUsingEye()) {
		// サードアイOff
		this.scene.switchEyeOff();
	}
	else {
		// サードアイOn
		this.scene.switchEyeOn();
	}
};

// クリックしてるときしか onCollision を呼ばない
ObjectEye.prototype.isCollision = function() {
	return this.core.input_manager.isLeftClickPush() ? true : false;
};

ObjectEye.prototype.setPosition = function(){
	this.x(1320 * 2/3);
	this.y(980 * 2/3);

};

ObjectEye.prototype.collisionWidth = function(){
	return 150;
};

ObjectEye.prototype.collisionHeight = function(){
	return 100;
};

ObjectEye.prototype.spriteName = function(){
	return "eye1";
};
ObjectEye.prototype.spriteIndices = function(){
	return [{x: 0, y: 0}];
};
ObjectEye.prototype.spriteWidth = function(){
	return 227;
};
ObjectEye.prototype.spriteHeight = function(){
	return 180;
};
ObjectEye.prototype.scaleHeight = function(){
	return 2/3;
};
ObjectEye.prototype.scaleWidth = function(){
	return 2/3;
};
module.exports = ObjectEye;
