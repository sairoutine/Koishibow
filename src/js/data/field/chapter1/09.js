'use strict';
var _ = require('i18n4v')
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_09",
	chapter: 1,
	bgm: "field4",
	rightStartPosition:   {x: 670, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter1_10",
	leftField: "chapter1_08",
	upField: null,
	downField: null,
	background: "chapter1-09-bg-001",
	walkSound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "生垣(秘密基地)",
			loop: true,
			serif: null,
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_10-secretBase-01"], "serifs": [
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_10-secretBase-02"], "serifs": [
							// 2つの合言葉を知っている
							[


								{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_09-" + I + "-_getItem-12"], "serifs": [
									// アイテムを手に入れたあと
									[
										{"chara": I,  serif1: _("合言葉は仲間にしか教えちゃいけないんだぜ"), serif2: _("合言葉は仲間にしか教えちゃいけないんだぜ"), serif3: _("合言葉は仲間にしか教えちゃいけないんだぜ"), serif4: _("合言葉は仲間にしか教えちゃいけないんだぜ")},
										{"chara": I,  serif1: _("秘密だからな"), serif2: _("秘密だからな"), serif3: _("秘密だからな"), serif4: _("秘密だからな")},
									],
									[
										{"id": "chapter1_09-" + I + "-_getItem-12", "save": true},
										{"chara": I,  serif1: _("合言葉は？"), serif2: _("合言葉は？"), serif3: _("合言葉は？"), serif4: _("合言葉は？"), "junction": [_("先生"),_("お母さん"),_("友達"),_("兄弟")]},
										{"chara": I,  serif1: _("へえ、気が合うな......"), serif2: _("へえ、気が合うな......"), serif3: _("へえ、気が合うな......"), serif4: _("へえ、気が合うな......")},
										{"chara": I,  serif1: _("中のものが欲しいのか？"), serif2: _("中のものが欲しいのか？"), serif3: _("中のものが欲しいのか？"), serif4: _("中のものが欲しいのか？")},
										{"chara": "koishi", "serif": _("CHAPTER1_FIELD_09_SERIF0001")},
										{"chara": I,  serif1: _("そら、あの子の忘れ物だ"), serif2: _("そら、あの子の忘れ物だ"), serif3: _("そら、あの子の忘れ物だ"), serif4: _("そら、あの子の忘れ物だ"), "option": {
											getItem: "12",
										}},
										{"chara": I,  serif1: _("じゃあな"), serif2: _("じゃあな"), serif3: _("じゃあな"), serif4: _("じゃあな")},
									],
								]}
							],
							[
								{"chara": I,  serif1: _("合言葉は？"), serif2: _("合言葉は？"), serif3: _("合言葉は？"), serif4: _("合言葉は？")},
								{"chara": "koishi",  serif1: _("知らない"), serif2: _("知らない"), serif3: _("知らない"), serif4: _("知らない")},
							],
						]}
					],
					[
						{"chara": I,  serif1: _("合言葉は？"), serif2: _("合言葉は？"), serif3: _("合言葉は？"), serif4: _("合言葉は？")},
						{"chara": "koishi",  serif1: _("知らない"), serif2: _("知らない"), serif3: _("知らない"), serif4: _("知らない")},
					],
				]},
			],
			x: 720*2/3, y: 428*2/3,
			scale: 2/3,
			width: 100,
			anime1: "chapter1-09-obj-02-obj01",
			anime2: "chapter1-09-obj-02-obj02",
			anime3: "chapter1-09-obj-02-obj01",

			action_name: "look_front",
			sound_name: "chapter1-09-growl",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "村紗",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [
				{"chara": I, "exp": "murasa-ura_reaction_01",  serif1: _("う............"), serif2: _("う............"), serif3: _("う............"), serif4: _("う............")},
				{"chara": I, "exp": "murasa-ura_reaction_01",  serif1: _("みんなわたしのこと\nきらいだって"), serif2: _("みんなわたしのこと\nきらいだって"), serif3: _("みんなわたしのこと\nきらいだって"), serif4: _("みんなわたしのこと\nきらいだって")},
				{"chara": I, "exp": "murasa-ura_reaction_01", "serif": _("わたしもみんなみたいになりたい......")},
				{"chara": I, "exp": "murasa-ura_reaction_01", "serif": _("すきでこうなったわけじゃないのに.....")},
				{"chara": I, "exp": "murasa-ura_reaction_02",  serif1: _("もういや……"), serif2: _("もういや……"), serif3: _("もういや……"), serif4: _("もういや……")},
				{"chara": I, "exp": "murasa-ura_reaction_02", "serif": _("ひみつきちだって\n私だけは入れない……")},
			],
			serif: [
				{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["12"], "serifs": [
					[
						{"chara": I, "serif":"", "option": {
							"changeScene": "event_for_chapter1_play_with_murasa",
						}},
					],
					[
						{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter1_09-" + I + "limit-01", 1], "serifs": [
							[
								// 1-21
								{"chara": I, "exp": "murasa-reaction_01",  serif1: _("何"), serif2: _("何"), serif3: _("何"), serif4: _("何")},
								{"chara": "koishi",        "exp": "back",  serif1: _("えっ？"), serif2: _("えっ？"), serif3: _("えっ？"), serif4: _("えっ？")},
								{"chara": I, "exp": "murasa-reaction_01",  serif1: _("なんだよ"), serif2: _("なんだよ"), serif3: _("なんだよ"), serif4: _("なんだよ")},
								{"chara": I, "exp": "murasa-reaction_02",  serif1: _("用がないならあっちいけよ"), serif2: _("用がないならあっちいけよ"), serif3: _("用がないならあっちいけよ"), serif4: _("用がないならあっちいけよ")},
								{"chara": "koishi",        "exp": "back",  serif1: _("あそばないの？"), serif2: _("あそばないの？"), serif3: _("あそばないの？"), serif4: _("あそばないの？")},
								{"chara": I, "exp": "murasa-reaction_01",  serif1: _("は？"), serif2: _("は？"), serif3: _("は？"), serif4: _("は？")},
								{"chara": I, "exp": "murasa-reaction_01",  serif1: _("もう遊んでるだろ"), serif2: _("もう遊んでるだろ"), serif3: _("もう遊んでるだろ"), serif4: _("もう遊んでるだろ")},
								{"chara": "koishi",        "exp": "back",  serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............")},
								{"chara": I, "exp": "murasa-reaction_02",  serif1: _("なんだよ！あっちいけよ！"), serif2: _("なんだよ！あっちいけよ！"), serif3: _("なんだよ！あっちいけよ！"), serif4: _("なんだよ！あっちいけよ！")},
							],
							[
								{"chara": I, "exp": "murasa-reaction_02",  serif1: _("なんだよ！あっちいけよ！"), serif2: _("なんだよ！あっちいけよ！"), serif3: _("なんだよ！あっちいけよ！"), serif4: _("なんだよ！あっちいけよ！")},
								{"chara": "koishi",        "exp": "back",  serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............")},
							]
						]},
					],
				]},

			],
			x: 1198*2/3, y: 588*2/3,
			scale: 2/3,
			anime1: "murasa-wait",
			anime2: null,
			anime3: null,
			anime4: "murasa-reverse_ura",
			anime5: "murasa-ura_wait",
			anime6: "murasa-reverse_omote",
			width: 150,

			action_name: null,
			sound_name: null,
			show_if_event_true: "event_for_chapter1_playdoll",
		},
		{
			no: ++I,
			type: CONSTANT.FAUCET_TYPE,
			name: "蛇口",
			serif: [
				{"chara": "koishi", "exp": "back", "serif": _("CHAPTER1_FIELD_09_SERIF0001")},
				{"chara": "koishi", "exp": "back",  serif1: _("水でないなー"), serif2: _("水でないなー"), serif3: _("水でないなー"), serif4: _("水でないなー")},
			],
			serif_back: [
				{"id": "chapter1_09-faucet-talk-1", "save": true},
				{"chara": I,  serif1: _("こら！"), serif2: _("こら！"), serif3: _("こら！"), serif4: _("こら！")},
				{"chara": I,  serif1: _("排水溝が詰まってるのにだめでしょ！"), serif2: _("排水溝が詰まってるのにだめでしょ！"), serif3: _("排水溝が詰まってるのにだめでしょ！"), serif4: _("排水溝が詰まってるのにだめでしょ！")},
				{"chara": I,  serif1: _("あふれちゃって……"), serif2: _("あふれちゃって……"), serif3: _("あふれちゃって……"), serif4: _("あふれちゃって……")},
				{"chara": I,  serif1: _("みんなおぼれちゃうでしょ！"), serif2: _("みんなおぼれちゃうでしょ！"), serif3: _("みんなおぼれちゃうでしょ！"), serif4: _("みんなおぼれちゃうでしょ！")},
				{"chara": I,  serif1: _("ちゃんと掃除して頂戴！"), serif2: _("ちゃんと掃除して頂戴！"), serif3: _("ちゃんと掃除して頂戴！"), serif4: _("ちゃんと掃除して頂戴！")},
			],

			x:384*2/3, y:572*2/3,
			scale: 2/3,
			anime1: "chapter1-09-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-09-obj-01-obj02",
			anime5: "chapter1-09-obj-01-obj03",
			anime6: "chapter1-09-obj-01-obj04",
			width: 240,
			height: 240,

			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.JOURNAL_BACK_TYPE,
			x: 820, y: 450,
			journal_id: "journal009",
		},


	]
};
