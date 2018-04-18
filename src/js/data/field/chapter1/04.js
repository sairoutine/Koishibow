'use strict';
// 小鈴ショップ
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_04",
	chapter: 1,
	bgm: "field3",
	right_start_position: {x: 690, y: 430},
	left_start_position:  {x: 180, y: 430},
	right_field: "chapter1_05",
	left_field: "chapter1_03",
	background: "chapter1-04-bg-001",
	walk_sound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter1-04-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-04-obj-01-obj02",
			anime5: "chapter1-04-obj-01-obj03",
			anime6: "chapter1-04-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "電話ボックス赤",
			serif: null,
			x:805, y:308,
			scale: 2/3,
			anime1: "chapter1-04-obj-02-obj01",
			anime2: "chapter1-04-obj-02-obj02",
			anime3: "chapter1-04-obj-02-obj03",
			anime4: "chapter1-04-obj-02-obj04",
			anime5: "chapter1-04-obj-02-obj05",
			anime6: "chapter1-04-obj-02-obj06",
			action_name: "look_front",
			sound_name: null,
			bgm_back: "chapter1-04-call_phone",
		},

		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "雑貨屋＆小鈴",
			serif: [
				// 1-7
				{"chara": I,"serif":"いらっしゃい！"},
				{"chara": "koishi","serif":"ここなにやさんなの？"},
				{"chara": I,"serif":"何でも売ってるよ！"},
				{"chara": "koishi","serif":"全部屋さん......？"},
				{"chara": I,"serif":"そうよ！なにが欲しいのかしら？"},
				{"chara": "koishi","serif":"なにがほしいんだろう……"},
			],
			x:293, y:260,
			scale: 2/3,
			anime1: "chapter1-04-obj-03-obj01",
			anime2: "chapter1-04-obj-03-obj02",
			anime3: "chapter1-04-obj-03-obj03",
			anime4: "chapter1-04-obj-03-obj04",
			anime5: "chapter1-04-obj-03-obj05",
			anime6: "chapter1-04-obj-03-obj06",
			action_name: null,
			sound_name: "chapter1-04-standup_kosuzu",
		},


	],
};

