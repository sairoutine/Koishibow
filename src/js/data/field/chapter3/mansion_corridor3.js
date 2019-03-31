'use strict';
var _ = require('i18n4v')
// 屋敷の廊下3(家具) 行き止まり (サードアイを使用すると、家具が豹変／床に扉が出現)
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_06",
	chapter: 3,
	bgm: "field6",
	//sub_bgms: ["chapter0-mansion_corridor3-clock"],
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter3_07",
	leftField: "chapter3_05",
	upField: null,
	downField: null,
	background: "chapter3-06-bg-001",
	walkSound: "walking_bare_wood",
	objects: [
		{
			no: ++I,
			image: "chapter3-mspassage-obj-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "振子時計",
			serif: [
				{"chara": "koishi","serif": _("あれ？")},
				{"chara": "koishi", serif1: _("動いてないな"), serif2: _("なんで動いてないんだろう？"), serif3: _("なんで動いてないんだろう？"), serif4: _("なんで動いてないんだろう？")},
				{"chara": "koishi", serif1: _("寝ちゃったの？"), serif2: _("お姉ちゃんがネジ巻き忘れたのかな"), serif3: _("お姉ちゃんがネジ巻き忘れたのかな"), serif4: _("お姉ちゃんがネジ巻き忘れたのかな")},
			],
			x: 145,
			y: 230,
			width: 200,
			height: 450,
			scale: 2/3,
			action_name: "look_top",
			sound_name:      "chapter3-mansion_corridor3-breaked_clock",
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "雪",
			serif: [
				{"chara": "koishi", serif1: _("雪！"), serif2: _("雪！"), serif3: _("雪！"), serif4: _("雪！")},
				{"chara": "koishi", serif1: _("つめたーい"), serif2: _("寒いはずだわ"), serif3: _("寒いはずだわ"), serif4: _("寒いはずだわ"), "option": {"changeField": "chapter3_07"}},
			],
			width: 400, height: 1000,
			action_name: "touch",
			x: 600, y: 300,
		},
		{
			no: ++I,
			type: CONSTANT.JOURNAL_BACK_TYPE,
			x: 320, y: 500,
			journal_id: "journal019",
		},
	],
};

