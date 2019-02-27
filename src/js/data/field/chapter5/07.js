'use strict';
var _ = require('i18n4v')
// 地上1階
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_07",
	chapter: 5,
	bgm: "silent",
	rightStartPosition: {x: 700, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: null,
	leftField: "chapter5_08",
	background: null,
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "process", "value": "playTalk", "arguments": [
			[
				{"chara": "animal_shiba","exp": "animal_shiba-wait", "serif": _("ぅぅぅ")},
				{"chara": "animal_shiba","exp": "animal_shiba-wait", "serif": _("わん")},
				{"chara": "koishi","exp": "look_front", "serif": _("......こわくないけどね")},
			]
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
			anime1: "chapter5-07-bg-01_anime_1",
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
			serif_back: [
				{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["34"], "serifs": [
					// ハシゴを持ってる
					[
						{"chara": "koishi","exp": "look_front", "serif": _("犬ちゃん")},
						{"chara": "animal_shiba","exp": "animal_shiba-ura_wait", "serif": _("犬って何よ")},
						{"chara": "koishi","exp": "yes", "serif": _("はしご！")},
						{"chara": "animal_shiba","exp": null, "serif": _("ほんと？"), "option": {"useItem": "34"}},
						// TODO: 暗転する {"chara": "chapter5-07-event-01","exp": "chapter5-07-event-01-obj01", "serif": _("ほんとだ！")},
						{"chara": "animal_shiba","exp": null, "serif": _("これでよし！")},
						{"chara": "animal_shiba","exp": null, "serif": _("助かったわ")},
						{"chara": "animal_shiba","exp": null, "serif": _("ありがとう、こいしちゃん")},
						{"chara": "koishi","exp": "look_front", "serif": _("あれー")},
						{"chara": "koishi","exp": "look_front", "serif": _("名前知ってるの")},
					],
					// ハシゴを持ってない
					[
						{"chara": "animal_shiba","exp": "animal_shiba-ura_wait", "serif": _("こまったわ")},
						{"chara": "koishi","exp": "look_front", "serif": _("なにがこまったの")},
						{"chara": "animal_shiba","exp": "animal_shiba-ura_wait", "serif": _("はしごが無いのよ")},
						{"chara": "animal_shiba","exp": "animal_shiba-ura_reaction_01", "serif": _("ほんとうはここにかけてあるのに")},
						{"chara": "koishi","exp": "yes", "serif": _("ふーん")},
						{"chara": "koishi","exp": null, "serif": _("なんで？")},
						{"chara": "animal_shiba","exp": "animal_shiba-ura_reaction_01", "serif": _("上に行かなきゃいけないのよー")},
						{"chara": "koishi","exp": "yes", "serif": _("ふーん")},
						{"id": "chapter5-07-animal_shiba_ura_talk1", "save": true},
					],
				]},
			],
			serif: [
				{"chara": "animal_shiba","exp": "animal_shiba-wait", "serif": _("ぅわん")},
				{"chara": "animal_shiba","exp": "animal_shiba-wait", "serif": _("はフはフ")},
				{"chara": "koishi","exp": "look_front", "serif": _("かわいー")},
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
			show_if_event_true: "chapter5-12-orin_talk1", // お燐との1度目の会話が終わったら登場
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "コモドオオトカゲ",
			loop: true,
			serif_back: [
				{"chara": I, "exp": "animal_komodo-ura_reaction_01", "serif":_("test")},
			],
			serif: [
				{"chara": I, "exp": "animal_komodo-wait", "serif":_("test")},
			],
			x: 430, y: 500,
			scale: 2/3,
			anime1: "animal_komodo-wait",
			anime2: null,
			anime3: null,
			anime4: "animal_komodo-reverse_ura",
			anime5: "animal_komodo-ura_wait",
			anime6: "animal_komodo-reverse_omote",
			width:  150,
			height: 20,
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下り階段",
			x: 910,
			y: 530,
			width: 250,
			height: 550,
			next_field_name: "chapter5_03",
		},
		// はしごを使って 5-11へ
		{
			no: ++I,
			image: "chapter1-03-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "はしご",
			serif: null,
			x:40, y:240,
			//width: 200,
			//height: 200,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "はしご",
			x:40, y:240,
			width: 130,
			height: 361,
			next_field_name: "chapter5_11",
		},




	],
};

