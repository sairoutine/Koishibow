'use strict';
var _ = require('i18n4v')
// 病院の廊下1(コンクリ、廃れてる感じ) 車椅子とかあったほうがいいかも
// chapter0, chapter5, chapter6 それぞれに存在するので
// コレを修正する際はほかも修正する
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter6_02",
	chapter: 6,
	bgm: "silent",
	rightStartPosition: {x: 800, y: 250},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter6_03",
	leftField: "chapter6_01",
	upField: null,
	downField: null,
	background: "chapter0-hospital_corridor1-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter6_hospital_corridor1_firstaccess"], "process": [
			// 1度目アクセス済み
			[
			],
			// 1度目まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "bm", "exp": null, "serif":_("ォギャーッ")},
						{"chara": "koishi", "exp": "look_top", "serif":_("なに！？")},
						{"id": "chapter6-01-show_bm", "save": true},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter6_hospital_corridor1_firstaccess"]}
			],
		]},

		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter6-01-seen_bm"], "process": [
			// BMを自室で見た
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter6_hospital_corridor1_secondaccess"], "process": [
					// 2度目アクセス済み
					[
					],
					// 2度目まだ未アクセス
					[
						{"type": "process", "value": "playTalk", "arguments": [
							[
								{"chara": "koishi","exp": "afraid", "serif": _("なにあれ")},
								{"chara": "bm","exp": null, "serif": _("ア˝ー！")},
								{"chara": "koishi","exp": "look_bottom", "serif": _("こわい")},
							]
						]},
						{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter6_hospital_corridor1_secondaccess"]}
					],
				]},
			],
			// BMを自室でまだ見てない
			[
			],
		]},

	],
	objects: [
		{
			no: ++I,
			image: "chapter0-hospital_corridor1-obj-01-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ストレッチャー",
			serif: [
				{"chara": "koishi","serif":_("へんなベッド")},
			],
			x: 814,
			y: 608,
			scale: 0.7,
			action_name: "touch",
			sound_name: "chapter0-hospital_corridor1-sound_strecher",
			position_type: "front",
			width: 400,
			height: 200,
		},
		{
			no: ++I,
			image: "chapter0-hospital_corridor1-obj-02-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "キャビネット",
			serif: [
				{"chara": "koishi","serif":_("くすりはいらない……")},
			],
			x: 279,
			y: 378,
			scale: 0.7
		},
		{
			no: ++I,
			image: "chapter0-hospital_corridor1-obj-03-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "救急箱",
			serif: [
				{"chara": "koishi","serif":_("くーくーばこ！")},
				{"chara": "koishi","serif":_("けがしてないよ！")},
			],
			x: 281,
			y: 280,
			scale: 0.7,
			sound_name: "chapter0-hospital_corridor1-sound_aidkit",
			target_x: 278,
			target_y: 465
		},
		{
			no: ++I,
			image: "chapter0-hospital_corridor1-obj-04-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "メス",
			serif: [
				{"chara": "koishi","serif":_("ナイフ")},
			],
			x: 853,
			y: 534,
			scale: 0.7,
			action_name: "look_front",
			position_type: "front",
		},
		{
			no: "bm",
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "BM(左)",
			serif: null,
			width: 0, height: 0,
			x: 0, y: 360,
		},
		{
			no: ++I,
			image: "paper", type: CONSTANT.JOURNAL_FRONT_TYPE, x: 258, y: 689, scale: 2/3, journal_id: "journalXXX"}, // TODO: ジャーナルを設定
	],
};

