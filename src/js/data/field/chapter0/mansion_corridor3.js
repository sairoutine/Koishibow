'use strict';
// 屋敷の廊下3(家具) 行き止まり (サードアイを使用すると、家具が豹変／床に扉が出現)
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter0_mansion_corridor3",
	chapter: 0,
	bgm: "field2",
	sub_bgms: ["chapter0-mansion_corridor3-clock"],
	right_start_position: {x: 690, y: 540},
	left_start_position:  {x: 180, y: 540},
	right_field: null,
	left_field: "chapter0_mansion_corridor2",
	background: "chapter0-mansionpas-003",
	walk_sound: "walking_bare_wood",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "花瓶",
			serif: [
				{"chara": "koishi","serif":"かびん！"},
			],
			x: 650,
			y: 285,
			width: 100,
			height: 330,
			target_x: 526, target_y: 417,
			scale: 2/3,
			anime1: "chapter0-mansion_corridor3-obj-08-01-obj01",
			anime2: "chapter0-mansion_corridor3-obj-08-01-obj02",
			anime3: "chapter0-mansion_corridor3-obj-08-01-obj03",
			anime4: "chapter0-mansion_corridor3-obj-08-01-obj04",
			anime5: "chapter0-mansion_corridor3-obj-08-01-obj05",
			anime6: "chapter0-mansion_corridor3-obj-08-01-obj06",
			action_name: "touch",
			sound_name: "touch",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "みずさし",
			serif: [
				{"chara": "koishi","serif":"これはかびん……"},
				{"chara": "koishi","serif": "おおきいから"},
			],

			x: 715,
			y: 270,
			width: 100,
			height: 330,

			scale: 2/3,
			anime1: "chapter0-mansion_corridor3-obj-07-01-obj01",
			anime2: "chapter0-mansion_corridor3-obj-07-01-obj02",
			anime3: "chapter0-mansion_corridor3-obj-07-01-obj03",
			anime4: "chapter0-mansion_corridor3-obj-07-01-obj04",
			anime5: "chapter0-mansion_corridor3-obj-07-01-obj05",
			anime6: "chapter0-mansion_corridor3-obj-07-01-obj06",
			action_name: "touch",
			sound_back: "chapter0-mansion_corridor3-sound_vase_back",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "窓",
			serif: [
				{"chara": "koishi","serif":"さっきのこいないなー"},
			],
			x: 900,
			y: 190,
			width: 150,
			height: 800,
			scale: 2/3,
			anime1: "chapter0-mansion_corridor3-obj-09-01-obj01",
			anime2: "chapter0-mansion_corridor3-obj-09-01-obj02",
			anime3: "chapter0-mansion_corridor3-obj-09-01-obj03",
			anime4: "chapter0-mansion_corridor3-obj-09-01-obj04",
			anime5: "chapter0-mansion_corridor3-obj-09-01-obj05",
			anime6: "chapter0-mansion_corridor3-obj-09-01-obj06",
			action_name: "look_front",
			sound_back: "chapter0-mansion_corridor3-smile_kokoro_back",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "振子時計",
			serif: [
				{"chara": "koishi","serif":"これうるさいからきらい"},
			],
			x: 145,
			y: 230,
			width: 200,
			height: 450,
			scale: 2/3,
			anime1: "chapter0-mansion_corridor3-obj-10-01-obj01",
			anime2: "chapter0-mansion_corridor3-obj-10-01-obj02",
			anime3: "chapter0-mansion_corridor3-obj-10-01-obj03",
			anime4: "chapter0-mansion_corridor3-obj-10-01-obj04",
			anime5: "chapter0-mansion_corridor3-obj-10-01-obj05",
			anime6: "chapter0-mansion_corridor3-obj-10-01-obj06",
			action_name: "look_top",
			sound_name:      "chapter0-mansion_corridor3-ring_clock_front",
			sound_back: "chapter0-mansion_corridor3-ring_clock_back"
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_EVENT_IMAGE_TYPE,
			name: "カーペット",
			serif: null,
			x: 490,
			y: 570,
			scale: 2/3,
			anime1: "chapter0-mansion_corridor3-obj-11-01-obj01",
			anime2: "chapter0-mansion_corridor3-obj-11-01-obj02",
			anime3: "chapter0-mansion_corridor3-obj-11-01-obj03",
			anime4: "chapter0-mansion_corridor3-obj-11-01-obj04",
			anime5: "chapter0-mansion_corridor3-obj-11-01-obj05",
			anime6: "chapter0-mansion_corridor3-obj-11-01-obj06",
			action_name: null,
			action_back_event: "event_for_chapter0_last", // こいし飛び降り
		},
		{
			no: ++I,
			type: CONSTANT.ITEM_TYPE,
			name: "目薬",
			image: "eyedrops",
			x: 590,
			y: 290,
			height: 330,
			scale: 2/3,
			item_id: CONSTANT.ITEM.EYEDROPS
		},

	],
};

