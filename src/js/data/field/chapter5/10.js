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
								{"chara": "animal_hari","exp": "animal_hari-wait", "serif": _("ピッ")},
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
								{"chara": "animal_down","serif": _("わんわん！")},
								{"chara": "animal_down","serif": _("があっがあっ")},
								{"chara": "animal_down","serif": _("ぶるるぶるる")},
								{"chara": "animal_right","serif": _("いいいいいっ")},
								{"chara": "animal_down","serif": _("うぴゃーっうぴゃーっ")},
								{"chara": "animal_right","serif": _("ぐるるるるる")},
								{"chara": "animal_down","serif": _("ぴいーっぴいーっ")},
								{"chara": "animal_right","serif": _("チチチチイ")},
								{"chara": "animal_right","serif": _("んなぁお")},
								{"chara": "koishi","exp": "look_front", "serif": _("うるさい！")},
								{"chara": "koishi","exp": null, "serif": _("動物の声だわ")},
								{"chara": "koishi","exp": null, "serif": _("楽しそう！")},
								{"chara": "oku", "serif": _("があー")},
								{"chara": "koishi","exp": "yes", "serif": _("まずあの子を助けなきゃ")},
								{"chara": "koishi","exp": null, "serif": _("あの部屋へ行かなきゃ")},
								{"chara": "animal_right","serif": _("みゃあぉう")},
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
						{"chara": "oku", "serif":_("があ、があ")},
						{"chara": "oku", "serif":_("ぐわあ")},
						{"chara": "koishi", "exp": "look_front", "serif":_("こっち！")},
						{"chara": "koishi", "exp": null, "serif":_("びょーきなのかな")},
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
						{"chara": "koishi","exp": "look_front", "serif": _("どうしたの")},
						{"chara": "animal_hari","exp": null, "serif": _("......")},
						{"chara": "animal_hari","exp": "animal_hari-ura_wait", "serif": _("あなただあれ")},
						{"chara": "koishi","exp": "yes", "serif": _("こいし")},
						{"chara": "koishi","exp": null, "serif": _("......")},
						{"chara": "koishi","exp": null, "serif": _("あなたは？")},
						{"chara": "animal_hari","exp": "animal_hari-ura_wait", "serif": _("ハリネズミですけども......")},
						{"chara": "koishi","exp": "yes", "serif": _("そっか")},
						{"id": "chapter5-10-show_journal", "save": true},
					],
					[
						{"chara": "animal_hari","exp": "animal_hari-ura_reaction_01", "serif": _("そっとしといてください......")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("ごめん")},
					],
				]},
			],
			serif: [
				{"chara": "animal_hari","exp": null, "serif": _("ピピッ")},
				{"chara": "animal_hari","exp": null, "serif": _("ピィ")},
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
			journal_id: "journal0XX", // TODO: ジャーナルを設定
			show_if_event_true: "chapter5-10-show_journal",
		},
	],
};

