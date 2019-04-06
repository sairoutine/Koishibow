'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
module.exports = {
	key: "chapter4_09",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 480, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: null,
	leftField:  "chapter4_08",
	upField:    null,
	downField:  null,
	background: "chapter4-09-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": [CONSTANT.ITEM_ID_24_EVENT_NAME], "process": [
			// event 40140(蓮子と遭遇) を再生済かどうか
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "renko", "exp": "renko-reaction_01",  serif1: _("ねえ大丈夫なの？"), serif2: _("ねえ大丈夫なの？"), serif3: _("ねえ大丈夫なの？"), serif4: _("ねえ大丈夫なの？")},
						{"chara": "merry", "exp": "merry-reaction_09",  serif1: _("なにが？"), serif2: _("なにが？"), serif3: _("なにが？"), serif4: _("なにが？")},
						{"chara": "renko", "exp": "renko-reaction_01",  serif1: _("なんだか変よ"), serif2: _("なんだか変よ"), serif3: _("なんだか変よ"), serif4: _("なんだか変よ")},
						{"chara": "merry", "exp": "merry-reaction_08",  serif1: _("そうかしら"), serif2: _("そうかしら"), serif3: _("そうかしら"), serif4: _("そうかしら")},
						{"chara": "renko", "exp": "renko-wait",  serif1: _("まあいいわ、先に進みましょ"), serif2: _("まあいいわ、先に進みましょ"), serif3: _("まあいいわ、先に進みましょ"), serif4: _("まあいいわ、先に進みましょ")},
						{"chara": "koishi", "exp": "look_front",  serif1: _("わたしもいい？"), serif2: _("ついて行ってもいい？"), serif3: _("ついて行ってもいい？"), serif4: _("ついて行ってもいい？")},
						{"chara": "merry", "exp": "merry-reaction_06",  serif1: _("いいわよ"), serif2: _("いいわよ"), serif3: _("いいわよ"), serif4: _("いいわよ")},
						{"chara": "renko", "exp": "renko-wait", "serif": _("......")},
						{"chara": "renko", "exp": "renko-wait",  serif1: _("私先に行くわね"), serif2: _("私先に行くわね"), serif3: _("私先に行くわね"), serif4: _("私先に行くわね"), "option": {"changeField": "chapter4_24"}},
					],
				]},
			],
			// event 40140(蓮子と遭遇) をまだ未再生
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4_09_40130"], "process": [
					// すでにアクセス済み
					[
					],
					// まだ未アクセス
					[
						{"type": "process", "value": "playTalk", "arguments": [
							[
								{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("ちょっと待って"), serif2: _("ちょっと待って"), serif3: _("ちょっと待って"), serif4: _("ちょっと待って")},
								{"chara": "koishi", "exp": "look_front", "serif": _("なに？")},
								{"chara": "merry", "exp": "merry-reaction_09",  serif1: _("蓮子を見つけないと"), serif2: _("蓮子を見つけないと"), serif3: _("蓮子を見つけないと"), serif4: _("蓮子を見つけないと")},
								{"chara": "merry", "exp": "merry-reaction_03",  serif1: _("これ以上進むとはぐれたところからどんどん離れちゃう"), serif2: _("これ以上進むとはぐれたところからどんどん離れちゃう"), serif3: _("これ以上進むとはぐれたところからどんどん離れちゃう"), serif4: _("これ以上進むとはぐれたところからどんどん離れちゃう")},
								{"chara": "koishi", "exp": "yes", "serif": _("わかった")},
							],
						]},
						{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4_09_40130"]},
					],
				]},
			],
		]},
	],
	objects: [
		{
			no: "merry",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー",
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
		},
		{
			no: "renko",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "蓮子",
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
			show_if_event_true: CONSTANT.ITEM_ID_24_EVENT_NAME,
		},
	],
};

