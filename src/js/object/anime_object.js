'use strict';
var base_object = require('./ss_anime_base');
var Util = require('../hakurei').util;

// TODO: フィールドのアニメオブジェクトで使うのは anime_object
// それ以外のアニメ用途で使う場合は、ss_anime と名付ける方がよい？
// 具体的には(hasBackOnLightedAnime, hasFrontClickedAnime)がここにあるのが不適切なので

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
ObjectAnimeObject.prototype.addAnime = function(name, data) {
	this._json_anime_map[name] = data;
};



// 裏オブジェクト時のライトに照らされた アニメがあるかどうか
ObjectAnimeObject.prototype.hasBackOnLightedAnime = function() {
	return(
		this._json_anime_map.lighted_start_anime &&
		this._json_anime_map.lighting_anime &&
		this._json_anime_map.lighted_end_anime
	);
};

// 表オブジェクト時のクリックされたときの アニメがあるかどうか
ObjectAnimeObject.prototype.hasFrontClickedAnime = function() {
	return(
		this._json_anime_map.front_clicking_anime &&
		this._json_anime_map.front_after_click_anime
	);
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
