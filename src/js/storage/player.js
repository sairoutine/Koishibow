'use strict';

// セーブデータ
var base_class = require('../hakurei').storage.base;
var Util = require('../hakurei').util;
var CONSTANT = require('../constant');

var StoragePlayer = function() {
	base_class.apply(this, arguments);
};
Util.inherit(StoragePlayer, base_class);

// セーブファイル名
StoragePlayer.KEY = function() {
	return "3rdeye_player";
};

// 3rd eye ゲージの取得
StoragePlayer.prototype.get3rdeyeGauge = function(){
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
StoragePlayer.prototype.gain3rdeyeGauge = function(num){
	var gauge = this.get3rdeyeGauge();

	gauge += num;

	if (gauge > CONSTANT.MAX_3RDEYE_GAUGE) {
		gauge = CONSTANT.MAX_3RDEYE_GAUGE;
	}

	this.set("3rdeye_gauge", gauge);
};

// 3rd eye ゲージの消費
StoragePlayer.prototype.reduce3rdeyeGauge = function(num){
	var gauge = this.get3rdeyeGauge();

	gauge -= num;

	if (gauge < 0) {
		gauge = 0;
	}

	this.set("3rdeye_gauge", gauge);
};

// 充血の進行度(レベル)
StoragePlayer.prototype.get3rdeyeBloodShotLevel = function() {
	var gauge = this.get3rdeyeGauge();
	if (gauge > CONSTANT.MAX_3RDEYE_GAUGE * 3 / 4) {
		return 1;
	}
	else if (gauge > CONSTANT.MAX_3RDEYE_GAUGE * 2 / 4) {
		return 2;
	}
	else if (gauge > CONSTANT.MAX_3RDEYE_GAUGE * 1 / 4) {
		return 3;
	}
	else if (gauge > CONSTANT.MAX_3RDEYE_GAUGE * 0 / 4) {
		return 4;
	}
	else {
		// NOTE: ゲームオーバーなのでここにはこないはず
		return 4;
	}
};

// 現在のフィールドを取得
StoragePlayer.prototype.getCurrentField = function() {
	var field_name = this.get("current_field");

	return field_name;
};
// 現在のフィールドを設定
StoragePlayer.prototype.setCurrentField = function(field_name) {
	this.set("current_field", field_name);
};

module.exports = StoragePlayer;