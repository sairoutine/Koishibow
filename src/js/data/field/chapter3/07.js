'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_07",
	chapter: 3,
	bgm: null,
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 200, y: 450},
	defaultStartPosition: {x: 200, y: 450, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter3_08",
	leftField: null,
	upField: null,
	downField: null,
	background: "chapter3-07-bg-001",
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

		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_07_30040"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", serif1: _("わあー"), serif2: _("わあー"), serif3: _("わあー"), serif4: _("わあー")},
						{"chara": "koishi", serif1: _("真っ白ね"), serif2: _("すごい雪"), serif3: _("すごい雪"), serif4: _("すごい雪")},
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
						{"chara": "koishi", serif1: _("まだ生きてるのに変なの"), serif2: _("誰のお墓かしら"), serif3: _("誰のお墓かしら"), serif4: _("誰のお墓かしら")},
					],
					// アイテム未獲得
					[
						{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["13"], "serifs": [
							// しゃべる持ってる
							[
								{"id": "chapter3_07-getItem-15", "save": true},
								{"chara": "koishi","serif": _("あった！"), "option": {"getItem": "15"}},
								{"chara": "koishi", serif1: _("シャベル持ってきてよかった"), serif2: _("シャベルもらってよかった"), serif3: _("シャベルもらってよかった"), serif4: _("シャベルもらってよかった")},
							],
							// しゃべる持ってない
							[
								{"chara": "koishi", serif1: _("まだ生きてるのに変なの"), serif2: _("誰のお墓かしら"), serif3: _("誰のお墓かしら"), serif4: _("誰のお墓かしら")},
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
						{"chara": "koishi","serif": _("誰？")},
					],
					// アイテム未獲得
					[
						{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["13"], "serifs": [
							// しゃべる持ってる
							[
								{"id": "chapter3_07-getItem-14", "save": true},
								{"chara": "koishi","serif": _("あった！"), "option": {"getItem": "14"}},
								{"chara": "koishi", serif1: _("思ったより重たい"), serif2: _("思ったより重たい"), serif3: _("思ったより重たい"), serif4: _("思ったより重たい")},
							],
							// しゃべる持ってない
							[
								{"chara": "koishi","serif": _("誰？")},
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
				{"chara": "koishi", serif1: _("わーっ、ジョン！"), serif2: _("いままでどこにいたのかしら！"), serif3: _("いままでどこにいたのかしら！"), serif4: _("いままでどこにいたのかしら！")},
			],
			x: 579.50*2/3, y: 695.50*2/3,
			scale: 2/3,
			anime1: "chapter3-07-obj-05-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-07-obj-05-obj02",
			anime5: "chapter3-07-obj-05-obj03",
			anime6: "chapter3-07-obj-05-obj04",

			//action_name: "touch",
			sound_name: null,
			sound_back: "chapter3-08-crows_cat",
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ITEM_TYPE,
			name: "目薬",
			image: "eyedrops",
			x: 120,
			y: 580,
			//height: 330,
			scale: 2/3,
			item_id: "01",
			position_type: "lying",
		},

	],
};

