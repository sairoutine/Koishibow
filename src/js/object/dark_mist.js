'use strict';

// chapter4 or フィールド chapter5_02 のみ画面全体を覆う黒い霧

var base_object = require('./ss_anime_base');
var Util = require('../hakurei').util;

var jsonDataOfDarkMist = require('../data/anime/dark-mist/eff01_anime_1');

var ObjectBlackMist = function(scene) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectBlackMist, base_object);

ObjectBlackMist.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
	this.setPosition();
};



ObjectBlackMist.prototype.update = function(){
	base_object.prototype.update.apply(this, arguments);
};

ObjectBlackMist.prototype.setPosition = function(){
	// 画面中央が基準位置
	this.x(this.scene.width/2);
	this.y(this.scene.height/2);
};

ObjectBlackMist.prototype.jsonAnimeMap = function() {
	return {
		default: jsonDataOfDarkMist,
	};
};
ObjectBlackMist.prototype.scaleWidth = function(){
	return 2/3;
};
ObjectBlackMist.prototype.scaleHeight = function(){
	return 2/3;
};

ObjectBlackMist.prototype.isShow = function(){
	return this.scene.getChapterNo() === 4 || this.scene.getFieldData().key() === "chapter5_02";
};

module.exports = ObjectBlackMist;