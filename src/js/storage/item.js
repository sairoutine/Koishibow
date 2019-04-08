'use strict';

// セーブデータ
var base_class = require('./base');
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

/*
// 取得しているアイテム一覧を取得
StorageItem.prototype.getItem = function(index){
	var list = this.getItemList();

	return list[index];
};
*/

// アイテムを追加(追加したアイテムのindexを返す)
StorageItem.prototype.addItem = function(item_id){
	var list = this.getItemList();

	for (var i = 0, len = list.length; i < len; i++) {
		var item_data = list[i];

		// 既存を追加
		if(item_data.item_id === item_id) {
			item_data.num++;
			this.set("item_list", list);
			return i;
		}
	}

	// 新規追加
	list.push({
		item_id: item_id,
		num: 1,
	});
	this.set("item_list", list);
	return list.length - 1;
};
// アイテムを消費
StorageItem.prototype.reduceItem = function(target_item_id) {
	var list = this.getItemList();

	var is_reduce = false;
	for (var i = 0, len = list.length; i < len; i++) {
		var item_data = list[i];

		if (item_data.item_id === target_item_id) {
			// 最後の一つを削除
			if (item_data.num === 1) {
				list.splice(i, 1);
			}
			// 一つだけ消費
			else {
				item_data.num--;
			}

			is_reduce = true;
			break;
		}
	}

	if (is_reduce) {
		this.set("item_list", list);
	}

	return is_reduce;
};

// アイテムの存在チェック
StorageItem.prototype.existsItem = function(target_item_id) {
	var list = this.getItemList();

	for (var i = 0, len = list.length; i < len; i++) {
		var item_data = list[i];

		if (item_data.item_id === target_item_id) {
			return true;
		}
	}

	return false;
};

module.exports = StorageItem;
