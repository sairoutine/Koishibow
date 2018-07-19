'use strict';

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_10",
	chapter: 3,
	bgm: "field3",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 200, y: 450},
	rightField: "chapter3_11",
	leftField: "chapter3_09",
	background: "chapter3-10-bg-001",
	walkSound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter3-10-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-10-obj-01-obj02",
			anime5: "chapter3-10-obj-01-obj03",
			anime6: "chapter3-10-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter3-10-obj-02-front",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "橋_手前",
			serif: [
				{"chara": "koishi","serif":""},
			],
			x: 763.5*2/3, y: 681.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},
		{
			no: ++I,
			image: "chapter3-10-obj-02-back",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "橋_奥",
			serif: [
				{"chara": "koishi","serif":""},
			],
			x: 747*2/3, y: 654*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},


	],
};

