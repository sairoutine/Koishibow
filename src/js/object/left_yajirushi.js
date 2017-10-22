'use strict';
var base_object = require('../hakurei').object.sprite;
var Util = require('../hakurei').util;
var CONSTANT = require('../constant');

var ObjectLeftYajirushi = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectLeftYajirushi, base_object);

ObjectLeftYajirushi.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
	this.setPosition();
};

ObjectLeftYajirushi.prototype.onCollision = function(obj){
	// フィールド遷移
	this.scene.mainStage().setFadeOut(30, "black");
	this.core.changeScene("stage", this.scene.mainStage().field().left_field, true);
};

ObjectLeftYajirushi.prototype.setPosition = function(){
	this.x(48);
	this.y(this.scene.mainStage().height/2);
};

ObjectLeftYajirushi.prototype.collisionWidth = function(){
	return 128;
};

ObjectLeftYajirushi.prototype.collisionHeight = function(){
	return 128;
};

ObjectLeftYajirushi.prototype.spriteName = function(){
	return "arrow";
};
ObjectLeftYajirushi.prototype.spriteIndices = function(){
	return [{x: 0, y: 0}];
};
ObjectLeftYajirushi.prototype.spriteWidth = function(){
	return 136;
};
ObjectLeftYajirushi.prototype.spriteHeight = function(){
	return 124;
};
ObjectLeftYajirushi.prototype.scaleHeight = function(){
	return 0.6;
};
ObjectLeftYajirushi.prototype.scaleWidth = function(){
	return 0.6;
};
ObjectLeftYajirushi.prototype.isReflect = function(){
	return true;
};

module.exports = ObjectLeftYajirushi;
