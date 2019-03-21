'use strict';
// 公園の入り口
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_06",
	chapter: 1,
	bgm: "silent",
	sub_bgms: ["chapter1-06-flicker_light"],
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: "chapter1_05",
	upField: null,
	downField: null,
	background: "chapter1-06-bg-001",
	walkSound: "walking_bare_outside",
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
		{
			no: ++I,
			type: CONSTANT.ITEM_TYPE,
			name: "目薬",
			image: "eyedrops",
			x: 122,
			y: 318,
			height: 330,
			scale: 2/3,
			item_id: "01",
			position_type: "lying",
		},


		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "公園へのフィールド移動",
			x: 715,
			y: 400,
			width: 270,
			height: 170,
			next_field_name: "chapter1_07",
		},

	],
};

