'use strict';
var DEBUG = require("./debug_constant");

var CONSTANT = {
	DEBUG: {},

	// 体験版モードかどうか
	TRIAL: false,

	// Steamモードかどうか
	STEAM: false,

	// 言語
	LANGUAGE: "ja",
	// LANGUAGE: "en",
	// LANGUAGE: "ch",
	// LANGUAGE: "tw",

	// ゲームを最初から始めた場合の最初のフィールド
	INITIAL_CHAPTER: "opening_movie_chapter0",

	// 新規ゲーム開始時に操作説明を表示するか否か
	IS_SHOW_HOWTO: true,

	// バージョン
	VERSION: "1.0.0",

	// 会話のタイプ速度
	TYPOGRAPHY_SPEED: 5,

	// こいしの歩く速度(最高速度)
	KOISHI_MAX_SPEED: 12,
	// こいしの歩く速度(最低速度)
	KOISHI_MIN_SPEED: 4,
	// こいしの歩く速度(初速)
	KOISHI_INITIAL_SPEED: 12,
	// こいしの歩く速度(加速度)
	KOISHI_ACCEL_SPEED: -2,

	// オブジェクトの種類
	STATIC_IMAGE_TYPE:       1,
	ANIME_IMAGE_TYPE:        2,
	JOURNAL_FRONT_TYPE:      3,
	JOURNAL_BACK_TYPE:       4,
	ARROW_BACK_TYPE:         5,  // 3rdeye を照らすと見える矢印
	ANIME_EVENT_IMAGE_TYPE:  6,  // chapter0 最後のカーペット
	ITEM_TYPE:               7,
	FIELD_CHANGE_TYPE:       8,
	BUTTON_KOISHI_TYPE:      9,  // ゲームオーバー用ボタンの目こいし
	KOISHI_HAT_TYPE:         10, // chapter0,6 こいしの帽子
	STATIC_EVENT_IMAGE_TYPE: 11, // chapter1 ボール
	FAUSET_TYPE:             12, // chapter1 蛇口
	SUSPENDED_TREE_TYPE:     13, // chapter1 うさぎが吊るされた木
	HASHIGO_TYPE:            14, // chapter1 はしごをかけられる場所
	CHAPTER6_LAST_JUNCTION:  15, // chapter6 最後の選択肢

	// アイテムの種類
	ITEM: {
		EYEDROPS:          "01",
		NON_USABLE:        "02",
		JOURNAL_BOOK:      "03",
		CHAPTER4_TAPE:     "04",
	},

	// 特殊なアイテムID
	ITEM_JOURNAL_BOOK_ID: "21",
	ITEM_CHAPTER4_RECORDER_ID: "22",

	// ジャーナルの種類
	JOURNAL: {
		IMAGE: 1,

	},

	// 指定のフィールドでカセットテープ「チャルメラ」を使ったときに立つフラグ
	ITEM_ID_24_EVENT_NAME: "chapter4-07-event-01_played",

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
		NOISE_SOUND_LIST: ["chapter0_noise1", "chapter0_noise2", "chapter0_noise3", "chapter0_noise4", "chapter0_noise5"],
		NOISE_SOUND_INTERVAL_COUNT: 1200,
		NOISE_SOUND_PROB: 50,
	},
	CHAPTER4: {
		NOISE_SOUND_LIST: ["chapter4_noise1", "chapter4_noise2", "chapter4_noise3", "chapter4_noise4"],
		NOISE_SOUND_INTERVAL_COUNT: 1200,
		NOISE_SOUND_PROB: 50,
	}
};

if (DEBUG.ON) {
	CONSTANT.DEBUG = DEBUG;
}
module.exports = CONSTANT;
