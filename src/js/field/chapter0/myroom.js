// こいしの自室(ベッド／帽子／ドア) 帽子はベッドのふちにかけてある
var CONSTANT = require("../../constant");
module.exports = {
	key: "chapter0_myroom",
	name: "こいしの部屋",
	bgm: "field1",
	right_start_position: {x: 690, y: 540},
	left_start_position:  {x: 180, y: 540},
	right_field: "chapter0_hospital_corridor1",
	left_field: null,
	background: "chapter0-myroom-bg-001",
	walk_sound: "walking_bare_default",
	objects: [
		{image: "chapter0-myroom-obj-01-01", type: CONSTANT.STATIC_IMAGE_TYPE, name: "ベッド", serif: ["まだねむたくないもん"], x: 258, y: 389, scale: 0.7, action: "touch", sound: "touch"},
		{image: "chapter0-myroom-obj-05-01", type: CONSTANT.STATIC_IMAGE_TYPE, name: "キャビネット", serif: ["あけない"], x: 59, y: 496, scale: 0.7, action: "touch", sound: "touch"},

		{ type: CONSTANT.ANIME_IMAGE_TYPE,  name: "本", serif: ["にっきさんひさしぶり！", "またね！"], x: 340, y: 530, scale: 0.7, anime1: "chapter0-myroom-obj-02-01-obj01", anime2: "chapter0-myroom-obj-02-01-obj02", anime3: "chapter0-myroom-obj-02-01-obj03", width: 80, height: 80, action: "look_bottom", sound: "chapter0-myroom-open_book"},
		{ type: CONSTANT.ANIME_IMAGE_TYPE,  name: "クレヨン", serif: ["くれおん！", "ピンクなくなっちゃったなー"], x: 600, y: 530, scale: 0.7, anime1: "chapter0-myroom-obj-03-01-obj01", anime2: "chapter0-myroom-obj-03-01-obj02", anime3: "chapter0-myroom-obj-03-01-obj03", width: 80, height: 80, action: "look_bottom", sound: "chapter0-myroom-move_crayon"},
		{ type: CONSTANT.ANIME_IMAGE_TYPE,  name: "まど", serif: ["なにかいる！"], x: 5, y: 180, scale: 0.7, anime1: "chapter0-myroom-obj-04-01-obj01", anime2: "chapter0-myroom-obj-04-01-obj02", anime3: "chapter0-myroom-obj-04-01-obj03", action: "look_top", sound: "chapter0-myroom-sound_window_for_kokoro"},


		{image: "paper", type: CONSTANT.PAPER_TYPE, x: 258, y: 689, scale: 2/3, picture: "journal001", text: "　 John Bowlbyが提唱した愛着理論によれば、母子の間には生物学的な絆がある。\n　空腹・不眠といった不快・不安状態にある子どもは適切に処置してくれる周囲の人々に対し「肯定的期待」すなわち自分に困ったことがあっても助けてもらえるというを抱くようになる。一方で泣き叫ぶ子どもがいつまでたってもかまってもらえずにいると逆に子供の警戒心や不安感は大きくなっていってしまう。"},
	],
};

