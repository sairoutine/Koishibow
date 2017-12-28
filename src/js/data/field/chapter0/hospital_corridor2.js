// 病院の廊下2(こころ)
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter0_hospital_corridor2",
	chapter: 0,
	name: "病院の廊下2",
	bgm: "field1",
	right_start_position: {x: 690, y: 540},
	left_start_position:  {x: 180, y: 540},
	right_field: "chapter0_mansion_corridor1",
	left_field: "chapter0_hospital_corridor1",
	background: "chapter0-hospital2-bg-001",
	walk_sound: "walking_bare_default",
	event: "event_chapter0_kokoro_encounter",
	objects: [
		{
			no: ++I,
			image: "chapter0-hospital2-obj-02-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "くつした",
			serif: [
				{"chara": "koishi","serif":"やだやだ。"},
			],
			x: 302,
			y: 443,
			scale: 0.7,
			action_name: "look_bottom",
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "車イス",
			serif: [
				{"chara": "koishi","serif":"あしおれたらのってもいい？"},
			],
			x: 130,
			y: 360,
			scale: 0.7,
			anime1: "chapter0-hospital_corridor2-obj-01-01-obj01",
			anime2: "chapter0-hospital_corridor2-obj-01-01-obj02",
			anime3:"chapter0-hospital_corridor2-obj-01-01-obj03",
			action_name: "touch",
			sound_name: "chapter0-hospital_corridor2-move_wheelchair",
			width: 258,
			height: 280,
			target_x: 296,
			target_y: 422,

		},
		{
			no: ++I,
			image: "paper", type: CONSTANT.JOURNAL_TYPE, x: 627, y: 689, scale: 2/3, picture: "journal003"},
	],

};

