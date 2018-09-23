'use strict';

// 獲得可能なオブジェクト
// 1回調べるとフィールドから消える
// 継承先で、獲得したアイテムを保存する処理を実装してください

var base_object = require('./base');
var Util = require('../../hakurei').util;

var ObjectAcquirableBase = function(core) {
	base_object.apply(this, arguments);

	this._image   = null;
	this._scale   = 1;
	this._width   = null;
	this._height  = null;

	this._item_id = null;
};
Util.inherit(ObjectAcquirableBase, base_object);

ObjectAcquirableBase.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._image   = null;
	this._scale   = 1;
	this._width   = null;
	this._height  = null;

	this._item_id = null;
};
ObjectAcquirableBase.prototype.setData = function(data) {
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

// こいしに触られたときの処理
ObjectAcquirableBase.prototype.onTouchByKoishi = function() {
	// フィールドから該当のオブジェクトを削除
	this._deleteFromField();

	// 獲得処理
	this.acquire();
};

ObjectAcquirableBase.prototype.draw = function(){
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

ObjectAcquirableBase.prototype._deleteFromField = function() {
	this.core.save_manager.piece.setPieceData(
		this.scene.root().getFieldData().key(),
		this.no,
		"is_delete",
		true
	);
};

ObjectAcquirableBase.prototype._isDeleted = function() {
	return this.core.save_manager.piece.getPieceData(
		this.scene.root().getFieldData().key(),
		this.no,
		"is_delete"
	);
};

ObjectAcquirableBase.prototype.isShow = function() {
	return base_object.prototype.isShow.apply(this, arguments) && !this._isDeleted();
};

ObjectAcquirableBase.prototype.isCollision = function(obj) {
	return base_object.prototype.isCollision.apply(this, arguments) && !this._isDeleted();
};

ObjectAcquirableBase.prototype.collisionWidth = function(){
	if(this._width) {
		return this._width;
	}
	else {
		return this._image.width * this._scale;
	}
};

ObjectAcquirableBase.prototype.collisionHeight = function(){
	if(this._height) {
		return this._height;
	}
	else {
		return this._image.height * this._scale;
	}
};

ObjectAcquirableBase.prototype.acquire = function(){
	throw new Error("acquire must be implemented");
};

module.exports = ObjectAcquirableBase;
