'use strict';

var base_object = require('../../hakurei').object.base;
var Util = require('../../hakurei').util;
var ItemConfig = require('../../config/item');

var ObjectMenuItemBase = function(scene) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectMenuItemBase, base_object);

ObjectMenuItemBase.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;
	var item_config = ItemConfig[this.item_id()];
	var image;

	if (this.scene.isFocusItem(this.item_id())) {
		// 選択中でない画像
		image = this.core.image_loader.getImage(item_config.selected_image_name);
	}
	else {
		// 選択中 画像
		image = this.core.image_loader.getImage(item_config.image_name);
	}
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

};

ObjectMenuItemBase.prototype.collisionWidth = function(){
	return 128;
};

ObjectMenuItemBase.prototype.collisionHeight = function(){
	return 128;
};

// アイテムID
ObjectMenuItemBase.prototype.item_id = function() {
	throw new Error("item_id method must be implemented");
};

// アイテムが使用されたとき
ObjectMenuItemBase.prototype.use = function(){
	// 持ち物から削除
	this.core.save_manager.item.deleteItem(this.item_id());
};

// 使用できるか否か判定
ObjectMenuItemBase.prototype.isEnableToUse = function() {
	return true;
};

module.exports = ObjectMenuItemBase;
