'use strict';
// 混沌
var CONSTANT = require("../../../constant");
var I = 0;

module.exports = {
	key: "chapter6_12",
	chapter: 6,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: "chapter6_13",
	upField: null,
	downField: null,
	background: "chapter6-12-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			image: "chapter6-12-obj-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "雪山",
			serif: null,
			x: 320*2/3, y: 705*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter6-12-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "キャビネット",
			serif: null,
			x: 416*2/3, y:516*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter6-12-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "電話ボックス",
			serif: null,
			x: 1252*2/3, y: 457*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
	],
};

