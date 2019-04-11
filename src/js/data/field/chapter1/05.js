'use strict';
var _ = require('i18n4v')
// にとり お面屋
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_05",
	chapter: 1,
	bgm: "field3",
	rightStartPosition:   {x: 800, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter1_06",
	leftField:  "chapter1_04",
	upField: null,
	downField: null,
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
						{"chara": I,        "exp": "nitori-ura_reaction_03", "serif": _("きゅうりさんきゅうりさん\nうふふ")},
					],
					[

						{"chara": I,        "exp": "nitori-ura_reaction_01", "serif": _("なんでしらないひとと\nなかよくしなきゃいけないの？")},
						{"chara": I,        "exp": "nitori-ura_reaction_01", "serif": _("ほんとうはしらないひと\nこわいのに......")},
						{"chara": I,        "exp": "nitori-ura_reaction_01", "serif": _("あーあ、すきなものだけが\nほしいのに......")},
						{"chara": I,        "exp": "nitori-ura_wait",  serif1: _("ほかのこみたいになりたいな......"), serif2: _("ほかのこみたいになりたいな......"), serif3: _("ほかのこみたいになりたいな......"), serif4: _("ほかのこみたいになりたいな......")},
					],
				]}
			],
			serif: [
				// みどりいろのぐねぐねを持っているか否か
				{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["06"], "serifs": [
					[
						// 1-11
						{"id": "chapter1_05-" + I + "-_useItem-06", "save": true},
						{"chara": "koishi", "exp": "back",  serif1: _("ねえ、これ"), serif2: _("ねえ、これ"), serif3: _("ねえ、これ"), serif4: _("ねえ、これ")},
						{"chara": I,        "exp": "nitori-reaction_03",  serif1: _("なんだい"), serif2: _("なんだい"), serif3: _("なんだい"), serif4: _("なんだい")},
						{"chara": "koishi", "exp": "back",  serif1: _("これみて。ほしいんじゃないの？"), serif2: _("これみて。ほしいんじゃないの？"), serif3: _("これみて。ほしいんじゃないの？"), serif4: _("これみて。ほしいんじゃないの？"), "option": {"useItem": "06"}},
						{"chara": I,        "exp": "nitori-reaction_01",  serif1: _("おっ！"), serif2: _("おっ！"), serif3: _("おっ！"), serif4: _("おっ！")},
						{"chara": I,        "exp": "nitori-reaction_01",  serif1: _("みどりで！"), serif2: _("みどりで！"), serif3: _("みどりで！"), serif4: _("みどりで！")},
						{"chara": I,        "exp": "nitori-reaction_01",  serif1: _("ながくて！"), serif2: _("ながくて！"), serif3: _("ながくて！"), serif4: _("ながくて！")},
						{"chara": I,        "exp": "nitori-reaction_01",  serif1: _("ぐねぐねなやつ！"), serif2: _("ぐねぐねなやつ！"), serif3: _("ぐねぐねなやつ！"), serif4: _("ぐねぐねなやつ！")},
						{"chara": I,        "exp": "nitori-reaction_04",  serif1: _("これだいすき！なんでわかったの？"), serif2: _("これだいすき！なんでわかったの？"), serif3: _("これだいすき！なんでわかったの？"), serif4: _("これだいすき！なんでわかったの？")},
						{"chara": "koishi", "exp": "back",  serif1: _("えっ？"), serif2: _("えっ？"), serif3: _("えっ？"), serif4: _("えっ？")},
						{"chara": "koishi", "exp": "back",  serif1: _("わかんない......"), serif2: _("わかんない......"), serif3: _("わかんない......"), serif4: _("わかんない......")},
						// 1-14
						{"chara": I,        "exp": "nitori-reaction_04",  serif1: _("お面がほしいの？"), serif2: _("お面がほしいの？"), serif3: _("お面がほしいの？"), serif4: _("お面がほしいの？")},
						{"chara": I,        "exp": "nitori-reaction_04",  serif1: _("売れ残りだけど、あげちゃう！"), serif2: _("売れ残りだけど、あげちゃう！"), serif3: _("売れ残りだけど、あげちゃう！"), serif4: _("売れ残りだけど、あげちゃう！"), "option": {
							"getItem": "10",
						}},
						{"chara": I,        "exp": "nitori-reaction_04",  serif1: _("またきてね！"), serif2: _("またきてね！"), serif3: _("またきてね！"), serif4: _("またきてね！")},
					],
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_05-" + I + "-_useItem-06"], "serifs": [
							[
								{"chara": I,        "exp": "back",  serif1: _("仮面屋よりも、もっとやりたいことあるんだよね"), serif2: _("仮面屋よりも、もっとやりたいことあるんだよね"), serif3: _("仮面屋よりも、もっとやりたいことあるんだよね"), serif4: _("仮面屋よりも、もっとやりたいことあるんだよね")},
								{"chara": I,        "exp": "back",  serif1: _("あなたはどう？"), serif2: _("あなたはどう？"), serif3: _("あなたはどう？"), serif4: _("あなたはどう？")},
								{"chara": I,        "exp": "back",  serif1: _("本当はやってみたいこと、ない？"), serif2: _("本当はやってみたいこと、ない？"), serif3: _("本当はやってみたいこと、ない？"), serif4: _("本当はやってみたいこと、ない？")},
							],
							[
								{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter1_05-" + I + "limit-01", 1], "serifs": [
									[
										{"chara": I,        "exp": "nitori-reaction_01",  serif1: _("いよお友よ！"), serif2: _("いよお友よ！"), serif3: _("いよお友よ！"), serif4: _("いよお友よ！")},
										{"chara": "koishi", "exp": "back",  serif1: _("えっ？"), serif2: _("えっ？"), serif3: _("えっ？"), serif4: _("えっ？")},
									],
									[
										// 1-9
										{"chara": "koishi", "exp": "back",  serif1: _("なにしてるの？"), serif2: _("なにしてるの？"), serif3: _("なにしてるの？"), serif4: _("なにしてるの？")},
										{"chara": I,        "exp": "back",  serif1: _("仮面屋さ！"), serif2: _("仮面屋さ！"), serif3: _("仮面屋さ！"), serif4: _("仮面屋さ！")},
										{"chara": "koishi", "exp": "back",  serif1: _("仮面って何に使うの？"), serif2: _("仮面って何に使うの？"), serif3: _("仮面って何に使うの？"), serif4: _("仮面って何に使うの？")},
										{"chara": I,        "exp": "back",  serif1: _("そりゃ被るのさ！"), serif2: _("そりゃ被るのさ！"), serif3: _("そりゃ被るのさ！"), serif4: _("そりゃ被るのさ！")},
										{"chara": "koishi", "exp": "back", "serif": _("ふーん")},
										{"chara": I,        "exp": "back",  serif1: _("おめん欲しいだろ？"), serif2: _("おめん欲しいだろ？"), serif3: _("おめん欲しいだろ？"), serif4: _("おめん欲しいだろ？")},
										{"chara": "koishi", "exp": "back",  serif1: _("うーんちょっとだけ"), serif2: _("うーんちょっとだけ"), serif3: _("うーんちょっとだけ"), serif4: _("うーんちょっとだけ")},
										{"chara": I,        "exp": "back", "serif": _("そうだよな！\nそれじゃあ特におすすめの希望の面！\nこれは5000でいいぞ！")},
										{"chara": "koishi", "exp": "back",  serif1: _("お金いるの？"), serif2: _("お金いるの？"), serif3: _("お金いるの？"), serif4: _("お金いるの？")},
										{"chara": I,        "exp": "back",  serif1: _("当然さぁ、お店なんだから！"), serif2: _("当然さぁ、お店なんだから！"), serif3: _("当然さぁ、お店なんだから！"), serif4: _("当然さぁ、お店なんだから！")},
										{"chara": "koishi", "exp": "back",  serif1: _("お金ないときはどうしたらいいの？"), serif2: _("お金ないときはどうしたらいいの？"), serif3: _("お金ないときはどうしたらいいの？"), serif4: _("お金ないときはどうしたらいいの？")},
										{"chara": I,        "exp": "nitori-reaction_02", "serif": _("金がないんじゃあ仮面は売れないね！\nとっとといきな！")},
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
		{
			no: ++I,
			type: CONSTANT.JOURNAL_BACK_TYPE,
			x: 720, y: 510,
			journal_id: "journal012",
		},



	],
};

