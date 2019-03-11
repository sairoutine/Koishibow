'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter4-29-event-02",
	serifWindow: "fukidashi",
	expAnimes: [
		"chapter4-29-event-02-obj01",
		"chapter4-29-event-02-obj02",
		"chapter4-29-event-02-obj03",
		"chapter4-29-event-02-obj04",
		"chapter4-29-event-02-obj05",
		"chapter4-29-event-02-obj06",
		"chapter4-29-event-02-obj07",
		"chapter4-29-event-02-obj08",
	],
	serifs: [
		{"exp": "chapter4-29-event-02-obj01", "serif": _("ここかな？"), "option": {"x": 490, "y": 230, "loop": false}},
		{"exp": null, "serif": _("ねー"), "option": {"x": 490, "y": 230, "loop": false}},
		{"exp": null, "serif": _("みんな来てー"), "option": {"x": 490, "y": 230, "loop": false}},
		{"exp": "chapter4-29-event-02-obj02", "serif": _("見つかったのかしら？"), "option": {"x": 270, "y": 20, "loop": false}},
		{"exp": null, "serif": _("どうかしら"), "option": {"x": 450, "y": 180, "loop": false}},
		{"exp": "chapter4-29-event-02-obj03", "serif": _("見つかったのかしら？"), "option": {"x": 270, "y": 20, "loop": false}},
		{"exp": null, "serif": _("ここに境界があるの？"), "option": {"x": 450, "y": 180, "loop": false}},
		{"exp": null, "serif": _("そう！"), "option": {"x": 490, "y": 230, "loop": false}},
		{"exp": null, "serif": _("どう？"), "option": {"x": 450, "y": 180, "loop": false}},
		{"exp": null, "serif": _("あなたどうしてここがわかったの？"), "option": {"x": 270, "y": 20, "loop": false}},
		{"exp": null, "serif": _("えー"), "option": {"x": 490, "y": 230, "loop": false}},
		{"exp": null, "serif": _("わかったから"), "option": {"x": 490, "y": 230, "loop": false}},
		{"exp": null, "serif": _("やっぱり私とは違うのね"), "option": {"x": 270, "y": 20, "loop": false}},
		{"exp": "chapter4-29-event-02-obj04", "serif": _("なによ"), "option": {"x": 270, "y": 20, "loop": false}},
		{"exp": null, "serif": _("私たちに失礼よ"), "option": {"x": 450, "y": 180, "loop": false}},
		{"exp": null, "serif": _("いいわ"), "option": {"x": 270, "y": 20, "loop": false}},
		{"exp": null, "serif": _("行きましょ"), "option": {"x": 270, "y": 20, "loop": false}},
		{"exp": null, "serif": _("そうね"), "option": {"x": 450, "y": 180, "loop": false}},
		{"exp": null, "serif": _("こいしちゃん、ありがとうね"), "option": {"x": 450, "y": 180, "loop": false}},
		{"exp": null, "serif": _("もういくの"), "option": {"x": 490, "y": 230, "loop": false}},
		{"exp": null, "serif": _("うん"), "option": {"x": 450, "y": 180, "loop": false}},
		{"exp": null, "serif": _("やらなくちゃいけないことがあるから"), "option": {"x": 450, "y": 180, "loop": false}},
		{"exp": "chapter4-29-event-02-obj05", "serif": _("えー"), "option": {"x": 330, "y": 230, "loop": false}},
		{"exp": null, "serif": _("まだいいでしょ"), "option": {"x": 330, "y": 230, "loop": false}},
		{"exp": null, "serif": _("ごめんね"), "option": {"x": 450, "y": 180, "loop": false}},
		{"exp": null, "serif": _("またくるよ"), "option": {"x": 450, "y": 180, "loop": false}},
		{"exp": null, "serif": _("またっていつ"), "option": {"x": 330, "y": 230, "loop": false}},
		{"exp": null, "serif": _("あした？"), "option": {"x": 330, "y": 230, "loop": false}},
		{"exp": null, "serif": _("あしたの日の時のあした？"), "option": {"x": 330, "y": 230, "loop": false}},
		{"exp": null, "serif": _("そうね"), "option": {"x": 450, "y": 180, "loop": false}},
		{"exp": null, "serif": _("いつか"), "option": {"x": 330, "y": 230, "loop": false}},
		{"exp": null, "serif": _("ずーっとずーっと長生きしたら"), "option": {"x": 450, "y": 180, "loop": false}},
		{"exp": "chapter4-29-event-02-obj06", "serif": _("また会えるんだよね"), "option": {"x": 480, "y": 280, "loop": false}},
		{"exp": null, "serif": _("いいえ"), "option": {"x": 450, "y": 230, "loop": false}},
		{"exp": null, "serif": _("行くわよ"), "option": {"x": 270, "y": 20, "loop": false}},
		{"exp": null, "serif": _("さよなら"), "option": {"x": 450, "y": 230, "loop": false}},
		{"exp": "chapter4-29-event-02-obj07", "serif": _("あれー......"), "option": {"x": 480, "y": 280, "loop": false}},
		{"exp": null, "serif": _("ほんとにいなくなっちゃった"), "option": {"x": 480, "y": 280, "loop": false}},
		{"exp": "chapter4-29-event-02-obj08", "serif": _("....."), "option": {"x": 480, "y": 280, "loop": false}},
		{"exp": null, "serif": _("行かなきゃ"), "option": {"x": 480, "y": 280, "loop": false}},
		{"exp": null, "serif": _("どこだっけ"), "option": {"x": 480, "y": 280, "loop": false}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter4-29-after_examine_switch"]},
		{"type": "process", "value": "returnScene", "arguments": ["stage"]},
	],
};
