'use strict';
var _ = require('i18n4v')
// 病院の廊下2
// chapter0, chapter6 それぞれに存在するので
// コレを修正する際はほかも修正する
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter6_03",
	chapter: 0,
	bgm: "field1",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter6_04",
	leftField: "chapter6_02",
	upField: null,
	downField: null,
	background: "chapter0-hospital2-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			image: "chapter0-hospital2-obj-02-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "くつした",
			serif: [
				{"chara": "koishi", serif1: _("やだやだ。"), serif2: _("やだやだ。"), serif3: _("やだやだ。"), serif4: _("やだやだ。")},
			],
			x: 302,
			y: 443,
			scale: 0.7,
			action_name: "look_bottom",
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "車イス",
			serif: [
				{"chara": "koishi", serif1: _("あしおれたらのってもいい？"), serif2: _("あしおれたらのってもいい？"), serif3: _("あしおれたらのってもいい？"), serif4: _("あしおれたらのってもいい？")},
			],
			x: 130,
			y: 360,
			scale: 0.7,
			anime1: "chapter0-hospital_corridor2-obj-01-01-obj01",
			anime2: "chapter0-hospital_corridor2-obj-01-01-obj02",
			anime3:"chapter0-hospital_corridor2-obj-01-01-obj03",
			action_name: "touch",
			sound_name: "chapter0-hospital_corridor2-move_wheelchair",
			width: 258,
			height: 280
		},
		{
			no: ++I,
			type: CONSTANT.JOURNAL_BACK_TYPE,
			x: 627, y: 689,
			journal_id: "journal036",
		},

	],

};

