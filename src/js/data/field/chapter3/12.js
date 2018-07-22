'use strict';

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_12",
	chapter: 3,
	bgm: "field3",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 200, y: 450},
	rightField: "chapter3_13",
	leftField: "chapter3_11",
	background: "chapter3-12-bg-001",
	walkSound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter3-12-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-12-obj-01-obj02",
			anime5: "chapter3-12-obj-01-obj03",
			anime6: "chapter3-12-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter3-12-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "おもちゃ箱",
			serif: [
				{"chara": "koishi","serif":""},
			],
			x: 1268*2/3, y: 770.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "蓄音機",
			serif: [
				{"chara": "koishi","serif":"誰？"},
			],
			x: 412*2/3, y: 628*2/3,
			scale: 2/3,
			anime1: "chapter3-12-obj-03-obj01",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,

			action_name: "touch",
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "クリスマスツリー",
			serif: [
				{"chara": "koishi","serif":"誰？"},
			],
			x: 717*2/3, y: 400*2/3,
			scale: 2/3,
			anime1: "chapter3-12-obj-04-obj01",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,

			action_name: "touch",
			sound_name: null,
		},
	],
};

