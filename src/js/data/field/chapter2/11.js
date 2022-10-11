'use strict';
//1-10と同様。
//従来は右端が崖だったがここに2-10からつながるように橋を加筆。
//・五寸釘（砂の中。目を使うとみられる
var CONSTANT = require("../../../constant");
var I = 0;
var _ = require('i18n4v')
// TODO: journal042	chapter2		会話中	2-11	もし嫌いな人がいたら
module.exports = {
	key: "chapter2_11",
	chapter: 2,
	bgm: "silent",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter2_10",
	leftField: "chapter2_12",
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

