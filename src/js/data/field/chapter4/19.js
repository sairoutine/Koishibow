'use strict';
var _ = require('i18n4v')
// 優曇華院

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_19",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter4_20",
	leftField: null,
	background: "chapter4-19-bg-001",
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
			next_field_name: "chapter4_22",
		},
		{
			no: "reisen",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "鈴仙",
			loop: true,
			serif_back: [],
			serif: [
				{"type": "criteria_serif", "criteria": "circulate", "arguments": ["chapter4_19-reisen-circulate", 2], "serifs": [
					[

						{"chara": "reisen", "exp": "reisen-reaction_01", "serif":_("あら")},
						{"chara": "reisen", "exp": null, "serif":_("見ない顔ね")},
						{"chara": "reisen", "exp": "reisen-reaction_02", "serif":_("迷子なの？")},
						{"chara": "koishi", "exp": "look_bottom", "serif":_("違うよ")},
						{"chara": "reisen", "exp": "reisen-wait", "serif":_("ふーん")},
						{"chara": "reisen", "exp": "reisen-reaction_01", "serif":_("あなたお名前は？")},
						{"chara": "koishi", "exp": "yes", "serif":_("こいし")},
						{"chara": "reisen", "exp": "reisen-reaction_02", "serif":_("やっぱり聞かない名前ね")},
						{"chara": "reisen", "exp": null, "serif":_("ここから出たいの？")},
						{"chara": "koishi", "exp": "look_bottom", "serif":_("私じゃなくて")},
						{"chara": "koishi", "exp": null, "serif":_("友達がね")},
						{"chara": "reisen", "exp": "reisen-reaction_03", "serif":_("ふーん")},
						{"chara": "reisen", "exp": null, "serif":_("友達は人間なの？")},
						{"chara": "koishi", "exp": "look_front", "serif":_("どういうこと？")},
						{"chara": "reisen", "exp": "reisen-reaction_02", "serif":_("......人間が友達なの？")},
						{"chara": "koishi", "exp": "yes", "serif":_("そう！")},
						{"chara": "reisen", "exp": null, "serif":_("あんた妖怪なんでしょ？")},
						{"chara": "koishi", "exp": "look_bottom", "serif":_("違うよ")},
						{"chara": "reisen", "exp": null, "serif":_("そう？")},
						{"chara": "reisen", "exp": null, "serif":_("あなた私より余程妖怪らしいわよ")},
						{"chara": "reisen", "exp": "reisen-reaction_01", "serif":_("私は鈴仙よ")},
						{"chara": "reisen", "exp": null, "serif":_("もし薬が必要だったらよろしく")},
					],
					[
						{"chara": "koishi", "exp": "look_front", "serif":_("薬屋さんなの？")},
						{"chara": "reisen", "exp": null, "serif":_("いや、私は薬売り")},
						{"chara": "reisen", "exp": "reisen-reaction_01", "serif":_("薬を作っているお医者先生はまた別")},
						{"chara": "koishi", "exp": "wait", "serif":_("ふーん")},
						{"chara": "reisen", "exp": "reisen-reaction_01", "serif":_("人間用の薬がほとんどだけどね")},
					],
				]},
			],
			x: 420*2/3, y: 565*2/3,
			anime1: "reisen-wait",
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

