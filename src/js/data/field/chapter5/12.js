'use strict';
var _ = require('i18n4v')
// 地上2階
// さとりの部屋
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_12",
	chapter: 5,
	bgm: "field12",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: "chapter5_09",
	upField: null,
	downField: null,
	background: "chapter5-12-bg-001",
	walkSound: "walking_bare_wood",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_12_10185"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5-12-show_orin"], "process": [
					// お燐がいるなら
					[

						{"type": "process", "value": "playTalk", "arguments": [
							[
								{"chara": "orin","exp": "orin-wait",  serif1: _("うにゃーっ"), serif2: _("うにゃーっ"), serif3: _("うにゃーっ"), serif4: _("うにゃーっ")},
								{"chara": "koishi","exp": "look_front",  serif1: _("ねこちゃん！"), serif2: _("ねこちゃん！"), serif3: _("猫だ！"), serif4: _("猫だ！")},
								{"chara": "koishi","exp": null,  serif1: _("にゃんにゃ"), serif2: _("にゃんにゃ"), serif3: _("にゃんにゃ"), serif4: _("にゃんにゃ")},
								{"chara": "orin","exp": "orin-wait",  serif1: _("んみゃ"), serif2: _("んみゃ"), serif3: _("んみゃ"), serif4: _("んみゃ"), "option": {"getJournal": "journal029"}},
							]
						]},
						{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_12_10185"]}
					],
					// お燐がいない
					[],
				]},
			],
		]},


	],
	objects: [
		{
			no: "orin",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "おりん",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [
				{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["33"], "serifs": [
					// 鍵を持っている
					[
						{"chara": "koishi","exp": "yes",  serif1: _("みてみて！"), serif2: _("みてみて！"), serif3: _("みてみて！"), serif4: _("みてみて！")},
						{"chara": "koishi","exp": "yes",  serif1: _("鍵見つけたのよ"), serif2: _("鍵見つけたのよ"), serif3: _("鍵見つけたのよ"), serif4: _("鍵見つけたのよ")},
						{"chara": "koishi","exp": "yes",  serif1: _("これで解決！"), serif2: _("これで解決！"), serif3: _("あの子を助けましょ！"), serif4: _("あの子を助けましょ！")},
						{"chara": "orin","exp": "orin-ura_wait",  serif1: _("んなー"), serif2: _("んなー"), serif3: _("んなー"), serif4: _("んなー")},
					],
					// 鍵を持っていない
					[
						{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter5_12-orin-limit", 1], "serifs": [
							[
								{"id": "chapter5-07-show_shiba", "save": true}, // 柴犬を登場させる
								{"id": "chapter5-12-orin_talk1", "save": true}, // お燐との1度目の会話
								{"chara": "orin","exp": "orin-ura_wait",  serif1: _("あら！"), serif2: _("あら！"), serif3: _("あら！"), serif4: _("あら！")},
								{"chara": "orin","exp": "orin-ura_wait",  serif1: _("こいし様おひさしぶりですね"), serif2: _("こいし様おひさしぶりですね"), serif3: _("こいし様おひさしぶりですね"), serif4: _("こいし様おひさしぶりですね")},
								{"chara": "koishi","exp": "look_front", "serif": _("えっ")},
								{"chara": "koishi","exp": null,  serif1: _("私のこと知ってるの"), serif2: _("私のこと知ってるの"), serif3: _("何してるの"), serif4: _("何してるの")},
								{"chara": "orin","exp": "orin-ura_wait",  serif1: _("あたりまえじゃないですか"), serif2: _("あたりまえじゃないですか"), serif3: _("あたりまえじゃないですか"), serif4: _("あたりまえじゃないですか")},
								{"chara": "orin","exp": "orin-ura_wait",  serif1: _("おそうじちゅうなんです"), serif2: _("おそうじちゅうなんです"), serif3: _("おそうじちゅうなんです"), serif4: _("おそうじちゅうなんです")},
								{"chara": "koishi","exp": "yes",  serif1: _("そうなんだ"), serif2: _("そうなんだ"), serif3: _("そうなんだ"), serif4: _("そうなんだ")},
								{"chara": "orin","exp": "orin-ura_reaction_01",  serif1: _("ご主人様に御用ですか？"), serif2: _("ご主人様に御用ですか？"), serif3: _("ご主人様に御用ですか？"), serif4: _("ご主人様に御用ですか？")},
								{"chara": "orin","exp": null,  serif1: _("あいにくお出かけされていますが"), serif2: _("あいにくお出かけされていますが"), serif3: _("あいにくお出かけされていますが"), serif4: _("あいにくお出かけされていますが")},
								{"chara": "koishi","exp": "look_bottom",  serif1: _("べつに"), serif2: _("べつに"), serif3: _("ううんいいの"), serif4: _("ううんいいの")},
							],
							[
								{"chara": "koishi","exp": "look_top",  serif1: _("ねえ鍵知ってる？"), serif2: _("ねえ鍵知ってる？"), serif3: _("ねえ鍵知ってる？"), serif4: _("ねえ鍵知ってる？")},
								{"chara": "orin","exp": "orin-ura_reaction_01",  serif1: _("なんの鍵ですか？"), serif2: _("なんの鍵ですか？"), serif3: _("なんの鍵ですか？"), serif4: _("なんの鍵ですか？")},
								{"chara": "orin","exp": null,  serif1: _("屋敷の鍵はみんなご主人様が\n持っているはずですケド"), serif2: _("屋敷の鍵はみんなご主人様が\n持っているはずですケド"), serif3: _("屋敷の鍵はみんなご主人様が\n持っているはずですケド"), serif4: _("屋敷の鍵はみんなご主人様が\n持っているはずですケド")},
							],
						]},
					],
				]},
			],
			serif: [
				{"chara": "orin","exp": "orin-wait",  serif1: _("なーん"), serif2: _("なーん"), serif3: _("なーん"), serif4: _("なーん")},
			],
			x: 750, y: 450,
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
			// お空との会話後に出現
			// その後、アライグマとの会話後に 5-9 へ移動する
			show_if_event_true: "chapter5-12-show_orin",
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
				{"chara": "koishi","exp": null,  serif1: _("日記！"), serif2: _("日記！"), serif3: _("日記だわ！"), serif4: _("日記だわ！")},
				{"chara": "koishi","exp": null,  serif1: _("これお姉ちゃんの"), serif2: _("これお姉ちゃんの"), serif3: _("これお姉ちゃんの"), serif4: _("これお姉ちゃんの")},
				{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
				{"chara": "koishi","exp": null,  serif1: _("死んだんじゃなかったっけ......"), serif2: _("死んだんじゃなかったっけ......"), serif3: _("死んだんじゃなかったっけ......"), serif4: _("死んだんじゃなかったっけ......"), "option": {"getJournal": "journal023"}},
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
		{
			no: ++I,
			type: CONSTANT.JOURNAL_BACK_TYPE,
			x: 100, y: 600,
			journal_id: "journal040",
		},
		{
			no: ++I,
			type: CONSTANT.ITEM_TYPE,
			name: "目薬",
			image: "eyedrops",
			x: 250,
			y: 300,
			height: 300,
			scale: 2/3,
			item_id: "01",
			position_type: "lying",
		},


	],
};

