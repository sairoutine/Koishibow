'use strict';

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_09",
	chapter: 3,
	bgm: "field3",
	rightStartPosition: {x: 790, y: 450},
	leftStartPosition:  {x: 200, y: 450},
	rightField: "chapter3_10",
	leftField: "chapter3_08",
	background: "chapter3-09-bg-001",
	walkSound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter3-09-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-09-obj-01-obj02",
			anime5: "chapter3-09-obj-01-obj03",
			anime6: "chapter3-09-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter3-09-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "レミリアの墓",
			serif: [
				{"chara": "koishi","serif":"大きいなあ"},
				{"chara": "koishi","serif":"誰のお墓なんだろう？"},
			],
			x:1041.50*2/3, y: 519*2/3,
			scale: 2/3,
			action_name: "look_front",
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "レミリアの死骸",
			serif: null,
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_13-Event-_30370"], "serifs": [
					// 丘の上での喧嘩イベント後
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_13-Event-_30340"], "serifs": [
							// レミリアの死骸爆破イベント後
							[
								{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_09_getruby"], "serifs": [
									// ルビー獲得後
									[
										{"chara": "koishi","serif":"やっぱりちょっと気持ち悪い"},
									],
									// ルビー獲得前
									[
										{"id": "chapter3_09_getruby", "save": true},
										{"chara": "koishi","serif":"やっぱりここにあった！", "option": {"getItem": "17"}},
										{"chara": "koishi","serif":"ありがとう！"},
									],

								]},
							],
							[
								// イベント 30340 へ
								{"id": "chapter3_13-Event-_30340", "save": true},
								{"chara": "koishi", "serif": "", "option": {"playEvent": "chapter3-09-event-01"}},
							],
						]},
					],
					[
						{"chara": "koishi","serif":"うわー"},
						{"chara": "koishi","serif":"なんかへんなの"},
						{"chara": "koishi","serif":"わるもの？"},
					],
				]},
			],
			x:865*2/3, y:742.50*2/3,
			scale: 2/3,
			anime1: "chapter3-09-obj-03-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-09-obj-03-obj02",
			anime5: "chapter3-09-obj-03-obj03",
			anime6: "chapter3-09-obj-03-obj04",
			width: 240,

			action_name: null,
			sound_name: null,
		},


		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "胸像",
			serif: [
				{"chara": "koishi","serif":"まっしろだわ！"},
				{"chara": "koishi","serif":"これスノーマンかしら"},
			],
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_13-Event-_30370"], "serifs": [
					// 丘の上での喧嘩イベント後
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_13-Event-_30360"], "serifs": [
							// 胸像爆破イベント後
							[
								{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_09_getaxe"], "serifs": [
									// 斧獲得後
									[
										{"chara": I,"serif":"責任についてどう思っているんだ"},
										{"chara": "koishi","serif":"なにが"},
										{"chara": I,"serif":"約束や責任を何だと思っているんだ！"},
										{"chara": "koishi","serif":"しらなーい"},
									],
									// 斧獲得前
									[
										{"id": "chapter3_09_getaxe", "save": true},
										{"chara": "koishi","serif":"", "option": {"getItem": "18"}},
									],
								]},
							],
							[
								// イベント 30360 へ
								{"id": "chapter3_13-Event-_30360", "save": true},
								{"chara": "koishi", "serif": "", "option": {"playEvent": "chapter3-09-event-01"}},
							],
						]},
					],
					[
						{"chara": I,"serif":"責任についてどう思っているんだ"},
						{"chara": "koishi","serif":"なにが"},
						{"chara": I,"serif":"約束や責任を何だと思っているんだ！"},
						{"chara": "koishi","serif":"しらなーい"},
					],
				]},
			],
			x:345*2/3, y:631.50*2/3,
			scale: 2/3,
			anime1: "chapter3-09-obj-04-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-09-obj-04-obj02",
			anime5: "chapter3-09-obj-04-obj03",
			anime6: "chapter3-09-obj-04-obj04",

			action_name: "touch",
			sound_name: null,
		},

		{
			no: ++I,
			image: "chapter3-09-obj-05",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "胸像の側に埋まっている斧",
			serif: [
				{"chara": "koishi","serif":""},
			],
			x:359.50*2/3, y:762.*2/3,
			scale: 2/3,
			action_name: "touch",
			sound_name: null
		},
	],
};

