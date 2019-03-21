'use strict';
// 病院の外
var CONSTANT = require("../../../constant");
var I = 0;

module.exports = {
	key: "chapter6_07",
	chapter: 6,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: "chapter6_06",
	upField: null,
	downField: null,
	background: "chapter6-07-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "電灯",
			serif: null,
			x: 236*2/3, y: 369*2/3,
			width: 100,
			scale: 2/3,
			anime1: "chapter6-07-obj-01",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
		},
	],
};

