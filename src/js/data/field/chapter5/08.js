'use strict';
var _ = require('i18n4v')
// 地上1階
// REDRUM
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_08",
	chapter: 5,
	bgm: "field11",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter5_07",
	leftField: "chapter5_06",
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_wood",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5-07-animal_komodo_talk1"], "process": [
			// コモドとの会話が終わったら
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi","exp": "look_front",  serif1: _("みっけ！"), serif2: _("みっけ！"), serif3: _("みっけ！"), serif4: _("みっけ！")},
					],
				]},
			],
			[
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
			anime1: "chapter5-08-bg-01_anime_1",
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
			no: "animal_uma",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ウマ",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [
				{"id": "chapter5-04-show_animal_mogura", "save": true}, // もぐら表示
				{"chara": "animal_uma","exp": "animal_uma-ura_wait",  serif1: _("なんなの"), serif2: _("なんなの"), serif3: _("なんなの"), serif4: _("なんなの")},
				{"chara": "koishi","exp": "use_axe", "serif": _("......")},
				{"chara": "koishi","exp": null, "serif": _("......")},
				{"chara": "animal_uma","exp": "animal_uma-ura_reaction_01",  serif1: _("うう......"), serif2: _("うう......"), serif3: _("うう......"), serif4: _("うう......")},
				{"chara": "koishi","exp": null, "serif": _("......")},
				{"chara": "animal_uma","exp": "animal_uma-ura_reaction_01",  serif1: _("言っちゃダメって言われてるの"), serif2: _("言っちゃダメって言われてるの"), serif3: _("言っちゃダメって言われてるの"), serif4: _("言っちゃダメって言われてるの")},
				{"chara": "koishi","exp": null,  serif1: _("誰に"), serif2: _("誰に"), serif3: _("誰に"), serif4: _("誰に")},
				{"chara": "animal_uma","exp": "animal_uma-ura_reaction_01",  serif1: _("ご主人様に......"), serif2: _("ご主人様に......"), serif3: _("ご主人様に......"), serif4: _("ご主人様に......")},
				{"chara": "koishi","exp": null,  serif1: _("もう死んだもン"), serif2: _("もう死んだもン"), serif3: _("もう死んだもン"), serif4: _("もう死んだもン")},
				{"chara": "koishi","exp": null,  serif1: _("だから気にしなくてもいいんだよ"), serif2: _("だから気にしなくてもいいんだよ"), serif3: _("だから気にしなくてもいいんだよ"), serif4: _("だから気にしなくてもいいんだよ")},
				{"chara": "animal_uma","exp": "animal_uma-ura_reaction_01", "serif": _("......")},
				{"chara": "koishi","exp": null,  serif1: _("いい子だから教えて？"), serif2: _("いい子だから教えて？"), serif3: _("いい子だから教えて？"), serif4: _("いい子だから教えて？")},
				{"chara": "animal_uma","exp": "animal_uma-ura_reaction_01", "serif": _("......")},
				{"chara": "animal_uma","exp": null,  serif1: _("地下に埋めました"), serif2: _("地下に埋めました"), serif3: _("地下に埋めました"), serif4: _("地下に埋めました")},
				{"chara": "koishi","exp": null,  serif1: _("いいこね"), serif2: _("いいこね"), serif3: _("いいこね"), serif4: _("いいこね")},
				{"chara": "animal_uma","exp": "animal_uma-ura_reaction_01", "serif": _("......")},
				{"chara": "koishi","exp": null,  serif1: _("ご褒美にクッキー焼いてあげる"), serif2: _("ご褒美にクッキー焼いてあげる"), serif3: _("ご褒美にクッキー焼いてあげる"), serif4: _("ご褒美にクッキー焼いてあげる")},
			],
			serif: [
				{"chara": "animal_uma","exp": "animal_uma-reaction_01",  serif1: _("ぶぃっ"), serif2: _("ぶぃっ"), serif3: _("ぶぃっ"), serif4: _("ぶぃっ")},
				{"chara": "animal_uma","exp": "animal_uma-reaction_01",  serif1: _("ひひン"), serif2: _("ひひン"), serif3: _("ひひン"), serif4: _("ひひン")},
				{"chara": "koishi","exp": "look_front",  serif1: _("あはは怖がってる"), serif2: _("あはは怖がってる"), serif3: _("あはは怖がってる"), serif4: _("あはは怖がってる")},
			],
			x: 600, y: 300,
			scale: 2/3,
			anime1: "animal_uma-wait",
			anime2: null,
			anime3: null,
			anime4: "animal_uma-reverse_ura",
			anime5: "animal_uma-ura_wait",
			anime6: "animal_uma-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
			show_if_event_true: "chapter5-07-animal_komodo_talk1",
		},


	],
};

