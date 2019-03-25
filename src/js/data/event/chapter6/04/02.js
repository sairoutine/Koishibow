'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter6-04-event-02",
	serifWindow: "fukidashi",
	expAnimes: [
		"chapter6-common-event-01-obj01",
	],
	serifs: [
		{"exp": "chapter6-common-event-01-obj01", "serif": _("いや！"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("そんな目で見ないで！"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("あたしが悪いの？"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("あっちいけ！"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("いえ、"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("ちがうわ！"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("あなたよ！"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("あなたが悪いのよ！"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛あ゛"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("----"), "option": {"x": 480, "y": 360, "loop": false}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		{"type": "process", "value": "changeScene", "arguments": ["stage", "chapter6-12"]},
	],
};

