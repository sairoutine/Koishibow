'use strict';
var base_object = require('./base');
var Util = require('../../hakurei').util;

var ObjectItem = function(core) {
	base_object.apply(this, arguments);

	this._image   = null;
	this._scale   = 1;
	this._width   = null;
	this._height  = null;

	this._item_id = null;

};
Util.inherit(ObjectItem, base_object);

ObjectItem.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._image   = null;
	this._scale   = 1;
	this._width   = null;
	this._height  = null;

	this._item_id = null;
};
ObjectItem.prototype.setData = function(data) {
	// 画像
	this._image = this.core.image_loader.getImage(data.image);

	// 表示するアイテムID
	this._item_id = data.item_id;

	// 位置
	this.setPosition(data.x, data.y);

	// サイズ
	if (data.scale) {
		this._scale = data.scale;
	}
	if (data.width) {
		this._width  = data.width;
	}
	if (data.height) {
		this._height = data.height;
	}
};

// 移動後の処理
ObjectItem.prototype.onAfterWalkToHere = function() {
	// アイテム獲得 表示シーンへ遷移
	this.scene.root().changeSubScene("got_item", this._item_id);
};

ObjectItem.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);

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



ObjectItem.prototype.collisionWidth = function(){
	if(this._width) {
		return this._width;
	}
	else {
		return this._image.width * this._scale;
	}
};

ObjectItem.prototype.collisionHeight = function(){
	if(this._height) {
		return this._height;
	}
	else {
		return this._image.height * this._scale;
	}
};
module.exports = ObjectItem;
