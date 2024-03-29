'use strict';
var _ = require('i18n4v')
// 病院の廊下1(コンクリ、廃れてる感じ) 車椅子とかあったほうがいいかも
// chapter0, chapter2, chapter5, chapter6 それぞれに存在するので
// コレを修正する際はほかも修正する
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter0_hospital_corridor1",
	chapter: 0,
	bgm: "field1",
	rightStartPosition:   {x: 800, y: 250},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter0_hospital_corridor2",
	leftField: "chapter0_myroom",
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
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ストレッチャーの下",
			serif: null,
			width: 400,
			height: 100,
			x: 814,
			y: 708,
		},
		{
			no: ++I,
			image: "chapter0-hospital_corridor1-obj-02-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "キャビネット",
			serif: [
				{"chara": "koishi", serif1: _("くすりはいらない……"), serif2: _("くすりはいらない……"), serif3: _("くすりはいらない……"), serif4: _("くすりはいらない……")},
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
				{"chara": "koishi","serif": _("くーくーばこ！")},
				{"chara": "koishi","serif": _("けがしてないよ！")},
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
			width: 100,
			scale: 0.7,
			action_name: "look_front",
			position_type: "front",
		},
		{
			no: ++I,
			type: CONSTANT.JOURNAL_FRONT_TYPE,
			x: 643, y:425,
			journal_id: "journal002",
		},
	],
};


