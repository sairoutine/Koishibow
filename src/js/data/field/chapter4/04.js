'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
module.exports = {
	key: "chapter4_04",
	chapter: 4,
	bgm: "field10",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	upStartPosition:    {x: 480, y: 720 - CONSTANT.WALK_DEPTH_LIMIT - 140},
	downStartPosition:    {x: 480, y: 530},
	rightField: "chapter4_05",
	leftField:  null,
	upField:    null,
	downField:  "chapter4_07",
	background: "chapter4-04-bg-001",
	walkSound: "walking_bare_sand",
	initialProcess: [
	],
	objects: [
		{
			no: "tewireal",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "てゐ",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: [
				{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter4_04-tewireal-limit", 4], "serifs": [
					[
						{"chara": "koishi", "exp": "look_front", "serif": _("ねえねえ")},
						{"chara": "koishi", "exp": null,  serif1: _("久しぶり！"), serif2: _("久しぶり！"), serif3: _("久しぶり！"), serif4: _("久しぶり！")},
						{"chara": "tewireal", "exp": "kanban_reaction_01", "serif": _("......")},
						{"chara": "tewireal", "exp": "kanban_reaction_02", "serif": _("誰？")},
						{"chara": "koishi", "exp": "look_front",  serif1: _("こないだ会ったじゃない"), serif2: _("こないだ会ったじゃない"), serif3: _("こないだ会ったじゃない"), serif4: _("こないだ会ったじゃない")},
						{"chara": "tewireal", "exp": "kanban_reaction_01",  serif1: _("いや"), serif2: _("いや"), serif3: _("いや"), serif4: _("いや")},
						{"chara": "tewireal", "exp": null,  serif1: _("知らない"), serif2: _("知らない"), serif3: _("知らない"), serif4: _("知らない")},
						{"chara": "koishi", "exp": "look_front", "serif": _("なんで？")},
						{"chara": "tewireal", "exp": "kanban_reaction_02",  serif1: _("お前、気味が悪いぞ"), serif2: _("お前、気味が悪いぞ"), serif3: _("お前、気味が悪いぞ"), serif4: _("お前、気味が悪いぞ")},
					],
					[
						{"chara": "koishi", "exp": "look_front",  serif1: _("ねえねえいじわる言わないで"), serif2: _("いたずらのつもりなの"), serif3: _("いじわるはやめて"), serif4: _("いじわるはやめて")},
						{"chara": "koishi", "exp": null,  serif1: _("お友達でしょ"), serif2: _("ともだちだよね"), serif3: _("ともだちだよね"), serif4: _("ともだちだよね")},
						{"chara": "tewireal", "exp": "kanban_reaction_03", "serif": _("うるさいなあ")},
						{"chara": "tewireal", "exp": null,  serif1: _("あっち行けよ"), serif2: _("あっち行けよ"), serif3: _("あっち行けよ"), serif4: _("あっち行けよ")},
						{"chara": "merry", "exp": "merry-reaction_10",  serif1: _("ね本当に友達なの？"), serif2: _("ね本当に友達なの？"), serif3: _("ね本当に友達なの？"), serif4: _("ね本当に友達なの？")},
						{"chara": "koishi", "exp": "yes", "serif": _("そうよ")},
						{"chara": "merry", "exp": "merry-reaction_09",  serif1: _("そうなの"), serif2: _("そうなの"), serif3: _("そうなの"), serif4: _("そうなの")},
					],
					[
						{"chara": "koishi", "exp": "look_front", "serif": _("ねえねえ")},
						{"chara": "tewireal", "exp": "tewireal-kanban_reaction_02",  serif1: _("なんだい？"), serif2: _("なんだい？"), serif3: _("なんだい？"), serif4: _("なんだい？")},
						{"chara": "tewireal", "exp": null,  serif1: _("竹林から出たいなら道案内してやるから待ってろ"), serif2: _("竹林から出たいなら道案内してやるから待ってろ"), serif3: _("竹林から出たいなら道案内してやるから待ってろ"), serif4: _("竹林から出たいなら道案内してやるから待ってろ")},
						{"chara": "koishi", "exp": "look_bottom",  serif1: _("そうじゃないの"), serif2: _("そうじゃないの"), serif3: _("そうじゃないの"), serif4: _("そうじゃないの")},
						{"chara": "tewireal", "exp": "tewireal-kanban_reaction_02",  serif1: _("診療所に行きたいのか？"), serif2: _("診療所に行きたいのか？"), serif3: _("診療所に行きたいのか？"), serif4: _("診療所に行きたいのか？")},
						{"chara": "koishi", "exp": "look_bottom",  serif1: _("それって病院のことでしょ"), serif2: _("それって病院のことでしょ"), serif3: _("それって病院のことでしょ"), serif4: _("それって病院のことでしょ")},
						{"chara": "koishi", "exp": null,  serif1: _("そうじゃないの"), serif2: _("そうじゃないの"), serif3: _("そうじゃないの"), serif4: _("そうじゃないの")},
						{"chara": "tewireal", "exp": "tewireal-kanban_reaction_02",  serif1: _("じゃあなんだよ"), serif2: _("じゃあなんだよ"), serif3: _("じゃあなんだよ"), serif4: _("じゃあなんだよ")},
						{"chara": "koishi", "exp": "look_front",  serif1: _("あっちに邪魔なのがいるの"), serif2: _("あっちに邪魔なのがいるの"), serif3: _("あっちに邪魔なのがいるの"), serif4: _("あっちに邪魔なのがいるの")},
						{"chara": "tewireal", "exp": "tewireal-kanban_reaction_04",  serif1: _("あー"), serif2: _("あー"), serif3: _("あー"), serif4: _("あー")},
						{"chara": "tewireal", "exp": null,  serif1: _("あいつな"), serif2: _("あいつな"), serif3: _("あいつな"), serif4: _("あいつな")},
						{"chara": "tewireal", "exp": "tewireal-kanban_reaction_02",  serif1: _("でもあっちへ行っても何もないぞ"), serif2: _("でもあっちへ行っても何もないぞ"), serif3: _("でもあっちへ行っても何もないぞ"), serif4: _("でもあっちへ行っても何もないぞ")},
						{"chara": "koishi", "exp": "look_front",  serif1: _("でも友達が行きたいって言ってるの"), serif2: _("でも友達が行きたいって言ってるの"), serif3: _("でも友達が行きたいって言ってるの"), serif4: _("でも友達が行きたいって言ってるの")},
						{"chara": "tewireal", "exp": "tewireal-kanban_reaction_01", "serif": _("ふーん")},
						{"chara": "tewireal", "exp": null,  serif1: _("まあいいさ"), serif2: _("まあいいさ"), serif3: _("まあいいさ"), serif4: _("まあいいさ")},
						{"chara": "tewireal", "exp": null,  serif1: _("あっちには――"), serif2: _("あっちには――"), serif3: _("あっちには――"), serif4: _("あっちには――")},
						{"chara": "tewireal", "exp": null, "serif": _("\"何もない\"があるからな")},
						{"chara": "tewireal", "exp": null,  serif1: _("それが好きな奴もいる"), serif2: _("それが好きな奴もいる"), serif3: _("それが好きな奴もいる"), serif4: _("それが好きな奴もいる")},
						{"chara": "koishi", "exp": "look_bottom", "serif": _("よくわかんない")},
						{"chara": "tewireal", "exp": null,  serif1: _("そうだろうな"), serif2: _("そうだろうな"), serif3: _("そうだろうな"), serif4: _("そうだろうな")},
						{"chara": "tewireal", "exp": "tewireal-kanban_reaction_01", "serif": _("\"何もない\"をありがたがるのはな")},
						{"chara": "tewireal", "exp": null,  serif1: _("自分の中にたくさん何かがあるやつだ"), serif2: _("自分の中にたくさん何かがあるやつだ"), serif3: _("自分の中にたくさん何かがあるやつだ"), serif4: _("自分の中にたくさん何かがあるやつだ")},
						{"chara": "tewireal", "exp": "tewireal-kanban_reaction_02",  serif1: _("でも見たところ、お前空っぽだろー？"), serif2: _("でも見たところ、お前空っぽだろー？"), serif3: _("でも見たところ、お前空っぽだろー？"), serif4: _("でも見たところ、お前空っぽだろー？")},
						{"chara": "koishi", "exp": "look_bottom", "serif": _("......")},
						{"chara": "koishi", "exp": null,  serif1: _("ちがうよ"), serif2: _("わかんない"), serif3: _("わかんない"), serif4: _("わかんない")},
					],
					[
						{"chara": "koishi", "exp": "look_front",  serif1: _("もう友達だよね"), serif2: _("もう友達だよね"), serif3: _("もう友達だよね"), serif4: _("もう友達だよね")},
						{"chara": "tewireal", "exp": "tewireal-wait",  serif1: _("違うぞ"), serif2: _("違うぞ"), serif3: _("違うぞ"), serif4: _("違うぞ")},
						{"chara": "tewireal", "exp": null,  serif1: _("とっとと行け"), serif2: _("とっとと行け"), serif3: _("とっとと行け"), serif4: _("とっとと行け")},
					],
				]},
			],
			x: 260*2/3, y: 605*2/3,
			anime1: "tewireal-wait",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: "chapter4-04-penki",
		},
		{
			no: "merry",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "メリー",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif_back: [],
			serif: null,
			x: 1060*2/3, y: 505*2/3,
			anime1: "merry-wait",
			anime2: null,
			anime3: null,
			anime4: null,
			anime5: null,
			anime6: null,
			action_name: null,
			sound_name: null,
		},


	],
};

