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
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 400, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: "chapter4_21",
	leftField:  "chapter4_19",
	upField:    null,
	downField:  "chapter4_23",
	background: "chapter4-20-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4-20-renmeri"], "process": [
			// 蓮子とメリーが存在する
			[
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
										{"chara": "renko", "exp": "renko-reaction_01",  serif1: _("もう東洋哲学はいいわ"), serif2: _("もう東洋哲学はいいわ"), serif3: _("もう東洋哲学はいいわ"), serif4: _("もう東洋哲学はいいわ")},
										{"chara": "renko", "exp": null,  serif1: _("認知の外側について考えるのは人に任せるわ"), serif2: _("認知の外側について考えるのは人に任せるわ"), serif3: _("認知の外側について考えるのは人に任せるわ"), serif4: _("認知の外側について考えるのは人に任せるわ")},
										{"chara": "renko", "exp": "renko-reaction_04",  serif1: _("私プラグマティストなの"), serif2: _("私プラグマティストなの"), serif3: _("私プラグマティストなの"), serif4: _("私プラグマティストなの")},
										{"chara": "renko", "exp": "renko-reaction_03",  serif1: _("確認しようのない秘封を\nもとめるなんてナンセンスよ"), serif2: _("確認しようのない秘封を\nもとめるなんてナンセンスよ"), serif3: _("確認しようのない秘封を\nもとめるなんてナンセンスよ"), serif4: _("確認しようのない秘封を\nもとめるなんてナンセンスよ")},
										{"chara": "merry", "exp": "merry-reaction_12",  serif1: _("蓮子、もうやめて"), serif2: _("蓮子、もうやめて"), serif3: _("蓮子、もうやめて"), serif4: _("蓮子、もうやめて")},
										{"chara": "renko", "exp": "renko-reaction_01",  serif1: _("理解に苦しむわ、哲学を語るくせに\nこいつカントを読んでないのよ"), serif2: _("理解に苦しむわ、哲学を語るくせに\nこいつカントを読んでないのよ"), serif3: _("理解に苦しむわ、哲学を語るくせに\nこいつカントを読んでないのよ"), serif4: _("理解に苦しむわ、哲学を語るくせに\nこいつカントを読んでないのよ")},
										{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("地蔵がしゃべっているのよ"), serif2: _("地蔵がしゃべっているのよ"), serif3: _("地蔵がしゃべっているのよ"), serif4: _("地蔵がしゃべっているのよ")},
										{"chara": "merry", "exp": "merry-reaction_03",  serif1: _("あなたカントにはあったことないでしょ"), serif2: _("あなたカントにはあったことないでしょ"), serif3: _("あなたカントにはあったことないでしょ"), serif4: _("あなたカントにはあったことないでしょ")},
										{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("でも地蔵はほら、いるのよ"), serif2: _("でも地蔵はほら、いるのよ"), serif3: _("でも地蔵はほら、いるのよ"), serif4: _("でも地蔵はほら、いるのよ")},
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
			// 蓮子とメリーが存在しない
			[],
		]},
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "地蔵",
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter4-20-renmeri"], "serifs": [
					// 蓮子とメリーがいる
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter4_20_40800"], "serifs": [
							// テープ「お父さんお母さんへ」を持っているときのセリフ再生済
							[
								{"chara": "renko", "exp": "renko-reaction_01",  serif1: _("でたわね"), serif2: _("でたわね"), serif3: _("でたわね"), serif4: _("でたわね")},
								{"chara": "renko", "exp": null,  serif1: _("どうしたの"), serif2: _("どうしたの"), serif3: _("どうしたの"), serif4: _("どうしたの")},
								{"chara": "koishi", "exp": "wait", "serif": _("......")},
								{"chara": "renko", "exp": "renko-reaction_04",  serif1: _("この地蔵が通してくれないのよ"), serif2: _("この地蔵が通してくれないのよ"), serif3: _("この地蔵が通してくれないのよ"), serif4: _("この地蔵が通してくれないのよ")},
								{"chara": "merry", "exp": "merry-reaction_10",  serif1: _("貴方を待ってるみたいよ"), serif2: _("貴方を待ってるみたいよ"), serif3: _("貴方を待ってるみたいよ"), serif4: _("貴方を待ってるみたいよ")},
								{"chara": "koishi", "exp": "touch",  serif1: _("えい"), serif2: _("えい"), serif3: _("えい"), serif4: _("えい")},
								{"chara": I, "exp": "chapter4-20-obj-01_anime_4", serif1: _("．．．．．．．．．"), serif2: _("．．．．．．．．．"), serif3: _("．．．．．．．．．"), serif4: _("．．．．．．．．．")},
								{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("ちょっと！"), serif2: _("ちょっと！"), serif3: _("ちょっと！"), serif4: _("ちょっと！")},
								{"chara": "koishi", "exp": "look_top", "serif": _("なあに")},
								{"chara": "merry", "exp": "merry-reaction_10",  serif1: _("いえ"), serif2: _("いえ"), serif3: _("いえ"), serif4: _("いえ")},
								{"chara": "merry", "exp": "merry-reaction_08",  serif1: _("その"), serif2: _("その"), serif3: _("その"), serif4: _("その")},
								{"chara": "merry", "exp": "merry-reaction_09",  serif1: _("なんでもないわ"), serif2: _("なんでもないわ"), serif3: _("なんでもないわ"), serif4: _("なんでもないわ")},
								{"chara": "renko", "exp": "renko-reaction_04",  serif1: _("私だってこんなことしないわ"), serif2: _("私だってこんなことしないわ"), serif3: _("私だってこんなことしないわ"), serif4: _("私だってこんなことしないわ")},
								{"chara": "merry", "exp": "merry-reaction_09",  serif1: _("やりかねないわ"), serif2: _("やりかねないわ"), serif3: _("やりかねないわ"), serif4: _("やりかねないわ")},
								{"chara": "renko", "exp": "renko-reaction_03",  serif1: _("なにも起きなければいいんだけれど"), serif2: _("なにも起きなければいいんだけれど"), serif3: _("なにも起きなければいいんだけれど"), serif4: _("なにも起きなければいいんだけれど"),  "option": {"playEvent": "chapter4-20-event-01"}}, // 40820
							],
							// テープ「お父さんお母さんへ」を持っているときのセリフ未再生
							[
								{"chara": "koishi", "exp": "look_front", "serif": _("なにこれ")},
								{"chara": I,  serif1: _("おや"), serif2: _("おや"), serif3: _("おや"), serif4: _("おや")},
								{"chara": I,  serif1: _("あなたは？"), serif2: _("あなたは？"), serif3: _("あなたは？"), serif4: _("あなたは？")},
								{"chara": "koishi", "exp": "look_front",  serif1: _("わたし？"), serif2: _("わたし？"), serif3: _("わたし？"), serif4: _("わたし？")},
								{"chara": "koishi", "exp": "yes",  serif1: _("わたしはこいし"), serif2: _("わたしはこいし"), serif3: _("わたしはこいし"), serif4: _("わたしはこいし")},
								{"chara": I,  serif1: _("こいし......"), serif2: _("こいし......"), serif3: _("こいし......"), serif4: _("こいし......")},
								{"chara": I,  serif1: _("あなたは何処へ向かっているのですか"), serif2: _("あなたは何処へ向かっているのですか"), serif3: _("あなたは何処へ向かっているのですか"), serif4: _("あなたは何処へ向かっているのですか")},
								{"chara": "koishi", "exp": "look_front",  serif1: _("この先"), serif2: _("先へ行きたいんだけど"), serif3: _("先へ行きたいんだけど"), serif4: _("先へ行きたいんだけど")},
								{"chara": I, "exp": null,  serif1: _("いいえ"), serif2: _("いいえ"), serif3: _("いいえ"), serif4: _("いいえ")},
								{"chara": I,  serif1: _("あなたは何を為そうとしているのですか"), serif2: _("あなたは何を為そうとしているのですか"), serif3: _("あなたは何を為そうとしているのですか"), serif4: _("あなたは何を為そうとしているのですか")},
								{"chara": "koishi", "exp": "look_front", "serif": _("なに？")},
								{"chara": I,  serif1: _("私はこの先の「虚無」に\n人が迷い込まぬよう見守っています"), serif2: _("私はこの先の「虚無」に\n人が迷い込まぬよう見守っています"), serif3: _("私はこの先の「虚無」に\n人が迷い込まぬよう見守っています"), serif4: _("私はこの先の「虚無」に\n人が迷い込まぬよう見守っています")},
								{"chara": I,  serif1: _("知恵持たずして生きるは\n磁針無くして海漕ぎ出づるに同じ"), serif2: _("知恵持たずして生きるは\n磁針無くして海漕ぎ出づるに同じ"), serif3: _("知恵持たずして生きるは\n磁針無くして海漕ぎ出づるに同じ"), serif4: _("知恵持たずして生きるは\n磁針無くして海漕ぎ出づるに同じ")},
								{"chara": "renko",  serif1: _("げっ"), serif2: _("げっ"), serif3: _("げっ"), serif4: _("げっ")},
								{"chara": "renko",  serif1: _("いま地蔵がしゃべった？"), serif2: _("いま地蔵がしゃべった？"), serif3: _("いま地蔵がしゃべった？"), serif4: _("いま地蔵がしゃべった？")},
								{"chara": "renko",  serif1: _("いよいよ奇怪ね"), serif2: _("いよいよ奇怪ね"), serif3: _("いよいよ奇怪ね"), serif4: _("いよいよ奇怪ね")},
								{"chara": "renko",  serif1: _("いまの意味わかった？"), serif2: _("今の話聞いてた？"), serif3: _("今の話聞いてた？"), serif4: _("今の話聞いてた？")},
								{"chara": "renko",  serif1: _("とりあえずあたりを調べなきゃね"), serif2: _("とりあえずあたりを調べなきゃね"), serif3: _("とりあえずあたりを調べなきゃね"), serif4: _("とりあえずあたりを調べなきゃね")},
								{"chara": "renko", "serif": _("......")},
								{"chara": "renko",  serif1: _("喋り続けないと静けさで狂いそうだわ"), serif2: _("喋り続けないと静けさで狂いそうだわ"), serif3: _("喋り続けないと静けさで狂いそうだわ"), serif4: _("喋り続けないと静けさで狂いそうだわ")},
							 ],
						]},
					],
					 // 蓮子とメリーが存在しない
					[
						{"chara": "koishi", "exp": "look_front", "serif": _("なにこれ")},
						{"chara": I,  serif1: _("おや"), serif2: _("おや"), serif3: _("おや"), serif4: _("おや")},
						{"chara": I,  serif1: _("あなたは？"), serif2: _("あなたは？"), serif3: _("あなたは？"), serif4: _("あなたは？")},
						{"chara": "koishi", "exp": "look_front",  serif1: _("わたし？"), serif2: _("わたし？"), serif3: _("わたし？"), serif4: _("わたし？")},
						{"chara": "koishi", "exp": "yes",  serif1: _("わたしはこいし"), serif2: _("わたしはこいし"), serif3: _("わたしはこいし"), serif4: _("わたしはこいし")},
						{"chara": I,  serif1: _("こいし......"), serif2: _("こいし......"), serif3: _("こいし......"), serif4: _("こいし......")},
						{"chara": I,  serif1: _("あなたは何処へ向かっているのですか"), serif2: _("あなたは何処へ向かっているのですか"), serif3: _("あなたは何処へ向かっているのですか"), serif4: _("あなたは何処へ向かっているのですか")},
						{"chara": "koishi", "exp": "look_front",  serif1: _("この先"), serif2: _("先へ行きたいんだけど"), serif3: _("先へ行きたいんだけど"), serif4: _("先へ行きたいんだけど")},
						{"chara": I, "exp": null,  serif1: _("いいえ"), serif2: _("いいえ"), serif3: _("いいえ"), serif4: _("いいえ")},
						{"chara": I,  serif1: _("あなたは何を為そうとしているのですか"), serif2: _("あなたは何を為そうとしているのですか"), serif3: _("あなたは何を為そうとしているのですか"), serif4: _("あなたは何を為そうとしているのですか")},
						{"chara": "koishi", "exp": "look_front", "serif": _("なに？")},
						{"chara": I,  serif1: _("私はこの先の「虚無」に\n人が迷い込まぬよう見守っています"), serif2: _("私はこの先の「虚無」に\n人が迷い込まぬよう見守っています"), serif3: _("私はこの先の「虚無」に\n人が迷い込まぬよう見守っています"), serif4: _("私はこの先の「虚無」に\n人が迷い込まぬよう見守っています")},
						{"chara": I,  serif1: _("知恵持たずして生きるは\n磁針無くして海漕ぎ出づるに同じ"), serif2: _("知恵持たずして生きるは\n磁針無くして海漕ぎ出づるに同じ"), serif3: _("知恵持たずして生きるは\n磁針無くして海漕ぎ出づるに同じ"), serif4: _("知恵持たずして生きるは\n磁針無くして海漕ぎ出づるに同じ")},
					],
				]}
			],
			width: 200,
			height: 500,
			x: 739.50*2/3, y: 737.50*2/3,
			scale: 2/3,
			anime1: "chapter4-20-obj-01_anime_1",
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},

		{
			no: "merry",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: null,
			x: 1160*2/3, y: 505*2/3,
			width: 150,
			anime1: "merry-wait",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
			show_if_event_true: "chapter4-20-renmeri",
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
			width: 150,
			anime1: "renko-wait",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
			show_if_event_true: "chapter4-20-renmeri",
		},
	],
};

