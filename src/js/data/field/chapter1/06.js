'use strict';
// 公園の入り口
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_06",
	chapter: 1,
	bgm: "silent",
	sub_bgms: ["chapter1-06-flicker_light"],
	right_start_position: {x: 690, y: 380},
	left_start_position:  {x: 180, y: 380},
	right_field: null,
	left_field: "chapter1_05",
	background: "chapter1-06-bg-001",
	walk_sound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter1-06-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-06-obj-01-obj02",
			anime5: "chapter1-06-obj-01-obj03",
			anime6: "chapter1-06-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "街灯",
			serif: null,
			x:1296.50*2/3, y:344*2/3,
			scale: 2/3,
			anime1: "chapter1-06-obj-04-obj01",
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			image: "chapter1-06-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "石垣(右)",
			serif: null,
			x:1356.50*2/3, y:603*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},
		{
			no: ++I,
			image: "chapter1-06-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "石垣(左)",
			serif: null,
			x:434.50*2/3, y:600*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},
	],
};

