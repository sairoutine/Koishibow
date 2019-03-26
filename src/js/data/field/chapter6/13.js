'use strict';
var _ = require('i18n4v')
// 混沌
// バス停
// chapter1, chapter6 にもバス停が存在するので
// 当たり判定修正時はそちらも修正する
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter6_13",
	chapter: 6,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: null,
	upField: null,
	downField: null,
	background: "chapter1-02-bg-001",
	walkSound: "walking_bare_outside",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter6_13_firstaccess"], "process": [
			// 1度目アクセス済み
			[
			],
			// 1度目まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "look_top", "serif":_("目が回ってきた")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter6_13_firstaccess"]}
			],
		]},
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter1-02-obj-06-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-02-obj-06-obj02",
			anime5: "chapter1-02-obj-06-obj03",
			anime6: "chapter1-02-obj-06-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter1-02-obj-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ベンチ",
			serif: [
				{"chara": "chocolate_box","exp": null, "serif": _("やあ")},
				{"chara": "koishi","exp": "look_front", "serif": _("なに")},
				{"chara": "chocolate_box","exp": null, "serif": _("ここまで旅してきてどうだった？")},
				{"chara": "koishi","exp": "look_front", "serif": _("どういうこと？")},
				{"chara": "chocolate_box","exp": null, "serif": _("人生はチョコレートの箱")},
				{"chara": "chocolate_box","exp": null, "serif": _("どんな素敵なものが詰まっているか――")},
				{"chara": "chocolate_box","exp": null, "serif": _("開けなければわからない")},
				{"chara": "koishi","exp": "look_top", "serif": _("ぜんぜんわかんないんだけど")},
				{"chara": "chocolate_box","exp": null, "serif": _("君は早く”目を開けて”中身を見ないとね")},
				{"chara": "chocolate_box","exp": null, "serif": _("僕を開けて！")},
			],
			x: 693.50*2/3, y:619.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},

		{
			no: "chocolate_box",
			image: "chapter1-02-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "チョコレート箱",
			serif: [
				{"chara": "koishi","exp": "touch", "serif": _("はさみ！"), "option": {"getItem": "36"}},
				{"chara": "koishi","exp": "yes", "serif": _("いい武器！")},
				{"chara": "koishi","exp": null, "serif": _("チョコレートさんありがとう！")},
				{"chara": "koishi","exp": "look_top", "serif": _("へへへ")},
				{"chara": "bm","exp": null, "serif": _("あぶぶぶ")},
				{"chara": "koishi","exp": "look_front", "serif": _("！"), "option": {"playEvent": "chapter6-13-event-01"}},
			],
			x:858.50*2/3, y:592*2/3,
			scale: 2/3,
			height: 200,
			action_name: "touch",
			sound_name: null
		},

		{
			no: ++I,
			image: "chapter1-02-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "バス停",
			serif: null,
			x:1188.50*2/3, y:419.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "花壇",
			serif: null,
			x:719.50*2/3, y:997.50*2/3,
			scale: 2/3,
			anime1: "chapter1-02-obj-04-obj01",
			//anime2: "chapter1-02-obj-04-obj02",
			//anime3: "chapter1-02-obj-04-obj03",
			anime2: null,
			anime3: null,
			anime4: "chapter1-02-obj-04-obj04",
			anime5: "chapter1-02-obj-04-obj05",
			anime6: "chapter1-02-obj-04-obj05",
			width: 1066, height: 100,
			action_name: null,
			sound_name: null,
		},
	],
};

