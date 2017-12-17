// 屋敷の廊下2(ドアがある) 最初のフラッシュバックが入る
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter0_mansion_corridor2",
	chapter: 0,
	name: "屋敷の廊下2",
	bgm: "field2",
	right_start_position: {x: 690, y: 540},
	left_start_position:  {x: 180, y: 540},
	right_field: "chapter0_mansion_corridor3",
	left_field: "chapter0_mansion_corridor1",
	background: "chapter0-mansionpas-002",
	walk_sound: "walking_bare_wood",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ほこりの積もった観葉植物",
			serif: [
				{"chara": "koishi","serif":"このはっぱ、えがかけるよ"},
			],
			x: 840,
			y: 305,
			width: 150,
			height: 300,
			scale: 0.7,
			anime1: "chapter0-mansion_corridor2-obj-04-01-obj01",
			anime2: "chapter0-mansion_corridor2-obj-04-01-obj02",
			anime3: "chapter0-mansion_corridor2-obj-04-01-obj03",
			anime4: "chapter0-mansion_corridor2-obj-04-01-obj04",
			anime5: "chapter0-mansion_corridor2-obj-04-01-obj05",
			anime6: "chapter0-mansion_corridor2-obj-04-01-obj06",
			action: "touch",
			sound:      "chapter0-mansion_corridor2-flower_front",
			sound_back: "chapter0-mansion_corridor2-flower_back"

		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "壁かけの斧",
			serif: [
				{"chara": "koishi","serif":"だれかとって！"},
			],
			x: 310,
			y: 102,
			width: 250,
			height: 100,
			scale: 0.7,
			anime1: "chapter0-mansion_corridor2-obj-05-01-obj01",
			anime2: "chapter0-mansion_corridor2-obj-05-01-obj02",
			anime3: "chapter0-mansion_corridor2-obj-05-01-obj03",
			anime4: "chapter0-mansion_corridor2-obj-05-01-obj04",
			anime5: "chapter0-mansion_corridor2-obj-05-01-obj05",
			anime6: "chapter0-mansion_corridor2-obj-05-01-obj06",
			action: "look_top"
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ドア",
			serif: [
				{"chara": "koishi","serif":"だれかじゅんびちゅう？"},
			],
			x: 610,
			y: 245,
			width: 210,
			height: 400,
			scale: 0.7,
			anime1: "chapter0-mansion_corridor2-obj-06-01-obj01",
			anime2: "chapter0-mansion_corridor2-obj-06-01-obj02",
			anime3: "chapter0-mansion_corridor2-obj-06-01-obj03",
			action: null,
			sound:      "chapter0-mansion_corridor2-open_door",
		},

		{
			no: ++I,
			image: "paper", type: CONSTANT.JOURNAL_TYPE, x: 177, y: 400, scale: 2/3, picture: "journal005"},
	],


};

