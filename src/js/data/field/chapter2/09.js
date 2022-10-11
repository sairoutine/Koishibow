'use strict';
//橋の下
//・一輪
//・小傘
//（ムラサもここにいる予定でしたが狭そうなので範囲的に厳しければ変更）
//・橋（cpt1の橋とは別）
//・梯子（cpt1の流用でできるか？）
//・冷蔵庫（傾いてすこし川に沈んでいる）
var CONSTANT = require("../../../constant");
var I = 0;
var _ = require('i18n4v')
// TODO: journal044	chapter2	2-9	フィールドに落ちてる(通常)	2-9	橋姫
module.exports = {
	key: "chapter2_09",
	chapter: 2,
	bgm: "silent",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    "chapter2_10",
	downStartPosition:  null,
	rightField: null,
	leftField: "chapter2_08",
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

