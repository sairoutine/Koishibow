'use strict';
var _ = require('i18n4v')
// 地上1階
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_06",
	chapter: 5,
	bgm: "field11",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 250, y: 480},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter5_08",
	leftField: null,
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_wood",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_06_10130"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "oku", "serif":_("ぐわあ、がー、ぐわあ")},
						{"chara": "koishi", "exp": "look_front", "serif":_("なんだろ！")},
						{"chara": "koishi", "exp": "yes", "serif":_("へんなこえ！")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_06_10130"]}
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
			anime1: "chapter5-06-bg-01_anime_1",
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
			no: "animal_hashi",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ハシビロコウ",
			loop: true,
			turn_toward_me: true, // こいしの方を向く
			serif_back: [
				{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter5_10-animal_hashi-limit", 2], "serifs": [
					[
						{"chara": "koishi","exp": null, "serif": _("すごい顔だね")},
						{"chara": "animal_hashi","exp": "animal_hashi-ura_reaction_01", "serif": _("なんだお前は")},
						{"chara": "animal_hashi","exp": null, "serif": _("失礼だな")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
						{"id": "chapter5-06-show_journal", "save": true},
					],
					[
						{"chara": "koishi","exp": null, "serif": _("なんで怒ってるの")},
						{"chara": "animal_hashi","exp": "animal_hashi-ura_wait", "serif": _("いや......")},
						{"chara": "animal_hashi","exp": "animal_hashi-ura_wait", "serif": _("別に......")},
						{"chara": "koishi","exp": "look_front", "serif": _("おこってないのにそんな顔なんですか")},
						{"chara": "animal_hashi","exp": "animal_hashi-ura_reaction_01", "serif": _("お前失礼だな")},
						{"chara": "animal_hashi","exp": null, "serif": _("丁寧に聞いても駄目だぞ")},
						{"chara": "koishi","exp": "yes", "serif": _("はい")},
					],
				]},
			],
			serif: [
				{"chara": "animal_hashi","exp": "animal_hashi-wait", "serif": _("キュウキュウ")},
				{"chara": "animal_hashi","exp": "animal_hashi-wait", "serif": _("ココココココココ")},
				{"chara": "koishi","exp": "look_bottom", "serif": _("こわい")},
			],
			x: 750, y: 400,
			scale: 2/3,
			anime1: "animal_hashi-wait",
			anime2: null,
			anime3: null,
			anime4: "animal_hashi-reverse_ura",
			anime5: "animal_hashi-ura_wait",
			anime6: "animal_hashi-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "上り階段",
			x: 170,
			y: 260,
			width: 300,
			height: 400,
			next_field_name: "chapter5_10",
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下り階段",
			x: 100,
			y: 730,
			width: 180,
			height: 550,
			next_field_name: "chapter5_05",
		},
		{
			no: "oku",
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "お空(上)",
			serif: null,
			width: 0, height: 0,
			x: 480, y: 0,
		},
		{
			no: ++I,
			type: CONSTANT.JOURNAL_FRONT_TYPE,
			x: 258, y: 689,
			journal_id: "journal0XX", // TODO: ジャーナルを設定
			show_if_event_true: "chapter5-06-show_journal",
		},
	],
};

