'use strict';
var CONSTANT = require("../../../constant");
var _ = require('i18n4v')
var SwitchMiss = require("./object_switch_miss");
module.exports = {
	key: "chapter4_35",
	chapter: 4,
	bgm: "field10",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	upStartPosition:    {x: 480, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: "chapter4_32",
	leftField: "chapter4_34",
	upField:    "chapter4_31",
	downField:  "chapter4_39",
	background: "chapter4-35-bg-001",
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
				{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter4_35-merry-limit", 2], "serifs": [
					[
						{"chara": "koishi", "exp": "look_front", "serif":_("ねえ、お友達いっぱいいるの")},
						{"chara": "merry", "exp": "merry-reaction_09", "serif":_("あんまりいないわね")},
						{"chara": "koishi", "exp": "look_front", "serif":_("私はたくさんいるよ")},
						{"chara": "merry", "exp": "merry-reaction_06", "serif":_("素敵ね")},
						{"chara": "merry", "exp": null, "serif":_("なんて子？")},
						{"chara": "koishi", "exp": "look_top", "serif":_("なにが？")},
						{"chara": "merry", "exp": "merry-reaction_09", "serif":_("お友達の名前は？")},
					],
					[
						{"chara": "merry", "exp": "merry-reaction_10", "serif":_("どうしたの")},
						{"chara": "koishi", "exp": "look_bottom", "serif":_("なんでもない")},
					],
				]},
			],
			x: 1060*2/3, y: 505*2/3,
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

