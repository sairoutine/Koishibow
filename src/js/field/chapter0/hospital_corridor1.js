// 病院の廊下1(コンクリ、廃れてる感じ) 車椅子とかあったほうがいいかも
var CONSTANT = require("../../constant");
module.exports = {
	key: "chapter0_hospital_corridor1",
	name: "病院の廊下1",
	bgm: "field1",
	right_start_position: {x: 690, y: 540},
	left_start_position:  {x: 180, y: 540},
	right_field: "chapter0_hospital_corridor2",
	left_field: "chapter0_myroom",
	background: "chapter0-hospital_corridor1-bg-001",
	walk_sound: "walking_bare_default",
	objects: [
		{image: "chapter0-hospital_corridor1-obj-01-01", type: CONSTANT.STATIC_IMAGE_TYPE, name: "ストレッチャー", serif: ["へんなベッド"],  x: 814, y: 608, scale: 0.7, action: "touch"},
		{image: "chapter0-hospital_corridor1-obj-02-01", type: CONSTANT.STATIC_IMAGE_TYPE, name: "キャビネット", serif: ["くすりはいらない……"],   x: 279, y: 378, scale: 0.7},
		{image: "chapter0-hospital_corridor1-obj-03-01", type: CONSTANT.STATIC_IMAGE_TYPE, name: "救急箱", serif: ["くーくーばこ！", "けがしてないよ！"], x: 281, y: 280, scale: 0.7, action: "touch"},
		{image: "chapter0-hospital_corridor1-obj-04-01", type: CONSTANT.STATIC_IMAGE_TYPE, name: "メス", serif: ["ナイフ"],   x: 853, y: 534, scale: 0.7},
	],
};


