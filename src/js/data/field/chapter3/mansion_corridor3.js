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
				{"chara": "koishi","serif":_("あれ？")},
				{"chara": "koishi","serif":_("動いてないな")},
				{"chara": "koishi","serif":_("寝ちゃったの？")},
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
				{"chara": "koishi","serif":_("雪！")},
				{"chara": "koishi","serif":_("つめたーい"), "option": {"changeField": "chapter3_07"}},
			],
			width: 400, height: 1000,
			action_name: "touch",
			x: 600, y: 300,
		},
		{
			no: ++I,
			image: "paper",
			type: CONSTANT.JOURNAL_BACK_TYPE,
			x: 320, y: 500,
			scale: 2/3,
			journal_id: "journal019",
		},
	],
};

