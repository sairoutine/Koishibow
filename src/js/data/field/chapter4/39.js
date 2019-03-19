'use strict';

var CONSTANT = require("../../../constant");
var SwitchMiss = require("./object_switch_miss");
var I = 0;
module.exports = {
	key: "chapter4_39",
	chapter: 4,
	bgm: "field10",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter4_36",
	leftField: "chapter4_42",
	background: "chapter4-39-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
		// BAD END ルートのイベントを見たあと
		//
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4-29-after_examine_switch"], "process": [
			// すでにアクセス済み
			[
				{"type": "process", "value": "changeScene", "arguments": ["event_talk", "chapter4-39-event-01"]},
			],
			// まだ未アクセス
			[
			],
		]},
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
			next_field_name: "chapter4_35",
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下へのフィールド移動",
			x: 480,
			y: 710,
			width: 960,
			height: 10,
			next_field_name: "chapter4_43",
		},
		{
			no: "renko",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "蓮子(イベント用)",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: null,
			x: 960*2/3, y: 505*2/3,
			anime1: "renko-wait",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
			show_if_event_true: "chapter4-all-in_ending",
		},
		{
			no: "merry",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー(イベント)",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: null,
			x: 1160*2/3, y: 505*2/3,
			anime1: "merry-wait",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
			show_if_event_true: "chapter4-all-in_ending",
		},
		SwitchMiss,  //スイッチ(ハズレ)
	],
};

