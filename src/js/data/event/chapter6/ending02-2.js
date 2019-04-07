'use strict';
var _ = require('i18n4v')
module.exports = {
	key: "chapter6-event-ending02-2",
	serifWindow: "fukidashi_brown",
	expAnimes: [
		"chapter6-event-ending02-2-obj01",
		"chapter6-event-ending02-2-obj02",
		"chapter6-event-ending02-2-obj03",
	],
	serifs: [
		{"exp": "chapter6-event-ending02-2-obj01", "serif": _("ねえこいし"), "option": {"x": 479, "y": 200, "loop": false}},
		{"exp": null, "serif": _("聞こえてるんでしょう"), "option": {"x": 479, "y": 200, "loop": false}},
		{"exp": "chapter6-event-ending02-2-obj02", "serif": _("どうして起きてくれないの？"), "option": {"x": 479, "y": 200, "loop": false}},
		{"exp": null, "serif": _("私何かいけなかったの？"), "option": {"x": 479, "y": 200, "loop": false}},
		{"exp": "chapter6-event-ending02-2-obj03", "serif": _("あなたが悪いのよ"), "option": {"x": 479, "y": 200, "loop": false}},
		{"exp": null, "serif": _("私が導いてあげたのに"), "option": {"x": 479, "y": 200, "loop": false}},
		{"exp": "chapter6-event-ending02-2-obj03", "serif": _("失敗ばっかりして！"), "option": {"x": 479, "y": 200, "loop": false}},
		{"exp": null, "serif": _("私を困らせないで......"), "option": {"x": 479, "y": 200, "loop": false}},
		// TODO: コンティニューしたときの戻り先を chapter6_18 にしないようにする
		{"exp": null, "serif": _("あ゛あ゛"), "option": {"x": 478, "y": 330, "loop": false, "is_koishi": true}},
	],
	endAnime: null,
	endSounds: [
	],
	endProcess: [
		// タイトルへ
		{"type": "process", "value": "changeScene", "arguments": ["title"]},
	],
};

