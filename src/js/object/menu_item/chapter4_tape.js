'use strict';

/* メニューのアイテムのカセットテープ */

var base_object = require('./base');
var Util = require('../../hakurei').util;
var CONSTANT = require('../../constant');
var Chapter4TapeMasterRepository = require('../../repository/chapter4_tape');

var ObjectMenuItemChapter4Tape = function(scene, item_id, num) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectMenuItemChapter4Tape, base_object);

// アイテムが使用されたとき
ObjectMenuItemChapter4Tape.prototype.use = function() {
	var item_id = this.itemId();

	var master = Chapter4TapeMasterRepository.find(item_id);

	// このフィールドでのBGM再生を終了
	this.core.audio_loader.stopAllBGM();

	// サウンド再生
	this.core.audio_loader.playSound(master.audioName());


	var field_data = this.scene.parent.getFieldData();

	// チャルメラを chapter4 のフィールド 07 ではじめて使ったら
	if (field_data.chapter() === 4 && field_data.key() === "chapter4_07"
		&& item_id === "24" && this.core.save_manager.scenario.getPlayedCount(CONSTANT.ITEM_ID_24_EVENT_NAME) === 0) {
		this.core.save_manager.scenario.incrementPlayedCount(CONSTANT.ITEM_ID_24_EVENT_NAME);

		// 蓮子登場イベント
		this.core.scene_manager.changeScene("event_talk", "chapter4-07-event-01");
	}
	else {
		// 通常の再生
	}
};

// カセットレコーダーを持っていないと使用できない
ObjectMenuItemChapter4Tape.prototype.isEnableToUse = function() {
	return this.core.save_manager.item.existsItem(CONSTANT.ITEM_CHAPTER4_RECORDER_ID);
};

module.exports = ObjectMenuItemChapter4Tape;
