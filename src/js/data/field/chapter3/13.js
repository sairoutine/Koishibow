'use strict';
var _ = require('i18n4v')

var CONSTANT = require("../../../constant");
var I = 0;

var loopSerifOfFranAndCirno = [
	{"id": "chapter3_13-_firstEvent", "save": true},
	{"chara": "fran", "exp": "fran-reaction_03", "serif": _("雪玉を作るときはね\nすこしずつゆっくり転がすの")},
	{"chara": "fran", "exp": "fran-reaction_01",  serif1: _("まっすぐじゃなくていろんな向きにね"), serif2: _("まっすぐじゃなくていろんな向きにね"), serif3: _("まっすぐじゃなくていろんな向きにね"), serif4: _("まっすぐじゃなくていろんな向きにね")},
	{"chara": "cirno", "exp": "cirno-reaction_08", "serif": _("うん")},
	{"chara": "koishi","serif": _("わかった")},
	{"chara": "cirno", "exp": "cirno-reaction_08",  serif1: _("これで完璧よ！"), serif2: _("これで完璧よ！"), serif3: _("これで完璧よ！"), serif4: _("これで完璧よ！")},
	{"chara": "cirno", "exp": "cirno-reaction_07", "serif": _("わたしは天才だけどやりたか...")},
	{"chara": "cirno", "exp": "cirno-reaction_02",  serif1: _("やりかたを知らないだけだから"), serif2: _("やりかたを知らないだけだから"), serif3: _("やりかたを知らないだけだから"), serif4: _("やりかたを知らないだけだから")},
	{"chara": "cirno", "exp": "cirno-reaction_03",  serif1: _("あなたたちは材料をもってきてちょうだい！"), serif2: _("あなたたちは材料をもってきてちょうだい！"), serif3: _("あなたたちは材料をもってきてちょうだい！"), serif4: _("あなたたちは材料をもってきてちょうだい！")},
	{"chara": "cirno", "exp": "cirno-reaction_05",  serif1: _("まだまだたりないんだから！"), serif2: _("まだまだたりないんだから！"), serif3: _("まだまだたりないんだから！"), serif4: _("まだまだたりないんだから！")},
];


var serifOfFranAndCirno = [
	{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_13-_firstEvent"], "serifs": [
		[
			{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_13_SnowManWithDeco"], "serifs": [
				// アイテムを使って雪だるまをデコった後
				[
					{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["18"], "serifs": [
						// 斧を持っている
						[
							{"chara": "koishi", "serif":"", "option": {"deleteItem": "18"}},
							{"chara": "koishi", "serif":"", "option": {"playEvent": "chapter3-13-event-03"}},
						],
						// 斧を持っていない
						[
							{"chara": "fran",  serif1: _("やっと完成ね！"), serif2: _("やっと完成ね！"), serif3: _("やっと完成ね！"), serif4: _("やっと完成ね！")},
							{"chara": "fran",  serif1: _("仕上げはお願いね！"), serif2: _("仕上げはお願いね！"), serif3: _("仕上げはお願いね！"), serif4: _("仕上げはお願いね！")},
						],
					]},
				],
				// アイテムを使って雪だるまをデコる前
				[
					{"type": "criteria_serif", "criteria": "existsItemAll", "arguments": ["14", "15", "16", "17"], "serifs": [
						// 「前腕骨」「上腕骨」「ルビー」「サファイア」を持っている、かつ2回目の会話
						[
							{"chara": "koishi", "serif":"", "option": {"deleteItem": "14"}},
							{"chara": "koishi", "serif":"", "option": {"deleteItem": "15"}},
							{"chara": "koishi", "serif":"", "option": {"deleteItem": "16"}},
							{"chara": "koishi", "serif":"", "option": {"deleteItem": "17"}},
							{"chara": "koishi", serif1: _("おまたせ！"), serif2: _("おまたせ！"), serif3: _("おまたせ！"), serif4: _("おまたせ！")},
							{"chara": "cirno", "exp": "cirno-reaction_09",  serif1: _("おーそーいー！"), serif2: _("おーそーいー！"), serif3: _("おーそーいー！"), serif4: _("おーそーいー！")},
							{"chara": "cirno", "exp": "cirno-reaction_03",  serif1: _("もう半分できちゃったから！"), serif2: _("もう半分できちゃったから！"), serif3: _("もう半分できちゃったから！"), serif4: _("もう半分できちゃったから！")},
							{"chara": "fran", "exp": "fran-reaction_01",  serif1: _("それじゃあやっちゃおう！"), serif2: _("それじゃあやっちゃおう！"), serif3: _("それじゃあやっちゃおう！"), serif4: _("それじゃあやっちゃおう！"), "option": {"playEventMovie": "chapter3-13-event-02"}}, // イベント30340
							{"chara": "koishi", "serif": "", "option": {"resetFlag": "chapter3_13_SnowMan"}},
							{"id": "chapter3_13_SnowManWithDeco", "save": true},
							{"chara": "koishi", serif1: _("できた！"), serif2: _("できた！"), serif3: _("できた！"), serif4: _("できた！")},
							{"chara": "koishi", serif1: _("できた？"), serif2: _("できた？"), serif3: _("できた？"), serif4: _("できた？")},
							{"chara": "cirno", "exp": "cirno-reaction_02",  serif1: _("まだよ！"), serif2: _("まだよ！"), serif3: _("まだよ！"), serif4: _("まだよ！")},
							{"chara": "cirno", "exp": "cirno-reaction_01",  serif1: _("まだ頭がないじゃないの！"), serif2: _("まだ頭がないじゃないの！"), serif3: _("まだ頭がないじゃないの！"), serif4: _("まだ頭がないじゃないの！")},
							{"chara": "cirno", "exp": "cirno-reaction_06",  serif1: _("これじゃ世界一なんていえない！"), serif2: _("これじゃ世界一なんていえない！"), serif3: _("これじゃ世界一なんていえない！"), serif4: _("これじゃ世界一なんていえない！")},
							{"chara": "fran", "exp": "fran-reaction_02",  serif1: _("うーんどうしよう"), serif2: _("うーんどうしよう"), serif3: _("うーんどうしよう"), serif4: _("うーんどうしよう")},
						],
						loopSerifOfFranAndCirno,
					]},
				],
			]},
		],
		loopSerifOfFranAndCirno,
	]},
];

module.exports = {
	key: "chapter3_13",
	chapter: 3,
	bgm: null,
	rightStartPosition:   {x: 690, y: 380},
	leftStartPosition:    {x: 200, y: 450},
	defaultStartPosition: {x: 200, y: 450, isTowardLeft: false},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: null,
	leftField: "chapter3_12",
	upField: null,
	downField: null,
	background: "chapter3-13-bg-001",
	walkSound: "walking_bare_snow",
	initialProcess: [
		// BGM 再生
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_12-play_fran_bgm"], "process": [
			[
				// フランBGM
				{"type": "process", "value": "playBGM", "arguments": ["field8"]},
			],
			[
				// 通常BGM
				{"type": "process", "value": "playBGM", "arguments": ["field7"]},
			],
		]},

		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_13-Event-_30370"], "process": [
			// すでにイベント30370を再生済み
			[],
			// まだイベント30370を未再生
			[
				// フラン good ルート会話後
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_12-fran-serif-30320"], "process": [
					[
						// チルノ good ルート会話後
						{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_08-cirno-serif-30330"], "process": [
							[
								// イベント再生
								{"type": "process", "value": "changeScene", "arguments": ["event_talk", "chapter3-13-event-01"]},
							],
							[],
						]},
					],
					[],
				]},
			],
		]},
	],
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter3-13-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter3-13-obj-01-obj02",
			anime5: "chapter3-13-obj-01-obj03",
			anime6: "chapter3-13-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			image: "chapter3-13-obj-02",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "チルノの頭",
			serif: [
				{"chara": "koishi", serif1: _("なんか気持ち悪い"), serif2: _("なんか気持ち悪い"), serif3: _("なんか気持ち悪い"), serif4: _("なんか気持ち悪い"), "option": {"resetFlag": "chapter3-13-show_cirno_head"}},
				{"chara": "fran", "exp": "fran-reaction_01",  serif1: _("じゃあそれ、のせて！"), serif2: _("じゃあそれ、のせて！"), serif3: _("じゃあそれ、のせて！"), serif4: _("じゃあそれ、のせて！"), "option": {"getItem": "20"}},
			],
			x: 596*2/3, y: 854.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			show_if_event_true: "chapter3-13-show_cirno_head",
		},
		{
			no: ++I,
			image: "chapter3-13-obj-03",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "雪だるま一段目",
			serif: null,
			x: 720.50*2/3, y: 571*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			show_if_event_true: "chapter3_13_SnowMan",
		},
		{
			no: ++I,
			image: "chapter3-13-obj-04",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "飾りつけした雪だるま一段目（頭無し）",
			serif: [
				{"type": "criteria_serif", "criteria": "existsItem", "arguments": ["20"], "serifs": [
					// チルノの頭を持っている
					[
						{"chara": "koishi", "serif":"", "option": {"deleteItem": "20"}},
						{"chara": "koishi", "serif":"", "option": {"playEvent": "chapter3-13-event-04"}},
					],
					// チルノの頭を持っていない
					[
						{"chara": "koishi",  serif1: _("早く完成させなきゃ！"), serif2: _("やっと完成しそう！"), serif3: _("やっと完成しそう！"), serif4: _("やっと完成しそう！")},
					],
				]},
			],
			x: 720.50*2/3, y: 571*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			show_if_event_true: "chapter3_13_SnowManWithDeco",
		},
		{
			no: ++I,
			image: "chapter3-13-obj-05",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "チルノ体のみ（頭を切り落としとした後）",
			serif: null,
			x: 315.50*2/3, y: 811.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			position_type: "lying",
			show_if_event_true: "chapter3-13-show_cirno_body",
		},
		{
			no: "cirno",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "チルノ",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif: serifOfFranAndCirno,
			serif_back: [
				{"chara": "cirno", "exp": "cirno-ura_reaction_06",  serif1: _("だいくさんごっこ？"), serif2: _("だいくさんごっこ？"), serif3: _("だいくさんごっこ？"), serif4: _("だいくさんごっこ？")},
				{"chara": "cirno", "exp": "cirno-ura_reaction_03",  serif1: _("わかしもいれて！"), serif2: _("わかしもいれて！"), serif3: _("わかしもいれて！"), serif4: _("わかしもいれて！")},
				{"chara": "cirno", "exp": "cirno-ura_reaction_06",  serif1: _("............なんで？"), serif2: _("............なんで？"), serif3: _("............なんで？"), serif4: _("............なんで？")},
				{"chara": "cirno", "exp": "cirno-ura_reaction_04",  serif1: _("なんで！"), serif2: _("なんで！"), serif3: _("なんで！"), serif4: _("なんで！")},
				{"chara": "cirno", "exp": "cirno-ura_reaction_05",  serif1: _("ずるいずるいずるいずるい"), serif2: _("ずるいずるいずるいずるい"), serif3: _("ずるいずるいずるいずるい"), serif4: _("ずるいずるいずるいずるい")},
				{"chara": "cirno", "exp": "cirno-ura_reaction_04",  serif1: _("なんでわたしはだめなの！"), serif2: _("なんでわたしはだめなの！"), serif3: _("なんでわたしはだめなの！"), serif4: _("なんでわたしはだめなの！")},
				{"chara": "cirno", "exp": "cirno-ura_reaction_04",  serif1: _("なんでこの子はいいの！"), serif2: _("なんでこの子はいいの！"), serif3: _("なんでこの子はいいの！"), serif4: _("なんでこの子はいいの！")},
				{"chara": "cirno", "exp": "cirno-ura_reaction_05",  serif1: _("わたしよりへたっぴなのに！"), serif2: _("わたしよりへたっぴなのに！"), serif3: _("わたしよりへたっぴなのに！"), serif4: _("わたしよりへたっぴなのに！")},
			],
			x: 240, y: 300,
			scale: 2/3,
			anime1: "cirno-wait",
			anime2: null,
			anime3: null,
			anime4: "cirno-reverse_ura",
			anime5: "cirno-ura_wait",
			anime6: "cirno-reverse_omote",
			action_name: null,
			sound_name: null,
			width: 120, height: 350,
			show_if_event_true: "chapter3-13-show_cirno",
		},
		{
			no: "fran",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "フラン",
			loop: true,
			turn_not_toward_me: true, // こいしの方を向く
			serif: serifOfFranAndCirno,
			serif_back:[
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_13-fran-_uraFirst"], "serifs": [
					[
						{"chara": "fran", "exp": "fran-ura_reaction_06", "serif": _("もう達人だから、\nおねえちゃん教えてくれないんだって")},
						{"chara": "fran", "exp": "fran-ura_reaction_05",  serif1: _("もうおねえちゃんと遊べないの？"), serif2: _("もうおねえちゃんと遊べないの？"), serif3: _("もうおねえちゃんと遊べないの？"), serif4: _("もうおねえちゃんと遊べないの？")},
						{"chara": "fran", "exp": "fran-ura_reaction_06", "serif": _("じゃあべつに達人なんてならなくても\nよかったのに")},
					],
					[
						{"id": "chapter3_13-fran-_uraFirst", "save": true},
						{"chara": "fran", "exp": "fran-ura_reaction_01",  serif1: _("ねえおねーちゃーん"), serif2: _("ねえおねーちゃーん"), serif3: _("ねえおねーちゃーん"), serif4: _("ねえおねーちゃーん")},
						{"chara": "fran", "exp": "fran-ura_reaction_03",  serif1: _("きょうも手伝ってくれないの？"), serif2: _("きょうも手伝ってくれないの？"), serif3: _("きょうも手伝ってくれないの？"), serif4: _("きょうも手伝ってくれないの？")},
						{"chara": "fran", "exp": "fran-ura_reaction_05", "serif": _("なんで？")},
						{"chara": "fran", "exp": "fran-ura_wait",  serif1: _("そんなのあとでいいじゃない"), serif2: _("そんなのあとでいいじゃない"), serif3: _("そんなのあとでいいじゃない"), serif4: _("そんなのあとでいいじゃない")},
						{"chara": "fran", "exp": "fran-ura_reaction_05",  serif1: _("............"), serif2: _("............"), serif3: _("............"), serif4: _("............")},
						{"chara": "fran", "exp": "fran-ura_reaction_06", "serif": _("ごめんなさい")},
					],
				]}

			],
			x: 750, y: 400,
			scale: 2/3,
			anime1: "fran-wait",
			anime2: null,
			anime3: null,
			anime4: "fran-reverse_ura",
			anime5: "fran-ura_wait",
			anime6: "fran-reverse_omote",
			action_name: null,
			sound_name: null,
			width: 120, height: 350,
			show_if_event_true: "chapter3-13-show_fran",
		},

	],
};

