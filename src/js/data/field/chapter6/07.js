'use strict';
var _ = require('i18n4v');
// 病院の外
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter6_07",
	chapter: 6,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: "chapter6_06",
	upField: null,
	downField: null,
	background: "chapter6-07-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter6_07_firstaccess"], "process": [
			// 1度目アクセス済み
			[
			],
			// 1度目まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[ {"chara": "koishi", "exp": "look_top", "serif":_("そとだ！")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter6_07_firstaccess"]}
			],
		]},
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "電灯",
			serif: null,
			x: 236*2/3, y: 369*2/3,
			width: 100,
			scale: 2/3,
			anime1: "chapter6-07-obj-01",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "電灯",
			serif: [
				{"chara": "koishi","exp": "look_top", "serif": _("なにこれ")},
				{"chara": "koishi","exp": "look_top", "serif": _("気持ち悪い")},
				{"chara": I,"exp": "look_top", "serif": _("あばぶ")},
				{"id": "chapter6-07-show_decision", "save": true},
			],
			width: 100, height: 500,
			x: 430, y: 150,
		},


	],
};

