'use strict';
// 新生児室
var CONSTANT = require("../../../constant");
var I = 0;
var _ = require('i18n4v')

module.exports = {
	key: "chapter6_06",
	chapter: 6,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter6_07",
	leftField: "chapter6_04",
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter6_06_firstaccess"], "process": [
			// 1度目アクセス済み
			[
			],
			// 1度目まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_top", "serif":_("なんなの！")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter6_06_firstaccess"]}
			],
		]},


	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter6-06-obj-01",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "paper",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ジャーナル",
			serif: [
				{"chara": "koishi","exp": "look_bottom", "serif": _("なにかしら")},
				{"chara": "koishi","exp": null, "serif": _("......")},
				{"chara": "bm","exp": null, "serif": _("あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝あ˝"), "option": {"playEventMovie": "chapter6-06-event-01"}},
				{"chara": "koishi","exp": null, "serif": "", "option": {"changeField": "chapter6_10"}},
			],
			x: 258, y: 689,
			scale: 2/3,
			position_type: "lying",
		},
		{
			no: "bm",
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "BM(上)",
			serif: null,
			width: 0, height: 0,
			x: 480, y: 0,
		},

	],
};

