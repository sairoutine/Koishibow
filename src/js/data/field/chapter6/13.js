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
						{"chara": "koishi", "exp": "look_top",  serif1: _("目が回ってきた"), serif2: _("目が回ってきた"), serif3: _("目が回ってきた"), serif4: _("目が回ってきた")},
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
				{"chara": "chocolate_box","exp": null,  serif1: _("やあ"), serif2: _("やあ"), serif3: _("やあ"), serif4: _("やあ")},
				{"chara": "koishi","exp": "look_front", "serif": _("なに")},
				{"chara": "chocolate_box","exp": null,  serif1: _("ここまで旅してきてどうだった？"), serif2: _("ここまで旅してきてどうだった？"), serif3: _("ここまで旅してきてどうだった？"), serif4: _("ここまで旅してきてどうだった？")},
				{"chara": "koishi","exp": "look_front",  serif1: _("どういうこと？"), serif2: _("どういうこと？"), serif3: _("どういうこと？"), serif4: _("どういうこと？")},
				{"chara": "chocolate_box","exp": null,  serif1: _("人生はチョコレートの箱"), serif2: _("人生はチョコレートの箱"), serif3: _("人生はチョコレートの箱"), serif4: _("人生はチョコレートの箱")},
				{"chara": "chocolate_box","exp": null,  serif1: _("どんな素敵なものが詰まっているか――"), serif2: _("どんな素敵なものが詰まっているか――"), serif3: _("どんな素敵なものが詰まっているか――"), serif4: _("どんな素敵なものが詰まっているか――")},
				{"chara": "chocolate_box","exp": null,  serif1: _("開けなければわからない"), serif2: _("開けなければわからない"), serif3: _("開けなければわからない"), serif4: _("開けなければわからない")},
				{"chara": "koishi","exp": "look_top",  serif1: _("ぜんぜんわかんないんだけど"), serif2: _("ぜんぜんわかんないんだけど"), serif3: _("ぜんぜんわかんないんだけど"), serif4: _("......そうかしら")},
				{"chara": "chocolate_box","exp": null,  serif1: _("君は早く”目を開けて”中身を見ないとね"), serif2: _("君は早く”目を開けて”中身を見ないとね"), serif3: _("君は早く”目を開けて”中身を見ないとね"), serif4: _("君は早く”目を開けて”中身を見ないとね")},
				{"chara": "chocolate_box","exp": null,  serif1: _("僕を開けて！"), serif2: _("僕を開けて！"), serif3: _("僕を開けて！"), serif4: _("僕を開けて！")},
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
				{"chara": "koishi","exp": "touch",  serif1: _("はさみ！"), serif2: _("はさみ！"), serif3: _("はさみ！"), serif4: _("はさみ！"), "option": {"getItem": "36"}},
				{"chara": "koishi","exp": "yes",  serif1: _("いい武器！"), serif2: _("いい武器！"), serif3: _("いい武器！"), serif4: _("はさみでなにをしたらいいのかしら")},
				{"chara": "koishi","exp": null,  serif1: _("チョコレートさんありがとう！"), serif2: _("チョコレートさんありがとう！"), serif3: _("チョコレートさんありがとう！"), serif4: _("......")},
				{"chara": "koishi","exp": "look_top",  serif1: _("へへへ"), serif2: _("へへへ"), serif3: _("へへへ"), serif4: _("自分で考えなきゃダメ？")},
				{"chara": "bm","exp": null,  serif1: _("あぶぶぶ"), serif2: _("あぶぶぶ"), serif3: _("あぶぶぶ"), serif4: _("あぶぶぶ")},
				{"chara": "koishi","exp": "look_front",  serif1: _("！"), serif2: _("！"), serif3: _("！"), serif4: _("！"), "option": {"playEvent": "chapter6-13-event-01"}},
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

