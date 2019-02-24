'use strict';
var _ = require('i18n4v')
// メリー
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_24",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: null,
	leftField: null,
	background: "chapter4-24-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter4_24_40400"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_top", "serif":_("木ばっかり！")},
						{"chara": "merry", "exp": "merry-reaction_09", "serif":_("竹って言うのよ")},
						{"chara": "merry", "exp": "merry-reaction_03", "serif":_("ちょっと疲れたわ")},
						{"chara": "merry", "exp": null, "serif":_("休憩しましょ")},
						{"chara": "koishi", "exp": "yes", "serif":_("うん")},
						{"chara": "merry", "exp": "merry-reaction_08", "serif":_("そうだわ")},
						{"chara": "merry", "exp": null, "serif":_("どこかこの辺りにテープを落としたの")},
						{"chara": "merry", "exp": null, "serif":_("新品の――")},
						{"chara": "merry", "exp": null, "serif":_("音の入っていないテープよ")},
						{"chara": "merry", "exp": "merry-reaction_05", "serif":_("もし見つけたら拾っておいて")},
						{"chara": "koishi", "exp": "yes", "serif":_("わかったー")},
						{"chara": "koishi", "exp": "look_top", "serif":_("れんこはいいの？")},
						{"chara": "merry", "exp": "merry-reaction_06", "serif":_("いまはいいわ")},
						{"chara": "merry", "exp": "merry-reaction_09", "serif":_("好きにさせてあげましょ")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4_24_40400"]}
			],
		]},
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "上へのフィールド移動",
			x: 480,
			y: 720 - CONSTANT.WALK_DEPTH_LIMIT,
			width: 960,
			height: 10,
			next_field_name: "chapter4_21",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー",
			loop: true,
			serif_back: [],
			serif: [
				{"chara": "koishi","serif":_("テスト")},
			],
			x: 1160*2/3, y: 505*2/3,
			anime1: "merry-wait",
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


	],
};

