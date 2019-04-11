'use strict';
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_07",
	chapter: 1,
	bgm: "field4",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter1_08",
	leftField: "chapter1_06",
	upField: null,
	downField: null,
	background: "chapter1-07-bg-001",
	walkSound: "walking_bare_outside",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter1_07_firstaccess"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "changeScene", "arguments": ["event_for_chapter1_talk_with_mobu"]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter1_07_firstaccess"]}
			],
		]},
	],
	objects: [
		{
			no: ++I,
			image: "chapter1-07-obj-01",
			type: CONSTANT.STATIC_EVENT_IMAGE_TYPE,
			name: "ボール",
			is_acquirable: true,
			serif: null,
			x: 625*2/3, y: 768.50*2/3,
			scale: 2/3,
			// height: 1000,
			action_name: "touch",
			sound_name: "touch",
			action_event: "event_for_chapter1_playdoll"
		},

		{
			no: ++I,
			type: CONSTANT.JOURNAL_FRONT_TYPE,
			x: 643, y:425,
			journal_id: "journal013",
		},

	]
};

