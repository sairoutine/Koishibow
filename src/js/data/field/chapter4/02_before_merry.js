'use strict';
var _ = require('i18n4v')

// メリーと最初に出会うフィールド(メリーと会話前)

var CONSTANT = require("../../../constant");
module.exports = {
	key: "chapter4_02_before_merry",
	chapter: 4,
	bgm: "field9",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 400, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: null,
	leftField: "chapter4_01",
	upField:    null,
	downField:  null,
	background: "chapter4-02-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4_02_40070"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_front",  serif1: _("ひとだ！"), serif2: _("人だわ！"), serif3: _("人だわ！"), serif4: _("人だわ！")},
						{"chara": "merry1", "exp": null,  serif1: _("うーん"), serif2: _("うーん"), serif3: _("うーん"), serif4: _("うーん")},
						{"chara": "koishi", "exp": "look_front",  serif1: _("助けなきゃ"), serif2: _("助けなきゃ"), serif3: _("助けなきゃ"), serif4: _("助けなきゃ")},
						{"chara": "koishi", "exp": "yes",  serif1: _("たすけたらともだちだもん"), serif2: _("助けたんだから友達よね"), serif3: _("助けたんだから友達よね"), serif4: _("助けたんだから友達よね")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4_02_40070"]}
			],
		]},
	],
	objects: [
		{
			no: "merry1",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー(座り)",
			loop: true,
			serif_back: [],
			serif: [
				{"chara": "koishi", "exp": "touch",  serif1: _("ねえ大丈夫？"), serif2: _("ねえ大丈夫？"), serif3: _("ねえ大丈夫？"), serif4: _("ねえ大丈夫？")},
				{"chara": "merry1", "exp": null, "serif": _("やめて！")},
				{"chara": "merry1", "exp": null,  serif1: _("頭が痛いの"), serif2: _("頭が痛いの"), serif3: _("頭が痛いの"), serif4: _("頭が痛いの")},
				{"chara": "koishi", "exp": "look_front",  serif1: _("大丈夫？"), serif2: _("大丈夫？"), serif3: _("大丈夫？"), serif4: _("大丈夫？")},
				{"chara": "merry1", "exp": null,  serif1: _("ええ"), serif2: _("ええ"), serif3: _("ええ"), serif4: _("ええ")},
				{"chara": "merry1", "exp": "merry-reaction_02",  serif1: _("あなたはここの子かしら"), serif2: _("あなたはここの子かしら"), serif3: _("あなたはここの子かしら"), serif4: _("あなたはここの子かしら")},
				{"chara": "koishi", "exp": "yes",  serif1: _("そうだよ"), serif2: _("ここって？"), serif3: _("ここって？"), serif4: _("ここって？")},
				{"chara": "merry1", "exp": "merry-reaction_03",  serif1: _("竹林で迷って困ってたの"), serif2: _("竹林で迷って困ってたの"), serif3: _("竹林で迷って困ってたの"), serif4: _("竹林で迷って困ってたの")},
				{"chara": "merry1", "exp": "merry-reaction_04",  serif1: _("へんな薬で頭が痛いし"), serif2: _("へんな薬で頭が痛いし"), serif3: _("へんな薬で頭が痛いし"), serif4: _("へんな薬で頭が痛いし")},
				{"chara": "koishi", "exp": "look_front",  serif1: _("あっこれわたしの！"), serif2: _("これ私のよ"), serif3: _("これ私のよ"), serif4: _("これ私のよ")},
				{"chara": "koishi", "exp": null,  serif1: _("空っぽになってる"), serif2: _("すっからかんだわ"), serif3: _("全部使ったの？"), serif4: _("全部使ったの？")},
				{"chara": "merry1", "exp": null,  serif1: _("ラベルを見ようとしたら液が漏れてね"), serif2: _("ラベルを見ようとしたら液が漏れてね"), serif3: _("ラベルを見ようとしたら液が漏れてね"), serif4: _("ラベルを見ようとしたら液が漏れてね")},
				{"chara": "merry1", "exp": null,  serif1: _("これがなにか知ってるの？"), serif2: _("これがなにか知ってるの？"), serif3: _("これがなにか知ってるの？"), serif4: _("これがなにか知ってるの？")},
				{"chara": "koishi", "exp": "yes",  serif1: _("目薬なの"), serif2: _("目薬なの"), serif3: _("目薬なの"), serif4: _("目薬なの")},
				{"chara": "koishi", "exp": null,  serif1: _("良く見えるでしょ"), serif2: _("良く見えるでしょ"), serif3: _("良く見えるでしょ"), serif4: _("良く見えるでしょ")},
				{"chara": "merry1", "exp": null,  serif1: _("ええ、見えちゃいけないものまで見えそう"), serif2: _("ええ、見えちゃいけないものまで見えそう"), serif3: _("ええ、見えちゃいけないものまで見えそう"), serif4: _("ええ、見えちゃいけないものまで見えそう")},
				{"chara": "koishi", "exp": "look_front",  serif1: _("すごいでしょ"), serif2: _("すごいでしょ"), serif3: _("すごいでしょ"), serif4: _("すごいでしょ")},
				{"chara": "merry1", "exp": "merry-reaction_05",  serif1: _("あなた名前は？"), serif2: _("あなた名前は？"), serif3: _("あなた名前は？"), serif4: _("あなた名前は？")},
				{"chara": "koishi", "exp": "wait",  serif1: _("わたし？"), serif2: _("わたし？"), serif3: _("わたし？"), serif4: _("わたし？")},
				{"chara": "koishi", "exp": "look_bottom",  serif1: _("わたしは"), serif2: _("わたしは"), serif3: _("わたしは"), serif4: _("わたしは")},
				{"chara": "koishi", "exp": "wait", "serif": _("こいし")},
				{"chara": "koishi", "exp": "look_front",  serif1: _("古明地こいし"), serif2: _("古明地こいし"), serif3: _("古明地こいし"), serif4: _("古明地こいし")},
				{"chara": "merry1", "exp": "merry-wait", "serif": _("こいし")},
				{"chara": "merry1", "exp": "merry-reaction_06",  serif1: _("いいね"), serif2: _("いいね"), serif3: _("いいね"), serif4: _("いいね")},
				{"chara": "merry1", "exp": "merry-reaction_07",  serif1: _("私はメリーよ"), serif2: _("私はメリーよ"), serif3: _("私はメリーよ"), serif4: _("私はメリーよ")},
				{"chara": "merry1", "exp": "merry-reaction_07",  serif1: _("マエリベリー・ハーン"), serif2: _("マエリベリー・ハーン"), serif3: _("マエリベリー・ハーン"), serif4: _("マエリベリー・ハーン")},
				{"chara": "koishi", "exp": "yes",  serif1: _("変な名前"), serif2: _("変な名前"), serif3: _("変な名前"), serif4: _("変な名前")},
				{"chara": "merry1", "exp": "merry-reaction_06",  serif1: _("ふふ、そうね"), serif2: _("ふふ、そうね"), serif3: _("ふふ、そうね"), serif4: _("ふふ、そうね")},
				{"chara": "merry1", "exp": "merry-reaction_03",  serif1: _("私友達とはぐれたの"), serif2: _("私友達とはぐれたの"), serif3: _("私友達とはぐれたの"), serif4: _("私友達とはぐれたの")},
				{"chara": "merry1", "exp": "merry-reaction_05",  serif1: _("一緒に探してくれる？"), serif2: _("一緒に探してくれる？"), serif3: _("一緒に探してくれる？"), serif4: _("一緒に探してくれる？")},
				{"chara": "koishi", "exp": "yes", "serif": _("わかった")},
				{"chara": "koishi", "exp": null,  serif1: _("もう友達だもんね"), serif2: _("もう友達だもんね"), serif3: _("もう友達だもんね"), serif4: _("もう友達だもんね"), "option": {"changeField": "chapter4_02_after_merry"}},
			],
			x: 1060*2/3, y: 505*2/3,
			anime1: "merry-reaction_01",
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

