'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_09",
	chapter: 3,
	bgm: null,
	rightStartPosition:   {x: 790, y: 450},
	leftStartPosition:    {x: 200, y: 450},
	defaultStartPosition: {x: 200, y: 450, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter3_10",
	leftField: "chapter3_08",
	upField: null,
	downField: null,
	background: "chapter3-09-bg-001",
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




		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_08_firstaccess"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3-08-show_remillia_skull"]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3-08-show_axe"]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3_08_firstaccess"]},
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
				{"chara": "koishi", serif1: _("大きいなあ"), serif2: _("立派！"), serif3: _("立派！"), serif4: _("立派！")},
				{"chara": "koishi", serif1: _("誰のお墓なんだろう？"), serif2: _("誰のお墓かしら"), serif3: _("誰のお墓かしら"), serif4: _("誰のお墓かしら")},
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
						// イベント 30340 (爆破イベント)へ
						{"id": "chapter3-08-show_remillia_skull_already", "save": true},
						{"chara": "koishi", "serif": "", "option": {"resetFlag": "chapter3-08-show_remillia_skull"}},
						{"chara": "koishi", "serif": "", "option": {"playEvent": "chapter3-09-event-01"}},
					],
					[
						{"chara": "koishi", serif1: _("うわー"), serif2: _("うわー"), serif3: _("うわー"), serif4: _("うわー")},
						{"chara": "koishi", serif1: _("なんかへんなの"), serif2: _("誰だろう？"), serif3: _("誰だろう？"), serif4: _("誰だろう？")},
						{"chara": "koishi", serif1: _("わるもの？"), serif2: _("なんでしんだの？"), serif3: _("なんでしんだの？"), serif4: _("なんでしんだの？")},
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
			position_type: "lying",
			show_if_event_true: "chapter3-08-show_remillia_skull",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "レミリアの死骸(常に表示されている)",
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_09_getruby"], "serifs": [
					// ルビー獲得後
					[
						{"chara": "koishi", serif1: _("やっぱりちょっと気持ち悪い"), serif2: _("あんまり触りたくない"), serif3: _("あんまり触りたくない"), serif4: _("あんまり触りたくない")},
					],
					// ルビー獲得前
					[
						{"id": "chapter3_09_getruby", "save": true},
						// ルビー獲得
						{"chara": "koishi", serif1: _("やっぱりここにあった！"), serif2: _("やっぱりここにあった！"), serif3: _("やっぱりここにあった！"), serif4: _("やっぱりここにあった！"), "option": {"getItem": "17"}},
						{"chara": "koishi", serif1: _("ありがとう！"), serif2: _("ありがとう！"), serif3: _("ありがとう！"), serif4: _("ありがとう！")},
					],
				]},
			],
			serif_back: null,
			x:865*2/3, y:742.50*2/3,
			scale: 2/3,
			anime1: "chapter3-09-obj-03-obj03",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			width: 240,

			action_name: null,
			sound_name: null,
			position_type: "lying",
			show_if_event_true: "chapter3-08-show_remillia_skull_already",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "胸像",
			serif: [
				{"chara": "koishi", serif1: _("まっしろだわ！"), serif2: _("まっしろだわ！"), serif3: _("まっしろだわ！"), serif4: _("まっしろだわ！")},
				{"chara": "koishi", serif1: _("これスノーマンかしら"), serif2: _("これスノーマンかしら"), serif3: _("これスノーマンかしら"), serif4: _("これスノーマンかしら")},
			],
			serif_back: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_13-Event-_30370"], "serifs": [
					// 丘の上での喧嘩イベント後
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_09-Event-_30360"], "serifs": [
							// 爆破イベント後
							[
								{"chara": I, serif1: _("責任についてどう思っているんだ"), serif2: _("責任についてどう思っているんだ"), serif3: _("責任についてどう思っているんだ"), serif4: _("責任についてどう思っているんだ")},
								{"chara": "koishi", serif1: _("なにが"), serif2: _("なんのこと"), serif3: _("なんのこと"), serif4: _("なんのこと")},
								{"chara": I, serif1: _("約束や責任を何だと思っているんだ！"), serif2: _("約束や責任を何だと思っているんだ！"), serif3: _("約束や責任を何だと思っているんだ！"), serif4: _("約束や責任を何だと思っているんだ！")},
								{"chara": "koishi", serif1: _("しらなーい"), serif2: _("どうでもいいわ"), serif3: _("どうでもいいわ"), serif4: _("どうでもいいわ")},
							],
							// 爆破イベント前
							[
								// 爆破イベント 30360 へ
								{"id": "chapter3-09-show_axe_hole", "save": true},
								{"id": "chapter3_09-Event-_30360", "save": true},
								{"id": "chapter3_13_SnowMan", "save": true},
								{"chara": "koishi", "serif": "", "option": {"playEvent": "chapter3-09-event-01"}},
							],
						]},
					],
					[
						{"chara": I, serif1: _("責任についてどう思っているんだ"), serif2: _("責任についてどう思っているんだ"), serif3: _("責任についてどう思っているんだ"), serif4: _("責任についてどう思っているんだ")},
						{"chara": "koishi", serif1: _("なにが"), serif2: _("なんのこと"), serif3: _("なんのこと"), serif4: _("なんのこと")},
						{"chara": I, serif1: _("約束や責任を何だと思っているんだ！"), serif2: _("約束や責任を何だと思っているんだ！"), serif3: _("約束や責任を何だと思っているんだ！"), serif4: _("約束や責任を何だと思っているんだ！")},
						{"chara": "koishi", serif1: _("しらなーい"), serif2: _("どうでもいいわ"), serif3: _("どうでもいいわ"), serif4: _("どうでもいいわ")},
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
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "胸像の側に埋まっている斧",
			serif: null,
			x:359.50*2/3, y:762.*2/3,
			scale: 2/3,
			sound_name: null,

			anime1: "chapter3-09-obj-05-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-09-obj-05-obj02",
			anime5: "chapter3-09-obj-05-obj03",
			anime6: "chapter3-09-obj-05-obj04",
			position_type: "lying",
			show_if_event_true: "chapter3-08-show_axe",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "胸像の側に埋まっている斧(常に表示されている)",
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_09_getaxe"], "serifs": [
					// 斧獲得後
					[
					],
					// 斧獲得前
					[
						// 斧と穴→穴に変更
						{"id": "chapter3-09-show_hole", "save": true},
						{"chara": "koishi", "serif": "", "option": {"resetFlag": "chapter3-09-show_axe_hole"}},
						// 斧獲得
						{"chara": "koishi","serif":"", "option": {"getItem": "18"}},
					],
				]},

			],
			x:359.50*2/3, y:762.*2/3,
			scale: 2/3,
			sound_name: null,

			anime1: "chapter3-09-obj-05-obj03",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			position_type: "lying",
			show_if_event_true: "chapter3-09-show_axe_hole",
		},
		{
			no: ++I,
			image: "chapter3-09-obj-06",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "胸像の側の穴(常に表示されている)",
			serif: null,
			x:359.50*2/3, y:777*2/3,
			scale: 2/3,
			sound_name: null,
			show_if_event_true: "chapter3-09-show_hole",
		},
		{
			no: ++I,
			type: CONSTANT.JOURNAL_FRONT_TYPE,
			x: 820, y: 450,
			journal_id: "journal016",
		},
	],
};

