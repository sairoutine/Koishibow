'use strict';

/* メニューのアイテムの目薬 */
// TODO: MenuItemBase を作る

var base_object = require('../../hakurei').object.base;
var Util = require('../../hakurei').util;
var CONSTANT = require('../../constant');
var ItemConfig = require('../../config/item');

var ObjectMenuItemEyeDrops = function(scene) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectMenuItemEyeDrops, base_object);

ObjectMenuItemEyeDrops.prototype.item_id = function() {
	return CONSTANT.ITEM.EYEDROP;
};
ObjectMenuItemEyeDrops.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
};


ObjectMenuItemEyeDrops.prototype.onCollision = function(obj){
	this.core.audio_loader.playSound("select_item");
	this.scene.focus_item_id = this.item_id();
};

ObjectMenuItemEyeDrops.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;
	ctx.save();
	var item_config = ItemConfig[this.item_id()];
	var image = this.core.image_loader.getImage(item_config.image_name);

	var width = image.width * 2/3;
	var height = image.height * 2/3;

	// 背景描画
	ctx.translate(this.x(), this.y());
	ctx.drawImage(image,
		-width/2,
		-height/2,
		width,
		height
	);
	ctx.restore();


	ctx.save();
	// 選択しているアイテムなら
	if (this.scene.focus_item_id === this.item_id()) {
		ctx.strokeStyle = "rgb(200, 0, 0)";
		ctx.lineWidth = 10;
		ctx.strokeRect(this.getCollisionLeftX(), this.getCollisionUpY(), this.collisionWidth(), this.collisionHeight());
	}

	ctx.restore();
};



ObjectMenuItemEyeDrops.prototype.collisionWidth = function(){
	return 128;
};

ObjectMenuItemEyeDrops.prototype.collisionHeight = function(){
	return 128;
};


// アイテムが使用されたとき
ObjectMenuItemEyeDrops.prototype.use = function(){
	this.core.save_manager.gain3rdeyeGauge(CONSTANT.EYEDROP_RECOVER_3RDEYE_GAUGE);

	this.core.save_manager.deleteItem(this.item_id());

	this.scene.root().changeSubScene("picture_use_eyedrops");
};

module.exports = ObjectMenuItemEyeDrops;
