'use strict';
var _ = require('i18n4v')
// 地上2階
// お空が閉じ込められている部屋
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_09",
	chapter: 5,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter5_12",
	leftField: "chapter5_10",
	background: "chapter5-09-bg-001",
	walkSound: "walking_bare_default",
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
						{"chara": "oku", "exp": "oku-wait", "serif":_("があ、があ")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_09_10150"]}
			],
		]},
	],


	objects: [
		{
			no: "oku",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "おくう",
			loop: true,
			serif_back: [
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

