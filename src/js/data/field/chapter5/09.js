'use strict';
var _ = require('i18n4v')
// 地上2階
// お空が閉じ込められている部屋
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_09",
	chapter: 5,
	bgm: "field11",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
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
						{"chara": "koishi", "exp": "look_front", "serif":_("まあ！")},
						{"chara": "koishi", "exp": null, "serif":_("あなたどうしたの")},
						{"chara": "oku", "exp": "oku-wait", "serif":_("があ、があ"), "option": {"playEvent": "chapter5-09-event-03"}},
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
								{"chara": "koishi", "exp": "look_front", "serif":_("まあ！")},
								{"chara": "koishi", "exp": null, "serif":_("あなたどうしたの")},
								{"chara": "oku", "exp": "oku-wait", "serif":_("があ、があ")},
								{"chara": "orin","exp": "orin-wait", "serif": _("うわ！")},
								{"chara": "koishi","exp": "look_front", "serif": _("ねえ！")},
								{"chara": "koishi","exp": "look_front", "serif": _("なにか変よ！")},
								{"chara": "koishi","exp": "look_top", "serif": _("お姉ちゃんは死んだのに")},
								{"chara": "koishi","exp": "look_front", "serif": _("なにか変なの！")},
								{"chara": "orin","exp": "orin-wait", "serif": _("なんで死んだと思うのかしら")},
								{"chara": "koishi","exp": "look_top", "serif": _("わたしが殺したからよ！")},
								{"chara": "orin","exp": "orin-wait", "serif": _("こいしさま")},
								{"chara": "koishi","exp": "yes", "serif": _("なに")},
								{"chara": "orin","exp": "orin-reaction_01", "serif": _("だいじょうぶですよ")},
								{"chara": "orin","exp": null, "serif": _("これが最後の問題ですから")},
								{"chara": "koishi","exp": "look_front", "serif": _("どういう意味？")},
								{"chara": "orin","exp": "orin-reaction_01", "serif": _("色んな意味で")},
								{"chara": "orin","exp": null, "serif": _("です")},
								{"chara": "koishi","exp": "look_front", "serif": _("みんなをいじめたけどまだ大丈夫ってこと？")},
								{"chara": "orin","exp": "orin-wait", "serif": _("にゃー")},
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
			turn_toward_me: true, // こいしの方を向く
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter5-myroom-araiguma_talk1"], "serifs": [
					// お燐表示済
					[
						{"chara": "oku","exp": "oku-ura_wait", "serif": _("んがぁー")},
						{"chara": "oku","exp": "oku-ura_wait", "serif": _("あ！")},
						{"chara": "oku","exp": "oku-ura_wait", "serif": _("かぎ取ってきてくれたの！")},
						{"chara": "oku","exp": "oku-ura_reaction_01", "serif": _("やったー！")},
						{"chara": "koishi","exp": "yes", "serif": _("......")},
						{"chara": "orin","exp": "orin-ura_wait", "serif": _("にゃー"), "junction": ["友達を助ける", "鍵を返す"]},
						{"type": "junction_serif", "serifs": [
							[
								// イベント再生 10710
								{"chara": "koishi","exp": "yes", "serif": _("決めたわ"), "option": {"playEvent": "chapter5-09-event-01"}},

							],
							[
								// イベント再生 10720
								{"chara": "koishi","exp": "yes", "serif": _("決めたわ"), "option": {"playEvent": "chapter5-09-event-02"}},
							],
						]},
					],
					// お燐未表示
					[
						{"chara": "koishi", "exp": "look_front", "serif":_("まあ！")},
						{"chara": "koishi", "exp": null, "serif":_("あなたどうしたの！")},
						{"chara": "oku", "exp": "oku-ura_reaction_01", "serif":_("つかまっちゃったのよう！")},
						{"chara": "koishi", "exp": "look_top", "serif":_("だれに？")},
						{"chara": "oku", "exp": "oku-ura_wait", "serif":_("ご主人様に......")},
						{"chara": "oku", "exp": null, "serif":_("危ないからって")},
						{"chara": "oku", "exp": null, "serif":_("みんなは遊んでるのにずるい！")},
						{"chara": "oku", "exp": null, "serif":_("なんでわたしだけお留守番なの？")},
						{"chara": "koishi", "exp": "look_bottom", "serif":_(".....")},
						{"chara": "koishi", "exp": null, "serif":_("かわいそう")},
						{"chara": "koishi", "exp": "yes", "serif":_("助けてあげるわ！")},
						{"chara": "oku", "exp": "oku-ura_reaction_01", "serif":_("ほんとう！？")},
						{"chara": "oku", "exp": null, "serif":_("うれしいなあ！")},
						{"chara": "oku", "exp": null, "serif":_("檻の鍵はご主人様が持ってるの")},
						{"chara": "oku", "exp": null, "serif":_("ぬすんできてちょうだい！")},
						{"chara": "koishi", "exp": "yes", "serif":_("わかったわ")},
						{"chara": "koishi", "exp": null, "serif":_("でもどこにいるかしら")},
						{"chara": "oku", "exp": "oku-ura_wait", "serif":_("ご主人様の部屋は奥のほう")},
						{"chara": "koishi", "exp": "yes", "serif":_("そっか")},
						{"chara": "koishi", "exp": null, "serif":_("じゃあ行ってくるね！")},
						{"id": "chapter5-09-oku_talk1", "save": true}, // お空との1度目の会話
					],
				]},
			],
			serif: [
				{"chara": "oku", "exp": null, "serif":_("があ！")},
				{"chara": "oku", "exp": null, "serif":_("があ、ぐわあ！")},
				{"chara": "koishi", "exp": "yes", "serif":_("あはは、へんなの")},
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

		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "茨",
			serif: null,
			width: 300, height: 550,
			x: 960, y: 720,
			not_show_if_event_true: "chapter5-09-oku_talk1", // お空との1度目の会話が終わったら消える
		},

	],
};

