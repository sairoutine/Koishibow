'use strict';
// ナースステーション
var CONSTANT = require("../../../constant");
var I = 0;
var _ = require('i18n4v')
module.exports = {
	key: "chapter6_04",
	chapter: 6,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter6_06",
	leftField: "chapter6_03",
	upField: null,
	downField: null,
	background: "chapter6-04-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter6_04_firstaccess"], "process": [
			// 1度目アクセス済み
			[
			],
			// 1度目まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_front", "serif":_("なにここ")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter6_04_firstaccess"]}
			],
		]},
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ITEM_TYPE,
			name: "目薬",
			image: "eyedrops",
			x: 589*2/3, y: 281.50*2/3,
			scale: 2/3,
			item_id: "01",
			show_if_event_true: "chapter6-04-show_eyedrops",
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "部屋の隅",
			serif: [
				{"chara": "koishi","exp": "look_bottom", "serif": _("なにこれ"), "option": {"getJournal": "journalXXX"}}, // TODO: ジャーナル指定
				{"chara": "koishi","exp": null, "serif": _("......"), "option": {"changeField": "chapter6_10"}},
			],
			width: 150, height: 200,
			x: 670, y: 300,
			scale: 2/3,
			target_x: 532, target_y: 418
		},
	],
};

