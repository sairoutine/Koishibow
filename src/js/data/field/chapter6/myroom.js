'use strict';
var _ = require('i18n4v')
// こいしの自室
// chapter0(帽子あり・なし), chapter3, chapter5, chapter6(帽子あり・なし) にも自室が存在するので
// 当たり判定修正時はそちらも修正する
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter6_01",
	chapter: 6,
	bgm: "silent",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter6_02",
	leftField: null,
	upField: null,
	downField: null,
	background: "chapter0-myroom-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter6-01-show_bm"], "process": [
			// BM登場済み
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "bm","exp": "chapter6-01-obj-01-obj03", "serif": _("ギャーッ")},
						{"id": "chapter6-01-seen_bm", "save": true},
						{"chara": "koishi","exp": "look_bottom", "serif": _("ア゛ー"), "option": {"changeField": "chapter6_02"}},
					]
				]},
			],
			// まだ未登場
			[
			],
		]},
	],
	objects: [
		{
			no: ++I,
			image: "chapter0-myroom-obj-01-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ベッド",
			serif: [
				{"chara": "koishi","serif":_("まだあったかい！")},
			],
			x: 258, y: 389,
			scale: 0.7,
			action_name: "touch",
			sound_name: "touch"
		},
		{
			no: ++I,
			image: "chapter0-myroom-obj-05-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "キャビネット",
			serif: [
				{"chara": "koishi","serif":_("まだしまっとこっと")},
			],
			x: 59, y: 496,
			scale: 0.7,
			action_name: "touch",
			sound_name: "touch",
			target_x: 167, target_y: 531
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "本",
			serif: [
				{"chara": "koishi","serif":_("にっきさんひさしぶり！")},
				{"chara": "koishi","serif":_("またね！")},
			],
			x: 340, y: 530,
			scale: 0.7,
			anime1: "chapter0-myroom-obj-02-01-obj01",
			anime2: "chapter0-myroom-obj-02-01-obj02",
			anime3: "chapter0-myroom-obj-02-01-obj03",
			width: 80, height: 80,
			action_name: "look_bottom",
			sound_name: "chapter0-myroom-open_book",
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "クレヨン",
			serif: [
				{"chara": "koishi","serif":_("ピンク色が欲しいな")},
			],
			x: 600, y: 530,
			scale: 0.7,
			anime1: "chapter0-myroom-obj-03-01-obj01",
			anime2: "chapter0-myroom-obj-03-01-obj02",
			anime3: "chapter0-myroom-obj-03-01-obj03",
			width: 80, height: 80,
			action_name: "look_bottom",
			sound_name: "chapter0-myroom-move_crayon",
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "まど",
			serif: [
				{"chara": "koishi","serif":_("また来てる！")},
				{"chara": "koishi","serif":_("誰？")},
			],
			x: 5, y: 180,
			scale: 0.7,
			anime1: "chapter6-01-obj-01",
			anime2: "chapter6-01-obj-02",
			anime3: "chapter6-01-obj-02",
			action_name: "look_top",
			sound_name: "chapter0-myroom-sound_window_for_kokoro",
			height: 700,
			target_x: 177, target_y: 531,
			not_show_if_event_true: "chapter6-01-show_bm",
		},
		{
			no: "bm",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "BM",
			serif: [
				{"chara": "koishi","serif":_("また来てる！")},
				{"chara": "koishi","serif":_("誰？")},
			],
			x: 5, y: 180,
			scale: 0.7,
			anime1: "chapter6-03-obj-01",
			anime2: null,
			anime3: null,
			action_name: "look_top",
			sound_name: "chapter0-myroom-sound_window_for_kokoro",
			height: 700,
			target_x: 177, target_y: 531,
			show_if_event_true: "chapter6-01-show_bm",
		},

		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "部屋の隅",
			serif: [
				{"chara": "koishi","serif":_("ジョン、出てこないの？")},
				{"chara": "koishi","serif":_("寒いもんね")},
				{"chara": "koishi","serif":_("またあとでね")},
			],
			width: 150, height: 200,
			x: 670, y: 300,
			scale: 2/3,
			target_x: 532, target_y: 418
		},
	],
};

