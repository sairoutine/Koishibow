'use strict';
var DEBUG = require("./debug_constant");

var CONSTANT = {
	DEBUG: {},

	// オブジェクトの種類
	STATIC_IMAGE_TYPE: 1,
	ANIME_IMAGE_TYPE:  2,

};

if (DEBUG.ON) {
	CONSTANT.DEBUG = DEBUG;
}
module.exports = CONSTANT;
