'use strict';
// 混沌
var CONSTANT = require("../../../constant");
var I = 0;

module.exports = {
	key: "chapter6_17",
	chapter: 6,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: null,
	upField: null,
	downField: null,
	background: "chapter5-09-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			image: "chapter3-13-obj-04",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "飾りつけした雪だるま一段目（頭無し）",
			serif: null,
			x: 720.50*2/3, y: 571*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter1-02-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "バス停",
			serif: null,
			x:1188.50*2/3, y:419.50*2/3,
			scale: 2/3,
			action_name: "look_top",
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "花壇",
			serif: null,
			x:719.50*2/3, y:997.50*2/3,
			scale: 2/3,
			anime1: "chapter1-02-obj-04-obj01",
			//anime2: "chapter1-02-obj-04-obj02",
			//anime3: "chapter1-02-obj-04-obj03",
			anime2: null,
			anime3: null,
			anime4: "chapter1-02-obj-04-obj04",
			anime5: "chapter1-02-obj-04-obj05",
			anime6: "chapter1-02-obj-04-obj05",
			width: 1066, height: 100,
			action_name: null,
			sound_name: null,
		},
	],
};

