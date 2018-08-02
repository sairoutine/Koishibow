'use strict';
var base_object = require('./base');
var Util = require('../../hakurei').util;

var ObjectChapter1Hashigo = function(core) {
	base_object.apply(this, arguments);

	this._width  = null;
	this._height = null;
};
Util.inherit(ObjectChapter1Hashigo, base_object);

ObjectChapter1Hashigo.prototype.isCollision = function(obj) {
	// サードアイ使用中ならクリックしても調べられないので何もしない
	// かつ、はしごを持っている時
	return base_object.prototype.isCollision.apply(this, arguments) && !this.scene.root().isUsingEye() && this.core.save_manager.item.existsItem("05");
};

ObjectChapter1Hashigo.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._width  = null;
	this._height = null;
};

// パラメータをオブジェクトに設定する
ObjectChapter1Hashigo.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);
	this.setPosition(data.x, data.y);

	if (data.width) {
		this._width  = data.width;
	}
	if (data.height) {
		this._height = data.height;
	}
};

ObjectChapter1Hashigo.prototype.collisionWidth = function(){
	if(this._width) {
		return this._width;
	}
	else {
		return this._image.width * this._scale;
	}
};

ObjectChapter1Hashigo.prototype.collisionHeight = function(){
	if(this._height) {
		return this._height;
	}
	else {
		return this._image.height * this._scale;
	}
};

// こいしに触られたときの処理
ObjectChapter1Hashigo.prototype.onTouchByKoishi = function() {
	this.scene.root().changeSubScene("touch_hashigo");
};

module.exports = ObjectChapter1Hashigo;
