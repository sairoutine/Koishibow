'use strict';
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_07",
	chapter: 1,
	bgm: "field4",
	right_start_position: {x: 690, y: 380},
	left_start_position:  {x: 180, y: 380},
	right_field: "chapter1_08",
	left_field: "chapter1_06",
	background: "chapter1-07-bg-001",
	walk_sound: "walking_bare_outside",
	event: "event_for_chapter1_talk_with_mobu",
	objects: [
		{
			no: ++I,
			image: "chapter1-07-obj-01",
			type: CONSTANT.STATIC_EVENT_IMAGE_TYPE,
			name: "ボール",
			serif: null,
			x: 625*2/3, y: 768.50*2/3,
			scale: 2/3,
			action_name: "touch",
			sound_name: "touch",
			action_event: "event_for_chapter1_playdoll"
		},
	]
};

