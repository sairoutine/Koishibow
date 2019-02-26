'use strict';
var _ = require('i18n4v')
// 地上1階
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_06",
	chapter: 5,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 250, y: 480},
	rightField: "chapter5_08",
	leftField: null,
	background: null,
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_06_10130"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "oku", "serif":_("ぐわあ、がー、ぐわあ")},
						{"chara": "koishi", "exp": "look_front", "serif":_("なんだろ！")},
						{"chara": "koishi", "exp": "yes", "serif":_("へんなこえ！")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_06_10130"]}
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
			anime1: "chapter5-06-bg-01_anime_1",
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
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ハシビロコウ",
			loop: true,
			serif_back: [
				{"chara": I, "exp": "animal_hashi-ura_reaction_01", "serif":_("test")},
			],
			serif: [
				{"chara": I, "exp": "animal_hashi-wait", "serif":_("test")},
			],
			x: 750, y: 400,
			scale: 2/3,
			anime1: "animal_hashi-wait",
			anime2: null,
			anime3: null,
			anime4: "animal_hashi-reverse_ura",
			anime5: "animal_hashi-ura_wait",
			anime6: "animal_hashi-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "上り階段",
			x: 170,
			y: 260,
			width: 300,
			height: 400,
			next_field_name: "chapter5_10",
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下り階段",
			x: 100,
			y: 730,
			width: 180,
			height: 550,
			next_field_name: "chapter5_05",
		},
		{
			no: "oku",
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "お空(上)",
			serif: null,
			width: 0, height: 0,
			x: 480, y: 0,
		},



	],
};

