'use strict';
var _ = require('i18n4v')
//・テープ「チャルメラ」
// ・メリー
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_05",
	chapter: 4,
	bgm: "field10",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter4_06",
	leftField: "chapter4_04",
	background: "chapter4-05-bg-001",
	walkSound: "walking_bare_sand",
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
			next_field_name: "chapter4_08",
		},
		{
			no: "merry",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー",
			loop: true,
			serif_back: [],
			serif: null,
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
			image: "item_23",
			name: "カセットテープ「チャルメラ」",
			serif: [
				//カセットテープ「チャルメラ」獲得
				{"chara": "koishi", "exp": "touch", "serif":_("またみっけた！	またあった！"), "option": {"getItem": "24"}},
				//カセットテープ「チャルメラ」を非表示
				{"id": "chapter4-03-show_tape2", "save": true},
				{"chara": "merry", "exp": "merry-reaction_05", "serif":_("竹林の中にテープ？")},
				{"chara": "koishi", "exp": "yes", "serif":_("へんなの")},
				{"chara": "koishi", "exp": "look_top", "serif":_("誰かが落としたのかな")},
				{"chara": "merry", "exp": "merry-reaction_08", "serif":_("うーんどうかな")},
				{"chara": "merry", "exp": null, "serif":_("蓮子のじゃあないと思うんだけど")},
				{"chara": "koishi", "exp": "look_top", "serif":_("蓮子って？")},
				{"chara": "koishi", "exp": null, "serif":_("さがしてるお友達のこと？")},
				{"chara": "merry", "exp": "merry-reaction_06", "serif":_("そうよ")},
				{"chara": "koishi", "exp": "yes", "serif":_("れんこんさんみたい！")},
				{"chara": "merry", "exp": "merry-reaction_06", "serif":_("本当にそういう字を書くのよ")},
				{"chara": "koishi", "exp": "look_front", "serif":_("えっ")},
				{"chara": "koishi", "exp": "wait", "serif":_("......")},
				{"chara": "koishi", "exp": null, "serif":_("どういうこと")},
				{"chara": "merry", "exp": "merry-reaction_05", "serif":_("ごめん、難しかったわね")},
				{"chara": "merry", "exp": null, "serif":_("今のは忘れて")},
				{"chara": "koishi", "exp": "wait", "serif":_("蓮根がお友達だなんて")},
				{"chara": "koishi", "exp": "look_bottom", "serif":_("忘れられないよ")},
				{"chara": "merry", "exp": "merry-wait", "serif":_("......")},
				{"chara": "koishi", "exp": "look_bottom", "serif":_("......")},
				{"chara": "merry", "exp": "merry-reaction_07", "serif":_("あなたにはどんな友達がいるの？")},
				{"chara": "koishi", "exp": "wait", "serif":_("わたし？")},
				{"chara": "koishi", "exp": null, "serif":_("いっぱい")},
				{"chara": "koishi", "exp": "look_bottom", "serif":_("えっとね、")},
				{"chara": "koishi", "exp": null, "serif":_("えっと......")},
				{"chara": "koishi", "exp": "yes", "serif":_("いっぱいいるよ")},
				{"chara": "koishi", "exp": null, "serif":_("......")},
				{"chara": "merry", "exp": "merry-reaction_09", "serif":_("そうなんだ")},
			],
			x:359.50*2/3, y:762.*2/3,
			scale: 2/3,
			sound_name: null,
			position_type: "lying",
			not_show_if_event_true: "chapter4-03-show_tape2",
		},



	],
};

