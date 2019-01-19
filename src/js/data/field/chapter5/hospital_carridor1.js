'use strict';
var _ = require('i18n4v')
// 地下1階
// 病院の廊下1
// chapter0, chapter5 それぞれに存在するので
// コレを修正する際はほかも修正する
/*
 真っ暗闇
 廊下（すでにあるもの）
・ジャーナル「あの子の日記」
・キャビネット
・ストレッチャー
*/
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_02",
	chapter: 5,
	bgm: "silent",
	rightStartPosition: {x: 800, y: 250},
	leftStartPosition:  {x: 180, y: 380},
	rightField: "chapter5_03",
	leftField: "chapter5_01",
	background: "chapter5-02-bg-001",
	walkSound: "walking_bare_default",
	objects: [
		{
			no: ++I,
			image: "chapter0-hospital_corridor1-obj-01-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ストレッチャー",
			serif: [
				{"chara": "koishi","serif":_("")},
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
				{"chara": "koishi","serif":_("")},
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
				{"chara": "koishi","serif":_("")},
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
			serif: null,
			x: 853,
			y: 534,
			scale: 0.7,
			action_name: "look_front",
			position_type: "front",
		},

		{
			no: ++I,
			image: "chapter5-02-obj-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ドア",
			serif: null,
			x: 60.50*2/3, y: 469.00*2/3,
			scale: 2/3,
		},

	],
};


