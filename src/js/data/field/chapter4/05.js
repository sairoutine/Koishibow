'use strict';
var _ = require('i18n4v')
//・テープ「チャルメラ」
// ・メリー
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_05",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	rightField: "chapter4_06",
	leftField: "chapter4_04",
	background: "chapter4-05-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下へのフィールド移動",
			x: 480,
			y: 710,
			width: 960,
			height: 10,
			next_field_name: "chapter4_08",
		},
	],
};

