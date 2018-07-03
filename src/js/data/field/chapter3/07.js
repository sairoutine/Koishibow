'use strict';

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_07",
	chapter: 3,
	bgm: "field3",
	right_start_position: {x: 690, y: 380},
	left_start_position:  {x: 200, y: 420},
	right_field: "chapter3_08",
	left_field: "chapter3_06",
	background: "chapter3-07-bg-001",
	walk_sound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter3-07-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-07-obj-01-obj02",
			anime5: "chapter3-07-obj-01-obj03",
			anime6: "chapter3-07-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter3-07-obj-04",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "左側の建物",
			serif: null,
			x: 282*2/3, y: 447*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},


		{
			no: ++I,
			image: "chapter3-07-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "墓標1「John」",
			serif: [
				{"chara": "koishi","serif":"まだ生きてるのに変なの"},
			],
			x:371*2/3, y:674*2/3,
			scale: 2/3,
			action_name: "touch",
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "墓標2「U.N.Owen」",
			serif: [
				{"chara": "koishi","serif":"誰？"},
			],
			x: 692.50*2/3, y: 570.50*2/3,
			scale: 2/3,
			anime1: "chapter3-07-obj-03-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-07-obj-03-obj02",
			anime5: "chapter3-07-obj-03-obj03",
			anime6: "chapter3-07-obj-03-obj04",

			action_name: "touch",
			sound_name: null,
		},

		/*
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "猫の霊",
			serif: [
				{"chara": "koishi","serif":""},
			],
			x: 579.50*2/3, y: 695.50*2/3,
			scale: 2/3,
			anime1: "chapter3-07-obj-03-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-07-obj-03-obj02",
			anime5: "chapter3-07-obj-03-obj03",
			anime6: "chapter3-07-obj-03-obj04",

			action_name: "touch",
			sound_name: null,
		},
		*/

	],
};

