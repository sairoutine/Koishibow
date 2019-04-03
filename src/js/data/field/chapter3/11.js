'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_11",
	chapter: 3,
	bgm: null,
	rightStartPosition:   {x: 680, y: 380},
	leftStartPosition:    {x: 200, y: 450},
	defaultStartPosition: {x: 200, y: 450, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter3_12",
	leftField: "chapter3_10",
	upField: null,
	downField: null,
	background: "chapter3-11-bg-001",
	walkSound: "walking_bare_snow",
	initialProcess: [
		// BGM 再生
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_12-play_fran_bgm"], "process": [
			[
				// フランBGM
				{"type": "process", "value": "playBGM", "arguments": ["field8"]},
			],
			[
				// 通常BGM
				{"type": "process", "value": "playBGM", "arguments": ["field7"]},
			],
		]},

		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3-11-show_skred"], "process": [
			// 雪崩表示済み
			[
			],
			// 雪崩表示前
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_12-Event-_30260"], "process": [
					// bad root
					[
						{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3-11-show_skred"]},
						{"type": "process", "value": "changeScene", "arguments": ["event_talk_old", "chapter3-11-event-01"]},
					],
					// good root or まだbad でも good でもない
					[],
				]}
			],
		]}
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter3-11-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-11-obj-01-obj02",
			anime5: "chapter3-11-obj-01-obj03",
			anime6: "chapter3-11-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "雪だるま1咲夜風",
			serif: [
				{"chara": I, serif1: _("あらお嬢様のご友人様かしら"), serif2: _("あらお嬢様のご友人様かしら"), serif3: _("あらお嬢様のご友人様かしら"), serif4: _("あらお嬢様のご友人様かしら")},
				{"chara": "koishi","serif": _("友達？")},
				{"chara": I, serif1: _("思い過ごしかしら？"), serif2: _("思い過ごしかしら？"), serif3: _("思い過ごしかしら？"), serif4: _("思い過ごしかしら？")},
				{"chara": I, serif1: _("彼女と貴方はとても似ているわ"), serif2: _("彼女と貴方はとても似ているわ"), serif3: _("彼女と貴方はとても似ているわ"), serif4: _("彼女と貴方はとても似ているわ")},
				{"chara": I, serif1: _("きっと彼女と貴方で”いい仕事”ができるわよ"), serif2: _("きっと彼女と貴方で”いい仕事”ができるわよ"), serif3: _("きっと彼女と貴方で”いい仕事”ができるわよ"), serif4: _("きっと彼女と貴方で”いい仕事”ができるわよ")},
			],
			x: 297.50*2/3, y: 716*2/3,
			scale: 2/3,
			anime1: "chapter3-11-obj-02-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-11-obj-02-obj02",
			anime5: "chapter3-11-obj-02-obj03",
			anime6: "chapter3-11-obj-02-obj04",

			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "雪だるま2パチュリー風",
			serif: [
				{"chara": I, serif1: _("また悪ガキね"), serif2: _("また悪ガキね"), serif3: _("また悪ガキね"), serif4: _("また悪ガキね")},
				{"chara": I, serif1: _("私の仕事場を荒らさないで頂戴"), serif2: _("私の仕事場を荒らさないで頂戴"), serif3: _("私の仕事場を荒らさないで頂戴"), serif4: _("私の仕事場を荒らさないで頂戴")},
				{"chara": "koishi", serif1: _("仕事場？"), serif2: _("仕事場？"), serif3: _("仕事場？"), serif4: _("仕事場？")},
				{"chara": I, serif1: _("子どもは外で遊ぶものよ"), serif2: _("子どもは外で遊ぶものよ"), serif3: _("子どもは外で遊ぶものよ"), serif4: _("子どもは外で遊ぶものよ")},
				{"chara": I, serif1: _("出て行ってちょうだい！"), serif2: _("出て行ってちょうだい！"), serif3: _("出て行ってちょうだい！"), serif4: _("出て行ってちょうだい！")},
			],
			x: 1202.50*2/3, y: 717.50*2/3,
			scale: 2/3,
			anime1: "chapter3-11-obj-03-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-11-obj-03-obj02",
			anime5: "chapter3-11-obj-03-obj03",
			anime6: "chapter3-11-obj-03-obj04",

			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "雪だるま3美鈴風",
			serif: [
				{"chara": I, serif1: _("おやおや"), serif2: _("おやおや"), serif3: _("おやおや"), serif4: _("おやおや")},
				{"chara": I, serif1: _("可愛らしいお客様ですね"), serif2: _("可愛らしいお客様ですね"), serif3: _("可愛らしいお客様ですね"), serif4: _("可愛らしいお客様ですね")},
				{"chara": I, serif1: _("何の御用ですか？"), serif2: _("何の御用ですか？"), serif3: _("何の御用ですか？"), serif4: _("何の御用ですか？")},
				{"chara": "koishi", serif1: _("ええーっと"), serif2: _("ええーっと"), serif3: _("ええーっと"), serif4: _("ええーっと")},
				{"chara": "koishi", serif1: _("なんだろう"), serif2: _("なんだろう"), serif3: _("なんだろう"), serif4: _("なんだろう")},
			],
			x: 1002.50*2/3 , y: 662.50*2/3,
			scale: 2/3,
			anime1: "chapter3-11-obj-04-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-11-obj-04-obj02",
			anime5: "chapter3-11-obj-04-obj03",
			anime6: "chapter3-11-obj-04-obj04",

			action_name: null,
			sound_name: null,
		},
		{
			no: ++I,
			image: "chapter3-11-obj-06",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "雪崩",
			serif: null,
			width: 400, height: 1000,
			x: 1088.50*2/3, y: 797.50*2/3,
			show_if_event_true: "chapter3-11-show_skred",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "木+白骨体",
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_11-getItem-16"], "serifs": [
					// サファイアの宝飾品 獲得済み
					[
					],
					// 未獲得
					[
						// 骸骨の頭に当たり判定をつける
						{"id": "chapter3-11-show_skull_collision", "save": true},
					],
				]},
				{"chara": "koishi", serif1: _("この木もはだかんぼ！"), serif2: _("この木も恥ずかしそう"), serif3: _("この木も恥ずかしそう"), serif4: _("この木も恥ずかしそう")},
			],
			x: 731*2/3, y: 403.50*2/3,
			width: 150,
			height: 530,
			scale: 2/3,
			anime1: "chapter3-11-obj-05-obj01",
			anime2: "chapter3-11-obj-05-obj02",
			anime3: "chapter3-11-obj-05-obj03",
			anime4: null,
			anime5: null,
			anime6: null,

			action_name: "touch",
			sound_name: "chapter3-11-drop_skull",
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "白骨体",
			serif: [
				{"id": "chapter3_11-getItem-16", "save": true},
				{"chara": "koishi", serif1: _("わあーっ"), serif2: _("まあ！"), serif3: _("まあ！"), serif4: _("まあ！"), "option": {"resetFlag": "chapter3-11-show_skull_collision"}},
				{"chara": "koishi", serif1: _("なんてきれいなの"), serif2: _("奇麗だわ"), serif3: _("奇麗だわ"), serif4: _("奇麗だわ"), "option": {"getItem": "16"}}, // サファイアの宝飾品
			],
			width: 240, height: 80,
			action_name: "look_bottom",
			x: 650, y: 600,
			position_type: "lying",
			show_if_event_true: "chapter3-11-show_skull_collision",
		},
	],
};

