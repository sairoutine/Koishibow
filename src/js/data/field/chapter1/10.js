'use strict';
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_10",
	chapter: 1,
	bgm: "field4",
	right_start_position: {x: 690, y: 380},
	left_start_position:  {x: 180, y: 380},
	right_field: null,
	left_field: "chapter1_09",
	background: "chapter1-10-bg-001",
	walk_sound: "walking_bare_outside",
	objects: [
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
			position_type: "lying",
		},

		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "小傘",
			serif: [
				// 1-24
				{"chara": I, "exp": "kogasa-reaction_01", "serif":"あら"},
				{"chara": I, "exp": "kogasa-reaction_01", "serif":"あなたも私が気になるの？"},
				{"chara": "koishi",        "exp": "back", "serif":"え？"},
				{"chara": "koishi",        "exp": "back", "serif":"なにが？"},
				{"chara": I, "exp": "kogasa-reaction_02", "serif":"わたしがすきなんでしょ？"},
				{"chara": "koishi",        "exp": "back", "serif":"？"},
			],
			x: 955*2/3, y: 429*2/3,
			scale: 2/3,
			anime1: "kogasa-wait",
			anime2: null,
			anime3: null,
			anime4: "kogasa-reverse_ura",
			anime5: "kogasa-ura_wait",
			anime6: "kogasa-reverse_omote",

			action_name: null,
			sound_name: null,
		},

	]
};
