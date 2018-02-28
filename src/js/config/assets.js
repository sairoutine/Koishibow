'use strict';

var AssetsConfig = {};

AssetsConfig.images = {
	// HowTo 画像
	"howto":            "./image/howto.png",
	// タイトル放置案 背景
	leaving_title:      "./image/leaving_title.png",


	// マウスカーソル
	"ui_icon_pointer_01":            {
		image: "./image/ui_icon_pointer_01.png",
		scale_width: 2/3,
		scale_height: 2/3,
	},
	"ui_icon_pointer_02":            {
		image: "./image/ui_icon_pointer_02.png",
		scale_width: 2/3,
		scale_height: 2/3,
	},

	// こいし画像
	"koishi":                "./image/koishi.png",

	// こころ画像
	"kokoro":                "./image/kokoro.png",

	// 3rdeye 使用時のもや
	"black_mist":            "./image/black_mist.png",
	// 3rdeye 使用時の光
	"light":  "./image/light.png",

	// 帽子獲得イベント
	"get_hat_bg":  "./image/chapter0/event/get_hat/bg.png",

	// こいしが落ちるイベント
	"bg01_for_falldown_koishi":  "./image/chapter0/event/falldown_koishi/bg01_for_falldown_koishi.jpg",
	"door":  "./image/chapter0/event/falldown_koishi/door.png",
	"shadow":  "./image/chapter0/event/falldown_koishi/shadow.png",

	// さとり邂逅イベント
	"chapter0-mspassage-bg-002_event":  "./image/chapter0/event/encounter_satori/chapter0-mspassage-bg-002_event.jpg",
	"eye":  "./image/chapter0/event/encounter_satori/eye.png",
	"str":  "./image/chapter0/event/encounter_satori/str.png",

	// ジャーナル画像
	"journal001":  "./image/journal/001.png",
	"journal002":  "./image/journal/002.png",
	"journal003":  "./image/journal/003.png",
	"journal004":  "./image/journal/004.png",
	"journal005":  "./image/journal/005.png",

	// フィールドの画像とオブジェクト
	"chapter0-myroom-bg-001":    "./image/chapter0/myroom/chapter0-myroom-bg-001.jpg",
	"chapter0-myroom-obj-01-01": "./image/chapter0/myroom/chapter0-myroom-obj-01-01.png",
	"chapter0-myroom-obj-02-01": "./image/chapter0/myroom/chapter0-myroom-obj-02-01.png",
	"chapter0-myroom-obj-03-01": "./image/chapter0/myroom/chapter0-myroom-obj-03-01.png",
	"chapter0-myroom-obj-04-01": "./image/chapter0/myroom/chapter0-myroom-obj-04-01.png",
	"chapter0-myroom-obj-05-01": "./image/chapter0/myroom/chapter0-myroom-obj-05-01.png",
	"chapter0-myroom-obj-07-01": "./image/chapter0/myroom/chapter0-myroom-obj-07-01.png",




	"chapter0-hospital_corridor1-bg-001":    "./image/chapter0/hospital_corridor1/chapter0-hospital-bg-001.jpg",
	"chapter0-hospital_corridor1-obj-01-01": "./image/chapter0/hospital_corridor1/chapter0-hospital-obj-01-01.png",
	"chapter0-hospital_corridor1-obj-02-01": "./image/chapter0/hospital_corridor1/chapter0-hospital-obj-02-01.png",
	"chapter0-hospital_corridor1-obj-03-01": "./image/chapter0/hospital_corridor1/chapter0-hospital-obj-03-01.png",
	"chapter0-hospital_corridor1-obj-04-01": "./image/chapter0/hospital_corridor1/chapter0-hospital-obj-04-01.png",

	"chapter0-hospital2-bg-001":        "./image/chapter0/hospital_corridor2/chapter0-hospital2-bg-001.jpg",
	"chapter0-hospital2-obj-01-01": "./image/chapter0/hospital_corridor2/chapter0-hospital2-obj-01-01.png",
	"chapter0-hospital2-obj-02-01": "./image/chapter0/hospital_corridor2/chapter0-hospital2-obj-02-01.png",
	"chapter0-hospital2-obj-03-01": "./image/chapter0/hospital_corridor2/chapter0-hospital2-obj-03-01.png",

	"chapter0-mansionpas-001":          "./image/chapter0/mansion_corridor1/chapter0-mansionpas-001.jpg",
	"chapter0-mspassage-obj-01-01": "./image/chapter0/mansion_corridor1/chapter0-mspassage-obj-01-01.png",
	"chapter0-mspassage-obj-02-01": "./image/chapter0/mansion_corridor1/chapter0-mspassage-obj-02-01.png",
	"chapter0-mspassage-obj-03-01": "./image/chapter0/mansion_corridor1/chapter0-mspassage-obj-03-01.png",

	"chapter0-mansionpas-002":          "./image/chapter0/mansion_corridor2/chapter0-mspassage-bg-002.jpg",
	"chapter0-mspassage-obj-04-01": "./image/chapter0/mansion_corridor2/chapter0-mspassage-obj-04-01.png",
	"chapter0-mspassage-obj-05-01": "./image/chapter0/mansion_corridor2/chapter0-mspassage-obj-05-01.png",
	"chapter0-mspassage-obj-06-01": "./image/chapter0/mansion_corridor2/chapter0-mspassage-obj-06-01.png",

	"chapter0-mansionpas-003":          "./image/chapter0/mansion_corridor3/chapter0-mspassage-bg-003.jpg",
	"chapter0-mspassage-obj-07-01": "./image/chapter0/mansion_corridor3/chapter0-mspassage-obj-07-01.png",
	"chapter0-mspassage-obj-08-01": "./image/chapter0/mansion_corridor3/chapter0-mspassage-obj-08-01.png",
	"chapter0-mspassage-obj-09-01": "./image/chapter0/mansion_corridor3/chapter0-mspassage-obj-09-01.png",
	"chapter0-mspassage-obj-10-01": "./image/chapter0/mansion_corridor3/chapter0-mspassage-obj-10-01.png",
	"chapter0-mspassage-obj-11-01": "./image/chapter0/mansion_corridor3/chapter0-mspassage-obj-11-01.png",

	// アイテム 目薬
	item_01:            "./image/item/icon_item_eyedrops01.png",
	item_01_selected:   "./image/item/icon_item_eyedrops02.png",

	// 体験版時のコンティニュー画像
	tobecontinued:  "./image/tobecontinued.png",

	// フィールド上に落ちているジャーナル オブジェクト
	paper:              "./image/chapterall-obj-02-01.png",
	// フィールド上に落ちている目薬 オブジェクト
	eyedrops:           "./image/chapterall-obj-01-01.png",

	// 画面遷移用やじるし
	arrow:  "./image/ui-common-btn-arrow-wht.png",
	// アイテムボタン
	tool: "./image/ui-common-btn-tool-1.png",
	// 第三の目
	eye1:  "./image/ui-common-btn-eye-1.png",
	eye2:  "./image/ui-common-btn-eye-2.png",
	eye3:  "./image/ui-common-btn-eye-3.png",
	eye4:  "./image/ui-common-btn-eye-4.png",

	// ふきだし
	fukidashi:  "./image/ui-common-frame-talk1-brn.png",
	fukidashi_gray:  "./image/ui-common-frame-talk1-gry.png",
	fukidashi_arrow:  "./image/ui-common-btn-arrow-brn.png",

	// ここを選択せよ、的な矢印
	target_arrow:  "./image/ui-common-btn-arrow-gry.png",

	// メニュー
	"ui-common-bg-toolpu-blk":   "./image/menu/ui-common-bg-toolpu-blk.png",
	"ui-common-btn-toolpu-blu1": "./image/menu/ui-common-btn-toolpu-blu1.png",
	"ui-common-btn-toolpu-blu2": "./image/menu/ui-common-btn-toolpu-blu2.png",
	"ui-common-frame-toolpu":    "./image/menu/ui-common-frame-toolpu.png",

	// タイトル画面
	"ui-titlepg-btn-con-off":  "./image/title/ui-titlepg-btn-con-off.png",
	"ui-titlepg-btn-con-on":   "./image/title/ui-titlepg-btn-con-on.png",
	"ui-titlepg-btn-ng-off":   "./image/title/ui-titlepg-btn-ng-off.png",
	"ui-titlepg-btn-ng-on":    "./image/title/ui-titlepg-btn-ng-on.png",
	"ui-titlepg-btn-opt-off":  "./image/title/ui-titlepg-btn-opt-off.png",
	"ui-titlepg-btn-opt-on":   "./image/title/ui-titlepg-btn-opt-on.png",
	"ui-titlepg-img-logo-1":   "./image/title/ui-titlepg-img-logo-1.png",

	// タイトル画面アニメ
	"mask":  "./image/title/mask.png",
	"noize":  "./image/title/noize.jpg",
	"stain":  "./image/title/stain.png",
	"title":  "./image/title/title.jpg",

	// 1枚絵
	"picture_get_hat":   "./image/picture/illust_01.png",
	"picture_use_eyedrops":   "./image/picture/illust_02.png",

	// 不要
	//paper_clip:  "./image/ui-common-frame-paper_clip.png",
	//paper_close_button: "./image/ui-common-btn-close.png",
	//paper_open:         "./image/ui-common-frame-paper.png",
};

AssetsConfig.sounds = {
	leaving_title: {
		path: "./sound/leaving_title.ogg",
		volume: 1.0,
	},
	show_journal:    {
		path: "./sound/show_journal.ogg",
		volume: 1.0,
	},
	got_item:    {
		path: "./sound/got_item.ogg",
		volume: 1.0,
	},
	open_menu:    {
		path: "./sound/open_menu.ogg",
		volume: 1.0,
	},
	select_item:    {
		path: "./sound/select_item.ogg",
		volume: 1.0,
	},
	select_title:    {
		path: "./sound/select_title.ogg",
		volume: 1.0,
	},
	focuson_title:    {
		path: "./sound/focuson_title.ogg",
		volume: 1.0,
	},
	use_3rdeye:    {
		path: "./sound/use_3rdeye.ogg",
		volume: 1.0,
	},
	progress_bloodshot:    {
		path: "./sound/progress_bloodshot.ogg",
		volume: 1.0,
	},
	progress_bloodshot_last:    {
		path: "./sound/progress_bloodshot_last.ogg",
		volume: 1.0,
	},
	use_eyedrops:    {
		path: "./sound/use_eyedrops.ogg",
		volume: 1.0,
	},

	"chapter0_myroom-get_hat":    {
		path: "./sound/chapter0/myroom/get_hat.ogg",
		volume: 1.0,
	},
	"chapter0-myroom-door_open":    {
		path: "./sound/chapter0/myroom/door_open.ogg",
		volume: 1.0,
	},

	"chapter0-myroom-open_book":    {
		path: "./sound/chapter0/myroom/open_book.ogg",
		volume: 1.0,
	},
	"chapter0-myroom-move_crayon":    {
		path: "./sound/chapter0/myroom/move_crayon.ogg",
		volume: 0.7,
	},
	"chapter0-myroom-sound_window_for_kokoro":    {
		path: "./sound/chapter0/myroom/sound_window_for_kokoro.ogg",
		volume: 1.0,
	},
	"chapter0-hospital_corridor1-sound_aidkit":    {
		path: "./sound/chapter0/hospital_corridor1/sound_aidkit.ogg",
		volume: 1.0,
	},
	"chapter0-hospital_corridor1-sound_strecher":    {
		path: "./sound/chapter0/hospital_corridor1/sound_strecher.ogg",
		volume: 1.0,
	},
	"chapter0-hospital_corridor2-move_wheelchair":    {
		path: "./sound/chapter0/hospital_corridor2/move_wheelchair.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-lamp_back":    {
		path: "./sound/chapter0/mansion_corridor1/lamp_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-lamp_front":    {
		path: "./sound/chapter0/mansion_corridor1/lamp_front.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-move_tricycle":    {
		path: "./sound/chapter0/mansion_corridor1/move_tricycle.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-open_curtain":    {
		path: "./sound/chapter0/mansion_corridor1/open_curtain.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor2-flower_back":    {
		path: "./sound/chapter0/mansion_corridor2/flower_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor2-flower_front":    {
		path: "./sound/chapter0/mansion_corridor2/flower_front.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor2-open_door":    {
		path: "./sound/chapter0/mansion_corridor2/open_door.ogg",
		volume: 1.0,
	},

	"chapter0-mansion_corridor2-event_out":    {
		path: "./sound/chapter0/mansion_corridor2/event/event_out.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor2-event_in":    {
		path: "./sound/chapter0/mansion_corridor2/event/event_in.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-ring_clock_back":    {
		path: "./sound/chapter0/mansion_corridor3/ring_clock_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-ring_clock_front":    {
		path: "./sound/chapter0/mansion_corridor3/ring_clock_front.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-sound_vase_back":    {
		path: "./sound/chapter0/mansion_corridor3/sound_vase_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-smile_kokoro_back":    {
		path: "./sound/chapter0/mansion_corridor3/smile_kokoro_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-open_and_falldown":    {
		path: "./sound/chapter0/mansion_corridor3/open_and_falldown.ogg",
		volume: 1.0,
	},
	touch:    {
		path: "./sound/touch.ogg",
		volume: 1.0,
	},
	walking_bare_default_left:    {
		path: "./sound/walking/bare_default_left.ogg",
		volume: 1.0,
	},
	walking_bare_default_right:    {
		path: "./sound/walking/bare_default_right.ogg",
		volume: 1.0,
	},
	walking_bare_wood_left:    {
		path: "./sound/walking/bare_wood_left.ogg",
		volume: 1.0,
	},
	walking_bare_wood_right:    {
		path: "./sound/walking/bare_wood_right.ogg",
		volume: 1.0,
	},

	noise1:    {
		path: "./sound/noise/noise1.ogg",
		volume: 1.0,
	},
	noise2:    {
		path: "./sound/noise/noise2.ogg",
		volume: 1.0,
	},
	noise3:    {
		path: "./sound/noise/noise3.ogg",
		volume: 1.0,
	},
	noise4:    {
		path: "./sound/noise/noise4.ogg",
		volume: 1.0,
	},
	noise5:    {
		path: "./sound/noise/noise5.ogg",
		volume: 1.0,
	},
};

AssetsConfig.bgms = {
	using_3rdeye: {
		path: "./bgm/using_3rdeye.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	title: {
		path: "./bgm/title1.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 0.9,
	},
	field1: {
		path: "./bgm/field1.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 0.9,
	},
	field2: {
		path: "./bgm/field2.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 0.9,
	},
	"chapter0-event-encounter_satori": {
		path: "./bgm/chapter0/event/encounter_satori.ogg",
		volume: 0.6,
	},
	"chapter0-mansion_corridor1-tricycle": {
		path: "./bgm/chapter0/mansion_corridor1/tricycle.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-wind": {
		path: "./bgm/chapter0/mansion_corridor1/wind.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-clock": {
		path: "./bgm/chapter0/mansion_corridor3/clock.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
		volume: 1.0,
	},

};

AssetsConfig.fonts = {
	"OradanoGSRR": {
		path: "OradanoGSRR.ttf",
		format: "truetype",
	},
};
module.exports = AssetsConfig;
