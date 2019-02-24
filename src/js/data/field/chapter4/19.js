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
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["TODO: "], "serifs": [
					[
						{"type": "criteria_serif", "criteria": "circulate", "arguments": ["chapter4_19-reisen-circulate1", 2], "serifs": [
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
					[
						{"type": "criteria_serif", "criteria": "circulate", "arguments": ["chapter4_19-reisen-circulate2", 3], "serifs": [
							[
								{"chara": "reisen", "exp": "reisen-reaction_01", "serif":_("あら")},
								{"chara": "reisen", "exp": null, "serif":_("また会ったね")},
								{"chara": "koishi", "exp": "yes", "serif":_("うん")},
								{"chara": "koishi", "exp": "look_front", "serif":_("ねえ薬を持ってるんでしょ")},
								{"chara": "koishi", "exp": null, "serif":_("毒も持ってる？")},
								{"chara": "reisen", "exp": "reisen-reaction_01", "serif":_("持っているわよ")},
								{"chara": "reisen", "exp": null, "serif":_("例えばこの風邪薬は一粒飲むと風邪が治る")},
								{"chara": "reisen", "exp": null, "serif":_("十粒飲むと死ぬ")},
								{"chara": "reisen", "exp": "reisen-reaction_03", "serif":_("おんなじ物を飲んでもいいようになるか悪いようになるかはその人次第よ")},
								{"chara": "koishi", "exp": "wait", "serif":_("ふーん")},
								{"chara": "reisen", "exp": "reisen-reaction_02", "serif":_("なんで毒が欲しいの")},
								{"chara": "koishi", "exp": "look_front", "serif":_("眠れる薬とかないの")},
								{"chara": "reisen", "exp": "reisen-reaction_02", "serif":_("欲しいの？")},
								{"chara": "koishi", "exp": "look_bottom", "serif":_("私はいらない")},
								{"chara": "reisen", "exp": "reisen-wait", "serif":_("......")},
								{"chara": "reisen", "exp": null, "serif":_("......")},
							],
							[
								{"chara": "koishi", "exp": "look_front", "serif":_("虚無ってなにか知ってる？")},
								{"chara": "reisen", "exp": "reisen-reaction_02", "serif":_("虚無？")},
								{"chara": "reisen", "exp": "reisen-reaction_03", "serif":_("なにもないことよ")},
								{"chara": "koishi", "exp": "look_bottom", "serif":_("よくわかんない")},
								{"chara": "koishi", "exp": null, "serif":_("眠るのとは違うの？")},
								{"chara": "reisen", "exp": "reisen-reaction_02", "serif":_("じゃあここはどう？")},
								{"chara": "koishi", "exp": "look_top", "serif":_("なにもないけど")},
								{"chara": "reisen", "exp": "reisen-reaction_01", "serif":_("そんなことないわ")},
								{"chara": "reisen", "exp": null, "serif":_("ここには生き物が蠢いてる")},
								{"chara": "reisen", "exp": "reisen-reaction_03", "serif":_("清廉な世界なんて")},
								{"chara": "reisen", "exp": null, "serif":_("あなたも私も生きている")},
								{"chara": "koishi", "exp": "look_bottom", "serif":_("でもわたしからっぽだもの")},
								{"chara": "reisen", "exp": "reisen-reaction_02", "serif":_("まさか！")},
								{"chara": "reisen", "exp": null, "serif":_("そんなことないわ")},
								{"chara": "reisen", "exp": "reisen-reaction_01", "serif":_("あなたは愛されているもの")},
								{"chara": "koishi", "exp": "look_bottom", "serif":_("でも")},
								{"chara": "koishi", "exp": null, "serif":_("わかんないよ")},
								{"chara": "koishi", "exp": "look_top", "serif":_("さみしいの")},
								{"chara": "koishi", "exp": null, "serif":_("これって虚無？")},
								{"chara": "reisen", "exp": "reisen-reaction_03", "serif":_("いいわ")},
								{"chara": "reisen", "exp": null, "serif":_("それじゃあ")},
								{"chara": "reisen", "exp": "reisen-reaction_01", "serif":_("試供品をあげましょ"), "option": {"getItem": "27"}},
							],
							[
								{"chara": "reisen", "exp": "reisen-reaction_01", "serif":_("死ぬってあなたが思っているよりずっとこわいのよ")},
								{"chara": "reisen", "exp": null, "serif":_("地平線の向こう側を目指すように残酷な旅が続くだけなの")},
							],
						]}
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

