'use strict';
var _ = require('i18n4v')
// 地上2階
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_10",
	chapter: 5,
	bgm: "field11",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 200, y: 480},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter5_09",
	leftField: null,
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_wood",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_12_10185"], "process": [
			// お燐と1度目の会話が済んでいる
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_10_10230"], "process": [
					// 会話 10230 再生済み
					[
					],
					// 会話 10230 未再生
					[
						{"type": "process", "value": "playTalk", "arguments": [
							[
								{"chara": "animal_hari","exp": "animal_hari-wait",  serif1: _("ピッ"), serif2: _("ピッ"), serif3: _("ピッ"), serif4: _("ピッ")},
								{"chara": "koishi","exp": "wait", "serif": _("......")},
							]
						]},
						{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_10_10230"]}
					],
				]},
			],
			// お燐と1度目の会話が済んでいない
			[
			],
		]},
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5-09-oku_talk1"], "process": [
			// お空と1度目の会話が済んでいる
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_10_10180"], "process": [
					// 会話 10180 再生済み
					[
					],
					// 会話 10180 未再生
					[
						{"type": "process", "value": "playTalk", "arguments": [
							[
								{"chara": "animal_down", serif1: _("わんわん！"), serif2: _("わんわん！"), serif3: _("わんわん！"), serif4: _("わんわん！")},
								{"chara": "animal_down", serif1: _("があっがあっ"), serif2: _("があっがあっ"), serif3: _("があっがあっ"), serif4: _("があっがあっ")},
								{"chara": "animal_down", serif1: _("ぶるるぶるる"), serif2: _("ぶるるぶるる"), serif3: _("ぶるるぶるる"), serif4: _("ぶるるぶるる")},
								{"chara": "animal_right", serif1: _("いいいいいっ"), serif2: _("いいいいいっ"), serif3: _("いいいいいっ"), serif4: _("いいいいいっ")},
								{"chara": "animal_down", serif1: _("うぴゃーっうぴゃーっ"), serif2: _("うぴゃーっうぴゃーっ"), serif3: _("うぴゃーっうぴゃーっ"), serif4: _("うぴゃーっうぴゃーっ")},
								{"chara": "animal_right", serif1: _("ぐるるるるる"), serif2: _("ぐるるるるる"), serif3: _("ぐるるるるる"), serif4: _("ぐるるるるる")},
								{"chara": "animal_down", serif1: _("ぴいーっぴいーっ"), serif2: _("ぴいーっぴいーっ"), serif3: _("ぴいーっぴいーっ"), serif4: _("ぴいーっぴいーっ")},
								{"chara": "animal_right", serif1: _("チチチチイ"), serif2: _("チチチチイ"), serif3: _("チチチチイ"), serif4: _("チチチチイ")},
								{"chara": "animal_right", serif1: _("んなぁお"), serif2: _("んなぁお"), serif3: _("んなぁお"), serif4: _("んなぁお")},
								{"chara": "koishi","exp": "look_front",  serif1: _("うるさい！"), serif2: _("うるさい！"), serif3: _("うるさい！"), serif4: _("うるさい！")},
								{"chara": "koishi","exp": null,  serif1: _("動物の声だわ"), serif2: _("動物の声だわ"), serif3: _("動物の声だわ"), serif4: _("動物の声だわ")},
								{"chara": "koishi","exp": null,  serif1: _("楽しそう！"), serif2: _("楽しそう！"), serif3: _("楽しそう！"), serif4: _("楽しそう！")},
								{"chara": "oku",  serif1: _("があー"), serif2: _("があー"), serif3: _("があー"), serif4: _("があー")},
								{"chara": "koishi","exp": "yes",  serif1: _("まずあの子を助けなきゃ"), serif2: _("まずあの子を助けなきゃ"), serif3: _("まずあの子を助けなきゃ"), serif4: _("まずあの子を助けなきゃ")},
								{"chara": "koishi","exp": null,  serif1: _("あの部屋へ行かなきゃ"), serif2: _("あの部屋へ行かなきゃ"), serif3: _("奥だったわね"), serif4: _("奥だったわね")},
								{"chara": "animal_right", serif1: _("みゃあぉう"), serif2: _("みゃあぉう"), serif3: _("みゃあぉう"), serif4: _("みゃあぉう")},
							]
						]},
						{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_10_10180"]}
					],
				]},
			],
			// お空と1度目の会話が済んでいない
			[
			],
		]},

		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_10_10140"], "process": [
			// すでにアクセス済み
			[
			],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "oku",  serif1: _("があ、があ"), serif2: _("があ、があ"), serif3: _("があ、があ"), serif4: _("があ、があ")},
						{"chara": "oku",  serif1: _("ぐわあ"), serif2: _("ぐわあ"), serif3: _("ぐわあ"), serif4: _("ぐわあ")},
						{"chara": "koishi", "exp": "look_front",  serif1: _("こっち！"), serif2: _("こっち！"), serif3: _("こっちね！"), serif4: _("こっちね！")},
						{"chara": "koishi", "exp": null,  serif1: _("びょーきなのかな"), serif2: _("びょーきなのかな"), serif3: _("苦しそうだわ"), serif4: _("苦しそうだわ")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_10_10140"]}
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
			anime1: "chapter5-10-bg-01_anime_1",
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
			no: "animal_hari",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ハリネズミ",
			loop: true,
			turn_toward_me: true, // こいしの方を向く
			serif_back: [
				{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter5_10-animal_hari-limit", 2], "serifs": [
					[
						{"chara": "animal_hari","exp": "animal_hari-ura_reaction_01", "serif": _("......")},
						{"chara": "koishi","exp": "look_front",  serif1: _("どうしたの"), serif2: _("どうしたの"), serif3: _("どうしたの"), serif4: _("どうしたの")},
						{"chara": "animal_hari","exp": null, "serif": _("......")},
						{"chara": "animal_hari","exp": "animal_hari-ura_wait",  serif1: _("あなただあれ"), serif2: _("あなただあれ"), serif3: _("あなただあれ"), serif4: _("あなただあれ")},
						{"chara": "koishi","exp": "yes", "serif": _("こいし")},
						{"chara": "koishi","exp": null, "serif": _("......")},
						{"chara": "koishi","exp": null,  serif1: _("あなたは？"), serif2: _("あなたは？"), serif3: _("あなたは？"), serif4: _("あなたは？")},
						{"chara": "animal_hari","exp": "animal_hari-ura_wait",  serif1: _("ハリネズミですけども......"), serif2: _("ハリネズミですけども......"), serif3: _("ハリネズミですけども......"), serif4: _("ハリネズミですけども......")},
						{"chara": "koishi","exp": "yes", "serif": _("そっか")},
						{"id": "chapter5-10-show_journal", "save": true},
					],
					[
						{"chara": "animal_hari","exp": "animal_hari-ura_reaction_01",  serif1: _("そっとしといてください......"), serif2: _("そっとしといてください......"), serif3: _("そっとしといてください......"), serif4: _("そっとしといてください......")},
						{"chara": "koishi","exp": "look_bottom",  serif1: _("ごめん"), serif2: _("ごめん"), serif3: _("ごめん"), serif4: _("ごめん")},
					],
				]},
			],
			serif: [
				{"chara": "animal_hari","exp": null,  serif1: _("ピピッ"), serif2: _("ピピッ"), serif3: _("ピピッ"), serif4: _("ピピッ")},
				{"chara": "animal_hari","exp": null,  serif1: _("ピィ"), serif2: _("ピィ"), serif3: _("ピィ"), serif4: _("ピィ")},
			],
			x: 600, y: 300,
			scale: 2/3,
			anime1: "animal_hari-wait",
			anime2: null,
			anime3: null,
			anime4: "animal_hari-reverse_ura",
			anime5: "animal_hari-ura_wait",
			anime6: "animal_hari-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下り階段",
			x: 90,
			y: 350,
			width: 180,
			height: 400,
			next_field_name: "chapter5_06",
		},
		{
			no: "oku",
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "お空(左)",
			serif: null,
			width: 0, height: 0,
			x: 0, y: 360,
		},
		{
			no: "animal_down",
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "動物(下)",
			serif: null,
			width: 0, height: 0,
			x: 480, y: 720,
		},
		{
			no: "animal_right",
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "動物(右)",
			serif: null,
			width: 0, height: 0,
			x: 960, y: 360,
		},
		{
			no: ++I,
			type: CONSTANT.JOURNAL_FRONT_TYPE,
			x: 258, y: 689,
			journal_id: "journal024",
			show_if_event_true: "chapter5-10-show_journal",
		},
	],
};

