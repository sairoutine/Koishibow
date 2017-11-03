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

// 3rd eye ゲージの取得
SaveManager.prototype.get3rdeyeGauge = function(){
	var gauge = this.get("3rdeye_gauge") || 0;

	return gauge;
};
// 3rd eye ゲージの上昇
SaveManager.prototype.increase3rdeyeGauge = function(num){
	var gauge = this.get3rdeyeGauge();

	gauge += num;

	// TODO: 定数化
	if (gauge > 1000) gauge = 1000;

	this.set("3rdeye_gauge", gauge);
};

// 現在のフィールドを取得
SaveManager.prototype.getCurrentField = function() {
	var field_name = this.get("current_field");

	return field_name;
};
// 現在のフィールドを設定
SaveManager.prototype.setCurrentField = function(field_name) {
	this.set("current_field", field_name);
};







module.exports = SaveManager;
