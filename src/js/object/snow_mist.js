'use strict';

// chapter3のみ画面全体で降っている雪

var base_object = require('./ss_anime_base');
var Util = require('../hakurei').util;

var jsonDataOfSnowMist = require('../data/anime/snow_mist/eff01_anime_1');

var ObjectSnowMist = function(scene) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectSnowMist, base_object);

ObjectSnowMist.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
	this.setPosition();
};



ObjectSnowMist.prototype.update = function(){
	base_object.prototype.update.apply(this, arguments);
};

ObjectSnowMist.prototype.setPosition = function(){
	// 画面中央が基準位置
	this.x(this.scene.width/2);
	this.y(this.scene.height/2);
};

ObjectSnowMist.prototype.jsonAnimeMap = function() {
	return {
		default: jsonDataOfSnowMist,
	};
};
ObjectSnowMist.prototype.scaleWidth = function(){
	return 2/3;
};
ObjectSnowMist.prototype.scaleHeight = function(){
	return 2/3;
};

ObjectSnowMist.prototype.isShow = function(){
	// chapter3 で
	if(this.scene.getChapterNo() !== 3) {
		return false;
	}
	// かつ室内でなければ
	else if (
		this.scene.getFieldData().key() === "chapter3_01" ||
		this.scene.getFieldData().key() === "chapter3_02" ||
		this.scene.getFieldData().key() === "chapter3_03" ||
		this.scene.getFieldData().key() === "chapter3_04" ||
		this.scene.getFieldData().key() === "chapter3_05" ||
		this.scene.getFieldData().key() === "chapter3_06"
	) {
		return false;
	}

	return true;
};

module.exports = ObjectSnowMist;
