'use strict';
// パークへの案内カンバンがある通路
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_01",
	chapter: 1,
	bgm: "field3",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 200, y: 380},
	rightField: "chapter1_02",
	leftField: null,
	background: "chapter1-01-bg-001",
	walkSound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter1-01-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-01-obj-01-obj02",
			anime5: "chapter1-01-obj-01-obj03",
			anime6: "chapter1-01-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "こころと屋敷",
			serif: null,
			x: 97.50*2/3, y: 447*2/3,
			scale: 2/3,
			anime1: "chapter1-01-obj-02-obj01",
			anime2: "chapter1-01-obj-02-obj02",
			anime3: "chapter1-01-obj-02-obj03",

			action_name: "look_top",
			sound_name: "chapter1-01-smile_kokoro",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "看板",
			serif: [
				{"chara": "koishi","serif":_("こーえん？")},
				{"chara": "koishi","serif":_("いってもいいかな")},
			],
			x: 1189.50*2/3, y: 576*2/3,
			scale: 2/3,

			anime1: "chapter1-01-obj-03-obj01",
			anime2: "chapter1-01-obj-03-obj02",
			anime3: "chapter1-01-obj-03-obj03",
			anime4: "chapter1-01-obj-03-obj04",
			anime5: "chapter1-01-obj-03-obj05",
			anime6: "chapter1-01-obj-03-obj06",

			action_name: "touch",
			sound_name: null,
			sound_back: "chapter1-01-change",
		},
	],
};

