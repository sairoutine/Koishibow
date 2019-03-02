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

	// サウンド再生
	this.core.audio_loader.playBGM(master.audioName());
};

// カセットレコーダーを持っていないと使用できない
ObjectMenuItemChapter4Tape.prototype.isEnableToUse = function() {
	return this.core.save_manager.item.existsItem(CONSTANT.ITEM_CHAPTER4_RECORDER_ID);
};

module.exports = ObjectMenuItemChapter4Tape;
