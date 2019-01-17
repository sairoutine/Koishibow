'use strict';
var _ = require('i18n4v')
// 地下2階
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_04",
	chapter: 5,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 350, y: 350},
	rightField: "chapter5_14",
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
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "モグラ",
			loop: true,
			serif_back: [
				{"chara": I, "exp": "animal_mogura-ura_reaction_01", "serif":_("test")},
			],
			serif: [
				{"chara": I, "exp": "animal_mogura-wait", "serif":_("test")},
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
		},




	],
};

