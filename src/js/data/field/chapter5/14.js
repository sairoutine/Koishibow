'use strict';
var _ = require('i18n4v')
// 地下2階
/*
 真っ暗闇
・鍵
・ジャーナル「かがやき」
*/
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_14",
	chapter: 5,
	bgm: "field12",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: "chapter5_04",
	upField: null,
	downField: null,
	background: "chapter5-02-bg-001",
	walkSound: "walking_bare_wood",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "鍵",
			serif: null,
			serif_back: [
				{"chara": "koishi","exp": "look_bottom",  serif1: _("あったーっ"), serif2: _("あったーっ"), serif3: _("あったーっ"), serif4: _("あったーっ"), "option": {"getItem": "33"}},
				{"chara": "koishi","exp": "yes",  serif1: _("これで友達を助けられるわ"), serif2: _("これで友達を助けられるわ"), serif3: _("これで友達を助けられるわ"), serif4: _("これで友達を助けられるわ"), "option": {"resetFlag": "chapter5-14-show_key"}},
			],
			x: 500,
			y: 640,
			scale: 2/3,

			anime1: "chapter5-14-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter5-14-obj-01-obj02",
			anime5: "chapter5-14-obj-01-obj03",
			anime6: "chapter5-14-obj-01-obj04",
			action_name: null,
			sound_name: null,
			position_type: "lying",
			show_if_event_true: "chapter5-14-show_key",
		},
	],
};

