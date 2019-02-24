'use strict';
var _ = require('i18n4v');
// 「新品のテープ」
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_23",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: null,
	leftField: "chapter4_22",
	background: "chapter4-23-bg-001",
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
			next_field_name: "chapter4_20",
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下へのフィールド移動",
			x: 480,
			y: 710,
			width: 960,
			height: 10,
			next_field_name: "chapter4_26",
		},
		{
			no: ++I,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			image: "item_23",
			name: "新品のテープ",
			serif: [
				{"chara": "koishi", "exp": "touch", "serif":_("これね！"), "option": {"getItem": "26"}},
				{"chara": "koishi", "exp": "yes", "serif":_("メリーがまってるわ！"), "option": {"resetFlag": "chapter4-23-show_tape4"}},
			],
			x:359.50*2/3, y:762.*2/3,
			scale: 2/3,
			sound_name: null,
			position_type: "lying",
			show_if_event_true: "chapter4-23-show_tape4",
		},
	],
};

