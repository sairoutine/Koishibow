'use strict';
var _ = require('i18n4v')
// 地下2階
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_04",
	chapter: 5,
	bgm: "field11",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 350, y: 350},
	rightField: "chapter5_14",
	leftField: null,
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
								{"chara": "animal_mogura","exp": "animal_mogura-wait", "serif": _("ピぃーっ")},
								{"chara": "koishi","exp": "look_front", "serif": _("あはは！")},
								{"chara": "koishi","exp": null, "serif": _("おめめがヘン！")},
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
			turn_toward_me: true, // こいしの方を向く
			serif_back: [
				{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter5_04-animal_mogura-limit", 2], "serifs": [
					[
						{"chara": "koishi","exp": "look_front", "serif": _("あなたは？")},
						{"chara": "animal_mogura","exp": "animal_mogura-ura_wait", "serif": _("もぐら")},
						{"chara": "koishi","exp": "yes", "serif": _("もぐらって初めて見た")},
						{"chara": "animal_mogura","exp": "animal_mogura-ura_wait", "serif": _("こっちもさ")},
						{"chara": "animal_mogura","exp": "animal_mogura-ura_wait", "serif": _("聞いていたよりひどい")},
						{"chara": "koishi","exp": "look_top", "serif": _("何が？")},
						{"chara": "animal_mogura","exp": "animal_mogura-ura_reaction_01", "serif": _("早くいけって")},
						{"chara": "animal_mogura","exp": null, "serif": _("疲れてるんだ")},
						{"chara": "koishi","exp": "yes", "serif": _("あ、うん")},
						{"chara": "koishi","exp": null, "serif": _("おうまさんは")},
						{"chara": "animal_mogura","exp": "animal_mogura-ura_wait", "serif": _("あっちへ行って")},
						{"chara": "animal_mogura","exp": "animal_mogura-ura_wait", "serif": _("そっちへ走ってった")},
						{"chara": "koishi","exp": "yes", "serif": _("そっか")},
						{"chara": "koishi","exp": null, "serif": _("ありがとう")},
						{"chara": "animal_mogura","exp": "animal_mogura-ura_reaction_01", "serif": _("とっとと終わらせてくれ")},
					],
					[
						{"chara": "koishi","exp": "look_front", "serif": _("ねえねえ")},
						{"chara": "animal_mogura","exp": "animal_mogura-ura_wait", "serif": _("スピーッ")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("寝ちゃった")},
					],
				]},
			],
			serif: [
				{"chara": "animal_mogura","exp": "animal_mogura-wait", "serif": _("きーきー")},
				{"chara": "koishi","exp": "look_front", "serif": _("あはは、へんなかおー")},
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
			image: "paper",
			type: CONSTANT.JOURNAL_FRONT_TYPE,
			x: 258, y: 689,
			scale: 2/3,
			journal_id: "journal0XX", // TODO: ジャーナルを設定
			show_if_event_true: "chapter5_04_10580",
		},
	],
};

