'use strict';

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_11",
	chapter: 3,
	bgm: "field3",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 200, y: 450},
	rightField: "chapter3_12",
	leftField: "chapter3_10",
	background: "chapter3-11-bg-001",
	walkSound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter3-11-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-11-obj-01-obj02",
			anime5: "chapter3-11-obj-01-obj03",
			anime6: "chapter3-11-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "木+白骨体",
			serif: [
				{"chara": "koishi","serif":""},
			],
			x: 731*2/3, y: 403.50*2/3,
			scale: 2/3,
			anime1: "chapter3-11-obj-05-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-11-obj-05-obj02",
			anime5: "chapter3-11-obj-05-obj03",
			anime6: "chapter3-11-obj-05-obj04",

			action_name: "touch",
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "雪だるま1咲夜風",
			serif: [
				{"chara": "koishi","serif":""},
			],
			x: 297.50*2/3, y: 716*2/3,
			scale: 2/3,
			anime1: "chapter3-11-obj-02-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-11-obj-02-obj02",
			anime5: "chapter3-11-obj-02-obj03",
			anime6: "chapter3-11-obj-02-obj04",

			action_name: "touch",
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "雪だるま2パチュリー風",
			serif: [
				{"chara": "koishi","serif":""},
			],
			x: 1202.50*2/3, y: 717.50*2/3,
			scale: 2/3,
			anime1: "chapter3-11-obj-03-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-11-obj-03-obj02",
			anime5: "chapter3-11-obj-03-obj03",
			anime6: "chapter3-11-obj-03-obj04",

			action_name: "touch",
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "雪だるま3美鈴風",
			serif: [
				{"chara": "koishi","serif":""},
			],
			x: 1002.50*2/3 , y: 662.50*2/3,
			scale: 2/3,
			anime1: "chapter3-11-obj-04-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-11-obj-04-obj02",
			anime5: "chapter3-11-obj-04-obj03",
			anime6: "chapter3-11-obj-04-obj04",

			action_name: "touch",
			sound_name: null,
		},
	],
};

