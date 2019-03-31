'use strict';
var _ = require('i18n4v')
// 地上2階
/*
茨右
*/
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_13",
	chapter: 5,
	bgm: "field11",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: "chapter5_11",
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_wood",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_13_10470"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "animal_kuro","exp": "animal_kuro-wait", "serif": _("......")},
						{"chara": "animal_kuro","exp": "animal_kuro-wait", "serif": _("......")},
						{"chara": "animal_kuro","exp": "animal_kuro-wait",  serif1: _("ぷごぅ"), serif2: _("ぷごぅ"), serif3: _("ぷごぅ"), serif4: _("ぷごぅ"), "option": {"getJournal": "journal030"}},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_13_10470"]}
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
			anime1: "chapter5-13-bg-01_anime_1",
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
			no: "animal_kuro",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ヒョウ",
			loop: true,
			turn_toward_me: true, // こいしの方を向く
			serif_back: [
				{"chara": "animal_kuro","exp": "animal_kuro-ura_wait", "serif": _("......")},
				{"chara": "animal_kuro","exp": "animal_kuro-ura_wait", "serif": _("......")},
				{"chara": "koishi","exp": "look_front",  serif1: _("ぜんぜん喋んない！"), serif2: _("ぜんぜん喋んない！"), serif3: _("ぜんぜん喋んない！"), serif4: _("ぜんぜん喋んない！")},
				{"chara": "animal_kuro","exp": "animal_kuro-ura_wait",  serif1: _("何よ"), serif2: _("何よ"), serif3: _("何よ"), serif4: _("何よ")},
				{"chara": "koishi","exp": "yes",  serif1: _("なんだ"), serif2: _("なんだ"), serif3: _("喋れるじゃない"), serif4: _("喋れるじゃない")},
				{"chara": "animal_kuro","exp": "animal_kuro-ura_reaction_01",  serif1: _("強い生き物は鳴かないのよ"), serif2: _("強い生き物は鳴かないのよ"), serif3: _("強い生き物は鳴かないのよ"), serif4: _("強い生き物は鳴かないのよ")},
				{"chara": "koishi","exp": "look_front",  serif1: _("かっこいい"), serif2: _("かっこいい"), serif3: _("かっこいいね"), serif4: _("かっこいいね")},
				{"chara": "animal_kuro","exp": "animal_kuro-ura_wait",  serif1: _("ふふん"), serif2: _("ふふん"), serif3: _("ふふん"), serif4: _("ふふん")},
				{"chara": "animal_kuro","exp": "animal_kuro-ura_reaction_01",  serif1: _("私みたいに女の武器を持てば――"), serif2: _("私みたいに女の武器を持てば――"), serif3: _("私みたいに女の武器を持てば――"), serif4: _("私みたいに女の武器を持てば――")},
				{"chara": "animal_kuro","exp": null,  serif1: _("誰だっていうことを聞くわ"), serif2: _("誰だっていうことを聞くわ"), serif3: _("誰だっていうことを聞くわ"), serif4: _("誰だっていうことを聞くわ")},
				{"chara": "koishi","exp": "look_front",  serif1: _("ほんと！？"), serif2: _("ほんと！？"), serif3: _("そうなの！？"), serif4: _("そうなの！？")},
				{"chara": "koishi","exp": null,  serif1: _("武器かー"), serif2: _("武器かー"), serif3: _("武器を探さなくちゃ"), serif4: _("武器を探さなくちゃ")},
				{"id": "chapter5-13-animal_kuro_talk1", "save": true},
			],
			serif: [
				{"chara": "animal_kuro","exp": "animal_kuro-wait", "serif": _("......")},
				{"chara": "animal_kuro","exp": "animal_kuro-wait", "serif": _("......")},
				{"chara": "koishi","exp": "look_front",  serif1: _("ぜんぜん鳴かない！"), serif2: _("ぜんぜん鳴かない！"), serif3: _("ぜんぜん鳴かない！"), serif4: _("ぜんぜん鳴かない！")},
			],
			x: 700, y: 500,
			scale: 2/3,
			anime1: "animal_kuro-wait",
			anime2: null,
			anime3: null,
			anime4: "animal_kuro-reverse_ura",
			anime5: "animal_kuro-ura_wait",
			anime6: "animal_kuro-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "茨",
			serif: null,
			width: 330, height: 665,
			x: 800, y: 275,
		},
		{
			no: ++I,
			type: CONSTANT.JOURNAL_BACK_TYPE,
			x: 100, y: 400,
			journal_id: "journal041",
		},

	],
};

