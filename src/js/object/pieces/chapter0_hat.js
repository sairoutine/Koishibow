'use strict';
var base_object = require('./base');
var Util = require('../../hakurei').util;

var ObjectChapter0Hat = function(core) {
	base_object.apply(this, arguments);

	this._image = null;

	this._scale = 1;
	this._width  = null;
	this._height = null;
};
Util.inherit(ObjectChapter0Hat, base_object);

ObjectChapter0Hat.prototype.isCollision = function(obj) {
	// サードアイ使用中ならクリックしても調べられないので何もしない
	return base_object.prototype.isCollision.apply(this, arguments) && !this.scene.root().isUsingEye();
};

ObjectChapter0Hat.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._image = null;

	this._scale = 1;
	this._width  = null;
	this._height = null;
};

// パラメータをオブジェクトに設定する
ObjectChapter0Hat.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);
	this.setPosition(data.x, data.y);

	this._image = this.core.image_loader.getImage(data.image);

	if (data.width) {
		this._width  = data.width;
	}
	if (data.height) {
		this._height = data.height;
	}
	if (data.scale) {
		this._scale = data.scale;
	}
};

ObjectChapter0Hat.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	if(!this.isShow()) return;

	var ctx = this.core.ctx;
	var image = this._image;

	var width = image.width * this._scale;
	var height = image.height * this._scale;

	// 描画
	ctx.save();
	ctx.translate(this.x(), this.y());
	ctx.drawImage(image,
		-width/2,
		-height/2,
		width,
		height
	);
	ctx.restore();

};

ObjectChapter0Hat.prototype.collisionWidth = function(){
	if(this._width) {
		return this._width;
	}
	else {
		return this._image.width * this._scale;
	}
};

ObjectChapter0Hat.prototype.collisionHeight = function(){
	if(this._height) {
		return this._height;
	}
	else {
		return this._image.height * this._scale;
	}
};

// こいしに触られたときの処理
ObjectChapter0Hat.prototype.onTouchByKoishi = function() {
	this.scene.root().changeSubScene("picture_get_hat");
};

module.exports = ObjectChapter0Hat;
