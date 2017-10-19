'use strict';
var base_object = require('../../hakurei').object.base;
var Util = require('../../hakurei').util;
var SS = require('../sprite_studio');
var AnimeMap = require('../../anime');

var ObjectAnimeImage = function(core) {
	base_object.apply(this, arguments);

	// 拡縮
	this.scale = 1;

	this.before_anime = null;
	this.click_anime  = null;
	this.after_anime  = null;

	this.serif = null;

	// アニメ
	this.sprite = new SS(this.scene);
};
Util.inherit(ObjectAnimeImage, base_object);

ObjectAnimeImage.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this.scale = 1;
	this.before_anime = null;
	this.click_anime  = null;
	this.after_anime  = null;
	this.serif = null;
};
ObjectAnimeImage.prototype.setPosition = function(x, y) {
	base_object.prototype.setPosition.apply(this, arguments);

	this.sprite.init(x, y, this.before_anime, 0, {scale: this.scale});

	// update sprite
	this.sprite.x(this.x());
	this.sprite.y(this.y());
};

ObjectAnimeImage.prototype.addAnime = function(before_anime, click_anime, after_anime, scale){
	this.scale = scale || 1;
	this.before_anime = AnimeMap[before_anime];
	this.click_anime  = AnimeMap[click_anime];
	this.after_anime  = AnimeMap[after_anime];
};
ObjectAnimeImage.prototype.addSerif = function(serif) {
	this.serif = serif;
};




ObjectAnimeImage.prototype.onCollision = function(obj){
	var self = this;

	// オブジェクトのアニメーション
	var sprite = self.sprite;
	var after_anime = self.after_anime;
	var click_anime = self.click_anime;
	sprite.playAnimationOnce(click_anime, function (){
		sprite.changeAnimation(after_anime);
	});

	// 会話するオブジェクトなので、クリックしたら会話する
	this.scene.mainStage().changeSubScene("talk", this.serif);
};

ObjectAnimeImage.prototype.beforeDraw = function(x, y) {
	base_object.prototype.beforeDraw.apply(this, arguments);
	this.sprite.beforeDraw();
};



ObjectAnimeImage.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	this.sprite.draw();
};


ObjectAnimeImage.prototype.collisionWidth = function(){
	// index = 0 のみ有効
	return this.before_anime[0].animation.CanvasWidth * this.scale;
};

ObjectAnimeImage.prototype.collisionHeight = function(){
	// index = 0 のみ有効
	return this.before_anime[0].animation.CanvasHeight * this.scale;
};

module.exports = ObjectAnimeImage;
