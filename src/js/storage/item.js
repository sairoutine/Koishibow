'use strict';

// セーブデータ
var base_class = require('../hakurei').storage.base;
var Util = require('../hakurei').util;

var StorageItem = function() {
	base_class.apply(this, arguments);
};
Util.inherit(StorageItem, base_class);

// セーブファイル名
StorageItem.KEY = function() {
	return "3rdeye_item";
};

// 取得しているアイテム一覧を取得
StorageItem.prototype.getItemList = function() {
	var list = this.get("item_list");

	if(!list) list = [];

	return list;
};

// 取得しているアイテム一覧を取得
StorageItem.prototype.getItem = function(index){
	var list = this.getItemList();

	return list[index];
};

// アイテムを追加(追加したアイテムのindexを返す)
StorageItem.prototype.addItem = function(item_id){
	var list = this.getItemList();

	list.push(item_id);
	this.set("item_list", list);
	return list.length - 1;
};
// アイテムを削除
StorageItem.prototype.deleteItem = function(target_item_id) {
	var list = this.getItemList();

	var is_delete = false;
	for (var i = 0, len = list.length; i < len; i++) {
		var item_id = list[i];

		if (item_id === target_item_id) {
			list.splice(i, 1);
			is_delete = true;
			break;
		}
	}

	if (is_delete) {
		this.set("item_list", list);
	}

	return is_delete;
};

module.exports = StorageItem;
