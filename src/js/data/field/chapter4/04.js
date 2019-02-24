'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_04",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter4_05",
	leftField: null,
	background: "chapter4-04-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下へのフィールド移動",
			x: 480,
			y: 710,
			width: 960,
			height: 10,
			next_field_name: "chapter4_07",
		},
		{
			no: "tewireal",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "てゐ",
			loop: true,
			serif_back: [],
			serif: [
				{"type": "criteria_serif", "criteria": "circulate", "arguments": ["chapter4_04-tewireal-circulate", 2], "serifs": [
					[
						{"chara": "koishi", "exp": "look_front", "serif":_("ねえねえ")},
						{"chara": "koishi", "exp": null, "serif":_("久しぶり！")},
						{"chara": "tewireal", "exp": "kanban_reaction_01", "serif":_("......")},
						{"chara": "tewireal", "exp": "kanban_reaction_02", "serif":_("誰？")},
						{"chara": "koishi", "exp": "look_front", "serif":_("こないだ会ったじゃない")},
						{"chara": "tewireal", "exp": "kanban_reaction_01", "serif":_("いや")},
						{"chara": "tewireal", "exp": null, "serif":_("知らない")},
						{"chara": "koishi", "exp": "look_front", "serif":_("なんで？")},
						{"chara": "tewireal", "exp": "kanban_reaction_02", "serif":_("お前、気味が悪いぞ")},
					],
					[
						{"chara": "koishi", "exp": "look_front", "serif":_("ねえねえいじわる言わないで")},
						{"chara": "koishi", "exp": null, "serif":_("お友達でしょ")},
						{"chara": "tewireal", "exp": "kanban_reaction_03", "serif":_("うるさいなあ")},
						{"chara": "tewireal", "exp": null, "serif":_("あっち行けよ")},
						{"chara": "merry", "exp": "merry-reaction_10", "serif":_("ね本当に友達なの？")},
						{"chara": "koishi", "exp": "yes", "serif":_("そうよ")},
						{"chara": "merry", "exp": "merry-reaction_09", "serif":_("そうなの")},
					],
				]},
			],
			x: 260*2/3, y: 605*2/3,
			anime1: "tewireal-wait",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
		},
		{
			no: "merry",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー",
			loop: true,
			serif_back: [],
			serif: [
				{"chara": "koishi","serif":_("テスト")},
			],
			x: 1060*2/3, y: 505*2/3,
			anime1: "merry-wait",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
		},


	],
};

