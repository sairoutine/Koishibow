'use strict';
// てぃ ペンキ
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_03",
	chapter: 1,
	bgm: "field1",
	right_start_position: {x: 690, y: 540},
	left_start_position:  {x: 180, y: 540},
	right_field: "chapter1_04",
	left_field: "chapter1_02",
	background: "chapter1-03-bg-001",
	walk_sound: "walking_bare_default",
	objects: [
		{
			no: ++I,
			image: "chapter0-myroom-obj-01-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ベッド",
			serif: [
				{"chara": "koishi","serif":"まだねむたくないもん"},
			],
			x: 258, y: 389,
			scale: 0.7,
			action_name: "touch",
			sound_name: "touch"
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "本",
			serif: [
				{"chara": "koishi","serif":"にっきさんひさしぶり！"},
				{"chara": "koishi","serif": "またね！"},
			],
			x: 340, y: 530,
			scale: 0.7,
			anime1: "chapter0-myroom-obj-02-01-obj01",
			anime2: "chapter0-myroom-obj-02-01-obj02",
			anime3: "chapter0-myroom-obj-02-01-obj03",
			width: 80, height: 80,
			action_name: "look_bottom",
			sound_name: "chapter0-myroom-open_book",
			position_type: "lying",
		},
	],
};

