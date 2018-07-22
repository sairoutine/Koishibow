'use strict';
// 屋敷の廊下1
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_04",
	chapter: 3,
	bgm: "field2",
	sub_bgms: ["chapter0-mansion_corridor1-wind"],
	rightStartPosition: {x: 800, y: 240},
	leftStartPosition:  {x: 180, y: 370},
	rightField: "chapter3_05",
	leftField: "chapter3_03",
	background: "chapter0-mansionpas-001",
	walkSound: "walking_bare_wood",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ランプ",
			serif: [
				{"chara": "koishi","serif":"まぶしい"},
			],
			x: 805,
			y: 65,
			scale: 0.7,
			height: 600,
			anime1: "chapter0-mansion_corridor1-obj-01-01-obj01",
			anime2: "chapter0-mansion_corridor1-obj-01-01-obj02",
			anime3: "chapter0-mansion_corridor1-obj-01-01-obj03",
			anime4: "chapter0-mansion_corridor1-obj-01-01-obj04",
			anime5: "chapter0-mansion_corridor1-obj-01-01-obj05",
			anime6: "chapter0-mansion_corridor1-obj-01-01-obj06",
			action_name: "look_top",
			sound_name:      "chapter0-mansion_corridor1-lamp_front",
			sound_back: "chapter0-mansion_corridor1-lamp_back"
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "三輪車",
			serif: [
				{"chara": "koishi","serif":"あとでのろっと"},
			],
			x: 815,
			y: 515,
			width: 200,
			height: 100,
			scale: 0.7,
			anime1: "chapter0-mansion_corridor1-obj-02-01-obj01",
			anime2: "chapter0-mansion_corridor1-obj-02-01-obj02",
			anime3: "chapter0-mansion_corridor1-obj-02-01-obj03",
			anime4: "chapter0-mansion_corridor1-obj-02-01-obj04",
			anime5: "chapter0-mansion_corridor1-obj-02-01-obj05",
			anime6: "chapter0-mansion_corridor1-obj-02-01-obj06",
			action_name: "touch",
			sound_name: "chapter0-mansion_corridor1-move_tricycle",
			bgm_back: "chapter0-mansion_corridor1-tricycle",
			position_type: "front",
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "三輪車の下",
			serif: null,
			width: 200, height: 300,
			x: 815,
			y: 715,

		},


		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "カーテン",
			serif: [
				{"chara": "koishi","serif":"いまはかくれんぼしてないから\nあとでね！"},
			],
			x: 190,
			y: 135,
			width: 300,
			height: 450,
			scale: 0.7,
			anime1: "chapter0-mansion_corridor1-obj-03-01-obj01",
			anime2: "chapter0-mansion_corridor1-obj-03-01-obj02",
			anime3: "chapter0-mansion_corridor1-obj-03-01-obj03",
			anime4: "chapter0-mansion_corridor1-obj-03-01-obj04",
			anime5: "chapter0-mansion_corridor1-obj-03-01-obj05",
			anime6: "chapter0-mansion_corridor1-obj-03-01-obj06",
			action_name: "look_top",
			sound_back: "chapter0-mansion_corridor1-open_curtain"
		},


		{
			no: ++I,
			image: "paper", type: CONSTANT.JOURNAL_TYPE, x: 600, y: 530, scale: 2/3, journal_id: "journal004"},
	],

};
