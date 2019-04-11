'use strict';
var _ = require('i18n4v')
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_10",
	chapter: 1,
	bgm: "field4",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: "chapter1_09",
	upField: null,
	downField: null,
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
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_10-" + I + "-talk01"], "serifs": [
					[
						{"id": "chapter1_10-secretBase-01", "save": true},
						{"chara": I, "exp": "kogasa-ura_reaction_02",  serif1: _("こわいけどやさしいもの、なーんだ？"), serif2: _("こわいけどやさしいもの、なーんだ？"), serif3: _("こわいけどやさしいもの、なーんだ？"), serif4: _("こわいけどやさしいもの、なーんだ？")},
					],
					[
						{"chara": I, "exp": "kogasa-ura_reaction_01",  serif1: _("わたしはゴミじゃない！"), serif2: _("わたしはゴミじゃない！"), serif3: _("わたしはゴミじゃない！"), serif4: _("わたしはゴミじゃない！")},
						{"chara": I, "exp": "kogasa-ura_reaction_01",  serif1: _("私は捨てられていない！"), serif2: _("私は捨てられていない！"), serif3: _("私は捨てられていない！"), serif4: _("私は捨てられていない！")},
						{"chara": I, "exp": "kogasa-ura_reaction_01",  serif1: _("パパもママも好きって言ったもん"), serif2: _("パパもママも好きって言ったもん"), serif3: _("パパもママも好きって言ったもん"), serif4: _("パパもママも好きって言ったもん")},
						{"chara": I, "exp": "kogasa-ura_reaction_01",  serif1: _("ほんとだもん！"), serif2: _("ほんとだもん！"), serif3: _("ほんとだもん！"), serif4: _("ほんとだもん！")},
						{"chara": I, "exp": "kogasa-ura_reaction_01",  serif1: _("迎えに来てくれるもん！"), serif2: _("迎えに来てくれるもん！"), serif3: _("迎えに来てくれるもん！"), serif4: _("迎えに来てくれるもん！")},
					],
				]}
			],
			serif: [
				// 水をためたじょうろ
				{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["04"], "serifs": [
					[
						{"id": "chapter1_10-" + I + "-_useItem-04", "save": true},
						{"chara": I, "exp": "kogasa-reaction_03",  serif1: _("！"), serif2: _("！"), serif3: _("！"), serif4: _("！"), "option": {"useItem": "04"}},
						{"chara": I, "exp": "kogasa-reaction_02",  serif1: _("みずあそびするの？"), serif2: _("みずあそびするの？"), serif3: _("みずあそびするの？"), serif4: _("みずあそびするの？")},
						{"chara": I, "exp": "kogasa-reaction_01",  serif1: _("わたしそれ得意だから！"), serif2: _("わたしそれ得意だから！"), serif3: _("わたしそれ得意だから！"), serif4: _("わたしそれ得意だから！")},
						{"chara": I, "exp": "kogasa-reaction_01",  serif1: _("みてて！みてて！"), serif2: _("みてて！みてて！"), serif3: _("みてて！みてて！"), serif4: _("みてて！みてて！"), "option": {
							"showPicture": "picture_chapter1-10-illust-01",
						}},
					],
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_10-" + I + "-_useItem-04"], "serifs": [
							[
								{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter1_10-" + I + "limit-01", 1], "serifs": [
									[
										{"chara": I, "exp": "kogasa-reaction_02",  serif1: _("どうしたの？"), serif2: _("どうしたの？"), serif3: _("どうしたの？"), serif4: _("どうしたの？")},
										{"chara": I, "exp": "kogasa-reaction_02",  serif1: _("ああ、あの子？"), serif2: _("ああ、あの子？"), serif3: _("ああ、あの子？"), serif4: _("ああ、あの子？")},
										{"chara": I, "exp": "kogasa-reaction_04",  serif1: _("あのこちょっと怖いから……"), serif2: _("あのこちょっと怖いから……"), serif3: _("あのこちょっと怖いから……"), serif4: _("あのこちょっと怖いから……")},
										{"chara": I, "exp": "kogasa-reaction_04",  serif1: _("だっていっつも怒ってるんだモン"), serif2: _("だっていっつも怒ってるんだモン"), serif3: _("だっていっつも怒ってるんだモン"), serif4: _("だっていっつも怒ってるんだモン")},

										{"chara": I, "exp": "kogasa-reaction_04", "serif": _("みんなで遊ぶのはいいけど\nあの子と一緒にいるの嫌なの")},
									],
									[
										{"id": "chapter1_10-" + I + "-talk01", "save": true},
										{"chara": "koishi",        "exp": "back",  serif1: _("ひつみきちってなんなの？"), serif2: _("ひつみきちってなんなの？"), serif3: _("ひつみきちってなんなの？"), serif4: _("ひつみきちってなんなの？")},
										{"chara": I, "exp": "kogasa-reaction_02",  serif1: _("秘密基地？"), serif2: _("秘密基地？"), serif3: _("秘密基地？"), serif4: _("秘密基地？")},
										{"chara": I, "exp": "kogasa-reaction_01", "serif": _("友達だけが入れる\n秘密の部屋があるの！")},
										{"chara": I, "exp": "kogasa-reaction_04", "serif": _("うーん教えようかな\nどうしようかな")},
									],
								]},
							],
							[
								{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter1_10-" + I + "limit-02", 2], "serifs": [
									[
										// 1-24
										{"chara": I, "exp": "kogasa-reaction_01",  serif1: _("あら"), serif2: _("あら"), serif3: _("あら"), serif4: _("あら")},
										{"chara": I, "exp": "kogasa-reaction_01",  serif1: _("あなたも私が気になるの？"), serif2: _("あなたも私が気になるの？"), serif3: _("あなたも私が気になるの？"), serif4: _("あなたも私が気になるの？")},
										{"chara": "koishi",        "exp": "back",  serif1: _("え？"), serif2: _("え？"), serif3: _("え？"), serif4: _("え？")},
										{"chara": "koishi",        "exp": "back", "serif": _("CHAPTER1_FIELD_10_SERIF0001")},
										{"chara": I, "exp": "kogasa-reaction_02",  serif1: _("わたしがすきなんでしょ？"), serif2: _("わたしがすきなんでしょ？"), serif3: _("わたしがすきなんでしょ？"), serif4: _("わたしがすきなんでしょ？")},
										{"chara": "koishi",        "exp": "back",  serif1: _("？"), serif2: _("？"), serif3: _("？"), serif4: _("？")},
									],
									[
										{"chara": I, "exp": "kogasa-reaction_01",  serif1: _("みんな私が大好きなの！"), serif2: _("みんな私が大好きなの！"), serif3: _("みんな私が大好きなの！"), serif4: _("みんな私が大好きなの！")},
										{"chara": I, "exp": "kogasa-reaction_01",  serif1: _("あなたも好きだよね！"), serif2: _("あなたも好きだよね！"), serif3: _("あなたも好きだよね！"), serif4: _("あなたも好きだよね！")},
									],
									[
										{"chara": "koishi",        "exp": "back",  serif1: _("ねえ、なんでそんなこと言うの？"), serif2: _("ねえ、なんでそんなこと言うの？"), serif3: _("ねえ、なんでそんなこと言うの？"), serif4: _("ねえ、なんでそんなこと言うの？")},
										{"chara": I, "exp": "kogasa-reaction_02", "serif": _("CHAPTER1_FIELD_10_SERIF0002")},
										{"chara": "koishi",        "exp": "back", "serif": _("・・・・・・")},
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
			show_if_event_true: "event_for_chapter1_playdoll",
		},
		{
			no: ++I,
			type: CONSTANT.JOURNAL_BACK_TYPE,
			x: 349, y: 363,
			journal_id: "journal009",
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "砂場の小山",
			serif: [
				{"chara": "koishi", "exp": "look_bottom",  serif1: _("あは！"), serif2: _("あは！"), serif3: _("あは！"), serif4: _("あは！")},
				{"chara": "koishi", "exp": "look_bottom",  serif1: _("あしがくすぐったい"), serif2: _("あしがくすぐったい"), serif3: _("あしがくすぐったい"), serif4: _("あしがくすぐったい"), "option": {"getJournal":"journal015"}},
			],
			width: 0, height: 0,
			x: 349, y: 363,
			position_type: "lying",
		},




	]
};

