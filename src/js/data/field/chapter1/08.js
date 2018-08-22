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
	rightField: "chapter1_09",
	leftField: "chapter1_07",
	background: "chapter1-08-bg-001",
	walkSound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ぶら下がった二人",
			serif: null,
			x: 960/2, y: 720/2,
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
			loop: true,
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_08-" + I + "-talk01"], "serifs": [
					[
						{"id": "chapter1_10-secretBase-02", "save": true},
						{"chara": I, "exp": "kyoko-ura_reaction_02", "serif":_("だいきらいなのに離れたくないもの、なーんだ？")},
					],
					[
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":_("私が話しても誰も返事しない")},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":_("…………")},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":_("…………")},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":_("…………")},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":_("…………")},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":_("だから黙ってなきゃ")},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":_("…………")},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":_("…………")},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":_("…………")},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":_("…………")},
					],
				]}

			],
			serif: [
				// マイクを持っているか否か
				{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["07"], "serifs": [
					[
						{"id": "chapter1_08-" + I + "-_useItem-07", "save": true},
						// 1-17
						{"chara": I, "exp": "kyoko-reaction_01", "serif":_("............"), "option": {"useItem": "07"}},
						{"chara": I, "exp": "kyoko-reaction_02", "serif":_("！！"), "option": {
							"fontSize": 12,
						}},
						{"chara": "koishi",        "exp": "back", "serif":_("えっなに？")},
						{"chara": I, "exp": "kyoko-reaction_03", "serif":_("ごあいさつしていい？")},
						{"chara": "koishi",        "exp": "back", "serif":_("CHAPTER1_FIELD_08_SERIF0001")},
						{"chara": I, "exp": "kyoko-reaction_03", "serif":_("ごあいさつ！")},
						{"chara": "koishi",        "exp": "back", "serif":_("ごあいさつって？")},
						{"chara": I, "exp": "kyoko-reaction_04", "serif":_("こ"), "option": {
							"fontSize": 30,
						}},
						{"chara": I, "exp": "kyoko-reaction_04", "serif":_("ん"), "option": {
							"fontSize": 30,
						}},
						{"chara": I, "exp": "kyoko-reaction_04", "serif":_("ち"), "option": {
							"fontSize": 30,
						}},
						{"chara": I, "exp": "kyoko-reaction_04", "serif":_("は～～～！"), "option": {
							"fontSize": 30,
						}},
						{"chara": I, "exp": "kyoko-reaction_05", "serif":_("先生は黙りなさいっていうの。\nしゃべっていいんでしょ？")},
						{"chara": "koishi",        "exp": "back", "serif":_("しゃべっちゃだめだったの？")},
						{"chara": I, "exp": "kyoko-reaction_06", "serif":_("ううん！先生いないから！")},
						{"chara": I, "exp": "kyoko-reaction_06", "serif":_("先生いなくてもだまってたんだ")},
						{"chara": I, "exp": "kyoko-reaction_06", "serif":_("みんながうるさいっていうから")},
						{"chara": I, "exp": "kyoko-reaction_06", "serif":_("おしゃべりたのしいよね！")},
						{"chara": I, "exp": "kyoko-reaction_06", "serif":_("まえはおしゃべりしてくれるひと\nたくさんいたのにね！")},
						{"chara": I, "exp": "kyoko-reaction_06", "serif":_("あっはっはっは"), "option":{
							"fontSize": 30,
							"fontName": "ＭＳ Ｐ明朝",
						}},
					],
					[
						{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["09"], "serifs": [
							[
								{"id": "chapter1_08-" + I + "-_useItem-09", "save": true},
								{"chara": I, "exp": "kyoko-reaction_05", "serif":_("うわ！"), "option": {"useItem": "09"}},
								{"chara": I, "exp": "kyoko-reaction_06", "serif":_("これ飛ぶ奴だよね！")},
								{"chara": I, "exp": "kyoko-reaction_07", "serif":_("わーっ......")},
								{"chara": I, "exp": "kyoko-reaction_07", "serif":_("これどこまで飛ぶかなあ")},
								{"chara": I, "exp": "kyoko-reaction_07", "serif":_("やってみようよ！"), "option": {
									"showPicture": "picture_chapter1-08-illust-01",
								}},
							],
							[
								{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_08-" + I + "-_useItem-09"], "serifs": [
									[
										{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter1_08-" + I + "limit-01", 1], "serifs": [
											[
												{"chara": I, "exp": "kyoko-reaction_03", "serif":_("え？")},
												{"chara": I, "exp": "kyoko-reaction_03", "serif":_("わたしあの子のことあんまり知らない")},
												{"chara": I, "exp": "kyoko-reaction_03", "serif":_("だっていっつも怒ってるから")},
											],
											[
												{"id": "chapter1_08-" + I + "-talk01", "save": true},
												{"chara": "koishi",        "exp": "back", "serif":_("ひつみきちってしってる？")},
												{"chara": I, "exp": "kyoko-reaction_02", "serif":_("知ってるよ！")},
												{"chara": I, "exp": "kyoko-reaction_02", "serif":_("あのね！")},
												{"chara": I, "exp": "kyoko-reaction_01", "serif":_("あーでもこれ秘密だった")},
												{"chara": I, "exp": "kyoko-reaction_01", "serif":_("秘密基地だから……")},
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
														{"chara": "koishi",        "exp": "back", "serif":_("ねえ、なにしてるの？")},
														{"chara": I, "exp": "kyoko-reaction_03", "serif":_("えー？")},
														{"chara": I, "exp": "kyoko-reaction_03", "serif":_("えっとねー")},
														{"chara": I, "exp": "kyoko-reaction_03", "serif":_("先生がやりなさいって言ったやつ！")},
														{"chara": I, "exp": "kyoko-reaction_02", "serif":_("わたしたちけんかいっつもするの！")},
														{"chara": I, "exp": "kyoko-reaction_02", "serif":_("だから先生がみんなで遊べるからって言ったの")},
														{"chara": I, "exp": "kyoko-wait", "serif":_("これだったらいいんだって！")},
														{"chara": "koishi",        "exp": "back", "serif":_("楽しいの？")},
														{"chara": I, "exp": "kyoko-wait", "serif":_("そんなにたのしくないよ！")},
														{"chara": I, "exp": "kyoko-wait", "serif":_("でもみんなこれしかやらないから")},
														{"chara": I, "exp": "kyoko-reaction_03", "serif":_("わたしはおしゃべり禁止だし……")},
														{"chara": I, "exp": "kyoko-reaction_01", "serif":_("だれもおしゃべりしてくれないから……")},
													],
													[
														{"chara": I, "exp": "kyoko-reaction_03", "serif":_("むかしね、みんなあかちゃんだったでしょ！")},
														{"chara": "koishi",        "exp": "back", "serif":_("そうなの？")},
														{"chara": I, "exp": "kyoko-reaction_03", "serif":_("あかちゃんはいいよねー\nしゃべったら\nほめてくれるんだもん！")},
														{"chara": I, "exp": "kyoko-reaction_02", "serif":_("ねえねえ、空の上には極楽があるって\n先生はいうんだけどさあ！")},
														{"chara": "koishi",        "exp": "back", "serif":_("CHAPTER1_FIELD_08_SERIF0002")},
														{"chara": I, "exp": "kyoko-reaction_02", "serif":_("ぜったいうそだよねー！")},
														{"chara": I, "exp": "kyoko-reaction_02", "serif":_("だってみえないんだもん")},
														{"chara": I, "exp": "kyoko-reaction_02", "serif":_("お空に飛べたらぶつかっちゃうしね")},
													],
												]},
											],
											// マイクを使用するまえ
											[
												// 1-16
												{"chara": I, "exp": "kyoko-reaction_01", "serif":_("............")},
												{"chara": "koishi",        "exp": "back", "serif":_("あなた、どうしておくちがあかないの？")},
												{"chara": I, "exp": "kyoko-reaction_01", "serif":_("............")},
												{"chara": "koishi",        "exp": "back", "serif":_("............")},
												{"chara": "koishi",        "exp": "back", "serif":_("ねえ、あそばないの？")},
												{"chara": I, "exp": "kyoko-reaction_01", "serif":_("............")},
												{"chara": "koishi",        "exp": "back", "serif":_("ねえ？")},
												{"chara": I, "exp": "kyoko-reaction_01", "serif":_("............")},
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

