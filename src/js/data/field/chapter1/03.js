'use strict';
// てぃ ペンキ
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_03",
	chapter: 1,
	bgm: "field3",
	sub_bgms: ["chapter1-03-drop_paint"],
	right_start_position: {x: 690, y: 380},
	left_start_position:  {x: 146, y: 320},
	right_field: "chapter1_04",
	left_field: "chapter1_02",
	background: "chapter1-03-bg-001",
	walk_sound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter1-03-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-03-obj-01-obj02",
			anime5: "chapter1-03-obj-01-obj03",
			anime6: "chapter1-03-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ITEM_TYPE,
			name: "ヘビ",
			image: "chapter1-03-obj-04",
			x:1157*2/3, y:687.50*2/3,
			scale: 2/3,
			item_id: "06",
			height: 200,
			position_type: "lying",
		},


		{
			no: ++I,
			image: "chapter1-03-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ペンキ",
			serif: [
				{"chara": "koishi","serif":"これさわるといろがかわるんだよ！"},
			],
			x:887*2/3, y:715*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "うさぎを吊るした木",
			serif: null,
			x:779.00*2/3, y:356.50*2/3,
			scale: 2/3,
			anime1: "chapter1-03-obj-05-obj01",
			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			image: "chapter1-03-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ハシゴ",
			serif: [
				{"chara": "koishi","serif":"おつきさまとれるかな"},
			],
			x:1053*2/3, y:484*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},

		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "てゐ",
			serif: [
				// こわいおめんを持っているか否か
				{"type": "criteria_serif", "criteria": "useItem", "arguments": ["10"], "serifs": [
					[
						{"chara": I,        "exp": "tewi-reaction_04", "serif":"げえっ！"},
						{"chara": I,        "exp": "back", "serif":"い、いつからそこに"},
						{"chara": "koishi", "exp": "back", "serif":"............."},
						{"chara": I,        "exp": "tewi-reaction_01", "serif":"わかりました！"},
						{"chara": I,        "exp": "tewi-reaction_03", "serif":"わかりましたよ！"},
						{"chara": I,        "exp": "tewi-reaction_01", "serif":"いまやるから、もうちょっとまっててくれよ", "option": {
							"getItem": "05",
						}},
					],
					[
						// 1-4
						{"chara": I,        "exp": "tewi-reaction_01", "serif":"なんだい！"},
						{"chara": "koishi", "exp": "look_front", "serif":"なにしてるの？"},
						{"chara": I,        "exp": "back", "serif":"なにもしてないんだよ"},
						{"chara": "koishi", "exp": "back", "serif":"へんなの"},
						{"chara": I,        "exp": "back", "serif":"みせものじゃないんだ、いきな！"},
					]
				]}
			],
			x:458.50*2/3, y:609*2/3,
			scale: 2/3,
			anime1: "tewi-wait",
			anime2: null,
			anime3: null,
			anime4: "tewi-reverse_ura",
			anime5: "tewi-ura_wait",
			anime6: "tewi-reverse_omote",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},


	],
};

