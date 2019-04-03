'use strict';
var _ = require('i18n4v')
// ・死体蓮子
// ・死体メリー
// ・テープ「」
// ・優曇華院

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_25",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 480, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: "chapter4_26",
	leftField:  null,
	upField:    null,
	downField:  null,
	background: "chapter4-25-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4_25_40440"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_front",  serif1: _("うわ"), serif2: _("うわ"), serif3: _("うわ"), serif4: _("うわ")},
						{"chara": "koishi", "exp": null,  serif1: _("死んでる"), serif2: _("死んじゃってる"), serif3: _("死んじゃってる"), serif4: _("死んじゃってる")},
						{"chara": "reisen", "exp": "reisen-reaction_03",  serif1: _("この人たちはもう間に合わない"), serif2: _("この人たちはもう間に合わない"), serif3: _("この人たちはもう間に合わない"), serif4: _("この人たちはもう間に合わない")},
						{"chara": "reisen", "exp": "reisen-reaction_04",  serif1: _("残念、商機を逸したわ"), serif2: _("残念、商機を逸したわ"), serif3: _("残念、商機を逸したわ"), serif4: _("残念、商機を逸したわ")},
						{"chara": "reisen", "exp": null,  serif1: _("まいったなー"), serif2: _("まいったなー"), serif3: _("まいったなー"), serif4: _("まいったなー")},
						{"chara": "reisen", "exp": null, "serif": _("診療所に来る人間を待ち伏せして薬を売る作戦だったのに")},
						{"chara": "koishi", "exp": "look_top",  serif1: _("この人なんで死んだの？"), serif2: _("なんで死んじゃったんだろう"), serif3: _("なんで死んじゃったんだろう"), serif4: _("なんで死んじゃったんだろう")},
						{"chara": "reisen", "exp": "reisen-reaction_01",  serif1: _("さあ？"), serif2: _("さあ？"), serif3: _("さあ？"), serif4: _("さあ？")},
						{"chara": "reisen", "exp": null,  serif1: _("あなたはどう思う？"), serif2: _("あなたはどう思う？"), serif3: _("あなたはどう思う？"), serif4: _("あなたはどう思う？")},
						{"chara": "koishi", "exp": "look_top",  serif1: _("狼に食べられちゃったとか"), serif2: _("きっと獣に襲われたのよ"), serif3: _("きっと獣に襲われたのよ"), serif4: _("きっと獣に襲われたのよ")},
						{"chara": "reisen", "exp": "reisen-reaction_01",  serif1: _("まあ怖い"), serif2: _("まあ怖い"), serif3: _("まあ怖い"), serif4: _("まあ怖い")},
						{"chara": "koishi", "exp": "look_front",  serif1: _("違うの？"), serif2: _("違うの？"), serif3: _("違うの？"), serif4: _("違うの？")},
						{"chara": "reisen", "exp": "reisen-reaction_01",  serif1: _("さあ？"), serif2: _("さあ？"), serif3: _("さあ？"), serif4: _("さあ？")},
						{"chara": "reisen", "exp": null,  serif1: _("私は別に死んだ人間には興味ないし"), serif2: _("私は別に死んだ人間には興味ないし"), serif3: _("私は別に死んだ人間には興味ないし"), serif4: _("私は別に死んだ人間には興味ないし")},
						{"chara": "reisen", "exp": "reisen-reaction_02",  serif1: _("気になるなら調べてみたら？"), serif2: _("気になるなら調べてみたら？"), serif3: _("気になるなら調べてみたら？"), serif4: _("気になるなら調べてみたら？")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4_25_40440"]}
			],
		]},
	],
	objects: [
		{
			no: ++I,
			image: "chapter4-25-obj-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "死体",
			serif: [
				{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter4_25-" + I + "-limit", 1], "serifs": [
					[
						{"chara": "koishi", "exp": "touch",  serif1: _("手がかりがあるかも！"), serif2: _("お手紙とかないかな"), serif3: _("お手紙とかないかな"), serif4: _("お手紙とかないかな")},
						{"chara": "reisen", "exp": "reisen-reaction_03",  serif1: _("自殺ならあるかもね"), serif2: _("自殺ならあるかもね"), serif3: _("自殺ならあるかもね"), serif4: _("自殺ならあるかもね")},
						{"chara": "reisen", "exp": null,  serif1: _("ここでは珍しいけど"), serif2: _("ここでは珍しいけど"), serif3: _("ここでは珍しいけど"), serif4: _("ここでは珍しいけど")},
						{"chara": "koishi", "exp": "look_top",  serif1: _("自殺って？"), serif2: _("自殺って？"), serif3: _("自殺って？"), serif4: _("自殺って？")},
						{"chara": "reisen", "exp": "reisen-reaction_01",  serif1: _("言葉通りよ"), serif2: _("言葉通りよ"), serif3: _("言葉通りよ"), serif4: _("言葉通りよ")},
						{"chara": "reisen", "exp": null,  serif1: _("自分で自分を殺すの"), serif2: _("自分で自分を殺すの"), serif3: _("自分で自分を殺すの"), serif4: _("自分で自分を殺すの")},
						{"chara": "koishi", "exp": "wait", "serif": _("......")},
						{"chara": "koishi", "exp": null,  serif1: _("それって痛くないの"), serif2: _("痛そうだわ"), serif3: _("痛そうだわ"), serif4: _("痛そうだわ")},
						{"chara": "reisen", "exp": "reisen-reaction_02",  serif1: _("さあ"), serif2: _("さあ"), serif3: _("さあ"), serif4: _("さあ")},
						{"chara": "reisen", "exp": null,  serif1: _("私はできなかったから知らない"), serif2: _("私はできなかったから知らない"), serif3: _("私はできなかったから知らない"), serif4: _("私はできなかったから知らない")},
						{"chara": "koishi", "exp": "look_front", "serif": _("あ！")},
						{"chara": "koishi", "exp": "touch", "serif": _("あった！"), "option": {"getItem": "25"}},
						{"id": "chapter4-23-show_tape4", "save": true},
						{"chara": "koishi", "exp": "look_top", "serif": _("あれ？")},
						{"chara": "koishi", "exp": null,  serif1: _("これちがう？"), serif2: _("メリーのじゃないかも"), serif3: _("メリーのじゃないかも"), serif4: _("メリーのじゃないかも")},
					],
					[
						{"chara": "koishi","exp": "touch",  serif1: _("きもちわるい"), serif2: _("きもちわるい"), serif3: _("きもちわるい"), serif4: _("きもちわるい")},
						{"chara": "koishi","exp": null,  serif1: _("かみのけぐちゃぐちゃだもん"), serif2: _("かみのけぐちゃぐちゃだもん"), serif3: _("誰なの？"), serif4: _("誰なの？")},
					],
				]},
			],
			x: 1057.50*2/3, y:648.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},
		{
			no: "reisen",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "鈴仙",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: null,
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

