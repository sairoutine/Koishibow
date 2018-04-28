'use strict';
// にとり お面屋
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_05",
	chapter: 1,
	bgm: "field3",
	right_start_position: {x: 690, y: 380},
	left_start_position:  {x: 180, y: 380},
	right_field: "chapter1_06",
	left_field:  "chapter1_04",
	background: "chapter1-05-bg-001",
	walk_sound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter1-05-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-05-obj-01-obj02",
			anime5: "chapter1-05-obj-01-obj03",
			anime6: "chapter1-05-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},

		{
			no: ++I,
			image: "chapter1-05-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "石垣",
			serif: null,
			x:1208*2/3, y:608*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "にとり",
			serif: [
				// みどりいろのぐねぐねを持っているか否か
				{"type": "criteria_serif", "criteria": "useItem", "arguments": ["06"], "serifs": [
					[
						// 1-11
						{"chara": "koishi", "exp": "back", "serif":"ねえ、これ"},
						{"chara": I,        "exp": "nitori-reaction_03", "serif":"なんだい"},
						{"chara": "koishi", "exp": "back", "serif":"これみて。ほしいんじゃないの？"},
						{"chara": I,        "exp": "nitori-reaction_01", "serif":"おっ！"},
						{"chara": I,        "exp": "nitori-reaction_01", "serif":"みどりで！"},
						{"chara": I,        "exp": "nitori-reaction_01", "serif":"ながくて！"},
						{"chara": I,        "exp": "nitori-reaction_01", "serif":"ぐねぐねなやつ！"},
						{"chara": I,        "exp": "nitori-reaction_04", "serif":"これだいすき！なんでわかったの？"},
						{"chara": "koishi", "exp": "back", "serif":"えっ？"},
						{"chara": "koishi", "exp": "back", "serif":"わかんない......"},
						// 1-14
						// TODO: 別の会話に切り出す
						{"chara": I,        "exp": "nitori-reaction_04", "serif":"お面がほしいの？"},
						{"chara": I,        "exp": "nitori-reaction_04", "serif":"売れ残りだけど、あげちゃう！", "option": {
							"getItem": "10",
						}},
						{"chara": I,        "exp": "nitori-reaction_04", "serif":"またきてね！"},
					],
					[
						// 1-9
						{"chara": "koishi", "exp": "back", "serif":"なにしてるの？"},
						{"chara": I,        "exp": "back", "serif":"仮面屋さ！"},
						{"chara": "koishi", "exp": "back", "serif":"仮面って何に使うの？"},
						{"chara": I,        "exp": "back", "serif":"そりゃ被るのさ！"},
						{"chara": "koishi", "exp": "back", "serif":"ふーん"},
						{"chara": I,        "exp": "back", "serif":"おめん欲しいだろ？"},
						{"chara": "koishi", "exp": "back", "serif":"うーんちょっとだけ"},
						{"chara": I,        "exp": "back", "serif":"そうだよな！\nそれじゃあ特におすすめの希望の面！\nこれは5000でいいぞ！"},
						{"chara": "koishi", "exp": "back", "serif":"お金いるの？"},
						{"chara": I,        "exp": "back", "serif":"当然さぁ、お店なんだから！"},
						{"chara": "koishi", "exp": "back", "serif":"お金ないときはどうしたらいいの？"},
						{"chara": I,        "exp": "nitori-reaction_02", "serif":"金がないんじゃあ仮面は売れないね！\nとっとといきな！"},
					]
				]}
			],
			x:721.50*2/3, y:533.00*2/3,
			scale: 10,
			anime1: "nitori-wait",
			anime2: null,
			anime3: null,
			anime4: "nitori-reverse_ura",
			anime5: "nitori-ura_wait",
			anime6: "nitori-reverse_omote",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},


	],
};

