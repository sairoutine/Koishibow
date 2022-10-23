'use strict';
var _ = require('i18n4v')
// 屋敷の廊下1
// TODO: journal043 が フィールドに落ちてる(サードアイ)
// TODO: 0-4と同様だが三輪車がなくなっている
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter2_04",
	chapter: 2,
	bgm: "field2",
	sub_bgms: ["chapter0-mansion_corridor1-wind"],
	rightStartPosition:   {x: 800, y: 240},
	leftStartPosition:    {x: 180, y: 370},
	defaultStartPosition: {x: 180, y: 370, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter2_05",
	leftField: "chapter2_03",
	upField: null,
	downField: null,
	background: "chapter0-mansionpas-001",
	walkSound: "walking_bare_wood",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter2_04_20060"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_front", serif1: _("三輪車もない！"), serif2: _("三輪車もない！"), serif3: _("三輪車もない！"), serif4: _("三輪車もない！")},
						{"chara": "koishi", "exp": null, serif1: _("乗ろうと思ったのに！"), serif2: _("だれか乗って行っちゃった？"), serif3: _("だれか乗って行っちゃった？"), serif4: _("だれか乗って行っちゃった？")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter2_04_20060"]}
			],
		]},
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ランプ",
			serif: [
				{"chara": "koishi","serif": _("まぶしい")},
			],
			x: 805,
			y: 65,
			scale: 0.7,
			height: 600,
			anime1: "chapter0-mansion_corridor1-obj-01-01-obj01",
			anime2: "chapter0-mansion_corridor1-obj-01-01-obj02",
			anime3: "chapter0-mansion_corridor1-obj-01-01-obj03",
			anime4: "chapter0-mansion_corridor1-obj-01-01-obj04",
			anime5: "chapter0-mansion_corridor1-obj-01-01-obj05",
			anime6: "chapter0-mansion_corridor1-obj-01-01-obj06",
			action_name: "look_top",
			sound_name:      "chapter0-mansion_corridor1-lamp_front",
			sound_back: "chapter0-mansion_corridor1-lamp_back"
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "カーテン",
			serif: [
				{"chara": "koishi","serif": _("いまはかくれんぼしてないから\nあとでね！")},
			],
			x: 190,
			y: 135,
			width: 300,
			height: 500,
			scale: 0.7,
			anime1: "chapter0-mansion_corridor1-obj-03-01-obj01",
			anime2: "chapter0-mansion_corridor1-obj-03-01-obj02",
			anime3: "chapter0-mansion_corridor1-obj-03-01-obj03",
			anime4: "chapter0-mansion_corridor1-obj-03-01-obj04",
			anime5: "chapter0-mansion_corridor1-obj-03-01-obj05",
			anime6: "chapter0-mansion_corridor1-obj-03-01-obj06",
			action_name: "look_top",
			sound_back: "chapter0-mansion_corridor1-open_curtain"
		},


	],

};
