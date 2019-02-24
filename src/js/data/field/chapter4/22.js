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
			no: "tewireal",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "てゐ",
			loop: true,
			serif_back: [],
			serif: [
				{"chara": "koishi", "exp": "look_front", "serif":_("こんにちは")},
				{"chara": "tewireal", "exp": "tewireal-reaction_02", "serif":_("おいまたお前か！")},
				{"chara": "tewireal", "exp": null, "serif":_("うっとおしいなあ")},
				{"chara": "koishi", "exp": "yes", "serif":_("探し物してるの")},
				{"chara": "koishi", "exp": "look_front", "serif":_("お手伝いして！")},
				{"chara": "tewireal", "exp": "tewireal-reaction_01", "serif":_("なんで")},
				{"chara": "koishi", "exp": "look_top", "serif":_("なんで？")},
				{"chara": "koishi", "exp": null, "serif":_("手伝わないの？")},
				{"chara": "tewireal", "exp": "tewireal-reaction_01", "serif":_("なんで手伝わなきゃならないのさ")},
				{"chara": "koishi", "exp": "look_bottom", "serif":_("手伝うのが友達じゃないの......")},
				{"chara": "tewireal", "exp": "tewireal-wait", "serif":_("お前友達じゃないだろ")},
				{"chara": "koishi", "exp": "look_front", "serif":_("そうなの？")},
				{"chara": "tewireal", "exp": "tewireal-reaction_03", "serif":_("ほら、とっとと失せやがれ")},
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

