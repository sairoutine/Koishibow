'use strict';
var _ = require('i18n4v')
//メリー「目的地はここから東の方角みたいね」
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_37",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter4_38",
	leftField: "chapter4_36",
	background: "chapter4-37-bg-001",
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
			next_field_name: "chapter4_33",
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下へのフィールド移動",
			x: 480,
			y: 710,
			width: 960,
			height: 10,
			next_field_name: "chapter4_41",
		},
		{
			no: "merry",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー",
			loop: true,
			serif_back: [],
			serif: [
				{"chara": "merry", "exp": "merry-reaction_08", "serif":_("目的地はここから東の方角みたいね")},
			],
			x: 1160*2/3, y: 505*2/3,
			anime1: "merry-wait",
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

