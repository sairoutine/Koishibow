'use strict';
var AssetsConfig = {};

AssetsConfig.images = {
	// こころ画像
	"kokoro": "./image/common/kokoro.png",
	// 帽子獲得イベント
	"get_hat_bg":  "./image/common/chapter0/event/get_hat/bg.png",

	// こいしが落ちるイベント
	"chapter0-mspassage-event-02-obj-10-01":  "./image/common/chapter0/event/falldown_koishi/chapter0-mspassage-event-02-obj-10-01.png",
	"chapter0-mspassage-event-02_bg01":  "./image/common/chapter0/event/falldown_koishi/chapter0-mspassage-event-02_bg01.jpg",
	"chapter0-mspassage-event-02_black_mist":  "./image/common/chapter0/event/falldown_koishi/chapter0-mspassage-event-02_black_mist.png",
	"chapter0-mspassage-event-02_door":  "./image/common/chapter0/event/falldown_koishi/chapter0-mspassage-event-02_door.png",
	"chapter0-mspassage-event-02_koishi":  "./image/common/chapter0/event/falldown_koishi/chapter0-mspassage-event-02_koishi.png",
	"chapter0-mspassage-event-02_shadow":  "./image/common/chapter0/event/falldown_koishi/chapter0-mspassage-event-02_shadow.png",

	// さとり邂逅イベント
	"chapter0-mspassage-bg-002_event":  "./image/common/chapter0/event/encounter_satori/chapter0-mspassage-bg-002_event.jpg",
	"eye":  "./image/common/chapter0/event/encounter_satori/eye.png",
	"str":  "./image/common/chapter0/event/encounter_satori/str.png",

	//
	// フィールドの画像とオブジェクト
	//

	// chapter0
	"chapter0-myroom-bg-001":    "./image/common/chapter0/myroom/chapter0-myroom-bg-001.jpg",
	"chapter0-myroom-obj-01-01": "./image/common/chapter0/myroom/chapter0-myroom-obj-01-01.png",
	"chapter0-myroom-obj-02-01": "./image/common/chapter0/myroom/chapter0-myroom-obj-02-01.png",
	"chapter0-myroom-obj-03-01": "./image/common/chapter0/myroom/chapter0-myroom-obj-03-01.png",
	"chapter0-myroom-obj-04-01": "./image/common/chapter0/myroom/chapter0-myroom-obj-04-01.png",
	"chapter0-myroom-obj-05-01": "./image/common/chapter0/myroom/chapter0-myroom-obj-05-01.png",
	"chapter0-myroom-obj-07-01": "./image/common/chapter0/myroom/chapter0-myroom-obj-07-01.png",

	"chapter0-hospital_corridor1-bg-001":    "./image/common/chapter0/hospital_corridor1/chapter0-hospital-bg-001.jpg",
	"chapter0-hospital_corridor1-obj-01-01": "./image/common/chapter0/hospital_corridor1/chapter0-hospital-obj-01-01.png",
	"chapter0-hospital_corridor1-obj-02-01": "./image/common/chapter0/hospital_corridor1/chapter0-hospital-obj-02-01.png",
	"chapter0-hospital_corridor1-obj-03-01": "./image/common/chapter0/hospital_corridor1/chapter0-hospital-obj-03-01.png",
	"chapter0-hospital_corridor1-obj-04-01": "./image/common/chapter0/hospital_corridor1/chapter0-hospital-obj-04-01.png",

	"chapter0-hospital2-bg-001":    "./image/common/chapter0/hospital_corridor2/chapter0-hospital2-bg-001.jpg",
	"chapter0-hospital2-obj-01-01": "./image/common/chapter0/hospital_corridor2/chapter0-hospital2-obj-01-01.png",
	"chapter0-hospital2-obj-02-01": "./image/common/chapter0/hospital_corridor2/chapter0-hospital2-obj-02-01.png",
	"chapter0-hospital2-obj-03-01": "./image/common/chapter0/hospital_corridor2/chapter0-hospital2-obj-03-01.png",

	"chapter0-mansionpas-001":      "./image/common/chapter0/mansion_corridor1/chapter0-mansionpas-001.jpg",
	"chapter0-mspassage-obj-01-01": "./image/common/chapter0/mansion_corridor1/chapter0-mspassage-obj-01-01.png",
	"chapter0-mspassage-obj-02-01": "./image/common/chapter0/mansion_corridor1/chapter0-mspassage-obj-02-01.png",
	"chapter0-mspassage-obj-03-01": "./image/common/chapter0/mansion_corridor1/chapter0-mspassage-obj-03-01.png",

	"chapter0-mansionpas-002":      "./image/common/chapter0/mansion_corridor2/chapter0-mspassage-bg-002.jpg",
	"chapter0-mspassage-obj-04-01": "./image/common/chapter0/mansion_corridor2/chapter0-mspassage-obj-04-01.png",
	"chapter0-mspassage-obj-05-01": "./image/common/chapter0/mansion_corridor2/chapter0-mspassage-obj-05-01.png",
	"chapter0-mspassage-obj-06-01": "./image/common/chapter0/mansion_corridor2/chapter0-mspassage-obj-06-01.png",

	"chapter0-mansionpas-003":      "./image/common/chapter0/mansion_corridor3/chapter0-mspassage-bg-003.jpg",
	"chapter0-mspassage-obj-07-01": "./image/common/chapter0/mansion_corridor3/chapter0-mspassage-obj-07-01.png",
	"chapter0-mspassage-obj-08-01": "./image/common/chapter0/mansion_corridor3/chapter0-mspassage-obj-08-01.png",
	"chapter0-mspassage-obj-09-01": "./image/common/chapter0/mansion_corridor3/chapter0-mspassage-obj-09-01.png",
	"chapter0-mspassage-obj-10-01": "./image/common/chapter0/mansion_corridor3/chapter0-mspassage-obj-10-01.png",
	"chapter0-mspassage-obj-11-01": "./image/common/chapter0/mansion_corridor3/chapter0-mspassage-obj-11-01.png",

};

AssetsConfig.sounds = {
	"chapter0-myroom-door_open":    {
		path: "./sound/common/chapter0/myroom/door_open.ogg",
		volume: 1.0,
	},

	"chapter0-myroom-open_book":    {
		path: "./sound/common/chapter0/myroom/open_book.ogg",
		volume: 1.0,
	},
	"chapter0-myroom-move_crayon":    {
		path: "./sound/common/chapter0/myroom/move_crayon.ogg",
		volume: 0.7,
	},
	"chapter0-myroom-sound_window_for_kokoro":    {
		path: "./sound/common/chapter0/myroom/sound_window_for_kokoro.ogg",
		volume: 1.0,
	},
	"chapter0-hospital_corridor1-sound_aidkit":    {
		path: "./sound/common/chapter0/hospital_corridor1/sound_aidkit.ogg",
		volume: 1.0,
	},
	"chapter0-hospital_corridor1-sound_strecher":    {
		path: "./sound/common/chapter0/hospital_corridor1/sound_strecher.ogg",
		volume: 1.0,
	},
	"chapter0-hospital_corridor2-move_wheelchair":    {
		path: "./sound/common/chapter0/hospital_corridor2/move_wheelchair.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-lamp_back":    {
		path: "./sound/common/chapter0/mansion_corridor1/lamp_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-lamp_front":    {
		path: "./sound/common/chapter0/mansion_corridor1/lamp_front.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-move_tricycle":    {
		path: "./sound/common/chapter0/mansion_corridor1/move_tricycle.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor1-open_curtain":    {
		path: "./sound/common/chapter0/mansion_corridor1/open_curtain.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor2-flower_back":    {
		path: "./sound/common/chapter0/mansion_corridor2/flower_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor2-flower_front":    {
		path: "./sound/common/chapter0/mansion_corridor2/flower_front.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor2-open_door":    {
		path: "./sound/common/chapter0/mansion_corridor2/open_door.ogg",
		volume: 1.0,
	},

	"chapter0-mansion_corridor3-ring_clock_back":    {
		path: "./sound/common/chapter0/mansion_corridor3/ring_clock_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-ring_clock_front":    {
		path: "./sound/common/chapter0/mansion_corridor3/ring_clock_front.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-sound_vase_back":    {
		path: "./sound/common/chapter0/mansion_corridor3/sound_vase_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-smile_kokoro_back":    {
		path: "./sound/common/chapter0/mansion_corridor3/smile_kokoro_back.ogg",
		volume: 1.0,
	},
	"chapter0-mansion_corridor3-open_and_falldown":    {
		path: "./sound/common/chapter0/mansion_corridor3/open_and_falldown.ogg",
		volume: 1.0,
	},
	chapter0_noise1:    {
		path: "./sound/common/noise/chapter0/noise1.ogg",
		volume: 1.0,
	},
	chapter0_noise2:    {
		path: "./sound/common/noise/chapter0/noise2.ogg",
		volume: 1.0,
	},
	chapter0_noise3:    {
		path: "./sound/common/noise/chapter0/noise3.ogg",
		volume: 1.0,
	},
	chapter0_noise4:    {
		path: "./sound/common/noise/chapter0/noise4.ogg",
		volume: 1.0,
	},
	chapter0_noise5:    {
		path: "./sound/common/noise/chapter0/noise5.ogg",
		volume: 1.0,
	},
};

AssetsConfig.bgms = [
];

AssetsConfig.fonts = {};

module.exports = AssetsConfig;
