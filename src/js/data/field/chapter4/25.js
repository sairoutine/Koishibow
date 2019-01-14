'use strict';
var _ = require('i18n4v')
// ・死体蓮子
// ・死体メリー
// ・テープ「」
// ・優曇華院

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_25",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter4_26",
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
			x: 1057.50*2/3, y:648.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "鈴仙",
			loop: true,
			serif_back: [],
			serif: [
				{"chara": "koishi","serif":_("テスト")},
			],
			x: 420*2/3, y: 565*2/3,
			anime1: "reisen-wait",
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
