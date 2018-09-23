'use strict';
var _ = require('i18n4v')
// 病院の廊下1(コンクリ、廃れてる感じ) 車椅子とかあったほうがいいかも
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_02",
	chapter: 3,
	bgm: "field5",
	rightStartPosition: {x: 800, y: 250},
	leftStartPosition:  {x: 180, y: 380},
	rightField: "chapter3_03",
	leftField: "chapter3_01",
	background: "chapter0-hospital_corridor1-bg-001",
	walkSound: "walking_bare_default",
	objects: [
		{
			no: ++I,
			image: "chapter0-hospital_corridor1-obj-01-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ストレッチャー",
			serif: [
				{"chara": "koishi","serif":_("へんなベッド")},
			],
			x: 814,
			y: 608,
			scale: 0.7,
			action_name: "touch",
			sound_name: "chapter0-hospital_corridor1-sound_strecher",
			position_type: "front",
			width: 400,
			height: 200,
		},
		{
			no: ++I,
			image: "chapter0-hospital_corridor1-obj-02-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "キャビネット",
			serif: [
				{"chara": "koishi","serif":_("風邪じゃないよ！")},
				{"chara": "koishi","serif":_("お薬飲みたくないから")},
			],
			x: 279,
			y: 378,
			scale: 0.7
		},
		{
			no: ++I,
			image: "chapter0-hospital_corridor1-obj-03-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "救急箱",
			serif: [
				{"chara": "koishi","serif":_("けがしたらここ！")},
			],
			x: 281,
			y: 280,
			scale: 0.7,
			sound_name: "chapter0-hospital_corridor1-sound_aidkit",
			target_x: 278,
			target_y: 465
		},
		{
			no: ++I,
			image: "chapter0-hospital_corridor1-obj-04-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "メス",
			serif: [
				{"chara": "koishi","serif":_("ナイフ")},
			],
			x: 853,
			y: 534,
			scale: 0.7,
			action_name: "look_front",
			position_type: "front",
		},
		/*
		{
			no: ++I,
			image: "paper", type: CONSTANT.JOURNAL_FRONT_TYPE, x: 643, y:425, scale: 2/3, journal_id: "journal002"},
		*/
	],
};


