'use strict';
var base_object = require('./base');
var Util = require('../../hakurei').util;
var SS = require('../anime_object');
var AnimeMap = require('../../config/object_anime');

var ObjectAnimeImage = function(core) {
	base_object.apply(this, arguments);

	// アニメ
	this.ss = new SS(this.scene);
};
Util.inherit(ObjectAnimeImage, base_object);

ObjectAnimeImage.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
};
ObjectAnimeImage.prototype.setPosition = function(x, y) {
	base_object.prototype.setPosition.apply(this, arguments);

	// update sprite
	this.ss.x(this.x());
	this.ss.y(this.y());
};

ObjectAnimeImage.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);
	// 位置
	this.setPosition(data.x, data.y);

	this.ss.setAnime({
		default:     AnimeMap.koishi_button_wait,
		reaction_01: AnimeMap.koishi_button_reaction_01,
	});
	this.ss.init();
};


ObjectAnimeImage.prototype.isCollision = function(point) {
	// サードアイ使用中ならクリックしても調べられないので何もしない
	// 一度既にクリックしていれば、二度目はクリックできない
	return !this.scene.root().isUsingEye();
};

ObjectAnimeImage.prototype.beforeDraw = function() {
	base_object.prototype.beforeDraw.apply(this, arguments);

	this.ss.beforeDraw();
};



ObjectAnimeImage.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);

	this.ss.draw();
};

ObjectAnimeImage.prototype.afterDraw = function(){
	base_object.prototype.afterDraw.apply(this, arguments);

	this.ss.afterDraw();
};



ObjectAnimeImage.prototype.collisionWidth = function(){
	return this.ss.width();
};

ObjectAnimeImage.prototype.collisionHeight = function(){
	return this.ss.height();
};

// こいしに触られたときの処理
ObjectAnimeImage.prototype.onTouchByKoishi = function() {
	// 会話するオブジェクトなので、クリックしたら会話する
	this.scene.root().changeSubScene("talk_with_object", this._getSerif(), this);
};

// 会話で発生したリアクション
ObjectAnimeImage.prototype.actionByObject = function(action_name) {
	this.ss.playAnimationOnce(action_name);
};
ObjectAnimeImage.prototype.setWaitAnime = function() {
	this.ss.playAnimationInfinity("default");
};

module.exports = ObjectAnimeImage;
