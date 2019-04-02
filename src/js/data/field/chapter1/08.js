'use strict';
var _ = require('i18n4v')
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_08",
	chapter: 1,
	bgm: "field4",
	rightStartPosition: {x: 830, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter1_09",
	leftField: "chapter1_07",
	upField: null,
	downField: null,
	background: "chapter1-08-bg-001",
	walkSound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ぶら下がった二人",
			serif: null,
			x: 735*2/3, y: 392*2/3,
			scale: 2/3,
			anime1: "chapter1-08-obj-01-obj00",
			anime2: null,
			anime3: null,
			anime4: "chapter1-08-obj-01-obj01",
			anime5: "chapter1-08-obj-01-obj02",
			anime6: "chapter1-08-obj-01-obj03",

			action_name: null,
			sound_name: null,
			sound_back: "chapter1-08-suspended",
			position_type: "lying",
		},

		{
			no: ++I,
			type: CONSTANT.HASHIGO_TYPE,
			x:196, y:484*2/3,
			width: 200,
			height: 200,
			position_type: "lying",
		},

		{
			no: ++I,
			image: "item_09",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "竹とんぼ",
			x:75, y:100,
			scale: 2/3,
			position_type: "lying",
			not_show_if_event_true: "chapter1_08-useHashigo",
		},



		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "響子",
			turn_not_toward_me: true, // こいしの方を向く
			loop: true,
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_08-" + I + "-talk01"], "serifs": [
					[
						{"id": "chapter1_10-secretBase-02", "save": true},
						{"chara": I, "exp": "kyoko-ura_reaction_02",  serif1: _("だいきらいなのに離れたくないもの、なーんだ？"), serif2: _("だいきらいなのに離れたくないもの、なーんだ？"), serif3: _("だいきらいなのに離れたくないもの、なーんだ？"), serif4: _("だいきらいなのに離れたくないもの、なーんだ？")},
					],
					[
						{"chara": I, "exp": "kyoko-ura_reaction_01",  serif1: _("私が話しても誰も返事しない"), serif2: _("私が話しても誰も返事しない"), serif3: _("私が話しても誰も返事しない"), serif4: _("私が話しても誰も返事しない")},
						{"chara": I, "exp": "kyoko-ura_reaction_01",  serif1: _("…………"), serif2: _("…………"), serif3: _("…………"), serif4: _("…………")},
						{"chara": I, "exp": "kyoko-ura_reaction_01",  serif1: _("…………"), serif2: _("…………"), serif3: _("…………"), serif4: _("…………")},
						{"chara": I, "exp": "kyoko-ura_reaction_01",  serif1: _("…………"), serif2: _("…………"), serif3: _("…………"), serif4: _("…………")},
						{"chara": I, "exp": "kyoko-ura_reaction_01",  serif1: _("…………"), serif2: _("…………"), serif3: _("…………"), serif4: _("…………")},
						{"chara": I, "exp": "kyoko-ura_reaction_01",  serif1: _("だから黙ってなきゃ"), serif2: _("だから黙ってなきゃ"), serif3: _("だから黙ってなきゃ"), serif4: _("だから黙ってなきゃ")},
						{"chara": I, "exp": "kyoko-ura_reaction_01",  serif1: _("…………"), serif2: _("…………"), serif3: _("…………"), serif4: _("…………")},
						{"chara": I, "exp": "kyoko-ura_reaction_01",  serif1: _("…………"), serif2: _("…………"), serif3: _("…………"), serif4: _("…………")},
						{"chara": I, "exp": "kyoko-ura_reaction_01",  serif1: _("…………"), serif2: _("…………"), serif3: _("…………"), serif4: _("…………")},
						{"chara": I, "exp": "kyoko-ura_reaction_01",  serif1: _("…………"), serif2: _("…………"), serif3: _("…………"), serif4: _("…………")},
					],
				]}

			],
			serif: [
				// マイクを持っているか否か
				{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["07"], "serifs": [
					[
						{"id": "chapter1_08-" + I + "-_useItem-07", "save": true},
						// 1-17
						{"chara": I, "exp": "kyoko-reaction_01",  serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............"), "option": {"useItem": "07"}},
						{"chara": I, "exp": "kyoko-reaction_02",  serif1: _("！！"), serif2: _("！！"), serif3: _("！！"), serif4: _("！！"), "option": {
							"fontSize": 12,
						}},
						{"chara": "koishi",        "exp": "back",  serif1: _("えっなに？"), serif2: _("えっなに？"), serif3: _("えっなに？"), serif4: _("えっなに？")},
						{"chara": I, "exp": "kyoko-reaction_03",  serif1: _("ごあいさつしていい？"), serif2: _("ごあいさつしていい？"), serif3: _("ごあいさつしていい？"), serif4: _("ごあいさつしていい？")},
						{"chara": "koishi",        "exp": "back", "serif": _("CHAPTER1_FIELD_08_SERIF0001")},
						{"chara": I, "exp": "kyoko-reaction_03",  serif1: _("ごあいさつ！"), serif2: _("ごあいさつ！"), serif3: _("ごあいさつ！"), serif4: _("ごあいさつ！")},
						{"chara": "koishi",        "exp": "back",  serif1: _("ごあいさつって？"), serif2: _("ごあいさつって？"), serif3: _("ごあいさつって？"), serif4: _("ごあいさつって？")},
						{"chara": I, "exp": "kyoko-reaction_04",  serif1: _("こ"), serif2: _("こ"), serif3: _("こ"), serif4: _("こ"), "option": {
							"fontSize": 30,
						}},
						{"chara": I, "exp": "kyoko-reaction_04",  serif1: _("ん"), serif2: _("ん"), serif3: _("ん"), serif4: _("ん"), "option": {
							"fontSize": 30,
						}},
						{"chara": I, "exp": "kyoko-reaction_04",  serif1: _("ち"), serif2: _("ち"), serif3: _("ち"), serif4: _("ち"), "option": {
							"fontSize": 30,
						}},
						{"chara": I, "exp": "kyoko-reaction_04",  serif1: _("は～～～！"), serif2: _("は～～～！"), serif3: _("は～～～！"), serif4: _("は～～～！"), "option": {
							"fontSize": 30,
						}},
						{"chara": I, "exp": "kyoko-reaction_05", "serif": _("先生は黙りなさいっていうの。\nしゃべっていいんでしょ？")},
						{"chara": "koishi",        "exp": "back",  serif1: _("しゃべっちゃだめだったの？"), serif2: _("しゃべっちゃだめだったの？"), serif3: _("しゃべっちゃだめだったの？"), serif4: _("しゃべっちゃだめだったの？")},
						{"chara": I, "exp": "kyoko-reaction_06",  serif1: _("ううん！先生いないから！"), serif2: _("ううん！先生いないから！"), serif3: _("ううん！先生いないから！"), serif4: _("ううん！先生いないから！")},
						{"chara": I, "exp": "kyoko-reaction_06",  serif1: _("先生いなくてもだまってたんだ"), serif2: _("先生いなくてもだまってたんだ"), serif3: _("先生いなくてもだまってたんだ"), serif4: _("先生いなくてもだまってたんだ")},
						{"chara": I, "exp": "kyoko-reaction_06",  serif1: _("みんながうるさいっていうから"), serif2: _("みんながうるさいっていうから"), serif3: _("みんながうるさいっていうから"), serif4: _("みんながうるさいっていうから")},
						{"chara": I, "exp": "kyoko-reaction_06",  serif1: _("おしゃべりたのしいよね！"), serif2: _("おしゃべりたのしいよね！"), serif3: _("おしゃべりたのしいよね！"), serif4: _("おしゃべりたのしいよね！")},
						{"chara": I, "exp": "kyoko-reaction_06", "serif": _("まえはおしゃべりしてくれるひと\nたくさんいたのにね！")},
						{"chara": I, "exp": "kyoko-reaction_06",  serif1: _("あっはっはっは"), serif2: _("あっはっはっは"), serif3: _("あっはっはっは"), serif4: _("あっはっはっは"), "option":{
							"fontSize": 30,
							"fontName": "ＭＳ Ｐ明朝",
						}},
					],
					[
						{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["09"], "serifs": [
							[
								{"id": "chapter1_08-" + I + "-_useItem-09", "save": true},
								{"chara": I, "exp": "kyoko-reaction_05", "serif": _("うわ！"), "option": {"useItem": "09"}},
								{"chara": I, "exp": "kyoko-reaction_06",  serif1: _("これ飛ぶ奴だよね！"), serif2: _("これ飛ぶ奴だよね！"), serif3: _("これ飛ぶ奴だよね！"), serif4: _("これ飛ぶ奴だよね！")},
								{"chara": I, "exp": "kyoko-reaction_07",  serif1: _("わーっ......"), serif2: _("わーっ......"), serif3: _("わーっ......"), serif4: _("わーっ......")},
								{"chara": I, "exp": "kyoko-reaction_07",  serif1: _("これどこまで飛ぶかなあ"), serif2: _("これどこまで飛ぶかなあ"), serif3: _("これどこまで飛ぶかなあ"), serif4: _("これどこまで飛ぶかなあ")},
								{"chara": I, "exp": "kyoko-reaction_07",  serif1: _("やってみようよ！"), serif2: _("やってみようよ！"), serif3: _("やってみようよ！"), serif4: _("やってみようよ！"), "option": {
									"showPicture": "picture_chapter1-08-illust-01",
								}},
							],
							[
								{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_08-" + I + "-_useItem-09"], "serifs": [
									[
										{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter1_08-" + I + "limit-01", 1], "serifs": [
											[
												{"chara": I, "exp": "kyoko-reaction_03",  serif1: _("え？"), serif2: _("え？"), serif3: _("え？"), serif4: _("え？")},
												{"chara": I, "exp": "kyoko-reaction_03",  serif1: _("わたしあの子のことあんまり知らない"), serif2: _("わたしあの子のことあんまり知らない"), serif3: _("わたしあの子のことあんまり知らない"), serif4: _("わたしあの子のことあんまり知らない")},
												{"chara": I, "exp": "kyoko-reaction_03",  serif1: _("だっていっつも怒ってるから"), serif2: _("だっていっつも怒ってるから"), serif3: _("だっていっつも怒ってるから"), serif4: _("だっていっつも怒ってるから")},
											],
											[
												{"id": "chapter1_08-" + I + "-talk01", "save": true},
												{"chara": "koishi",        "exp": "back",  serif1: _("ひつみきちってしってる？"), serif2: _("ひつみきちってしってる？"), serif3: _("ひつみきちってしってる？"), serif4: _("ひつみきちってしってる？")},
												{"chara": I, "exp": "kyoko-reaction_02",  serif1: _("知ってるよ！"), serif2: _("知ってるよ！"), serif3: _("知ってるよ！"), serif4: _("知ってるよ！")},
												{"chara": I, "exp": "kyoko-reaction_02",  serif1: _("あのね！"), serif2: _("あのね！"), serif3: _("あのね！"), serif4: _("あのね！")},
												{"chara": I, "exp": "kyoko-reaction_01",  serif1: _("あーでもこれ秘密だった"), serif2: _("あーでもこれ秘密だった"), serif3: _("あーでもこれ秘密だった"), serif4: _("あーでもこれ秘密だった")},
												{"chara": I, "exp": "kyoko-reaction_01",  serif1: _("秘密基地だから……"), serif2: _("秘密基地だから……"), serif3: _("秘密基地だから……"), serif4: _("秘密基地だから……")},
											],
										]},
									],
									[
										// マイクを使用したかどうか
										{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_08-" + I + "-_useItem-07"], "serifs": [
											// マイクを使用したあと
											[
												{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter1_08-" + I + "limit-02", 1], "serifs": [
													[
														{"chara": "koishi",        "exp": "back",  serif1: _("ねえ、なにしてるの？"), serif2: _("ねえ、なにしてるの？"), serif3: _("ねえ、なにしてるの？"), serif4: _("ねえ、なにしてるの？")},
														{"chara": I, "exp": "kyoko-reaction_03",  serif1: _("えー？"), serif2: _("えー？"), serif3: _("えー？"), serif4: _("えー？")},
														{"chara": I, "exp": "kyoko-reaction_03",  serif1: _("えっとねー"), serif2: _("えっとねー"), serif3: _("えっとねー"), serif4: _("えっとねー")},
														{"chara": I, "exp": "kyoko-reaction_03",  serif1: _("先生がやりなさいって言ったやつ！"), serif2: _("先生がやりなさいって言ったやつ！"), serif3: _("先生がやりなさいって言ったやつ！"), serif4: _("先生がやりなさいって言ったやつ！")},
														{"chara": I, "exp": "kyoko-reaction_02",  serif1: _("わたしたちけんかいっつもするの！"), serif2: _("わたしたちけんかいっつもするの！"), serif3: _("わたしたちけんかいっつもするの！"), serif4: _("わたしたちけんかいっつもするの！")},
														{"chara": I, "exp": "kyoko-reaction_02",  serif1: _("だから先生がみんなで遊べるからって言ったの"), serif2: _("だから先生がみんなで遊べるからって言ったの"), serif3: _("だから先生がみんなで遊べるからって言ったの"), serif4: _("だから先生がみんなで遊べるからって言ったの")},
														{"chara": I, "exp": "kyoko-wait",  serif1: _("これだったらいいんだって！"), serif2: _("これだったらいいんだって！"), serif3: _("これだったらいいんだって！"), serif4: _("これだったらいいんだって！")},
														{"chara": "koishi",        "exp": "back",  serif1: _("楽しいの？"), serif2: _("楽しいの？"), serif3: _("楽しいの？"), serif4: _("楽しいの？")},
														{"chara": I, "exp": "kyoko-wait",  serif1: _("そんなにたのしくないよ！"), serif2: _("そんなにたのしくないよ！"), serif3: _("そんなにたのしくないよ！"), serif4: _("そんなにたのしくないよ！")},
														{"chara": I, "exp": "kyoko-wait",  serif1: _("でもみんなこれしかやらないから"), serif2: _("でもみんなこれしかやらないから"), serif3: _("でもみんなこれしかやらないから"), serif4: _("でもみんなこれしかやらないから")},
														{"chara": I, "exp": "kyoko-reaction_03",  serif1: _("わたしはおしゃべり禁止だし……"), serif2: _("わたしはおしゃべり禁止だし……"), serif3: _("わたしはおしゃべり禁止だし……"), serif4: _("わたしはおしゃべり禁止だし……")},
														{"chara": I, "exp": "kyoko-reaction_01",  serif1: _("だれもおしゃべりしてくれないから……"), serif2: _("だれもおしゃべりしてくれないから……"), serif3: _("だれもおしゃべりしてくれないから……"), serif4: _("だれもおしゃべりしてくれないから……")},
													],
													[
														{"chara": I, "exp": "kyoko-reaction_03",  serif1: _("むかしね、みんなあかちゃんだったでしょ！"), serif2: _("むかしね、みんなあかちゃんだったでしょ！"), serif3: _("むかしね、みんなあかちゃんだったでしょ！"), serif4: _("むかしね、みんなあかちゃんだったでしょ！")},
														{"chara": "koishi",        "exp": "back",  serif1: _("そうなの？"), serif2: _("そうなの？"), serif3: _("そうなの？"), serif4: _("そうなの？")},
														{"chara": I, "exp": "kyoko-reaction_03", "serif": _("あかちゃんはいいよねー\nしゃべったら\nほめてくれるんだもん！")},
														{"chara": I, "exp": "kyoko-reaction_02", "serif": _("ねえねえ、空の上には極楽があるって\n先生はいうんだけどさあ！")},
														{"chara": "koishi",        "exp": "back", "serif": _("CHAPTER1_FIELD_08_SERIF0002")},
														{"chara": I, "exp": "kyoko-reaction_02",  serif1: _("ぜったいうそだよねー！"), serif2: _("ぜったいうそだよねー！"), serif3: _("ぜったいうそだよねー！"), serif4: _("ぜったいうそだよねー！")},
														{"chara": I, "exp": "kyoko-reaction_02",  serif1: _("だってみえないんだもん"), serif2: _("だってみえないんだもん"), serif3: _("だってみえないんだもん"), serif4: _("だってみえないんだもん")},
														{"chara": I, "exp": "kyoko-reaction_02",  serif1: _("お空に飛べたらぶつかっちゃうしね"), serif2: _("お空に飛べたらぶつかっちゃうしね"), serif3: _("お空に飛べたらぶつかっちゃうしね"), serif4: _("お空に飛べたらぶつかっちゃうしね")},
													],
												]},
											],
											// マイクを使用するまえ
											[
												// 1-16
												{"chara": I, "exp": "kyoko-reaction_01",  serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............")},
												{"chara": "koishi",        "exp": "back",  serif1: _("あなた、どうしておくちがあかないの？"), serif2: _("あなた、どうしておくちがあかないの？"), serif3: _("あなた、どうしておくちがあかないの？"), serif4: _("あなた、どうしておくちがあかないの？")},
												{"chara": I, "exp": "kyoko-reaction_01",  serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............")},
												{"chara": "koishi",        "exp": "back",  serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............")},
												{"chara": "koishi",        "exp": "back",  serif1: _("ねえ、あそばないの？"), serif2: _("ねえ、あそばないの？"), serif3: _("ねえ、あそばないの？"), serif4: _("ねえ、あそばないの？")},
												{"chara": I, "exp": "kyoko-reaction_01",  serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............")},
												{"chara": "koishi",        "exp": "back",  serif1: _("ねえ！"), serif2: _("ねえ！"), serif3: _("ねえ！"), serif4: _("ねえ！")},
												{"chara": I, "exp": "kyoko-reaction_01",  serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............")},
											],
										]}
									],
								]},
							]
						]}
					]
				]}
			],
			x: 1024*2/3, y: 585*2/3,
			scale: 2/3,
			anime1: "kyoko-wait",
			anime2: null,
			anime3: null,
			anime4: "kyoko-reverse_ura",
			anime5: "kyoko-ura_wait",
			anime6: "kyoko-reverse_omote",
			width: 150,
			action_name: null,
			sound_name: null,
		},

	]
};

