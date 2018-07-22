'use strict';
// 屋敷の廊下3(家具) 行き止まり (サードアイを使用すると、家具が豹変／床に扉が出現)
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_06",
	chapter: 3,
	bgm: "field2",
	sub_bgms: ["chapter0-mansion_corridor3-clock"],
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	rightField: null,
	leftField: "chapter3_05",
	background: "chapter3-06-bg-001",
	walkSound: "walking_bare_wood",
	objects: [
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
	],
};

