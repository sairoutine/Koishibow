'use strict';
// こいしの自室(ベッド／帽子／ドア) 帽子はベッドのふちにかけてある
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter0_myroom",
	chapter: 0,
	bgm: "field1",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 180, y: 380},
	rightField: "chapter0_hospital_corridor1",
	leftField: null,
	background: "chapter0-myroom-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter0_myroom_firstaccess"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playSubEvent", "arguments": ["event_chapter0_get_hat"]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter0_myroom_firstaccess"]}
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
				{"chara": "koishi","serif":_("まだねむたくないもん")},
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
				{"chara": "koishi","serif":_("あけない")},
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
				{"chara": "koishi","serif":_("くれおん！")},
				{"chara": "koishi","serif":_("ピンクなくなっちゃったなー")},
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
				{"chara": "koishi","serif":_("なにかいる！")},
			],
			x: 5, y: 180,
			scale: 0.7,
			anime1: "chapter0-myroom-obj-04-01-obj01",
			anime2: "chapter0-myroom-obj-04-01-obj02",
			anime3: "chapter0-myroom-obj-04-01-obj03",
			action_name: "look_top",
			sound_name: "chapter0-myroom-sound_window_for_kokoro",
			height: 700,
			target_x: 177, target_y: 531
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "部屋の隅",
			serif: [
				{"chara": "koishi","serif":_("ここジョンのばしょ！")},
				{"chara": "koishi","serif":_("いいこいいこ！")},
				{"chara": "koishi","serif":_("ばいばい")},
			],
			width: 150, height: 200,
			x: 670, y: 300,
			scale: 2/3,
			target_x: 532, target_y: 418
		},
		{
			no: ++I,
			image: "paper", type: CONSTANT.JOURNAL_TYPE, x: 258, y: 689, scale: 2/3, journal_id: "journal001"},
	],
};

