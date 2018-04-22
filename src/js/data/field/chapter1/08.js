'use strict';
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_08",
	chapter: 1,
	bgm: "field4",
	right_start_position: {x: 690, y: 380},
	left_start_position:  {x: 180, y: 380},
	right_field: "chapter1_09",
	left_field: "chapter1_07",
	background: "chapter1-08-bg-001",
	walk_sound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ぶら下がった二人",
			serif: null,
			x: 960/2, y: 720/2,
			x: 735*2/3, y: 392*2/3,
			scale: 2/3,
			anime1: "chapter1-08-obj-01-obj00",
			anime2: null,
			anime3: null,
			anime4: "chapter1-08-obj-01-obj01",
			anime5: "chapter1-08-obj-01-obj02",
			anime6: "chapter1-08-obj-01-obj03",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "響子",
			serif: [
				// 1-16
				{"chara": I, "exp": "kyoko-reaction_01", "serif":"............"},
				{"chara": "koishi",        "exp": "back", "serif":"あなた、どうしておくちがあかないの？"},
				{"chara": I, "exp": "kyoko-reaction_01", "serif":"............"},
				{"chara": "koishi",        "exp": "back", "serif":"............"},
				{"chara": "koishi",        "exp": "back", "serif":"ねえ、あそばないの？"},
				{"chara": I, "exp": "kyoko-reaction_01", "serif":"............"},
				{"chara": "koishi",        "exp": "back", "serif":"ねえ？"},
				{"chara": I, "exp": "kyoko-reaction_01", "serif":"............"},


			],
			x: 1024*2/3, y: 585*2/3,
			scale: 10,
			anime1: "kyoko-wait",
			anime2: null,
			anime3: null,
			anime4: "kyoko-reverse_ura",
			anime5: "kyoko-ura_wait",
			anime6: "kyoko-reverse_omote",

			action_name: null,
			sound_name: null,
		},
	]
};

