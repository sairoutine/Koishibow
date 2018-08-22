'use strict';
// にとり お面屋
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_05",
	chapter: 1,
	bgm: "field3",
	rightStartPosition: {x: 800, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	rightField: "chapter1_06",
	leftField:  "chapter1_04",
	background: "chapter1-05-bg-001",
	walkSound: "walking_bare_outside",
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
			loop: true,
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_05-" + I + "-_useItem-06"], "serifs": [
					[
						{"chara": I,        "exp": "nitori-ura_reaction_03", "serif":_("きゅうりさんきゅうりさん\nうふふ")},
					],
					[

						{"chara": I,        "exp": "nitori-ura_reaction_01", "serif":_("なんでしらないひとと\nなかよくしなきゃいけないの？")},
						{"chara": I,        "exp": "nitori-ura_reaction_01", "serif":_("ほんとうはしらないひと\nこわいのに......")},
						{"chara": I,        "exp": "nitori-ura_reaction_01", "serif":_("あーあ、すきなものだけが\nほしいのに......")},
						{"chara": I,        "exp": "nitori-ura_wait", "serif":_("ほかのこみたいになりたいな......")},
					],
				]}
			],
			serif: [
				// みどりいろのぐねぐねを持っているか否か
				{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["06"], "serifs": [
					[
						// 1-11
						{"id": "chapter1_05-" + I + "-_useItem-06", "save": true},
						{"chara": "koishi", "exp": "back", "serif":_("ねえ、これ")},
						{"chara": I,        "exp": "nitori-reaction_03", "serif":_("なんだい")},
						{"chara": "koishi", "exp": "back", "serif":_("これみて。ほしいんじゃないの？"), "option": {"useItem": "06"}},
						{"chara": I,        "exp": "nitori-reaction_01", "serif":_("おっ！")},
						{"chara": I,        "exp": "nitori-reaction_01", "serif":_("みどりで！")},
						{"chara": I,        "exp": "nitori-reaction_01", "serif":_("ながくて！")},
						{"chara": I,        "exp": "nitori-reaction_01", "serif":_("ぐねぐねなやつ！")},
						{"chara": I,        "exp": "nitori-reaction_04", "serif":_("これだいすき！なんでわかったの？")},
						{"chara": "koishi", "exp": "back", "serif":_("えっ？")},
						{"chara": "koishi", "exp": "back", "serif":_("わかんない......")},
						// 1-14
						{"chara": I,        "exp": "nitori-reaction_04", "serif":_("お面がほしいの？")},
						{"chara": I,        "exp": "nitori-reaction_04", "serif":_("売れ残りだけど、あげちゃう！"), "option": {
							"getItem": "10",
						}},
						{"chara": I,        "exp": "nitori-reaction_04", "serif":_("またきてね！")},
					],
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_05-" + I + "-_useItem-06"], "serifs": [
							[
								{"chara": I,        "exp": "back", "serif":_("仮面屋よりも、もっとやりたいことあるんだよね")},
								{"chara": I,        "exp": "back", "serif":_("あなたはどう？")},
								{"chara": I,        "exp": "back", "serif":_("本当はやってみたいこと、ない？")},
							],
							[
								{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter1_05-" + I + "limit-01", 1], "serifs": [
									[
										{"chara": I,        "exp": "nitori-reaction_01", "serif":_("いよお友よ！")},
										{"chara": "koishi", "exp": "back", "serif":_("えっ？")},
									],
									[
										// 1-9
										{"chara": "koishi", "exp": "back", "serif":_("なにしてるの？")},
										{"chara": I,        "exp": "back", "serif":_("仮面屋さ！")},
										{"chara": "koishi", "exp": "back", "serif":_("仮面って何に使うの？")},
										{"chara": I,        "exp": "back", "serif":_("そりゃ被るのさ！")},
										{"chara": "koishi", "exp": "back", "serif":_("ふーん")},
										{"chara": I,        "exp": "back", "serif":_("おめん欲しいだろ？")},
										{"chara": "koishi", "exp": "back", "serif":_("うーんちょっとだけ")},
										{"chara": I,        "exp": "back", "serif":_("そうだよな！\nそれじゃあ特におすすめの希望の面！\nこれは5000でいいぞ！")},
										{"chara": "koishi", "exp": "back", "serif":_("お金いるの？")},
										{"chara": I,        "exp": "back", "serif":_("当然さぁ、お店なんだから！")},
										{"chara": "koishi", "exp": "back", "serif":_("お金ないときはどうしたらいいの？")},
										{"chara": I,        "exp": "nitori-reaction_02", "serif":_("金がないんじゃあ仮面は売れないね！\nとっとといきな！")},
									],
								]}
							],
						]}
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
		},


	],
};

