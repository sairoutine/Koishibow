// こいしの自室(ベッド／帽子／ドア) 帽子はベッドのふちにかけてある
var CONSTANT = require("../../constant");
module.exports = {
	key: "chapter0_myroom",
	name: "こいしの部屋",
	right_start_position: {x: 690, y: 540},
	left_start_position:  {x: 180, y: 540},
	right_field: "chapter0_hospital_corridor1",
	left_field: null,
	background: "chapter0-myroom-bg-001",
	objects: [
		{image: "chapter0-myroom-obj-01-01", type: CONSTANT.STATIC_IMAGE_TYPE, name: "ベッド", x: 50, y: 270, scale: 0.7},
		{image: "chapter0-myroom-obj-05-01", type: CONSTANT.STATIC_IMAGE_TYPE, name: "机", x: 0, y: 425, scale: 0.7},
		{ type: CONSTANT.ANIME_IMAGE_TYPE,  name: "本", x: 340, y: 530, scale: 0.7, anime1: "chapter0-myroom-obj-02-01-obj01", anime2: "chapter0-myroom-obj-02-01-obj02", anime3: "chapter0-myroom-obj-02-01-obj03"},
		{ type: CONSTANT.ANIME_IMAGE_TYPE,  name: "クレヨン", x: 600, y: 530, scale: 0.7, anime1: "chapter0-myroom-obj-03-01-obj01", anime2: "chapter0-myroom-obj-03-01-obj02", anime3: "chapter0-myroom-obj-03-01-obj03"},
		{ type: CONSTANT.ANIME_IMAGE_TYPE,  name: "まど", x: 5, y: 180, scale: 0.7, anime1: "chapter0-myroom-obj-04-01-obj01", anime2: "chapter0-myroom-obj-04-01-obj02", anime3: "chapter0-myroom-obj-04-01-obj03"},
	],
};


