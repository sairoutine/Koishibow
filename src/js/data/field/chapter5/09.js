'use strict';
var _ = require('i18n4v')
// 地上2階
// お空が閉じ込められている部屋
var CONSTANT = require("../../../constant");
module.exports = {
	key: "chapter5_09",
	chapter: 5,
	bgm: "field11",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter5_12",
	leftField: "chapter5_10",
	upField: null,
	downField: null,
	background: "chapter5-09-bg-001",
	walkSound: "walking_bare_wood",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_09_10150"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_front",  serif1: _("まあ！"), serif2: _("まあ！"), serif3: _("まあ！"), serif4: _("まあ！")},
						{"chara": "koishi", "exp": null,  serif1: _("あなたどうしたの"), serif2: _("あなたどうしたの"), serif3: _("あなたどうしたの"), serif4: _("あなたどうしたの")},
						{"chara": "oku", "exp": "oku-wait",  serif1: _("があ、があ"), serif2: _("があ、があ"), serif3: _("があ、があ"), serif4: _("があ、があ"), "option": {"playEvent": "chapter5-09-event-03"}},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_09_10150"]}
			],
		]},

		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5-myroom-araiguma_talk1"], "process": [
			// お燐表示済
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_09_10690"], "process": [
					// すでにアクセス済み
					[],
					// まだ未アクセス
					[
						{"type": "process", "value": "playTalk", "arguments": [
							[
								{"chara": "koishi", "exp": "look_front",  serif1: _("まあ！"), serif2: _("まあ！"), serif3: _("まあ！"), serif4: _("まあ！")},
								{"chara": "koishi", "exp": null,  serif1: _("あなたどうしたの"), serif2: _("あなたどうしたの"), serif3: _("あなたどうしたの"), serif4: _("あなたどうしたの")},
								{"chara": "oku", "exp": "oku-wait",  serif1: _("があ、があ"), serif2: _("があ、があ"), serif3: _("があ、があ"), serif4: _("があ、があ")},
								{"chara": "orin","exp": "orin-wait", "serif": _("うわ！")},
								{"chara": "koishi","exp": "look_front",  serif1: _("ねえ！"), serif2: _("ねえ！"), serif3: _("ねえ！"), serif4: _("ねえ！")},
								{"chara": "koishi","exp": "look_front",  serif1: _("なにか変よ！"), serif2: _("なにか変よ！"), serif3: _("なにか変よ！"), serif4: _("なにか変よ！")},
								{"chara": "koishi","exp": "look_top",  serif1: _("お姉ちゃんは死んだのに"), serif2: _("お姉ちゃんは死んだのに"), serif3: _("お姉ちゃんは死んだのに"), serif4: _("お姉ちゃんは死んだのに")},
								{"chara": "koishi","exp": "look_front",  serif1: _("なにか変なの！"), serif2: _("なにか変なの！"), serif3: _("なにか変なの！"), serif4: _("なにか変なの！")},
								{"chara": "orin","exp": "orin-wait",  serif1: _("なんで死んだと思うのかしら"), serif2: _("なんで死んだと思うのかしら"), serif3: _("なんで死んだと思うのかしら"), serif4: _("なんで死んだと思うのかしら")},
								{"chara": "koishi","exp": "look_top",  serif1: _("わたしが殺したからよ！"), serif2: _("わたしが殺したからよ！"), serif3: _("わたしが殺したからよ！"), serif4: _("わたしが殺したからよ！")},
								{"chara": "orin","exp": "orin-wait",  serif1: _("こいしさま"), serif2: _("こいしさま"), serif3: _("こいしさま"), serif4: _("こいしさま")},
								{"chara": "koishi","exp": "yes", "serif": _("なに")},
								{"chara": "orin","exp": "orin-reaction_01",  serif1: _("だいじょうぶですよ"), serif2: _("だいじょうぶですよ"), serif3: _("だいじょうぶですよ"), serif4: _("だいじょうぶですよ")},
								{"chara": "orin","exp": null,  serif1: _("これが最後の問題ですから"), serif2: _("これが最後の問題ですから"), serif3: _("これが最後の問題ですから"), serif4: _("これが最後の問題ですから")},
								{"chara": "koishi","exp": "look_front",  serif1: _("どういう意味？"), serif2: _("どういう意味？"), serif3: _("どういう意味？"), serif4: _("どういう意味？")},
								{"chara": "orin","exp": "orin-reaction_01",  serif1: _("色んな意味で"), serif2: _("色んな意味で"), serif3: _("色んな意味で"), serif4: _("色んな意味で")},
								{"chara": "orin","exp": null,  serif1: _("です"), serif2: _("です"), serif3: _("です"), serif4: _("です")},
								{"chara": "koishi","exp": "look_front",  serif1: _("みんなをいじめたけどまだ大丈夫ってこと？"), serif2: _("みんなをいじめたけどまだ大丈夫ってこと？"), serif3: _("みんなをいじめたけどまだ大丈夫ってこと？"), serif4: _("みんなをいじめたけどまだ大丈夫ってこと？")},
								{"chara": "orin","exp": "orin-wait",  serif1: _("にゃー"), serif2: _("にゃー"), serif3: _("にゃー"), serif4: _("にゃー")},
							]
						]},
						{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_09_10690"]}
					],
				]},
			],
			// お燐未表示
			[
			],
		]},
	],
	objects: [
		{
			no: "oku",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "おくう",
			loop: true,
			turn_toward_me: false, // こいしの方を向かない(檻ごと向いてしまうため)
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter5-myroom-araiguma_talk1"], "serifs": [
					// このフィールドにお燐表示済
					[
						{"chara": "oku","exp": "oku-ura_wait",  serif1: _("んがぁー"), serif2: _("んがぁー"), serif3: _("んがぁー"), serif4: _("んがぁー")},
						{"chara": "oku","exp": "oku-ura_wait", "serif": _("あ！")},
						{"chara": "oku","exp": "oku-ura_wait",  serif1: _("かぎ取ってきてくれたの！"), serif2: _("かぎ取ってきてくれたの！"), serif3: _("かぎ取ってきてくれたの！"), serif4: _("かぎ取ってきてくれたの！")},
						{"chara": "oku","exp": "oku-ura_reaction_01",  serif1: _("やったー！"), serif2: _("やったー！"), serif3: _("やったー！"), serif4: _("やったー！")},
						{"chara": "koishi","exp": "yes", "serif": _("......")},
						{"chara": "orin","exp": "orin-ura_wait",  serif1: _("にゃー"), serif2: _("にゃー"), serif3: _("にゃー"), serif4: _("にゃー"), "junction": ["友達を助ける", "鍵を返す"]},
						{"type": "junction_serif", "serifs": [
							[
								// イベント再生 10710
								{"chara": "koishi","exp": "yes",  serif1: _("決めたわ"), serif2: _("決めたわ"), serif3: _("決めたわ"), serif4: _("決めたわ"), "option": {"playEvent": "chapter5-09-event-01"}},

							],
							[
								// イベント再生 10720
								{"chara": "koishi","exp": "yes",  serif1: _("決めたわ"), serif2: _("決めたわ"), serif3: _("決めたわ"), serif4: _("決めたわ"), "option": {"playEvent": "chapter5-09-event-02"}},
							],
						]},
					],
					// このフィールドにお燐未表示
					[

						{"id": "chapter5-12-show_orin", "save": true},
						{"chara": "koishi", "exp": "look_front",  serif1: _("まあ！"), serif2: _("まあ！"), serif3: _("まあ！"), serif4: _("まあ！")},
						{"chara": "koishi", "exp": null,  serif1: _("あなたどうしたの！"), serif2: _("あなたどうしたの！"), serif3: _("あなたどうしたの！"), serif4: _("あなたどうしたの！")},
						{"chara": "oku", "exp": "oku-ura_reaction_01",  serif1: _("つかまっちゃったのよう！"), serif2: _("つかまっちゃったのよう！"), serif3: _("つかまっちゃったのよう！"), serif4: _("つかまっちゃったのよう！")},
						{"chara": "koishi", "exp": "look_top",  serif1: _("だれに？"), serif2: _("だれに？"), serif3: _("どうして？"), serif4: _("どうして？")},
						{"chara": "oku", "exp": "oku-ura_wait",  serif1: _("ご主人様に......"), serif2: _("ご主人様に......"), serif3: _("ご主人様に......"), serif4: _("ご主人様に......")},
						{"chara": "oku", "exp": null,  serif1: _("危ないからって"), serif2: _("危ないからって"), serif3: _("危ないからって"), serif4: _("危ないからって")},
						{"chara": "oku", "exp": null,  serif1: _("みんなは遊んでるのにずるい！"), serif2: _("みんなは遊んでるのにずるい！"), serif3: _("みんなは遊んでるのにずるい！"), serif4: _("みんなは遊んでるのにずるい！")},
						{"chara": "oku", "exp": null,  serif1: _("なんでわたしだけお留守番なの？"), serif2: _("なんでわたしだけお留守番なの？"), serif3: _("なんでわたしだけお留守番なの？"), serif4: _("なんでわたしだけお留守番なの？")},
						{"chara": "koishi", "exp": "look_bottom",  serif1: _("....."), serif2: _("....."), serif3: _("....."), serif4: _(".....")},
						{"chara": "koishi", "exp": null,  serif1: _("かわいそう"), serif2: _("かわいそう"), serif3: _("かわいそう"), serif4: _("かわいそう")},
						{"chara": "koishi", "exp": "yes",  serif1: _("助けてあげるわ！"), serif2: _("助けてあげるわ！"), serif3: _("助けてあげるわ！"), serif4: _("助けてあげるわ！")},
						{"chara": "oku", "exp": "oku-ura_reaction_01",  serif1: _("ほんとう！？"), serif2: _("ほんとう！？"), serif3: _("ほんとう！？"), serif4: _("ほんとう！？")},
						{"chara": "oku", "exp": null,  serif1: _("うれしいなあ！"), serif2: _("うれしいなあ！"), serif3: _("うれしいなあ！"), serif4: _("うれしいなあ！")},
						{"chara": "oku", "exp": null,  serif1: _("檻の鍵はご主人様が持ってるの"), serif2: _("檻の鍵はご主人様が持ってるの"), serif3: _("檻の鍵はご主人様が持ってるの"), serif4: _("檻の鍵はご主人様が持ってるの")},
						{"chara": "oku", "exp": null,  serif1: _("ぬすんできてちょうだい！"), serif2: _("ぬすんできてちょうだい！"), serif3: _("ぬすんできてちょうだい！"), serif4: _("ぬすんできてちょうだい！")},
						{"chara": "koishi", "exp": "yes",  serif1: _("わかったわ"), serif2: _("わかったわ"), serif3: _("わかったわ"), serif4: _("わかったわ")},
						{"chara": "koishi", "exp": null,  serif1: _("でもどこにいるかしら"), serif2: _("でもどこにいるかしら"), serif3: _("でもどこにいるかしら"), serif4: _("でもどこにいるかしら")},
						{"chara": "oku", "exp": "oku-ura_wait",  serif1: _("ご主人様の部屋は奥のほう"), serif2: _("ご主人様の部屋は奥のほう"), serif3: _("ご主人様の部屋は奥のほう"), serif4: _("ご主人様の部屋は奥のほう")},
						{"chara": "koishi", "exp": "yes", "serif": _("そっか")},
						{"chara": "koishi", "exp": null,  serif1: _("じゃあ行ってくるね！"), serif2: _("じゃあ行ってくるね！"), serif3: _("じゃあ行ってくるね！"), serif4: _("じゃあ行ってくるね！")},
					],
				]},
			],
			serif: [
				{"chara": "oku", "exp": null,  serif1: _("があ！"), serif2: _("があ！"), serif3: _("があ！"), serif4: _("があ！")},
				{"chara": "oku", "exp": null,  serif1: _("があ、ぐわあ！"), serif2: _("があ、ぐわあ！"), serif3: _("があ、ぐわあ！"), serif4: _("があ、ぐわあ！")},
				{"chara": "koishi", "exp": "yes",  serif1: _("あはは、へんなの"), serif2: _("あはは、へんなの"), serif3: _("これじゃあさっぱりね"), serif4: _("これじゃあさっぱりね")},
			],
			x: 490, y: 298,
			scale: 2/3,
			anime1: "oku-wait",
			anime2: null,
			anime3: null,
			anime4: "oku-reverse_ura",
			anime5: "oku-ura_wait",
			anime6: "oku-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
		},
		{
			no: "orin",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "おりん",
			loop: true,
			turn_toward_me: true, // こいしの方を向く
			serif_back: null,
			serif: null,
			x: 800, y: 450,
			scale: 2/3,
			anime1: "orin-wait",
			anime2: null,
			anime3: null,
			anime4: "orin-reverse_ura",
			anime5: "orin-ura_wait",
			anime6: "orin-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
			show_if_event_true: "chapter5-myroom-araiguma_talk1", // アライグマとの会話後に表示
		},
	],
};

