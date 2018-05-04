'use strict';
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_09",
	chapter: 1,
	bgm: "field4",
	right_start_position: {x: 690, y: 380},
	left_start_position:  {x: 180, y: 380},
	right_field: "chapter1_10",
	left_field: "chapter1_08",
	background: "chapter1-09-bg-001",
	walk_sound: "walking_bare_outside",
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
										{"chara": I, "serif":"合言葉は仲間にしか教えちゃいけないんだぜ"},
										{"chara": I, "serif":"秘密だからな"},
									],
									[
										{"id": "chapter1_09-" + I + "-_getItem-12", "save": true},
										{"chara": I, "serif":"合言葉は？", "junction": ["先生","お母さん","友達","兄弟"]},
										{"chara": I, "serif":"へえ、気が合うな......"},
										{"chara": I, "serif":"中のものが欲しいのか？"},
										{"chara": "koishi", "serif":"うん"},
										{"chara": I, "serif":"そら、あの子の忘れ物だ", "option": {
											getItem: "12",
										}},
										{"chara": I, "serif":"じゃあな"},
									],
								]}
							],
							[
								{"chara": I, "serif":"合言葉は？"},
								{"chara": "koishi", "serif":"知らない"},
							],
						]}
					],
					[
						{"chara": I, "serif":"合言葉は？"},
						{"chara": "koishi", "serif":"知らない"},
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
			serif_back: [
				{"chara": I, "exp": "murasa-ura_reaction_01", "serif":"う............"},
				{"chara": I, "exp": "murasa-ura_reaction_01", "serif":"みんなわたしのこときらいだって"},
				{"chara": I, "exp": "murasa-ura_reaction_01", "serif":"わたしもみんなみたいになりたい......"},
				{"chara": I, "exp": "murasa-ura_reaction_01", "serif":"すきでこうなったわけじゃないのに....."},
				{"chara": I, "exp": "murasa-ura_reaction_02", "serif":"もういや……"},
				{"chara": I, "exp": "murasa-ura_reaction_02", "serif":"ひみつきちだって私だけは入れない……"},
			],
			serif: [
				{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["12"], "serifs": [
					[
						{"chara": I, "exp": "murasa-reaction_01", "serif":"", "option": {
							"scene": "event_for_chapter1_play_with_murasa",
						}},
					],
					[
						{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter1_09-" + I + "limit-01", 1], "serifs": [
							[
								// 1-21
								{"chara": I, "exp": "murasa-reaction_01", "serif":"何"},
								{"chara": "koishi",        "exp": "back", "serif":"えっ？"},
								{"chara": I, "exp": "murasa-reaction_01", "serif":"なんだよ"},
								{"chara": I, "exp": "murasa-reaction_02", "serif":"用がないならあっちいけよ"},
								{"chara": "koishi",        "exp": "back", "serif":"あそばないの？"},
								{"chara": I, "exp": "murasa-reaction_01", "serif":"は？"},
								{"chara": I, "exp": "murasa-reaction_01", "serif":"もう遊んでるだろ"},
								{"chara": "koishi",        "exp": "back", "serif":"............"},
								{"chara": I, "exp": "murasa-reaction_02", "serif":"なんだよ！あっちいけよ！"},
							],
							[
								{"chara": I, "exp": "murasa-reaction_02", "serif":"なんだよ！あっちいけよ！"},
								{"chara": "koishi",        "exp": "back", "serif":"............"},
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

			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.FAUCET_TYPE,
			name: "蛇口",
			serif: [
				{"chara": "koishi", "exp": "back", "serif":"あれ？"},
				{"chara": "koishi", "exp": "back", "serif":"水でないなー"},
			],
			serif_back: [
				{"id": "chapter1_09-faucet-talk-1", "save": true},
				{"chara": I, "serif":"こら！"},
				{"chara": I, "serif":"詰まってるのにだめでしょ！"},
				{"chara": I, "serif":"あふれちゃって……"},
				{"chara": I, "serif":"みんなおぼれちゃうでしょ！"},
				{"chara": I, "serif":"ちゃんと掃除して頂戴！"},
			],

			x:384*2/3, y:572*2/3,
			scale: 2/3,
			anime1: "chapter1-09-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-09-obj-01-obj02",
			anime5: "chapter1-09-obj-01-obj03",
			anime6: "chapter1-09-obj-01-obj04",

			action_name: null,
			sound_name: null,
		},
	]
};
