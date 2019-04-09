'use strict';
var _ = require('i18n4v');
// ・テープ「BGM1」
// ・メリー

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_03",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 400, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: null,
	leftField: "chapter4_02",
	upField:    null,
	downField:  "chapter4_06",
	background: "chapter4-03-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
	],
	objects: [
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
			name: "カセットテープ1",
			serif: [
				{"chara": "koishi", "exp": "touch", "serif": _("あ！")},
				{"chara": "koishi", "exp": null, "serif": _("なにこれ")},
				{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("まあ、カセットテープ！"), serif2: _("まあ、カセットテープ！"), serif3: _("まあ、カセットテープ！"), serif4: _("まあ、カセットテープ！")},
				{"chara": "koishi", "exp": "look_front", "serif": _("なにそれ")},
				{"chara": "merry", "exp": "merry-reaction_07",  serif1: _("これに音を録音して再生できるのよ"), serif2: _("これに音を録音して再生できるのよ"), serif3: _("これに音を録音して再生できるのよ"), serif4: _("これに音を録音して再生できるのよ")},
				{"chara": "merry", "exp": null,  serif1: _("探していたの"), serif2: _("探していたの"), serif3: _("探していたの"), serif4: _("探していたの")},
				{"chara": "merry", "exp": "merry-reaction_06",  serif1: _("こないだ落としたのね"), serif2: _("こないだ落としたのね"), serif3: _("こないだ落としたのね"), serif4: _("こないだ落としたのね")},
				{"chara": "koishi", "exp": "look_front",  serif1: _("録音てなに"), serif2: _("録音って？"), serif3: _("録音ってどういう意味？"), serif4: _("録音ってどういう意味？")},
				{"chara": "merry", "exp": "merry-wait", "serif": _("......")},
				{"chara": "merry", "exp": "merry-reaction_06",  serif1: _("そうよね"), serif2: _("そうよね"), serif3: _("そうよね"), serif4: _("そうよね")},
				{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("この中に音をためておいて、あとから聞けるのよ"), serif2: _("この中に音をためておいて、あとから聞けるのよ"), serif3: _("この中に音をためておいて、あとから聞けるのよ"), serif4: _("この中に音をためておいて、あとから聞けるのよ")},
				{"chara": "koishi", "exp": "look_front",  serif1: _("レコードみたい！"), serif2: _("レコードみたい！"), serif3: _("レコードみたい！"), serif4: _("レコードみたい！")},
				{"chara": "merry", "exp": "merry-reaction_06",  serif1: _("レコードは知ってるのね"), serif2: _("レコードは知ってるのね"), serif3: _("レコードは知ってるのね"), serif4: _("レコードは知ってるのね")},
				{"chara": "koishi", "exp": "look_front",  serif1: _("見たことあるから"), serif2: _("見たことあるから"), serif3: _("友達が持ってた"), serif4: _("友達が持ってた")},
				{"chara": "koishi", "exp": null,  serif1: _("使ってみて！"), serif2: _("やってみて！"), serif3: _("やってみて！"), serif4: _("やってみて！")},
				{"chara": "merry", "exp": "merry-wait",  serif1: _("いまはできないわ"), serif2: _("いまはできないわ"), serif3: _("いまはできないわ"), serif4: _("いまはできないわ")},
				{"chara": "koishi", "exp": "look_front",  serif1: _("どうして？"), serif2: _("どうして？"), serif3: _("どうして？"), serif4: _("どうして？")},
				{"chara": "merry", "exp": "merry-reaction_05", "serif": _("レコードも円盤だけじゃなくて\n蓄音機がいるでしょ？")},
				{"chara": "merry", "exp": null,  serif1: _("これは蓄音機。円盤がいるの"), serif2: _("これは蓄音機。円盤がいるの"), serif3: _("これは蓄音機。円盤がいるの"), serif4: _("これは蓄音機。円盤がいるの")},
				{"chara": "koishi", "exp": "look_top",  serif1: _("もってないの？"), serif2: _("もってないの？"), serif3: _("もってないの？"), serif4: _("もってないの？")},
				{"chara": "merry", "exp": "merry-wait",  serif1: _("いまは持ってないわ"), serif2: _("いまは持ってないわ"), serif3: _("いまは持ってないわ"), serif4: _("いまは持ってないわ")},
				{"chara": "koishi", "exp": "touch",  serif1: _("じゃあ探そうよ！"), serif2: _("じゃあ探そうよ！"), serif3: _("残念"), serif4: _("残念")},
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

