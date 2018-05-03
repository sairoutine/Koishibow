'use strict';
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_08",
	chapter: 1,
	bgm: "field4",
	right_start_position: {x: 690, y: 380},
	left_start_position:  {x: 180, y: 380},
	right_field: "chapter1_09",
	left_field: "chapter1_07",
	background: "chapter1-08-bg-001",
	walk_sound: "walking_bare_outside",
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
			image: "chapter1-03-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ハシゴ",
			serif: [
				{"chara": "koishi","serif":null, "option": {
					getItem: "09",
				}},
			],
			x:196, y:484*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			position_type: "lying",
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
						{"chara": I, "serif":"だいきらいなのに離れたくないもの、なーんだ？"},
					],
					[
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":"私が話しても誰も返事しない"},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":"…………"},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":"…………"},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":"…………"},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":"…………"},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":"だから黙ってなきゃ"},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":"…………"},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":"…………"},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":"…………"},
						{"chara": I, "exp": "kyoko-ura_reaction_01", "serif":"…………"},
					],
				]}

			],
			serif: [
				// マイクを持っているか否か
				{"type": "criteria_serif", "criteria": "useItem", "arguments": ["07"], "serifs": [
					[
						{"id": "chapter1_08-" + I + "-_useItem-07", "save": true},
						// 1-17
						{"chara": I, "exp": "kyoko-reaction_01", "serif":"............"},
						{"chara": I, "exp": "kyoko-reaction_02", "serif":"！！", "option": {
							"fontSize": 12,
						}},
						{"chara": "koishi",        "exp": "back", "serif":"えっなに？"},
						{"chara": I, "exp": "kyoko-reaction_03", "serif":"ごあいさつしていい？"},
						{"chara": "koishi",        "exp": "back", "serif":"なにが？"},
						{"chara": I, "exp": "kyoko-reaction_03", "serif":"ごあいさつ！"},
						{"chara": "koishi",        "exp": "back", "serif":"ごあいさつって？"},
						{"chara": "koishi",        "exp": "back", "serif":""},
						{"chara": I, "exp": "kyoko-reaction_04", "serif":"こ", "option": {
							"fontSize": 30,
						}},
						{"chara": I, "exp": "kyoko-reaction_04", "serif":"ん", "option": {
							"fontSize": 30,
						}},
						{"chara": I, "exp": "kyoko-reaction_04", "serif":"ち", "option": {
							"fontSize": 30,
						}},
						{"chara": I, "exp": "kyoko-reaction_04", "serif":"は～～～！", "option": {
							"fontSize": 30,
						}},
						{"chara": I, "exp": "kyoko-reaction_05", "serif":"先生は黙りなさいっていうの。\nしゃべっていいんでしょ？"},
						{"chara": "koishi",        "exp": "back", "serif":"しゃべっちゃだめだったの？"},
						{"chara": I, "exp": "kyoko-reaction_06", "serif":"ううん！先生いないから！"},
						{"chara": I, "exp": "kyoko-reaction_06", "serif":"先生いなくてもだまってたんだ"},
						{"chara": I, "exp": "kyoko-reaction_06", "serif":"みんながうるさいっていうから"},
						{"chara": I, "exp": "kyoko-reaction_06", "serif":"おしゃべりたのしいよね！"},
						{"chara": I, "exp": "kyoko-reaction_06", "serif":"まえはおしゃべりしてくれるひと\nたくさんいたのにね！"},
						{"chara": I, "exp": "kyoko-reaction_06", "serif":"あっはっはっは", "option":{
							"fontSize": 30,
							"fontName": "ＭＳ Ｐ明朝",
						}},
					],
					[
						{"type": "criteria_serif", "criteria": "useItem", "arguments": ["09"], "serifs": [
							[
								{"id": "chapter1_08-" + I + "-_useItem-09", "save": true},
								{"chara": I, "exp": "kyoko-reaction_05", "serif":"うわ！"},
								{"chara": I, "exp": "kyoko-reaction_06", "serif":"これ飛ぶ奴だよね！"},
								{"chara": I, "exp": "kyoko-reaction_07", "serif":"わーっ......"},
								{"chara": I, "exp": "kyoko-reaction_07", "serif":"これどこまで飛ぶかなあ"},
								{"chara": I, "exp": "kyoko-reaction_07", "serif":"やってみようよ", "option": {
									"showPicture": "picture_play_for_chapter1-08",
								}},
							],
							[
								{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_08-" + I + "-_useItem-09"], "serifs": [
									[
										{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter1_08-" + I + "limit-01", 1], "serifs": [
											[
												{"chara": I, "exp": "kyoko-reaction_03", "serif":"え？"},
												{"chara": I, "exp": "kyoko-reaction_03", "serif":"わたしあの子のことあんまり知らない"},
												{"chara": I, "exp": "kyoko-reaction_03", "serif":"だっていっつも怒ってるから"},
											],
											[
												{"id": "chapter1_08-" + I + "-talk01", "save": true},
												{"chara": "koishi",        "exp": "back", "serif":"ひつみきちってしってる？"},
												{"chara": I, "exp": "kyoko-reaction_02", "serif":"知ってるよ！"},
												{"chara": I, "exp": "kyoko-reaction_02", "serif":"あのね！"},
												{"chara": I, "exp": "kyoko-reaction_01", "serif":"あーでもこれ秘密だった"},
												{"chara": I, "exp": "kyoko-reaction_01", "serif":"秘密基地だから……"},
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
														{"chara": "koishi",        "exp": "back", "serif":"ねえ、なにしてるの？"},
														{"chara": I, "exp": "kyoko-reaction_03", "serif":"えー？"},
														{"chara": I, "exp": "kyoko-reaction_03", "serif":"えっとねー"},
														{"chara": I, "exp": "kyoko-reaction_03", "serif":"先生がやりなさいって言ったやつ！"},
														{"chara": I, "exp": "kyoko-reaction_02", "serif":"わたしたちけんかいっつもするの！"},
														{"chara": I, "exp": "kyoko-reaction_02", "serif":"だから先生がみんなで遊べるからって言ったの"},
														{"chara": I, "exp": "kyoko-wait", "serif":"これだったらいいんだって！"},
														{"chara": "koishi",        "exp": "back", "serif":"楽しいの？"},
														{"chara": I, "exp": "kyoko-wait", "serif":"そんなにたのしくないよ！"},
														{"chara": I, "exp": "kyoko-wait", "serif":"でもみんなこれしかやらないから"},
														{"chara": I, "exp": "kyoko-reaction_03", "serif":"わたしはおしゃべり禁止だし……"},
														{"chara": I, "exp": "kyoko-reaction_01", "serif":"だれもおしゃべりしてくれないから……"},
													],
													[
														{"chara": I, "exp": "kyoko-reaction_03", "serif":"むかしね、みんなあかちゃんだったでしょ！"},
														{"chara": "koishi",        "exp": "back", "serif":"そうなの？"},
														{"chara": I, "exp": "kyoko-reaction_03", "serif":"あかちゃんはいいよねー\nしゃべったら\nほめてくれるんだもん！"},
														{"chara": I, "exp": "kyoko-reaction_02", "serif":"ねえねえ、空の上には極楽があるって\n先生はいうんだけどさあ！"},
														{"chara": "koishi",        "exp": "back", "serif":"うん"},
														{"chara": I, "exp": "kyoko-reaction_02", "serif":"ぜったいうそだよねー！"},
														{"chara": I, "exp": "kyoko-reaction_02", "serif":"だってみえないんだもん"},
														{"chara": I, "exp": "kyoko-reaction_02", "serif":"お空に飛べたらぶつかっちゃうしね"},
													],
												]},
											],
											// マイクを使用するまえ
											[
												// 1-16
												{"chara": I, "exp": "kyoko-reaction_01", "serif":"............"},
												{"chara": "koishi",        "exp": "back", "serif":"あなた、どうしておくちがあかないの？"},
												{"chara": I, "exp": "kyoko-reaction_01", "serif":"............"},
												{"chara": "koishi",        "exp": "back", "serif":"............"},
												{"chara": "koishi",        "exp": "back", "serif":"ねえ、あそばないの？"},
												{"chara": I, "exp": "kyoko-reaction_01", "serif":"............"},
												{"chara": "koishi",        "exp": "back", "serif":"ねえ？"},
												{"chara": I, "exp": "kyoko-reaction_01", "serif":"............"},
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

			action_name: null,
			sound_name: null,
		},

	]
};

