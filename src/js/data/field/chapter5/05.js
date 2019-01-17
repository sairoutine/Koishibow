'use strict';
var _ = require('i18n4v')
// 地下1階
/*
はしご（初めの位置。倒してある）
*/
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_05",
	chapter: 5,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 220, y: 350},
	rightField: null,
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
			anime1: "chapter5-05-bg-01_anime_1",
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
			x: 70,
			y: 260,
			width: 140,
			height: 400,
			next_field_name: "chapter5_06",
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "茨",
			serif: null,
			width: 220, height: 690,
			x: 830, y: 300,
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "カワウソ",
			loop: true,
			serif_back: [
				{"chara": I, "exp": "animal_kawa-ura_reaction_01", "serif":_("test")},
			],
			serif: [
				{"chara": I, "exp": "animal_kawa-wait", "serif":_("test")},
			],
			x: 800, y: 500,
			scale: 2/3,
			anime1: "animal_kawa-wait",
			anime2: null,
			anime3: null,
			anime4: "animal_kawa-reverse_ura",
			anime5: "animal_kawa-ura_wait",
			anime6: "animal_kawa-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			image: "chapter5-05-obj-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "はしご",
			serif: [
				{"chara": "koishi","serif":_("test")},
			],
			x: 282, y: 600,
			scale: 2/3,
			action_name: "look_bottom",
			sound_name: null
		},




	],
};

