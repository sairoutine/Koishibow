'use strict';
var _ = require('i18n4v')
// 病院の廊下1(コンクリ、廃れてる感じ) 車椅子とかあったほうがいいかも
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_02",
	chapter: 3,
	bgm: "field5",
	rightStartPosition:   {x: 800, y: 250},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter3_03",
	leftField: "chapter3_01",
	upField: null,
	downField: null,
	background: "chapter0-hospital_corridor1-bg-001",
	walkSound: "walking_bare_default",
	objects: [
		{
			no: ++I,
			image: "chapter0-hospital_corridor1-obj-01-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ストレッチャー",
			serif: [
				{"chara": "koishi", serif1: _("へんなベッド"), serif2: _("へんなベッド"), serif3: _("へんなベッド"), serif4: _("へんなベッド")},
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
				{"chara": "koishi", serif1: _("風邪じゃないよ！"), serif2: _("風邪ひいたらここね！"), serif3: _("風邪ひいたらここね！"), serif4: _("風邪ひいたらここね！")},
				{"chara": "koishi","serif": _("お薬飲みたくないから"), "option": {"getJournal": "journal017"}},
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
				{"chara": "koishi", serif1: _("けがしたらここ！"), serif2: _("いまはだいじょうぶ！"), serif3: _("いまはだいじょうぶ！"), serif4: _("いまはだいじょうぶ！")},
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
				{"chara": "koishi","serif": _("ナイフ")},
			],
			x: 853,
			y: 534,
			scale: 0.7,
			action_name: "look_front",
			position_type: "front",
		},
	],
};


