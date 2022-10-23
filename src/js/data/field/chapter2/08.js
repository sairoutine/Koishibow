'use strict';
//川
//・オフィーリア人形（木に引っかかっている）
//・ソファ
//・テレビ（目を使うとcpt1のスクリーンショットが写る）
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter2_08",
	chapter: 2,
	bgm: "silent",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 180, y: 450},
	defaultStartPosition: {x: 180, y: 450, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter2_09",
	leftField: "chapter2_07",
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
			anime1: "chapter2-08-bg-01_anime_1",
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
			name: "木と人形",
			serif: null,
			x: 686*2/3, y: 550*2/3,
			scale: 2/3,
			anime1: "chapter2-08-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			width: 280,
			height: 320,

			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "テレビ",
			serif: null,
			width: 180, height: 250,
			x: 180, y: 440,
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ソファ",
			serif: null,
			width: 300, height: 250,
			x: 750, y: 400,
		},


	],
};

