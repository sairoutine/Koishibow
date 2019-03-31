'use strict';
var _ = require('i18n4v');
var CONSTANT = require("../../../constant");
module.exports = {
	no: "switch_hit",
	image: null,
	type: CONSTANT.STATIC_IMAGE_TYPE,
	name: "スイッチ(アタリ)",
	serif: [
		{"chara": "koishi", "exp": null,  serif1: _("ここかな？"), serif2: _("ここなのかしら"), serif3: _("きっとここだわ！"), serif4: _("きっとここだわ！"), "junction": ["もっと探す", "二人を呼びに行く"]},
		{"type": "junction_serif", "serifs": [
			[
				{"chara": "koishi", "exp": null,  serif1: _("ここじゃないみたいね"), serif2: _("ここじゃないみたいね"), serif3: _("でももっとさーがそ"), serif4: _("でももっとさーがそ")},
			],
			[
				{"chara": "koishi","exp": null, "serif": "", "option": {"playEvent": "chapter4-29-event-02"}}, // 40854 イベントを再生
			],
		]},
	],
	width: 100, height: 100,
	x: 480,
	y: 540,
	position_type: "lying",
	not_show_if_event_true: "chapter4-29-after_examine_switch", // スイッチ調査後のルートでは表示しない
};

