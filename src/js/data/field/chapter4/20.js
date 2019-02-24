'use strict';
var _ = require('i18n4v')
//↑へ移動でDエリアへ移動
// 地蔵が道をふさいでいる。
// テープ「般若心経」を再生して
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_20",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter4_21",
	leftField: "chapter4_19",
	background: "chapter4-20-bg-001",
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
			next_field_name: "chapter4_42",
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "下へのフィールド移動",
			x: 480,
			y: 710,
			width: 960,
			height: 10,
			next_field_name: "chapter4_23",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "地蔵",
			serif: [
				{"chara": "koishi", "exp": "look_front", "serif":_("なにこれ")},
				{"chara": I, "serif":_("おや")},
				{"chara": I, "serif":_("あなたは？")},
				{"chara": "koishi", "exp": "look_front", "serif":_("わたし？")},
				{"chara": "koishi", "exp": "yes", "serif":_("わたしはこいし")},
				{"chara": I, "serif":_("こいし......")},
				{"chara": I, "serif":_("あなたは何処へ向かっているのですか")},
				{"chara": "koishi", "exp": "look_front", "serif":_("この先")},
				{"chara": "chapter4-20-obj-02", "exp": "chapter4-20-obj-02-obj01", "serif":_("いいえ")},
				{"chara": I, "serif":_("あなたは何を為そうとしているのですか")},
				{"chara": "koishi", "exp": "look_front", "serif":_("なに？")},
				{"chara": I, "serif":_("私はこの先の「虚無」に人が迷い込まぬよう見守っています")},
				{"chara": I, "serif":_("知恵持たずして生きるは磁針無くして海漕ぎ出づるに同じ")},
				{"chara": "renko", "serif":_("げっ")},
				{"chara": "renko", "serif":_("いま地蔵がしゃべった？")},
				{"chara": "renko", "serif":_("いよいよ奇怪ね")},
				{"chara": "renko", "serif":_("いまの意味わかった？")},
				{"chara": "renko", "serif":_("とりあえずあたりを調べなきゃね")},
				{"chara": "renko", "serif":_("......")},
				{"chara": "renko", "serif":_("喋り続けないと静けさで狂いそうだわ")},
			],
			width: 100,
			height: 100,
			x: 739.50*2/3, y: 737.50*2/3,
			scale: 2/3,
			anime1: "chapter4-20-obj-01_anime_1",
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
			no: "renko",
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "蓮子",
			serif: null,
			width: 0, height: 0,
			x: 960, y: 360,
		},

	],
};

