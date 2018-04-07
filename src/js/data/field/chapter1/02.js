'use strict';
// バス停
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_02",
	chapter: 1,
	bgm: "silent",
	right_start_position: {x: 690, y: 380},
	left_start_position:  {x: 180, y: 380},
	right_field: "chapter1_03",
	left_field: "chapter1_01",
	background: "chapter1-02-bg-001",
	walk_sound: "walking_bare_default",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter1-02-obj-06-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-02-obj-06-obj02",
			anime5: "chapter1-02-obj-06-obj03",
			anime6: "chapter1-02-obj-06-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},

		{
			no: ++I,
			image: "chapter1-02-obj-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ベンチ",
			serif: [
				{"chara": "koishi","serif":"まっていればいいのかな"},
				{"chara": "koishi","serif":"まだかなー"},
				{"chara": "koishi","serif":"こない"},
			],
			x: 693.50*2/3, y:619.50*2/3,
			scale: 2/3,
			action_name: "sit",
			sound_name: null
		},
		{
			no: ++I,
			image: "chapter1-02-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "チョコレート箱",
			serif: [
				{"chara": "koishi","serif":"からっぽ！"},
			],
			x:858.50*2/3, y:592*2/3,
			scale: 2/3,
			action_name: "touch",
			sound_name: null
		},
		{
			no: ++I,
			image: "chapter1-02-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "バス停",
			serif: [
				{"chara": "koishi","serif":"わかんない"},
			],
			x:1188.50*2/3, y:419.50*2/3,
			scale: 2/3,
			action_name: "look_top",
			sound_name: null
		},
		{
			no: ++I,
			image: "chapter1-02-obj-05",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "じょうろ",
			serif: null,
			x:831.50*2/3, y:921.50*2/3,
			scale: 2/3,
			action_name: "look_bottom",
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "花壇",
			serif: null,
			x:719.50*2/3, y:997.50*2/3,
			scale: 2/3,
			anime1: "chapter1-02-obj-04-obj01",
			anime2: "chapter1-02-obj-04-obj02",
			anime3: "chapter1-02-obj-04-obj03",
			width: 1066, height: 100,
			action_name: null,
			sound_name: null,
		},


	],
};

