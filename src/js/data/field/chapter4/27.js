'use strict';
var _ = require('i18n4v')
//・てゐ
//・蓮子
var CONSTANT = require("../../../constant");
module.exports = {
	key: "chapter4_27",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 400, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: null,
	leftField: "chapter4_26",
	upField:    null,
	downField:  null,
	background: "chapter4-27-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
		{"type": "process", "value": "playTalk", "arguments": [
			[
				{"chara": "tewireal", "exp": "tewireal-reaction_01",  serif1: _("言っとくがあっちには本当に何もないぞ"), serif2: _("言っとくがあっちには本当に何もないぞ"), serif3: _("言っとくがあっちには本当に何もないぞ"), serif4: _("言っとくがあっちには本当に何もないぞ")},
				{"chara": "renko", "exp": "renko-reaction_01",  serif1: _("メリーは東洋哲学を\nなにかはき違えているみたいね"), serif2: _("メリーは東洋哲学を\nなにかはき違えているみたいね"), serif3: _("メリーは東洋哲学を\nなにかはき違えているみたいね"), serif4: _("メリーは東洋哲学を\nなにかはき違えているみたいね")},
				{"chara": "renko", "exp": null,  serif1: _("無なんて無意味よ"), serif2: _("無なんて無意味よ"), serif3: _("無なんて無意味よ"), serif4: _("無なんて無意味よ")},
				{"chara": "tewireal", "exp": "tewireal-reaction_03",  serif1: _("なんにせよあのちんちくりんの\n化け物は本当にヤバいぞ"), serif2: _("なんにせよあのちんちくりんの\n化け物は本当にヤバいぞ"), serif3: _("なんにせよあのちんちくりんの\n化け物は本当にヤバいぞ"), serif4: _("なんにせよあのちんちくりんの\n化け物は本当にヤバいぞ")},
				{"chara": "tewireal", "exp": "tewireal-reaction_01",  serif1: _("お前には見えてないみたいだけどな"), serif2: _("お前には見えてないみたいだけどな"), serif3: _("お前には見えてないみたいだけどな"), serif4: _("お前には見えてないみたいだけどな")},
				{"chara": "tewireal", "exp": null,  serif1: _("もしあの娘を助けたかったらお前も\n空っぽの器に手を突っ込まなくちゃあいけないね"), serif2: _("もしあの娘を助けたかったらお前も\n空っぽの器に手を突っ込まなくちゃあいけないね"), serif3: _("もしあの娘を助けたかったらお前も\n空っぽの器に手を突っ込まなくちゃあいけないね"), serif4: _("もしあの娘を助けたかったらお前も\n空っぽの器に手を突っ込まなくちゃあいけないね")},
				{"chara": "renko", "exp": "renko-reaction_04",  serif1: _("おっかないなあ"), serif2: _("おっかないなあ"), serif3: _("おっかないなあ"), serif4: _("おっかないなあ")},
				{"chara": "renko", "exp": "renko-reaction_02",  serif1: _("妖怪は本当にいたのか"), serif2: _("妖怪は本当にいたのか"), serif3: _("妖怪は本当にいたのか"), serif4: _("妖怪は本当にいたのか")},
				{"chara": "tewireal", "exp": "tewireal-reaction_03",  serif1: _("......まあな"), serif2: _("......まあな"), serif3: _("......まあな"), serif4: _("......まあな")},
				{"chara": "koishi", "exp": "wait",  serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............"), "option": {"changeField": "chapter4_26"}},
			],
		]},
	],
	objects: [
		{
			no: "renko",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "蓮子",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: null,
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
			no: "tewireal",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "てゐ",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: null,
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

