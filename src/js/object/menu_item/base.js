'use strict';

var base_object = require('../../hakurei').object.base;
var Util = require('../../hakurei').util;
var ItemMasterRepository = require("../../repository/item");

var ObjectMenuItemBase = function(scene, item_id, num) {
	base_object.apply(this, arguments);

	this._item_id = item_id;
	this._num     = num;
};
Util.inherit(ObjectMenuItemBase, base_object);

ObjectMenuItemBase.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;
	var item_config = ItemMasterRepository.find(this.itemId());

	var image = this.core.image_loader.getImage(item_config.imageName());

	ctx.save();
	ctx.translate(this.x(), this.y());

	// 選択中の表示
	if (this.scene.isFocusItem(this.itemId())) {
		var selected = this.core.image_loader.getImage("item_selected");
		var selected_width = selected.width * 2/3;
		var selected_height = selected.height * 2/3;

		ctx.drawImage(selected,
			-selected_width/2,
			-selected_height/2,
			selected_width,
			selected_height
		);
	}

	var width = image.width * 2/3;
	var height = image.height * 2/3;

	// アイテム画像 描画
	ctx.drawImage(image,
		-width/2,
		-height/2,
		width,
		height
	);

	// アイテム所持数 表示
	if (this.num() > 1) {
		ctx.font = "28px 'OradanoGSRR'";
		//ctx.textAlign = 'center';
		////ctx.textBaseline = 'middle';
		ctx.fillStyle = 'rgb( 255, 255, 255 )';
		ctx.fillText("x" + this.num(),
			40,
			40
		);
	}

	ctx.restore();

};

ObjectMenuItemBase.prototype.collisionWidth = function(){
	return 128;
};

ObjectMenuItemBase.prototype.collisionHeight = function(){
	return 128;
};

// アイテムID
ObjectMenuItemBase.prototype.itemId = function() {
	return this._item_id;
};
// アイテム所持数
ObjectMenuItemBase.prototype.num = function() {
	return this._num;
};


// アイテムが使用されたとき
ObjectMenuItemBase.prototype.use = function(){
	// 持ち物から削除
	this.core.save_manager.item.reduceItem(this.itemId());
};

// 使用できるか否か判定
ObjectMenuItemBase.prototype.isEnableToUse = function() {
	return true;
};

module.exports = ObjectMenuItemBase;
