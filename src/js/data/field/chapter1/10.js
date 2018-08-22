'use strict';
var _ = require("i18n4v")
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_10",
	chapter: 1,
	bgm: "field4",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	rightField: null,
	leftField: "chapter1_09",
	background: "chapter1-10-bg-001",
	walkSound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "砂場",
			serif: null,
			x: 720*2/3, y: 770*2/3,
			scale: 2/3,
			anime1: "chapter1-10-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-10-obj-01-obj02",
			anime5: "chapter1-10-obj-01-obj03",
			anime6: "chapter1-10-obj-01-obj04",

			action_name: null,
			sound_name: null,
			sound_back: "chapter1-10-flow_sand",
			position_type: "lying",
		},

		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "崖",
			serif: null,
			width: 300, height: 250,
			x: 800, y: 600,
		},


		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "小傘",
			loop: true,
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_10-" + I + "-talk01"], "serifs": [
					[
						{"id": "chapter1_10-secretBase-01", "save": true},
						{"chara": I, "exp": "kogasa-ura_reaction_02", "serif":_("こわいけどやさしいもの、なーんだ？")},
					],
					[
						{"chara": I, "exp": "kogasa-ura_reaction_01", "serif":_("わたしはゴミじゃない！")},
						{"chara": I, "exp": "kogasa-ura_reaction_01", "serif":_("私は捨てられていない！")},
						{"chara": I, "exp": "kogasa-ura_reaction_01", "serif":_("パパもママも好きって言ったもん")},
						{"chara": I, "exp": "kogasa-ura_reaction_01", "serif":_("ほんとだもん！")},
						{"chara": I, "exp": "kogasa-ura_reaction_01", "serif":_("迎えに来てくれるもん！")},
					],
				]}
			],
			serif: [
				// 水をためたじょうろ
				{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["04"], "serifs": [
					[
						{"id": "chapter1_10-" + I + "-_useItem-04", "save": true},
						{"chara": I, "exp": "kogasa-reaction_03", "serif":_("！"), "option": {"useItem": "04"}},
						{"chara": I, "exp": "kogasa-reaction_02", "serif":_("みずあそびするの？")},
						{"chara": I, "exp": "kogasa-reaction_01", "serif":_("わたしそれ得意だから！")},
						{"chara": I, "exp": "kogasa-reaction_01", "serif":_("みてて！みてて！"), "option": {
							"showPicture": "picture_chapter1-10-illust-01",
						}},
					],
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_10-" + I + "-_useItem-04"], "serifs": [
							[
								{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter1_10-" + I + "limit-01", 1], "serifs": [
									[
										{"chara": I, "exp": "kogasa-reaction_02", "serif":_("どうしたの？")},
										{"chara": I, "exp": "kogasa-reaction_02", "serif":_("ああ、あの子？")},
										{"chara": I, "exp": "kogasa-reaction_04", "serif":_("あのこちょっと怖いから……")},
										{"chara": I, "exp": "kogasa-reaction_04", "serif":_("だっていっつも怒ってるんだモン")},

										{"chara": I, "exp": "kogasa-reaction_04", "serif":_("みんなで遊ぶのはいいけど\nあの子と一緒にいるの嫌なの")},
									],
									[
										{"id": "chapter1_10-" + I + "-talk01", "save": true},
										{"chara": "koishi",        "exp": "back", "serif":_("ひつみきちってなんなの？")},
										{"chara": I, "exp": "kogasa-reaction_02", "serif":_("秘密基地？")},
										{"chara": I, "exp": "kogasa-reaction_01", "serif":_("友達だけが入れる\n秘密の部屋があるの！")},
										{"chara": I, "exp": "kogasa-reaction_04", "serif":_("うーん教えようかな\nどうしようかな")},
									],
								]},
							],
							[
								{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter1_10-" + I + "limit-02", 2], "serifs": [
									[
										// 1-24
										{"chara": I, "exp": "kogasa-reaction_01", "serif":_("あら")},
										{"chara": I, "exp": "kogasa-reaction_01", "serif":_("あなたも私が気になるの？")},
										{"chara": "koishi",        "exp": "back", "serif":_("え？")},
										{"chara": "koishi",        "exp": "back", "serif":_("なにが？")},
										{"chara": I, "exp": "kogasa-reaction_02", "serif":_("わたしがすきなんでしょ？")},
										{"chara": "koishi",        "exp": "back", "serif":_("？")},
									],
									[
										{"chara": I, "exp": "kogasa-reaction_01", "serif":_("みんな私が大好きなの！")},
										{"chara": I, "exp": "kogasa-reaction_01", "serif":_("あなたも好きだよね！")},
									],
									[
										{"chara": "koishi",        "exp": "back", "serif":_("ねえ、なんでそんなこと言うの？")},
										{"chara": I, "exp": "kogasa-reaction_02", "serif":_("なにが？")},
										{"chara": "koishi",        "exp": "back", "serif":_("・・・・・・")},
									]
								]},
							]
						]}
					]
				]}
			],
			x: 955*2/3, y: 429*2/3,
			scale: 2/3,
			anime1: "kogasa-wait",
			anime2: null,
			anime3: null,
			anime4: "kogasa-reverse_ura",
			anime5: "kogasa-ura_wait",
			anime6: "kogasa-reverse_omote",
			width: 150,

			action_name: null,
			sound_name: null,
		},

	]
};

