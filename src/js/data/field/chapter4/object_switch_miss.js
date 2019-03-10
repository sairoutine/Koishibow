'use strict';
var _ = require('i18n4v');
var CONSTANT = require("../../../constant");
module.exports = {
	no: "switch_miss",
	image: null,
	type: CONSTANT.STATIC_IMAGE_TYPE,
	name: "スイッチ(ハズレ)",
	serif: [
		{"chara": "koishi", "exp": null, "serif":_("ここかな？"), "junction": ["もっと探す", "二人を呼びに行く"]},
		{"type": "junction_serif", "serifs": [
			[
				{"chara": "koishi", "exp": null, "serif":_("ここじゃないみたいね")},
			],
			[
				{"chara": "koishi", "exp": null, "serif":_("ねー")},
				{"chara": "koishi", "exp": null, "serif":_("みんな来てー")},
				{"chara": "merry", "exp": null, "serif":_("見つかったのかしら？"), "option": {"blackout": true}},
				{"id": "chapter4-all-in_ending", "save": true},
				{"chara": "renko","exp": "renko-reaction_01", "serif": _("どうかしら")},
				{"chara": "merry","exp": "merry-reaction_10", "serif": _("......")},
				{"chara": "renko","exp": "renko-reaction_02", "serif": _("ここに境界があるの？")},
				{"chara": "koishi","exp": "yes", "serif": _("そう！")},
				{"chara": "koishi","exp": "look_bottom", "serif": _("ここよく見て！")},
				{"chara": "koishi","exp": null, "serif": _("なんかきらきらしてるでしょ")},
				{"chara": "koishi","exp": null, "serif": _("それに掘ったら土の色が変わるの")},
				{"chara": "koishi","exp": "look_front", "serif": _("これ境界？")},
				{"chara": "renko","exp": "renko-reaction_02", "serif": _("......")},
				{"chara": "koishi","exp": "yes", "serif": _("これ正解でしょ！")},
				{"chara": "merry","exp": "merry-reaction_10", "serif": _("......")},
				{"chara": "merry","exp": "merry-reaction_07", "serif": _("そうよ！")},
				{"chara": "merry","exp": null, "serif": _("おめでとう")},
				{"chara": "koishi","exp": "touch", "serif": _("頑張ったわね")},
				{"chara": "renko","exp": "renko-reaction_01", "serif": _("ちょっと")},
				{"chara": "merry","exp": "merry-reaction_06", "serif": _("いいのよ")},
				{"chara": "merry","exp": "merry-reaction_09", "serif": _("でもこれはちっちゃすぎて通れないから私は私のを探すわ")},
				{"chara": "koishi","exp": "look_front", "serif": _("手伝おうか？")},
				{"chara": "renko","exp": "renko-reaction_04", "serif": _("ううん大丈夫よ")},
				{"chara": "merry","exp": "merry-reaction_06", "serif": _("行きましょ"), },
				// TODO: 40850 イベントを再生
				{"chara": "koishi","exp": null, "serif": "", "option": {"resetFlag": "chapter4-all-in_ending"}},
			],
		]},
	],
	width: 100, height: 100,
	x: 480,
	y: 540,
	position_type: "lying",
};

