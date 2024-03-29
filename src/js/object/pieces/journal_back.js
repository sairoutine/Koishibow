'use strict';

// 3rdeye を使用しているときに表示されて獲得できるジャーナル

var BaseObject = require('./acquirable_base');
var Util = require('../../hakurei').util;
var WalkImmovableArea = require('../walk_immovable_area');
var CONSTANT = require('../../constant');
var SS = require('../anime_object');
var AnimeMap = require('../../config/object_anime');

var ObjectJournalBack = function(core) {
	BaseObject.apply(this, arguments);

	this._journal_id = null;

	// 表示中かどうか
	this._is_in_back = false;

	// アニメ
	this.ss = new SS(this.scene);
};
Util.inherit(ObjectJournalBack, BaseObject);

ObjectJournalBack.prototype.init = function(){
	BaseObject.prototype.init.apply(this, arguments);

	this._journal_id = null;

	// 表示中かどうか
	this._is_in_back = false;

};

ObjectJournalBack.prototype.setData = function(data) {
	data = Util.shallowCopyHash(data);
	data.image = "paper"; // サイズ取得用にpaper画像を設定しておく
	data.scale = 2/3;

	BaseObject.prototype.setData.apply(this, [data]);

	// 位置
	this.setPosition(data.x, data.y);

	// 表示するジャーナル画像
	this._journal_id = data.journal_id;

	// アニメの設定
	this.ss.setAnime({
		// 表
		// クリック前のアニメ
		default:             AnimeMap["chapter5-02-obj-02-obj01"],

		// 裏
		// サードアイで照らした際の開始アニメ
		lighted_start_anime: AnimeMap["chapter5-02-obj-02-obj02"],
		// サードアイで照らした最中のアニメ
		lighting_anime:      AnimeMap["chapter5-02-obj-02-obj03"],
		// サードアイで照らした際の終了アニメ
		lighted_end_anime:   AnimeMap["chapter5-02-obj-02-obj04"],
	});
	this.ss.init();
};

ObjectJournalBack.prototype.setPosition = function(x, y) {
	BaseObject.prototype.setPosition.apply(this, arguments);

	// update sprite
	this.ss.x(this.x());
	this.ss.y(this.y());
};

ObjectJournalBack.prototype.update = function() {
	BaseObject.prototype.update.apply(this, arguments);

	this.ss.update();
};

ObjectJournalBack.prototype.draw = function(){
	if (!this.isShow()) return;
	this.ss.draw();
};

ObjectJournalBack.prototype.afterDraw = function(){
	BaseObject.prototype.afterDraw.apply(this, arguments);

	this.ss.afterDraw();
};



ObjectJournalBack.prototype.acquire = function() {
	// ジャーナルをまとめた本を所持してなければ一緒に獲得
	if (!this.core.save_manager.item.existsItem(CONSTANT.ITEM_JOURNAL_BOOK_ID)) {
		this.core.save_manager.item.addItem(CONSTANT.ITEM_JOURNAL_BOOK_ID);
	}

	// ジャーナル獲得
	this.core.save_manager.journal.addJournal(this._journal_id);

	// ジャーナル画像表示シーンへ遷移
	this.scene.root().changeSubScene("show_journal", this._journal_id);
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

	// 照らされた際の開始アニメーション 再生
	var ss = this.ss;
	this.ss.playAnimationOnce("lighted_start_anime", function () {
		// 照らしてる最中のアニメーション再生
		ss.playAnimationInfinity("lighting_anime");
	});
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

	// 表オブジェクトに戻る際のアニメ再生
	var ss = this.ss;
	this.ss.playAnimationOnce("lighted_end_anime", function (){
		// 表オブジェクトのアニメに戻る
		ss.playAnimationInfinity("default");
	});
};

ObjectJournalBack.prototype.isCollision = function(point) {
	// サードアイ使用中ならクリックしても調べられる
	return BaseObject.prototype.isCollision.apply(this, arguments) && this.scene.root().isUsingEye();
};

module.exports = ObjectJournalBack;
