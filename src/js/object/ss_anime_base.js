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

	this.current_anime = null;
	this.anime_frame = 0;
	this.loop_count = 0;
	this._cache_canvas = {};
};
Util.inherit(SsAnimeBase, base_object);

SsAnimeBase.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._is_reflect = false;

	this.current_anime = "default";
	this.anime_frame = 0;
	this.loop_count = 0;
	this._cache_canvas = {};

	var jsonData = this.getJsonData(this.current_anime);
	this.imageList = this._getImageList(jsonData[DATA_INDEX].images);

	this._canvas_width = jsonData[DATA_INDEX].animation.CanvasWidth;
	this._canvas_height = jsonData[DATA_INDEX].animation.CanvasHeight + 20; // TODO: なぜかこいしの待機中の帽子のリボンが見切れるので...

	this.animation = new SsAnimation(jsonData[DATA_INDEX].animation, this.imageList);

	this.ss = new SsSprite(this.animation);

	// update ss state
	this.ss.rootScaleX = this.scaleWidth();
	this.ss.rootScaleY = this.scaleHeight();
	this.ss.x = this._canvas_width  /2;
	this.ss.y = this._canvas_height /2;

	this._setupAnimationCache();
};
SsAnimeBase.prototype.isPlaying = function(name){
	return this.current_anime === name ? true : false;
};

SsAnimeBase.prototype.changeAnimation = function(name){
	this.current_anime = name;
	this.anime_frame = 0;
	this.loop_count = 0;

	var jsonData = this.getJsonData(name);

	this._canvas_width = jsonData[DATA_INDEX].animation.CanvasWidth;
	this._canvas_height = jsonData[DATA_INDEX].animation.CanvasHeight + 20; // TODO: なぜかこいしの待機中の帽子のリボンが見切れるので...

	this.animation = new SsAnimation(jsonData[DATA_INDEX].animation, this.imageList);

	this.ss.setAnimation(this.animation);

	this._setupAnimationCache();
};



SsAnimeBase.prototype._setupAnimationCache = function(){
	if(this.current_anime in this._cache_canvas) return;

	//var start = performance.now();
	var cache_canvas_list = [];
	for (var frame_no = 0, len = this.ss.inner.animation.getFrameCount(); frame_no < len; frame_no++) {
		// create canvas
		var canvas = document.createElement('canvas');
		canvas.width  = this._canvas_width;
		canvas.height = this._canvas_height;
		var ctx2 = canvas.getContext('2d');

		this.ss.inner.animation.drawFunc(ctx2, frame_no, this.ss.x, this.ss.y, this.ss.flipH, this.ss.flipV, this.ss.inner.partStates, this.ss.rootScaleX, this.ss.rootScaleY);

		// 暗くする
		if (this.darker()) {
			canvas = CreateDarkerImage.exec(canvas, this.darker());
		}

		cache_canvas_list[frame_no] = canvas;
	}

	this._cache_canvas[this.current_anime] = cache_canvas_list;
	//var end = performance.now();
    //var elapsed = (end - start);
    //var elapsedStr = elapsed.toPrecision(3);
    //console.log("time: " + elapsedStr);
};






SsAnimeBase.prototype.playAnimationOnce = function(name, _callback){
	var ss = this.ss;
	//var max_loop = ss.getLoop();

	// アニメーション後のコールバック
	if (typeof _callback !== "undefined") {
		var callback = function () {
			ss.setEndCallBack(null);
			// 1 -> 0に戻すと、またアニメが無限ループしちゃうので
			//ss.setLoop(max_loop);
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

SsAnimeBase.prototype.setReflect = function(flag){
	this._is_reflect = flag;
};
SsAnimeBase.prototype.getJsonData = function(name) {
	var map = this.jsonAnimeMap();

	if(!map[name]) throw new Error(name + " anime doesn't exists");

	return map[name];
};
SsAnimeBase.prototype.getFrameNo = function(){
	return this.ss.getFrameNo();
};

SsAnimeBase.prototype.beforeDraw = function(){
	base_object.prototype.beforeDraw.apply(this, arguments);
};

// 画面更新
SsAnimeBase.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	if (!this.isShow()) return;
	var ctx = this.core.ctx;

	var frame_no = this._getCurrentAnimeFrameNo();
	var canvas = this._getAnimeImage(frame_no);

	// draw
	ctx.save();
	ctx.translate(this.x(), this.y());
	if (this.isReflect()) {
		ctx.transform(-1, 0, 0, 1, 0, 0);
	}
	ctx.drawImage(canvas, -this._canvas_width/2, -this._canvas_height/2);

	ctx.restore();
};

SsAnimeBase.prototype._getCurrentAnimeFrameNo = function() {
	var max_frame = this.ss.inner.animation.getFrameCount();
	var max_loop = this.ss.inner.loop;
	if (max_loop === 0) {
		this.anime_frame += this.ss.inner.animation.getFPS() / 60;
		this.anime_frame %= max_frame;
	}
	else if(this.loop_count < max_loop) {
		this.anime_frame += this.ss.inner.animation.getFPS() / 60;

		// 最終フレームを再生し終えたら
		if (this.anime_frame >= max_frame - 1) {
			this.loop_count++;

			// 最終ループに達してしまったら
			if (this.loop_count >= max_loop) {
				// 停止時コールバック呼び出し
				if (this.ss.inner.endCallBack != null) {
					this.ss.inner.endCallBack();
				}
			}
		}

		this.anime_frame %= max_frame;
	}

	return Math.floor(this.anime_frame);
};
SsAnimeBase.prototype._getAnimeImage = function(frame_no){
	return this._cache_canvas[this.current_anime][frame_no];
};


SsAnimeBase.prototype.isShow = function(){
	return true;
};
SsAnimeBase.prototype.isReflect = function(){
	return this._is_reflect;
};

SsAnimeBase.prototype.darker = function() {
	return 0.0;
};
SsAnimeBase.prototype.jsonAnimeMap = function() {
	return {};
};

SsAnimeBase.prototype.scaleWidth = function(){
	return 1;
};
SsAnimeBase.prototype.scaleHeight = function(){
	return 1;
};

module.exports = SsAnimeBase;
