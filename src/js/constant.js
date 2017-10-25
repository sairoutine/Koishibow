'use strict';
var DEBUG = require("./debug_constant");

var CONSTANT = {
	DEBUG: {},

	// オブジェクトの種類
	STATIC_IMAGE_TYPE: 1,
	ANIME_IMAGE_TYPE:  2,


	// こいしの歩ける範囲の上 上限(px)
	WALK_DEPTH_LIMIT: 300,
};

if (DEBUG.ON) {
	CONSTANT.DEBUG = DEBUG;
}
module.exports = CONSTANT;
