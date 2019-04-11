'use strict';
var _ = require('i18n4v');
var CONSTANT = require("../../../constant");
module.exports = {
	no: "switch_miss",
	image: null,
	type: CONSTANT.STATIC_IMAGE_TYPE,
	name: "スイッチ(ハズレ)",
	serif: [
		{"chara": "koishi", "exp": null,  serif1: _("ここかな？"), serif2: _("ここなのかしら"), serif3: _("きっとここだわ！"), serif4: _("きっとここだわ！"), "junction": ["もっと探す", "二人を呼びに行く"]},
		{"type": "junction_serif", "serifs": [
			[
				{"chara": "koishi", "exp": null,  serif1: _("ここじゃないみたいね"), serif2: _("ここじゃないみたいね"), serif3: _("でももっとさーがそ"), serif4: _("でももっとさーがそ")},
			],
			[
				{"chara": "koishi", "exp": null,  serif1: _("ねー"), serif2: _("ねー"), serif3: _("ねー"), serif4: _("ねー")},
				{"chara": "koishi", "exp": null,  serif1: _("みんな来てー"), serif2: _("みんな来てー"), serif3: _("みんな来てー"), serif4: _("みんな来てー")},
				{"chara": "merry", "exp": null,  serif1: _("見つかったのかしら？"), serif2: _("見つかったのかしら？"), serif3: _("見つかったのかしら？"), serif4: _("見つかったのかしら？"), "option": {"blackout": true}},
				{"id": "chapter4-all-in_ending", "save": true},
				{"chara": "renko","exp": "renko-reaction_01",  serif1: _("どうかしら"), serif2: _("どうかしら"), serif3: _("どうかしら"), serif4: _("どうかしら")},
				{"chara": "merry","exp": "merry-reaction_10", "serif": _("......")},
				{"chara": "renko","exp": "renko-reaction_02",  serif1: _("ここに境界があるの？"), serif2: _("ここに境界があるの？"), serif3: _("ここに境界があるの？"), serif4: _("ここに境界があるの？")},
				{"chara": "koishi","exp": "yes", "serif": _("そう！")},
				{"chara": "koishi","exp": "look_bottom",  serif1: _("ここよく見て！"), serif2: _("ここよく見て！"), serif3: _("ここよく見て！"), serif4: _("ここよく見て！")},
				{"chara": "koishi","exp": null,  serif1: _("なんかきらきらしてるでしょ"), serif2: _("なんかきらきらしてるでしょ"), serif3: _("なんかきらきらしてるでしょ"), serif4: _("なんかきらきらしてるでしょ")},
				{"chara": "koishi","exp": null,  serif1: _("それに掘ったら土の色が変わるの"), serif2: _("それに掘ったら土の色が変わるの"), serif3: _("それに掘ったら土の色が変わるの"), serif4: _("それに掘ったら土の色が変わるの")},
				{"chara": "koishi","exp": "look_front",  serif1: _("これ境界？"), serif2: _("これ境界？"), serif3: _("これ境界？"), serif4: _("これ境界？")},
				{"chara": "renko","exp": "renko-reaction_02", "serif": _("......")},
				{"chara": "koishi","exp": "yes",  serif1: _("これ正解でしょ！"), serif2: _("これ正解でしょ！"), serif3: _("これ正解でしょ！"), serif4: _("これ正解でしょ！")},
				{"chara": "merry","exp": "merry-reaction_10", "serif": _("......")},
				{"chara": "merry","exp": "merry-reaction_07",  serif1: _("そうよ！"), serif2: _("そうよ！"), serif3: _("そうよ！"), serif4: _("そうよ！")},
				{"chara": "merry","exp": null,  serif1: _("おめでとう"), serif2: _("おめでとう"), serif3: _("おめでとう"), serif4: _("おめでとう")},
				{"chara": "merry","exp": null,  serif1: _("頑張ったわね"), serif2: _("頑張ったわね"), serif3: _("頑張ったわね"), serif4: _("頑張ったわね")},
				{"chara": "renko","exp": "renko-reaction_01",  serif1: _("ちょっと"), serif2: _("ちょっと"), serif3: _("ちょっと"), serif4: _("ちょっと")},
				{"chara": "merry","exp": "merry-reaction_06",  serif1: _("いいのよ"), serif2: _("いいのよ"), serif3: _("いいのよ"), serif4: _("いいのよ")},
				{"chara": "merry","exp": "merry-reaction_09",  serif1: _("でもこれはちっちゃすぎて通れないから\n私は私のを探すわ"), serif2: _("でもこれはちっちゃすぎて通れないから\n私は私のを探すわ"), serif3: _("でもこれはちっちゃすぎて通れないから\n私は私のを探すわ"), serif4: _("でもこれはちっちゃすぎて通れないから\n私は私のを探すわ")},
				{"chara": "koishi","exp": "look_front",  serif1: _("手伝おうか？"), serif2: _("手伝おうか？"), serif3: _("手伝おうか？"), serif4: _("手伝おうか？")},
				{"chara": "renko","exp": "renko-reaction_04",  serif1: _("ううん大丈夫よ"), serif2: _("ううん大丈夫よ"), serif3: _("ううん大丈夫よ"), serif4: _("ううん大丈夫よ")},
				{"chara": "merry","exp": "merry-reaction_06",  serif1: _("行きましょ"), serif2: _("行きましょ"), serif3: _("行きましょ"), serif4: _("行きましょ"), "option": {"playEvent": "chapter4-29-event-01"}}, // 40850 イベントを再生
				{"chara": "koishi","exp": null, "serif": "", "option": {"resetFlag": "chapter4-all-in_ending"}},
			],
		]},
	],
	width: 100, height: 100,
	x: 480,
	y: 540,
	position_type: "lying",
	not_show_if_event_true: "chapter4-29-after_examine_switch", // スイッチ調査後のルートでは表示しない
};

