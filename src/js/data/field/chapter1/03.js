'use strict';
var _ = require('i18n4v')
// てぃ ペンキ
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_03",
	chapter: 1,
	bgm: "field3",
	sub_bgms: ["chapter1-03-drop_paint"],
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 146, y: 320},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter1_04",
	leftField: "chapter1_02",
	upField: null,
	downField: null,
	background: "chapter1-03-bg-001",
	walkSound: "walking_bare_outside",
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
				{"chara": "koishi","serif":_("これさわるといろがかわるんだよ！")},
			],
			x:887*2/3, y:715*2/3,
			scale: 2/3,
			action_name: "look_bottom",
			sound_name: "chapter1-03-sound_bucket",

		},
		{
			no: ++I,
			type: CONSTANT.SUSPENDED_TREE_TYPE,
			name: "うさぎを吊るした木",
			serif: null,
			x:779.00*2/3, y:356.50*2/3,
			scale: 2/3,
			anime1: "chapter1-03-obj-05-obj01",
			after_anime: "chapter1-03-obj-05-obj02", // 特殊アニメ
			action_name: null,
			sound_name: null
		},
		{
			no: ++I,
			image: "chapter1-03-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ハシゴ",
			serif: [
				{"chara": "koishi","serif":_("おつきさまとれるかな")},
			],
			x:1053*2/3, y:484*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			position_type: "lying",
			not_show_if_event_true: "chapter1_03-afterWork",
		},

		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "てゐ",
			turn_toward_me: true, // こいしの方を向く
			loop: true, // 何回でもタッチできる
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_03-" + I + "-_useItem-10"], "serifs": [
					[
						{"chara": I,        "exp": "tewi-ura_reaction_02", "serif":_("うう、なんとかなった......")},
						{"chara": I,        "exp": "tewi-ura_reaction_02", "serif":_("今度はもっと計画的にやろう")},
					],
					[
						{"chara": I,        "exp": "tewi-ura_reaction_01", "serif":_("お仕事しなきゃなあ")},
						{"chara": I,        "exp": "tewi-ura_reaction_01", "serif":_("でもしたくないなあ")},
						{"chara": I,        "exp": "tewi-ura_reaction_01", "serif":_("別に怒られないしあとでいっか......")},
					],

				]}
			],
			serif: [
				// こわいおめんを持っているか否か
				{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["10"], "serifs": [
					[
						{"id": "chapter1_03-" + I + "-_useItem-10", "save": true},
						{"chara": I,        "exp": "tewi-reaction_04", "serif":_("げえっ！"), "option": {"useItem": "10"}},
						{"chara": I,        "exp": "back", "serif":_("い、いつからそこに")},
						{"chara": "koishi", "exp": "back", "serif":_(".............")},
						{"chara": I,        "exp": "tewi-reaction_01", "serif":_("わかりました！")},
						{"chara": I,        "exp": "tewi-reaction_03", "serif":_("わかりましたよ！")},
						{"chara": I,        "exp": "tewi-reaction_01", "serif":_("いまやるから、もうちょっとまっててくれよ")},
						{"chara": "koishi", "serif": "", "option": {"getItem": "05"}},
						{"id": "chapter1_03-afterWork", "save": true},
						{"chara": "koishi", "serif": "", "option": {"changeField": "chapter1_03"}},
					],
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_03-" + I + "-_useItem-10"], "serifs": [
							[
								{"chara": I,        "exp": "tewi-reaction_02", "serif":_("フーっ、まいったぜ……")},
								{"chara": "koishi", "exp": "back", "serif":_("何が？")},
								{"chara": I,        "exp": "tewi-wait", "serif":_("いやこっちの話")},
								{"chara": I,        "exp": "tewi-reaction_02", "serif":_("とにかく疲れちまったから放っておいてくれ")},
							],
							[
								{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter1_03-" + I + "limit-01", 1], "serifs": [
									[
										// 1-4
										{"chara": I,        "exp": "tewi-reaction_01", "serif":_("なんだい！")},
										{"chara": "koishi", "exp": "look_front", "serif":_("なにしてるの？")},
										{"chara": I,        "exp": "back", "serif":_("なにもしてないんだよ")},
										{"chara": "koishi", "exp": "back", "serif":_("へんなの")},
										{"chara": I,        "exp": "back", "serif":_("みせものじゃないんだ、いきな！")},
									],

									[
										{"chara": I,        "exp": "tewi-reaction_02", "serif":_("おまえひまなのか？")},
										{"chara": I,        "exp": "tewi-reaction_02", "serif":_("あのなあ")},
										{"chara": "koishi", "exp": "back", "serif":_("なに？")},
										{"chara": I,        "exp": "tewi-wait", "serif":_("おまえやることないのか？")},
										{"chara": "koishi", "exp": "back", "serif":_("えっと、あるよ")},
										{"chara": I,        "exp": "tewi-reaction_01", "serif":_("じゃーとっとと行きな！")},
										{"chara": "koishi", "exp": "back", "serif":_("でも、わたしなにをしなきゃいけないんだっけ")},
										{"chara": I,        "exp": "tewi-reaction_03", "serif":_("わたしが知るもんか！")},
										{"chara": "koishi", "exp": "back", "serif":_("……")},
									],
								]}
							],
						]}
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
			width: 100,
		},


	],
};

