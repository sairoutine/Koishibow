'use strict';

// 3rdeye を使用しているときに表示されて獲得できるジャーナル

var BaseObject = require('./acquirable_base');
var Util = require('../../hakurei').util;
var WalkImmovableArea = require('../walk_immovable_area');
var CONSTANT = require('../../constant');

var ObjectJournalBack = function(core) {
	BaseObject.apply(this, arguments);

	this._journal_id = null;

	// 表示中かどうか
	this._is_in_back = false;
};
Util.inherit(ObjectJournalBack, BaseObject);

ObjectJournalBack.prototype.init = function(){
	BaseObject.prototype.init.apply(this, arguments);

	this._journal_id = null;

	// 表示中かどうか
	this._is_in_back = false;
};

ObjectJournalBack.prototype.setData = function(data) {
	BaseObject.prototype.setData.apply(this, arguments);

	// 表示するジャーナル画像
	this._journal_id = data.journal_id;
};

ObjectJournalBack.prototype.acquire = function() {
	// ジャーナルをまとめた本を所持してなければ一緒に獲得
	if (!this.core.save_manager.item.existsItem(CONSTANT.ITEM_JOURNAL_BOOK_ID)) {
		this.core.save_manager.item.addItem(CONSTANT.ITEM_JOURNAL_BOOK_ID);
	}

	// ジャーナル獲得
	this.core.save_manager.journal.addJournal(this._journal_id);

	// ジャーナル画像表示シーンへ遷移
	this.scene.root().changeSubScene("journal", this._journal_id);
};

ObjectJournalBack.prototype.getImmovableArea = function() {
	var area = new WalkImmovableArea(this.scene);
	area.init();
	area.setPosition(this.x(), this.y());
	area.setSize(0, 0);
	area.setParentID(this.id);

	return area;
};

// 3rd eye の光と当たり判定する
ObjectJournalBack.prototype.isCollisionWithLightIn3rdEye = function() {
	return true;
};
// サードアイに照らされたとき(サードアイ使用時)
ObjectJournalBack.prototype.onCollideWithLightIn3rdEye = function(){
	// 既に裏オブジェクトとして表示しているなら何もしない
	if (this._is_in_back) return;

	// 表示
	this._is_in_back = true;
};

// 3rd eye を使用解除した場合に呼ばれる
ObjectJournalBack.prototype.onUnUse3rdEye = function(){
	// 裏オブジェクトを表示しないようにする
	this.onNotCollideWithLightIn3rdEye();
};

// サードアイに照らされてないとき(サードアイ使用時)
ObjectJournalBack.prototype.onNotCollideWithLightIn3rdEye = function(){
	// 裏オブジェクトになってないなら何もしない
	if (!this._is_in_back) return;

	// 表オブジェクトになった
	this._is_in_back = false;
};

// サードアイに照らされているときのみ表示される
ObjectJournalBack.prototype.isShow = function() {
	return BaseObject.prototype.isShow.apply(this, arguments) && this._is_in_back;
};

ObjectJournalBack.prototype.isCollision = function(point) {
	// サードアイ使用中ならクリックしても調べられる
	return BaseObject.prototype.isCollision.apply(this, arguments) && this.scene.root().isUsingEye();
};

module.exports = ObjectJournalBack;
