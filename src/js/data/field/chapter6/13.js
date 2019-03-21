'use strict';
// 混沌
var CONSTANT = require("../../../constant");
var I = 0;

module.exports = {
	key: "chapter6_13",
	chapter: 6,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: "chapter6_14",
	upField: null,
	downField: null,
	background: "chapter3-13-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "三輪車",
			serif: null,
			x: 815,
			y: 515,
			width: 200,
			height: 100,
			scale: 0.7,
			anime1: "chapter0-mansion_corridor1-obj-02-01-obj01",
			anime2: "chapter0-mansion_corridor1-obj-02-01-obj02",
			anime3: "chapter0-mansion_corridor1-obj-02-01-obj03",
			anime4: "chapter0-mansion_corridor1-obj-02-01-obj04",
			anime5: "chapter0-mansion_corridor1-obj-02-01-obj05",
			anime6: "chapter0-mansion_corridor1-obj-02-01-obj06",
			action_name: "touch",
			sound_name: "chapter0-mansion_corridor1-move_tricycle",
			bgm_back: "chapter0-mansion_corridor1-tricycle",
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "蛇口",
			serif: null,
			x:384*2/3, y:572*2/3,
			scale: 2/3,
			anime1: "chapter1-09-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-09-obj-01-obj02",
			anime5: "chapter1-09-obj-01-obj03",
			anime6: "chapter1-09-obj-01-obj04",
			width: 240,
			height: 240,

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter3-12-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "おもちゃ箱",
			serif: null,
			x: 268*2/3, y: 770.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: "chapter3-12-touch_toybox",
			position_type: "lying",
		},

	],
};

