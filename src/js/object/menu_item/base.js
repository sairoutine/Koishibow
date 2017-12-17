'use strict';

var base_object = require('../../hakurei').object.base;
var Util = require('../../hakurei').util;
var CONSTANT = require('../../constant');
var ItemConfig = require('../../config/item');

var ObjectMenuItemBase = function(scene) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectMenuItemBase, base_object);

ObjectMenuItemBase.prototype.item_id = function() {
	throw new Error("item_id method must be implemented");
};
ObjectMenuItemBase.prototype.onCollision = function(obj) {

	// アイテム選択 音
	this.core.audio_loader.playSound("select_item");

	// 選択中を自分に
	this.scene.focus_item_id = this.item_id();
};

ObjectMenuItemBase.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;
	var item_config = ItemConfig[this.item_id()];
	var image = this.core.image_loader.getImage(item_config.image_name);

	var width = image.width * 2/3;
	var height = image.height * 2/3;

	ctx.save();

	// アイテム画像 描画
	ctx.translate(this.x(), this.y());
	ctx.drawImage(image,
		-width/2,
		-height/2,
		width,
		height
	);
	ctx.restore();

	ctx.save();

	// 選択しているアイテムなら選択中 表示
	if (this.scene.focus_item_id === this.item_id()) {
		ctx.strokeStyle = "rgb(200, 0, 0)";
		ctx.lineWidth = 10;
		ctx.strokeRect(this.getCollisionLeftX(), this.getCollisionUpY(), this.collisionWidth(), this.collisionHeight());
	}

	ctx.restore();
};

ObjectMenuItemBase.prototype.collisionWidth = function(){
	return 128;
};

ObjectMenuItemBase.prototype.collisionHeight = function(){
	return 128;
};

// アイテムが使用されたとき
ObjectMenuItemBase.prototype.use = function(){
	// 持ち物から削除
	this.core.save_manager.deleteItem(this.item_id());
};

module.exports = ObjectMenuItemBase;
