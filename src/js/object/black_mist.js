'use strict';
var base_object = require('./ss_anime_base');
var Util = require('../hakurei').util;

var jsonDataOfBlackMist = require('../data/anime/black_mist/eff01_anime_1');
var jsonDataOfRedMist = require('../data/anime/black_mist/eff02_anime_1');

var ObjectBlackMist = function(scene) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectBlackMist, base_object);

ObjectBlackMist.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
	this.setPosition();
};



ObjectBlackMist.prototype.beforeDraw = function(){
	// 3rd eye 使用中かどうかでアニメーションが違う
	if (this.scene.isUsingEye() && this.current_anime === "default") {
		this.playAnimationInfinity("using_eye");
	}
	else if (!this.scene.isUsingEye() && this.current_anime === "using_eye") {
		this.playAnimationInfinity("default");
	}

	base_object.prototype.beforeDraw.apply(this, arguments);
};

ObjectBlackMist.prototype.setPosition = function(){
	// 画面中央が基準位置
	this.x(this.scene.width/2);
	this.y(this.scene.height/2);
};

ObjectBlackMist.prototype.jsonAnimeMap = function() {
	return {
		default: jsonDataOfBlackMist,
		using_eye: jsonDataOfRedMist,
	};
};
ObjectBlackMist.prototype.scaleWidth = function(){
	return 2/3;
};
ObjectBlackMist.prototype.scaleHeight = function(){
	return 2/3;
};




module.exports = ObjectBlackMist;
