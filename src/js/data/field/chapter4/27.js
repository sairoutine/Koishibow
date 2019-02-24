'use strict';
var _ = require('i18n4v')
//・てゐ
//・蓮子
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_27",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: null,
	leftField: "chapter4_26",
	background: "chapter4-27-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "process", "value": "playTalk", "arguments": [
			{"chara": "tewireal", "exp": "tewireal-reaction_01", "serif":_("言っとくがあっちには本当に何もないぞ")},
			{"chara": "renko", "exp": "renko-reaction_01", "serif":_("メリーは東洋哲学をなにかはき違えているみたいね")},
			{"chara": "renko", "exp": null, "serif":_("無なんて無意味よ")},
			{"chara": "tewireal", "exp": "tewireal-reaction_03", "serif":_("なんにせよあのちんちくりんの化け物は本当にヤバいぞ")},
			{"chara": "tewireal", "exp": "tewireal-reaction_01", "serif":_("お前には見えてないみたいだけどな")},
			{"chara": "tewireal", "exp": null, "serif":_("もしあの娘を助けたかったらお前も空っぽの器に手を突っ込まなくちゃあいけないね")},
			{"chara": "voice", "exp": "voice-reaction_04", "serif":_("おっかないなあ")},
			{"chara": "renko", "exp": "renko-reaction_02", "serif":_("妖怪は本当にいたのか")},
			{"chara": "tewireal", "exp": "tewireal-reaction_03", "serif":_("......まあな")},
			{"chara": "koishi", "exp": "wait", "serif":_("............")},
		]},
		{"type": "process", "value": "changeField", "arguments": ["chapter4-26"]},
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "蓮子",
			loop: true,
			serif_back: [],
			serif: [
				{"chara": "koishi","serif":_("テスト")},
			],
			x: 960*2/3, y: 505*2/3,
			anime1: "renko-wait",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "てゐ",
			loop: true,
			serif_back: [],
			serif: [
				{"chara": "koishi","serif":_("テスト")},
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



	],
};

