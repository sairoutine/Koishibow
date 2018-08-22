'use strict';
// 小鈴ショップ
var CONSTANT = require("../../../constant");
var I = 0;
module.exports = {
	key: "chapter1_04",
	chapter: 1,
	bgm: "field3",
	rightStartPosition: {x: 690, y: 430},
	leftStartPosition:  {x: 180, y: 430},
	rightField: "chapter1_05",
	leftField: "chapter1_03",
	background: "chapter1-04-bg-001",
	walkSound: "walking_bare_outside",
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
						{"chara": I,"serif":_("ぷーーーー")},
					],
					[
						{"chara": I,"serif":_("ぷーっぷーっぷーっ")},
					],
					[
						{"chara": I,"serif":_("泣いてる子だあれ？泣いてる子は迎えに行くよ")},
					],
					[
						{"chara": I,"serif":_("らりるれろ！らりるれろ！らりるれろ！")},
					],
					[
						{"chara": I,"serif":_("そこで見てるのだれ？")},
					],
					[
						{"chara": I,"serif":_("もしもし、どなた？")},
					],
					[
						{"chara": I,"serif":_("もしもし？")},
					],
					[
						{"chara": I,"serif":_("あなたなの？")},
					],
					[
						{"chara": I,"serif":_("はい わたしです")},
						{"chara": I,"serif":_("はい")},
						{"chara": I,"serif":_("問題なく")},
						{"chara": I,"serif":_("はい")},
						{"chara": I,"serif":_("すべてをやり直せます")},
						{"chara": I,"serif":_("彼女はいまも眠っています")},
						{"chara": I,"serif":_("心的外傷を癒す時が来たのです")},
						{"chara": I,"serif":_("彼女こそあなたの”ソフィー”です")},
					],
					[
						{"chara": I,"serif":_("もしもし？")},
					],
					[
						{"chara": I,"serif":_("迷惑なんですけど！")},
					],
					[
						{"chara": I,"serif":_("ひょっとしてメリーさん？")},
					],
					[
						{"chara": I,"serif":_("やめなさいよ！")},
					],
					[
						{"chara": I,"serif":_("もうかけてこないで！")},
					],
					[
						{"chara": I,"serif":_("ごめんなさい！")},
					],
					[
						{"chara": I,"serif":_("おねがいします！")},
					],
					[
						{"chara": I,"serif":_("おかけになった電話番号は\n現在使われておりません")},
					],
					[
						{"chara": I,"serif":_("天気予告をお知らせいたします。")},
						{"chara": I,"serif":_("明日の天気はハレ、明日の天気はハレ")},
					],
					[
						{"chara": I,"serif":_("こんにちは")},
						{"chara": I,"serif":_("おでんわありがとう！")},
						{"chara": I,"serif":_("おはなししましょ！")},
						{"chara": I,"serif":_("ばいばーい！")},
					],
					[
						{"chara": I,"serif":_("火事ですか救急ですか？")},
						{"chara": "koishi","serif":_("あのね、何でもないです")},
					],
					[
						{"chara": I,"serif":_("火事ですか救急ですか？")},
						{"chara": I,"serif":_("あのね、何でもないです")},
					],
					[
						{"chara": I,"serif":_("申します申します、どちらへお繋しますか？")},
					],
					[
						{"chara": I,"serif":_("おかあさん")},
						{"chara": I,"serif":_("おかあさん")},
						{"chara": I,"serif":_("どうして？")},
					],
				]}
			],
			x:805, y:308,
			scale: 2/3,
			width: 230,
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
						{"type": "criteria_serif", "criteria": "isPlayed", "arguments": ["chapter1_04-" + I + "-_getItem-08"], "serifs": [
							[
								{"chara": I, "serif":_("熊手は役に立ったかい？")},
								{"chara": I, "serif":_("今度はちゃんとお金をもらってくるんだぞ！")},
							],
							[
								{"id": "chapter1_04-" + I + "-_getItem-08", "save": true},
								{"chara": "koishi","serif":_("熊手ある？")},
								{"chara": I, "serif":_("オッ熊手が欲しいのかい！")},
								{"chara": I, "serif":_("それなら、えー")},
								{"chara": I, "serif":_("500だ！")},
								{"chara": "koishi","serif":_("500って、お金のこと？")},
								{"chara": I, "serif":_("さ、お財布見せてごらん！")},
								{"chara": "koishi","serif":_("お財布もってないの")},
								{"chara": "koishi","serif":_("でも水道さんが困ってるから......")},
								{"chara": I, "serif":_("......")},
								{"chara": I, "serif":_("わかった、貸すだけだぞ！"), "option": {
									getItem: "08", // 熊手
								}},
							],
						]}
					],
					[
						// 1-7
						{"chara": I,"serif":_("いらっしゃい！")},
						{"chara": "koishi","serif":_("ここなにやさんなの？")},
						{"chara": I,"serif":_("何でも売ってるよ！")},
						{"chara": "koishi","serif":_("全部屋さん......？")},
						{"chara": I,"serif":_("そうよ！なにが欲しいのかしら？")},
						{"chara": "koishi","serif":_("なにがほしいんだろう……")},
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
	],
};

