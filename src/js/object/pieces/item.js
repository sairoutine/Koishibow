'use strict';
var base_object = require('./acquirable_base');
var Util = require('../../hakurei').util;

var ObjectItem = function(core) {
	base_object.apply(this, arguments);

	this._item_id = null;
};
Util.inherit(ObjectItem, base_object);

ObjectItem.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._item_id = null;
};
ObjectItem.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);

	// 表示するアイテムID
	this._item_id = data.item_id;
};

ObjectItem.prototype.isCollision = function(point) {
	// サードアイ使用中ならクリックしても調べられないので何もしない
	return base_object.prototype.isCollision.apply(this, arguments) && !this.scene.root().isUsingEye();
};

ObjectItem.prototype.getItemId = function(data) {
	return this._item_id;
};

ObjectItem.prototype.acquire = function(){
	// アイテム獲得
	this.core.save_manager.item.addItem(this._item_id);

	// アイテム獲得画面へ遷移
	this.scene.root().changeSubScene("got_item",this._item_id);
};

module.exports = ObjectItem;
