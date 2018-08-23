'use strict';
/*
var CONSTANT = require('./constant');

// 多言語変換
// NOTE: game class を require する前に実行すること
//       data 配下の json が require される前に実行する必要があるため
var i18n = require('i18n4v');
i18n.translator.add({
	'en'   : require('./data/translation/en.json'),
	'ja'   : require('./data/translation/ja.json'),
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
*/
var ZipLoader = require('zip-loader');

var loader = new ZipLoader('./assets.zip');

loader.on( 'progress', function ( event ) {

  console.log( 'loading', event.loaded, event.total );

} );

loader.on( 'load', function ( event ) {
		Object.keys( loader.files ).forEach( ( fileName ) => {
			if ( loader.files[ fileName ].buffer.length === 0 ) return;
			console.log(fileName);
			var blob = loader.extractAsBlobUrl( fileName, guessFileType( fileName ) );
			console.log(blob);
		} );
} );

function guessFileType( fileName ) {
	return /\.jpe?g$/i.test( fileName ) ? 'image/jpeg' :
	       /\.png$/i  .test( fileName ) ? 'image/png'  :
	       /\.gif$/i  .test( fileName ) ? 'image/gif'  :
	       /\.txt$/i  .test( fileName ) ? 'text/plain' :
	       /\.js$/i   .test( fileName ) ? 'text/plain' :
	       /\.json$/i .test( fileName ) ? 'text/plain' :
	       /\.html$/i .test( fileName ) ? 'text/plain' :
	       /\.css$/i  .test( fileName ) ? 'text/plain' :
	       /\.svg$/i  .test( fileName ) ? 'text/plain' :
	       'application/octet-stream';
}


loader.load();

