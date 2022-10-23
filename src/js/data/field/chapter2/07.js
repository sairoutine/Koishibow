'use strict';
//水につかった屋敷
//・くるまいす（0-4にあったもの。ひっくり返っているとか沈んでいるとか）目を使ったときに車輪が空転するとベター
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter2_07",
	chapter: 2,
	bgm: "silent",
	rightStartPosition:   {x: 690, y: 450},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 350, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter2_08",
	leftField: null,
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter2-07-bg-01_anime_1",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "車いす",
			serif: null,
			x: 1102*2/3, y: 736*2/3,
			scale: 2/3,
			anime1: "chapter2-07-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			width: 160,
			height: 160,

			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "家の壁",
			serif: null,
			width: 660, height: 480,
			x: 325, y: 240,
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "ドア",
			x: 355,
			y: 355,
			width: 150,
			height: 260,
			next_field_name: "chapter2_05",
		},


	],
};

