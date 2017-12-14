'use strict';
var base_object = require('./base');
var Util = require('../../hakurei').util;

var ObjectStaticImage = function(core) {
	base_object.apply(this, arguments);

	this._image = null;
	this._serif = null;
	this._sound_name  = null;
	this._action_name = null;

	this._scale = 1;
	this._width  = null;
	this._height = null;
};
Util.inherit(ObjectStaticImage, base_object);

ObjectStaticImage.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._image = null;
	this._serif = null;
	this._sound_name  = null;
	this._action_name = null;

	this._scale = 1;
	this._width  = null;
	this._height = null;
};

// パラメータをオブジェクトに設定する
ObjectStaticImage.prototype.setData = function(data) {
	this.setPosition(data.x, data.y);

	this._image = this.core.image_loader.getImage(data.image);
	// クリックした際のセリフ
	this._serif = data.serif;
	// クリックした際のSE
	this._sound_name  = data.sound_name;
	// クリックした際のこいしのアクション
	this._action_name  = data.action_name;

	if (data.width) {
		this._width  = data.width;
	}
	if (data.height) {
		this._height = data.height;
	}
	if (data.scale) {
		this._scale = data.scale;
	}
};
// マウスクリック時のイベント
ObjectStaticImage.prototype.onCollisionWithClick = function(point) {
	/*
	this.scene.mainStage().koishi().setMoveTargetObject(obj, this);
	this.scene.mainStage().koishi().setAfterMoveCallback(Util.bind(this.onCollisionAfterKoishiWalk, this));
	*/
};

// マウスオーバー時のイベント
ObjectStaticImage.prototype.onCollisionWithMouseOver = function(point) {
	// マウスカーソルを変更
	this.core.changeCursorImage("ui_icon_pointer_02");
};

ObjectStaticImage.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);

	var ctx = this.core.ctx;
	var image = this._image;

	// 背景描画
	ctx.save();
	ctx.translate(this.x(), this.y());
	ctx.drawImage(image,
					-image.width*this._scale/2,
					-image.height*this._scale/2,
					image.width * this._scale,
					image.height * this._scale);
	ctx.restore();
};

ObjectStaticImage.prototype.collisionWidth = function(){
	if(this._width) {
		return this._width;
	}
	else {
		return this._image.width * this._scale;
	}
};

ObjectStaticImage.prototype.collisionHeight = function(){
	if(this._height) {
		return this._height;
	}
	else {
		return this._image.height * this._scale;
	}
};

/*
ObjectStaticImage.prototype.onCollisionAfterKoishiWalk = function(){
	// 会話するオブジェクトなので、クリックしたら会話する
	this.scene.mainStage().changeSubScene("talk", this._serif);

	// こいしのアクション
	if (this._action_name) {
		this.scene.mainStage().koishi().actionByName(this._action_name);
	}

	// 音を再生
	if (this._sound_name) {
		this.core.playSound(this._sound_name);
	}
};
*/

module.exports = ObjectStaticImage;
