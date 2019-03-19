'use strict';
var _ = require('i18n4v')
// 地上2階
// さとりの部屋
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_12",
	chapter: 5,
	bgm: "field11",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: null,
	leftField: "chapter5_09",
	background: "chapter5-12-bg-001",
	walkSound: "walking_bare_wood",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_12_10185"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "orin","exp": "orin-wait", "serif": _("うにゃーっ")},
						{"chara": "koishi","exp": "look_front", "serif": _("ねこちゃん！")},
						{"chara": "koishi","exp": null, "serif": _("にゃんにゃ")},
						{"chara": "orin","exp": "orin-wait", "serif": _("んみゃ")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_12_10185"]}
			],
		]},


	],
	objects: [
		{
			no: "orin",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "おりん",
			loop: true,
			turn_toward_me: true, // こいしの方を向く
			serif_back: [
				{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter5_12-orin-limit", 2], "serifs": [
					[
						{"chara": "orin","exp": "orin-ura_wait", "serif": _("あら！")},
						{"chara": "orin","exp": "orin-ura_wait", "serif": _("こいし様おひさしぶりですね")},
						{"chara": "koishi","exp": "look_front", "serif": _("えっ")},
						{"chara": "koishi","exp": null, "serif": _("私のこと知ってるの")},
						{"chara": "orin","exp": "orin-ura_wait", "serif": _("あたりまえじゃないですか")},
						{"chara": "orin","exp": "orin-ura_wait", "serif": _("おそうじちゅうなんです")},
						{"chara": "koishi","exp": "yes", "serif": _("そうなんだ")},
						{"chara": "orin","exp": "orin-ura_reaction_01", "serif": _("ご主人様に御用ですか？")},
						{"chara": "orin","exp": null, "serif": _("あいにくお出かけされていますが")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("べつに")},
						{"id": "chapter5-12-orin_talk1", "save": true}, // お燐との1度目の会話
					],
					[
						{"chara": "koishi","exp": "look_top", "serif": _("ねえ鍵知ってる？")},
						{"chara": "orin","exp": "orin-ura_reaction_01", "serif": _("なんの鍵ですか？")},
						{"chara": "orin","exp": null, "serif": _("屋敷の鍵はみんなご主人様が持っているはずですケド")},
					],
				]},
			],
			serif: [
				{"chara": "orin","exp": "orin-wait", "serif": _("なーん")},
			],
			x: 800, y: 450,
			scale: 2/3,
			anime1: "orin-wait",
			anime2: null,
			anime3: null,
			anime4: "orin-reverse_ura",
			anime5: "orin-ura_wait",
			anime6: "orin-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "棚",
			serif: null,
			width: 440, height: 150,
			x: 295, y: 375,

		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ベッド",
			serif: null,
			width: 350, height: 210,
			x: 690, y: 380,

		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "キャビネット",
			serif: null,
			width: 80, height: 130,
			x: 890, y: 490,

		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "REDRUM",
			serif: null,
			x: 300, y: 230,
			scale: 2/3,
			anime1: "chapter5-12-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter5-12-obj-01-obj02",
			anime5: "chapter5-12-obj-01-obj03",
			anime6: "chapter5-12-obj-01-obj04",
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "本",
			serif: [
				{"chara": "koishi","exp": null, "serif": _("日記！")},
				{"chara": "koishi","exp": null, "serif": _("これお姉ちゃんの")},
				{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
				{"chara": "koishi","exp": null, "serif": _("死んだんじゃなかったっけ......"), "option": {"getJournal": "journal0XX"}}, // TODO: ジャーナルを設定
			],
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



	],
};

