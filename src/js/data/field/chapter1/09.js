'use strict';
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_09",
	chapter: 1,
	bgm: "field4",
	right_start_position: {x: 690, y: 380},
	left_start_position:  {x: 180, y: 380},
	right_field: "chapter1_10",
	left_field: "chapter1_08",
	background: "chapter1-09-bg-001",
	walk_sound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "生垣(秘密基地)",
			serif: null,
			x: 720*2/3, y: 428*2/3,
			scale: 2/3,
			anime1: "chapter1-09-obj-02-obj01",
			anime2: "chapter1-09-obj-02-obj02",
			anime3: "chapter1-09-obj-02-obj01",

			action_name: null,
			sound_name: null,
		},

		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "村紗",
			serif: [
				// 1-21
				{"chara": I, "exp": "murasa-reaction_01", "serif":"何"},
				{"chara": "koishi",        "exp": "back", "serif":"えっ？"},
				{"chara": I, "exp": "murasa-reaction_01", "serif":"なんだよ"},
				{"chara": I, "exp": "murasa-reaction_02", "serif":"用がないならあっちいけよ"},
				{"chara": "koishi",        "exp": "back", "serif":"あそばないの？"},
				{"chara": I, "exp": "murasa-reaction_01", "serif":"は？"},
				{"chara": I, "exp": "murasa-reaction_01", "serif":"もう遊んでるだろ"},
				{"chara": "koishi",        "exp": "back", "serif":"............"},
				{"chara": I, "exp": "murasa-reaction_02", "serif":"なんだよ！あっちいけよ！"},
			],
			x: 1198*2/3, y: 588*2/3,
			scale: 2/3,
			anime1: "murasa-wait",
			anime2: null,
			anime3: null,
			anime4: "murasa-reverse_ura",
			anime5: "murasa-ura_wait",
			anime6: "murasa-reverse_omote",

			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.FAUCET_TYPE,
			name: "蛇口",
			serif: [
				{"chara": "koishi", "exp": "back", "serif":"みずがでない"},
			],
			serif_back: [
				{"chara": I, "serif":"こら！"},
				{"chara": I, "serif":"詰まってるのにだめでしょ！"},
				{"chara": I, "serif":"あふれちゃって……"},
				{"chara": I, "serif":"みんなおぼれちゃうでしょ！"},
				{"chara": I, "serif":"ちゃんと掃除して頂戴！"},
			],

			x:384*2/3, y:572*2/3,
			scale: 2/3,
			anime1: "chapter1-09-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-09-obj-01-obj02",
			anime5: "chapter1-09-obj-01-obj03",
			anime6: "chapter1-09-obj-01-obj04",

			action_name: null,
			sound_name: null,
		},
	]
};
