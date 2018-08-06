'use strict';

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_08",
	chapter: 3,
	bgm: "field3",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 200, y: 450},
	rightField: "chapter3_09",
	leftField: "chapter3_07",
	background: "chapter3-08-bg-001",
	walkSound: "walking_bare_outside",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_08_30050"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				// チルノ雪だるま表示
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3-08-show_cirnosnow"]},
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi","serif":"あら"},
						{"chara": "koishi","serif":"出られないの？"},
						{"chara": "koishi","serif":"助けてあげるね"},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3_08_30050"]}
			],
		]},
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter3-08-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-08-obj-01-obj02",
			anime5: "chapter3-08-obj-01-obj03",
			anime6: "chapter3-08-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},

		{
			no: ++I,
			image: "chapter3-08-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "チルノが埋まってる雪山",
			serif: [
				{"chara": "koishi","serif":""},
			],
			x: 711.50*2/3, y: 643.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			show_if_event_true: "chapter3-08-show_cirnosnow",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "チルノ",
			loop: true,
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_12-Event-_30260"], "serifs": [
					// Bad ルート
					[
						{"type": "criteria_serif", "criteria": "existsItemAll", "arguments": ["14", "15", "16"], "serifs": [
							// すべてもっている
							[
								// TODO: イベント 30290 へ
							],
							[
								{"chara": "koishi","serif":"材料集めてきたよ"},
								{"chara": I, "exp": "cirno-reaction_04", "serif":"ほんと！"},
								{"chara": I, "exp": "cirno-reaction_01", "serif":"ぜんぜん足りないじゃない！"},
								{"chara": I, "exp": "cirno-reaction_02", "serif":"ちゃんとぜんぶ集めてきてよね！"},
								{"chara": "koishi","serif":"うん............"},
							],
						]}
					],
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_12-Event-_30310"], "serifs": [
							// good ルート
							[
								{"chara": "koishi","serif":"ねえ"},
								{"chara": I, "exp": "cirno-reaction_07", "serif":"............"},
								{"chara": I, "exp": "cirno-reaction_07", "serif":"............"},
								{"chara": "koishi","serif":"みんなで作ろ"},
								{"chara": I, "exp": "cirno-reaction_01", "serif":"やだ！"},
								{"chara": I, "exp": "cirno-reaction_02", "serif":"あの子嫌いなんだモン"},

								{"chara": "koishi","serif":"いいことおもいついたの"},
								{"chara": I, "exp": "cirno-reaction_07", "serif":"............"},
								{"chara": "koishi","serif":"ねえ"},
								{"chara": I, "exp": "cirno-reaction_07", "serif":"............"},
								{"chara": "koishi","serif":"いいことおもいついたの"},
								{"chara": "koishi","serif":"上よ"},
								{"chara": I, "exp": "cirno-reaction_02", "serif":"上って？"},
								{"chara": "koishi","serif":"丘のほう"},
								{"chara": "koishi","serif":"雪いっぱいあるし"},
								{"chara": "koishi","serif":"とおくまでみえるし"},
								{"chara": "koishi","serif":"いいでしょ"},
								{"chara": I, "exp": "cirno-reaction_08", "serif":"ん"},
								{"chara": "koishi","serif":"じゃああとでね"},
								{"chara": I, "exp": "cirno-reaction_02", "serif":"うん"},
							],
							// まだ bad でも good でもない
							[
								{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_08-" + I + "-_firstEvent"], "serifs": [
									// 2回目以降
									[
										{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["17"], "serifs": [
											// ルビーの宝飾品を持っている
											[
												{"chara": I, "exp": "cirno-reaction_07", "serif":"えーっとね、これはね"},
												{"chara": I, "exp": "cirno-reaction_07", "serif":"この宝石は............"},
												{"chara": "koishi","serif":"知らないの？"},
												{"chara": I, "exp": "cirno-reaction_02", "serif":"知ってるもん！"},
												{"chara": I, "exp": "cirno-reaction_02", "serif":"これはファイアーレッドって言うの！"},
												{"chara": "koishi","serif":"ふーん"},
											],
											// ルビーの宝飾品を持っていない
											[
												{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["16"], "serifs": [
													// サファイアの宝飾品を持っている
													[
														{"chara": I, "exp": "cirno-reaction_07", "serif":"この青い石……"},
														{"chara": "koishi","serif":"なにかしってるの？"},
														{"chara": I, "exp": "cirno-reaction_02", "serif":"宝石だよ！"},
														{"chara": "koishi","serif":"なんていう宝石？"},
														{"chara": I, "exp": "cirno-reaction_07", "serif":"えーっと............"},
														{"chara": I, "exp": "cirno-reaction_07", "serif":"ブルー............"},
														{"chara": "koishi","serif":"ブルー？"},
														{"chara": I, "exp": "cirno-reaction_04", "serif":"ブルートパーズだ！"},
														{"chara": "koishi","serif":"へーっ"},
													],
													// サファイアの宝飾品を持っていない
													[
														{"chara": "koishi","serif":"ねえあなたお友達いる？"},
														{"chara": I, "exp": "cirno-reaction_02", "serif":"いないよ！"},
														{"chara": I, "exp": "cirno-reaction_02", "serif":"わたしに釣り合う奴なんていないから！"},
													],
												]},
											],
										]},
									],
									// 1回目
									[
										{"id": "chapter3_08-" + I + "-_firstEvent", "save": true},
										{"chara": I, "exp": "cirno-reaction_01", "serif":"おまえー！"},
										{"chara": I, "exp": "cirno-reaction_01", "serif":"せっかくいいところだったのに！"},
										{"chara": "koishi","serif":"でも死んじゃうわ"},
										{"chara": I, "exp": "cirno-reaction_02", "serif":"あたいはね、"},
										{"chara": I, "exp": "cirno-reaction_03", "serif":"だるまになりたいの！"},
										{"chara": I, "exp": "cirno-reaction_02", "serif":"邪魔しないでよ"},
										{"chara": "koishi","serif":"？"},
										{"chara": "koishi","serif":"のこぎり使えば？"},
										{"chara": I, "exp": "cirno-reaction_01", "serif":"スノーマンよ！"},
										{"chara": "koishi","serif":"ふーん"},
										{"chara": I, "exp": "cirno-reaction_03", "serif":"あたいは人気者になりたいの！"},
										{"chara": I, "exp": "cirno-reaction_02", "serif":"責任取って雪だるまにして！"},
										{"chara": "koishi","serif":"なんで？"},
										{"chara": I, "exp": "cirno-reaction_02", "serif":"雪だるまはねえ！"},
										{"chara": I, "exp": "cirno-reaction_03", "serif":"みんなに抱きしめてもらえるの！"},
										{"chara": I, "exp": "cirno-reaction_03", "serif":"氷の像なんかと違ってね！"},
										{"chara": I, "exp": "cirno-reaction_02", "serif":"だからあたいを雪だるまにして！", "junction": ["いいよ！","いいよ","いいよ......"]},
										// TODO: イベント再生
										{"chara": I, "exp": "cirno-reaction_02", "serif":"計画はね！"},
										{"chara": I, "exp": "cirno-reaction_03", "serif":"わたしのからだにいっぱい雪をつけるでしょ"},
										{"chara": I, "exp": "cirno-reaction_03", "serif":"そしたらからだがおっきくなるから"},
										{"chara": I, "exp": "cirno-reaction_03", "serif":"そしたらおっきなゆきだるまになるから"},
										{"chara": I, "exp": "cirno-reaction_02", "serif":"すごいでしょ！"},
										{"chara": "koishi","serif":"いいわ"},
										{"chara": "koishi","serif":"やる"},
										{"chara": I, "exp": "cirno-reaction_04", "serif":"これ見て！", "option": {"showPicture": "picture_chapter3-08-illust-01"}},
										{"chara": I, "exp": "cirno-reaction_04", "serif":"完璧な計画よね！"},
										// TODO: イベント再生
									],
								]},
							],
						]},
					],
				]},
			],
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_08-cirno-_uraFirst"], "serifs": [
					[
						{"chara": I, "exp": "cirno-ura_reaction_01", "serif":"ほらほらできた！"},
						{"chara": I, "exp": "cirno-ura_reaction_03", "serif":"すごでしょ？"},
						{"chara": I, "exp": "cirno-ura_reaction_03", "serif":"すごいでしょすごいでしょ？"},
						{"chara": I, "exp": "cirno-ura_reaction_06", "serif":"............"},
						{"chara": I, "exp": "cirno-ura_reaction_04", "serif":"なんで！？"},
						{"chara": I, "exp": "cirno-ura_reaction_04", "serif":"すごいでしょ！？"},
						{"chara": I, "exp": "cirno-ura_reaction_05", "serif":"すごいって言え！"},
						{"chara": I, "exp": "cirno-ura_reaction_05", "serif":"言えよ！"},
					],
					[
						{"id": "chapter3_08-cirno-_uraFirst", "save": true},
						{"chara": I, "exp": "cirno-ura_reaction_01", "serif":"なによ！"},
						{"chara": I, "exp": "cirno-ura_reaction_01", "serif":"私の言うことがわからない？"},
						{"chara": I, "exp": "cirno-ura_reaction_04", "serif":"馬鹿じゃないの？"},
						{"chara": I, "exp": "cirno-ura_reaction_01", "serif":"ニホンゴわからないんですかー？"},
						{"chara": I, "exp": "cirno-ura_reaction_02", "serif":"へーばかだー、ばかなんだー！"},
					],
				]}
			],
			x: 711.50*2/3, y: 643.50*2/3,
			scale: 2/3,
			anime1: "cirno-wait",
			anime2: null,
			anime3: null,
			anime4: "cirno-reverse_ura",
			anime5: "cirno-ura_wait",
			anime6: "cirno-reverse_omote",
			action_name: null,
			sound_name: null,
			show_if_event_true: "chapter3-08-show_cirno",
		},
		{
			no: ++I,
			image: "chapter3-08-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "枯れ木",
			serif: [
				// TODO: イベントのあとのセリフです
				{"chara": "koishi","serif":"この木さむそう！"},
			],
			x:967*2/3, y:366.50*2/3,
			scale: 2/3,
			action_name: "touch",
			sound_name: null
		},
	],
};

