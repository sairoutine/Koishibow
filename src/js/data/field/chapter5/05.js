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
	rightStartPosition:   {x: 600, y: 480},
	leftStartPosition:    {x: 220, y: 350},
	defaultStartPosition: {x: 220, y: 350, isTowardLeft: false},
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
				{"chara": "animal_kawa","exp": "animal_kawa-wait",  serif1: _("キィーッ"), serif2: _("キィーッ"), serif3: _("キィーッ"), serif4: _("キィーッ")},
				{"chara": "animal_kawa","exp": "animal_kawa-wait",  serif1: _("ピャー"), serif2: _("ピャー"), serif3: _("ピャー"), serif4: _("ピャー")},
				{"chara": "koishi","exp": "look_front",  serif1: _("うわーっ"), serif2: _("うわーっ"), serif3: _("うわーっ"), serif4: _("うわーっ")},
				{"chara": "koishi","exp": null,  serif1: _("うるさい！"), serif2: _("うるさい！"), serif3: _("うるさい！"), serif4: _("うるさい！")},
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
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [

				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter5-05-hashigo_ura_talk"], "serifs": [
					// イヌと喋ったあとにハシゴを調べた
					[
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("イーッ......"), serif2: _("イーッ......"), serif3: _("イーッ......"), serif4: _("イーッ......")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("オイラのはしご......"), serif2: _("オイラのはしご......"), serif3: _("オイラのはしご......"), serif4: _("オイラのはしご......")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
						{"chara": "koishi","exp": "yes", "serif": _("うん")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("イーッ......"), serif2: _("イーッ......"), serif3: _("イーッ......"), serif4: _("イーッ......")},
					],
					// イヌと喋ったあとにハシゴをまだ調べてない
					[
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("ピャー"), serif2: _("ピャー"), serif3: _("ピャー"), serif4: _("ピャー")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("ヒヒヒ"), serif2: _("ヒヒヒ"), serif3: _("ヒヒヒ"), serif4: _("ヒヒヒ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("ヒヒヒ"), serif2: _("ヒヒヒ"), serif3: _("ヒヒヒ"), serif4: _("ヒヒヒ")},
						{"chara": "koishi","exp": "look_front", "serif": _("うるさいなあ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01",  serif1: _("ああー？"), serif2: _("ああー？"), serif3: _("ああー？"), serif4: _("ああー？")},
						{"chara": "animal_kawa","exp": null,  serif1: _("なんだおまえ"), serif2: _("なんだおまえ"), serif3: _("なんだおまえ"), serif4: _("なんだおまえ")},
						{"chara": "koishi","exp": "yes", "serif": _("こいし")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("へえーっ小石ね"), serif2: _("へえーっ小石ね"), serif3: _("へえーっ小石ね"), serif4: _("へえーっ小石ね")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01",  serif1: _("名前通りのコロコロしたやつだぜ"), serif2: _("名前通りのコロコロしたやつだぜ"), serif3: _("名前通りのコロコロしたやつだぜ"), serif4: _("名前通りのコロコロしたやつだぜ")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("......"), "option": {"getJournal": "journal026"}},
					],
				]},
			],
			serif: [
				{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("ぎいーっぎいーっ"), serif2: _("ぎいーっぎいーっ"), serif3: _("ぎいーっぎいーっ"), serif4: _("ぎいーっぎいーっ")},
				{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("ケケケケ"), serif2: _("ケケケケ"), serif3: _("ケケケケ"), serif4: _("ケケケケ")},
				{"chara": "koishi","exp": "look_front",  serif1: _("ほんとうにうるさい！"), serif2: _("ほんとうにうるさい！"), serif3: _("ほんとうにうるさい！"), serif4: _("ほんとうにうるさい！")},
			],
			x: 750, y: 500,
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
						{"chara": "koishi","exp": "touch",  serif1: _("これいる"), serif2: _("これいる"), serif3: _("やっぱりこれがいるわ"), serif4: _("やっぱりこれがいるわ"), "option": {"getItem": "35"}}, // ハシゴ獲得
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01",  serif1: _("あー！！！！"), serif2: _("あー！！！！"), serif3: _("あー！！！！"), serif4: _("あー！！！！")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01",  serif1: _("アーッ"), serif2: _("アーッ"), serif3: _("アーッ"), serif4: _("アーッ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("だめなんだぞだめなんだぞ"), serif2: _("だめなんだぞだめなんだぞ"), serif3: _("だめなんだぞだめなんだぞ"), serif4: _("だめなんだぞだめなんだぞ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("さとり様がダメって言ってたのに"), serif2: _("さとり様がダメって言ってたのに"), serif3: _("さとり様がダメって言ってたのに"), serif4: _("さとり様がダメって言ってたのに")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01",  serif1: _("いーけないんだ"), serif2: _("いーけないんだ"), serif3: _("いーけないんだ"), serif4: _("いーけないんだ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01",  serif1: _("いけないんだ"), serif2: _("いけないんだ"), serif3: _("いけないんだ"), serif4: _("いけないんだ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01",  serif1: _("さとり様に言っちゃお"), serif2: _("さとり様に言っちゃお"), serif3: _("さとり様に言っちゃお"), serif4: _("さとり様に言っちゃお")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("ケケケ"), serif2: _("ケケケ"), serif3: _("ケケケ"), serif4: _("ケケケ")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
						{"chara": "koishi","exp": "look_front",  serif1: _("ふんだ！"), serif2: _("ふんだ！"), serif3: _("あらそう"), serif4: _("あらそう")},
						{"chara": "koishi","exp": null,  serif1: _("お姉ちゃんはもういないもん！"), serif2: _("お姉ちゃんはもういないもん！"), serif3: _("もうそんなのいないもん"), serif4: _("もうそんなのいないもん")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("あ......"), serif2: _("あ......"), serif3: _("あ......"), serif4: _("あ......")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("そう......"), serif2: _("そう......"), serif3: _("そう......"), serif4: _("そう......")},
					],
					// イヌと喋ってない
					[
						{"chara": "koishi","exp": "look_front", "serif": _("はしご！")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01",  serif1: _("アーッ"), serif2: _("アーッ"), serif3: _("アーッ"), serif4: _("アーッ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("だめなんだぞだめなんだぞ"), serif2: _("だめなんだぞだめなんだぞ"), serif3: _("だめなんだぞだめなんだぞ"), serif4: _("だめなんだぞだめなんだぞ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("さとり様がダメって言ってたのに"), serif2: _("さとり様がダメって言ってたのに"), serif3: _("さとり様がダメって言ってたのに"), serif4: _("さとり様がダメって言ってたのに")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01",  serif1: _("いーけないんだ"), serif2: _("いーけないんだ"), serif3: _("いーけないんだ"), serif4: _("いーけないんだ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01",  serif1: _("いけないんだ"), serif2: _("いけないんだ"), serif3: _("いけないんだ"), serif4: _("いけないんだ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01",  serif1: _("さとり様に言っちゃお"), serif2: _("さとり様に言っちゃお"), serif3: _("さとり様に言っちゃお"), serif4: _("さとり様に言っちゃお")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("ケケケ"), serif2: _("ケケケ"), serif3: _("ケケケ"), serif4: _("ケケケ")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
						{"chara": "koishi","exp": null, "serif": _("はい")},
					],
				]},
			],
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter5-07-animal_shiba_ura_talk1"], "serifs": [
					// イヌと喋った
					[
						{"chara": "koishi","exp": "yes",  serif1: _("これいる"), serif2: _("これいる"), serif3: _("やっぱりこれがいるわ"), serif4: _("やっぱりこれがいるわ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("イッ"), serif2: _("イッ"), serif3: _("イッ"), serif4: _("イッ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("イーッ"), serif2: _("イーッ"), serif3: _("イーッ"), serif4: _("イーッ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("イッイッイッ"), serif2: _("イッイッイッ"), serif3: _("イッイッイッ"), serif4: _("イッイッイッ")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
						{"id": "chapter5-05-hashigo_ura_talk", "save": true},
					],
					// イヌと喋ってない
					[
						{"chara": "koishi","exp": "look_front", "serif": _("はしご！")},
						{"chara": "koishi","exp": null,  serif1: _("もらっちゃえ"), serif2: _("もらっちゃえ"), serif3: _("もらっちゃえ"), serif4: _("もらっちゃえ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("イッ"), serif2: _("イッ"), serif3: _("イッ"), serif4: _("イッ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_wait",  serif1: _("イーッ"), serif2: _("イーッ"), serif3: _("イーッ"), serif4: _("イーッ")},
						{"chara": "animal_kawa","exp": "animal_kawa-ura_reaction_01",  serif1: _("イッイッイッ"), serif2: _("イッイッイッ"), serif3: _("イッイッイッ"), serif4: _("イッイッイッ")},
						{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
						{"chara": "koishi","exp": null,  serif1: _("やめとこ"), serif2: _("やめとこ"), serif3: _("やめとこう"), serif4: _("やめとこう")},
					],
				]},

			],
			x: 282, y: 600,
			scale: 2/3,
			action_name: "look_bottom",
			sound_name: null
		},
	],
};

