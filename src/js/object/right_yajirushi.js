'use strict';
var base_object = require('../hakurei').object.sprite;
var Util = require('../hakurei').util;
var CONSTANT = require('../constant');

var ObjectRightYajirushi = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectRightYajirushi, base_object);

ObjectRightYajirushi.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
	this.setPosition();
};

ObjectRightYajirushi.prototype.setPosition = function(){
	this.x(this.scene.mainStage().width - 48);
	this.y(this.scene.mainStage().height/2);
};

ObjectRightYajirushi.prototype.onCollision = function(obj){
	// フィールド遷移
	this.scene.mainStage().setFadeOut(30, "black");
	this.core.changeScene("stage", this.scene.mainStage().field().right_field, false);
};

ObjectRightYajirushi.prototype.collisionWidth = function(){
	return 128;
};

ObjectRightYajirushi.prototype.collisionHeight = function(){
	return 128;
};

ObjectRightYajirushi.prototype.spriteName = function(){
	return "arrow";
};
ObjectRightYajirushi.prototype.spriteIndices = function(){
	return [{x: 0, y: 0}];
};
ObjectRightYajirushi.prototype.spriteWidth = function(){
	return 136;
};
ObjectRightYajirushi.prototype.spriteHeight = function(){
	return 124;
};

ObjectRightYajirushi.prototype.scaleHeight = function(){
	return 0.6;
};
ObjectRightYajirushi.prototype.scaleWidth = function(){
	return 0.6;
};

module.exports = ObjectRightYajirushi;
