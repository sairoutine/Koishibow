'use strict';
var createCanvas = require('canvas').createCanvas;
var http = require('http');

/*
var BASE_DIR_NAME = "output";
var DIR_NAME = "chapter3-06";
var FILE_NAME = "chapter3-06-bg-001.jpg";
*/

// アセット読みこみ
// 合成
// 合成アルゴリズム
// PNGファイル出力

http.createServer(function (req, res) {
	var canvas = createCanvas(200, 200)
	var ctx = canvas.getContext('2d');

	// 四角形描画
	ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
	ctx.fillRect(10, 10, 190, 190);

	// テキスト描画
	var text = "Canvas Test";
	ctx.font = '30px Impact';
	ctx.rotate(.1);
	ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
	ctx.fillText(text, 10, 100);

	// アンダーライン描画
	var te = ctx.measureText(text);
	ctx.strokeStyle = 'rgba(0,0,0,0.5)';
	ctx.beginPath();
	ctx.lineTo(50, 102);
	ctx.lineTo(50 + te.width, 102);
	ctx.stroke();

	// 出力
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<img src="' + canvas.toDataURL() + '">');

}).listen(5000);
