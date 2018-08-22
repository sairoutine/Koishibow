'use strict';
var _ = require("i18n4v")
// 病院の廊下2(こころ)
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_03",
	chapter: 3,
	bgm: "field5",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	rightField: "chapter3_04",
	leftField: "chapter3_02",
	background: "chapter0-hospital2-bg-001",
	walkSound: "walking_bare_default",
	objects: [
		{
			no: ++I,
			image: "chapter0-hospital2-obj-02-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "くつした",
			serif: [
				{"chara": "koishi","serif":_("きらいだけどきなきゃだめ？")},
			],
			x: 302,
			y: 443,
			scale: 0.7,
			action_name: "look_bottom",
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "車イス",
			serif: [
				{"chara": "koishi","serif":_("雪の中で乗ったらすごいんじゃない？")},
			],
			x: 130,
			y: 360,
			scale: 0.7,
			anime1: "chapter0-hospital_corridor2-obj-01-01-obj01",
			anime2: "chapter0-hospital_corridor2-obj-01-01-obj02",
			anime3:"chapter0-hospital_corridor2-obj-01-01-obj03",
			action_name: "touch",
			sound_name: "chapter0-hospital_corridor2-move_wheelchair",
			width: 258,
			height: 280
		},
		/*
		{
			no: ++I,
			image: "paper", type: CONSTANT.JOURNAL_TYPE, x: 627, y: 689, scale: 2/3, journal_id: "journal003"},
		*/
	],

};

