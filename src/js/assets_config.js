'use strict';

var AssetsConfig = {};
AssetsConfig.images = {
	"koishi.png":                "./image/koishi.png",
	"chapter0-myroom-bg-001":    "./image/chapter0/myroom/chapter0-myroom-bg-001.jpg",
	"chapter0-myroom-obj-01-01": "./image/chapter0/myroom/chapter0-myroom-obj-01-01.png",
	"chapter0-myroom-obj-02-01.png": "./image/chapter0/myroom/chapter0-myroom-obj-02-01.png",
	"chapter0-myroom-obj-03-01.png": "./image/chapter0/myroom/chapter0-myroom-obj-03-01.png",
	"chapter0-myroom-obj-04-01.png": "./image/chapter0/myroom/chapter0-myroom-obj-04-01.png",
	"chapter0-myroom-obj-05-01": "./image/chapter0/myroom/chapter0-myroom-obj-05-01.png",

	"chapter0-hospital_corridor1-bg-001":    "./image/chapter0/hospital_corridor1/chapter0-hospital-bg-001.jpg",
	"chapter0-hospital_corridor1-obj-01-01": "./image/chapter0/hospital_corridor1/chapter0-hospital-obj-01-01.png",
	"chapter0-hospital_corridor1-obj-02-01": "./image/chapter0/hospital_corridor1/chapter0-hospital-obj-02-01.png",
	"chapter0-hospital_corridor1-obj-03-01": "./image/chapter0/hospital_corridor1/chapter0-hospital-obj-03-01.png",
	"chapter0-hospital_corridor1-obj-04-01": "./image/chapter0/hospital_corridor1/chapter0-hospital-obj-04-01.png",

	"chapter0-hospital2-bg-001":        "./image/chapter0/hospital_corridor2/chapter0-hospital2-bg-001.jpg",
	"chapter0-hospital2-obj-01-01.png": "./image/chapter0/hospital_corridor2/chapter0-hospital2-obj-01-01.png",
	"chapter0-hospital2-obj-02-01": "./image/chapter0/hospital_corridor2/chapter0-hospital2-obj-02-01.png",
	"chapter0-hospital2-obj-03-01.png": "./image/chapter0/hospital_corridor2/chapter0-hospital2-obj-03-01.png",


	"chapter0-mansionpas-001":          "./image/chapter0/mansion_corridor1/chapter0-mansionpas-001.jpg",
	"chapter0-mspassage-obj-01-01.png": "./image/chapter0/mansion_corridor1/chapter0-mspassage-obj-01-01.png",
	"chapter0-mspassage-obj-02-01.png": "./image/chapter0/mansion_corridor1/chapter0-mspassage-obj-02-01.png",
	"chapter0-mspassage-obj-03-01.png": "./image/chapter0/mansion_corridor1/chapter0-mspassage-obj-03-01.png",

	"chapter0-mansionpas-002":          "./image/chapter0/mansion_corridor2/chapter0-mspassage-bg-002.jpg",
	"chapter0-mspassage-obj-04-01.png": "./image/chapter0/mansion_corridor2/chapter0-mspassage-obj-04-01.png",
	"chapter0-mspassage-obj-05-01.png": "./image/chapter0/mansion_corridor2/chapter0-mspassage-obj-05-01.png",
	"chapter0-mspassage-obj-06-01.png": "./image/chapter0/mansion_corridor2/chapter0-mspassage-obj-06-01.png",

	// TODO: delete
	bg:  "./image/bg.png",

	light:  "./image/light.png",

	// 画面遷移用やじるし
	arrow:  "./image/ui-common-btn-arrow-wht.png",

	// アイテムボタン
	tool: "./image/ui-common-btn-tool-1.png",
	// 第三の目
	eye:  "./image/ui-common-btn-eye-1.png",

	fukidashi:  "./image/ui-common-frame-talk1-brn.png",

	// メニュー
	"ui-common-bg-toolpu-blk":   "./image/menu/ui-common-bg-toolpu-blk.png",
	"ui-common-btn-toolpu-blu1": "./image/menu/ui-common-btn-toolpu-blu1.png",
	"ui-common-btn-toolpu-blu2": "./image/menu/ui-common-btn-toolpu-blu2.png",
	"ui-common-frame-toolpu":    "./image/menu/ui-common-frame-toolpu.png",

	// タイトル画面
	"ui-titlepg-bg-1":         "./image/title/ui-titlepg-bg-1.jpg",
	"ui-titlepg-btn-con-off":  "./image/title/ui-titlepg-btn-con-off.png",
	"ui-titlepg-btn-con-on":   "./image/title/ui-titlepg-btn-con-on.png",
	"ui-titlepg-btn-ng-off":   "./image/title/ui-titlepg-btn-ng-off.png",
	"ui-titlepg-btn-ng-on":    "./image/title/ui-titlepg-btn-ng-on.png",
	"ui-titlepg-btn-opt-off":  "./image/title/ui-titlepg-btn-opt-off.png",
	"ui-titlepg-btn-opt-on":   "./image/title/ui-titlepg-btn-opt-on.png",
	"ui-titlepg-img-logo-1":   "./image/title/ui-titlepg-img-logo-1.png",
};

AssetsConfig.sounds = {
	// TODO: chapter 間やフィールド間でも音が被っても大丈夫なようにする
	get_hat:    {
		path: "./sound/chapter0/myroom/get_hat.ogg",
		volume: 1.0,
	},
	open_book:    {
		path: "./sound/chapter0/myroom/open_book.ogg",
		volume: 1.0,
	},
	door_open:    {
		path: "./sound/chapter0/myroom/door_open.ogg",
		volume: 1.0,
	},
	move_crayon:    {
		path: "./sound/chapter0/myroom/move_crayon.ogg",
		volume: 1.0,
	},
	sound_window:    {
		path: "./sound/chapter0/myroom/sound_window.ogg",
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
	title: {
		path: "./bgm/title1.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
	},

	field1: {
		path: "./bgm/field1.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
	},
	field2: {
		path: "./bgm/field2.ogg",
		loopStart: 0*60 + 0 + 0.000,
		//loopEnd: 1*60 + 47 + 0.027,
	},

};


module.exports = AssetsConfig;
