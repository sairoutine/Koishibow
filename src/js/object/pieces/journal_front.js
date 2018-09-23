'use strict';

// 3rdeye を使用していないときに獲得できるジャーナル

var base_object = require('./acquirable_base');
var Util = require('../../hakurei').util;
var WalkImmovableArea = require('../walk_immovable_area');
var CONSTANT = require('../../constant');

var ObjectJournal = function(core) {
	base_object.apply(this, arguments);

	this._journal_id = null;
};
Util.inherit(ObjectJournal, base_object);

ObjectJournal.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._journal_id = null;
};

ObjectJournal.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);

	// 表示するジャーナル画像
	this._journal_id = data.journal_id;
};

ObjectJournal.prototype.acquire = function() {
	// ジャーナルをまとめた本を所持してなければ一緒に獲得
	if (!this.core.save_manager.item.existsItem(CONSTANT.ITEM_JOURNAL_BOOK_ID)) {
		this.core.save_manager.item.addItem(CONSTANT.ITEM_JOURNAL_BOOK_ID);
	}

	// ジャーナル獲得
	this.core.save_manager.journal.addJournal(this._journal_id);

	// ジャーナル画像表示シーンへ遷移
	this.scene.root().changeSubScene("journal", this._journal_id);

	// 音を再生
	this.core.audio_loader.playSound("show_journal");
};

ObjectJournal.prototype.getImmovableArea = function() {
	var area = new WalkImmovableArea(this.scene);
	area.init();
	area.setPosition(this.x(), this.y());
	area.setSize(0, 0);
	area.setParentID(this.id);

	return area;
};



module.exports = ObjectJournal;
