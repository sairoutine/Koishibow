'use strict';
var _ = require('i18n4v');
var CONSTANT = require("../../../constant");
module.exports = {
	no: "switch_hit",
	image: null,
	type: CONSTANT.STATIC_IMAGE_TYPE,
	name: "スイッチ(アタリ)",
	serif: [
		{"chara": "koishi", "exp": null, "serif":_("ここかな？"), "junction": ["もっと探す", "二人を呼びに行く"]},
		{"type": "junction_serif", "serifs": [
			[
				{"chara": "koishi", "exp": null, "serif":_("ここじゃないみたいね")},
			],
			[
				{"chara": "koishi", "exp": null, "serif":_("ねー")},
				{"chara": "koishi", "exp": null, "serif":_("みんな来てー")},
				// TODO: 40854 イベントを再生
			],
		]},
	],
	width: 100, height: 100,
	x: 480,
	y: 540,
	position_type: "lying",
};

