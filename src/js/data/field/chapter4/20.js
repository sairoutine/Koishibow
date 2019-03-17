'use strict';
var _ = require('i18n4v')
//↑へ移動でDエリアへ移動
// 地蔵が道をふさいでいる。
// テープ「般若心経」を再生して
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_20",
	chapter: 4,
	bgm: "field10",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter4_21",
	leftField: "chapter4_19",
	background: "chapter4-20-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
		{"type": "criteria", "value": "existsItem", "arguments": ["27"], "process": [
			// テープ「お父さんお母さんへ」を持っている
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4_20_40800"], "process": [
					// すでにアクセス済み
					[],
					// まだ未アクセス
					[
						{"type": "process", "value": "playTalk", "arguments": [
							[
								{"chara": "renko", "exp": "renko-reaction_01", "serif":_("もう東洋哲学はいいわ")},
								{"chara": "renko", "exp": null, "serif":_("認知の外側について考えるのは人に任せるわ")},
								{"chara": "renko", "exp": "renko-reaction_04", "serif":_("私プラグマティストなの")},
								{"chara": "renko", "exp": "renko-reaction_03", "serif":_("確認しようのない秘封をもとめるなんてナンセンスよ")},
								{"chara": "merry", "exp": "merry-reaction_12", "serif":_("蓮子、もうやめて")},
								{"chara": "renko", "exp": "renko-reaction_01", "serif":_("理解に苦しむわ、哲学を語るくせにこいつカントを読んでないのよ")},
								{"chara": "merry", "exp": "merry-reaction_05", "serif":_("地蔵がしゃべっているのよ")},
								{"chara": "merry", "exp": "merry-reaction_03", "serif":_("あなたカントにはあったことないでしょ")},
								{"chara": "merry", "exp": "merry-reaction_05", "serif":_("でも地蔵はほら、いるのよ")},
							]
						]},
						{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4_20_40800"]}
					],
				]},
			],
			// テープ「お父さんお母さんへ」を持っていない
			[
			]
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
			next_field_name: "chapter4_42",
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下へのフィールド移動",
			x: 480,
			y: 710,
			width: 960,
			height: 10,
			next_field_name: "chapter4_23",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "地蔵",
			serif: [
				 {"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter4_20_40800"], "serifs": [
					// テープ「お父さんお母さんへ」を持っているときのセリフ再生済
					[
						{"chara": "renko", "exp": "renko-reaction_01", "serif":_("でたわね")},
						{"chara": "renko", "exp": null, "serif":_("どうしたの")},
						{"chara": "koishi", "exp": "wait", "serif":_("......")},
						{"chara": "renko", "exp": "renko-reaction_04", "serif":_("この地蔵が通してくれないのよ")},
						{"chara": "merry", "exp": "merry-reaction_10", "serif":_("貴方を待ってるみたいよ")},
						{"chara": "chapter4-20-obj-01", "exp": "chapter4-20-obj-01-obj04", "serif":_("えい")},
						{"chara": "merry", "exp": "merry-reaction_05", "serif":_("ちょっと！")},
						{"chara": "koishi", "exp": "look_top", "serif":_("なあに")},
						{"chara": "merry", "exp": "merry-reaction_10", "serif":_("いえ")},
						{"chara": "merry", "exp": "merry-reaction_08", "serif":_("その")},
						{"chara": "merry", "exp": "merry-reaction_09", "serif":_("なんでもないわ")},
						{"chara": "renko", "exp": "renko-reaction_04", "serif":_("私だってこんなことしないわ")},
						{"chara": "merry", "exp": "merry-reaction_09", "serif":_("やりかねないわ")},
						{"chara": "renko", "exp": "renko-reaction_03", "serif":_("なにも起きなければいいんだけれど"),  "option": {"playEvent": "chapter4-20-event-01"}}, // 40820
					],
					// テープ「お父さんお母さんへ」を持っているときのセリフ未再生
					[
						{"chara": "koishi", "exp": "look_front", "serif":_("なにこれ")},
						{"chara": I, "serif":_("おや")},
						{"chara": I, "serif":_("あなたは？")},
						{"chara": "koishi", "exp": "look_front", "serif":_("わたし？")},
						{"chara": "koishi", "exp": "yes", "serif":_("わたしはこいし")},
						{"chara": I, "serif":_("こいし......")},
						{"chara": I, "serif":_("あなたは何処へ向かっているのですか")},
						{"chara": "koishi", "exp": "look_front", "serif":_("この先")},
						{"chara": "chapter4-20-obj-02", "exp": "chapter4-20-obj-02-obj01", "serif":_("いいえ")},
						{"chara": I, "serif":_("あなたは何を為そうとしているのですか")},
						{"chara": "koishi", "exp": "look_front", "serif":_("なに？")},
						{"chara": I, "serif":_("私はこの先の「虚無」に人が迷い込まぬよう見守っています")},
						{"chara": I, "serif":_("知恵持たずして生きるは磁針無くして海漕ぎ出づるに同じ")},
						{"chara": "renko", "serif":_("げっ")},
						{"chara": "renko", "serif":_("いま地蔵がしゃべった？")},
						{"chara": "renko", "serif":_("いよいよ奇怪ね")},
						{"chara": "renko", "serif":_("いまの意味わかった？")},
						{"chara": "renko", "serif":_("とりあえずあたりを調べなきゃね")},
						{"chara": "renko", "serif":_("......")},
						{"chara": "renko", "serif":_("喋り続けないと静けさで狂いそうだわ")},
					],
				]}
			],
			width: 100,
			height: 100,
			x: 739.50*2/3, y: 737.50*2/3,
			scale: 2/3,
			anime1: "chapter4-20-obj-01_anime_1",
			action_name: null,
			sound_name: null,
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

