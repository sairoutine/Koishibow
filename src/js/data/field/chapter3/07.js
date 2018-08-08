'use strict';

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_07",
	chapter: 3,
	bgm: "field7",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 200, y: 450},
	rightField: "chapter3_08",
	leftField: null,
	background: "chapter3-07-bg-001",
	walkSound: "walking_bare_snow",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_07_30040"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi","serif":"わあー"},
						{"chara": "koishi","serif":"真っ白ね"},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3_07_30040"]}
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
			anime1: "chapter3-07-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-07-obj-01-obj02",
			anime5: "chapter3-07-obj-01-obj03",
			anime6: "chapter3-07-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter3-07-obj-04",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "左側の建物",
			serif: null,
			x: 282*2/3, y: 447*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},


		{
			no: ++I,
			image: "chapter3-07-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "墓標1「John」",
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_07-getItem-15"], "serifs": [
					// アイテム獲得済み
					[
						{"chara": "koishi","serif":"まだ生きてるのに変なの"},
					],
					// アイテム未獲得
					[
						{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["13"], "serifs": [
							// しゃべる持ってる
							[
								{"id": "chapter3_07-getItem-15", "save": true},
								{"chara": "koishi","serif":"あった！", "option": {"getItem": "15"}},
								{"chara": "koishi","serif":"シャベル持ってきてよかった"},
							],
							// しゃべる持ってない
							[
								{"chara": "koishi","serif":"まだ生きてるのに変なの"},
							],
						]},
					],
				]},
			],
			x:371*2/3, y:674*2/3,
			scale: 2/3,
			action_name: "touch",
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "墓標2「U.N.Owen」",
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_07-getItem-14"], "serifs": [
					// アイテム獲得済み
					[
						{"chara": "koishi","serif":"誰？"},
					],
					// アイテム未獲得
					[
						{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["13"], "serifs": [
							// しゃべる持ってる
							[
								{"id": "chapter3_07-getItem-14", "save": true},
								{"chara": "koishi","serif":"あった！", "option": {"getItem": "14"}},
								{"chara": "koishi","serif":"思ったより重たい"},
							],
							// しゃべる持ってない
							[
								{"chara": "koishi","serif":"誰？"},
							],
						]},
					],
				]},

			],
			x: 692.50*2/3, y: 570.50*2/3,
			scale: 2/3,
			anime1: "chapter3-07-obj-03-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-07-obj-03-obj02",
			anime5: "chapter3-07-obj-03-obj03",
			anime6: "chapter3-07-obj-03-obj04",

			action_name: "touch",
			sound_name: null,
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "猫の霊",
			serif: null,
			serif_back: [
				{"chara": "koishi","serif":"わーっ、ジョン！"},
			],
			x: 579.50*2/3, y: 695.50*2/3,
			scale: 2/3,
			anime1: "chapter3-07-obj-05-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-07-obj-05-obj02",
			anime5: "chapter3-07-obj-05-obj03",
			anime6: "chapter3-07-obj-05-obj04",

			action_name: "touch",
			sound_name: null,
			sound_back: "chapter3-08-crows_cat",
			position_type: "lying",
		},

	],
};

