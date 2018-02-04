'use strict';

// 獲得可能なオブジェクト
// 1回調べるとフィールドから消える
// 継承先で、獲得したアイテムを保存する処理を実装してください

var base_object = require('./base');
var Util = require('../../hakurei').util;

var ObjectDisappearBase = function(core) {
	base_object.apply(this, arguments);

	this._image   = null;
	this._scale   = 1;
	this._width   = null;
	this._height  = null;

	this._item_id = null;
};
Util.inherit(ObjectDisappearBase, base_object);

ObjectDisappearBase.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._image   = null;
	this._scale   = 1;
	this._width   = null;
	this._height  = null;

	this._item_id = null;
};
ObjectDisappearBase.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);
	// 画像
	this._image = this.core.image_loader.getImage(data.image);

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

ObjectDisappearBase.prototype.isCollision = function(point) {
	// サードアイ使用中ならクリックしても調べられないので何もしない
	return !this.scene.root().isUsingEye();
};

// 移動後の処理
ObjectDisappearBase.prototype.onAfterWalkToHere = function() {
	// フィールドから該当のオブジェクトを削除
	this._deleteFromField();

	// 獲得処理
	this.acquire();
};

ObjectDisappearBase.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);

	if (!this.isShow()) return;

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

ObjectDisappearBase.prototype._deleteFromField = function() {
	this.core.save_manager.setPieceData(
		this.scene.root().getFieldData().key,
		this.no,
		"is_delete",
		true
	);
};

ObjectDisappearBase.prototype._isDeleted = function() {
	return this.core.save_manager.getPieceData(
		this.scene.root().getFieldData().key,
		this.no,
		"is_delete"
	);
};

ObjectDisappearBase.prototype.isShow = function() {
	return !this._isDeleted();
};

ObjectDisappearBase.prototype.isCollision = function() {
	return !this._isDeleted();
};



ObjectDisappearBase.prototype.collisionWidth = function(){
	if(this._width) {
		return this._width;
	}
	else {
		return this._image.width * this._scale;
	}
};

ObjectDisappearBase.prototype.collisionHeight = function(){
	if(this._height) {
		return this._height;
	}
	else {
		return this._image.height * this._scale;
	}
};

ObjectDisappearBase.prototype.acquire = function(){
	throw new Error("acquire must be implemented");
};

module.exports = ObjectDisappearBase;
