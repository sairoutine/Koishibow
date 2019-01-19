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
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ヒョウ",
			loop: true,
			serif_back: [
				{"chara": I, "exp": "animal_kuro-ura_reaction_01", "serif":_("test")},
			],
			serif: [
				{"chara": I, "exp": "animal_kuro-wait", "serif":_("test")},
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

