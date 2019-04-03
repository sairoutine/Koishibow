'use strict';
// ナースステーション
var CONSTANT = require("../../../constant");
var I = 0;
var _ = require('i18n4v')
module.exports = {
	key: "chapter6_04",
	chapter: 6,
	bgm: "silent",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
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
						{"chara": "koishi", "exp": "look_front",  serif1: _("なにここ"), serif2: _("どこだ"), serif3: _("どこだ"), serif4: _("帰りたいんだけど")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter6_04_firstaccess"]}
			],
		]},
	],
	objects: [
		{
			no: ++I,
			image: "eyedrops",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "目薬",
			serif: [
				{"chara": "koishi","exp": null, "serif": "", "option": {"playEvent": "chapter6-04-event-01"}},
			],
			x: 589*2/3, y: 281.50*2/3,
			height: 400,
			scale: 2/3,
			show_if_event_true: "chapter6-04-show_eyedrops",
		},
		{
			no: ++I,
			image: "paper",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "掲示板",
			serif: [
				{"chara": "koishi","exp": "look_front", "serif": _("なにこれ"), "option": {"getJournal": "journal034"}},
				{"id": "chapter6-04-not_show_paper", "save": true},
				{"chara": "koishi","exp": null, "serif": _("......"), "option": {"changeField": "chapter6_10"}},
			],
			width: 150, height: 400,
			x: 670, y: 210,
			scale: 2/3,
			target_x: 532, target_y: 418,
			not_show_if_event_true: "chapter6-04-not_show_paper",
		},
		{
			no: ++I,
			type: CONSTANT.JOURNAL_BACK_TYPE,
			x: 150, y: 400,
			journal_id: "journal037",
		},


	],
};

