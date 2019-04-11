'use strict';
var _ = require('i18n4v')
// メリー
var CONSTANT = require("../../../constant");
var I = 0;

var RENKO_MERRY_SERIF = [
	{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter4-24-event-01"], "serifs": [
		// イベント再生済
		[
			{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter4_24-renko-merry-limit", 1], "serifs": [
				[
					{"chara": "renko", "exp": "renko-reaction_01",  serif1: _("じゃああなたもあの薬を浴びてから\nあの子が見えたの？"), serif2: _("じゃああなたもあの薬を浴びてから\nあの子が見えたの？"), serif3: _("じゃああなたもあの薬を浴びてから\nあの子が見えたの？"), serif4: _("じゃああなたもあの薬を浴びてから\nあの子が見えたの？")},
					{"chara": "merry", "exp": "merry-reaction_06",  serif1: _("そう"), serif2: _("そう"), serif3: _("そう"), serif4: _("そう")},
					{"chara": "renko", "exp": "renko-reaction_01",  serif1: _("それってどっちが正しいわけ"), serif2: _("それってどっちが正しいわけ"), serif3: _("それってどっちが正しいわけ"), serif4: _("それってどっちが正しいわけ")},
					{"chara": "merry", "exp": "merry-reaction_08", "serif": _("......")},
					{"chara": "renko", "exp": "renko-reaction_01",  serif1: _("あの薬で幻覚を見ているとしたら？"), serif2: _("あの薬で幻覚を見ているとしたら？"), serif3: _("あの薬で幻覚を見ているとしたら？"), serif4: _("あの薬で幻覚を見ているとしたら？")},
					{"chara": "merry", "exp": "merry-reaction_10",  serif1: _("でも私にもメリーにも\n同じ姿が見えているのよ"), serif2: _("でも私にもメリーにも\n同じ姿が見えているのよ"), serif3: _("でも私にもメリーにも\n同じ姿が見えているのよ"), serif4: _("でも私にもメリーにも\n同じ姿が見えているのよ")},
					{"chara": "renko", "exp": "renko-reaction_01",  serif1: _("幻覚なら違うものが見えるはずよ"), serif2: _("幻覚なら違うものが見えるはずよ"), serif3: _("幻覚なら違うものが見えるはずよ"), serif4: _("幻覚なら違うものが見えるはずよ")},
					{"chara": "renko", "exp": "renko-reaction_02",  serif1: _("例えばブーバキキ効果のように\n文化圏や経験によらない――"), serif2: _("例えばブーバキキ効果のように\n文化圏や経験によらない――"), serif3: _("例えばブーバキキ効果のように\n文化圏や経験によらない――"), serif4: _("例えばブーバキキ効果のように\n文化圏や経験によらない――")},
					{"chara": "renko", "exp": null,  serif1: _("人類が普遍的に持つイメージが彼女なのかも"), serif2: _("人類が普遍的に持つイメージが彼女なのかも"), serif3: _("人類が普遍的に持つイメージが彼女なのかも"), serif4: _("人類が普遍的に持つイメージが彼女なのかも")},
					{"chara": "merry", "exp": "merry-reaction_10",  serif1: _("それってすごく――"), serif2: _("それってすごく――"), serif3: _("それってすごく――"), serif4: _("それってすごく――")},
					{"chara": "merry", "exp": "merry-reaction_08",  serif1: _("すごいことよ"), serif2: _("すごいことよ"), serif3: _("すごいことよ"), serif4: _("すごいことよ")},
					{"chara": "renko", "exp": "renko-reaction_02",  serif1: _("ブーバキキは所詮平面図形よ"), serif2: _("ブーバキキは所詮平面図形よ"), serif3: _("ブーバキキは所詮平面図形よ"), serif4: _("ブーバキキは所詮平面図形よ")},
					{"chara": "renko", "exp": "renko-reaction_03",  serif1: _("ええ、あんなに具体的な存在じゃない"), serif2: _("ええ、あんなに具体的な存在じゃない"), serif3: _("ええ、あんなに具体的な存在じゃない"), serif4: _("ええ、あんなに具体的な存在じゃない")},
					{"chara": "merry", "exp": "merry-reaction_08",  serif1: _("彼女はやっぱり本当に\nいるのかしら"), serif2: _("彼女はやっぱり本当に\nいるのかしら"), serif3: _("彼女はやっぱり本当に\nいるのかしら"), serif4: _("彼女はやっぱり本当に\nいるのかしら")},
				],
				[
					{"chara": "renko", "exp": "renko-reaction_03",  serif1: _("いままでもずっと彼女は存在していて、"), serif2: _("いままでもずっと彼女は存在していて、"), serif3: _("いままでもずっと彼女は存在していて、"), serif4: _("いままでもずっと彼女は存在していて、")},
					{"chara": "renko", "exp": "renko-reaction_03",  serif1: _("あの薬をきっかけに認知できるように――"), serif2: _("あの薬をきっかけに認知できるように――"), serif3: _("あの薬をきっかけに認知できるように――"), serif4: _("あの薬をきっかけに認知できるように――")},
					{"chara": "renko", "exp": "renko-reaction_02",  serif1: _("いや、どういう理屈なんだ"), serif2: _("いや、どういう理屈なんだ"), serif3: _("いや、どういう理屈なんだ"), serif4: _("いや、どういう理屈なんだ")},
					{"chara": "merry", "exp": "merry-reaction_08",  serif1: _("ブーバキキ少女説のほうが\n説得力あるわ"), serif2: _("ブーバキキ少女説のほうが\n説得力あるわ"), serif3: _("ブーバキキ少女説のほうが\n説得力あるわ"), serif4: _("ブーバキキ少女説のほうが\n説得力あるわ")},
					{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("彼女の名前が気になるの"), serif2: _("彼女の名前が気になるの"), serif3: _("彼女の名前が気になるの"), serif4: _("彼女の名前が気になるの")},
					{"chara": "merry", "exp": null,  serif1: _("こいしちゃんって言うのよ"), serif2: _("こいしちゃんって言うのよ"), serif3: _("こいしちゃんって言うのよ"), serif4: _("こいしちゃんって言うのよ")},
					{"chara": "merry", "exp": null,  serif1: _("「小石」"), serif2: _("「小石」"), serif3: _("「小石」"), serif4: _("「小石」")},
					{"chara": "renko", "exp": "renko-reaction_01",  serif1: _("変わった名前ね"), serif2: _("変わった名前ね"), serif3: _("変わった名前ね"), serif4: _("変わった名前ね")},
					{"chara": "merry", "exp": "merry-reaction_10",  serif1: _("この現象、唯名論的な\n所以なのかしら"), serif2: _("この現象、唯名論的な\n所以なのかしら"), serif3: _("この現象、唯名論的な\n所以なのかしら"), serif4: _("この現象、唯名論的な\n所以なのかしら")},
					{"chara": "renko", "exp": "renko-reaction_02",  serif1: _("うーん"), serif2: _("うーん"), serif3: _("うーん"), serif4: _("うーん")},
					{"chara": "renko", "exp": "renko-reaction_03",  serif1: _("小石って名前だから認知の外側に\n追いやられたっていうの？"), serif2: _("小石って名前だから認知の外側に\n追いやられたっていうの？"), serif3: _("小石って名前だから認知の外側に\n追いやられたっていうの？"), serif4: _("小石って名前だから認知の外側に\n追いやられたっていうの？")},
					{"chara": "merry", "exp": "merry-reaction_08",  serif1: _("誰にも気づかれないから小石\nだなんて名前を付けたっていうの？"), serif2: _("誰にも気づかれないから小石\nだなんて名前を付けたっていうの？"), serif3: _("誰にも気づかれないから小石\nだなんて名前を付けたっていうの？"), serif4: _("誰にも気づかれないから小石\nだなんて名前を付けたっていうの？")},
					{"chara": "merry", "exp": "merry-reaction_03",  serif1: _("そんな母親がいるっていうの？"), serif2: _("そんな母親がいるっていうの？"), serif3: _("そんな母親がいるっていうの？"), serif4: _("そんな母親がいるっていうの？")},
					{"chara": "renko", "exp": "renko-reaction_02",  serif1: _("......時代ね"), serif2: _("......時代ね"), serif3: _("......時代ね"), serif4: _("......時代ね")},
					{"chara": "merry", "exp": "merry-reaction_12",  serif1: _("そんな時代なんて"), serif2: _("そんな時代なんて"), serif3: _("そんな時代なんて"), serif4: _("そんな時代なんて")},
					{"chara": "merry", "exp": null,  serif1: _("この百年間、嫌な時代よ"), serif2: _("この百年間、嫌な時代よ"), serif3: _("この百年間、嫌な時代よ"), serif4: _("この百年間、嫌な時代よ")},
					{"chara": "merry", "exp": null,  serif1: _("昔は人って生まれた時から死ぬ時\nまで同じ生活をしていられたのよ"), serif2: _("昔は人って生まれた時から死ぬ時\nまで同じ生活をしていられたのよ"), serif3: _("昔は人って生まれた時から死ぬ時\nまで同じ生活をしていられたのよ"), serif4: _("昔は人って生まれた時から死ぬ時\nまで同じ生活をしていられたのよ")},
					{"chara": "merry", "exp": null,  serif1: _("時代が止まればいいのに"), serif2: _("時代が止まればいいのに"), serif3: _("時代が止まればいいのに"), serif4: _("時代が止まればいいのに")},
				],
			]},
		],
		// イベント未再生
		[
			{"chara": "renko", "exp": null,  serif1: _("私はここに長居なんて御免だわ"), serif2: _("私はここに長居なんて御免だわ"), serif3: _("私はここに長居なんて御免だわ"), serif4: _("私はここに長居なんて御免だわ")},
			{"chara": "renko", "exp": null,  serif1: _("無意識に感情の残滓が膨張しそう"), serif2: _("無意識に感情の残滓が膨張しそう"), serif3: _("無意識に感情の残滓が膨張しそう"), serif4: _("無意識に感情の残滓が膨張しそう")},
			{"chara": "renko", "exp": null,  serif1: _("気づかないうちに心が崩れて死ぬ"), serif2: _("気づかないうちに心が崩れて死ぬ"), serif3: _("気づかないうちに心が崩れて死ぬ"), serif4: _("気づかないうちに心が崩れて死ぬ")},
		],
	]},
];

module.exports = {
	key: "chapter4_24",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 460, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: null,
	leftField:  null,
	upField:    "chapter4_21",
	downField:  null,
	background: "chapter4-24-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4_24_40400"], "process": [
			// すでにアクセス済み
			[
				{"type": "criteria", "value": "existsItem", "arguments": ["26"], "process": [
					[
						// 新品のテープを持っている
						{"type": "process", "value": "playTalk", "arguments": [
							[

								{"id": "chapter4-24-event-01", "save": true},
								{"chara": "koishi", "exp": "look_bottom",  serif1: _("メリー！"), serif2: _("メリー！"), serif3: _("メリー！"), serif4: _("メリー！")},
								{"chara": "koishi", "exp": null,  serif1: _("見つけたよ！"), serif2: _("見つけたよ！"), serif3: _("見つけたよ！"), serif4: _("見つけたよ！"), "option": {"useItem": "26"}},
								{"chara": "merry", "exp": "merry-reaction_07",  serif1: _("まあ！"), serif2: _("まあ！"), serif3: _("まあ！"), serif4: _("まあ！")},
								{"chara": "merry", "exp": null,  serif1: _("これよ！"), serif2: _("これよ！"), serif3: _("これよ！"), serif4: _("これよ！")},
								{"chara": "merry", "exp": null,  serif1: _("どうもありがとう"), serif2: _("どうもありがとう"), serif3: _("どうもありがとう"), serif4: _("どうもありがとう")},
								{"chara": "merry", "exp": "merry-reaction_06",  serif1: _("それじゃあこれに録音をしましょ"), serif2: _("それじゃあこれに録音をしましょ"), serif3: _("それじゃあこれに録音をしましょ"), serif4: _("それじゃあこれに録音をしましょ")},
								{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("機械を返してちょうだい"), serif2: _("機械を返してちょうだい"), serif3: _("機械を返してちょうだい"), serif4: _("機械を返してちょうだい")},
								{"chara": "koishi", "exp": "touch", "serif": _("うん"), "option": {"useItem": "22"}},
								{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("それじゃあお話して？"), serif2: _("それじゃあお話して？"), serif3: _("それじゃあお話して？"), serif4: _("それじゃあお話して？")},
								{"chara": "koishi", "exp": "look_front",  serif1: _("え？"), serif2: _("え？"), serif3: _("え？"), serif4: _("え？")},
								{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("こいしちゃんが話したことがこの中に入るのよ"), serif2: _("こいしちゃんが話したことがこの中に入るのよ"), serif3: _("こいしちゃんが話したことがこの中に入るのよ"), serif4: _("こいしちゃんが話したことがこの中に入るのよ")},
								{"chara": "koishi", "exp": "look_front", "serif": _("えー")},
								{"chara": "koishi", "exp": null,  serif1: _("すごい"), serif2: _("すごい"), serif3: _("すごい"), serif4: _("すごい")},
								{"chara": "merry", "exp": "merry-reaction_11",  serif1: _("うふふ"), serif2: _("うふふ"), serif3: _("うふふ"), serif4: _("うふふ")},
								{"chara": "koishi", "exp": "yes",  serif1: _("うふふ"), serif2: _("うふふ"), serif3: _("うふふ"), serif4: _("うふふ")},
								{"chara": "merry", "exp": null,  serif1: _("ちょっと恥ずかしい？"), serif2: _("ちょっと恥ずかしい？"), serif3: _("ちょっと恥ずかしい？"), serif4: _("ちょっと恥ずかしい？")},
								{"chara": "koishi", "exp": "yes", "serif": _("うん")},
								{"chara": "merry", "exp": "merry-reaction_07",  serif1: _("わたしメリー"), serif2: _("わたしメリー"), serif3: _("わたしメリー"), serif4: _("わたしメリー")},
								{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("あなたお名前は？"), serif2: _("あなたお名前は？"), serif3: _("あなたお名前は？"), serif4: _("あなたお名前は？")},
								{"chara": "koishi", "exp": "yes", "serif": _("こいし")},
								{"chara": "merry", "exp": "merry-reaction_10",  serif1: _("あなたは妖怪？"), serif2: _("あなたは妖怪？"), serif3: _("あなたは妖怪？"), serif4: _("あなたは妖怪？")},
								{"chara": "koishi", "exp": "wait", "serif": _("えっ")},
								{"chara": "koishi", "exp": "look_bottom",  serif1: _("よくわからない"), serif2: _("よくわからない"), serif3: _("よくわからない"), serif4: _("よくわからない")},
								{"chara": "merry", "exp": "merry-reaction_06",  serif1: _("そう"), serif2: _("そう"), serif3: _("そう"), serif4: _("そう")},
								{"chara": "merry", "exp": "merry-reaction_11", "serif": _("ありがとう"), "option": {"playEvent": "chapter4-24-event-01"}},
							],
						]},
					],
					// 新品のテープを持ってない
					[],
				]},
			],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_top",  serif1: _("木ばっかり！"), serif2: _("変な木ばっかり"), serif3: _("変な木ばっかりね"), serif4: _("変な木ばっかりね")},
						{"chara": "merry", "exp": "merry-reaction_09",  serif1: _("竹って言うのよ"), serif2: _("竹って言うのよ"), serif3: _("竹って言うのよ"), serif4: _("竹って言うのよ")},
						{"chara": "merry", "exp": "merry-reaction_03",  serif1: _("ちょっと疲れたわ"), serif2: _("ちょっと疲れたわ"), serif3: _("ちょっと疲れたわ"), serif4: _("ちょっと疲れたわ")},
						{"chara": "merry", "exp": null,  serif1: _("休憩しましょ"), serif2: _("休憩しましょ"), serif3: _("休憩しましょ"), serif4: _("休憩しましょ")},
						{"chara": "koishi", "exp": "yes", "serif": _("うん")},
						{"chara": "merry", "exp": "merry-reaction_08",  serif1: _("そうだわ"), serif2: _("そうだわ"), serif3: _("そうだわ"), serif4: _("そうだわ")},
						{"chara": "merry", "exp": null,  serif1: _("どこかこの辺りにテープを落としたの"), serif2: _("どこかこの辺りにテープを落としたの"), serif3: _("どこかこの辺りにテープを落としたの"), serif4: _("どこかこの辺りにテープを落としたの")},
						{"chara": "merry", "exp": null,  serif1: _("新品の――"), serif2: _("新品の――"), serif3: _("新品の――"), serif4: _("新品の――")},
						{"chara": "merry", "exp": null,  serif1: _("音の入っていないテープよ"), serif2: _("音の入っていないテープよ"), serif3: _("音の入っていないテープよ"), serif4: _("音の入っていないテープよ")},
						{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("もし見つけたら拾っておいて"), serif2: _("もし見つけたら拾っておいて"), serif3: _("もし見つけたら拾っておいて"), serif4: _("もし見つけたら拾っておいて")},
						{"chara": "koishi", "exp": "yes",  serif1: _("わかったー"), serif2: _("わかった"), serif3: _("わかりました"), serif4: _("わかりました")},
						{"chara": "koishi", "exp": "look_top",  serif1: _("れんこはいいの？"), serif2: _("れんこはいいの？"), serif3: _("れんこはいいの？"), serif4: _("れんこはいいの？")},
						{"chara": "merry", "exp": "merry-reaction_06",  serif1: _("いまはいいわ"), serif2: _("いまはいいわ"), serif3: _("いまはいいわ"), serif4: _("いまはいいわ")},
						{"chara": "merry", "exp": "merry-reaction_09",  serif1: _("好きにさせてあげましょ"), serif2: _("好きにさせてあげましょ"), serif3: _("好きにさせてあげましょ"), serif4: _("好きにさせてあげましょ")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4_24_40400"]}
			],
		]},
	],
	objects: [
		{
			no: "merry",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: RENKO_MERRY_SERIF,
			x: 1160*2/3, y: 505*2/3,
			width: 100,
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
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: RENKO_MERRY_SERIF,
			x: 960*2/3, y: 505*2/3,
			width: 100,
			anime1: "renko-wait",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
		},
		//『unwelcome to the jungle』
		{
			no: ++I,
			type: CONSTANT.ITEM_TYPE,
			name: "カセットテープ",
			image: "item_23",
			x: 615,
			y: 650,
			scale: 2/3,
			item_id: "30",
			position_type: "lying",
		},



	],
};

