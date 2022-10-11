'use strict';
var _ = require('i18n4v')
// 病院の廊下1(コンクリ、廃れてる感じ) 車椅子とかあったほうがいいかも
// chapter0, chapter2, chapter5, chapter6 それぞれに存在するので
// コレを修正する際はほかも修正する
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter6_02",
	chapter: 6,
	bgm: "silent",
	rightStartPosition:   {x: 800, y: 250},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
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
				{"type": "process", "value": "playSound", "arguments": ["chapter6-02-bark_bm"]},
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"id": "chapter6-01-show_bm", "save": true},
						{"chara": "bm", "exp": null,  serif1: _("ォギャーッ"), serif2: _("ォギャーッ"), serif3: _("ォギャーッ"), serif4: _("ォギャーッ")},
						{"chara": "koishi", "exp": "look_top",  serif1: _("なに！？"), serif2: _("えっ"), serif3: _("えっ"), serif4: _("なにかしら......")},
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
								{"chara": "bm","exp": null,  serif1: _("ア゛ー！"), serif2: _("ア゛ー！"), serif3: _("ア゛ー！"), serif4: _("ア゛ー！")},
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
			serif: null,
			x: 814,
			y: 608,
			scale: 0.7,
			action_name: null,
			sound_name: null,
			position_type: "front",
			width: 400,
			height: 200,
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ストレッチャーの下",
			serif: null,
			width: 400,
			height: 100,
			x: 814,
			y: 708,
		},

		{
			no: ++I,
			image: "chapter0-hospital_corridor1-obj-02-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "キャビネット",
			serif: null,
			x: 279,
			y: 378,
			scale: 0.7
		},
		{
			no: ++I,
			image: "chapter0-hospital_corridor1-obj-03-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "救急箱",
			serif: null,
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
			serif: null,
			width: 100,
			x: 853,
			y: 534,
			scale: 0.7,
			action_name: null,
			position_type: "front",
		},
		{
			no: "bm",
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "BM(左)",
			serif: null,
			width: 0, height: 0,
			x: 200, y: 80,
		},
		{
			no: ++I,
			type: CONSTANT.JOURNAL_FRONT_TYPE,
			x: 600, y: 530,
			journal_id: "journal035",
		},

	],
};


