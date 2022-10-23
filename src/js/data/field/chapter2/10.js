'use strict';
//橋の上
//2-9からは梯子に触れると移動（右から登場）できる
//左へ移動すると2-11へ
//・パルスィ（と緑犬）
//（パルスイの「……」はリアクションとして描画表現する）
//・積まれた石
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter2_10",
	chapter: 2,
	bgm: "silent",
	rightStartPosition:   null,
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 690, y: 380, isTowardLeft: true},
	upStartPosition:    null,
	downStartPosition:  {x: 690, y: 380},
	rightField: null,
	leftField: "chapter2_11",
	upField: null,
	downField: "chapter2_09",
	background: "chapter2-10-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			image: "chapter2-10-obj-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "柵",
			serif: null,
			x:720*2/3, y:997*2/3,
			scale: 2/3,
			action_name: null,
			height: 0,
			position_type: "front",
		},

	],
};

