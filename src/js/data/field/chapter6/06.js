'use strict';
// 新生児室
var CONSTANT = require("../../../constant");
var I = 0;
var _ = require('i18n4v')

module.exports = {
	key: "chapter6_06",
	chapter: 6,
	bgm: "field14",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter6_07",
	leftField: "chapter6_04",
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_default",
	initialProcess: [
		/* ゲーム上、セリフに違和感があるので廃止した
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter6_06_firstaccess"], "process": [
			// 1度目アクセス済み
			[
			],
			// 1度目まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_top",  serif1: _("なんなの！"), serif2: _("なんなの！"), serif3: _("なんなの！"), serif4: _("なんなの！")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter6_06_firstaccess"]}
			],
		]},
		*/

		{"type": "criteria", "value": "isPlayed", "arguments": ["after_chapter6-13-event-01"], "process": [
			// chapter6-13-event-01 後
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter6_06_secondaccess"], "process": [
					// 2度目アクセス済み
					[
					],
					// 2度目まだ未アクセス
					[
						{"type": "process", "value": "playTalk", "arguments": [
							[
								{"chara": "koishi", "exp": "look_bottom", "serif": _("うー")},
								{"chara": "koishi", "exp": "look_bottom",  serif1: _("あたまいてて"), serif2: _("あたまいてて"), serif3: _("あたまいてて"), serif4: _("頭が痛いわ")},
							]
						]},
						{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter6_06_secondaccess"]}
					],
				]},
			],
			// chapter6-13-event-01 前
			[
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
				{"chara": "koishi","exp": "look_bottom",  serif1: _("なにかしら"), serif2: _("なにかしら"), serif3: _("なにかしら"), serif4: _("なにかしら")},
				{"chara": "koishi","exp": null, "serif": _("......"), "option": {"playSound": "chapter6-02-bark_bm"}},
				{"chara": "bm","exp": null,  serif1: _("あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛"), serif2: _("あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛"), serif3: _("あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛"), serif4: _("あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛"), "option": {"playEventMovie": "chapter6-06-event-01"}},
			],
			x: 480, y: 560,
			scale: 2/3,
			position_type: "lying",
			show_if_event_true: "chapter6-06-show_journal",
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
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "窓",
			serif: [
				{"chara": "koishi","exp": "look_front", "serif": _("なにしてるの")},
			],
			serif_back: [
				{"chara": "koishi","exp": null, "serif": _("なにあれ")},
				{"chara": "koishi","exp": null, "serif": _("気持ち悪い")},
			],
			width: 100, height: 500,
			x: 430, y: 150,
			sound_name: "chapter6-06-look_window",
		},
		{
			no: ++I,
			type: CONSTANT.JOURNAL_FRONT_TYPE,
			x: 730, y: 420,
			journal_id: "journal038",
		},
		{
			no: ++I,
			type: CONSTANT.JOURNAL_BACK_TYPE,
			x: 650, y: 420,
			journal_id: "journal039",
		},
		{
			no: ++I,
			type: CONSTANT.ITEM_TYPE,
			name: "目薬",
			image: "eyedrops",
			x: 870,
			y: 295,
			height: 300,
			scale: 2/3,
			item_id: "01",
			position_type: "lying",
		},


	],
};

