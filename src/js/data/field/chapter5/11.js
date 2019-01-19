'use strict';
var _ = require('i18n4v')
// 地上2階
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_11",
	chapter: 5,
	bgm: "silent",
	rightStartPosition: {x: 830, y: 450},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter5_13",
	leftField: null,
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
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "イヌ",
			loop: true,
			serif_back: [
				{"chara": I, "exp": "animal_shiba-ura_reaction_01", "serif":_("test")},
			],
			serif: [
				{"chara": I, "exp": "animal_shiba-wait", "serif":_("test")},
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

