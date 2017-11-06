'use strict';
var DEBUG = require("./debug_constant");

var CONSTANT = {
	DEBUG: {},

	// オブジェクトの種類
	STATIC_IMAGE_TYPE:      1,
	ANIME_IMAGE_TYPE:       2,
	PAPER_TYPE:             3,
	ANIME_EVENT_IMAGE_TYPE: 4, // chapter0 最後のカーペット


	// こいしの歩ける範囲の上 上限(px)
	WALK_DEPTH_LIMIT: 300,

	// フィールドでランダムに流れるノイズ
	NOISE_SOUND_LIST: ["noise1", "noise2", "noise3", "noise4", "noise5"],
	NOISE_SOUND_INTERVAL_COUNT: 1200,
	NOISE_SOUND_PROB: 50,
};

if (DEBUG.ON) {
	CONSTANT.DEBUG = DEBUG;
}
module.exports = CONSTANT;
