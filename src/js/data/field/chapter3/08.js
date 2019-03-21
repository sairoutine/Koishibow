'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_08",
	chapter: 3,
	bgm: "field7",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 200, y: 450},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter3_09",
	leftField: "chapter3_07",
	upField: null,
	downField: null,
	background: "chapter3-08-bg-001",
	walkSound: "walking_bare_snow",
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
						{"chara": "koishi","serif":_("あら")},
						{"chara": "koishi","serif":_("出られないの？")},
						{"chara": "koishi","serif":_("助けてあげるね")},
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
			serif: null,
			x: 711.50*2/3, y: 643.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			width: 150,
			show_if_event_true: "chapter3-08-show_cirnosnow",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "チルノ",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_12-Event-_30260"], "serifs": [
					// Bad ルート
					[
						{"type": "criteria_serif", "criteria": "existsItemAll", "arguments": ["14", "15", "16"], "serifs": [
							// すべてもっている
							[
								// イベント 30290 へ
								{"chara": "koishi", "serif": "", "option": {"playEvent": "chapter3-08-event-04"}},
							],
							[
								{"chara": "koishi","serif":_("材料集めてきたよ")},
								{"chara": I, "exp": "cirno-reaction_04", "serif":_("ほんと！")},
								{"chara": I, "exp": "cirno-reaction_01", "serif":_("ぜんぜん足りないじゃない！")},
								{"chara": I, "exp": "cirno-reaction_02", "serif":_("ちゃんとぜんぶ集めてきてよね！")},
								{"chara": "koishi","serif":_("うん............")},
							],
						]}
					],
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_12-Event-_30310"], "serifs": [
							// good ルート
							[
								{"id": "chapter3_08-cirno-serif-30330", "save": true},
								{"chara": "koishi","serif":_("ねえ")},
								{"chara": I, "exp": "cirno-reaction_07", "serif":_("............")},
								{"chara": I, "exp": "cirno-reaction_07", "serif":_("............")},
								{"chara": "koishi","serif":_("みんなで作ろ")},
								{"chara": I, "exp": "cirno-reaction_01", "serif":_("やだ！")},
								{"chara": I, "exp": "cirno-reaction_02", "serif":_("あの子嫌いなんだモン")},
								{"chara": "koishi","serif":_("いいことおもいついたの")},
								{"chara": I, "exp": "cirno-reaction_07", "serif":_("............")},
								{"chara": "koishi","serif":_("ねえ")},
								{"chara": I, "exp": "cirno-reaction_07", "serif":_("............")},
								{"chara": "koishi","serif":_("いいことおもいついたの")},
								{"chara": "koishi","serif":_("上よ")},
								{"chara": I, "exp": "cirno-reaction_02", "serif":_("上って？")},
								{"chara": "koishi","serif":_("丘のほう")},
								{"chara": "koishi","serif":_("雪いっぱいあるし")},
								{"chara": "koishi","serif":_("とおくまでみえるし")},
								{"chara": "koishi","serif":_("いいでしょ")},
								{"chara": I, "exp": "cirno-reaction_08", "serif":_("ん")},
								{"chara": "koishi","serif":_("じゃああとでね")},
								{"chara": I, "exp": "cirno-reaction_02", "serif":_("うん")},
							],
							// まだ bad でも good でもない
							[
								{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_08-" + I + "-_firstEvent"], "serifs": [
									// 2回目以降
									[
										{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["17"], "serifs": [
											// ルビーの宝飾品を持っている
											[
												{"chara": I, "exp": "cirno-reaction_07", "serif":_("えーっとね、これはね")},
												{"chara": I, "exp": "cirno-reaction_07", "serif":_("この宝石は............")},
												{"chara": "koishi","serif":_("知らないの？")},
												{"chara": I, "exp": "cirno-reaction_02", "serif":_("知ってるもん！")},
												{"chara": I, "exp": "cirno-reaction_02", "serif":_("これはファイアーレッドって言うの！")},
												{"chara": "koishi","serif":_("ふーん")},
											],
											// ルビーの宝飾品を持っていない
											[
												{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["16"], "serifs": [
													// サファイアの宝飾品を持っている
													[
														{"chara": I, "exp": "cirno-reaction_07", "serif":_("この青い石……")},
														{"chara": "koishi","serif":_("なにかしってるの？")},
														{"chara": I, "exp": "cirno-reaction_02", "serif":_("宝石だよ！")},
														{"chara": "koishi","serif":_("なんていう宝石？")},
														{"chara": I, "exp": "cirno-reaction_07", "serif":_("えーっと............")},
														{"chara": I, "exp": "cirno-reaction_07", "serif":_("ブルー............")},
														{"chara": "koishi","serif":_("ブルー？")},
														{"chara": I, "exp": "cirno-reaction_04", "serif":_("ブルートパーズだ！")},
														{"chara": "koishi","serif":_("へーっ")},
													],
													// サファイアの宝飾品を持っていない
													[
														{"chara": "koishi","serif":_("ねえあなたお友達いる？")},
														{"chara": I, "exp": "cirno-reaction_02", "serif":_("いないよ！")},
														{"chara": I, "exp": "cirno-reaction_02", "serif":_("わたしに釣り合う奴なんていないから！")},
													],
												]},
											],
										]},
									],
									// 1回目
									[
										{"id": "chapter3_08-" + I + "-_firstEvent", "save": true},
										{"chara": I, "exp": "cirno-reaction_01", "serif":_("おまえー！")},
										{"chara": I, "exp": "cirno-reaction_01", "serif":_("せっかくいいところだったのに！")},
										{"chara": "koishi","serif":_("でも死んじゃうわ")},
										{"chara": I, "exp": "cirno-reaction_02", "serif":_("あたいはね、")},
										{"chara": I, "exp": "cirno-reaction_03", "serif":_("だるまになりたいの！")},
										{"chara": I, "exp": "cirno-reaction_02", "serif":_("邪魔しないでよ")},
										{"chara": "koishi","serif":_("？")},
										{"chara": "koishi","serif":_("のこぎり使えば？")},
										{"chara": I, "exp": "cirno-reaction_01", "serif":_("スノーマンよ！")},
										{"chara": "koishi","serif":_("ふーん")},
										{"chara": I, "exp": "cirno-reaction_03", "serif":_("あたいは人気者になりたいの！")},
										{"chara": I, "exp": "cirno-reaction_02", "serif":_("責任取って雪だるまにして！")},
										{"chara": "koishi","serif":_("なんで？")},
										{"chara": I, "exp": "cirno-reaction_02", "serif":_("雪だるまはねえ！")},
										{"chara": I, "exp": "cirno-reaction_03", "serif":_("みんなに抱きしめてもらえるの！")},
										{"chara": I, "exp": "cirno-reaction_03", "serif":_("氷の像なんかと違ってね！")},
										{"chara": I, "exp": "cirno-reaction_02", "serif":_("だからあたいを雪だるまにして！"), "junction": [_("いいよ！"),_("いいよ"),_("いいよ......")]},
										{"chara": I, "exp": "cirno-reaction_04", "serif":_("きまりね")},
										{"chara": I, "exp": "cirno-reaction_02", "serif":_("ふつうの雪だるまじゃないのよ！")},
										{"chara": I, "exp": "cirno-reaction_05", "serif":_("世界一の雪だるまになるんだから！")},
										// 30470 フラッシュバック イベント再生
										{"chara": I, "exp": "cirno-reaction_03", "serif":_("あたいならできる！"), "option": {"playEventOld": "chapter3-08-event-01"}},
										{"chara": I, "exp": "cirno-reaction_02", "serif":_("計画はね！")},
										{"chara": I, "exp": "cirno-reaction_03", "serif":_("わたしのからだにいっぱい雪をつけるでしょ")},
										{"chara": I, "exp": "cirno-reaction_03", "serif":_("そしたらからだがおっきくなるから")},
										{"chara": I, "exp": "cirno-reaction_03", "serif":_("そしたらおっきなゆきだるまになるから")},
										{"chara": I, "exp": "cirno-reaction_02", "serif":_("すごいでしょ！")},
										{"chara": "koishi","serif":_("いいわ")},
										{"chara": "koishi","serif":_("やる")},
										{"chara": I, "exp": "cirno-reaction_04", "serif":_("これ見て！"), "option": {"showPicture": "picture_chapter3-08-illust-01"}},
										{"chara": I, "exp": "cirno-reaction_04", "serif":_("完璧な計画よね！")},
										{"chara": I, "exp": "cirno-reaction_03", "serif":_("あたいならできる！"), "option": {"playEventOld": "chapter3-08-event-03"}},
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
						{"chara": I, "exp": "cirno-ura_reaction_01", "serif":_("ほらほらできた！")},
						{"chara": I, "exp": "cirno-ura_reaction_03", "serif":_("すごでしょ？")},
						{"chara": I, "exp": "cirno-ura_reaction_03", "serif":_("すごいでしょすごいでしょ？")},
						{"chara": I, "exp": "cirno-ura_reaction_06", "serif":_("............")},
						{"chara": I, "exp": "cirno-ura_reaction_04", "serif":_("なんで！？")},
						{"chara": I, "exp": "cirno-ura_reaction_04", "serif":_("すごいでしょ！？")},
						{"chara": I, "exp": "cirno-ura_reaction_05", "serif":_("すごいって言え！")},
						{"chara": I, "exp": "cirno-ura_reaction_05", "serif":_("言えよ！")},
					],
					[
						{"id": "chapter3_08-cirno-_uraFirst", "save": true},
						{"chara": I, "exp": "cirno-ura_reaction_01", "serif":_("なによ！")},
						{"chara": I, "exp": "cirno-ura_reaction_01", "serif":_("私の言うことがわからない？")},
						{"chara": I, "exp": "cirno-ura_reaction_04", "serif":_("馬鹿じゃないの？")},
						{"chara": I, "exp": "cirno-ura_reaction_01", "serif":_("ニホンゴわからないんですかー？")},
						{"chara": I, "exp": "cirno-ura_reaction_02", "serif":_("へーばかだー、ばかなんだー！")},
					],
				]}
			],
			x: 711.50*2/3, y: 643.50*2/3,
			width: 150,
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
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_08-Event-_30060"], "serifs": [
					[
						{"chara": "koishi","serif":_("この木さむそう！")},
					],
					[
						// チルノ救出
						{"id": "chapter3_08-Event-_30060", "save": true},
						{"chara": "koishi", "serif": "", "option": {"playEventOld": "chapter3-08-event-02"}},
					],
				]},
			],
			x:967*2/3, y:366.50*2/3,
			scale: 2/3,
			width: 150,
			action_name: "touch",
			sound_name: null
		},
	],
};

