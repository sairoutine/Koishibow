'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter6-12-event-02",
	serifWindow: "fukidashi",
	startSounds: [
		{"name": "chapter6-04-event-common-noise", "frame": 0},
	],
	expAnimes: [
		"chapter6-common-event-01-obj01",
	],
	serifs: [
		{"exp": "chapter6-common-event-01-obj01", "serif": _("さとり"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("お前はいいこだ"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("賢い"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("かわいい"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("満点だってお前には不満だろう"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("それにひきかえお前は母親に似てしまったな"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("こいつは閉じ込めておくんだ"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("入院中だと言えばいい"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("どうせ口はきけん！"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("さとりにはおめかしさせてから広間へ来るんだ"), "option": {"x": 480, "y": 360, "loop": false}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		// chapter6_04 の目薬の表示をOFFにする
		{"type": "process", "value": "resetPlayedFlag", "arguments": ["chapter6-04-show_eyedrops"]},
		// chapter6_06 のジャーナルの表示をONにする
		{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter6-06-show_journal"]},

		{"type": "process", "value": "changeScene", "arguments": ["stage", "chapter6_04"]},
	],
};

