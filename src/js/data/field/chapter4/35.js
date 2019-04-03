'use strict';
var CONSTANT = require("../../../constant");
var _ = require('i18n4v')
var SwitchMiss = require("./object_switch_miss");
module.exports = {
	key: "chapter4_35",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 480, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
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
				{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter4_35-merry-limit", 1], "serifs": [
					[
						{"chara": "koishi", "exp": "look_front",  serif1: _("ねえ、お友達いっぱいいるの"), serif2: _("ねえ、お友達いっぱいいるの"), serif3: _("ねえ、お友達いっぱいいるの"), serif4: _("ねえ、お友達いっぱいいるの")},
						{"chara": "merry", "exp": "merry-reaction_09",  serif1: _("あんまりいないわね"), serif2: _("あんまりいないわね"), serif3: _("あんまりいないわね"), serif4: _("あんまりいないわね")},
						{"chara": "koishi", "exp": "look_front",  serif1: _("私はたくさんいるよ"), serif2: _("私はたくさんいるよ"), serif3: _("私はたくさんいるよ"), serif4: _("私はたくさんいるよ")},
						{"chara": "merry", "exp": "merry-reaction_06",  serif1: _("素敵ね"), serif2: _("素敵ね"), serif3: _("素敵ね"), serif4: _("素敵ね")},
						{"chara": "merry", "exp": null,  serif1: _("なんて子？"), serif2: _("なんて子？"), serif3: _("なんて子？"), serif4: _("なんて子？")},
						{"chara": "koishi", "exp": "look_top",  serif1: _("なにが？"), serif2: _("なにが？"), serif3: _("なにが？"), serif4: _("なにが？")},
						{"chara": "merry", "exp": "merry-reaction_09",  serif1: _("お友達の名前は？"), serif2: _("お友達の名前は？"), serif3: _("お友達の名前は？"), serif4: _("お友達の名前は？")},
					],
					[
						{"chara": "merry", "exp": "merry-reaction_10",  serif1: _("どうしたの"), serif2: _("どうしたの"), serif3: _("どうしたの"), serif4: _("どうしたの")},
						{"chara": "koishi", "exp": "look_bottom",  serif1: _("なんでもない"), serif2: _("なんでもない"), serif3: _("なんでもない"), serif4: _("なんでもない")},
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

