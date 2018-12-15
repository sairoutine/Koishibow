'use strict';
var _ = require('i18n4v')
// てゐ
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_22",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter4_23",
	leftField: null,
	background: "chapter4-22-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "上へのフィールド移動",
			x: 480,
			y: 720 - CONSTANT.WALK_DEPTH_LIMIT,
			width: 960,
			height: 10,
			next_field_name: "chapter4_19",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "てゐ",
			loop: true,
			serif_back: [],
			serif: [
				{"chara": "koishi","serif":_("テスト")},
			],
			x: 260*2/3, y: 605*2/3,
			anime1: "tewireal-wait",
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

