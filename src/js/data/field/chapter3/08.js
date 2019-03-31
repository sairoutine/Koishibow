'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_08",
	chapter: 3,
	bgm: null,
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
		// BGM 再生
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_12-play_fran_bgm"], "process": [
			[
				// フランBGM
				{"type": "process", "value": "playBGM", "arguments": ["field8"]},
			],
			[
				// 通常BGM
				{"type": "process", "value": "playBGM", "arguments": ["field7"]},
			],
		]},




		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_08_30050"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				// チルノ雪だるま表示
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3-08-show_cirnosnow"]},
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", serif1: _("あら"), serif2: _("あら"), serif3: _("あら"), serif4: _("あら")},
						{"chara": "koishi", serif1: _("出られないの？"), serif2: _("何をしてるのかしら"), serif3: _("何をしてるのかしら"), serif4: _("何をしてるのかしら")},
						{"chara": "koishi", serif1: _("助けてあげるね"), serif2: _("助けなきゃ"), serif3: _("助けなきゃ"), serif4: _("助けなきゃ")},
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
								{"chara": "koishi", serif1: _("材料集めてきたよ"), serif2: _("材料集めてきたよ"), serif3: _("材料集めてきたよ"), serif4: _("材料集めてきたよ")},
								{"chara": I, "exp": "cirno-reaction_04",  serif1: _("ほんと！"), serif2: _("ほんと！"), serif3: _("ほんと！"), serif4: _("ほんと！")},
								{"chara": I, "exp": "cirno-reaction_01",  serif1: _("ぜんぜん足りないじゃない！"), serif2: _("ぜんぜん足りないじゃない！"), serif3: _("ぜんぜん足りないじゃない！"), serif4: _("ぜんぜん足りないじゃない！")},
								{"chara": I, "exp": "cirno-reaction_02",  serif1: _("ちゃんとぜんぶ集めてきてよね！"), serif2: _("ちゃんとぜんぶ集めてきてよね！"), serif3: _("ちゃんとぜんぶ集めてきてよね！"), serif4: _("ちゃんとぜんぶ集めてきてよね！")},
								{"chara": "koishi", serif1: _("うん............"), serif2: _("うん............"), serif3: _("うん............"), serif4: _("うん............")},
							],
						]}
					],
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_12-Event-_30310"], "serifs": [
							// good ルート
							[
								{"id": "chapter3_08-cirno-serif-30330", "save": true},
								{"chara": "koishi", serif1: _("ねえ"), serif2: _("ねえ"), serif3: _("ねえ"), serif4: _("ねえ")},
								{"chara": I, "exp": "cirno-reaction_07",  serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............")},
								{"chara": I, "exp": "cirno-reaction_07",  serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............")},
								{"chara": "koishi", serif1: _("みんなで作ろ"), serif2: _("みんなで作ろ"), serif3: _("みんなで作ろ"), serif4: _("みんなで作ろ")},
								{"chara": I, "exp": "cirno-reaction_01", "serif": _("やだ！")},
								{"chara": I, "exp": "cirno-reaction_02",  serif1: _("あの子嫌いなんだモン"), serif2: _("あの子嫌いなんだモン"), serif3: _("あの子嫌いなんだモン"), serif4: _("あの子嫌いなんだモン")},
								{"chara": "koishi", serif1: _("いいことおもいついたの"), serif2: _("いいことおもいついたの"), serif3: _("いいことおもいついたの"), serif4: _("いいことおもいついたの")},
								{"chara": I, "exp": "cirno-reaction_07",  serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............")},
								{"chara": "koishi", serif1: _("ねえ"), serif2: _("ねえ"), serif3: _("ねえ"), serif4: _("ねえ")},
								{"chara": I, "exp": "cirno-reaction_07",  serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............")},
								{"chara": "koishi", serif1: _("いいことおもいついたの"), serif2: _("いいことおもいついたの"), serif3: _("いいことおもいついたの"), serif4: _("いいことおもいついたの")},
								{"chara": "koishi", serif1: _("上よ"), serif2: _("上よ"), serif3: _("上よ"), serif4: _("上よ")},
								{"chara": I, "exp": "cirno-reaction_02",  serif1: _("上って？"), serif2: _("上って？"), serif3: _("上って？"), serif4: _("上って？")},
								{"chara": "koishi", serif1: _("丘のほう"), serif2: _("丘のほう"), serif3: _("丘のほう"), serif4: _("丘のほう")},
								{"chara": "koishi", serif1: _("雪いっぱいあるし"), serif2: _("雪いっぱいあるし"), serif3: _("雪いっぱいあるし"), serif4: _("雪いっぱいあるし")},
								{"chara": "koishi", serif1: _("とおくまでみえるし"), serif2: _("とおくまでみえるし"), serif3: _("とおくまでみえるし"), serif4: _("とおくまでみえるし")},
								{"chara": "koishi", serif1: _("いいでしょ"), serif2: _("いいでしょ"), serif3: _("いいでしょ"), serif4: _("いいでしょ")},
								{"chara": I, "exp": "cirno-reaction_08",  serif1: _("ん"), serif2: _("ん"), serif3: _("ん"), serif4: _("ん")},
								{"chara": "koishi", serif1: _("じゃああとでね"), serif2: _("じゃああとでね"), serif3: _("じゃああとでね"), serif4: _("じゃああとでね")},
								{"chara": I, "exp": "cirno-reaction_02", "serif": _("うん")},
							],
							// まだ bad でも good でもない
							[
								{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_08-" + I + "-_firstEvent"], "serifs": [
									// 2回目以降
									[
										{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["17"], "serifs": [
											// ルビーの宝飾品を持っている
											[
												{"chara": I, "exp": "cirno-reaction_07",  serif1: _("えーっとね、これはね"), serif2: _("えーっとね、これはね"), serif3: _("えーっとね、これはね"), serif4: _("えーっとね、これはね")},
												{"chara": I, "exp": "cirno-reaction_07",  serif1: _("この宝石は............"), serif2: _("この宝石は............"), serif3: _("この宝石は............"), serif4: _("この宝石は............")},
												{"chara": "koishi", serif1: _("知らないの？"), serif2: _("知らないの？"), serif3: _("知らないの？"), serif4: _("知らないの？")},
												{"chara": I, "exp": "cirno-reaction_02",  serif1: _("知ってるもん！"), serif2: _("知ってるもん！"), serif3: _("知ってるもん！"), serif4: _("知ってるもん！")},
												{"chara": I, "exp": "cirno-reaction_02",  serif1: _("これはファイアーレッドって言うの！"), serif2: _("これはファイアーレッドって言うの！"), serif3: _("これはファイアーレッドって言うの！"), serif4: _("これはファイアーレッドって言うの！")},
												{"chara": "koishi","serif": _("ふーん")},
											],
											// ルビーの宝飾品を持っていない
											[
												{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["16"], "serifs": [
													// サファイアの宝飾品を持っている
													[
														{"chara": I, "exp": "cirno-reaction_07",  serif1: _("この青い石……"), serif2: _("この青い石……"), serif3: _("この青い石……"), serif4: _("この青い石……")},
														{"chara": "koishi", serif1: _("なにかしってるの？"), serif2: _("なんていうの？"), serif3: _("なんていうの？"), serif4: _("なんていうの？")},
														{"chara": I, "exp": "cirno-reaction_02",  serif1: _("宝石だよ！"), serif2: _("宝石だよ！"), serif3: _("宝石だよ！"), serif4: _("宝石だよ！")},
														{"chara": "koishi", serif1: _("なんていう宝石？"), serif2: _("なんていう宝石？"), serif3: _("なんていう宝石？"), serif4: _("なんていう宝石？")},
														{"chara": I, "exp": "cirno-reaction_07",  serif1: _("えーっと............"), serif2: _("えーっと............"), serif3: _("えーっと............"), serif4: _("えーっと............")},
														{"chara": I, "exp": "cirno-reaction_07",  serif1: _("ブルー............"), serif2: _("ブルー............"), serif3: _("ブルー............"), serif4: _("ブルー............")},
														{"chara": "koishi", serif1: _("ブルー？"), serif2: _("ブルー？"), serif3: _("ブルー？"), serif4: _("ブルー？")},
														{"chara": I, "exp": "cirno-reaction_04",  serif1: _("ブルートパーズだ！"), serif2: _("ブルートパーズだ！"), serif3: _("ブルートパーズだ！"), serif4: _("ブルートパーズだ！")},
														{"chara": "koishi", serif1: _("へーっ"), serif2: _("へーっ"), serif3: _("へーっ"), serif4: _("へーっ")},
													],
													// サファイアの宝飾品を持っていない
													[
														{"chara": "koishi", serif1: _("ねえあなたお友達いる？"), serif2: _("ねえあなたお友達いる？"), serif3: _("ねえあなたお友達いる？"), serif4: _("ねえあなたお友達いる？")},
														{"chara": I, "exp": "cirno-reaction_02",  serif1: _("いないよ！"), serif2: _("いないよ！"), serif3: _("いないよ！"), serif4: _("いないよ！")},
														{"chara": I, "exp": "cirno-reaction_02",  serif1: _("わたしに釣り合う奴なんていないから！"), serif2: _("わたしに釣り合う奴なんていないから！"), serif3: _("わたしに釣り合う奴なんていないから！"), serif4: _("わたしに釣り合う奴なんていないから！")},
													],
												]},
											],
										]},
									],
									// 1回目
									[
										{"id": "chapter3_08-" + I + "-_firstEvent", "save": true},
										{"chara": I, "exp": "cirno-reaction_01",  serif1: _("おまえー！"), serif2: _("おまえー！"), serif3: _("おまえー！"), serif4: _("おまえー！")},
										{"chara": I, "exp": "cirno-reaction_01",  serif1: _("せっかくいいところだったのに！"), serif2: _("せっかくいいところだったのに！"), serif3: _("せっかくいいところだったのに！"), serif4: _("せっかくいいところだったのに！")},
										{"chara": "koishi", serif1: _("でも死んじゃうわ"), serif2: _("でも凍え死ぬわ"), serif3: _("でも凍え死ぬわ"), serif4: _("でも凍え死ぬわ")},
										{"chara": I, "exp": "cirno-reaction_02",  serif1: _("あたいはね、"), serif2: _("あたいはね、"), serif3: _("あたいはね、"), serif4: _("あたいはね、")},
										{"chara": I, "exp": "cirno-reaction_03",  serif1: _("だるまになりたいの！"), serif2: _("だるまになりたいの！"), serif3: _("だるまになりたいの！"), serif4: _("だるまになりたいの！")},
										{"chara": I, "exp": "cirno-reaction_02",  serif1: _("邪魔しないでよ"), serif2: _("邪魔しないでよ"), serif3: _("邪魔しないでよ"), serif4: _("邪魔しないでよ")},
										{"chara": "koishi", serif1: _("？"), serif2: _("？"), serif3: _("？"), serif4: _("？")},
										{"chara": "koishi", serif1: _("のこぎり使えば？"), serif2: _("のこぎり使えば？"), serif3: _("のこぎり使えば？"), serif4: _("のこぎり使えば？")},
										{"chara": I, "exp": "cirno-reaction_01",  serif1: _("スノーマンよ！"), serif2: _("スノーマンよ！"), serif3: _("スノーマンよ！"), serif4: _("スノーマンよ！")},
										{"chara": "koishi","serif": _("ふーん")},
										{"chara": I, "exp": "cirno-reaction_03",  serif1: _("あたいは人気者になりたいの！"), serif2: _("あたいは人気者になりたいの！"), serif3: _("あたいは人気者になりたいの！"), serif4: _("あたいは人気者になりたいの！")},
										{"chara": I, "exp": "cirno-reaction_02",  serif1: _("責任取って雪だるまにして！"), serif2: _("責任取って雪だるまにして！"), serif3: _("責任取って雪だるまにして！"), serif4: _("責任取って雪だるまにして！")},
										{"chara": "koishi","serif": _("なんで？")},
										{"chara": I, "exp": "cirno-reaction_02",  serif1: _("雪だるまはねえ！"), serif2: _("雪だるまはねえ！"), serif3: _("雪だるまはねえ！"), serif4: _("雪だるまはねえ！")},
										{"chara": I, "exp": "cirno-reaction_03",  serif1: _("みんなに抱きしめてもらえるの！"), serif2: _("みんなに抱きしめてもらえるの！"), serif3: _("みんなに抱きしめてもらえるの！"), serif4: _("みんなに抱きしめてもらえるの！")},
										{"chara": I, "exp": "cirno-reaction_03",  serif1: _("氷の像なんかと違ってね！"), serif2: _("氷の像なんかと違ってね！"), serif3: _("氷の像なんかと違ってね！"), serif4: _("氷の像なんかと違ってね！")},
										{"chara": I, "exp": "cirno-reaction_02",  serif1: _("だからあたいを雪だるまにして！"), serif2: _("だからあたいを雪だるまにして！"), serif3: _("だからあたいを雪だるまにして！"), serif4: _("だからあたいを雪だるまにして！"), "junction": [_("いいよ！"),_("いいよ"),_("いいよ......")]},
										{"chara": I, "exp": "cirno-reaction_04",  serif1: _("きまりね"), serif2: _("きまりね"), serif3: _("きまりね"), serif4: _("きまりね")},
										{"chara": I, "exp": "cirno-reaction_02",  serif1: _("ふつうの雪だるまじゃないのよ！"), serif2: _("ふつうの雪だるまじゃないのよ！"), serif3: _("ふつうの雪だるまじゃないのよ！"), serif4: _("ふつうの雪だるまじゃないのよ！")},
										{"chara": I, "exp": "cirno-reaction_05",  serif1: _("世界一の雪だるまになるんだから！"), serif2: _("世界一の雪だるまになるんだから！"), serif3: _("世界一の雪だるまになるんだから！"), serif4: _("世界一の雪だるまになるんだから！")},
										// 30470 フラッシュバック イベント再生
										{"chara": I, "exp": "cirno-reaction_03",  serif1: _("あたいならできる！"), serif2: _("あたいならできる！"), serif3: _("あたいならできる！"), serif4: _("あたいならできる！"), "option": {"playEventOld": "chapter3-08-event-01"}},
										{"chara": I, "exp": "cirno-reaction_02",  serif1: _("計画はね！"), serif2: _("計画はね！"), serif3: _("計画はね！"), serif4: _("計画はね！")},
										{"chara": I, "exp": "cirno-reaction_03",  serif1: _("わたしのからだにいっぱい雪をつけるでしょ"), serif2: _("わたしのからだにいっぱい雪をつけるでしょ"), serif3: _("わたしのからだにいっぱい雪をつけるでしょ"), serif4: _("わたしのからだにいっぱい雪をつけるでしょ")},
										{"chara": I, "exp": "cirno-reaction_03",  serif1: _("そしたらからだがおっきくなるから"), serif2: _("そしたらからだがおっきくなるから"), serif3: _("そしたらからだがおっきくなるから"), serif4: _("そしたらからだがおっきくなるから")},
										{"chara": I, "exp": "cirno-reaction_03",  serif1: _("そしたらおっきなゆきだるまになるから"), serif2: _("そしたらおっきなゆきだるまになるから"), serif3: _("そしたらおっきなゆきだるまになるから"), serif4: _("そしたらおっきなゆきだるまになるから")},
										{"chara": I, "exp": "cirno-reaction_02",  serif1: _("すごいでしょ！"), serif2: _("すごいでしょ！"), serif3: _("すごいでしょ！"), serif4: _("すごいでしょ！")},
										{"chara": "koishi", serif1: _("いいわ"), serif2: _("いいわ"), serif3: _("いいわ"), serif4: _("いいわ")},
										{"chara": "koishi", serif1: _("やる"), serif2: _("やる"), serif3: _("やる"), serif4: _("やる")},
										{"chara": I, "exp": "cirno-reaction_04",  serif1: _("これ見て！"), serif2: _("これ見て！"), serif3: _("これ見て！"), serif4: _("これ見て！"), "option": {"showPicture": "picture_chapter3-08-illust-01"}},
										{"chara": I, "exp": "cirno-reaction_04",  serif1: _("完璧な計画よね！"), serif2: _("完璧な計画よね！"), serif3: _("完璧な計画よね！"), serif4: _("完璧な計画よね！")},
										{"chara": I, "exp": "cirno-reaction_03",  serif1: _("あたいならできる！"), serif2: _("あたいならできる！"), serif3: _("あたいならできる！"), serif4: _("あたいならできる！"), "option": {"playEventOld": "chapter3-08-event-03"}},
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
						{"chara": I, "exp": "cirno-ura_reaction_01",  serif1: _("ほらほらできた！"), serif2: _("ほらほらできた！"), serif3: _("ほらほらできた！"), serif4: _("ほらほらできた！")},
						{"chara": I, "exp": "cirno-ura_reaction_03",  serif1: _("すごでしょ？"), serif2: _("すごでしょ？"), serif3: _("すごでしょ？"), serif4: _("すごでしょ？")},
						{"chara": I, "exp": "cirno-ura_reaction_03",  serif1: _("すごいでしょすごいでしょ？"), serif2: _("すごいでしょすごいでしょ？"), serif3: _("すごいでしょすごいでしょ？"), serif4: _("すごいでしょすごいでしょ？")},
						{"chara": I, "exp": "cirno-ura_reaction_06",  serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............")},
						{"chara": I, "exp": "cirno-ura_reaction_04",  serif1: _("なんで！？"), serif2: _("なんで！？"), serif3: _("なんで！？"), serif4: _("なんで！？")},
						{"chara": I, "exp": "cirno-ura_reaction_04",  serif1: _("すごいでしょ！？"), serif2: _("すごいでしょ！？"), serif3: _("すごいでしょ！？"), serif4: _("すごいでしょ！？")},
						{"chara": I, "exp": "cirno-ura_reaction_05",  serif1: _("すごいって言え！"), serif2: _("すごいって言え！"), serif3: _("すごいって言え！"), serif4: _("すごいって言え！")},
						{"chara": I, "exp": "cirno-ura_reaction_05",  serif1: _("言えよ！"), serif2: _("言えよ！"), serif3: _("言えよ！"), serif4: _("言えよ！")},
					],
					[
						{"id": "chapter3_08-cirno-_uraFirst", "save": true},
						{"chara": I, "exp": "cirno-ura_reaction_01",  serif1: _("なによ！"), serif2: _("なによ！"), serif3: _("なによ！"), serif4: _("なによ！")},
						{"chara": I, "exp": "cirno-ura_reaction_01",  serif1: _("私の言うことがわからない？"), serif2: _("私の言うことがわからない？"), serif3: _("私の言うことがわからない？"), serif4: _("私の言うことがわからない？")},
						{"chara": I, "exp": "cirno-ura_reaction_04",  serif1: _("馬鹿じゃないの？"), serif2: _("馬鹿じゃないの？"), serif3: _("馬鹿じゃないの？"), serif4: _("馬鹿じゃないの？")},
						{"chara": I, "exp": "cirno-ura_reaction_01",  serif1: _("ニホンゴわからないんですかー？"), serif2: _("ニホンゴわからないんですかー？"), serif3: _("ニホンゴわからないんですかー？"), serif4: _("ニホンゴわからないんですかー？")},
						{"chara": I, "exp": "cirno-ura_reaction_02",  serif1: _("へーばかだー、ばかなんだー！"), serif2: _("へーばかだー、ばかなんだー！"), serif3: _("へーばかだー、ばかなんだー！"), serif4: _("へーばかだー、ばかなんだー！")},
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
						{"chara": "koishi", serif1: _("この木さむそう！"), serif2: _("葉っぱはどこ行っちゃったの"), serif3: _("葉っぱはどこ行っちゃったの"), serif4: _("葉っぱはどこ行っちゃったの")},
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
		{
			no: ++I,
			type: CONSTANT.JOURNAL_FRONT_TYPE,
			x: 370, y: 450,
			journal_id: "journal020",
		},


	],
};

