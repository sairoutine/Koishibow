'use strict';
//橋の下
var CONSTANT = require("../../../constant");
var I = 0;
var _ = require('i18n4v')
var CHARAS_SERIF_1 = [
	{"chara": "itirin", "exp": "cp2_itirin-reaction_01", "serif": _("こんにちは！")},
	{"chara": "koishi", "exp": "wave_yes", serif1: _("うん"), serif2: _("こんにちは"), serif3: _("こんにちは"), serif4: _("こんにちは")},
	{"chara": "koishi", "exp": "wave_look_front", serif1: _("あそんでるの？"), serif2: _("なにしてあそんでるの？"), serif3: _("なにしてあそんでるの？"), serif4: _("なにしてあそんでるの？")},
	{"chara": "murasa", "exp": "cp2_murasa-reaction_01", "serif": _("水遊びよ")},
	{"chara": "kogasa", "exp": "cp2_kogasa-reaction_01", "serif": _("水遊び！")},
	{"chara": "kogasa", "exp": "cp2_kogasa-reaction_01", "serif": _("うふふ")},
	{"chara": "koishi", "exp": "wave_look_front", serif1: _("わーい"), serif2: _("たのしそう!"), serif3: _("たのしそう!"), serif4: _("たのしそう!")},
	{"chara": "koishi", "exp": null, serif1: _("わたしもはいる！"), serif2: _("私も入っていい？"), serif3: _("私も入っていい？"), serif4: _("私も入っていい？")},
	{"chara": "itirin", "exp": "cp2_itirin-reaction_02", "serif": _("そのこだあれ？")},
	{"chara": "koishi", "exp": null, serif1: _("ふつうのこ！"), serif2: _("ふつうのこ！"), serif3: _("ふつうのこ！"), serif4: _("ふつうのこ！")},
	{"chara": "itirin", "exp": "cp2_itirin-reaction_03", "serif": _("へんなこだー")},
	{"chara": "itirin", "exp": "cp2_itirin-reaction_04", "serif": _("あのこほどじゃないけど")},
	{"chara": "koishi", "exp": "wave_look_top", serif1: _("あのこって？"), serif2: _("あのこって？"), serif3: _("あのこって？"), serif4: _("あのこって？"), "option": {"playEventMovie": "chapter2_09-event-01"}},
];

var CHARAS_SERIF_2 = [
	{"id": "chapter2_09-20200", "save": true},
	{"chara": "koishi", "exp": "wave_look_top", serif1: _("さっきの石なに？"), serif2: _("さっきの石なに？"), serif3: _("さっきの石なに？"), serif4: _("さっきの石なに？")},
	{"chara": "murasa", "exp": "cp2_murasa-reaction_01", "serif": _("へんなこが石を投げてくるの")},
	{"chara": "koishi", "exp": "wave_look_top", serif1: _("やだな"), serif2: _("あぶないじゃない"), serif3: _("あぶないじゃない"), serif4: _("あぶないじゃない")},
	{"chara": "itirin", "exp": "cp2_itirin-reaction_01-reaction_01", "serif": _("そう危ないの")},
	{"chara": "murasa", "exp": "cp2_murasa-reaction_01", "serif": _("あのこは本当にヘン")},
	{"chara": "itirin", "exp": "cp2_itirin-reaction_01", "serif": _("あの子はヘンじゃなくてェ")},
	{"chara": "itirin", "exp": "cp2_itirin-reaction_03", "serif": _("アブないって言うんだよ")},
	{"chara": "kogasa", "exp": "cp2_kogasa-reaction_02", "serif": _("ほっときましょ！")},
];




module.exports = {
	key: "chapter2_09",
	chapter: 2,
	bgm: "field15",
	rightStartPosition:   null,
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 750, y: 480, isTowardLeft: true},
	upStartPosition:      null,
	downStartPosition:    {x: 750, y: 480},
	rightField: null,
	leftField: "chapter2_08",
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter2_09_20170"], "process": [
			// 1.すでにアクセス済み
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter2_12_20480"], "process": [
					// 2.緑の犬にオフィーリアを使用後の場合
					[
						{"type": "criteria", "value": "isPlayed", "arguments": ["chapter2_09_20500"], "process": [
							// 3.ほしいもののセリフ再生後
							[
								{"type": "criteria", "value": "isPlayed", "arguments": ["chapter2_13_20560"], "process": [
									// 4.裏の小傘と2-13で会話後
									[
										{"type": "process", "value": "playTalk", "arguments": [
											[
												{"chara": "koishi", "exp": "wave_look_top", serif1: _("わたし"), serif2: _("わたし"), serif3: _("わたし"), serif4: _("わたし")},
												{"chara": "koishi", "exp": null, serif1: _("わたしもほしいな……"), serif2: _("わたしもほしいな……"), serif3: _("わたしもほしいな……"), serif4: _("わたしもほしいな……")},
												{"chara": "koishi", "exp": "wave_yes", serif1: _("ともだち"), serif2: _("ともだち"), serif3: _("ともだち"), serif4: _("ともだち")},
												{"chara": "koishi", "exp": null, serif1: _("ともだちができたら"), serif2: _("ともだちができたら"), serif3: _("ともだちができたら"), serif4: _("ともだちができたら")},
												{"chara": "koishi", "exp": "wave_look_top", serif1: _("いろんなことができる"), serif2: _("いろんなことができる"), serif3: _("いろんなことができる"), serif4: _("いろんなことができる")},
												{"chara": "koishi", "exp": "wave_yes", serif1: _("いっしょに"), serif2: _("いっしょに"), serif3: _("いっしょに"), serif4: _("いっしょに")},
											]
										]},
										{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter2_09_20581"]}
									],
									// 4.裏の小傘と2-13で会話前
									[
									],
								]},
							],
							// 3.ほしいもののセリフ再生前
							[
								{"type": "process", "value": "playTalk", "arguments": [
									[
										{"chara": "koishi", "exp": "wave_look_top", serif1: _("うーんと"), serif2: _("うーんと"), serif3: _("うーんと"), serif4: _("うーんと")},
										{"chara": "koishi", "exp": null, serif1: _("わたしがほしいものか"), serif2: _("わたしがほしいものか"), serif3: _("わたしがほしいものか"), serif4: _("わたしがほしいものか")},
										{"chara": "koishi", "exp": null, serif1: _("なんでもほしいけどな"), serif2: _("なんでもほしいけどな"), serif3: _("なんでもほしいけどな"), serif4: _("なんでもほしいけどな")},
										{"chara": "koishi", "exp": "wave_look_top", serif1: _("みんなはどうかな"), serif2: _("みんなはどうかな"), serif3: _("みんなはどうかな"), serif4: _("みんなはどうかな")},
									]
								]},
								{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter2_09_20500"]}
							],
						]},
					],
					// 2.緑の犬にオフィーリアを使用前の場合
					[
					],
				]},
			],
			// 1.まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "wave_look_front", serif1: _("あー！"), serif2: _("あー！"), serif3: _("あー！"), serif4: _("あー！")},
						{"chara": "koishi", "exp": null, serif1: _("こどもだ！"), serif2: _("こどもだ！"), serif3: _("こどもだ！"), serif4: _("こどもだ！")},
						{"chara": "murasa", "exp": "cp2_murasa-reaction_01", "serif": _("あ！へんなこ！")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter2_09_20170"]}
			],
		]},
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter2-09-bg-01_anime_1",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "はしご",
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2_09-20250"], "serifs": [
					// 2回目以降にはしごを使うとき
					[
						{"chara": "koishi", "serif": "", "option": {"changeField": "chapter2_10"}},
					],
					// 1回目にはしごを使うとき
					[
						{"chara": "koishi", "exp": "wave_look_top", serif1: _("うえにいける"), serif2: _("うえにいける"), serif3: _("うえにいける"), serif4: _("うえにいける")},
						{"chara": "kogasa", "exp": null, "serif": _("上へ行くの？")},
						{"chara": "itirin", "exp": "cp2_itirin-reaction_02", "serif": _("アブないよお")},
						{"chara": "koishi", "exp": null, serif1: _("んー"), serif2: _("んー"), serif3: _("んー"), serif4: _("んー")},
						{"chara": "koishi", "exp": "wave_yes", serif1: _("でもいく"), serif2: _("でもいく"), serif3: _("でもいく"), serif4: _("でもいく")},
						{"chara": "murasa", "exp": "cp2_murasa-reaction_01", "serif": _("やっぱり変な子")},
					],
				]}
			],
			x: 900,
			y: 300,
			width: 200,
			height: 550,

			action_name: null,
			sound_name: "chapter2-09-climb_ladder",

			show_if_event_true: "chapter2_09-20200",
		},
		{
			no: "murasa",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "村紗",
			loop: true,
			turn_not_toward_me: true,
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2_12_20480"], "serifs": [
					// 緑の犬にオフィーリアを使用後の場合
					[
						{"chara": "murasa", "exp": "cp2_murasa-ura_wait", "serif": _("もしもボートがあったら……")},
						{"chara": "murasa", "exp": null, "serif": _("みんなで海に出て……")},
						{"chara": "murasa", "exp": "cp2_murasa-ura_reaction_01", "serif": _("海賊ごっこだ！")},
						{"chara": "murasa", "exp": null, "serif": _("たのしそー")},
					],
					// 緑の犬にオフィーリアを使用前の場合
					[
					],
				]},
			],
			serif: [
				{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter2_09-charas-limit", 3], "serifs": [
					CHARAS_SERIF_1,
					CHARAS_SERIF_2,
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2_12_20480"], "serifs": [
							// 緑の犬にオフィーリアを使用後の場合
							[
								{"chara": "koishi", "exp": "wave_look_front", serif1: _("ねえ欲しいものある？"), serif2: _("ねえ欲しいものある？"), serif3: _("ねえ欲しいものある？"), serif4: _("ねえ欲しいものある？")},
								{"chara": "murasa", "exp": "cp2_murasa-reaction_02", "serif": _("くれるの！")},
								{"chara": "koishi", "exp": null, serif1: _("あげないけど"), serif2: _("あげないけど"), serif3: _("あげないけど"), serif4: _("あげないけど")},
								{"chara": "murasa", "exp": "cp2_murasa-reaction_01", "serif": _("あっそ！")},
								{"chara": "koishi", "exp": "wave_look_front", serif1: _("言ってみてよう"), serif2: _("言ってみてよう"), serif3: _("言ってみてよう"), serif4: _("言ってみてよう")},
								{"chara": "murasa", "exp": "cp2_murasa-reaction_01", "serif": _("んー")},
								{"chara": "murasa", "exp": "cp2_murasa-reaction_02", "serif": _("ボートかな")},
								{"chara": "koishi", "exp": "wave_yes", serif1: _("ボートかー"), serif2: _("ボートかー"), serif3: _("ボートかー"), serif4: _("ボートかー")},
							],
							// 緑の犬にオフィーリアを使用前の場合
							[
								{"chara": "murasa", "exp": "cp2_murasa-reaction_01", "serif": _("わたし水は好きよ！")},
								{"chara": "murasa", "exp": null, "serif": _("冷たくて気持ちいいあたまのてっぺんまで浸かりたいわ")},
								{"chara": "koishi", "exp": "wave_yes", serif1: _("ねー"), serif2: _("ねー"), serif3: _("ねー"), serif4: _("ねー")},
							],
						]},
					],
				]}
			],
			x: 396*2/3, y: 541*2/3,
			scale: 2/3,
			anime1: "cp2_murasa-wait",
			anime2: null,
			anime3: null,
			anime4: "cp2_murasa-reverse_ura",
			anime5: "cp2_murasa-ura_wait",
			anime6: "cp2_murasa-reverse_omote",
			width: 150,

			action_name: null,
			sound_name: null,
		},
		{
			no: "kogasa",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "小傘",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: [
				{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter2_09-charas-limit", 3], "serifs": [
					CHARAS_SERIF_1,
					CHARAS_SERIF_2,
					[
						{"chara": "kogasa", "exp": "cp2_kogasa-reaction_02", "serif": _("わたし雨の日が好きなんだ")},
						{"chara": "kogasa", "exp": null, "serif": _("今日はあめじゃないからさ")},
						{"chara": "kogasa", "exp": "cp2_kogasa-reaction_01", "serif": _("代わりに川で遊ぶの")},
						{"chara": "kogasa", "exp": null, "serif": _("ウフフ")},
						{"chara": "kogasa", "exp": "cp2_kogasa-reaction_01", "serif": _("ちゃっぷちゃっぷ")},
						{"chara": "koishi", "exp": "wave_yes", serif1: _("いーなー"), serif2: _("いーなー"), serif3: _("いーなー"), serif4: _("いーなー")},
						{"chara": "koishi", "exp": "look_bottom", serif1: _("たのしそう!"), serif2: _("たのしそう!"), serif3: _("たのしそう!"), serif4: _("たのしそう!")},
						{"chara": "koishi", "exp": null, serif1: _("チャプチャプ!"), serif2: _("チャプチャプ!"), serif3: _("チャプチャプ!"), serif4: _("チャプチャプ!")},
					],
				]}
			],
			x: 737*2/3, y: 571*2/3,
			scale: 2/3,
			anime1: "cp2_kogasa-wait",
			anime2: null,
			anime3: null,
			anime4: "cp2_kogasa-reverse_ura",
			anime5: "cp2_kogasa-ura_wait",
			anime6: "cp2_kogasa-reverse_omote",
			width: 150,
			height: 295,

			action_name: null,
			sound_name: null,

			not_show_if_event_true: "chapter2_11-20400",
		},
		{
			no: "itirin",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "一輪",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2_12_20480"], "serifs": [
					// 緑の犬にオフィーリアを使用後の場合
					[
						{"id": "chapter2_09-20540", "save": true},
						{"chara": "itirin", "exp": "cp2_itirin-ura_reaction_02", "serif": _("もし筆があったら")},
						{"chara": "itirin", "exp": "cp2_itirin-ura_reaction_01", "serif": _("みんなで写経して……")},
						{"chara": "itirin", "exp": "cp2_itirin-ura_reaction_03", "serif": _("いいこちゃんになる！")},
					],
					// 緑の犬にオフィーリアを使用前の場合
					[
						{"chara": "itirin", "exp": "cp2_itirin-ura_reaction_01", "serif": _("いや！")},
						{"chara": "itirin", "exp": null, "serif": _("なんであの子と遊んじゃだめなの？")},
						{"chara": "itirin", "exp": "cp2_itirin-ura_reaction_02", "serif": _("わかんないよ！")},
						{"chara": "itirin", "exp": "cp2_itirin-ura_reaction_01", "serif": _("へんなこなんかじゃないよ！")},
						{"chara": "itirin", "exp": null, "serif": _("貧乏だったらなんでだめなの！？")},
						{"chara": "itirin", "exp": "cp2_itirin-ura_reaction_01", "serif": _("わかんない！")},
						{"chara": "itirin", "exp": "cp2_itirin-ura_reaction_01", "serif": _("わかんないよ！")},
					],
				]},

			],
			serif: [
				{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter2_09-charas-limit", 3], "serifs": [
					CHARAS_SERIF_1,
					CHARAS_SERIF_2,
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2_12_20480"], "serifs": [
							// 緑の犬にオフィーリアを使用後の場合
							[
								{"chara": "koishi", "exp": "wave_look_front", serif1: _("ねえ欲しいものある？"), serif2: _("あなたは何がほしいの？"), serif3: _("あなたは何がほしいの？"), serif4: _("あなたは何がほしいの？")},
								{"chara": "itirin", "exp": "cp2_itirin-reaction_03", "serif": _("ほしいものか！")},
								{"chara": "itirin", "exp": "cp2_itirin-reaction_02", "serif": _("そうだなあ")},
								{"chara": "itirin", "exp": "cp2_itirin-reaction_03", "serif": _("筆かな！")},
								{"chara": "koishi", "exp": "wave_look_front", serif1: _("なんで？"), serif2: _("なんで？"), serif3: _("なんで？"), serif4: _("なんで？")},
								{"chara": "itirin", "exp": "cp2_itirin-reaction_01", "serif": _("文字が書けるからね！")},
								{"chara": "koishi", "exp": "wave_look_top", serif1: _("へんなのー"), serif2: _("へんなのー"), serif3: _("へんなのー"), serif4: _("へんなのー")},
								{"chara": "itirin", "exp": "cp2_itirin-reaction_02", "serif": _("へんなんかじゃないもん")},
							],
							// 緑の犬にオフィーリアを使用前の場合
							[
								{"chara": "itirin", "exp": "cp2_itirin-reaction_02", "serif": _("あなたなにがすきなのー")},
								{"chara": "koishi", "exp": "wave_look_top", serif1: _("わたしはねー"), serif2: _("わたしはねー"), serif3: _("わたしはねー"), serif4: _("わたしはねー")},
								{"chara": "koishi", "exp": "wave_yes", serif1: _("わかんない"), serif2: _("こどもがすき！"), serif3: _("こどもがすき！"), serif4: _("こどもがすき！")},
								{"chara": "itirin", "exp": "cp2_itirin-reaction_03", "serif": _("へんなのー")},
							]
						]},
					],
				]}
			],
			x: 1063*2/3, y: 683*2/3,
			scale: 2/3,
			anime1: "cp2_itirin-wait",
			anime2: null,
			anime3: null,
			anime4: "cp2_itirin-reverse_ura",
			anime5: "cp2_itirin-ura_wait",
			anime6: "cp2_itirin-reverse_omote",
			width: 150,
			height: 240,

			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.JOURNAL_FRONT_TYPE,
			x: 870, y: 550,
			journal_id: "journal044",
		},

	],
};

