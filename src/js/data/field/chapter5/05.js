'use strict';
var _ = require('i18n4v')
// 地下1階
/*
はしご（初めの位置。倒してある）
*/
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_05",
	chapter: 5,
	bgm: "field12",
	rightStartPosition: {x: 640, y: 480},
	leftStartPosition:  {x: 220, y: 350},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: null,
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_wood",
	initialProcess: [
		{"type": "process", "value": "playTalk", "arguments": [
			[
				{"chara": "animal_kawa","exp": "animal_kawa-wait", "serif": _("キィーッ")},
				{"chara": "animal_kawa","exp": "animal_kawa-wait", "serif": _("ピャー")},
				{"chara": "koishi","exp": "look_front", "serif": _("うわーっ")},
				{"chara": "koishi","exp": null, "serif": _("うるさい！")},
			]
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
			anime1: "chapter5-05-bg-01_anime_1",
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
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "上り階段",
			x: 70,
			y: 260,
			width: 140,
			height: 400,
			next_field_name: "chapter5_06",
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "茨",
			serif: null,
			width: 220, height: 690,
			x: 830, y: 300,
		},
		{
			no: "animal_kawa",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "カワウソ",
			loop: true,
			turn_toward_me: true, // こいしの方を向く
			serif_back: [

				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter5-05-hashigo_ura_talk"], "serifs": [
					// イヌと喋ったあとにハシゴを調べた
					[
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("イーッ......")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("オイラのはしご......")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
						{"chara": "koishi","exp": "yes", "serif": _("うん")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("イーッ......")},
					],
					// イヌと喋ったあとにハシゴをまだ調べてない
					[
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("ピャー")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("ヒヒヒ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("ヒヒヒ")},
						{"chara": "koishi","exp": "look_front", "serif": _("うるさいなあ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01", "serif": _("ああー？")},
						{"chara": "animal_kawa","exp": null, "serif": _("なんだおまえ")},
						{"chara": "koishi","exp": "yes", "serif": _("こいし")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("へえーっ小石ね")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01", "serif": _("名前通りのコロコロしたやつだぜ")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
						{"id": "chapter5-05-show_journal", "save": true},
					],
				]},
			],
			serif: [
				{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("ぎいーっぎいーっ")},
				{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("ケケケケ")},
				{"chara": "koishi","exp": "look_front", "serif": _("ほんとうにうるさい！")},
			],
			x: 800, y: 500,
			scale: 2/3,
			anime1: "animal_kawa-wait",
			anime2: null,
			anime3: null,
			anime4: "animal_kawa-reverse_ura",
			anime5: "animal_kawa-ura_wait",
			anime6: "animal_kawa-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			image: "chapter5-05-obj-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "はしご",
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter5-07-animal_shiba_ura_talk1"], "serifs": [
					// イヌと喋った
					[
						{"chara": "koishi","exp": "touch", "serif": _("これいる"), "option": {"getItem": "35"}}, // ハシゴ獲得
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01", "serif": _("あー！！！！")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01", "serif": _("アーッ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("だめなんだぞだめなんだぞ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("さとり様がダメって言ってたのに")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01", "serif": _("いーけないんだ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01", "serif": _("いけないんだ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01", "serif": _("さとり様に言っちゃお")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("ケケケ")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
						{"chara": "koishi","exp": "look_front", "serif": _("ふんだ！")},
						{"chara": "koishi","exp": null, "serif": _("お姉ちゃんはもういないもん！")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("あ......")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("そう......")},
					],
					// イヌと喋ってない
					[
						{"chara": "koishi","exp": "look_front", "serif": _("はしご！")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01", "serif": _("アーッ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("だめなんだぞだめなんだぞ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("さとり様がダメって言ってたのに")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01", "serif": _("いーけないんだ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01", "serif": _("いけないんだ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01", "serif": _("さとり様に言っちゃお")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("ケケケ")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
						{"chara": "koishi","exp": null, "serif": _("はい")},
					],
				]},
			],
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter5-07-animal_shiba_ura_talk1"], "serifs": [
					// イヌと喋った
					[
						{"chara": "koishi","exp": "yes", "serif": _("これいる")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("イッ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("イーッ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("イッイッイッ")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
						{"id": "chapter5-05-hashigo_ura_talk", "save": true},
					],
					// イヌと喋ってない
					[
						{"chara": "koishi","exp": "look_front", "serif": _("はしご！")},
						{"chara": "koishi","exp": null, "serif": _("もらっちゃえ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("イッ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait", "serif": _("イーッ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01", "serif": _("イッイッイッ")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
						{"chara": "koishi","exp": null, "serif": _("やめとこ")},
					],
				]},

			],
			x: 282, y: 600,
			scale: 2/3,
			action_name: "look_bottom",
			sound_name: null
		},
		{
			no: ++I,
			image: "paper",
			type: CONSTANT.JOURNAL_FRONT_TYPE,
			x: 258, y: 689,
			scale: 2/3,
			journal_id: "journal0XX", // TODO: ジャーナルを設定
			show_if_event_true: "chapter5-05-show_journal",
		},
	],
};

