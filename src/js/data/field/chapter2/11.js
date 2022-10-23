'use strict';
//1-10と同様。
//従来は右端が崖だったがここに2-10からつながるように橋を加筆。
//・五寸釘（砂の中。目を使うとみられる
// TODO: journal042	chapter2		会話中	2-11	もし嫌いな人がいたら
module.exports = {
	key: "chapter2_11",
	chapter: 2,
	bgm: "field4",
	rightStartPosition:   {x: 800, y: 350},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter2_10",
	leftField: "chapter2_12",
	upField: null,
	downField: null,
	background: "chapter2-11-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		/*
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "砂場",
			serif: null,
			x: 720*2/3, y: 770*2/3,
			scale: 2/3,
			anime1: "chapter1-10-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-10-obj-01-obj02",
			anime5: "chapter1-10-obj-01-obj03",
			anime6: "chapter1-10-obj-01-obj04",

			action_name: null,
			sound_name: null,
			sound_back: "chapter1-10-flow_sand",
			position_type: "lying",
		},
		*/
		/*
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "砂場の小山",
			serif: [
			],
			width: 0, height: 0,
			x: 349, y: 363,
			position_type: "lying",
		},
		*/
	],
};

