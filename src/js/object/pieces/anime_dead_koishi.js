'use strict';
var base_object = require('./base');
var Util = require('../../hakurei').util;
var SS = require('../anime_object');
var AnimeMap = require('../../config/object_anime');

var ObjectAnimeDeadKoishi = function(core) {
	base_object.apply(this, arguments);

	// アニメ
	this.ss = new SS(this.scene);
};
Util.inherit(ObjectAnimeDeadKoishi, base_object);

ObjectAnimeDeadKoishi.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
};
ObjectAnimeDeadKoishi.prototype.setPosition = function(x, y) {
	base_object.prototype.setPosition.apply(this, arguments);

	// update sprite
	this.ss.x(this.x());
	this.ss.y(this.y());
};

ObjectAnimeDeadKoishi.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);
	// 位置
	this.setPosition(data.x, data.y);

	this.ss.setAnime({
		default:     AnimeMap.koishi_button_wait,
		reaction_01: AnimeMap.koishi_button_reaction_01,
	});
	this.ss.init();
};


ObjectAnimeDeadKoishi.prototype.isCollision = function(point) {
	// サードアイ使用中ならクリックしても調べられないので何もしない
	return base_object.prototype.isCollision.apply(this, arguments) && !this.scene.root().isUsingEye();
};

ObjectAnimeDeadKoishi.prototype.beforeDraw = function() {
	base_object.prototype.beforeDraw.apply(this, arguments);

	this.ss.beforeDraw();
};



ObjectAnimeDeadKoishi.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	if(!this.isShow()) return;

	this.ss.draw();
};

ObjectAnimeDeadKoishi.prototype.afterDraw = function(){
	base_object.prototype.afterDraw.apply(this, arguments);

	this.ss.afterDraw();
};



ObjectAnimeDeadKoishi.prototype.collisionWidth = function(){
	return this.ss.width();
};

ObjectAnimeDeadKoishi.prototype.collisionHeight = function(){
	return this.ss.height();
};

// こいしに触られたときの処理
ObjectAnimeDeadKoishi.prototype.onTouchByKoishi = function() {
	// 会話するオブジェクトなので、クリックしたら会話する
	this.scene.root().changeSubScene("talk_with_object", this._getSerif(), this);
};

// 会話で発生したリアクション
ObjectAnimeDeadKoishi.prototype.actionByObject = function(action_name) {
	this.ss.playAnimationOnce(action_name);
};
ObjectAnimeDeadKoishi.prototype.setWaitAnime = function() {
	this.ss.playAnimationInfinity("default");
};

ObjectAnimeDeadKoishi.prototype._getSerif = function() {
	var SERIF_LIST = [
		"へたくそ",
		"何のつもりなの？",
		"あなたが悪いのよ",
		"なんのつもり？",
		"早く進みなさいよ",
		"とっととねろ",
		"誰のせいでこうなったと思う？",
		"グズめ",
		"お前はいつもそうだ",
		"また約束破られた",
		"こうなるってわからなかったの？",
		"馬鹿ね",
		"馬鹿",
		"馬鹿じゃないの？",
	];

	var serif = SERIF_LIST[Math.floor(Math.random() * SERIF_LIST.length)];

	return [
		{"chara": "button_koishi", "exp": "reaction_01","serif": serif},
	];
};



module.exports = ObjectAnimeDeadKoishi;
