// 屋敷の廊下1
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter0_mansion_corridor1",
	chapter: 0,
	name: "屋敷の廊下1",
	bgm: "field2",
	sub_bgms: ["chapter0-mansion_corridor1-wind"],
	right_start_position: {x: 690, y: 540},
	left_start_position:  {x: 180, y: 540},
	right_field: "chapter0_mansion_corridor2",
	left_field: "chapter0_hospital_corridor2",
	background: "chapter0-mansionpas-001",
	walk_sound: "walking_bare_wood",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ランプ",
			serif: [
				{"chara": "koishi","serif":"まぶしい"},
			],
			x: 805,
			y: 65,
			scale: 0.7,
			anime1: "chapter0-mansion_corridor1-obj-01-01-obj01",
			anime2: "chapter0-mansion_corridor1-obj-01-01-obj02",
			anime3: "chapter0-mansion_corridor1-obj-01-01-obj03",
			anime4: "chapter0-mansion_corridor1-obj-01-01-obj04",
			anime5: "chapter0-mansion_corridor1-obj-01-01-obj05",
			anime6: "chapter0-mansion_corridor1-obj-01-01-obj06",
			action_name: "look_top",
			sound_name:      "chapter0-mansion_corridor1-lamp_front",
			sound_back: "chapter0-mansion_corridor1-lamp_back"
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "三輪車",
			serif: [
				{"chara": "koishi","serif":"あとでのろっと"},
			],
			x: 815,
			y: 515,
			width: 250,
			height: 250,
			scale: 0.7,
			anime1: "chapter0-mansion_corridor1-obj-02-01-obj01",
			anime2: "chapter0-mansion_corridor1-obj-02-01-obj02",
			anime3: "chapter0-mansion_corridor1-obj-02-01-obj03",
			anime4: "chapter0-mansion_corridor1-obj-02-01-obj04",
			anime5: "chapter0-mansion_corridor1-obj-02-01-obj05",
			anime6: "chapter0-mansion_corridor1-obj-02-01-obj06",
			action_name: "touch",
			sound_name: "chapter0-mansion_corridor1-move_tricycle",
			bgm_back: "chapter0-mansion_corridor1-tricycle",
			position_type: "front",
			target_x: 641,
			target_y: 586

		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "カーテン",
			serif: [
				{"chara": "koishi","serif":"いまはかくれんぼしてないから\nあとでね！"},
			],
			x: 190,
			y: 135,
			width: 300,
			height: 250,
			scale: 0.7,
			anime1: "chapter0-mansion_corridor1-obj-03-01-obj01",
			anime2: "chapter0-mansion_corridor1-obj-03-01-obj02",
			anime3: "chapter0-mansion_corridor1-obj-03-01-obj03",
			anime4: "chapter0-mansion_corridor1-obj-03-01-obj04",
			anime5: "chapter0-mansion_corridor1-obj-03-01-obj05",
			anime6: "chapter0-mansion_corridor1-obj-03-01-obj06",
			action_name: "look_top",
			sound_back: "chapter0-mansion_corridor1-open_curtain"
		},


		{
			no: ++I,
			image: "paper", type: CONSTANT.JOURNAL_TYPE, x: 600, y: 530, scale: 2/3, picture: "journal004"},
	],

};
