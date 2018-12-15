'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_25",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	rightField: "chapter4_02",
	leftField: null,
	background: "chapter4-25-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			image: "chapter4-25-obj-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "死体",
			serif: [
			],
			x: 2140.50*2/3, y: 1143*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},
	],
};

