'use strict';
var base_object = require('./base');
var Util = require('../../hakurei').util;

var ObjectStaticImage = function(core) {
	base_object.apply(this, arguments);

	this._image = null;
	this._serif_front = null;
	this._serif_back  = null;
	this._sound_name  = null;
	this._action_name = null;

	this._scale = 1;
	this._width  = null;
	this._height = null;
};
Util.inherit(ObjectStaticImage, base_object);

ObjectStaticImage.prototype.isCollision = function(point) {
	return base_object.prototype.isCollision.apply(this, arguments);
};

ObjectStaticImage.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._image = null;
	this._serif_front = null;
	this._serif_back  = null;

	this._sound_name  = null;
	this._action_name = null;

	this._scale = 1;
	this._width  = null;
	this._height = null;
};

// パラメータをオブジェクトに設定する
ObjectStaticImage.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);
	this.setPosition(data.x, data.y);

	if (data.image) {
		this._image = this.core.image_loader.getImage(data.image);
	}

	// クリックした際のセリフ(表)
	if (data.serif) {
		this._serif_front = data.serif;
	}
	// クリックした際のセリフ(裏)
	if (data.serif) {
		this._serif_back = data.serif_back;
	}

	// クリックした際のSE
	if (data.sound_name) {
		this._sound_name  = data.sound_name;
	}
	// クリックした際のこいしのアクション
	if (data.action_name) {
		this._action_name  = data.action_name;
	}

	if ("width" in data) {
		this._width  = data.width;
	}
	if ("height" in data) {
		this._height = data.height;
	}
	if ("scale" in data) {
		this._scale = data.scale;
	}
};
ObjectStaticImage.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	if(!this.isShow()) return;

	var ctx = this.core.ctx;
	var image = this._image;

	if (image) {
		// 描画
		ctx.save();
		ctx.translate(this.x(), this.y());
		ctx.drawImage(image,
			-image.width*this._scale/2,
			-image.height*this._scale/2,
			image.width * this._scale,
			image.height * this._scale);
		ctx.restore();
	}
};

ObjectStaticImage.prototype.collisionWidth = function(){
	if(this._width !== null) {
		return this._width;
	}
	else {
		return this._image.width * this._scale;
	}
};

ObjectStaticImage.prototype.collisionHeight = function(){
	if(this._height !== null) {
		return this._height;
	}
	else {
		return this._image.height * this._scale;
	}
};
ObjectStaticImage.prototype.isCheckInTouchArea = function() {

	if(this.scene.root().isUsingEye()) {
		// サードアイ使用中
		return this._serif_back;
	}
	else {
		// サードアイ未使用中
		return this._action_name || this._sound_name || this._serif_front;
	}
};
// こいしに触られたときの処理
ObjectStaticImage.prototype.onTouchByKoishi = function() {
	if(this.scene.root().isUsingEye()) {
		// サードアイ使用中
		// 会話するオブジェクトなので、クリックしたら会話する
		if (this._serif_back) {
			this.scene.root().changeSubScene("talk_with_object", this._serif_back, this);
		}
	}
	else {
		// こいしのアクション
		if (this._action_name) {
			this.scene.root().koishi.actionByObject(this._action_name);
		}
		else {
			this.scene.root().koishi.setWaitAnime();
		}

		// 音を再生
		if (this._sound_name) {
			this.core.audio_loader.playSound(this._sound_name);
		}

		// 会話するオブジェクトなので、クリックしたら会話する
		if (this._serif_front) {
			this.scene.root().changeSubScene("talk_with_object", this._serif_front, this);
		}
	}
};

module.exports = ObjectStaticImage;
