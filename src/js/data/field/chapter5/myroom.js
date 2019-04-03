'use strict';
var _ = require('i18n4v')
// 地下1階
// こいしの自室
// chapter0(帽子あり・なし), chapter3, chapter5, chapter6(帽子あり・なし) にも自室が存在するので
// 当たり判定修正時はそちらも修正する
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter5_01",
	chapter: 5,
	bgm: "field11",
	rightStartPosition: {x: 790, y: 480},
	leftStartPosition:  {x: 140, y: 480},
	upStartPosition:    null,
	downStartPosition:  null,
	rightField: "chapter5_02",
	leftField: null,
	upField: null,
	downField: null,
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
						{"chara": "koishi", "exp": "yes",  serif1: _("よく寝た！"), serif2: _("よく寝た！"), serif3: _("よく寝た！"), serif4: _("よく寝た！")},
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
								{"chara": "animal_araiguma","exp": "animal_araiguma-wait",  serif1: _("くくくくく"), serif2: _("くくくくく"), serif3: _("くくくくく"), serif4: _("くくくくく")},
								{"chara": "animal_araiguma","exp": "animal_araiguma-wait",  serif1: _("キュ"), serif2: _("キュ"), serif3: _("キュ"), serif4: _("キュ"), "option": {"getJournal": "journal033"}},
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
				{"chara": "koishi",  serif1: _("もう一杯寝た！"), serif2: _("もう一杯寝た！"), serif3: _("もう寝ていられないわ"), serif4: _("もう寝ていられないわ")},
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
				{"chara": "koishi", serif1: _("あけたくない"), serif2: _("あけたくない"), serif3: _("ここおっきな蜘蛛がいるのよ！"), serif4: _("ここおっきな蜘蛛がいるのよ！")},
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
				{"chara": "koishi", serif1: _("この日記"), serif2: _("この日記"), serif3: _("この日記"), serif4: _("この日記")},
				{"chara": "koishi", serif1: _("ページなくなっちゃってる！"), serif2: _("ページなくなっちゃってる！"), serif3: _("ページなくなっちゃってる！"), serif4: _("ページなくなっちゃってる！")},
				{"chara": "koishi", serif1: _("だれがとったの！？"), serif2: _("だれがとったの！？"), serif3: _("だれがとったの！？"), serif4: _("だれがとったの！？"), "option": {"getJournal": "journal021"}},
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
				{"chara": "koishi","serif": _("あはは")},
				{"chara": "koishi", serif1: _("もういらないもーん"), serif2: _("もういらないもーん"), serif3: _("今は緑色が欲しい！"), serif4: _("今は緑色が欲しい！")},
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
				{"chara": "koishi", serif1: _("また来てる！"), serif2: _("また来てる！"), serif3: _("あの子なんなんだろう"), serif4: _("あの子なんなんだろう")},
				{"chara": "koishi","serif": _("誰？")},
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
				{"chara": "koishi", serif1: _("じょーん"), serif2: _("じょーん"), serif3: _("ジョンまだ帰ってこない"), serif4: _("ジョンまだ帰ってこない")},
				{"chara": "koishi", serif1: _("出てこないなー"), serif2: _("出てこないなー"), serif3: _("出てこないなー"), serif4: _("出てこないなー")},
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
				{"chara": "koishi","exp": "look_front",  serif1: _("ちょっと！"), serif2: _("ちょっと！"), serif3: _("ちょっと！"), serif4: _("ちょっと！")},
				{"chara": "koishi","exp": null,  serif1: _("目玉を転がしたのあなた？"), serif2: _("目玉を転がしたのあなた？"), serif3: _("目玉を転がしたのあなた？"), serif4: _("目玉を転がしたのあなた？")},
				{"chara": "animal_araiguma","exp": "animal_araiguma-ura_wait",  serif1: _("目玉？"), serif2: _("目玉？"), serif3: _("目玉？"), serif4: _("目玉？")},
				{"chara": "animal_araiguma","exp": "animal_araiguma-ura_wait",  serif1: _("知らないよおそんなの"), serif2: _("知らないよおそんなの"), serif3: _("知らないよおそんなの"), serif4: _("知らないよおそんなの")},
				{"chara": "koishi","exp": "look_top",  serif1: _("ほんとう？"), serif2: _("ほんとう？"), serif3: _("ほんとう？"), serif4: _("ほんとう？")},
				{"chara": "animal_araiguma","exp": "animal_araiguma-ura_wait",  serif1: _("でも目玉かあ"), serif2: _("でも目玉かあ"), serif3: _("でも目玉かあ"), serif4: _("でも目玉かあ")},
				{"chara": "animal_araiguma","exp": "animal_araiguma-ura_reaction_01",  serif1: _("見せてくれよ"), serif2: _("見せてくれよ"), serif3: _("見せてくれよ"), serif4: _("見せてくれよ")},
				{"chara": "koishi","exp": "yes", "serif": _("うん"), "option": {"useItem": "32"}},
				{"chara": "animal_araiguma","exp": "animal_araiguma-ura_reaction_02",  serif1: _("グシグシグシ"), serif2: _("グシグシグシ"), serif3: _("グシグシグシ"), serif4: _("グシグシグシ")},
				{"chara": "animal_araiguma","exp": "animal_araiguma-ura_reaction_01",  serif1: _("ほら、磨いたぞ！"), serif2: _("ほら、磨いたぞ！"), serif3: _("ほら、磨いたぞ！"), serif4: _("ほら、磨いたぞ！"), "option": {"getItem": "32"}},
				{"chara": "koishi","exp": "look_front",  serif1: _("えぇ"), serif2: _("えぇ"), serif3: _("えぇ"), serif4: _("えぇ")},
				{"chara": "animal_araiguma","exp": "animal_araiguma-ura_wait",  serif1: _("この目玉誰から引っこ抜いたんだろうなあ"), serif2: _("この目玉誰から引っこ抜いたんだろうなあ"), serif3: _("この目玉誰から引っこ抜いたんだろうなあ"), serif4: _("この目玉誰から引っこ抜いたんだろうなあ")},
				{"chara": "koishi","exp": "look_bottom", "serif": _("......")},
				{"chara": "animal_araiguma","exp": "animal_araiguma-ura_wait",  serif1: _("どこかで見たんだけどなあ"), serif2: _("どこかで見たんだけどなあ"), serif3: _("どこかで見たんだけどなあ"), serif4: _("どこかで見たんだけどなあ")},
				{"chara": "koishi","exp": null, "serif": _("......")},
				{"id": "chapter5-myroom-araiguma_talk1", "save": true},
			],
			serif: null,
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
			show_if_event_true: "chapter5-03-event-10630",
		},


	],
};

