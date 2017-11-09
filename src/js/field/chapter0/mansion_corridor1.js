// 屋敷の廊下1
var CONSTANT = require("../../constant");
module.exports = {
	key: "chapter0_mansion_corridor1",
	name: "屋敷の廊下1",
	bgm: "field2",
	bgm2: "chapter0-mansion_corridor1-wind",
	right_start_position: {x: 690, y: 540},
	left_start_position:  {x: 180, y: 540},
	right_field: "chapter0_mansion_corridor2",
	left_field: "chapter0_hospital_corridor2",
	background: "chapter0-mansionpas-001",
	walk_sound: "walking_bare_wood",
	objects: [
		{
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "ランプ",
			serif: ["まぶしい"],
			x: 805,
			y: 65,
			scale: 0.7,
			anime1: "chapter0-mansion_corridor1-obj-01-01-obj01",
			anime2: "chapter0-mansion_corridor1-obj-01-01-obj02",
			anime3: "chapter0-mansion_corridor1-obj-01-01-obj03",
			anime4: "chapter0-mansion_corridor1-obj-01-01-obj04",
			anime5: "chapter0-mansion_corridor1-obj-01-01-obj05",
			anime6: "chapter0-mansion_corridor1-obj-01-01-obj06",
			action: "look_top",
			sound:      "chapter0-mansion_corridor1-lamp_front",
			sound_back: "chapter0-mansion_corridor1-lamp_back"
		},
		{
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "三輪車",
			serif: ["あとでのろっと"],
			x: 815,
			y: 515,
			scale: 0.7,
			anime1: "chapter0-mansion_corridor1-obj-02-01-obj01",
			anime2: "chapter0-mansion_corridor1-obj-02-01-obj02",
			anime3: "chapter0-mansion_corridor1-obj-02-01-obj03",
			anime4: "chapter0-mansion_corridor1-obj-02-01-obj04",
			anime5: "chapter0-mansion_corridor1-obj-02-01-obj05",
			anime6: "chapter0-mansion_corridor1-obj-02-01-obj06",
			action: "touch",
			sound: "chapter0-mansion_corridor1-move_tricycle",
			bgm_back: "chapter0-mansion_corridor1-tricycle",
		},
		{
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "カーテン",
			serif: ["いまはかくれんぼしてないから\nあとでね！"],
			x: 190,
			y: 135,
			scale: 0.7,
			anime1: "chapter0-mansion_corridor1-obj-03-01-obj01",
			anime2: "chapter0-mansion_corridor1-obj-03-01-obj02",
			anime3: "chapter0-mansion_corridor1-obj-03-01-obj03",
			anime4: "chapter0-mansion_corridor1-obj-03-01-obj04",
			anime5: "chapter0-mansion_corridor1-obj-03-01-obj05",
			anime6: "chapter0-mansion_corridor1-obj-03-01-obj06",
			action: "look_top",
			sound_back: "chapter0-mansion_corridor1-open_curtain"
		},


		{image: "paper", type: CONSTANT.PAPER_TYPE, x: 192, y: 530, scale: 2/3, picture: "journal004", text: "「臨床心理士は子どものあるがままの姿を受け入れなければならない」\n――アクスラインの8原則より\n\n　遊戯療法においては、子どもは安全な遊びの中で実験や見直しができる。言語表現が未熟な幼児や児童に対しては対話よりも有効である。\n"},
	],

};
