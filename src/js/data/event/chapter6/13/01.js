'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter6-13-event-01",
	serifWindow: "fukidashi",
	expAnimes: [
		"chapter6-common-event-01-obj01",
	],
	serifs: [
		{"exp": "chapter6-common-event-01-obj01", "serif": _("こいし！"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("こいし......"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("私達には私達しか......"), "option": {"x": 480, "y": 360, "loop": false}},
		{"exp": null, "serif": _("お願い起きて"), "option": {"x": 480, "y": 360, "loop": false}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		{"type": "process", "value": "incrementPlayedFlag", "arguments": ["after_chapter6-13-event-01"]},
		{"type": "process", "value": "changeScene", "arguments": ["stage", "chapter6-06"]},
	],
};
