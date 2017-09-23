'use strict';

// セーブデータ
var base_class = require('./hakurei').storage.save;
var util = require('./hakurei').util;

var SaveManager = function(scene) {
	base_class.apply(this, arguments);
};
util.inherit(SaveManager, base_class);

// 取得しているアイテム一覧を取得
SaveManager.prototype.getItemList = function() {
	var list = this.get("item_list");

	if(!list) list = [];

	return list;
};

// 取得しているアイテム一覧を取得
SaveManager.prototype.getItem = function(index){
	var list = this.getItemList();

	return list[index];
};

// アイテムを追加(追加したアイテムのindexを返す)
SaveManager.prototype.addItem = function(item_id){
	var list = this.getItemList();

	list.push(item_id);
	this.set("item_list", list);
	return list.length - 1;
};

module.exports = SaveManager;
