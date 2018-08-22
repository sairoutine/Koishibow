'use strict';

// フランとチルノが橋で喧嘩する

module.exports = {
	key: "chapter3-10-event-01",
	serifWindow: "fukidashi",
	animeNum: 4,
	bg: "chapter3-10-event-01-bg-001",
	front: "chapter3-10-event-01-obj-02",
	expAnimes: {
		"chapter3-10-event-01-obj01": [
			"chapter3-10-event-01-obj-01",
			"chapter3-10-event-01-koishi-obj01",
			"chapter3-10-event-01-cirno-obj01",
			"chapter3-10-event-01-fran-obj01",
		],
		"chapter3-10-event-01-obj02": [
			"chapter3-10-event-01-obj-02",
			"chapter3-10-event-01-koishi-obj02",
			"chapter3-10-event-01-cirno-obj02",
			"chapter3-10-event-01-fran-obj02",
		],
		"chapter3-10-event-01-obj03": [
			"chapter3-10-event-01-obj-03",
			"chapter3-10-event-01-koishi-obj03",
			"chapter3-10-event-01-cirno-obj03",
			"chapter3-10-event-01-fran-obj03",
		],
	},
	serifs: [
		{"exp": "chapter3-10-event-01-obj01", "serif":_("あ！"), "option": {"x": 370, "y": 250, "loop": false}},
		{"exp": null, "serif":_("ちょっと！"), "option": {"x": 370, "y": 250, "loop": false}},
		{"exp": null, "serif":_("なんでこの子を連れてきたの"), "option": {"x": 370, "y": 250, "loop": false}},
		{"exp": "chapter3-10-event-01-obj02", "serif":_("あー"), "option": {"x": 670, "y": 250, "loop": false}},
		{"exp": null, "serif":_("なるほどね"), "option": {"x": 670, "y": 250, "loop": false}},
		{"exp": null, "serif":_("あなたがいたのね"), "option": {"x": 670, "y": 250, "loop": false}},
		{"exp": null, "serif":_("そりゃうまくいかないでしょうね"), "option": {"x": 670, "y": 250, "loop": false}},
		{"exp": "chapter3-10-event-01-obj03", "serif":_("なんですって！"), "option": {"x": 370, "y": 250, "loop": false}},
		{"exp": null, "serif":_("何でもかんでも壊すくせに"), "option": {"x": 370, "y": 250, "loop": false}},
		{"exp": null, "serif":_("そんなあんたがゲージュツをリカイできるの？"), "option": {"x": 370, "y": 250, "loop": false}},
		{"exp": "chapter3-10-event-01-obj02", "serif":_("ふん！"), "option": {"x": 670, "y": 250, "loop": false}},
		{"exp": null, "serif":_("おねーちゃんがいったもん！"), "option": {"x": 670, "y": 250, "loop": false}},
		{"exp": null, "serif":_("自分で作ったものは壊していいし"), "option": {"x": 670, "y": 250, "loop": false}},
		{"exp": null, "serif":_("壊したぶんまたつくればいいのよ！"), "option": {"x": 670, "y": 250, "loop": false}},
		{"exp": null, "serif":_("そんなことも知らないの？"), "option": {"x": 670, "y": 250, "loop": false}},
		{"exp": null, "serif":_("ばかじゃない？"), "option": {"x": 670, "y": 250, "loop": false}},
		{"exp": "chapter3-10-event-01-obj03", "serif":_("そうやってわたしにケガさせたじゃない！"), "option": {"x": 370, "y": 250, "loop": false}},
		{"exp": null, "serif":_("わたしはヒガイシャなのよ！"), "option": {"x": 370, "y": 250, "loop": false}},
		{"exp": null, "serif":_("セキニンとれ！"), "option": {"x": 370, "y": 250, "loop": false}},
		{"exp": "chapter3-10-event-01-obj02", "serif":_("わたしの作品に勝手にさわったし"), "option": {"x": 670, "y": 250, "loop": false}},
		{"exp": null, "serif":_("それにバカにした"), "option": {"x": 670, "y": 250, "loop": false}},

		{"exp": null, "serif":_("あなたが悪いのよ"), "option": {"x": 670, "y": 250, "loop": false}},
		{"exp": "chapter3-10-event-01-obj03", "serif":_("ふん、どうだっていいわ"), "option": {"x": 370, "y": 250, "loop": false}},
		{"exp": null, "serif":_("わたしはこの子と作るから！"), "option": {"x": 370, "y": 250, "loop": false}},
		{"exp": "chapter3-10-event-01-obj02", "serif":_("ふん、勝手にしたら"), "option": {"x": 670, "y": 250, "loop": false}},

		{"exp": null, "serif":_("ねえ、私とやりたくなったらすぐおいでね"), "option": {"x": 670, "y": 250, "loop": false}},
		{"exp": null, "serif":_("うふふ"), "option": {"x": 670, "y": 250, "loop": false}},
		{"exp": "chapter3-10-event-01-obj03", "serif":_("やなやつ！"), "option": {"x": 370, "y": 250, "loop": false}},
		{"exp": null, "serif":"", "junction": ["みんなでがんばる","ひとりでがんばる"],"option": {"x": 480, "y": 345, "loop": false}},
		{"type": "junction_serif", "serifs": [
			// みんなでがんばる
			[
				{"id": "chapter3_12-Event-_30310", "serif": "", "save": true},
			],
			// ひとりでがんばる
			[
				{"id": "chapter3_12-Event-_30260", "serif": "", "save": true},
			],
		]},
	],
	endProcess: [
		// 戻る
		{"type": "process", "value": "changeField", "arguments": ["chapter3_10"]},
	],

};

