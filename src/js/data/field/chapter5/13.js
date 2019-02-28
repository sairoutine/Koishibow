'use strict';
var _ = require('i18n4v')
// 地上2階
/*
茨右
*/
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_13",
	chapter: 5,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: null,
	leftField: "chapter5_11",
	background: null,
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_13_10470"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "animal_kuro","exp": "animal_kuro-wait", "serif": _("......")},
						{"chara": "animal_kuro","exp": "animal_kuro-wait", "serif": _("......")},
						{"chara": "animal_kuro","exp": "animal_kuro-wait", "serif": _("ぷごぅ")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_13_10470"]}
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
			anime1: "chapter5-13-bg-01_anime_1",
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
			no: "animal_kuro",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ヒョウ",
			loop: true,
			serif_back: [
				{"chara": "animal_kuro","exp": "animal_kuro-ura_wait", "serif": _("......")},
				{"chara": "animal_kuro","exp": "animal_kuro-ura_wait", "serif": _("......")},
				{"chara": "koishi","exp": "look_front", "serif": _("ぜんぜん喋んない！")},
				{"chara": "animal_kuro","exp": "animal_kuro-ura_wait", "serif": _("何よ")},
				{"chara": "koishi","exp": "yes", "serif": _("なんだ")},
				{"chara": "animal_kuro","exp": "animal_kuro-ura_reaction_01", "serif": _("強い生き物は鳴かないのよ")},
				{"chara": "koishi","exp": "look_front", "serif": _("かっこいい")},
				{"chara": "animal_kuro","exp": "animal_kuro-ura_wait", "serif": _("ふふん")},
				{"chara": "animal_kuro","exp": "animal_kuro-ura_reaction_01", "serif": _("私みたいに女の武器を持てば――")},
				{"chara": "animal_kuro","exp": null, "serif": _("誰だっていうことを聞くわ")},
				{"chara": "koishi","exp": "look_front", "serif": _("ほんと！？")},
				{"chara": "koishi","exp": null, "serif": _("武器かー")},
				{"id": "chapter5-13-animal_kuro_talk1", "save": true},
			],
			serif: [
				{"chara": "animal_kuro","exp": "animal_kuro-wait", "serif": _("......")},
				{"chara": "animal_kuro","exp": "animal_kuro-wait", "serif": _("......")},
				{"chara": "koishi","exp": "look_front", "serif": _("ぜんぜん鳴かない！")},
			],
			x: 700, y: 500,
			scale: 2/3,
			anime1: "animal_kuro-wait",
			anime2: null,
			anime3: null,
			anime4: "animal_kuro-reverse_ura",
			anime5: "animal_kuro-ura_wait",
			anime6: "animal_kuro-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "茨",
			serif: null,
			width: 330, height: 665,
			x: 800, y: 275,
		},
	],
};

