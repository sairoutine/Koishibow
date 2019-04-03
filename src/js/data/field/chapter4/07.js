'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
module.exports = {
	key: "chapter4_07",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 480, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: null,
	leftField: null,
	upField:    "chapter4_04",
	downField:  null,
	background: "chapter4-07-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4_07_40110"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "merry", "exp": "merry-reaction_03",  serif1: _("うーんいないわねえ"), serif2: _("うーんいないわねえ"), serif3: _("うーんいないわねえ"), serif4: _("うーんいないわねえ")},
						{"chara": "koishi", "exp": "look_top", "serif": _("友達？")},
						{"chara": "merry", "exp": "merry-reaction_06",  serif1: _("そう"), serif2: _("そう"), serif3: _("そう"), serif4: _("そう")},
						{"chara": "merry", "exp": "merry-reaction_08",  serif1: _("この辺にいるような気はするんだけどなあ"), serif2: _("この辺にいるような気はするんだけどなあ"), serif3: _("この辺にいるような気はするんだけどなあ"), serif4: _("この辺にいるような気はするんだけどなあ")},
						{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("れんこー、って叫んでくれる？"), serif2: _("れんこー、って叫んでくれる？"), serif3: _("れんこー、って叫んでくれる？"), serif4: _("れんこー、って叫んでくれる？")},
						{"chara": "merry", "exp": "merry-reaction_09",  serif1: _("私喉が悪くて"), serif2: _("私喉が悪くて"), serif3: _("私喉が悪くて"), serif4: _("私喉が悪くて")},
						{"chara": "koishi", "exp": "yes",  serif1: _("いいよ"), serif2: _("いいよ"), serif3: _("いいよ"), serif4: _("いいよ")},
						{"chara": "koishi", "exp": "look_top",  serif1: _("れんこーっ"), serif2: _("れーんーこー！"), serif3: _("れーんーこー！"), serif4: _("れーんーこー！")},
						{"chara": "koishi", "exp": null, "serif": _("......")},
						{"chara": "koishi", "exp": "wait",  serif1: _("いないね"), serif2: _("いないね"), serif3: _("いないね"), serif4: _("いないね")},
						{"chara": "merry", "exp": "merry-reaction_03",  serif1: _("いないね"), serif2: _("いないね"), serif3: _("いないね"), serif4: _("いないね")},
						{"chara": "merry", "exp": null,  serif1: _("携帯もないしなあ"), serif2: _("携帯もないしなあ"), serif3: _("携帯もないしなあ"), serif4: _("携帯もないしなあ")},
						{"chara": "merry", "exp": "merry-reaction_08",  serif1: _("なにかいい方法ないかしら"), serif2: _("なにかいい方法ないかしら"), serif3: _("なにかいい方法ないかしら"), serif4: _("なにかいい方法ないかしら")},
						{"chara": "koishi", "exp": "look_front", "serif": _("あれ？")},
						{"chara": "koishi", "exp": null,  serif1: _("これひょっとして"), serif2: _("これひょっとして"), serif3: _("これひょっとして"), serif4: _("これひょっとして")},
						{"chara": "merry", "exp": "merry-reaction_05", "serif": _("あ！")},
						{"chara": "merry", "exp": "merry-reaction_07",  serif1: _("それがさっき言ってたものよ"), serif2: _("それがさっき言ってたものよ"), serif3: _("それがさっき言ってたものよ"), serif4: _("それがさっき言ってたものよ")},
						{"chara": "koishi", "exp": "look_front", "serif": _("お友達？")},
						{"chara": "merry", "exp": "merry-reaction_09",  serif1: _("......そっちじゃなくて"), serif2: _("......そっちじゃなくて"), serif3: _("......そっちじゃなくて"), serif4: _("......そっちじゃなくて")},
						{"chara": "merry", "exp": "merry-reaction_07",  serif1: _("カセットテープを流す機械"), serif2: _("カセットテープを流す機械"), serif3: _("カセットテープを流す機械"), serif4: _("カセットテープを流す機械")},
						{"chara": "koishi", "exp": "look_front",  serif1: _("これがそれ？"), serif2: _("これがそれ？"), serif3: _("これがそれ？"), serif4: _("これがそれ？")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4_07_40110"]}
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

