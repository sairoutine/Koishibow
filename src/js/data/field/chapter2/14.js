'use strict';
// 1-7と同様
//ただしゴミ（すでにあるオブジェクトでも可。大量の三輪車とか！）が積まれて左には進めなくなっている
//回想用のフィールド
//2-4からオブジェクトを削除して白黒にして使う。
module.exports = {
	key: "chapter2_14",
	chapter: 2,
	bgm: "field4",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    null,
	defaultStartPosition: {x: 180, y: 380, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter2_13",
	leftField: null,
	upField: null,
	downField: null,
	background: "chapter1-07-bg-001",
	walkSound: "walking_bare_outside",
	initialProcess: [
	],
	objects: [
	]
};

