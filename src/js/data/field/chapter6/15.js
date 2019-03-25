'use strict';
var _ = require('i18n4v');
// 混沌
var CONSTANT = require("../../../constant");
var I = 0;

module.exports = {
	key: "chapter6_15",
	chapter: 6,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: "chapter6_16",
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter6_15_firstaccess"], "process": [
			// 1度目アクセス済み
			[
			],
			// 1度目まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "bm","exp": "bm-reaction_01", "serif": _("バアアアア！！")},
						{"chara": "koishi","exp": "afraid", "serif": _("嫌！")},
						{"chara": "koishi","exp": null, "serif": _("こないで！")},
						{"chara": "koishi","exp": null, "serif": _("私悪くないでしょ！")},
					],
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter6_15_firstaccess"]}
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
			anime1: "chapter5-04-bg-01_anime_1",
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
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ほこりの積もった観葉植物",
			serif: null,
			x: 840,
			y: 305,
			width: 150,
			height: 300,
			scale: 0.7,
			anime1: "chapter0-mansion_corridor2-obj-04-01-obj01",
			anime2: "chapter0-mansion_corridor2-obj-04-01-obj02",
			anime3: "chapter0-mansion_corridor2-obj-04-01-obj03",
			anime4: "chapter0-mansion_corridor2-obj-04-01-obj04",
			anime5: "chapter0-mansion_corridor2-obj-04-01-obj05",
			anime6: "chapter0-mansion_corridor2-obj-04-01-obj06",
			action_name: "touch",
			sound_name:      "chapter0-mansion_corridor2-flower_front",
			sound_back: "chapter0-mansion_corridor2-flower_back",
			position_type: "lying",

		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "本",
			serif: null,
			x: 340, y: 530,
			scale: 0.7,
			anime1: "chapter0-myroom-obj-02-01-obj01",
			anime2: "chapter0-myroom-obj-02-01-obj02",
			anime3: "chapter0-myroom-obj-02-01-obj03",
			width: 80, height: 80,
			action_name: "look_bottom",
			sound_name: "chapter0-myroom-open_book",
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "クレヨン",
			serif: null,
			x: 600, y: 530,
			scale: 0.7,
			anime1: "chapter0-myroom-obj-03-01-obj01",
			anime2: "chapter0-myroom-obj-03-01-obj02",
			anime3: "chapter0-myroom-obj-03-01-obj03",
			width: 80, height: 80,
			action_name: "look_bottom",
			sound_name: "chapter0-myroom-move_crayon",
			position_type: "lying",
		},
		{
			no: "bm",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "BM",
			serif: null,
			x:480, y:360,
			scale: 2/3,
			anime1: "bm-reaction_01",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			width: 0,
			height: 0,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},


	],
};

