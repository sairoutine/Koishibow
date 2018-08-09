'use strict';

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_10",
	chapter: 3,
	bgm: "field7",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 200, y: 450},
	rightField: "chapter3_11",
	leftField: "chapter3_09",
	background: "chapter3-10-bg-001",
	walkSound: "walking_bare_snow",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_08-Event-_30060"], "process": [
			// チルノを救出している
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_12_Event_30210"], "process": [
					// フランに1度出会っている
					[
						{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_11_Event-30250"], "process": [
							// すでに喧嘩イベント再生済み
							[],
							// まだ喧嘩イベント未再生
							[
								// 喧嘩イベント再生
								{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3_11_Event-30250"]},
								{"type": "process", "value": "changeScene", "arguments": ["event_talk_old", "chapter3-10-event-01"]},
							],
						]},
					],
					// まだあってない
					[
					],
				]},
			],
			// チルノを救出していない
			[],
		]},
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter3-10-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-10-obj-01-obj02",
			anime5: "chapter3-10-obj-01-obj03",
			anime6: "chapter3-10-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter3-10-obj-02-back",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "橋_奥",
			serif: null,
			x: 747*2/3, y: 654*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			image: "chapter3-10-obj-02-front",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "橋_手前",
			serif: null,
			x: 763.5*2/3, y: 681.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
		},

	],
};

