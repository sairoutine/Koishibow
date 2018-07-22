'use strict';

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_08",
	chapter: 3,
	bgm: "field3",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 200, y: 450},
	rightField: "chapter3_09",
	leftField: "chapter3_07",
	background: "chapter3-08-bg-001",
	walkSound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter3-08-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-08-obj-01-obj02",
			anime5: "chapter3-08-obj-01-obj03",
			anime6: "chapter3-08-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},

		{
			no: ++I,
			image: "chapter3-08-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "チルノが埋まってる雪山",
			serif: [
				{"chara": "koishi","serif":""},
			],
			x: 711.50*2/3, y: 643.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},
		{
			no: ++I,
			image: "chapter3-08-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "枯れ木",
			serif: [
				{"chara": "koishi","serif":""},
			],
			x:967*2/3, y:366.50*2/3,
			scale: 2/3,
			action_name: "touch",
			sound_name: null
		},
	],
};

