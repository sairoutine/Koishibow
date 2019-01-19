'use strict';
//var _ = require('i18n4v')
// 地上2階
// さとりの部屋
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_12",
	chapter: 5,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: null,
	leftField: "chapter5_09",
	background: "chapter5-12-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		/*
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "おりん",
			loop: true,
			serif_back: [
				{"chara": I, "exp": "orin-ura_reaction_01", "serif":_("test")},
			],
			serif: [
				{"chara": I, "exp": "orin-wait", "serif":_("test")},
			],
			x: 600, y: 300,
			scale: 2/3,
			anime1: "orin-wait",
			anime2: null,
			anime3: null,
			anime4: "orin-reverse_ura",
			anime5: "orin-ura_wait",
			anime6: "orin-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
		},
		*/
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "棚",
			serif: null,
			width: 440, height: 150,
			x: 295, y: 375,

		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ベッド",
			serif: null,
			width: 350, height: 210,
			x: 690, y: 380,

		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "キャビネット",
			serif: null,
			width: 80, height: 130,
			x: 890, y: 490,

		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "REDRUM",
			serif: null,
			x: 300, y: 230,
			scale: 2/3,
			anime1: "chapter5-12-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter5-12-obj-01-obj02",
			anime5: "chapter5-12-obj-01-obj03",
			anime6: "chapter5-12-obj-01-obj04",
			action_name: null,
			sound_name: null,
		},



	],
};

