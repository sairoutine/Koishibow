'use strict';
// 1-8と同様
var CONSTANT = require("../../../constant");
var I = 0;
var _ = require('i18n4v')
module.exports = {
	key: "chapter2_13",
	chapter: 2,
	bgm: "field4",
	rightStartPosition:   {x: 830, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter2_12",
	leftField: "chapter2_14",
	upField: null,
	downField: null,
	background: "chapter1-08-bg-001",
	walkSound: "walking_bare_outside",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter2_10-20400"], "process": [
			// 1.小傘が存在する
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter2_09-20540"], "process": [
					// 2. 20540を再生済
					[
						{"type": "criteria", "value": "isPlayed", "arguments": ["chapter2_13-20570"], "process": [
							// 3.セリフ再生済
							[
							],
							// 3.セリフ未再生
							[
								{"type": "process", "value": "playTalk", "arguments": [
									[
										{"chara": "koishi", "exp": "yes", serif1: _("わたし"), serif2: _("わたし"), serif3: _("わたし"), serif4: _("わたし")},
										{"chara": "koishi", "exp": "look_top", serif1: _("わたしもほしいな……"), serif2: _("わたしもほしいな……"), serif3: _("わたしもほしいな……"), serif4: _("わたしもほしいな……")},
										{"chara": "koishi", "exp": null, serif1: _("ともだち"), serif2: _("ともだち"), serif3: _("ともだち"), serif4: _("ともだち")},
										{"chara": "koishi", "exp": null, serif1: _("ともだちができたら"), serif2: _("ともだちができたら"), serif3: _("ともだちができたら"), serif4: _("ともだちができたら")},
										{"chara": "koishi", "exp": "yes", serif1: _("いろんなことができる"), serif2: _("いろんなことができる"), serif3: _("いろんなことができる"), serif4: _("いろんなことができる")},
										{"chara": "koishi", "exp": "yes", serif1: _("いっしょに"), serif2: _("いっしょに"), serif3: _("いっしょに"), serif4: _("いっしょに")},
									]
								]},
								{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter2_13-20570"]},
								{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter2_09-20581"]},
							],
						]},
					],
					// 2. 20540を再生前
					[
					],
				]},
			],
			// 1.小傘が存在しない
			[
			],
		]},

	],
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
			no: "kogasa",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "小傘",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2_10-20480"], "serifs": [
					// 緑の犬にオフィーリアを使用後の場合
					[
						{"id": "chapter2_13-20560", "save": true},
						{"chara": "kogasa", "exp": "cp2_kogasa-reaction_01", "serif": _("わたしはファンがほしい！")},
						{"chara": "kogasa", "exp": "cp2_kogasa-reaction_02", "serif": _("わたしはわたしがすきなひとがほしい")},
						{"chara": "kogasa", "exp": "cp2_kogasa-reaction_01", "serif": _("そういうの、きっと友達って言うんだわ")},
					],
					// 緑の犬にオフィーリアを使用前の場合
					[
						{"chara": "kogasa", "exp": "cp2_kogasa-ura_reaction_01", "serif": _("私がいっちばんかわいい！")},
						{"chara": "kogasa", "exp": "cp2_kogasa-ura_reaction_02", "serif": _("私のお人形がほしいわ")},
					],

				]},
			],
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2_10-20480"], "serifs": [
					// 緑の犬にオフィーリアを使用後の場合
					[
						{"chara": "koishi", "exp": "look_front", serif1: _("ねえ欲しいものある？"), serif2: _("あなたは何がほしいの？"), serif3: _("あなたは何がほしいの？"), serif4: _("あなたは何がほしいの？")},
						{"chara": "kogasa", "exp": "cp2_kogasa-reaction_02", "serif": _("うふふ")},
						{"chara": "kogasa", "exp": null, "serif": _("私は何もほしくないわ")},
						{"chara": "kogasa", "exp": "cp2_kogasa-reaction_02", "serif": _("みんなが私をほしがるわ")},
						{"chara": "koishi", "exp": "look_front", serif1: _("あー"), serif2: _("あー"), serif3: _("あー"), serif4: _("あー")},
						{"chara": "koishi", "exp": "look_top", serif1: _("そうか"), serif2: _("そうか"), serif3: _("そうか"), serif4: _("そうか")},
						{"chara": "koishi", "exp": "look_bottom", serif1: _("そういうのじゃなく"), serif2: _("そういうのじゃなくて"), serif3: _("そういうのじゃなくて"), serif4: _("そういうのじゃなくて")},
						{"chara": "koishi", "exp": null, serif1: _("あー"), serif2: _("あー"), serif3: _("あー"), serif4: _("あー")},
						{"chara": "koishi", "exp": "yes", serif1: _("まあいいや"), serif2: _("まあいいや"), serif3: _("まあいいや"), serif4: _("まあいいや")},
					],
					// 緑の犬にオフィーリアを使用前の場合
					[
						{"chara": "koishi", "exp": "look_top", serif1: _("かわいいのって何だと思う？"), serif2: _("かわいいのって何だと思う？"), serif3: _("かわいいのって何だと思う？"), serif4: _("かわいいのって何だと思う？")},
						{"chara": "kogasa", "exp": "cp2_kogasa-wait", "serif": _("かわいいの？")},
						{"chara": "kogasa", "exp": "cp2_kogasa-reaction_02", "serif": _("そんなのきまってるじゃない！")},
						{"chara": "koishi", "exp": "look_front", serif1: _("知ってるの？"), serif2: _("知ってるの？"), serif3: _("知ってるの？"), serif4: _("知ってるの？")},
						{"chara": "kogasa", "exp": "cp2_kogasa-wait", "serif": _("わ・た・し")},
						{"chara": "koishi", "exp": "look_top", serif1: _("ふーん"), serif2: _("そうかあ"), serif3: _("そうかあ"), serif4: _("そうかあ")},
						{"chara": "koishi", "exp": "look_yes", serif1: _("それ以外で"), serif2: _("でも危なそうだからだめ"), serif3: _("でも危なそうだからだめ"), serif4: _("でも危なそうだからだめ")},
						{"chara": "kogasa", "exp": "cp2_kogasa-reaction_02", "serif": _("それ以外はないよ")},
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

			show_if_event_true: "chapter2_10-20400",
		},

	],
};

