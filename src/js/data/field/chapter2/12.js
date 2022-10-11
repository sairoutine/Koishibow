'use strict';
// 1-9と同様。
var CONSTANT = require("../../../constant");
var I = 0;
var _ = require('i18n4v')
module.exports = {
	key: "chapter2_12",
	chapter: 2,
	bgm: "silent",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter2_11",
	leftField: "chapter2_13",
	upField: null,
	downField: null,
	background: "chapter2-07-bg-001",
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			image: "eyedrops",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "目薬",
			serif: [
				{"chara": "koishi","exp": null, "serif": _(""), "option": {"playEvent": "chapter6-04-event-01"}},
			],
			x: 589*2/3, y: 281.50*2/3,
			height: 400,
			scale: 2/3,
			show_if_event_true: "chapter6-04-show_eyedrops",
		},
	],
};

