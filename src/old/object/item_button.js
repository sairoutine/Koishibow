'use strict';
var base_object = require('../hakurei').object.sprite;
var Util = require('../hakurei').util;
var CONSTANT = require('../constant');

var ObjectItemButton = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectItemButton, base_object);

ObjectItemButton.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
	this.setPosition();
};

ObjectItemButton.prototype.setPosition = function(){
	this.x(48 + 32);
	this.y(this.scene.mainStage().height - 75);
};

ObjectItemButton.prototype.onCollision = function(obj){
	this.core.playSound("open_menu");

	var scene_name = this.scene.mainStage().current_scene;
	if (scene_name === "play") {
		// メニューを開く
		this.scene.mainStage().changeSubScene("menu");
	}
	else if (scene_name === "menu") {
		// メニューを閉じる
		this.scene.mainStage().changeSubScene("play");
	}
};

ObjectItemButton.prototype.collisionWidth = function(){
	return 128;
};

ObjectItemButton.prototype.collisionHeight = function(){
	return 128;
};

ObjectItemButton.prototype.spriteName = function(){
	return "tool";
};
ObjectItemButton.prototype.spriteIndices = function(){
	return [{x: 0, y: 0}];
};
ObjectItemButton.prototype.spriteWidth = function(){
	return 260;
};
ObjectItemButton.prototype.spriteHeight = function(){
	return 180;
};
ObjectItemButton.prototype.scaleHeight = function(){
	return 0.6;
};
ObjectItemButton.prototype.scaleWidth = function(){
	return 0.6;
};
module.exports = ObjectItemButton;
