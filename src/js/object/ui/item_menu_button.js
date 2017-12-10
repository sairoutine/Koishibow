'use strict';
var base_object = require('../../hakurei').object.sprite;
var Util = require('../../hakurei').util;
var CONSTANT = require('../../constant');


var ObjectItemMenuButton = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectItemMenuButton, base_object);

ObjectItemMenuButton.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
	this.setPosition();
};

ObjectItemMenuButton.prototype.setPosition = function(){
	this.x(48 + 32);
	this.y(this.scene.height - 75);
};

ObjectItemMenuButton.prototype.onCollision = function(obj){
	this.core.audio_loader.playSound("open_menu");

	var scene_name = this.scene.current_scene;
	if (scene_name === "play") {
		// メニューを開く
		this.scene.changeSubScene("menu");
	}
	else if (scene_name === "menu") {
		// メニューを閉じる
		this.scene.changeSubScene("play");
	}
};

ObjectItemMenuButton.prototype.collisionWidth = function(){
	return 128;
};

ObjectItemMenuButton.prototype.collisionHeight = function(){
	return 128;
};

ObjectItemMenuButton.prototype.spriteName = function(){
	return "tool";
};
ObjectItemMenuButton.prototype.spriteIndices = function(){
	return [{x: 0, y: 0}];
};
ObjectItemMenuButton.prototype.spriteWidth = function(){
	return 260;
};
ObjectItemMenuButton.prototype.spriteHeight = function(){
	return 180;
};
ObjectItemMenuButton.prototype.scaleHeight = function(){
	return 2/3;
};
ObjectItemMenuButton.prototype.scaleWidth = function(){
	return 2/3;
};
module.exports = ObjectItemMenuButton;
