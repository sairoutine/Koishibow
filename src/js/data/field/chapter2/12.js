'use strict';
// 1-9と同様。
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter2_12",
	chapter: 2,
	bgm: "field4",
	rightStartPosition:   {x: 670, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter2_11",
	leftField: "chapter2_13",
	upField: null,
	downField: null,
	background: "chapter1-09-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "生垣(秘密基地)",
			loop: true,
			serif: null,
			serif_back: [
			],
			x: 720*2/3, y: 428*2/3,
			scale: 2/3,
			width: 100,
			anime1: "chapter1-09-obj-02-obj01",
			anime2: "chapter1-09-obj-02-obj02",
			anime3: "chapter1-09-obj-02-obj01",

			action_name: "look_front",
			sound_name: "chapter1-09-growl",
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

			action_name: "look_front",
			sound_name: "chapter1-09-twist_faucet",
		},
	],
};

