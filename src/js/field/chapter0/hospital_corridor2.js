// 病院の廊下2(こころ)
var CONSTANT = require("../../constant");
module.exports = {
	key: "chapter0_hospital_corridor2",
	name: "病院の廊下2",
	bgm: "field1",
	right_start_position: {x: 690, y: 540},
	left_start_position:  {x: 180, y: 540},
	right_field: "chapter0_mansion_corridor1",
	left_field: "chapter0_hospital_corridor1",
	background: "chapter0-hospital2-bg-001",
	walk_sound: "walking_bare_default",
	objects: [
		{image: "chapter0-hospital2-obj-02-01", type: CONSTANT.STATIC_IMAGE_TYPE, name: "くつした", serif: ["やだやだ。"], x: 302, y: 443, scale: 0.7, action: "look_bottom"},
		{ type: CONSTANT.ANIME_IMAGE_TYPE,  name: "車イス", serif: ["あしおったらのってもいい？"], x: 130, y: 360, scale: 0.7, anime1: "chapter0-hospital_corridor2-obj-01-01-obj01", anime2: "chapter0-hospital_corridor2-obj-01-01-obj02", anime3:"chapter0-hospital_corridor2-obj-01-01-obj03", action: "touch", sound: "chapter0-hospital_corridor2-move_wheelchair"},
	],

};

