'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_07",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: null,
	leftField: null,
	background: "chapter4-07-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4_07_40110"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "merry", "exp": "merry-reaction_03", "serif":_("うーんいないわねえ")},
						{"chara": "koishi", "exp": "look_top", "serif":_("友達？")},
						{"chara": "merry", "exp": "merry-reaction_06", "serif":_("そう")},
						{"chara": "merry", "exp": "merry-reaction_08", "serif":_("この辺にいるような気はするんだけどなあ")},
						{"chara": "merry", "exp": "merry-reaction_05", "serif":_("れんこー、って叫んでくれる？")},
						{"chara": "merry", "exp": "merry-reaction_09", "serif":_("私喉が悪くて")},
						{"chara": "koishi", "exp": "yes", "serif":_("いいよ")},
						{"chara": "koishi", "exp": "look_top", "serif":_("れんこーっ")},
						{"chara": "koishi", "exp": null, "serif":_("......")},
						{"chara": "koishi", "exp": "wait", "serif":_("いないね")},
						{"chara": "merry", "exp": "merry-reaction_03", "serif":_("いないね")},
						{"chara": "merry", "exp": null, "serif":_("携帯もないしなあ")},
						{"chara": "merry", "exp": "merry-reaction_08", "serif":_("なにかいい方法ないかしら")},
						{"chara": "koishi", "exp": "look_front", "serif":_("あれ？")},
						{"chara": "koishi", "exp": null, "serif":_("これひょっとして")},
						{"chara": "merry", "exp": "merry-reaction_05", "serif":_("あ！")},
						{"chara": "merry", "exp": "merry-reaction_07", "serif":_("それがさっき言ってたものよ")},
						{"chara": "koishi", "exp": "look_front", "serif":_("お友達？")},
						{"chara": "merry", "exp": "merry-reaction_09", "serif":_("......そっちじゃなくて")},
						{"chara": "merry", "exp": "merry-reaction_07", "serif":_("カセットテープを流す機械")},
						{"chara": "koishi", "exp": "look_front", "serif":_("これがそれ？")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4_07_40110"]}
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
			next_field_name: "chapter4_04",
		},
		{
			no: "merry",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー",
			loop: true,
			serif_back: [],
			serif: null,
			x: 1060*2/3, y: 505*2/3,
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

