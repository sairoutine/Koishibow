'use strict';

// usage:
// node index.js
// node version >= v8.12.0

var createCanvas = require('canvas').createCanvas;
var Image = require('canvas').Image;
var http = require('http');
var path = require('path');

var MAX_WALK_DEPTH_LIMIT = 240 / 0.75;
var MIN_WALK_DEPTH_LIMIT = MAX_WALK_DEPTH_LIMIT + 150;
var BASE_INPUT_DIR_NAME = "assets";
/*
var BASE_OUTPUT_DIR_NAME = "output";
var OUTPUT_DIR_NAME = "chapter3-06";
var FILE_NAME = "chapter3-06-bg-001.jpg";
var FIELD_NUM = 22;
*/

var BG_NAME = "chapter4-01-bg-001";
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

// 合成アルゴリズム
// PNGファイル出力
// フィールド数出力

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
	var width = images[BG_NAME].width;
	var height = images[BG_NAME].height;

	var canvas = createCanvas(width, height)
	var ctx = canvas.getContext('2d');

	// 背景描画
	ctx.save();
	ctx.drawImage(images[BG_NAME],0,0);
	ctx.restore();

	// 合成
	ctx.save();
	ctx.translate(images["chapter4-01-obj-01"].width/2, -images["chapter4-01-obj-01"].height);
	ctx.drawImage(images["chapter4-01-obj-01"],0, height - MIN_WALK_DEPTH_LIMIT);
	ctx.restore();

	// 出力
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<img src="' + canvas.toDataURL() + '">');

}).listen(5000);
