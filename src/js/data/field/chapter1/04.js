'use strict';
// 小鈴ショップ
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_04",
	chapter: 1,
	bgm: "field3",
	right_start_position: {x: 690, y: 430},
	left_start_position:  {x: 180, y: 430},
	right_field: "chapter1_05",
	left_field: "chapter1_03",
	background: "chapter1-04-bg-001",
	walk_sound: "walking_bare_outside",
	objects: [
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "背景の木々",
			serif: null,
			x: 960/2, y: 720/2,
			scale: 2/3,
			anime1: "chapter1-04-obj-01-obj01",
			anime2: null,
			anime3: null,
			anime4: "chapter1-04-obj-01-obj02",
			anime5: "chapter1-04-obj-01-obj03",
			anime6: "chapter1-04-obj-01-obj04",

			action_name: null,
			sound_name: null,
			position_type: "lying",
		},
		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "電話ボックス赤",
			loop: true, // 何回でもタッチできる
			serif: [
				{"type": "criteria_serif", "criteria": "circulate", "arguments": ["chapter1_04-" + I + "circulate", 19], "serifs": [
					[
						{"chara": I,"serif":"ぷーーーー"},
					],
					[
						{"chara": I,"serif":"ぷーっぷーっぷーっ"},
					],
					[
						{"chara": I,"serif":"泣いてる子だあれ？泣いてる子は迎えに行くよ"},
					],
					[
						{"chara": I,"serif":"らりるれろ！らりるれろ！らりるれろ！"},
					],
					[
						{"chara": I,"serif":"そこで見てるのだれ？"},
					],
					[
						{"chara": I,"serif":"もしもし、どなた？"},
					],
					[
						{"chara": I,"serif":"もしもし？"},
					],
					[
						{"chara": I,"serif":"あなたなの？"},
					],
					[
						{"chara": I,"serif":"はい わたしです"},
						{"chara": I,"serif":"はい"},
						{"chara": I,"serif":"問題なく"},
						{"chara": I,"serif":"はい"},
						{"chara": I,"serif":"すべてをやり直せます"},
						{"chara": I,"serif":"彼女はいまも眠っています"},
						{"chara": I,"serif":"心的外傷を癒す時が来たのです"},
						{"chara": I,"serif":"彼女こそあなたの”ソフィー”です"},
					],
					[
						{"chara": I,"serif":"もしもし？"},
					],
					[
						{"chara": I,"serif":"迷惑なんですけど！"},
					],
					[
						{"chara": I,"serif":"ひょっとしてメリーさん？"},
					],
					[
						{"chara": I,"serif":"やめなさいよ！"},
					],
					[
						{"chara": I,"serif":"もうかけてこないで！"},
					],
					[
						{"chara": I,"serif":"ごめんなさい！"},
					],
					[
						{"chara": I,"serif":"おねがいします！"},
					],
					[
						{"chara": I,"serif":"おかけになった電話番号は\n現在使われておりません"},
					],
					[
						{"chara": I,"serif":"天気予告をお知らせいたします。"},
						{"chara": I,"serif":"明日の天気はハレ、明日の天気はハレ"},
					],
					[
						{"chara": I,"serif":"こんにちは"},
						{"chara": I,"serif":"おでんわありがとう！"},
						{"chara": I,"serif":"おはなししましょ！"},
						{"chara": I,"serif":"ばいばーい！"},
					],
					[
						{"chara": I,"serif":"火事ですか救急ですか？"},
						{"chara": "koishi","serif":"あのね、何でもないです"},
					],
					[
						{"chara": I,"serif":"火事ですか救急ですか？"},
						{"chara": I,"serif":"あのね、何でもないです"},
					],
					[
						{"chara": I,"serif":"申します申します、どちらへお繋しますか？"},
					],
					[
						{"chara": I,"serif":"おかあさん"},
						{"chara": I,"serif":"おかあさん"},
						{"chara": I,"serif":"どうして？"},
					],
				]}
			],
			x:805, y:308,
			scale: 2/3,
			anime1: "chapter1-04-obj-02-obj01",
			anime2: "chapter1-04-obj-02-obj02",
			anime3: "chapter1-04-obj-02-obj03",
			anime4: "chapter1-04-obj-02-obj04",
			anime5: "chapter1-04-obj-02-obj05",
			anime6: "chapter1-04-obj-02-obj06",
			action_name: "look_front",
			sound_name: "chapter1-04-receive_phone",
			bgm_back: "chapter1-04-call_phone",
		},

		{
			no: ++I,
			type: CONSTANT.ANIME_IMAGE_TYPE,
			name: "雑貨屋＆小鈴",
			loop: true,
			serif: [

				// 蛇口に喋りかけたあと
				{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_09-faucet-talk-1"], "serifs": [
					[
						{"type": "criteria_serif", "criteria": "limit", "arguments": ["chapter1_04-" + I + "limit-01", 1], "serifs": [
							[
								{"chara": I, "serif":"オッ熊手が欲しいのかい！"},
								{"chara": I, "serif":"それなら、えー"},
								{"chara": I, "serif":"500だ！"},
								{"chara": "koishi","serif":"500って、お金のこと？"},
							],
							[
								{"chara": I, "serif":"さ、お財布見せてごらん！"},
								{"chara": "koishi","serif":"お財布もってないの"},
								{"chara": "koishi","serif":"でも水道さんが困ってるから......"},
								{"chara": I, "serif":"あっ！", "option": {
									getItem: "08", // 熊手
								}},
								{"chara": I, "serif":"お前！"},
								{"chara": I, "serif":"待て！"},
								{"chara": I, "serif":"あっ"},
							],
						]},
					],
					[
						// 1-7
						{"chara": I,"serif":"いらっしゃい！"},
						{"chara": "koishi","serif":"ここなにやさんなの？"},
						{"chara": I,"serif":"何でも売ってるよ！"},
						{"chara": "koishi","serif":"全部屋さん......？"},
						{"chara": I,"serif":"そうよ！なにが欲しいのかしら？"},
						{"chara": "koishi","serif":"なにがほしいんだろう……"},
					],

				]}
			],
			x:293, y:260,
			scale: 2/3,
			anime1: "chapter1-04-obj-03-obj01",
			anime2: "chapter1-04-obj-03-obj02",
			anime3: "chapter1-04-obj-03-obj03",
			anime4: "chapter1-04-obj-03-obj04",
			anime5: "chapter1-04-obj-03-obj05",
			anime6: "chapter1-04-obj-03-obj06",
			action_name: null,
			sound_name: "chapter1-04-standup_kosuzu",
		},
		{
			no: ++I,
			type: CONSTANT.ITEM_TYPE,
			name: "マイク",
			image: "chapter1-04-obj-04",
			x: 970.50*2/3, y: 767.50*2/3,
			scale: 2/3,
			item_id: "07"
		},
		{
			no: ++I,
			type: CONSTANT.ITEM_TYPE,
			name: "熊手",
			image: "chapter1-04-obj-05",
			x: 655*2/3, y: 610*2/3,
			scale: 2/3,
			height: 300,
		},
	],
};

