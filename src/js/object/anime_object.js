'use strict';
var base_object = require('./ss_anime_base');
var Util = require('../hakurei').util;

// アニメの index は 0 固定
// TODO: 基底の ss_anime_base にも同じ定数が存在する
var DATA_INDEX = 0;

var ObjectAnimeObject = function(scene) {
	base_object.apply(this, arguments);

	this._json_anime_map = {};
};
Util.inherit(ObjectAnimeObject, base_object);

ObjectAnimeObject.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

};

ObjectAnimeObject.prototype.setAnime = function(data) {
	this._json_anime_map = data;
};

// 裏オブジェクト時のライトに照らされた アニメがあるかどうか
ObjectAnimeObject.prototype.hasBackOnLightedAnime = function() {
	return(
		this._json_anime_map.lighted_start_anime &&
		this._json_anime_map.lighting_anime &&
		this._json_anime_map.lighted_end_anime
	);
};

ObjectAnimeObject.prototype.MarginWidth = function(){
	if(this._width) return this._width;
	// index = 0 のみ有効
	return this._json_anime_map.default[DATA_INDEX].animation.MarginWidth;
};

ObjectAnimeObject.prototype.MarginHeight = function(){
	if(this._height) return this._height;
	// index = 0 のみ有効
	return this._json_anime_map.default[DATA_INDEX].animation.MarginHeight;
};

ObjectAnimeObject.prototype.jsonAnimeMap = function() {
	return this._json_anime_map;
};

ObjectAnimeObject.prototype.scaleWidth = function(){
	return 2/3;
};
ObjectAnimeObject.prototype.scaleHeight = function(){
	return 2/3;
};




module.exports = ObjectAnimeObject;
