'use strict';
var CONSTANT = require("../../../constant");
module.exports = {
	no: "switch_hit",
	image: null,
	type: CONSTANT.STATIC_IMAGE_TYPE,
	name: "スイッチ(アタリ)",
	serif: [
		{"chara": "koishi","exp": null, "serif": "", "option": {"playEvent": "chapter4-29-event-02"}}, // 40854 イベントを再生
	],
	width: 100, height: 100,
	x: 480,
	y: 540,
	position_type: "lying",
	not_show_if_event_true: "chapter4-29-after_examine_switch", // スイッチ調査後のルートでは表示しない
};

