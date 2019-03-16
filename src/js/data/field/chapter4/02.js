'use strict';
var _ = require('i18n4v')

// メリーと出会う。

var CONSTANT = require("../../../constant");
module.exports = {
	key: "chapter4_02",
	chapter: 4,
	bgm: null,
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter4_03",
	leftField: "chapter4_01",
	background: "chapter4-02-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4-02-merry_talk1"], "process": [
			// メリーと喋る前のBGM
			[
				{"type": "process", "value": "playBGM", "arguments": ["field9"]},
			],
			// メリーと喋った後のBGM
			[
				{"type": "process", "value": "playBGM", "arguments": ["field10"]},
			],
		]},
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4_02_40070"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_front", "serif":_("ひとだ！")},
						{"chara": "merry1", "exp": null, "serif":_("うーん")},
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
			no: "merry1",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー(座り)",
			loop: true,
			serif_back: [],
			serif: [
				{"chara": "koishi", "exp": "touch", "serif":_("ねえ大丈夫？")},
				{"chara": "merry1", "exp": null, "serif":_("やめて！")},
				{"chara": "merry1", "exp": null, "serif":_("頭が痛いの")},
				{"chara": "koishi", "exp": "look_front", "serif":_("大丈夫？")},
				{"chara": "merry1", "exp": null, "serif":_("ええ")},
				{"chara": "merry1", "exp": "merry-reaction_02", "serif":_("あなたはここの子かしら")},
				{"chara": "koishi", "exp": "yes", "serif":_("そうだよ")},
				{"chara": "merry1", "exp": "merry-reaction_03", "serif":_("竹林で迷って困ってたの")},
				{"chara": "merry1", "exp": "merry-reaction_04", "serif":_("へんな薬で頭が痛いし")},
				{"chara": "koishi", "exp": "look_front", "serif":_("あっこれわたしの！")},
				{"chara": "koishi", "exp": null, "serif":_("空っぽになってる")},
				{"chara": "merry1", "exp": null, "serif":_("ラベルを見ようとしたら液が漏れてね")},
				{"chara": "merry1", "exp": null, "serif":_("これがなにか知ってるの？")},
				{"chara": "koishi", "exp": "yes", "serif":_("目薬なの")},
				{"chara": "koishi", "exp": null, "serif":_("良く見えるでしょ")},
				{"chara": "merry1", "exp": null, "serif":_("ええ、見えちゃいけないものまで見えそう")},
				{"chara": "koishi", "exp": "look_front", "serif":_("すごいでしょ")},
				{"chara": "merry1", "exp": "merry-reaction_05", "serif":_("あなた名前は？")},
				{"chara": "koishi", "exp": "wait", "serif":_("わたし？")},
				{"chara": "koishi", "exp": "look_bottom", "serif":_("わたしは")},
				{"chara": "koishi", "exp": "wait", "serif":_("こいし")},
				{"chara": "koishi", "exp": "look_front", "serif":_("古明地こいし")},
				{"chara": "merry1", "exp": "merry-wait", "serif":_("こいし")},
				{"chara": "merry1", "exp": "merry-reaction_06", "serif":_("いいね")},
				{"chara": "merry1", "exp": "merry-reaction_07", "serif":_("私はメリーよ")},
				{"chara": "merry1", "exp": "merry-reaction_07", "serif":_("マエリベリー・ハーン")},
				{"chara": "koishi", "exp": "yes", "serif":_("変な名前")},
				{"chara": "merry1", "exp": "merry-reaction_06", "serif":_("ふふ、そうね")},
				{"chara": "merry1", "exp": "merry-reaction_03", "serif":_("私友達とはぐれたの")},
				{"chara": "merry1", "exp": "merry-reaction_05", "serif":_("一緒に探してくれる？")},
				{"chara": "koishi", "exp": "yes", "serif":_("わかった")},
				{"chara": "koishi", "exp": null, "serif":_("もう友達だもんね"), "id": "chapter4-02-merry_talk1", "save": true},
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
			not_show_if_event_true: "chapter4-02-merry_talk1",
		},
		{
			no: "merry2",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー(立ち)",
			loop: true,
			serif_back: [],
			serif: [
				{"chara": "koishi","exp": null, "serif": _("ねえねえ、友達っていい子？")},
				{"chara": "merry2","exp": null, "serif": _("え？")},
				{"chara": "merry2","exp": "merry-reaction_06", "serif": _("そうね、おおむね")},
				{"chara": "koishi","exp": null, "serif": _("おおむねかー")},
				{"chara": "koishi","exp": null, "serif": _("いいね")},
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
			show_if_event_true: "chapter4-02-merry_talk1",
		},


	],
};

