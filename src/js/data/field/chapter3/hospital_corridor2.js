'use strict';
var _ = require('i18n4v')
// 病院の廊下2(こころ)
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter3_03",
	chapter: 3,
	bgm: "field5",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter3_04",
	leftField: "chapter3_02",
	upField: null,
	downField: null,
	background: "chapter0-hospital2-bg-001",
	walkSound: "walking_bare_default",
	objects: [
		{
			no: ++I,
			image: "chapter0-hospital2-obj-02-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "くつした",
			serif: [
				{"chara": "koishi", serif1: _("きらいだけどきなきゃだめ？"), serif2: _("寒いから履いたほうがいいと思う"), serif3: _("寒いから履いたほうがいいと思う"), serif4: _("寒いから履いたほうがいいと思う")},
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
				{"chara": "koishi", serif1: _("雪の中で乗ったらすごいんじゃない？"), serif2: _("雪の中で乗ったらすごいんじゃない？"), serif3: _("雪の中で乗ったらすごいんじゃない？"), serif4: _("雪の中で乗ったらすごいんじゃない？")},
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
	],

};

