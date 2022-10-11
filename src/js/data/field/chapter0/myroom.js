'use strict';
var _ = require('i18n4v')
// こいしの自室
// chapter0(帽子あり・なし), chapter2, chapter3, chapter5, chapter6(帽子あり・なし) にも自室が存在するので
// 当たり判定修正時はそちらも修正する
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter0_myroom",
	chapter: 0,
	bgm: "field1",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter0_hospital_corridor1",
	leftField: null,
	upField: null,
	downField: null,
	background: "chapter0-myroom-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [],
	objects: [
		{
			no: ++I,
			image: "chapter0-myroom-obj-01-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ベッド",
			serif: [
				{"chara": "koishi", serif1: _("まだねむたくないもん"), serif2: _("まだねむたくないもん"), serif3: _("まだねむたくないもん"), serif4: _("まだねむたくないもん")},
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
				{"chara": "koishi", serif1: _("あけない"), serif2: _("あけない"), serif3: _("あけない"), serif4: _("あけない")},
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
				{"chara": "koishi", serif1: _("くれおん！"), serif2: _("くれおん！"), serif3: _("くれおん！"), serif4: _("くれおん！")},
				{"chara": "koishi","serif": _("ピンクなくなっちゃったなー")},
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
				{"chara": "koishi", serif1: _("なにかいる！"), serif2: _("なにかいる！"), serif3: _("なにかいる！"), serif4: _("なにかいる！")},
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
				{"chara": "koishi", serif1: _("ここジョンのばしょ！"), serif2: _("ここジョンのばしょ！"), serif3: _("ここジョンのばしょ！"), serif4: _("ここジョンのばしょ！")},
				{"chara": "koishi", serif1: _("いいこいいこ！"), serif2: _("いいこいいこ！"), serif3: _("いいこいいこ！"), serif4: _("いいこいいこ！")},
				{"chara": "koishi", serif1: _("ばいばい"), serif2: _("ばいばい"), serif3: _("ばいばい"), serif4: _("ばいばい")},
			],
			width: 150, height: 200,
			x: 670, y: 300,
			scale: 2/3,
			target_x: 532, target_y: 418
		},
		{
			no: ++I,
			type: CONSTANT.JOURNAL_FRONT_TYPE,
			x: 258, y: 689,
			journal_id: "journal001",
		},
	],
};

