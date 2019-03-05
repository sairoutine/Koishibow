'use strict';
var _ = require('i18n4v')

// メリーと出会う。

var CONSTANT = require("../../../constant");
module.exports = {
	key: "chapter4_02",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter4_03",
	leftField: "chapter4_01",
	background: "chapter4-02-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4_02_40070"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_front", "serif":_("ひとだ！")},
						{"chara": "merry", "exp": "merry-reaction_01", "serif":_("うーん")},
						{"chara": "koishi", "exp": "look_front", "serif":_("助けなきゃ")},
						{"chara": "koishi", "exp": "yes", "serif":_("たすけたらともだちだもん")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4_02_40070"]}
			],
		]},
	],
	objects: [
		{
			no: "merry",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー",
			loop: true,
			serif_back: [],
			serif: [
				{"chara": "koishi", "exp": "touch", "serif":_("ねえ大丈夫？")},
				{"chara": "merry", "exp": "merry-reaction_01", "serif":_("やめて！")},
				{"chara": "merry", "exp": "merry-reaction_01", "serif":_("頭が痛いの")},
				{"chara": "koishi", "exp": "look_front", "serif":_("大丈夫？")},
				{"chara": "merry", "exp": "merry-reaction_01", "serif":_("ええ")},
				{"chara": "merry", "exp": "merry-reaction_02", "serif":_("あなたはここの子かしら")},
				{"chara": "koishi", "exp": "yes", "serif":_("そうだよ")},
				{"chara": "merry", "exp": "merry-reaction_03", "serif":_("竹林で迷って困ってたの")},
				{"chara": "merry", "exp": "merry-reaction_04", "serif":_("へんな薬で頭が痛いし")},
				{"chara": "koishi", "exp": "look_front", "serif":_("あっこれわたしの！")},
				{"chara": "koishi", "exp": null, "serif":_("空っぽになってる")},
				{"chara": "merry", "exp": "merry-reaction_04", "serif":_("ラベルを見ようとしたら液が漏れてね")},
				{"chara": "merry", "exp": "merry-reaction_04", "serif":_("これがなにか知ってるの？")},
				{"chara": "koishi", "exp": "yes", "serif":_("目薬なの")},
				{"chara": "koishi", "exp": null, "serif":_("良く見えるでしょ")},
				{"chara": "merry", "exp": null, "serif":_("ええ、見えちゃいけないものまで見えそう")},
				{"chara": "koishi", "exp": "look_front", "serif":_("すごいでしょ")},
				{"chara": "merry", "exp": "merry-reaction_05", "serif":_("あなた名前は？")},
				{"chara": "koishi", "exp": "wait", "serif":_("わたし？")},
				{"chara": "koishi", "exp": "look_bottom", "serif":_("わたしは")},
				{"chara": "koishi", "exp": "wait", "serif":_("こいし")},
				{"chara": "koishi", "exp": "look_front", "serif":_("古明地こいし")},
				{"chara": "merry", "exp": "merry-wait", "serif":_("こいし")},
				{"chara": "merry", "exp": "merry-reaction_06", "serif":_("いいね")},
				{"chara": "merry", "exp": "merry-reaction_07", "serif":_("私はメリーよ")},
				{"chara": "merry", "exp": "merry-reaction_07", "serif":_("マエリベリー・ハーン")},
				{"chara": "koishi", "exp": "yes", "serif":_("変な名前")},
				{"chara": "merry", "exp": "merry-reaction_06", "serif":_("ふふ、そうね")},
				{"chara": "merry", "exp": "merry-reaction_03", "serif":_("私友達とはぐれたの")},
				{"chara": "merry", "exp": "merry-reaction_05", "serif":_("一緒に探してくれる？")},
				{"chara": "koishi", "exp": "yes", "serif":_("わかった")},
				{"chara": "koishi", "exp": null, "serif":_("もう友達だもんね")},
			],
			x: 1060*2/3, y: 505*2/3,
			anime1: "merry-wait",
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

