'use strict';
var _ = require('i18n4v')
//↑へ移動でDエリアへ移動
// 地蔵が道をふさいでいる。
// テープ「般若心経」を再生して
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_20",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	rightField: "chapter4_21",
	leftField: "chapter4_19",
	background: "chapter4-20-bg-001",
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
			next_field_name: "chapter4_42",
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下へのフィールド移動",
			x: 480,
			y: 710,
			width: 960,
			height: 10,
			next_field_name: "chapter4_23",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "地蔵",
			serif: [
			],
			x: 739.50*2/3, y: 737.50*2/3,
			scale: 2/3,
			anime1: "chapter4-20-obj-01_anime_5",
			action_name: null,
			sound_name: null,
		},

	],
};

