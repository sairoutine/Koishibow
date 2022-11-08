'use strict';
//橋の上
//2-9からは梯子に触れると移動（右から登場）できる
//左へ移動すると2-11へ
//・パルスィ（と緑犬）
//（パルスイの「……」はリアクションとして描画表現する）
//・積まれた石

var CONSTANT = require("../../../constant");
var I = 0;
var _ = require('i18n4v')

var SERIF_20340 = [
	//20340
	{"chara": "koishi", "exp": "3rdeye_look_front", serif1: _("ねえねえ"), serif2: _("ねえねえ"), serif3: _("ねえねえ"), serif4: _("ねえねえ")},
	{"chara": "koishi", "exp": null, serif1: _("あそぼ"), serif2: _("あーそびーましょ"), serif3: _("あーそびーましょ"), serif4: _("あーそびーましょ")},
	{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_01", "serif": _("いやーだ")},
	{"chara": "koishi", "exp": "3rdeye_look_front", serif1: _("なんで"), serif2: _("なんで"), serif3: _("なんで"), serif4: _("なんで")},
	{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_01", "serif": _("だって知らないこだもん")},
	{"chara": "koishi", "exp": "3rdeye_look_front", serif1: _("じゃあおしえてよ"), serif2: _("じゃあおしえてよ"), serif3: _("じゃあおしえてよ"), serif4: _("じゃあおしえてよ")},
	{"chara": "greendog", "exp": null, "serif": _("えっ")},
	{"chara": "greendog", "exp": null, "serif": _("……")},
	{"chara": "koishi", "exp": null, serif1: _("……"), serif2: _("……"), serif3: _("……"), serif4: _("……")},
	{"chara": "koishi", "exp": "3rdeye_look_top", serif1: _("何が好きなの"), serif2: _("何が好きなの"), serif3: _("何が好きなの"), serif4: _("何が好きなの")},
	{"chara": "greendog", "exp": "cp2_pars_greendog-ura_wait", "serif": _("フーーーーーン")},
	{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_03", "serif": _("それじゃあねえ！")},
	{"chara": "greendog", "exp": "cp2_pars_greendog-ura_wait", "serif": _("釘を取ってきてちょうだい")},
	{"chara": "koishi", "exp": "3rdeye_look_top", serif1: _("釘？"), serif2: _("釘？"), serif3: _("釘？"), serif4: _("釘？")},
	{"chara": "koishi", "exp": null, serif1: _("なんで？"), serif2: _("なんで？"), serif3: _("なんで？"), serif4: _("なんで？")},
	{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_02", "serif": _("何でもよ")},
	{"chara": "koishi", "exp": "3rdeye_look_top", serif1: _("釘が好きなの？"), serif2: _("釘が好きなの？"), serif3: _("釘が好きなの？"), serif4: _("釘が好きなの？")},
	{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_02", "serif": _("そうさ")},
	{"chara": "koishi", "exp": null, serif1: _("うーん"), serif2: _("うーん"), serif3: _("うーん"), serif4: _("うーん")},
	{"chara": "koishi", "exp": "3rdeye_yes", serif1: _("わかった"), serif2: _("わかった"), serif3: _("わかった"), serif4: _("わかった")},

];

module.exports = {
	key: "chapter2_10",
	chapter: 2,
	bgm: "field15",
	rightStartPosition:   null,
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 690, y: 380, isTowardLeft: true},
	upStartPosition:    null,
	downStartPosition:  {x: 690, y: 380},
	rightField: null,
	leftField: "chapter2_11",
	upField: null,
	downField: "chapter2_09",
	background: "chapter2-10-bg-001",
	walkSound: "walking_bare_outside",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter2_10-20260"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_front", serif1: _("うわ"), serif2: _("うわ"), serif3: _("うわ"), serif4: _("うわ")},
						{"chara": "koishi", "exp": "yes", serif1: _("あのこがはんにんね"), serif2: _("あのこだわ"), serif3: _("あのこだわ"), serif4: _("あのこだわ")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter2_10-20260"]}
			],
		]},

	],
	objects: [
		{
			no: ++I,
			image: "chapter2-10-obj-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "柵",
			serif: null,
			x:720*2/3, y:997*2/3,
			scale: 2/3,
			action_name: null,
			height: 0,
			position_type: "front",
		},
		{
			no: "pars",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "パルスィ",
			loop: true,
			turn_not_toward_me: true,
			serif_back: null,
			serif: [
				{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter2_10-pars-limit", 1], "serifs": [
					// 最初に喋りかけたとき
					[
						//20270
						{"chara": "koishi", "exp": "look_front", serif1: _("ねえねえ"), serif2: _("ねえねえ"), serif3: _("ねえねえ"), serif4: _("ねえねえ")},
						{"chara": "pars", "exp": "cp2_pars-reaction_03", "serif": _("…………")},
						{"chara": "koishi", "exp": "look_front", serif1: _("ねえってば"), serif2: _("ねえってば"), serif3: _("ねえってば"), serif4: _("ねえってば")},
						{"chara": "pars", "exp": null, "serif": _("…………")},
						{"chara": "koishi", "exp": "look_front", serif1: _("ねーえ"), serif2: _("ねーえ"), serif3: _("ねーえ"), serif4: _("ねーえ")},
						{"chara": "pars", "exp": "cp2_pars-reaction_01", "serif": _("うるさい！")},
						{"chara": "pars", "exp": null, "serif": _("話しかけるな")},
					],
					// 2回目以降
					[

						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2_10-20480"], "serifs": [
							// 緑の犬にオフィーリアを使用した後
							[

								{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2_09-20581"], "serifs": [
									[
										//20590
										{"chara": "koishi", "exp": "look_front", serif1: _("いた！"), serif2: _("いた！"), serif3: _("いた！"), serif4: _("いた！")},
										{"chara": "koishi", "exp": null, serif1: _("ねえねえ"), serif2: _("ねえねえ"), serif3: _("ねえねえ"), serif4: _("ねえねえ")},
										{"chara": "pars", "exp": "cp2_pars-wait", "serif": _("あ……")},
										{"chara": "pars", "exp": "cp2_pars-reaction_03", "serif": _("……なに")},
										{"chara": "koishi", "exp": "touch", serif1: _("これ"), serif2: _("これ"), serif3: _("これ"), serif4: _("これ"), "option": {"playEvent": "chapter2-10-event-02"}},
									],
									[
										//20490
										{"chara": "pars", "exp": "cp2_pars-wait", "serif": _("あの……")},
										{"chara": "pars", "exp": null, "serif": _("ありがとう……")},
										{"chara": "koishi", "exp": "yes", serif1: _("いいよ！"), serif2: _("いいよ！"), serif3: _("いいよ！"), serif4: _("いいよ！")},
										{"chara": "koishi", "exp": "yes", serif1: _("えへへ"), serif2: _("えへへ"), serif3: _("えへへ"), serif4: _("えへへ")},
									],
								]},
							],
							// 緑の犬にオフィーリアを使用する前
							[
								{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["39"], "serifs": [
									// 釘を持っている
									[
										//20390
										{"chara": "pars", "exp": "cp2_pars-reaction_03", "serif": _("......")},
										{"chara": "koishi", "exp": "look_front", serif1: _("あの……"), serif2: _("あの……"), serif3: _("あの……"), serif4: _("あの……")},
										{"chara": "koishi", "exp": "yes", serif1: _("釘持ってきた"), serif2: _("釘持ってきたんですけど！"), serif3: _("釘持ってきたんですけど！"), serif4: _("釘持ってきたんですけど！")},
										{"chara": "pars", "exp": "cp2_pars-reaction_03", "serif": _("……")},
									],
									// 釘を持っていない
									[
										{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2_10-20400"], "serifs": [
											// 緑の犬に釘を使用した後
											[
												//20410
												{"chara": "pars", "exp": "cp2_pars-reaction_03", "serif": _("あ……")},
											],
											// 緑の犬に釘を使用する前
											[
												//20280
												{"chara": "koishi", "exp": "look_front", serif1: _("ねーえ"), serif2: _("ねーえ"), serif3: _("ねーえ"), serif4: _("ねーえ")},
												{"chara": "pars", "exp": "cp2_pars-wait", "serif": _("なんだ！")},
												{"chara": "koishi", "exp": "look_front", serif1: _("なんで石投げるの"), serif2: _("なんで石投げるの"), serif3: _("なんで石投げるの"), serif4: _("なんで石投げるの")},
												{"chara": "pars", "exp": "cp2_pars-reaction_02", "serif": _("うるさい！")},
												{"chara": "koishi", "exp": null, serif1: _("…………"), serif2: _("…………"), serif3: _("…………"), serif4: _("…………")},
												{"chara": "pars", "exp": null, "serif": _("どうせおまえも同じだ")},
												{"chara": "pars", "exp": null, "serif": _("本当は悪口ばっかり")},
												{"chara": "pars", "exp": null, "serif": _("いい子に思われたいから仲良くするのね")},
												{"chara": "pars", "exp": "cp2_pars-reaction_01", "serif": _("私に関わらないで")},
											],
										]},
									],
								]},
							],
						]},

					],
				]},
			],
			x: 396*2/3, y: 541*2/3,
			scale: 2/3,
			anime1: "cp2_pars-wait",
			anime2: null,
			anime3: null,
			anime4: "cp2_pars-reverse_ura",
			anime5: "cp2_pars-ura_wait",
			anime6: "cp2_pars-reverse_omote",
			width: 150,

			action_name: null,
			sound_name: null,
		},
		{
			no: "greendog",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "緑の犬",
			loop: true,
			turn_not_toward_me: true,
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2_08-20440"], "serifs": [
					// オフィーリアを持っていれば
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2_10-20480"], "serifs": [
							// 2回目以降
							[
								{"chara": "greendog", "exp": null, "serif": _("じゃあー")},
								{"chara": "greendog", "exp": null, "serif": _("なぞなぞね！")},
								{"chara": "koishi", "exp": "3rdeye_look_front", serif1: _("なぞなぞ？"), serif2: _("なぞなぞ？"), serif3: _("なぞなぞ？"), serif4: _("なぞなぞ？")},
								{"chara": "greendog", "exp": null, "serif": _("あなたがー")},
								{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_02", "serif": _("ほしいもの！")},
								{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_03", "serif": _("を見せてほしい")},
								{"chara": "koishi", "exp": "3rdeye_look_bottom", serif1: _("わかんない"), serif2: _("むずかしいなー"), serif3: _("むずかしいなー"), serif4: _("むずかしいなー")},
								{"chara": "koishi", "exp": null, serif1: _("どうしよう"), serif2: _("どうしよう"), serif3: _("どうしよう"), serif4: _("どうしよう")},
							],
							[
								//20480
								{"id": "chapter2_10-20480", "save": true},
								{"chara": "koishi", "exp": "3rdeye_look_front", serif1: _("これみて"), serif2: _("じゃーん！"), serif3: _("じゃーん！"), serif4: _("じゃーん！"), "option": {"useItem": "38"}},
								{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_02", "serif": _("ワ！")},
								{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_02", "serif": _("かわいいね！")},
								{"chara": "koishi", "exp": "3rdeye_yes", serif1: _("かわいーねー"), serif2: _("かわいーねー"), serif3: _("かわいーねー"), serif4: _("かわいーねー")},
								{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_05", "serif": _("えへへ")},
								{"chara": "koishi", "exp": "3rdeye_yes", serif1: _("えへへ"), serif2: _("えへへ"), serif3: _("えへへ"), serif4: _("えへへ")},
								{"chara": "koishi", "exp": "3rdeye_yes", serif1: _("ねえねえねえねえ"), serif2: _("ねえねえねえねえ"), serif3: _("ねえねえねえねえ"), serif4: _("ねえねえねえねえ")},
								{"chara": "greendog", "exp": null, "serif": _("んー？")},
								{"chara": "koishi", "exp": "3rdeye_yes", serif1: _("ほかにもとってきてあげようか"), serif2: _("ほかにもとってきてあげようか"), serif3: _("ほかにもとってきてあげようか"), serif4: _("ほかにもとってきてあげようか")},
								{"chara": "greendog", "exp": null, "serif": _("ほんとう！")},
								{"chara": "greendog", "exp": null, "serif": _("うれしい")},
								{"chara": "koishi", "exp": "3rdeye_yes", serif1: _("わたしはこびやさん……"), serif2: _("わたしはこびやさん……"), serif3: _("わたしはこびやさん……"), serif4: _("わたしはこびやさん……")},
								{"chara": "koishi", "exp": null, serif1: _("はこびやだから！"), serif2: _("はこびやだから！"), serif3: _("はこびやだから！"), serif4: _("はこびやだから！")},
								{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_02", "serif": _("えー")},
								{"chara": "greendog", "exp": null, "serif": _("じゃあー")},
								{"chara": "greendog", "exp": null, "serif": _("なぞなぞね！")},
								{"chara": "koishi", "exp": "3rdeye_look_front", serif1: _("なぞなぞ？"), serif2: _("なぞなぞ？"), serif3: _("なぞなぞ？"), serif4: _("なぞなぞ？")},
								{"chara": "greendog", "exp": null, "serif": _("あなたがー")},
								{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_02", "serif": _("ほしいもの！")},
								{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_03", "serif": _("を見せてほしい")},
								{"chara": "koishi", "exp": "3rdeye_look_bottom", serif1: _("わかんない"), serif2: _("むずかしいなー"), serif3: _("むずかしいなー"), serif4: _("むずかしいなー")},
								{"chara": "koishi", "exp": null, serif1: _("どうしよう"), serif2: _("どうしよう"), serif3: _("どうしよう"), serif4: _("どうしよう")},
							],
						]},

					],
					// オフィーリアを持っていなければ
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2_11-20370"], "serifs": [
							// 釘を獲得済ならば
							[
								{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2_10-20400"], "serifs": [
									// 2回目以降
									[
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_wait", "serif": _("次はー")},
										{"chara": "greendog", "exp": null, "serif": _("そうだなー")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_02", "serif": _("かわいいもの")},
										{"chara": "greendog", "exp": null, "serif": _("がほしいな！")},
										{"chara": "koishi", "exp": "look_top", serif1: _("かわいいものってどんなの"), serif2: _("かわいいものってどんなの"), serif3: _("かわいいものってどんなの"), serif4: _("かわいいものってどんなの")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_wait", "serif": _("それは自分で考えなさいよ")},
										{"chara": "koishi", "exp": "look_bottom", serif1: _("ええー"), serif2: _("ええー"), serif3: _("ええー"), serif4: _("ええー")},
										{"chara": "koishi", "exp": null, serif1: _("まいっちゃったな"), serif2: _("まいっちゃったな"), serif3: _("まいっちゃったな"), serif4: _("まいっちゃったな")},
									],

									// 1回目
									[
										{"id": "chapter2_10-20400", "save": true},
										{"chara": "koishi", "exp": "yes", serif1: _("ほら釘！"), serif2: _("ほら釘！"), serif3: _("ほら釘！"), serif4: _("ほら釘！"), "option": {"useItem": "39"}},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_02", "serif": _("オオ")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_04", "serif": _("やるじゃないの")},
										{"chara": "koishi", "exp": "look_front", serif1: _("うわー"), serif2: _("うわー"), serif3: _("うわー"), serif4: _("うわー")},
										{"chara": "koishi", "exp": null, serif1: _("いたそう"), serif2: _("いたくないの"), serif3: _("いたくないの"), serif4: _("いたくないの")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_02", "serif": _("わたしはこれがすきなの")},
										{"chara": "koishi", "exp": null, serif1: _("わたしはそういうのだったら"), serif2: _("わたしはそういうのだったら"), serif3: _("わたしはそういうのだったら"), serif4: _("わたしはそういうのだったら")},
										{"chara": "koishi", "exp": "yes", serif1: _("斧"), serif2: _("斧が好きかな"), serif3: _("斧が好きかな"), serif4: _("斧が好きかな")},
										{"chara": "koishi", "exp": "look_front", serif1: _("で？"), serif2: _("で？"), serif3: _("で？"), serif4: _("で？")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_wait", "serif": _("は？")},
										{"chara": "koishi", "exp": "yes", serif1: _("友達でしょ"), serif2: _("これで友達でしょ"), serif3: _("これで友達でしょ"), serif4: _("これで友達でしょ")},
										{"chara": "koishi", "exp": "yes", serif1: _("お手伝いしたもん"), serif2: _("お手伝いしたから"), serif3: _("お手伝いしたから"), serif4: _("お手伝いしたから")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_01", "serif": _("そんな約束してないだろ！")},
										{"chara": "koishi", "exp": "look_bottom", serif1: _("えー"), serif2: _("えー"), serif3: _("えー"), serif4: _("えー")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_wait", "serif": _("次はー")},
										{"chara": "greendog", "exp": null, "serif": _("そうだなー")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_02", "serif": _("かわいいもの")},
										{"chara": "greendog", "exp": null, "serif": _("がほしいな！")},
										{"chara": "koishi", "exp": "look_top", serif1: _("かわいいものってどんなの"), serif2: _("かわいいものってどんなの"), serif3: _("かわいいものってどんなの"), serif4: _("かわいいものってどんなの")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_wait", "serif": _("それは自分で考えなさいよ")},
										{"chara": "koishi", "exp": "look_bottom", serif1: _("ええー"), serif2: _("ええー"), serif3: _("ええー"), serif4: _("ええー")},
										{"chara": "koishi", "exp": null, serif1: _("まいっちゃったな"), serif2: _("まいっちゃったな"), serif3: _("まいっちゃったな"), serif4: _("まいっちゃったな")},
									],
								]},
							],
							// 釘を未獲得ならば
							[
								//20290
								//
								{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter2_10-greendog-limit", 1], "serifs": [
									[
										// 1回目
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_wait", "serif": _("なんだ！")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_01", "serif": _("おいおいおいおい")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_01", "serif": _("おまえ～！")},
										{"chara": "greendog", "exp": null, "serif": _("へんなやつだな！")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_02", "serif": _("ハハハ")},
										{"chara": "greendog", "exp": null, "serif": _("なにしてんだ")},
										{"chara": "koishi", "exp": "3rdeye_look_bottom", serif1: _("えーっと"), serif2: _("えーっと"), serif3: _("えーっと"), serif4: _("えーっと")},
										{"chara": "koishi", "exp": null, serif1: _("遊ぼうかなって"), serif2: _("遊ぼうかなって"), serif3: _("遊ぼうかなって"), serif4: _("遊ぼうかなって")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_01", "serif": _("私と？")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_03", "serif": _("へーえ")},
										{"chara": "greendog", "exp": null, "serif": _("たのしいのか？")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_wait", "serif": _("私はおまえと遊んで")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_03", "serif": _("おまえが私と遊んで")},
										{"chara": "koishi", "exp": "3rdeye_yes", serif1: _("たのしいよ！"), serif2: _("たのしいよ！"), serif3: _("たのしいよ！"), serif4: _("たのしいよ！")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_03", "serif": _("どうなんだろうな～～")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_02", "serif": _("私のこと何も知らないくせに")},
										{"chara": "koishi", "exp": null, serif1: _("…………"), serif2: _("…………"), serif3: _("…………"), serif4: _("…………")},
										{"chara": "koishi", "exp": "3rdeye_look_bottom", serif1: _("知らないけど"), serif2: _("知らないけど"), serif3: _("知らないけど"), serif4: _("知らないけど")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_02", "serif": _("ほらな～～")},
										{"chara": "greendog", "exp": "cp2_pars_greendog-ura_reaction_01", "serif": _("失せな"), "option": {"playEvent": "chapter2-04-event-01"}},
										{"chara": "koishi","serif":"", "junction": [_("会わなかったことにする"), _("勇気を出す")]},
										{"type": "junction_serif", "serifs": [
											//会わなかったことにする を選択
											[
												{"chara": "koishi", "serif": "", "option": {"playEvent": "chapter2-10-event-01"}},
											],
											//勇気を出す を選択
											SERIF_20340,
										]},
									],
									// 2回目以降
									SERIF_20340,
								]}
							],
						]},
					],
				]},
			],
			serif: null,
			x: 556*2/3, y: 601*2/3,
			scale: 2/3,
			anime1: "cp2_pars_greendog-wait",
			anime2: null,
			anime3: null,
			anime4: "cp2_pars_greendog-reverse_ura",
			anime5: "cp2_pars_greendog-ura_wait",
			anime6: "cp2_pars_greendog-reverse_omote",
			width: 100,

			action_name: null,
			sound_name: null,
			sound_back: "chapter2-10-bark"
		},



	],
};

