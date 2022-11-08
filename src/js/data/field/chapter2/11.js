'use strict';
//1-10と同様。
var CONSTANT = require("../../../constant");
var I = 0;
var _ = require('i18n4v')
module.exports = {
	key: "chapter2_11",
	chapter: 2,
	bgm: "field4",
	rightStartPosition:   {x: 800, y: 350},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter2_10",
	leftField: "chapter2_12",
	upField: null,
	downField: null,
	background: "chapter2-11-bg-001",
	walkSound: "walking_bare_outside",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter2_11-20350"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_front", serif1: _("うわー"), serif2: _("うわー"), serif3: _("うわー"), serif4: _("うわー")},
						{"chara": "koishi", "exp": null, serif1: _("まえとおなじだ！"), serif2: _("懐かしいなー"), serif3: _("懐かしいなー"), serif4: _("懐かしいなー")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter2_11-20350"]}
			],
		]},
	],
	objects: [
		/*
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "砂場",
			serif: null,
			x: 720*2/3, y: 770*2/3,
			scale: 2/3,
			anime1: "chapter1-10-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-10-obj-01-obj02",
			anime5: "chapter1-10-obj-01-obj03",
			anime6: "chapter1-10-obj-01-obj04",

			action_name: null,
			sound_name: null,
			sound_back: "chapter1-10-flow_sand",
			position_type: "lying",
		},
		*/
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "釘",
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2_11-20360"], "serifs": [
					// 2回目以降
					[
						{"chara": "koishi", "exp": "look_bottom", serif1: _("いたい！"), serif2: _("いたい！"), serif3: _("いたい！"), serif4: _("いたい！")},
						{"chara": "koishi", "exp": null, serif1: _("何か埋まってる！"), serif2: _("何か埋まってる！"), serif3: _("何か埋まってる！"), serif4: _("何か埋まってる！")},
					],
					// 1回目
					[
						{"id": "chapter2_11-20360", "save": true},
						{"chara": "koishi", "exp": "look_bottom", serif1: _("いたい！"), serif2: _("いたい！"), serif3: _("いたい！"), serif4: _("いたい！")},
						{"chara": "koishi", "exp": null, serif1: _("何か埋まってる！"), serif2: _("何か埋まってる！"), serif3: _("何か埋まってる！"), serif4: _("何か埋まってる！"), "option": {"getJournal": "journal042"}},
					],
				]},
			],
			serif_back: [
				{"id": "chapter2_11-20370", "save": true},
				{"chara": "koishi", "exp": "look_bottom", serif1: _("釘だ！"), serif2: _("釘だ！"), serif3: _("釘だ！"), serif4: _("釘だ！"), "option": {"getItem": "39"}},
				{"chara": "koishi", "exp": null, serif1: _("これこれ"), serif2: _("これこれ"), serif3: _("これこれ"), serif4: _("これこれ")},
			],
			width: 0, height: 0,
			x: 349, y: 363,
			scale: 2/3,
			anime1: "chapter2-11-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter2-11-obj-01-obj02",
			anime5: "chapter2-11-obj-01-obj03",
			anime6: "chapter2-11-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",

			not_show_if_event_true: "chapter2_11-20370",
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "砂場",
			serif: [
				{"chara": "koishi", "exp": "look_bottom", serif1: _("砂場って変な物ばっかりね！"), serif2: _("砂場って変な物ばっかりね！"), serif3: _("砂場って変な物ばっかりね！"), serif4: _("砂場って変な物ばっかりね！")},
			],
			serif_back: null,
			width: 0, height: 0,
			x: 349, y: 363,
			position_type: "lying",
			sound_back: "chapter1-10-flow_sand",
			show_if_event_true: "chapter2_11-20370",
		},
	],
};

