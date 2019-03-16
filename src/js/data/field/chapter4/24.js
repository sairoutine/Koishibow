'use strict';
var _ = require('i18n4v')
// メリー
var CONSTANT = require("../../../constant");
var I = 0;

var RENKO_MERRY_SERIF = {"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter4-24-event-01"], "serifs": [
	// イベント再生済
	[

		{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter4_24-renko-merry-limit", 2], "serifs": [
			[
				{"chara": "renko", "exp": "renko-reaction_01", "serif":_("じゃああなたもあの薬を浴びてからあの子が見えたの？")},
				{"chara": "merry", "exp": "merry-reaction_06", "serif":_("そう")},
				{"chara": "renko", "exp": "renko-reaction_01", "serif":_("それってどっちが正しいわけ")},
				{"chara": "merry", "exp": "merry-reaction_08", "serif":_("......")},
				{"chara": "renko", "exp": "renko-reaction_01", "serif":_("あの薬で幻覚を見ているとしたら？")},
				{"chara": "merry", "exp": "merry-reaction_10", "serif":_("でも私にもメリーにも同じ姿が見えているのよ")},
				{"chara": "renko", "exp": "renko-reaction_01", "serif":_("幻覚なら違うものが見えるはずよ")},
				{"chara": "renko", "exp": "renko-reaction_02", "serif":_("例えばブーバキキ効果のように文化圏や経験によらない――")},
				{"chara": "renko", "exp": null, "serif":_("人類が普遍的に持つイメージが彼女なのかも")},
				{"chara": "merry", "exp": "merry-reaction_10", "serif":_("それってすごく――")},
				{"chara": "merry", "exp": "merry-reaction_08", "serif":_("すごいことよ")},
				{"chara": "renko", "exp": "renko-reaction_02", "serif":_("ブーバキキは所詮平面図形よ")},
				{"chara": "renko", "exp": "renko-reaction_03", "serif":_("ええ、あんなに具体的な存在じゃない")},
				{"chara": "merry", "exp": "merry-reaction_08", "serif":_("彼女はやっぱり本当にいるのかしら")},
			],
			[
				{"chara": "renko", "exp": "renko-reaction_03", "serif":_("いままでもずっと彼女は存在していて、")},
				{"chara": "renko", "exp": "renko-reaction_03", "serif":_("あの薬をきっかけに認知できるように――")},
				{"chara": "renko", "exp": "renko-reaction_02", "serif":_("いや、どういう理屈なんだ")},
				{"chara": "merry", "exp": "merry-reaction_08", "serif":_("ブーバキキ少女説のほうが説得力あるわ")},
				{"chara": "merry", "exp": "merry-reaction_05", "serif":_("彼女の名前が気になるの")},
				{"chara": "merry", "exp": null, "serif":_("こいしちゃんって言うのよ")},
				{"chara": "merry", "exp": null, "serif":_("「小石」")},
				{"chara": "renko", "exp": "renko-reaction_01", "serif":_("変わった名前ね")},
				{"chara": "merry", "exp": "merry-reaction_10", "serif":_("この現象、唯名論的な所以なのかしら")},
				{"chara": "renko", "exp": "renko-reaction_02", "serif":_("うーん")},
				{"chara": "renko", "exp": "renko-reaction_03", "serif":_("小石って名前だから認知の外側に追いやられたっていうの？")},
				{"chara": "merry", "exp": "merry-reaction_08", "serif":_("誰にも気づかれないから小石だなんて名前を付けたっていうの？")},
				{"chara": "merry", "exp": "merry-reaction_03", "serif":_("そんな母親がいるっていうの？")},
				{"chara": "renko", "exp": "renko-reaction_02", "serif":_("......時代ね")},
				{"chara": "merry", "exp": "merry-reaction_12", "serif":_("そんな時代なんて")},
				{"chara": "merry", "exp": null, "serif":_("この百年間、嫌な時代よ")},
				{"chara": "merry", "exp": null, "serif":_("昔は人って生まれた時から死ぬ時まで同じ生活をしていられたのよ")},
				{"chara": "merry", "exp": null, "serif":_("時代が止まればいいのに")},
			],
		]},
	],
	// イベント未再生
	[],
]};


module.exports = {
	key: "chapter4_24",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: null,
	leftField: null,
	background: "chapter4-24-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4_24_40400"], "process": [
			// すでにアクセス済み
			[
				{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["26"], "serifs": [
					// 新品のテープを持っている
					[
						{"chara": "koishi", "exp": "look_bottom", "serif":_("メリー！")},
						{"chara": "koishi", "exp": null, "serif":_("見つけたよ！"), "option": {"useItem": "26"}},
						{"chara": "merry", "exp": "merry-reaction_07", "serif":_("まあ！")},
						{"chara": "merry", "exp": null, "serif":_("これよ！")},
						{"chara": "merry", "exp": null, "serif":_("どうもありがとう")},
						{"chara": "merry", "exp": "merry-reaction_06", "serif":_("それじゃあこれに録音をしましょ")},
						{"chara": "merry", "exp": "merry-reaction_05", "serif":_("機械を返してちょうだい")},
						{"chara": "koishi", "exp": "touch", "serif":_("うん"), "option": {"useItem": "22"}},
						{"chara": "merry", "exp": "merry-reaction_05", "serif":_("それじゃあお話して？")},
						{"chara": "koishi", "exp": "look_front", "serif":_("え？")},
						{"chara": "merry", "exp": "merry-reaction_05", "serif":_("こいしちゃんが話したことがこの中に入るのよ")},
						{"chara": "koishi", "exp": "look_front", "serif":_("えー")},
						{"chara": "koishi", "exp": null, "serif":_("すごい")},
						{"chara": "merry", "exp": "merry-reaction_11", "serif":_("うふふ")},
						{"chara": "koishi", "exp": "yes", "serif":_("うふふ")},
						{"chara": "merry", "exp": null, "serif":_("ちょっと恥ずかしい？")},
						{"chara": "koishi", "exp": "yes", "serif":_("うん")},
						{"chara": "merry", "exp": "merry-reaction_07", "serif":_("わたしメリー")},
						{"chara": "merry", "exp": "merry-reaction_05", "serif":_("あなたお名前は？")},
						{"chara": "koishi", "exp": "yes", "serif":_("こいし")},
						{"chara": "merry", "exp": "merry-reaction_10", "serif":_("あなたは妖怪？")},
						{"chara": "koishi", "exp": "wait", "serif":_("えっ")},
						{"chara": "koishi", "exp": "look_bottom", "serif":_("よくわからない")},
						{"chara": "merry", "exp": "merry-reaction_06", "serif":_("そう")},
						{"chara": "merry", "exp": "merry-reaction_11", "serif":_("ありがとう"), "option": {"playEvent": "chapter4-24-event-01"}},
					],
					// 新品のテープを持ってない
					[],
				]},
			],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_top", "serif":_("木ばっかり！")},
						{"chara": "merry", "exp": "merry-reaction_09", "serif":_("竹って言うのよ")},
						{"chara": "merry", "exp": "merry-reaction_03", "serif":_("ちょっと疲れたわ")},
						{"chara": "merry", "exp": null, "serif":_("休憩しましょ")},
						{"chara": "koishi", "exp": "yes", "serif":_("うん")},
						{"chara": "merry", "exp": "merry-reaction_08", "serif":_("そうだわ")},
						{"chara": "merry", "exp": null, "serif":_("どこかこの辺りにテープを落としたの")},
						{"chara": "merry", "exp": null, "serif":_("新品の――")},
						{"chara": "merry", "exp": null, "serif":_("音の入っていないテープよ")},
						{"chara": "merry", "exp": "merry-reaction_05", "serif":_("もし見つけたら拾っておいて")},
						{"chara": "koishi", "exp": "yes", "serif":_("わかったー")},
						{"chara": "koishi", "exp": "look_top", "serif":_("れんこはいいの？")},
						{"chara": "merry", "exp": "merry-reaction_06", "serif":_("いまはいいわ")},
						{"chara": "merry", "exp": "merry-reaction_09", "serif":_("好きにさせてあげましょ")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4_24_40400"]}
			],
		]},
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "上へのフィールド移動",
			x: 480,
			y: 720 - CONSTANT.WALK_DEPTH_LIMIT,
			width: 960,
			height: 10,
			next_field_name: "chapter4_21",
		},
		{
			no: "merry",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー",
			loop: true,
			serif_back: [],
			serif: [
				RENKO_MERRY_SERIF
			],
			x: 1160*2/3, y: 505*2/3,
			anime1: "merry-wait",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
		},
		{
			no: "renko",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "蓮子",
			loop: true,
			serif_back: [],
			serif: [
				RENKO_MERRY_SERIF
			],
			x: 960*2/3, y: 505*2/3,
			anime1: "renko-wait",
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

