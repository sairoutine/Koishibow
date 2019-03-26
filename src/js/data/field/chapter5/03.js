'use strict';
var _ = require('i18n4v')
// 地下1階
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_03",
	chapter: 5,
	bgm: "field11",
	rightStartPosition: {x: 700, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: "chapter5_02",
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_wood",
	initialProcess: [
		{"type": "criteria", "value": "existsItem", "arguments": ["33"], "process": [
			// 鍵を持っている
			[
				// イベント表示
				{"type": "process", "value": "changeScene", "arguments": ["event_talk", "chapter5-03-event-01"]},
				{"chara": "koishi","exp": "look_bottom", "serif": _("なにかしらこれ")},
				{"chara": "koishi","exp": null, "serif": _("あっちからきたけど")},
				{"id": "chapter5-03-event-10630", "save": true}, // アライグマ表示
			],
			// 鍵を持っていない
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_03_10110"], "process": [
					// すでにアクセス済み
					[],
					// まだ未アクセス
					[
						{"type": "process", "value": "playTalk", "arguments": [
							[
								{"chara": "koishi", "exp": "look_front", "serif":_("わー")},
								{"chara": "koishi", "exp": null, "serif":_("なつかしい")},
							]
						]},
						{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_03_10110"]}
					],
				]},
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
			anime1: "chapter5-03-bg-01_anime_1",
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
			image: "chapter5-03-obj-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "斧",
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter5-03-event-10630"], "serifs": [
					[
						{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
						{"chara": "koishi","exp": null, "serif": _("......")},
						{"chara": "koishi","exp": null, "serif": _("......")},
					],
					[
					],
				]},

			],
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter5-03-event-10630"], "serifs": [
					[

						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter5-myroom-araiguma_talk1"], "serifs": [
							// お燐表示済
							[
								{"chara": "koishi","serif":"", "junction": ["斧をとる", "とらない"]},
								{"type": "junction_serif", "serifs": [
									[
										{"chara": "koishi","exp": "touch", "serif": _("一応ね")},
										{"chara": "koishi","exp": "yes", "serif": _("ねんのため......")},
									],
									[
										{"chara": "koishi","exp": "look_bottom", "serif": _("わたしわるいひとかも......")},
										{"chara": "koishi","exp": null, "serif": _("いばりんぼで")},
										{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
									],
								]},
							],
							// お燐未表示
							[
								{"chara": "koishi","exp": "yes", "serif": _("いまはそれどころじゃないわ")},
							],
						]},
					],
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter5-13-animal_kuro_talk1"], "serifs": [
							// 豹と会話した後
							[
								{"chara": "koishi","exp": "touch", "serif": _("これ！")},
								{"chara": "koishi","exp": null, "serif": _("すてき"), "option": {"getItem": "34"}},
								{"chara": "koishi","exp": null, "serif": _("強そうね！")},
								{"id": "chapter5-07-show_animal_komodo", "save": true},
							],
							// 豹と会話した後ではない
							[
								{"chara": "koishi","exp": null, "serif": _("あぶないわ")},
							],
						]},
					],
				]},
			],
			x: 282, y: 447,
			scale: 2/3,
			action_name: "look_bottom",
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "上り階段",
			x: 800,
			y: 260,
			width: 300,
			height: 400,
			next_field_name: "chapter5_07",
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下り階段",
			x: 910,
			y: 730,
			width: 250,
			height: 550,
			next_field_name: "chapter5_04",
		},
	],
};

