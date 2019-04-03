'use strict';
var _ = require('i18n4v')
//メリー「目的地はここから東の方角みたいね」
var CONSTANT = require("../../../constant");
var SwitchMiss = require("./object_switch_miss");
module.exports = {
	key: "chapter4_37",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 480, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: "chapter4_38",
	leftField:  "chapter4_36",
	upField:    "chapter4_33",
	downField:  "chapter4_41",
	background: "chapter4-37-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
	],
	objects: [
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
			name: "メリー",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: [
				{"chara": "merry", "exp": "merry-reaction_08",  serif1: _("目的地はここから東の方角みたいね"), serif2: _("目的地はここから東の方角みたいね"), serif3: _("目的地はここから東の方角みたいね"), serif4: _("目的地はここから東の方角みたいね")},
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
			not_show_if_event_true: "chapter4-29-after_examine_switch", // スイッチ調査後のルートでは表示しない
		},
		SwitchMiss,  //スイッチ(ハズレ)
	],
};

