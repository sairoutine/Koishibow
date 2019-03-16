'use strict';
var _ = require('i18n4v')
// 地下1階
// こいしの自室
// chapter0, chapter3, chapter5 にも自室が存在するので
// 当たり判定修正時はそちらも修正する
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_01",
	chapter: 5,
	bgm: "field11",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	rightField: "chapter5_02",
	leftField: null,
	background: "chapter0-myroom-bg-001",
	walkSound: "walking_bare_wood",
	initialProcess: [
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_01_50010"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				// イベント 再生
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_01_50010"]},
				{"type": "process", "value": "changeScene", "arguments": ["event_talk", "chapter5-01-event-01"]},
			],
		]},

		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_myroom_50025"], "process": [
			// すでにアクセス済み
			[],
			// まだ未アクセス
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[
						{"chara": "koishi", "exp": "yes", "serif":_("よく寝た！")},
					]
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_myroom_50025"]}
			],
		]},

		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5-03-event-10630"], "process": [
			// アライグマ出現済み
			[
				{"type": "criteria", "value": "isPlayed", "arguments": ["chapter5_myroom_10665"], "process": [
					// すでにアクセス済み
					[],
					// まだ未アクセス
					[
						{"type": "process", "value": "playTalk", "arguments": [
							[
								{"chara": "animal_araiguma","exp": "animal_araiguma-wait", "serif": _("くくくくく")},
								{"chara": "animal_araiguma","exp": "animal_araiguma-wait", "serif": _("キュ")},
							]
						]},
						{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter5_myroom_10665"]}
					],
				]},
			],
			// アライグマ未出現
			[
			],
		]},
	],
	objects: [
		{
			no: ++I,
			image: "chapter0-myroom-obj-01-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "ベッド",
			serif: [
				{"chara": "koishi", "serif":_("もう一杯寝た！")},
			],
			x: 258, y: 389,
			scale: 0.7,
			action_name: "touch",
			sound_name: "touch"
		},
		{
			no: ++I,
			image: "chapter0-myroom-obj-05-01",
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "キャビネット",
			serif: [
				{"chara": "koishi","serif":_("あけたくない")},
			],
			x: 59, y: 496,
			scale: 0.7,
			action_name: "touch",
			sound_name: "touch",
			target_x: 167, target_y: 531
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "本",
			serif: [
				{"chara": "koishi","serif":_("この日記")},
				{"chara": "koishi","serif":_("ページなくなっちゃってる！")},
				{"chara": "koishi","serif":_("だれがとったの！？"), "option": {"getJournal": "journal0XX"}}, // TODO: ジャーナルを設定
			],
			x: 340, y: 530,
			scale: 0.7,
			anime1: "chapter0-myroom-obj-02-01-obj01",
			anime2: "chapter0-myroom-obj-02-01-obj02",
			anime3: "chapter0-myroom-obj-02-01-obj03",
			width: 80, height: 80,
			action_name: "look_bottom",
			sound_name: "chapter0-myroom-open_book",
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "クレヨン",
			serif: [
				{"chara": "koishi","serif":_("あはは")},
				{"chara": "koishi","serif":_("もういらないもーん")},
			],
			x: 600, y: 530,
			scale: 0.7,
			anime1: "chapter0-myroom-obj-03-01-obj01",
			anime2: "chapter0-myroom-obj-03-01-obj02",
			anime3: "chapter0-myroom-obj-03-01-obj03",
			width: 80, height: 80,
			action_name: "look_bottom",
			sound_name: "chapter0-myroom-move_crayon",
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "まど",
			serif: [
				{"chara": "koishi","serif":_("また来てる！")},
				{"chara": "koishi","serif":_("誰？")},
			],
			x: 5, y: 180,
			scale: 0.7,
			anime1: "chapter0-myroom-obj-04-01-obj01",
			anime2: "chapter0-myroom-obj-04-01-obj02",
			anime3: "chapter0-myroom-obj-04-01-obj03",
			action_name: "look_top",
			sound_name: "chapter0-myroom-sound_window_for_kokoro",
			height: 700,
			target_x: 177, target_y: 531
		},
		{
			no: ++I,
			image: null,
			type: CONSTANT.STATIC_IMAGE_TYPE,
			name: "部屋の隅",
			serif: [
				{"chara": "koishi","serif":_("じょーん")},
				{"chara": "koishi","serif":_("出てこないなー")},
			],
			width: 150, height: 200,
			x: 670, y: 300,
			scale: 2/3,
			target_x: 532, target_y: 418,
			action_name: "look_front",
			sound_name: null,
		},
		{
			no: "animal_araiguma",
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "アライグマ",
			loop: true,
			serif_back: [
				{"chara": "koishi","exp": "look_front", "serif": _("ちょっと！")},
				{"chara": "koishi","exp": null, "serif": _("目玉を転がしたのあなた？")},
				{"chara": "animal_araiguma","exp": "animal_araiguma-ura_wait", "serif": _("目玉？")},
				{"chara": "animal_araiguma","exp": "animal_araiguma-ura_wait", "serif": _("知らないよおそんなの")},
				{"chara": "koishi","exp": "look_top", "serif": _("ほんとう？")},
				{"chara": "animal_araiguma","exp": "animal_araiguma-ura_wait", "serif": _("でも目玉かあ")},
				{"chara": "animal_araiguma","exp": "animal_araiguma-ura_reaction_01", "serif": _("見せてくれよ")},
				{"chara": "koishi","exp": "yes", "serif": _("うん"), "option": {"useItem": "31"}},
				{"chara": "animal_araiguma","exp": "animal_araiguma-ura_reaction_02", "serif": _("グシグシグシ")},
				{"chara": "animal_araiguma","exp": "animal_araiguma-ura_reaction_01", "serif": _("ほら、磨いたぞ！"), "option": {"getItem": "31"}},
				{"chara": "koishi","exp": "look_front", "serif": _("えぇ")},
				{"chara": "animal_araiguma","exp": "animal_araiguma-ura_wait", "serif": _("この目玉誰から引っこ抜いたんだろうなあ")},
				{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
				{"chara": "animal_araiguma","exp": "animal_araiguma-ura_wait", "serif": _("どこかで見たんだけどなあ")},
				{"chara": "koishi","exp": null, "serif": _("......")},
				{"id": "chapter5-myroom-araiguma_talk1", "save": true},
			],
			serif: [
			],
			x: 600, y: 300,
			scale: 2/3,
			anime1: "animal_araiguma-wait",
			anime2: null,
			anime3: null,
			anime4: "animal_araiguma-reverse_ura",
			anime5: "animal_araiguma-ura_wait",
			anime6: "animal_araiguma-reverse_omote",
			width:  150,
			height: 350,
			action_name: null,
			sound_name: null,
			not_show_if_event_true: "chapter5-03-event-10630",
		},


	],
};

