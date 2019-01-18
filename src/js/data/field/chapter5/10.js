'use strict';
var _ = require('i18n4v')
// 地上2階
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_10",
	chapter: 5,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 200, y: 480},
	rightField: "chapter5_09",
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
			anime1: "chapter5-10-bg-01_anime_1",
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
			name: "ハリネズミ",
			loop: true,
			serif_back: [
				{"chara": I, "exp": "animal_hari-ura_reaction_01", "serif":_("test")},
			],
			serif: [
				{"chara": I, "exp": "animal_hari-wait", "serif":_("test")},
			],
			x: 600, y: 300,
			scale: 2/3,
			anime1: "animal_hari-wait",
			anime2: null,
			anime3: null,
			anime4: "animal_hari-reverse_ura",
			anime5: "animal_hari-ura_wait",
			anime6: "animal_hari-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下り階段",
			x: 90,
			y: 350,
			width: 180,
			height: 400,
			next_field_name: "chapter5_06",
		},

	],
};

