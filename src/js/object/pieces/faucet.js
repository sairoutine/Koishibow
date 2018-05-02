'use strict';
var base_object = require('./anime_image');
var Util = require('../../hakurei').util;
var AnimeMap = require('../../config/object_anime');

var ObjectAnimeEventImage = function(core) {
	base_object.apply(this, arguments);

	this.noleaves_anime = {};
};
Util.inherit(ObjectAnimeEventImage, base_object);

ObjectAnimeEventImage.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this.noleaves_anime = {};
};
ObjectAnimeEventImage.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);

	this.noleaves_anime = {
		anime1: "chapter1-09-obj-01-obj05",
		anime2: null,
		anime3: null,
		anime4: "chapter1-09-obj-01-obj06",
		anime5: "chapter1-09-obj-01-obj07",
		anime6: "chapter1-09-obj-01-obj08",
	};

	// アニメ変更
	if (this._isRemovedLeaves()) {
		this._changeRemovedLeavesAnime();
	}
};


// こいしに触られたときの処理
ObjectAnimeEventImage.prototype.onTouchByKoishi = function() {
	// 落ち葉が取り払われてなければ
	if (!this._isRemovedLeaves()) {
		// くまでを持っている(持っていれば削除)
		if (this.core.save_manager.item.deleteItem("08")) {
			// 落ち葉取り払ったフラグを立てる
			this._removeLeaves();

			// アニメ変更
			this._changeRemovedLeavesAnime();
			// TODO: 暗転
		}
		// くまでを持っていない
		else {
			base_object.prototype.onTouchByKoishi.apply(this, arguments);
		}
	}
	// 落ち葉が取り払われていれば
	else {

		// 空のじょうろを持っている(空のじょうろを削除)
		if (this.core.save_manager.item.deleteItem("03")) {
			// 水が入る
			this.core.save_manager.item.addItem("04");
		}
		// 空のじょうろを持っていない
		else {
			// 触れない
		}
	}
};

ObjectAnimeEventImage.prototype.isCheckInTouchArea = function(){
	// 落ち葉が取り払われていて、空のじょうろをもってなければタッチしても無意味
	return base_object.prototype.isCheckInTouchArea.apply(this, arguments) && !(this._isRemovedLeaves() && !this.core.save_manager.item.existsItem("03"));
};




ObjectAnimeEventImage.prototype._removeLeaves = function() {
	this.core.save_manager.piece.setPieceData(
		this.scene.root().getFieldData().key,
		this.no,
		"is_removed_leaves",
		true
	);
};

ObjectAnimeEventImage.prototype._isRemovedLeaves = function() {
	return this.core.save_manager.piece.getPieceData(
		this.scene.root().getFieldData().key,
		this.no,
		"is_removed_leaves"
	);
};

ObjectAnimeEventImage.prototype._changeRemovedLeavesAnime = function() {
	this.ss.setAnime({
		// 表

		// クリック前のアニメ
		front_before_click_anime: AnimeMap[this.noleaves_anime.anime1],
		default:                  AnimeMap[this.noleaves_anime.anime1],
		// クリック中のアニメーション
		front_clicking_anime: AnimeMap[this.noleaves_anime.anime2],
		// クリック後のアニメーション
		front_after_click_anime: AnimeMap[this.noleaves_anime.anime3],

		// 裏

		// サードアイで照らした際の開始アニメ
		lighted_start_anime: AnimeMap[this.noleaves_anime.anime4],
		// サードアイで照らした最中のアニメ
		lighting_anime: AnimeMap[this.noleaves_anime.anime5],
		// サードアイで照らした際の終了アニメ
		lighted_end_anime: AnimeMap[this.noleaves_anime.anime6],
	});
	this.ss.init();
};


module.exports = ObjectAnimeEventImage;