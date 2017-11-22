'use strict';
var Game = require('./game');
var CONSTANT = require('./constant');

var game;

window.onload = function() {
	// Canvas
	var mainCanvas = document.getElementById('mainCanvas');
	// Game オブジェクト
	game = new Game(mainCanvas);
	// 初期化
	game.init();
	// イベントハンドラの設定
	game.setupEvents();

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
window.onerror = function (msg, file, line, column, err) {
	/*
	msg: error message
	file: file path
	line: row number
	column: column number
	err: error object
	*/ 
	//window.alert(msg + "\n" + line + ":" + column);
};
window.changeFullScreen = function () {
	game.fullscreen();
};

// Electron のレンダラプロセスならば
if(window.require) {
	window.require('electron').webFrame.setVisualZoomLevelLimits(1,1); //zoomさせない
}


