'use strict';
var _ = require('i18n4v')
// 地上1階
// REDRUM
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_08",
	chapter: 5,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter5_07",
	leftField: "chapter5_06",
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
			anime1: "chapter5-08-bg-01_anime_1",
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
			name: "ウマ",
			loop: true,
			serif_back: [
				{"chara": I, "exp": "animal_uma-ura_reaction_01", "serif":_("test")},
			],
			serif: [
				{"chara": I, "exp": "animal_uma-wait", "serif":_("test")},
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
		},


	],
};

