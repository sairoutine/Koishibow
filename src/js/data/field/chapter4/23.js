'use strict';
var _ = require('i18n4v');
// 「新品のテープ」
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_23",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 400, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: null,
	leftField:  "chapter4_22",
	upField:    "chapter4_20",
	downField:  "chapter4_26",
	background: "chapter4-23-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			image: "item_23",
			name: "新品のテープ",
			serif: [
				{"chara": "koishi", "exp": "touch",  serif1: _("これね！"), serif2: _("これね！"), serif3: _("これね！"), serif4: _("これね！"), "option": {"getItem": "26"}},
				{"chara": "koishi", "exp": "yes",  serif1: _("メリーがまってるわ！"), serif2: _("メリーがまってるわ！"), serif3: _("メリーがまってるわ！"), serif4: _("メリーがまってるわ！"), "option": {"resetFlag": "chapter4-23-show_tape4"}},
			],
			x:359.50*2/3, y:762.*2/3,
			scale: 2/3,
			sound_name: null,
			position_type: "lying",
			show_if_event_true: "chapter4-23-show_tape4",
		},
	],
};

