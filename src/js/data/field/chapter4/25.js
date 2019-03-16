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
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter4_26",
	leftField: null,
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
						{"chara": "koishi", "exp": "look_front", "serif":_("うわ")},
						{"chara": "koishi", "exp": null, "serif":_("死んでる")},
						{"chara": "reisen", "exp": "reisen-reaction_03", "serif":_("この人たちはもう間に合わない")},
						{"chara": "reisen", "exp": "reisen-reaction_04", "serif":_("残念、商機を逸したわ")},
						{"chara": "reisen", "exp": null, "serif":_("まいったなー")},
						{"chara": "reisen", "exp": null, "serif":_("診療所に来る人間を待ち伏せして薬を売る作戦だったのに")},
						{"chara": "koishi", "exp": "look_top", "serif":_("この人なんで死んだの？")},
						{"chara": "reisen", "exp": "reisen-reaction_01", "serif":_("さあ？")},
						{"chara": "reisen", "exp": null, "serif":_("あなたはどう思う？")},
						{"chara": "koishi", "exp": "look_top", "serif":_("狼に食べられちゃったとか")},
						{"chara": "reisen", "exp": "reisen-reaction_01", "serif":_("まあ怖い")},
						{"chara": "koishi", "exp": "look_front", "serif":_("違うの？")},
						{"chara": "reisen", "exp": "reisen-reaction_01", "serif":_("さあ？")},
						{"chara": "reisen", "exp": null, "serif":_("私は別に死んだ人間には興味ないし")},
						{"chara": "reisen", "exp": "reisen-reaction_02", "serif":_("気になるなら調べてみたら？")},
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
				{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter4_25-" + I + "-limit", 2], "serifs": [
					[
						{"chara": "koishi", "exp": "touch", "serif":_("手がかりがあるかも！")},
						{"chara": "reisen", "exp": "reisen-reaction_03", "serif":_("自殺ならあるかもね")},
						{"chara": "reisen", "exp": null, "serif":_("ここでは珍しいけど")},
						{"chara": "koishi", "exp": "look_top", "serif":_("自殺って？")},
						{"chara": "reisen", "exp": "reisen-reaction_01", "serif":_("言葉通りよ")},
						{"chara": "reisen", "exp": null, "serif":_("自分で自分を殺すの")},
						{"chara": "koishi", "exp": "wait", "serif":_("......")},
						{"chara": "koishi", "exp": null, "serif":_("それって痛くないの")},
						{"chara": "reisen", "exp": "reisen-reaction_02", "serif":_("さあ")},
						{"chara": "reisen", "exp": null, "serif":_("私はできなかったから知らない")},
						{"chara": "koishi", "exp": "look_front", "serif":_("あ！")},
						{"chara": "koishi", "exp": "touch", "serif":_("あった！"), "option": {"getItem": "25"}},
						{"id": "chapter4-23-show_tape4", "save": true},
						{"chara": "koishi", "exp": "look_top", "serif":_("あれ？")},
						{"chara": "koishi", "exp": null, "serif":_("これちがう？")},
					],
					[
						{"chara": "koishi","exp": "touch", "serif": _("きもちわるい")},
						{"chara": "koishi","exp": null, "serif": _("かみのけぐちゃぐちゃだもん")},
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

