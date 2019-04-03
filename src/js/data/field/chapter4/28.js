'use strict';
var _ = require('i18n4v')
// 蓮子「北の方角は向こう（右）ね」
var CONSTANT = require("../../../constant");
var SwitchMiss = require("./object_switch_miss");
module.exports = {
	key: "chapter4_28",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 480, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: "chapter4_29",
	leftField:  "chapter4_31",
	upField:    "chapter4_40",
	downField:  "chapter4_32",
	background: "chapter4-28-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
	],
	objects: [
		{
			no: "renko",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "蓮子",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: [
				{"chara": "renko", "exp": "renko-reaction_07",  serif1: _("北の方角は向こうよ"), serif2: _("北の方角は向こうよ"), serif3: _("北の方角は向こうよ"), serif4: _("北の方角は向こうよ")},
			],
			x: 960*2/3, y: 505*2/3,
			anime1: "renko-wait",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
			not_show_if_event_true: "chapter4-29-after_examine_switch", // スイッチ調査後のルートでは表示しない
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

