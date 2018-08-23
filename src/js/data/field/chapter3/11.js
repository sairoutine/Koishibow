'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_11",
	chapter: 3,
	bgm: "field7",
	rightStartPosition: {x: 680, y: 380},
	leftStartPosition:  {x: 200, y: 450},
	rightField: "chapter3_12",
	leftField: "chapter3_10",
	background: "chapter3-11-bg-001",
	walkSound: "walking_bare_snow",
	initialProcess: [
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
				{"chara": I,"serif":_("あらお嬢様のご友人様かしら")},
				{"chara": "koishi","serif":_("友達？")},
				{"chara": I,"serif":_("思い過ごしかしら？")},
				{"chara": I,"serif":_("彼女と貴方はとても似ているわ")},
				{"chara": I,"serif":_("きっと彼女と貴方で”いい仕事”ができるわよ")},
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
				{"chara": I,"serif":_("また悪ガキね")},
				{"chara": I,"serif":_("私の仕事場を荒らさないで頂戴")},
				{"chara": "koishi","serif":_("仕事場？")},
				{"chara": I,"serif":_("子どもは外で遊ぶものよ")},
				{"chara": I,"serif":_("出て行ってちょうだい！")},
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
				{"chara": I,"serif":_("おやおや")},
				{"chara": I,"serif":_("可愛らしいお客様ですね")},
				{"chara": I,"serif":_("何の御用ですか？")},
				{"chara": "koishi","serif":_("ええーっと")},
				{"chara": "koishi","serif":_("なんだろう")},
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
				{"chara": "koishi","serif":_("この木もはだかんぼ！")},
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
				{"chara": "koishi","serif":_("わあーっ"), "option": {"resetFlag": "chapter3-11-show_skull_collision"}},
				{"chara": "koishi","serif":_("なんてきれいなの"), "option": {"getItem": "16"}}, // サファイアの宝飾品
			],
			width: 240, height: 80,
			action_name: "look_bottom",
			x: 650, y: 600,
			position_type: "lying",
			show_if_event_true: "chapter3-11-show_skull_collision",
		},
	],
};

