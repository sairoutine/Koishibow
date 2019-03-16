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
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter5_07",
	leftField: "chapter5_06",
	background: null,
	walkSound: "walking_bare_wood",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5-07-animal_komodo_talk1"], "process": [
			// コモドとの会話が終わったら
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi","exp": "look_front", "serif": _("みっけ！")},
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
			serif_back: [
				{"chara": "animal_uma","exp": "animal_uma-ura_wait", "serif": _("なんなの")},
				{"chara": "koishi","exp": "ax", "serif": _("......")},
				{"chara": "koishi","exp": null, "serif": _("......")},
				{"chara": "animal_uma","exp": "animal_uma-ura_reaction_01", "serif": _("うう......")},
				{"chara": "koishi","exp": null, "serif": _("......")},
				{"chara": "animal_uma","exp": "animal_uma-ura_reaction_01", "serif": _("言っちゃダメって言われてるの")},
				{"chara": "koishi","exp": null, "serif": _("誰に")},
				{"chara": "animal_uma","exp": "animal_uma-ura_reaction_01", "serif": _("ご主人様に......")},
				{"chara": "koishi","exp": null, "serif": _("もう死んだもン")},
				{"chara": "koishi","exp": null, "serif": _("だから気にしなくてもいいんだよ")},
				{"chara": "animal_uma","exp": "animal_uma-ura_reaction_01", "serif": _("......")},
				{"chara": "koishi","exp": null, "serif": _("いい子だから教えて？")},
				{"chara": "animal_uma","exp": "animal_uma-ura_reaction_01", "serif": _("......")},
				{"chara": "animal_uma","exp": null, "serif": _("地下に埋めました")},
				{"chara": "koishi","exp": null, "serif": _("いいこね")},
				{"chara": "animal_uma","exp": "animal_uma-ura_reaction_01", "serif": _("......")},
				{"chara": "koishi","exp": null, "serif": _("ご褒美にクッキー焼いてあげる")},
				{"id": "chapter5-04-show_animal_mogura", "save": true}, // もぐら表示
			],
			serif: [
				{"chara": "animal_uma","exp": "animal_uma-reaction_01", "serif": _("ぶぃっ")},
				{"chara": "animal_uma","exp": "animal_uma-reaction_01", "serif": _("ひひン")},
				{"chara": "koishi","exp": "look_front", "serif": _("あはは怖がってる")},
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
		},


	],
};

