'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter4_08",
	chapter: 4,
	bgm: "field10",
	rightStartPosition:   {x: 790, y: 480},
	leftStartPosition:    {x: 140, y: 480},
	defaultStartPosition: {x: 140, y: 480, isTowardLeft: false},
	upStartPosition:      {x: 480, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: "chapter4_09",
	leftField:  null,
	upField:    "chapter4_05",
	downField:  null,
	background: "chapter4-08-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
	],
	objects: [
		{
			no: "merry",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
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
			image: "item_22",
			name: "カセットプレイヤー",
			serif: [
				{"chara": "koishi", "exp": "look_front", "serif": _("あれ？")},
				{"chara": "koishi", "exp": null,  serif1: _("これひょっとして"), serif2: _("これひょっとして"), serif3: _("これひょっとして"), serif4: _("これひょっとして")},
				{"chara": "merry", "exp": "merry-reaction_05", "serif": _("あ！")},
				{"chara": "merry", "exp": "merry-reaction_07",  serif1: _("それがさっき言ってたものよ"), serif2: _("それがさっき言ってたものよ"), serif3: _("それがさっき言ってたものよ"), serif4: _("それがさっき言ってたものよ")},
				{"chara": "koishi", "exp": "look_front", "serif": _("お友達？")},
				{"chara": "merry", "exp": "merry-reaction_09",  serif1: _("......そっちじゃなくて"), serif2: _("......そっちじゃなくて"), serif3: _("......そっちじゃなくて"), serif4: _("......そっちじゃなくて")},
				{"chara": "merry", "exp": "merry-reaction_07",  serif1: _("カセットテープを流す機械"), serif2: _("カセットテープを流す機械"), serif3: _("カセットテープを流す機械"), serif4: _("カセットテープを流す機械")},
				{"chara": "koishi", "exp": "look_front",  serif1: _("これがそれ？"), serif2: _("これがそれ？"), serif3: _("これがそれ？"), serif4: _("これがそれ？")},
				{"chara": "koishi", "exp": null,  serif1: _("ちっちゃいなー"), serif2: _("ちっちゃいなー"), serif3: _("ちっちゃいなー"), serif4: _("ちっちゃいなー")},
				// カセットプレイヤーを非表示
				{"id": "chapter4-08-show_player", "save": true},
				// カセットプレイヤー獲得
				{"chara": "koishi","serif":"", "option": {"getItem": "22"}},
				{"chara": "merry", "exp": "merry-reaction_05",  serif1: _("しばらく貸してあげるわ"), serif2: _("しばらく貸してあげるわ"), serif3: _("しばらく貸してあげるわ"), serif4: _("しばらく貸してあげるわ")},
			],
			x:359.50*2/3, y:762.*2/3,
			scale: 2/3,
			sound_name: null,
			position_type: "lying",
			not_show_if_event_true: "chapter4-08-show_player",
		},
	],
};

