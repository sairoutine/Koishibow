'use strict';
// 川
var CONSTANT = require("../../../constant");
var I = 0;
var _ = require('i18n4v')
module.exports = {
	key: "chapter2_08",
	chapter: 2,
	bgm: "silent",
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 180, y: 450},
	defaultStartPosition: {x: 180, y: 450, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter2_09",
	leftField: "chapter2_07",
	upField: null,
	downField: null,
	background: null,
	walkSound: "walking_bare_default",
	initialProcess: [
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter2-08-bg-01_anime_1",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "木と人形",
			serif: [
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2_11_20400"], "serifs": [
					// 犬が釘を食べていたなら
					[
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter2-08-20440"], "serifs": [
							// 人形入手済
							[
								{"chara": "koishi", "exp": "look_bottom", serif1: _("わたしもこうなるの？"), serif2: _("わたしもこうなるの？"), serif3: _("わたしもこうなるの？"), serif4: _("わたしもこうなるの？")},
							],
							// 人形未所持
							[

								{"chara": "koishi", "exp": "touch", serif1: _("びちゃびちゃだあ"), serif2: _("びちゃびちゃだあ"), serif3: _("びちゃびちゃだあ"), serif4: _("びちゃびちゃだあ")},
								{"chara": "koishi", "exp": null, serif1: _("うーんこれでいいかなあ"), serif2: _("うーんこれでいいかなあ"), serif3: _("うーんこれでいいかなあ"), serif4: _("うーんこれでいいかなあ")},
								{"id": "chapter2-08-20440", "save": true},
								{"chara": "koishi", "exp": "yes", serif1: _("かわいいもんね"), serif2: _("かわいいもんね"), serif3: _("かわいいもんね"), serif4: _("かわいいもんね"), "option": {"getItem": "38"}},
							],
						]},
					],
					// 犬が釘を食べていないなら
					[
						{"chara": "koishi", "exp": "look_bottom", serif1: _("びっちゃびちゃ"), serif2: _("びっちゃびちゃ"), serif3: _("びっちゃびちゃ"), serif4: _("びっちゃびちゃ")},
					],
				]},
			],
			x: 686*2/3, y: 550*2/3,
			scale: 2/3,
			anime1: "chapter2-08-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			width: 280,
			height: 320,

			action_name: null,
			sound_name: null,
			not_show_if_event_true: "chapter2-08-20440",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "木と人形(人形なし)",
			serif: [
				{"chara": "koishi", "exp": "look_bottom", serif1: _("わたしもこうなるの？"), serif2: _("わたしもこうなるの？"), serif3: _("わたしもこうなるの？"), serif4: _("わたしもこうなるの？")},
			],
			x: 686*2/3, y: 550*2/3,
			scale: 2/3,
			anime1: "chapter2-08-obj-01-obj02",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			width: 280,
			height: 320,

			action_name: null,
			sound_name: null,
			not_if_event_true: "chapter2-08-20440",
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "テレビ",
			serif: [
				{"chara": "koishi", serif1: _("こわれてる！"), serif2: _("こわれてる！"), serif3: _("こわれてる！"), serif4: _("こわれてる！")},
				{"chara": "koishi", serif1: _("もうー"), serif2: _("もうー"), serif3: _("もうー"), serif4: _("もうー")},
			],
			width: 180, height: 250,
			x: 180, y: 440,
			action_name: "touch",
			sound_name: null,
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ソファ",
			serif: [
				{"chara": "koishi", serif1: _("きたなーい"), serif2: _("きたなーい"), serif3: _("きたなーい"), serif4: _("きたなーい")},
			],

			width: 300, height: 250,
			x: 750, y: 400,
			action_name: "touch",
			sound_name: null,
		},


	],
};

