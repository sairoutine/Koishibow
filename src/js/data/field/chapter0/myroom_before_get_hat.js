'use strict';
// こいしの自室
// chapter0(帽子あり・なし), chapter3, chapter5, chapter6(帽子あり・なし) にも自室が存在するので
// 当たり判定修正時はそちらも修正する
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter0_myroom_before_get_hat",
	chapter: 0,
	bgm: "field1",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: null,
	upField: null,
	downField: null,
	background: "chapter0-myroom-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			image: "chapter0-myroom-obj-01-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ベッド",
			serif: null,
			x: 258, y: 389,
			scale: 0.7,
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			image: "chapter0-myroom-obj-05-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "キャビネット",
			serif: null,
			x: 59, y: 496,
			scale: 0.7,
			action_name: null,
			sound_name: null,
			target_x: 167, target_y: 531
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "本",
			serif: null,
			x: 340, y: 530,
			scale: 0.7,
			anime1: "chapter0-myroom-obj-02-01-obj01",
			anime2: null,
			anime3: null,
			width: 80, height: 80,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "クレヨン",
			serif: null,
			x: 600, y: 530,
			scale: 0.7,
			anime1: "chapter0-myroom-obj-03-01-obj01",
			anime2: null,
			anime3: null,
			width: 80, height: 80,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "まど",
			serif: null,
			x: 5, y: 180,
			scale: 0.7,
			anime1: "chapter0-myroom-obj-04-01-obj01",
			anime2: null,
			anime3: null,
			action_name: null,
			sound_name: null,
			height: 700,
			target_x: 177, target_y: 531
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "部屋の隅",
			serif: null,
			width: 150, height: 200,
			x: 670, y: 300,
			scale: 2/3,
			target_x: 532, target_y: 418
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "部屋の隅",
			serif: null,
			width: 10, height: 720,
			x: 800, y: 360,
		},
		{
			no: ++I,
			image: "chapter0-myroom-obj-07-01",
			type: CONSTANT.KOISHI_HAT_TYPE,
			name: "帽子",
			x: 767, y: 529,
			scale: 2/3,
			next_field: "chapter0_myroom",
			action_name: "touch_nohat",
		},
	],
};

