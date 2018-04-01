'use strict';
// 小鈴ショップ
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_05",
	chapter: 1,
	bgm: "silent",
	right_start_position: {x: 690, y: 540},
	left_start_position:  {x: 180, y: 540},
	right_field: "chapter1_06",
	left_field:  "chapter1_04",
	background: "chapter1-05-bg-001",
	walk_sound: "walking_bare_default",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter1-05-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-05-obj-01-obj02",
			anime5: "chapter1-05-obj-01-obj03",
			anime6: "chapter1-05-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},

		{
			no: ++I,
			image: "chapter1-05-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "石垣",
			serif: [
				{"chara": "koishi","serif":"test"},
			],
			x:1208*2/3, y:608*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "にとり",
			serif: [
				{"chara": "koishi","serif":"test"},
			],
			x:721.50*2/3, y:533.00*2/3,
			scale: 10,
			anime1: "nitori-wait",
			anime2: null,
			anime3: null,
			anime4: "nitori-reverse_ura",
			anime5: "nitori-ura_wait",
			anime6: "nitori-reverse_omote",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},


	],
};

