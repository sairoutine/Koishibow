'use strict';
// 1-8と同様
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter2_13",
	chapter: 2,
	bgm: "field4",
	rightStartPosition:   {x: 830, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter2_12",
	leftField: "chapter2_14",
	upField: null,
	downField: null,
	background: "chapter1-08-bg-001",
	walkSound: "walking_bare_outside",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ぶら下がった二人",
			serif: null,
			x: 735*2/3, y: 392*2/3,
			scale: 2/3,
			anime1: "chapter1-08-obj-01-obj00",
			anime2: null,
			anime3: null,
			anime4: "chapter1-08-obj-01-obj01",
			anime5: "chapter1-08-obj-01-obj02",
			anime6: "chapter1-08-obj-01-obj03",

			action_name: null,
			sound_name: null,
			sound_back: "chapter1-08-suspended",
			position_type: "lying",
		},
	],
};

