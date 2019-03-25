'use strict';
var _ = require('i18n4v');
// 病院の外
var CONSTANT = require("../../../constant");
var I = 0;

var LAST_JUNCTION_SERIF = [
	{"type": "criteria_serif", "criteria": "growth", "arguments": [], "serifs": [
		// 発達度1
		[
			{"chara": "koishi", "exp": null, "serif": "", "option": {"playEvent": "chapter6-event-ending03-1"}},
		],
		// 発達度2
		[
			{"chara": "koishi", "exp": null, "serif": "", "option": {"playEvent": "chapter6-event-ending2-1"}},
		],
		// 発達度3
		[
			{"chara": "koishi", "exp": null, "serif": "", "option": {"playEvent": "chapter6-event-ending2-1"}},
		],
		// 発達度4
		[
			{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter6_07-growth4-limit", 4], "serifs": [
				[
					{"chara": "koishi", "exp": "look_top", "serif":_("わたしはどうしたらいいの")},
				],
				[
					{"chara": "koishi", "exp": "look_top", "serif":_("ちょっと待って")},
				],
				[
					{"chara": "koishi", "exp": "look_top", "serif":_("待ってよ")},
				],
				[
					{"chara": "koishi", "exp": "look_top", "serif":_("待ってってば")},
					{"chara": "koishi", "exp": "look_top", "serif":_("私決めたの！")},
					{"chara": "koishi", "exp": null, "serif": "わたしのことは自分で決めるわ", "option": {"changeScene": ["./movie/production/chapter6_staffroll.mp4", function (core) {
						core.scene_manager.changeScene("event_talk", "chapter6-event-ending01-2");
					}]}},
				],
			]},
		],
	]},
];

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
					[
						{"chara": "koishi", "exp": "look_top", "serif":_("そとだ！")},
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
			serif: [
				{"chara": "koishi","exp": "look_top", "serif": _("あかりだ")},
			],
			serif_back: [
				{"chara": "koishi","exp": "look_top", "serif": _("なにこれ")},
				{"chara": "koishi","exp": "look_top", "serif": _("気持ち悪い")},
				{"chara": I,"exp": null, "serif": _("あばぶ"), "id": "chapter6-07-show_last_junction", "save": true},
			],
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
			serif: null,
			width: 100, height: 500,
			x: 430, y: 150,
		},
		{
			no: ++I,
			type: CONSTANT.CHAPTER6_LAST_JUNCTION,
			name: "過去を葬る",
			text: _("過去を葬る"),
			is_reverse: true,
			serif: LAST_JUNCTION_SERIF,
			width: 100, height: 500,
			x: 0 + 100, y: 360 - 100,
			scale: 1/3,
			show_if_event_true: "chapter6-07-show_last_junction",
		},
		{
			no: ++I,
			type: CONSTANT.CHAPTER6_LAST_JUNCTION,
			name: "過去を別つ",
			text: _("過去を別つ"),
			is_reverse: false,
			serif: LAST_JUNCTION_SERIF,
			width: 100, height: 500,
			x: 960 - 100, y: 360 - 100,
			scale: 1/3,
			show_if_event_true: "chapter6-07-show_last_junction",
		},
	],
};

