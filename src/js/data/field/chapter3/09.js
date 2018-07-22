'use strict';

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_09",
	chapter: 3,
	bgm: "field3",
	rightStartPosition: {x: 790, y: 450},
	leftStartPosition:  {x: 200, y: 450},
	rightField: "chapter3_10",
	leftField: "chapter3_08",
	background: "chapter3-09-bg-001",
	walkSound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter3-09-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-09-obj-01-obj02",
			anime5: "chapter3-09-obj-01-obj03",
			anime6: "chapter3-09-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter3-09-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "レミリアの墓",
			serif: [
				{"chara": "koishi","serif":""},
			],

			x:1041.50*2/3, y: 519*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "レミリアの死骸",
			serif: [
				{"chara": "koishi","serif":""},
			],
			x:865*2/3, y:742.50*2/3,
			scale: 2/3,
			anime1: "chapter3-09-obj-03-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-09-obj-03-obj02",
			anime5: "chapter3-09-obj-03-obj03",
			anime6: "chapter3-09-obj-03-obj04",

			action_name: "touch",
			sound_name: null,
		},


		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "胸像",
			serif: [
				{"chara": "koishi","serif":""},
			],
			x:345*2/3, y:631.50*2/3,
			scale: 2/3,
			anime1: "chapter3-09-obj-04-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-09-obj-04-obj02",
			anime5: "chapter3-09-obj-04-obj03",
			anime6: "chapter3-09-obj-04-obj04",

			action_name: "touch",
			sound_name: null,
		},

		{
			no: ++I,
			image: "chapter3-09-obj-05",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "胸像の側に埋まっている斧",
			serif: [
				{"chara": "koishi","serif":""},
			],
			x:359.50*2/3, y:762.*2/3,
			scale: 2/3,
			action_name: "touch",
			sound_name: null
		},
	],
};

