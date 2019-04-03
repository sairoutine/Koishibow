'use strict';
var _ = require('i18n4v')
//蓮子「ここをキャンプ地としましょう」
//メリー「わからなかったらカンでもいいのよ」
var CONSTANT = require("../../../constant");
var SwitchMiss = require("./object_switch_miss");
module.exports = {
	key: "chapter4_38",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 480, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: "chapter4_39",
	leftField:  "chapter4_37",
	upField:    "chapter4_34",
	downField:  "chapter4_42",
	background: "chapter4-38-bg-001",
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
				{"chara": "renko", "exp": "renko-reaction_06",  serif1: _("ここをキャンプ地としましょ"), serif2: _("ここをキャンプ地としましょ"), serif3: _("ここをキャンプ地としましょ"), serif4: _("ここをキャンプ地としましょ")},
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
			name: "メリー",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: [
				{"chara": "merry", "exp": "merry-reaction_06",  serif1: _("わからなかったらカンでもいいのよ"), serif2: _("わからなかったらカンでもいいのよ"), serif3: _("わからなかったらカンでもいいのよ"), serif4: _("わからなかったらカンでもいいのよ")},
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

