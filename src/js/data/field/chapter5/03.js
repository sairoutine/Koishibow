'use strict';
var _ = require('i18n4v')
// 地下1階
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_03",
	chapter: 5,
	bgm: "silent",
	rightStartPosition: {x: 700, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: null,
	leftField: "chapter5_02",
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
			anime1: "chapter5-03-bg-01_anime_1",
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
			image: "chapter5-03-obj-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "斧",
			serif: [
				{"chara": "koishi","serif":_("test")},
			],
			x: 282, y: 447,
			scale: 2/3,
			action_name: "look_bottom",
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "上り階段",
			x: 800,
			y: 260,
			width: 300,
			height: 400,
			next_field_name: "chapter5_07",
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下り階段",
			x: 910,
			y: 730,
			width: 250,
			height: 550,
			next_field_name: "chapter5_04",
		},
	],
};

