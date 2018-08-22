'use strict';
var base_object = require('./anime_image');
var Util = require('../../hakurei').util;
var AnimeMap = require('../../config/object_anime');

var ObjectFaucet = function(core) {
	base_object.apply(this, arguments);

	this.noleaves_anime = {};
};
Util.inherit(ObjectFaucet, base_object);

ObjectFaucet.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this.noleaves_anime = {};
};
ObjectFaucet.prototype.setData = function(data) {
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
ObjectFaucet.prototype.onTouchByKoishi = function() {
	// 落ち葉が取り払われてなければ
	if (!this._isRemovedLeaves()) {
		// くまでを持っている(持っていれば削除)
		if (this.core.save_manager.item.reduceItem("08")) {
			// 落ち葉取り払ったフラグを立てる
			this._removeLeaves();

			// アニメ変更
			this._changeRemovedLeavesAnime();
			// TODO: 暗転
		}
		// くまでを持っていない
		else {
			this.core.audio_loader.playSound("chapter1-09-twist_faucet");
			base_object.prototype.onTouchByKoishi.apply(this, arguments);
		}
	}
	// 落ち葉が取り払われていれば
	else {

		// 空のじょうろを持っている(空のじょうろを削除)
		if (this.core.save_manager.item.reduceItem("03")) {
			// 水が入る
			// NOTE: 会話で行うので不要
			//this.core.save_manager.item.addItem("04");

			this.scene.root().changeSubScene("talk_with_object", [
				{"chara": this.no, "serif":_("掃除してくださったのね！")},
				{"chara": this.no, "serif":_("お道具も取りに行ってくださったのね！")},
				{"chara": "koishi", "serif":_("えっとね")},
				{"chara": "koishi", "serif":_("これね")},
				{"chara": "koishi", "serif":_("貸してくれたの")},
				{"chara": "koishi", "serif":_("お姉さんが貸してくれたの！"), "option": {
					getItem: "04", // 水が入る
				}},
			], this);
		}
		// 空のじょうろを持っていない
		else {
			// 触れない
		}
	}
};

ObjectFaucet.prototype.isCheckInTouchArea = function(){
	// 落ち葉が取り払われていて、空のじょうろをもってなければタッチしても無意味
	return base_object.prototype.isCheckInTouchArea.apply(this, arguments) && !(this._isRemovedLeaves() && !this.core.save_manager.item.existsItem("03"));
};




ObjectFaucet.prototype._removeLeaves = function() {
	this.core.save_manager.piece.setPieceData(
		this.scene.root().getFieldData().key(),
		this.no,
		"is_removed_leaves",
		true
	);
};

ObjectFaucet.prototype._isRemovedLeaves = function() {
	return this.core.save_manager.piece.getPieceData(
		this.scene.root().getFieldData().key(),
		this.no,
		"is_removed_leaves"
	);
};

ObjectFaucet.prototype._changeRemovedLeavesAnime = function() {
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
	// ステージのBGM開始フレームに合わせること
	var self = this;
	this.core.time_manager.setTimeout(function () {
		self.core.audio_loader.addBGM("chapter1-09-flows_water");
	}, 60+1);
};


module.exports = ObjectFaucet;
