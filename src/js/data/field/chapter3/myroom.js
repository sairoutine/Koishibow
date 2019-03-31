'use strict';
var _ = require('i18n4v')
// こいしの自室
// chapter0(帽子あり・なし), chapter3, chapter5, chapter6(帽子あり・なし) にも自室が存在するので
// 当たり判定修正時はそちらも修正する
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_01",
	chapter: 3,
	bgm: "field5",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter3_02",
	leftField: null,
	upField: null,
	downField: null,
	background: "chapter0-myroom-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_08_30010"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				// こいし起床イベント
				{"type": "process", "value": "changeScene", "arguments": ["event_for_chapter3_getup_koishi"]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3_08_30010"]}
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
				{"chara": "koishi","serif": _("まだあったかい！")},
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
				{"chara": "koishi", serif1: _("まだしまっとこっと"), serif2: _("まだしまっとこっと"), serif3: _("まだしまっとこっと"), serif4: _("まだしまっとこっと")},
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
				{"chara": "koishi","serif": _("にっきさんひさしぶり！")},
				{"chara": "koishi","serif": _("またね！")},
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
				{"chara": "koishi", serif1: _("ピンク色が欲しいな"), serif2: _("今度の贈り物は色鉛筆がいい"), serif3: _("今度の贈り物は色鉛筆がいい"), serif4: _("今度の贈り物は色鉛筆がいい")},
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
			image: "chapter3-myroom-obj-05-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "まど",
			serif: [
				{"chara": "koishi", serif1: _("真っ白だわ！"), serif2: _("真っ白だわ！"), serif3: _("真っ白だわ！"), serif4: _("真っ白だわ！")},
			],
			x: 5, y: 180,
			scale: 0.7,
			action_name: "look_top",
			sound_name: null,
			height: 700,
			target_x: 177, target_y: 531
		},

		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "部屋の隅",
			serif: [
				{"chara": "koishi", serif1: _("ジョン、出てこないの？"), serif2: _("ジョンがいない"), serif3: _("ジョンがいない"), serif4: _("ジョンがいない")},
				{"chara": "koishi", serif1: _("寒いもんね"), serif2: _("日向に行ったのかな"), serif3: _("日向に行ったのかな"), serif4: _("日向に行ったのかな")},
				{"chara": "koishi","serif": _("またあとでね")},
			],
			width: 150, height: 200,
			x: 670, y: 300,
			scale: 2/3,
			target_x: 532, target_y: 418
		},
	],
};

