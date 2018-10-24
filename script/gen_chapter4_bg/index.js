'use strict';

// usage:
// node index.js
// node version >= v8.12.0

var createCanvas = require('canvas').createCanvas;
var Image = require('canvas').Image;
var http = require('http');
var path = require('path');

var BASE_INPUT_DIR_NAME = "assets";
/*
var BASE_OUTPUT_DIR_NAME = "output";
var OUTPUT_DIR_NAME = "chapter3-06";
var FILE_NAME = "chapter3-06-bg-001.jpg";
var FIELD_NUM = 22;
*/

var ASSETS = {
	"chapter4-01-bg-001": "chapter4-01-bg-001.jpg",
	"chapter4-01-obj-01": "chapter4-01-obj-01.png",
	"chapter4-01-obj-02": "chapter4-01-obj-02.png",
	"chapter4-01-obj-03": "chapter4-01-obj-03.png",
	"chapter4-01-obj-04": "chapter4-01-obj-04.png",
	"chapter4-01-obj-05": "chapter4-01-obj-05.png",
	"chapter4-01-obj-06": "chapter4-01-obj-06.png",
	"chapter4-01-obj-07": "chapter4-01-obj-07.png",
	"chapter4-01-obj-08": "chapter4-01-obj-08.png",
};

// 合成
// 合成アルゴリズム
// PNGファイル出力

// アセット読みこみ
var images = {};
for (var name in ASSETS) {
	var path_to = ASSETS[name];

	var img = new Image();
	//img.onload = () => ctx.drawImage(img, 0, 0)
	img.onerror = function(err) { throw err };
	img.src = path.join(BASE_INPUT_DIR_NAME, path_to);

	images[name] = img;
}


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
