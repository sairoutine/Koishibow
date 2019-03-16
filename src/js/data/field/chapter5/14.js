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
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: null,
	leftField: "chapter5_04",
	background: null,
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
				{"chara": "koishi","exp": "look_bottom", "serif": _("あったーっ"), "option": {"getItem": "32"}},
				{"chara": "koishi","exp": "yes", "serif": _("これで友達を助けられるわ")},
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
		},
	],
};

