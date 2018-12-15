'use strict';
var _ = require('i18n4v')
//蓮子「ここをキャンプ地としましょう」
//メリー「わからなかったらカンでもいいのよ」
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_38",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	rightField: "chapter4_39",
	leftField: "chapter4_37",
	background: "chapter4-38-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "上へのフィールド移動",
			x: 480,
			y: 720 - CONSTANT.WALK_DEPTH_LIMIT,
			width: 960,
			height: 10,
			next_field_name: "chapter4_34",
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下へのフィールド移動",
			x: 480,
			y: 710,
			width: 960,
			height: 10,
			next_field_name: "chapter4_42",
		},


	],
};

