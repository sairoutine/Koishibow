'use strict';
var _ = require('i18n4v')
// 地下2階
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_04",
	chapter: 5,
	bgm: "field11",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 350, y: 350},
	defaultStartPosition: {x: 790, y: 480, isTowardLeft: true},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter5_14",
	leftField: null,
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_wood",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5-04-show_animal_mogura"], "process": [
			// もぐら表示済み
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_04_10580"], "process": [
					// すでにアクセス済み
					[],
					// まだ未アクセス
					[
						{"type": "process", "value": "playTalk", "arguments": [
							[
								{"chara": "animal_mogura","exp": "animal_mogura-wait",  serif1: _("ピぃーっ"), serif2: _("ピぃーっ"), serif3: _("ピぃーっ"), serif4: _("ピぃーっ")},
								{"chara": "koishi","exp": "look_front",  serif1: _("あはは！"), serif2: _("あはは！"), serif3: _("あはは！"), serif4: _("あはは！")},
								{"chara": "koishi","exp": null,  serif1: _("おめめがヘン！"), serif2: _("おめめがヘン！"), serif3: _("おめめがヘン！"), serif4: _("おめめがヘン！"), "option": {"getJournal": "journal032"}},
							]
						]},
						{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_04_10580"]}
					],
				]},
			],
			// もぐら未表示
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
			anime1: "chapter5-04-bg-01_anime_1",
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
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "上り階段",
			x: 900,
			y: 260,
			width: 150,
			height: 400,
			next_field_name: "chapter5_03",
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "茨",
			serif: null,
			width: 240, height: 690,
			x: 120, y: 300,
		},
		{
			no: "animal_mogura",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "モグラ",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [
				{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter5_04-animal_mogura-limit", 1], "serifs": [
					[
						{"chara": "koishi","exp": "look_front",  serif1: _("あなたは？"), serif2: _("あなたは？"), serif3: _("あなたは？"), serif4: _("あなたは？")},
						{"chara": "animal_mogura","exp": "animal_mogura-ura_wait",  serif1: _("もぐら"), serif2: _("もぐら"), serif3: _("もぐら"), serif4: _("もぐら")},
						{"chara": "koishi","exp": "yes",  serif1: _("もぐらって初めて見た"), serif2: _("もぐらって初めて見た"), serif3: _("もぐらって初めて見た"), serif4: _("もぐらって初めて見た")},
						{"chara": "animal_mogura","exp": "animal_mogura-ura_wait",  serif1: _("こっちもさ"), serif2: _("こっちもさ"), serif3: _("こっちもさ"), serif4: _("こっちもさ")},
						{"chara": "animal_mogura","exp": "animal_mogura-ura_wait",  serif1: _("聞いていたよりひどい"), serif2: _("聞いていたよりひどい"), serif3: _("聞いていたよりひどい"), serif4: _("聞いていたよりひどい")},
						{"chara": "koishi","exp": "look_top",  serif1: _("何が？"), serif2: _("何が？"), serif3: _("何が？"), serif4: _("何が？")},
						{"chara": "animal_mogura","exp": "animal_mogura-ura_reaction_01",  serif1: _("早くいけって"), serif2: _("早くいけって"), serif3: _("早くいけって"), serif4: _("早くいけって")},
						{"chara": "animal_mogura","exp": null,  serif1: _("疲れてるんだ"), serif2: _("疲れてるんだ"), serif3: _("疲れてるんだ"), serif4: _("疲れてるんだ")},
						{"chara": "koishi","exp": "yes",  serif1: _("あ、うん"), serif2: _("あ、うん"), serif3: _("あ、うん"), serif4: _("あ、うん")},
						{"chara": "koishi","exp": null,  serif1: _("おうまさんは"), serif2: _("おうまさんは"), serif3: _("おうまさんは"), serif4: _("おうまさんは")},
						{"chara": "animal_mogura","exp": "animal_mogura-ura_wait",  serif1: _("あっちへ行って"), serif2: _("あっちへ行って"), serif3: _("あっちへ行って"), serif4: _("あっちへ行って")},
						{"chara": "animal_mogura","exp": "animal_mogura-ura_wait",  serif1: _("そっちへ走ってった"), serif2: _("そっちへ走ってった"), serif3: _("そっちへ走ってった"), serif4: _("そっちへ走ってった")},
						{"chara": "koishi","exp": "yes", "serif": _("そっか")},
						{"chara": "koishi","exp": null, "serif": _("ありがとう")},
						{"chara": "animal_mogura","exp": "animal_mogura-ura_reaction_01",  serif1: _("とっとと終わらせてくれ"), serif2: _("とっとと終わらせてくれ"), serif3: _("とっとと終わらせてくれ"), serif4: _("とっとと終わらせてくれ")},
					],
					[
						{"chara": "koishi","exp": "look_front", "serif": _("ねえねえ")},
						{"chara": "animal_mogura","exp": "animal_mogura-ura_wait",  serif1: _("スピーッ"), serif2: _("スピーッ"), serif3: _("スピーッ"), serif4: _("スピーッ")},
						{"chara": "koishi","exp": "look_bottom",  serif1: _("寝ちゃった"), serif2: _("寝ちゃった"), serif3: _("寝ちゃった"), serif4: _("寝ちゃった")},
					],
				]},
			],
			serif: [
				{"chara": "animal_mogura","exp": "animal_mogura-wait",  serif1: _("きーきー"), serif2: _("きーきー"), serif3: _("きーきー"), serif4: _("きーきー")},
				{"chara": "koishi","exp": "look_front",  serif1: _("あはは、へんなかおー"), serif2: _("あはは、へんなかおー"), serif3: _("あはは、へんなかおー"), serif4: _("あはは、へんなかおー")},
			],
			x: 170, y: 500,
			scale: 2/3,
			anime1: "animal_mogura-wait",
			anime2: null,
			anime3: null,
			anime4: "animal_mogura-reverse_ura",
			anime5: "animal_mogura-ura_wait",
			anime6: "animal_mogura-reverse_omote",
			width:  150,
			height: 300,
			action_name: null,
			sound_name: null,
			show_if_event_true: "chapter5-04-show_animal_mogura",
		},

		{
			no: ++I,
			type: CONSTANT.ITEM_TYPE,
			name: "目薬",
			image: "eyedrops",
			x: 870,
			y: 530,
			scale: 2/3,
			item_id: "01",
			position_type: "lying",
		},


	],
};

