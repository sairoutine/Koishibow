'use strict';
var DEBUG = require("./debug_constant");

var CONSTANT = {
	DEBUG: {},

	// 体験版モードかどうか
	TRIAL: false,

	// 言語
	LANGUAGE: "ja", // "en",

	// ゲームを最初から始めた場合の最初のフィールド
	INITIAL_CHAPTER: "opening_movie_chapter0",

	// こいしの歩く速度(最高速度)
	KOISHI_MAX_SPEED: 7,
	// こいしの歩く速度(初速)
	KOISHI_INITIAL_SPEED: 2,
	// こいしの歩く速度(加速度)
	KOISHI_ACCEL_SPEED: 0.25,

	// オブジェクトの種類
	STATIC_IMAGE_TYPE:       1,
	ANIME_IMAGE_TYPE:        2,
	JOURNAL_FRONT_TYPE:      3,
	JOURNAL_BACK_TYPE:       4,
	ANIME_EVENT_IMAGE_TYPE:  5,  // chapter0 最後のカーペット
	ITEM_TYPE:               6,
	FIELD_CHANGE_TYPE:       7,
	BUTTON_KOISHI_TYPE:      8,  // ゲームオーバー用ボタンの目こいし
	STATIC_EVENT_IMAGE_TYPE: 9,  // chapter1 ボール
	FAUSET_TYPE:             10, // chapter1 蛇口
	SUSPENDED_TREE_TYPE:     11, // chapter1 うさぎが吊るされた木
	HASHIGO_TYPE:            12, // chapter1 はしごをかけられる場所

	// アイテムの種類
	ITEM: {
		EYEDROPS:     "01",
		NON_USABLE:   "02",
		JOURNAL_BOOK: "03",
	},

	// 特殊なアイテムID
	ITEM_JOURNAL_BOOK_ID: "21",

	// ジャーナルの種類
	JOURNAL: {
		IMAGE: 1,

	},


	// こいしの歩ける範囲の上 上限(px)
	WALK_DEPTH_LIMIT: 240,

	// 3rd eye の最大値
	MAX_3RDEYE_GAUGE: 3600,
	// 目薬 1回での3rd eye の回復値
	EYEDROPS_RECOVER_3RDEYE_GAUGE: 3600,
	// 3rd eye の自然消耗値(1フレームごと)
	ABRASION_3RDEYE_GAUGE: 1,



	// フィールドでランダムに流れるノイズ
	CHAPTER0: {
		NOISE_SOUND_LIST: ["noise1", "noise2", "noise3", "noise4", "noise5"],
		NOISE_SOUND_INTERVAL_COUNT: 1200,
		NOISE_SOUND_PROB: 50,
	}
};

if (DEBUG.ON) {
	CONSTANT.DEBUG = DEBUG;
}
module.exports = CONSTANT;
