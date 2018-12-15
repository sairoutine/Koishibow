'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_20",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	rightField: "chapter4_02",
	leftField: null,
	background: "chapter4-20-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "地蔵",
			serif: [
			],
			x: 1537*2/3, y: 1613*2/3,
			scale: 0.7,
			anime1: "chapter4-20-obj-01_anime_1",
			action_name: null,
			sound_name: null,
		},

	],
};

