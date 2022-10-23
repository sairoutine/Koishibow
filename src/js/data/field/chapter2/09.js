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
// TODO: journal044	chapter2	2-9	フィールドに落ちてる(通常)	2-9	橋姫
module.exports = {
	key: "chapter2_09",
	chapter: 2,
	bgm: "silent",
	rightStartPosition:   null,
	leftStartPosition:    {x: 180, y: 380},
	defaultStartPosition: {x: 690, y: 380, isTowardLeft: true},
	upStartPosition:      null,
	downStartPosition:    {x: 690, y: 380},
	rightField: null,
	leftField: "chapter2_08",
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter2-09-bg-01_anime_1",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "はしご",
			x: 900,
			y: 300,
			width: 150,
			height: 550,
			next_field_name: "chapter2_10",
		},

	],
};

