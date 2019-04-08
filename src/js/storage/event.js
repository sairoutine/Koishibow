'use strict';

var base_class = require('./base');
var Util = require('../hakurei').util;

var StorageEvent = function() {
	base_class.apply(this, arguments);
};
Util.inherit(StorageEvent, base_class);

// セーブファイル名
StorageEvent.KEY = function() {
	return "3rdeye_event";
};

// イベントを再生済か取得
StorageEvent.prototype.isPlayedEvent = function(event_name) {
	var played_event_map = this.get("played_event_map");

	if(!played_event_map) return false;

	return played_event_map[event_name] ? true : false;
};
// イベントを再生済に設定
StorageEvent.prototype.setPlayedEvent = function(event_name) {
	var played_event_map = this.get("played_event_map");

	if(!played_event_map) {
		played_event_map = {};
	}

	played_event_map[event_name] = true;

	this.set("played_event_map", played_event_map);
};

module.exports = StorageEvent;
