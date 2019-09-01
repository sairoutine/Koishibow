'use strict';

var CONSTANT = require('./constant');

// 多言語変換
// NOTE: game class を require する前に実行すること
//       data 配下の json が require される前に実行する必要があるため
var i18n = require('i18n4v');
i18n.translator.add({
	'en'   : require('./data/translation/en.json'),
	'ja'   : require('./data/translation/ja.json'),
	'ch'   : require('./data/translation/ch.json'),
}[CONSTANT.LANGUAGE]);


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

		// 背景色をデバッグ時は白へ
		var body = document.getElementsByTagName('body')[0];
		body.setAttribute("bgcolor", 'white');
	}

	// ゲーム起動
	game.startRun();

	// for phantomjs headless test
	window.game = game;
};
window.changeFullScreen = function () {
	game.fullscreen();
};


