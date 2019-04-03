'use strict';
var _ = require('i18n4v')
// てゐ
var CONSTANT = require("../../../constant");
module.exports = {
	key: "chapter4_22",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 480, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: "chapter4_23",
	leftField:  null,
	upField:    "chapter4_19",
	downField:  null,
	background: "chapter4-22-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
	],
	objects: [
		{
			no: "tewireal",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "てゐ",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: [
				{"chara": "koishi", "exp": "look_front",  serif1: _("こんにちは"), serif2: _("こんにちは"), serif3: _("こんにちは"), serif4: _("こんにちは")},
				{"chara": "tewireal", "exp": "tewireal-reaction_02",  serif1: _("おいまたお前か！"), serif2: _("おいまたお前か！"), serif3: _("おいまたお前か！"), serif4: _("おいまたお前か！")},
				{"chara": "tewireal", "exp": null,  serif1: _("うっとおしいなあ"), serif2: _("うっとおしいなあ"), serif3: _("うっとおしいなあ"), serif4: _("うっとおしいなあ")},
				{"chara": "koishi", "exp": "yes",  serif1: _("探し物してるの"), serif2: _("探し物してるの"), serif3: _("探し物してるの"), serif4: _("探し物してるの")},
				{"chara": "koishi", "exp": "look_front",  serif1: _("お手伝いして！"), serif2: _("お手伝いして！"), serif3: _("お手伝いして！"), serif4: _("お手伝いして！")},
				{"chara": "tewireal", "exp": "tewireal-reaction_01", "serif": _("なんで")},
				{"chara": "koishi", "exp": "look_top", "serif": _("なんで？")},
				{"chara": "koishi", "exp": null,  serif1: _("手伝わないの？"), serif2: _("手伝わないの？"), serif3: _("手伝わないの？"), serif4: _("手伝わないの？")},
				{"chara": "tewireal", "exp": "tewireal-reaction_01",  serif1: _("なんで手伝わなきゃならないのさ"), serif2: _("なんで手伝わなきゃならないのさ"), serif3: _("なんで手伝わなきゃならないのさ"), serif4: _("なんで手伝わなきゃならないのさ")},
				{"chara": "koishi", "exp": "look_bottom",  serif1: _("手伝うのが友達じゃないの......"), serif2: _("手伝うのが友達じゃないの......"), serif3: _("手伝うのが友達じゃないの......"), serif4: _("手伝うのが友達じゃないの......")},
				{"chara": "tewireal", "exp": "tewireal-wait",  serif1: _("お前友達じゃないだろ"), serif2: _("お前友達じゃないだろ"), serif3: _("お前友達じゃないだろ"), serif4: _("お前友達じゃないだろ")},
				{"chara": "koishi", "exp": "look_front",  serif1: _("そうなの？"), serif2: _("そうなの？"), serif3: _("そうなの？"), serif4: _("そうなの？")},
				{"chara": "tewireal", "exp": "tewireal-reaction_03",  serif1: _("ほら、とっとと失せやがれ"), serif2: _("ほら、とっとと失せやがれ"), serif3: _("ほら、とっとと失せやがれ"), serif4: _("ほら、とっとと失せやがれ")},
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

