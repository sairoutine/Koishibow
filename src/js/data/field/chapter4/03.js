'use strict';
var _ = require('i18n4v');
// ・テープ「BGM1」
// ・メリー

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_03",
	chapter: 4,
	bgm: "silent",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: null,
	leftField: "chapter4_02",
	background: "chapter4-03-bg-001",
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
			next_field_name: "chapter4_06",
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
			image: "item_23",
			name: "カセットテープ1",
			serif: [
				{"chara": "koishi", "exp": "touch", "serif":_("あ！")},
				{"chara": "koishi", "exp": null, "serif":_("なにこれ")},
				{"chara": "merry", "exp": "merry-reaction_05", "serif":_("まあ、カセットテープ！")},
				{"chara": "koishi", "exp": "look_front", "serif":_("なにそれ")},
				{"chara": "merry", "exp": "merry-reaction_07", "serif":_("これに音を録音して再生できるのよ")},
				{"chara": "merry", "exp": null, "serif":_("探していたの")},
				{"chara": "merry", "exp": "merry-reaction_06", "serif":_("こないだ落としたのね")},
				{"chara": "koishi", "exp": "look_front", "serif":_("録音てなに")},
				{"chara": "merry", "exp": "merry-wait", "serif":_("......")},
				{"chara": "merry", "exp": "merry-reaction_06", "serif":_("そうよね")},
				{"chara": "merry", "exp": "merry-reaction_05", "serif":_("この中に音をためておいて、あとから聞けるのよ")},
				{"chara": "koishi", "exp": "look_front", "serif":_("レコードみたい！")},
				{"chara": "merry", "exp": "merry-reaction_06", "serif":_("レコードは知ってるのね")},
				{"chara": "koishi", "exp": "look_front", "serif":_("見たことあるから")},
				{"chara": "koishi", "exp": null, "serif":_("使ってみて！")},
				{"chara": "merry", "exp": "merry-wait", "serif":_("いまはできないわ")},
				{"chara": "koishi", "exp": "look_front", "serif":_("どうして？")},
				{"chara": "merry", "exp": "merry-reaction_05", "serif":_("レコードも円盤だけじゃなくて蓄音機がいるでしょ？")},
				{"chara": "merry", "exp": null, "serif":_("これは蓄音機。円盤がいるの")},
				{"chara": "koishi", "exp": "look_top", "serif":_("もってないの？")},
				{"chara": "merry", "exp": "merry-wait", "serif":_("いまは持ってないわ")},
				{"chara": "koishi", "exp": "touch", "serif":_("じゃあ探そうよ！")},
				//カセットテープ1を非表示
				{"id": "chapter4-03-show_tape1", "save": true},
				// カセットテープ1獲得
				{"chara": "koishi","serif":"", "option": {"getItem": "23"}},
			],
			x:359.50*2/3, y:762.*2/3,
			scale: 2/3,
			sound_name: null,
			position_type: "lying",
			not_show_if_event_true: "chapter4-03-show_tape1",
		},



	],
};

