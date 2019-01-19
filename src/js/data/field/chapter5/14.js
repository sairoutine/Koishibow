'use strict';
// 地下2階
/*
 真っ暗闇
・鍵
・ジャーナル「かがやき」
*/
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_14",
	chapter: 5,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: null,
	leftField: "chapter5_04",
	background: null,
	background: "chapter5-02-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			image: "chapter5-14-obj-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "鍵",
			serif: null,
			x: 500,
			y: 640,
			scale: 2/3,
			action_name: "look_bottom",
			sound_name: null,
		},
	],
};

