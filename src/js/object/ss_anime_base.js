'use strict';

var base_object = require('../hakurei').object.base;
var Util = require('../hakurei').util;

var CreateDarkerImage = require("../logic/create_darker_image");

var SsaPlayer = require('../vendor/SsaPlayer');
var SsImageList = SsaPlayer.SsImageList;
var SsAnimation = SsaPlayer.SsAnimation;
var SsSprite = SsaPlayer.SsSprite;

// アニメの index は 0 固定
var DATA_INDEX = 0;

var SsAnimeBase = function(scene) {
	base_object.apply(this, arguments);
};
Util.inherit(SsAnimeBase, base_object);

SsAnimeBase.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
	this._is_reflect = false;

	var jsonData = this.getJsonData("default");
	this.imageList = this._getImageList(jsonData[DATA_INDEX].images);

	this._canvas_width = jsonData[DATA_INDEX].animation.CanvasWidth;
	this._canvas_height = jsonData[DATA_INDEX].animation.CanvasHeight;

	this.animation = new SsAnimation(jsonData[DATA_INDEX].animation, this.imageList);

	this.ss = new SsSprite(this.animation);
};

SsAnimeBase.prototype.changeAnimation = function(name){
	var jsonData = this.getJsonData(name);

	this._canvas_width = jsonData[DATA_INDEX].animation.CanvasWidth;
	this._canvas_height = jsonData[DATA_INDEX].animation.CanvasHeight;

	this.animation = new SsAnimation(jsonData[DATA_INDEX].animation, this.imageList);

	this.ss.setAnimation(this.animation);
};

SsAnimeBase.prototype.playAnimationOnce = function(name, _callback){
	var ss = this.ss;
	var max_loop = ss.getLoop();

	// アニメーション後のコールバック
	if (typeof _callback !== "undefined") {
		var callback = function () {
			ss.setEndCallBack(null);
			ss.setLoop(max_loop);
			_callback();
		};

		ss.setEndCallBack(callback);
	}

	this.ss.setLoop(1);
	this.changeAnimation(name);
};

SsAnimeBase.prototype.playAnimationInfinity = function(name){
	this.ss.setLoop(0);
	this.changeAnimation(name);
};

// sprite studio 用の SsImageList 代替オブジェクトを生成
SsAnimeBase.prototype._getImageList = function (imageFiles) {
	var imageList = new SsImageList([], "");

	for (var i = 0; i < imageFiles.length; i++) {
		var image_file_name = imageFiles[i];

		// 拡張子を取り除く
		var image_name_and_ext = image_file_name.split(/(?=\.[^.]+$)/);

		// TODO: prefix に ss_ をつけたほうがいいかも？
		imageList.imagePaths[i] = null;
		imageList.images[i] = this.core.image_loader.getImage(image_name_and_ext[0]);
	}

	return imageList;
};

SsAnimeBase.prototype.beforeDraw = function(){
	base_object.prototype.beforeDraw.apply(this, arguments);

	// update ss state
	this.ss.rootScaleX = this.scaleWidth();
	this.ss.rootScaleY = this.scaleHeight();
	this.ss.x = this._canvas_width  /2;
	this.ss.y = this._canvas_height /2;
};

// 画面更新
SsAnimeBase.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	if (!this.isShow()) return;
	var ctx = this.core.ctx;

	// TODO: メモリキャッシュ
	// create canvas
	var canvas = document.createElement('canvas');
	canvas.width  = this._canvas_width;
	canvas.height = this._canvas_height;
	var ctx2 = canvas.getContext('2d');
	// TODO: frame_count に合わせて描画
	var t = new Date().getTime();
	this.ss.draw(ctx2, t);

	// 暗くする
	if (this.darker()) {
		canvas = CreateDarkerImage.exec(canvas, this.darker());
	}


	// draw
	ctx.save();
	ctx.translate(this.x(), this.y());
	if (this.isReflect()) {
		ctx.transform(-1, 0, 0, 1, 0, 0);
	}
	ctx.drawImage(canvas, -this._canvas_width/2, -this._canvas_height/2);

	ctx.restore();
};

SsAnimeBase.prototype.isShow = function(){
	return true;
};
SsAnimeBase.prototype.isReflect = function(){
	return this._is_reflect;
};

SsAnimeBase.prototype.setReflect = function(flag){
	this._is_reflect = flag;
};

SsAnimeBase.prototype.darker = function() {
	return 0.0;
};
SsAnimeBase.prototype.getJsonData = function(name) {
	var map = this.jsonAnimeMap();

	if(!map[name]) throw new Error(name + " anime doesn't exists");

	return map[name];
};

SsAnimeBase.prototype.jsonAnimeMap = function() {
	return {};
};

module.exports = SsAnimeBase;