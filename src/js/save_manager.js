'use strict';

// セーブデータ
var base_class = require('./hakurei').storage.save;
var util = require('./hakurei').util;
var CONSTANT = require('./constant');

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
	var gauge;
	if (this.exists("3rdeye_gauge")) {
		gauge = this.get("3rdeye_gauge");
	}
	else {
		gauge = CONSTANT.MAX_3RDEYE_GAUGE;
	}

	return gauge;
};
// 3rd eye ゲージの上昇
SaveManager.prototype.gain3rdeyeGauge = function(num){
	var gauge = this.get3rdeyeGauge();

	gauge += num;

	if (gauge > CONSTANT.MAX_3RDEYE_GAUGE) {
		gauge = CONSTANT.MAX_3RDEYE_GAUGE;
	}

	this.set("3rdeye_gauge", gauge);
};

// 3rd eye ゲージの消費
SaveManager.prototype.reduce3rdeyeGauge = function(num){
	var gauge = this.get3rdeyeGauge();

	gauge -= num;

	if (gauge < 0) {
		gauge = 0;
	}

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

// イベントを再生済か取得
SaveManager.prototype.isPlayedEvent = function(event_name) {
	var played_event_map = this.get("played_event_map");

	if(!played_event_map) return false;

	return played_event_map[event_name] ? true : false;
};
// イベントを再生済に設定
SaveManager.prototype.setPlayedEvent = function(event_name) {
	var played_event_map = this.get("played_event_map");

	if(!played_event_map) {
		played_event_map = {};
	}

	played_event_map[event_name] = true;

	this.set("played_event_map", played_event_map);
};

module.exports = SaveManager;
