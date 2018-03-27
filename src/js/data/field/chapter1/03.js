'use strict';
// てぃ ペンキ
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_03",
	chapter: 1,
	bgm: "silent",
	right_start_position: {x: 690, y: 540},
	left_start_position:  {x: 146, y: 534},
	right_field: "chapter1_04",
	left_field: "chapter1_02",
	background: "chapter1-03-bg-001",
	walk_sound: "walking_bare_default",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter1-03-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-03-obj-01-obj02",
			anime5: "chapter1-03-obj-01-obj03",
			anime6: "chapter1-03-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter1-03-obj-04",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ヘビ",
			serif: [
				{"chara": "koishi","serif":"test"},
			],
			x:1157*2/3, y:687.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},


		{
			no: ++I,
			image: "chapter1-03-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ペンキ",
			serif: [
				{"chara": "koishi","serif":"test"},
			],
			x:887*2/3, y:715*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "うさぎを吊るした木",
			serif: [
			],
			x:779.00*2/3, y:356.50*2/3,
			scale: 2/3,
			anime1: "chapter1-03-obj-05-obj01",
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			image: "chapter1-03-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ハシゴ",
			serif: [
				{"chara": "koishi","serif":"test"},
			],
			x:1053*2/3, y:484*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},

		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "てゐ",
			serif: [
				{"chara": "koishi","serif":"test"},
			],
			x:438.50*2/3, y:769*2/3,
			scale: 2/3,
			anime1: "tewi-wait",
			anime2: null,
			anime3: null,
			anime4: "tewi-reverse_ura",
			anime5: "tewi-ura_wait",
			anime6: "tewi-reverse_omote",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},


	],
};
