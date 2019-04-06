'use strict';
var _ = require('i18n4v')
// 優曇華院

var CONSTANT = require("../../../constant");
module.exports = {
	key: "chapter4_19",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 400, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: "chapter4_20",
	leftField: null,
	upField:    null,
	downField:  "chapter4_22",
	background: "chapter4-19-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
	],
	objects: [
		{
			no: "reisen",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "鈴仙",
			loop: true,
			turn_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: [
				// 新品のカセットテープが出現していたら
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter4-23-show_tape4"], "serifs": [
					[
						{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter4_19-reisen-limit1", 1], "serifs": [
							[

								{"chara": "reisen", "exp": "reisen-reaction_01",  serif1: _("あら"), serif2: _("あら"), serif3: _("あら"), serif4: _("あら")},
								{"chara": "reisen", "exp": null,  serif1: _("見ない顔ね"), serif2: _("見ない顔ね"), serif3: _("見ない顔ね"), serif4: _("見ない顔ね")},
								{"chara": "reisen", "exp": "reisen-reaction_02",  serif1: _("迷子なの？"), serif2: _("迷子なの？"), serif3: _("迷子なの？"), serif4: _("迷子なの？")},
								{"chara": "koishi", "exp": "look_bottom", "serif": _("違うよ")},
								{"chara": "reisen", "exp": "reisen-wait", "serif": _("ふーん")},
								{"chara": "reisen", "exp": "reisen-reaction_01",  serif1: _("あなたお名前は？"), serif2: _("あなたお名前は？"), serif3: _("あなたお名前は？"), serif4: _("あなたお名前は？")},
								{"chara": "koishi", "exp": "yes", "serif": _("こいし")},
								{"chara": "reisen", "exp": "reisen-reaction_02",  serif1: _("やっぱり聞かない名前ね"), serif2: _("やっぱり聞かない名前ね"), serif3: _("やっぱり聞かない名前ね"), serif4: _("やっぱり聞かない名前ね")},
								{"chara": "reisen", "exp": null,  serif1: _("ここから出たいの？"), serif2: _("ここから出たいの？"), serif3: _("ここから出たいの？"), serif4: _("ここから出たいの？")},
								{"chara": "koishi", "exp": "look_bottom",  serif1: _("私じゃなくて"), serif2: _("私じゃなくて"), serif3: _("私じゃなくて"), serif4: _("私じゃなくて")},
								{"chara": "koishi", "exp": null,  serif1: _("友達がね"), serif2: _("友達がね"), serif3: _("友達がね"), serif4: _("友達がね")},
								{"chara": "reisen", "exp": "reisen-reaction_03", "serif": _("ふーん")},
								{"chara": "reisen", "exp": null,  serif1: _("友達は人間なの？"), serif2: _("友達は人間なの？"), serif3: _("友達は人間なの？"), serif4: _("友達は人間なの？")},
								{"chara": "koishi", "exp": "look_front",  serif1: _("どういうこと？"), serif2: _("どういうこと？"), serif3: _("どういうこと？"), serif4: _("どういうこと？")},
								{"chara": "reisen", "exp": "reisen-reaction_02",  serif1: _("......人間が友達なの？"), serif2: _("......人間が友達なの？"), serif3: _("......人間が友達なの？"), serif4: _("......人間が友達なの？")},
								{"chara": "koishi", "exp": "yes", "serif": _("そう！")},
								{"chara": "reisen", "exp": null,  serif1: _("あんた妖怪なんでしょ？"), serif2: _("あんた妖怪なんでしょ？"), serif3: _("あんた妖怪なんでしょ？"), serif4: _("あんた妖怪なんでしょ？")},
								{"chara": "koishi", "exp": "look_bottom", "serif": _("違うよ")},
								{"chara": "reisen", "exp": null,  serif1: _("そう？"), serif2: _("そう？"), serif3: _("そう？"), serif4: _("そう？")},
								{"chara": "reisen", "exp": null,  serif1: _("あなた私より余程妖怪らしいわよ"), serif2: _("あなた私より余程妖怪らしいわよ"), serif3: _("あなた私より余程妖怪らしいわよ"), serif4: _("あなた私より余程妖怪らしいわよ")},
								{"chara": "reisen", "exp": "reisen-reaction_01",  serif1: _("私は鈴仙よ"), serif2: _("私は鈴仙よ"), serif3: _("私は鈴仙よ"), serif4: _("私は鈴仙よ")},
								{"chara": "reisen", "exp": null,  serif1: _("もし薬が必要だったらよろしく"), serif2: _("もし薬が必要だったらよろしく"), serif3: _("もし薬が必要だったらよろしく"), serif4: _("もし薬が必要だったらよろしく")},
							],
							[
								{"chara": "koishi", "exp": "look_front",  serif1: _("薬屋さんなの？"), serif2: _("薬屋さんなの？"), serif3: _("薬屋さんなの？"), serif4: _("薬屋さんなの？")},
								{"chara": "reisen", "exp": null,  serif1: _("いや、私は薬売り"), serif2: _("いや、私は薬売り"), serif3: _("いや、私は薬売り"), serif4: _("いや、私は薬売り")},
								{"chara": "reisen", "exp": "reisen-reaction_01",  serif1: _("薬を作っているお医者先生はまた別"), serif2: _("薬を作っているお医者先生はまた別"), serif3: _("薬を作っているお医者先生はまた別"), serif4: _("薬を作っているお医者先生はまた別")},
								{"chara": "koishi", "exp": "wait", "serif": _("ふーん")},
								{"chara": "reisen", "exp": "reisen-reaction_01",  serif1: _("人間用の薬がほとんどだけどね"), serif2: _("人間用の薬がほとんどだけどね"), serif3: _("人間用の薬がほとんどだけどね"), serif4: _("人間用の薬がほとんどだけどね")},
							],
						]},
					],
					[
						{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter4_19-reisen-limit2", 2], "serifs": [
							[
								{"chara": "reisen", "exp": "reisen-reaction_01",  serif1: _("あら"), serif2: _("あら"), serif3: _("あら"), serif4: _("あら")},
								{"chara": "reisen", "exp": null,  serif1: _("また会ったね"), serif2: _("また会ったね"), serif3: _("また会ったね"), serif4: _("また会ったね")},
								{"chara": "koishi", "exp": "yes", "serif": _("うん")},
								{"chara": "koishi", "exp": "look_front",  serif1: _("ねえ薬を持ってるんでしょ"), serif2: _("ねえ薬を持ってるんでしょ"), serif3: _("ねえ薬を持ってるんでしょ"), serif4: _("ねえ薬を持ってるんでしょ")},
								{"chara": "koishi", "exp": null,  serif1: _("毒も持ってる？"), serif2: _("毒も持ってる？"), serif3: _("毒も持ってる？"), serif4: _("毒も持ってる？")},
								{"chara": "reisen", "exp": "reisen-reaction_01",  serif1: _("持っているわよ"), serif2: _("持っているわよ"), serif3: _("持っているわよ"), serif4: _("持っているわよ")},
								{"chara": "reisen", "exp": null,  serif1: _("例えばこの風邪薬は一粒飲むと風邪が治る"), serif2: _("例えばこの風邪薬は一粒飲むと風邪が治る"), serif3: _("例えばこの風邪薬は一粒飲むと風邪が治る"), serif4: _("例えばこの風邪薬は一粒飲むと風邪が治る")},
								{"chara": "reisen", "exp": null,  serif1: _("十粒飲むと死ぬ"), serif2: _("十粒飲むと死ぬ"), serif3: _("十粒飲むと死ぬ"), serif4: _("十粒飲むと死ぬ")},
								{"chara": "reisen", "exp": "reisen-reaction_03", "serif": _("おんなじ物を飲んでもいいようになるか悪いようになるかはその人次第よ")},
								{"chara": "koishi", "exp": "wait", "serif": _("ふーん")},
								{"chara": "reisen", "exp": "reisen-reaction_02",  serif1: _("なんで毒が欲しいの"), serif2: _("なんで毒が欲しいの"), serif3: _("なんで毒が欲しいの"), serif4: _("なんで毒が欲しいの")},
								{"chara": "koishi", "exp": "look_front",  serif1: _("眠れる薬とかないの"), serif2: _("眠れる薬とかないの"), serif3: _("眠れる薬とかないの"), serif4: _("眠れる薬とかないの")},
								{"chara": "reisen", "exp": "reisen-reaction_02",  serif1: _("欲しいの？"), serif2: _("欲しいの？"), serif3: _("欲しいの？"), serif4: _("欲しいの？")},
								{"chara": "koishi", "exp": "look_bottom",  serif1: _("私はいらない"), serif2: _("私はいらない"), serif3: _("私はいらない"), serif4: _("私はいらない")},
								{"chara": "reisen", "exp": "reisen-wait", "serif": _("......")},
								{"chara": "reisen", "exp": null, "serif": _("......")},
							],
							[
								{"chara": "koishi", "exp": "look_front",  serif1: _("虚無ってなにか知ってる？"), serif2: _("虚無ってなにか知ってる？"), serif3: _("虚無ってなにか知ってる？"), serif4: _("虚無ってなにか知ってる？")},
								{"chara": "reisen", "exp": "reisen-reaction_02",  serif1: _("虚無？"), serif2: _("虚無？"), serif3: _("虚無？"), serif4: _("虚無？")},
								{"chara": "reisen", "exp": "reisen-reaction_03",  serif1: _("なにもないことよ"), serif2: _("なにもないことよ"), serif3: _("なにもないことよ"), serif4: _("なにもないことよ")},
								{"chara": "koishi", "exp": "look_bottom", "serif": _("よくわかんない")},
								{"chara": "koishi", "exp": null,  serif1: _("眠るのとは違うの？"), serif2: _("眠るのとは違うの？"), serif3: _("眠るのとは違うの？"), serif4: _("眠るのとは違うの？")},
								{"chara": "reisen", "exp": "reisen-reaction_02",  serif1: _("じゃあここはどう？"), serif2: _("じゃあここはどう？"), serif3: _("じゃあここはどう？"), serif4: _("じゃあここはどう？")},
								{"chara": "koishi", "exp": "look_top",  serif1: _("なにもないけど"), serif2: _("なにもないけど"), serif3: _("なにもないけど"), serif4: _("なにもないけど")},
								{"chara": "reisen", "exp": "reisen-reaction_01",  serif1: _("そんなことないわ"), serif2: _("そんなことないわ"), serif3: _("そんなことないわ"), serif4: _("そんなことないわ")},
								{"chara": "reisen", "exp": null,  serif1: _("ここには生き物が蠢いてる"), serif2: _("ここには生き物が蠢いてる"), serif3: _("ここには生き物が蠢いてる"), serif4: _("ここには生き物が蠢いてる")},
								{"chara": "reisen", "exp": "reisen-reaction_03",  serif1: _("清廉な世界なんて"), serif2: _("清廉な世界なんて"), serif3: _("清廉な世界なんて"), serif4: _("清廉な世界なんて")},
								{"chara": "reisen", "exp": null,  serif1: _("あなたも私も生きている"), serif2: _("あなたも私も生きている"), serif3: _("あなたも私も生きている"), serif4: _("あなたも私も生きている")},
								{"chara": "koishi", "exp": "look_bottom",  serif1: _("でもわたしからっぽだもの"), serif2: _("でもわたしからっぽだもの"), serif3: _("でもわたしからっぽだもの"), serif4: _("でもわたしからっぽだもの")},
								{"chara": "reisen", "exp": "reisen-reaction_02",  serif1: _("まさか！"), serif2: _("まさか！"), serif3: _("まさか！"), serif4: _("まさか！")},
								{"chara": "reisen", "exp": null,  serif1: _("そんなことないわ"), serif2: _("そんなことないわ"), serif3: _("そんなことないわ"), serif4: _("そんなことないわ")},
								{"chara": "reisen", "exp": "reisen-reaction_01",  serif1: _("あなたは愛されているもの"), serif2: _("あなたは愛されているもの"), serif3: _("あなたは愛されているもの"), serif4: _("あなたは愛されているもの")},
								{"chara": "koishi", "exp": "look_bottom",  serif1: _("でも"), serif2: _("でも"), serif3: _("でも"), serif4: _("でも")},
								{"chara": "koishi", "exp": null,  serif1: _("わかんないよ"), serif2: _("わかんないよ"), serif3: _("でもわたしほんとうは友達いないの"), serif4: _("でもわたしほんとうは友達いないの")},
								{"chara": "koishi", "exp": "look_top",  serif1: _("さみしいの"), serif2: _("さみしいの"), serif3: _("わたしからっぽなの"), serif4: _("わたしからっぽなの")},
								{"chara": "koishi", "exp": null,  serif1: _("これって虚無？"), serif2: _("これって虚無？"), serif3: _("生きてても死んでても同じよ"), serif4: _("生きてても死んでても同じよ")},
								{"chara": "reisen", "exp": "reisen-reaction_03",  serif1: _("いいわ"), serif2: _("いいわ"), serif3: _("いいわ"), serif4: _("いいわ")},
								{"chara": "reisen", "exp": null,  serif1: _("それじゃあ"), serif2: _("それじゃあ"), serif3: _("それじゃあ"), serif4: _("それじゃあ")},
								{"chara": "reisen", "exp": "reisen-reaction_01",  serif1: _("試供品をあげましょ"), serif2: _("試供品をあげましょ"), serif3: _("試供品をあげましょ"), serif4: _("試供品をあげましょ"), "option": {"getItem": "27"}},
								{"chara": "koishi", "exp": null, "serif": "", "option": {"playEvent": "chapter4-19-event-01"}},
							],
							[
								{"chara": "reisen", "exp": "reisen-reaction_01", "serif": _("死ぬってすごくこわいのよ")},
								{"chara": "reisen", "exp": null, "serif": _("死は残酷な旅の始まりなの")},
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

