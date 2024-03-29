'use strict';
var _ = require('i18n4v')
// バス停
// chapter1, chapter6 にもバス停が存在するので
// 当たり判定修正時はそちらも修正する
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_02",
	chapter: 1,
	bgm: "field3",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter1_03",
	leftField: "chapter1_01",
	upField: null,
	downField: null,
	background: "chapter1-02-bg-001",
	walkSound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter1-02-obj-06-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-02-obj-06-obj02",
			anime5: "chapter1-02-obj-06-obj03",
			anime6: "chapter1-02-obj-06-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter1-02-obj-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ベンチ",
			serif: [
				{"chara": "koishi", "serif": "", "option": {"getJournal": "journal006"}},
				{"chara": "koishi", "serif": "", "option": {"changeScene": "event_for_chapter1_sit_at_busstop"}},
			],
			x: 693.50*2/3, y:619.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null
		},

		{
			no: ++I,
			image: "chapter1-02-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "チョコレート箱",
			serif: [
				{"chara": "koishi", serif1: _("からっぽ！"), serif2: _("からっぽ！"), serif3: _("からっぽ！"), serif4: _("からっぽ！")},
			],
			x:858.50*2/3, y:592*2/3,
			scale: 2/3,
			action_name: "touch",
			sound_name: null
		},

		{
			no: ++I,
			type: CONSTANT.ITEM_TYPE,
			name: "目薬",
			image: "eyedrops",
			x: 320,
			y: 410,
			height: 330,
			scale: 2/3,
			item_id: "01",
			position_type: "lying",
		},

		{
			no: ++I,
			image: "chapter1-02-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "バス停",
			serif: [
				{"chara": "koishi", serif1: _("わかんない"), serif2: _("わかんない"), serif3: _("わかんない"), serif4: _("わかんない"),	"option": {"getJournal": "journal011"}},
			],
			x:1188.50*2/3, y:419.50*2/3,
			scale: 2/3,
			action_name: "look_top",
			sound_name: null
		},
		{
			no: ++I,
			type: CONSTANT.ITEM_TYPE,
			name: "じょうろ",
			image: "chapter1-02-obj-05",
			x:831.50*2/3, y:921.50*2/3,
			scale: 2/3,
			item_id: "03",
			position_type: "lying"
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "花壇",
			serif: null,
			x:719.50*2/3, y:997.50*2/3,
			scale: 2/3,
			anime1: "chapter1-02-obj-04-obj01",
			//anime2: "chapter1-02-obj-04-obj02",
			//anime3: "chapter1-02-obj-04-obj03",
			anime2: null,
			anime3: null,
			anime4: "chapter1-02-obj-04-obj04",
			anime5: "chapter1-02-obj-04-obj05",
			anime6: "chapter1-02-obj-04-obj05",
			width: 1066, height: 100,
			action_name: null,
			sound_name: null,
		},


	],
};

