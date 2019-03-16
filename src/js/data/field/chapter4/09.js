'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_09",
	chapter: 4,
	bgm: "field10",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: null,
	leftField: "chapter4_08",
	background: "chapter4-09-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4_09_40130"], "process": [
			// すでにアクセス済み
			[
				// event 40140 を再生済かどうか
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4-07-event-40140"], "process": [
					// すでにアクセス済み
					[
						{"chara": "renko", "exp": "renko-reaction_01", "serif":_("ねえ大丈夫なの？")},
						{"chara": "merry", "exp": "merry-reaction_09", "serif":_("なにが？")},
						{"chara": "renko", "exp": "renko-reaction_01", "serif":_("なんだか変よ")},
						{"chara": "merry", "exp": "merry-reaction_08", "serif":_("そうかしら")},
						{"chara": "renko", "exp": "renko-wait", "serif":_("まあいいわ、先に進みましょ")},
						{"chara": "koishi", "exp": "look_front", "serif":_("わたしもいい？")},
						{"chara": "merry", "exp": "merry-reaction_06", "serif":_("いいわよ")},
						{"chara": "renko", "exp": "renko-wait", "serif":_("......")},
						{"chara": "renko", "exp": "renko-wait", "serif":_("私先に行くわね"), "option": {"changeField": "chapter4_24"}},
					],
					// まだ未アクセス
					[
					],
				]},
			],
			// まだ未アクセス
			[
				{"chara": "merry", "exp": "merry-reaction_05", "serif":_("ちょっと待って")},
				{"chara": "koishi", "exp": "look_front", "serif":_("なに？")},
				{"chara": "merry", "exp": "merry-reaction_09", "serif":_("蓮子を見つけないと")},
				{"chara": "merry", "exp": "merry-reaction_03", "serif":_("これ以上進むとはぐれたところからどんどん離れちゃう")},
				{"chara": "koishi", "exp": "yes", "serif":_("わかった")},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4_09_40130"]}
			],
		]},

	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下へのフィールド移動",
			x: 480,
			y: 710,
			width: 960,
			height: 10,
			next_field_name: "chapter4_24",
		},
		{
			no: "merry",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー",
			loop: true,
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
		},



	],
};

