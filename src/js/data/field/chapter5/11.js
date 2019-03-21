'use strict';
var _ = require('i18n4v')
// 地上2階
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_11",
	chapter: 5,
	bgm: "field11",
	rightStartPosition: {x: 830, y: 450},
	leftStartPosition:  {x: 140, y: 480},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter5_13",
	leftField: null,
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_wood",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5-13-animal_kuro_talk1"], "process": [
			// 黒豹との1度目の会話が終わったら
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_11_10495"], "process": [
					// すでにアクセス済み
					[
					],
					// まだ未アクセス
					[
						{"type": "process", "value": "playTalk", "arguments": [
							[
								{"chara": "koishi","exp": "look_front", "serif": _("あ！")},
								{"chara": "koishi","exp": null, "serif": _("逃げたわね")},
							]
						]},
						{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_11_10495"]}
					],
				]},
			],
			// 黒豹との1度目の会話が終わってない
			[
			],
		]},
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_11_10430"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "animal_kawa","exp": "animal_kawa-wait", "serif": _("これ早く隠して")},
						{"chara": "animal_uma","exp": "animal_uma-wait", "serif": _("わかったわ")},
						{"chara": "animal_kawa","exp": "animal_kawa-wait", "serif": _("お願いね")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_11_10430"]}
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
			anime1: "chapter5-11-bg-01_anime_1",
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
			no: "animal_shiba",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "イヌ",
			loop: true,
			turn_toward_me: true, // こいしの方を向く
			serif_back: [
				{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter5_11-animal_shiba-limit", 2], "serifs": [
					[
						{"chara": "koishi","exp": "look_front", "serif": _("なにしてるの")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("なにも")},
					],
					[
						{"chara": "animal_shiba","exp": "animal_shiba-ura_wait", "serif": _("なに")},
						{"chara": "koishi","exp": "look_front", "serif": _("なんで教えてくれないの")},
						{"chara": "koishi","exp": null, "serif": _("さっき何渡してたの")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("......")},
						{"chara": "animal_kawa","exp": null, "serif": _("言えません！")},
						{"chara": "animal_kawa","exp": null, "serif": _("ご主人様にとめられているから")},
						{"chara": "koishi","exp": "look_front", "serif": _("私だってご主人様でしょ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("......")},
					],
				]},
			],
			serif: [
				{"chara": "animal_shiba","exp": "animal_shiba-wait", "serif": _("わふ")},
				{"chara": "animal_uma","exp": "animal_uma-wait", "serif": _("イイーン")},
				{"chara": "animal_shiba","exp": "animal_shiba-wait", "serif": _("わふぅ")},
			],
			x: 600, y: 300,
			scale: 2/3,
			anime1: "animal_shiba-wait",
			anime2: null,
			anime3: null,
			anime4: "animal_shiba-reverse_ura",
			anime5: "animal_shiba-ura_wait",
			anime6: "animal_shiba-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
			not_show_if_event_true: "chapter5-13-animal_kuro_talk1", // 黒豹との1度目の会話が終わったら消える
		},
		{
			no: "animal_uma",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ウマ",
			loop: true,
			turn_toward_me: true, // こいしの方を向く
			serif_back: null,
			serif: [
				{"chara": "animal_shiba","exp": "animal_shiba-wait", "serif": _("わふ")},
				{"chara": "animal_uma","exp": "animal_uma-wait", "serif": _("イイーン")},
				{"chara": "animal_shiba","exp": "animal_shiba-wait", "serif": _("わふぅ")},
			],
			x: 600, y: 300,
			scale: 2/3,
			anime1: "animal_uma-wait",
			anime2: null,
			anime3: null,
			anime4: "animal_uma-reverse_ura",
			anime5: "animal_uma-ura_wait",
			anime6: "animal_uma-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
			not_show_if_event_true: "chapter5-13-animal_kuro_talk1", // 黒豹との1度目の会話が終わったら消える
		},


		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "茨",
			serif: null,
			width: 300, height: 550,
			x: 160, y: 300,

		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "はしご",
			x: 600,
			y: 670,
			width: 370,
			height: 70,
			next_field_name: "chapter5_07",
		},

	],
};

