'use strict';
var base_object = require('./base');
var Util = require('../../hakurei').util;

// 文字の表示サイズ
var FONT_SIZE = "18";
// フォント名
var FONT_NAME = "SerifFont";

// セリフ文字の色
var SERIF_FONT_COLOR = Util.hexToRGBString("#d4c9aa");

var ObjectChapter6LastJunction = function(core) {
	base_object.apply(this, arguments);

	this._image = null;

	this._scale      = 1;
	this._width      = null;
	this._height     = null;
	this._text       = null;
	this._is_reverse = null;
	this._serif      = null;
};
Util.inherit(ObjectChapter6LastJunction, base_object);

ObjectChapter6LastJunction.prototype.isCollision = function(obj) {
	// サードアイ使用中ならクリックしても調べられないので何もしない
	return base_object.prototype.isCollision.apply(this, arguments) && !this.scene.root().isUsingEye();
};

// サードアイ使用中は表示しない
ObjectChapter6LastJunction.prototype.isShow = function() {
	return base_object.prototype.isShow.apply(this, arguments) && !this.scene.root().isUsingEye();
};

ObjectChapter6LastJunction.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._image = this.core.image_loader.getImage("fukidashi");

	this._scale      = 1;
	this._width      = null;
	this._height     = null;
	this._text       = null;
	this._is_reverse = null;
	this._serif      = null;
};

// パラメータをオブジェクトに設定する
ObjectChapter6LastJunction.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);
	this.setPosition(data.x, data.y);

	this._text = data.text;
	this._is_reverse = data.is_reverse;
	this._serif = data.serif;

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

ObjectChapter6LastJunction.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	if(!this.isShow()) return;

	var ctx = this.core.ctx;
	var image = this._image;

	ctx.save();
	ctx.translate(this.x(), this.y());

	if(this._is_reverse) {
		ctx.transform(-1, 0, 0, 1, 0, 0);
	}

	// ウィンドウ描画
	ctx.drawImage(image,
		-image.width*this._scale/2,
		-image.height*this._scale/2,
		image.width * this._scale,
		image.height * this._scale);
	ctx.restore();

	ctx.save();

	ctx.fillStyle = SERIF_FONT_COLOR;
	ctx.font = FONT_SIZE + "px '"+ FONT_NAME + "'";

	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';

	ctx.fillText(this._text, this.x(), this.y());
	ctx.restore();

};

ObjectChapter6LastJunction.prototype.collisionWidth = function(){
	if(this._width !== null) {
		return this._width;
	}
	else {
		return this._image.width * this._scale;
	}
};

ObjectChapter6LastJunction.prototype.collisionHeight = function(){
	if(this._height !== null) {
		return this._height;
	}
	else {
		return this._image.height * this._scale;
	}
};

// こいしに触られたときの処理
ObjectChapter6LastJunction.prototype.onTouchByKoishi = function() {
	// 会話するオブジェクトなので、クリックしたら会話する
	this.scene.root().changeSubScene("talk_with_object", this._serif, this);
};

module.exports = ObjectChapter6LastJunction;
