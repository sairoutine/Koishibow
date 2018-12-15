'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_06",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	rightField: null,
	leftField: "chapter4_05",
	background: "chapter4-06-bg-001",
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
			next_field_name: "chapter4_03",
		},
	],
};

