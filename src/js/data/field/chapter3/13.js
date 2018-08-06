'use strict';

var CONSTANT = require("../../../constant");
var I = 0;

var loopSerifOfFranAndCirno = [
	{"id": "chapter3_13-" + I + "-_firstEvent", "save": true},
	{"chara": "fran", "exp": "fran-reaction_03", "serif":"雪玉を作るときはね\nすこしずつゆっくり転がすの"},
	{"chara": "fran", "exp": "fran-reaction_01", "serif":"まっすぐじゃなくていろんな向きにね"},
	{"chara": "cirno", "exp": "cirno-reaction_08", "serif":"うん"},
	{"chara": "koishi","serif":"わかった"},
	{"chara": "cirno", "exp": "cirno-reaction_08", "serif":"これで完璧よ！"},
	{"chara": "cirno", "exp": "cirno-reaction_07", "serif":"わたしは天才だけどやりたか..."},
	{"chara": "cirno", "exp": "cirno-reaction_02", "serif":"やりかたを知らないだけだから"},
	{"chara": "cirno", "exp": "cirno-reaction_03", "serif":"あなたたちは材料をもってきてちょうだい！"},
	{"chara": "cirno", "exp": "cirno-reaction_05", "serif":"まだまだたりないんだから！"},
];


var serifOfFranAndCirno = [
	{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_13-" + I + "-_firstEvent"], "serifs": [
		[
			{"type": "criteria_serif", "criteria": "existsItemAll", "arguments": ["14", "15", "16", "17"], "serifs": [
				// 「前腕骨」「上腕骨」「ルビー」「サファイア」を持っている、かつ2回目の会話
				[
					{"chara": "koishi","serif":"おまたせ！"},
					{"chara": "cirno", "exp": "cirno-reaction_09", "serif":"おーそーいー！"},
					{"chara": "cirno", "exp": "cirno-reaction_03", "serif":"もう半分できちゃったから！"},
					{"chara": "fran", "exp": "fran-reaction_01", "serif":"それじゃあやっちゃおう！", "option": {"playMovie": "./movie/chapter3-13-event-02.mp4"}}, // イベント30340
					{"chara": "koishi","serif":"できた！"},
					{"chara": "koishi","serif":"できた？"},
					{"chara": "cirno", "exp": "cirno-reaction_02", "serif":"まだよ！"},
					{"chara": "cirno", "exp": "cirno-reaction_01", "serif":"まだ頭がないじゃないの！"},
					{"chara": "cirno", "exp": "cirno-reaction_06", "serif":"これじゃ世界一なんていえない！"},
					{"chara": "fran", "exp": "fran-reaction_02", "serif":"うーんどうしよう"},
				],
				loopSerifOfFranAndCirno,
			]},
		],
		loopSerifOfFranAndCirno,
	]},
];

module.exports = {
	key: "chapter3_13",
	chapter: 3,
	bgm: "field3",
	rightStartPosition: {x: 690, y: 380},
	leftStartPosition:  {x: 200, y: 450},
	rightField: null,
	leftField: "chapter3_12",
	background: "chapter3-13-bg-001",
	walkSound: "walking_bare_outside",
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
				{"chara": "koishi","serif":"なんか気持ち悪い"},
				{"id": "chapter3_13_GetCirnoHead", "save": true},
				{"chara": "fran", "exp": "fran-reaction_01", "serif":"じゃあそれ、のせて！", "option": {"getItem": "20"}},
			],
			x: 596*2/3, y: 854.50*2/3,
			scale: 2/3,
			action_name: null,
			sound_name: null,
			//show_if_event_true: "", TODO:
			not_show_if_event_true: "chapter3_13_GetCirnoHead",
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
			//show_if_event_true: "", TODO:
			// セリフ30360の後に表示
			// かつ  "chapter3_13_SnowManWithDeco" が true なら表示しない
		},
		{
			no: ++I,
			image: "chapter3-13-obj-04",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "飾りつけした雪だるま一段目（頭無し）",
			serif: null,
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
			//show_if_event_true: "", TODO:
			// セリフ30360の後に表示
		},
		{
			no: "cirno",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "チルノ",
			loop: true,
			serif: serifOfFranAndCirno,
			serif_back: [
				{"chara": "cirno", "exp": "cirno-ura_reaction_06", "serif":"だいくさんごっこ？"},
				{"chara": "cirno", "exp": "cirno-ura_reaction_03", "serif":"わかしもいれて！"},
				{"chara": "cirno", "exp": "cirno-ura_reaction_06", "serif":"............なんで？"},
				{"chara": "cirno", "exp": "cirno-ura_reaction_04", "serif":"なんで！"},
				{"chara": "cirno", "exp": "cirno-ura_reaction_05", "serif":"ずるいずるいずるいずるい"},
				{"chara": "cirno", "exp": "cirno-ura_reaction_04", "serif":"なんでわたしはだめなの！"},
				{"chara": "cirno", "exp": "cirno-ura_reaction_04", "serif":"なんでこの子はいいの！"},
				{"chara": "cirno", "exp": "cirno-ura_reaction_05", "serif":"わたしよりへたっぴなのに！"},
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
			serif: serifOfFranAndCirno,
			serif_back:[
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter3_13-fran-_uraFirst"], "serifs": [
					[
						{"chara": "fran", "exp": "fran-ura_reaction_06", "serif":"もう達人だから、\nおねえちゃん教えてくれないんだって"},
						{"chara": "fran", "exp": "fran-ura_reaction_05", "serif":"もうおねえちゃんと遊べないの？"},
						{"chara": "fran", "exp": "fran-ura_reaction_06", "serif":"じゃあべつに達人なんてならなくても\nよかったのに"},
					],
					[
						{"id": "chapter3_13-fran-_uraFirst", "save": true},
						{"chara": "fran", "exp": "fran-ura_reaction_01", "serif":"ねえおねーちゃーん"},
						{"chara": "fran", "exp": "fran-ura_reaction_03", "serif":"きょうも手伝ってくれないの？"},
						{"chara": "fran", "exp": "fran-ura_reaction_05", "serif":"なんで？"},
						{"chara": "fran", "exp": "fran-ura_wait", "serif":"そんなのあとでいいじゃない"},
						{"chara": "fran", "exp": "fran-ura_reaction_05", "serif":"............"},
						{"chara": "fran", "exp": "fran-ura_reaction_06", "serif":"ごめんなさい"},
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

