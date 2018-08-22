'use strict';

var CONSTANT = require('./constant');
var i18n = require('i18n4v');
var translations = {
	'en'   : require('./data/translation/en.json'),
	'ja'   : require('./data/translation/ja.json'),
};
i18n.translator.add(translations[CONSTANT.LANGUAGE]);

var Game = require('./game');

var game;

window.onload = function() {
	// Canvas
	var mainCanvas = document.getElementById('mainCanvas');
	// Game オブジェクト
	game = new Game(mainCanvas);
	// イベントハンドラの設定
	game.setupEvents();
	// 初期化
	game.init();
	// デバッグ設定
	if (CONSTANT.DEBUG.ON) {
		var debugDOM = document.getElementById('debug');
		game.setupDebug(debugDOM);
	}

	// ゲーム起動
	game.startRun();

	// for phantomjs headless test
	window.game = game;
};
window.changeFullScreen = function () {
	game.fullscreen();
};

// Electron のレンダラプロセスならば
if(window.require) {
	window.require('electron').webFrame.setVisualZoomLevelLimits(1,1); //zoomさせない
}
