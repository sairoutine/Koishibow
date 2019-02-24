'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_08",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter4_09",
	leftField: null,
	background: "chapter4-08-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
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
			next_field_name: "chapter4_05",
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
		{
			no: ++I,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			image: "item_22",
			name: "カセットプレイヤー",
			serif: [
				{"chara": "koishi", "exp": "look_front", "serif":_("あれ？")},
				{"chara": "koishi", "exp": null, "serif":_("これひょっとして")},
				{"chara": "merry", "exp": "merry-reaction_05", "serif":_("あ！")},
				{"chara": "merry", "exp": "merry-reaction_07", "serif":_("それがさっき言ってたものよ")},
				{"chara": "koishi", "exp": "look_front", "serif":_("お友達？")},
				{"chara": "merry", "exp": "merry-reaction_09", "serif":_("......そっちじゃなくて")},
				{"chara": "merry", "exp": "merry-reaction_07", "serif":_("カセットテープを流す機械")},
				{"chara": "koishi", "exp": "look_front", "serif":_("これがそれ？")},
				{"chara": "koishi", "exp": null, "serif":_("ちっちゃいなー")},
				// カセットプレイヤーを非表示
				{"id": "chapter4-08-show_player", "save": true},
				// カセットプレイヤー獲得
				{"chara": "koishi","serif":"", "option": {"getItem": "22"}},
				{"chara": "merry", "exp": "merry-reaction_05", "serif":_("しばらく貸してあげるわ")},
			],
			x:359.50*2/3, y:762.*2/3,
			scale: 2/3,
			sound_name: null,
			position_type: "lying",
			not_show_if_event_true: "chapter4-08-show_player",
		},
	],
};

