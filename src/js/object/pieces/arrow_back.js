'use strict';

// 3rdeye を使用しているときに表示される矢印

var BaseObject = require('./base');
var Util = require('../../hakurei').util;
var WalkImmovableArea = require('../walk_immovable_area');


var SCALE = 1/3;

var ObjectArrowBack = function(core) {
	BaseObject.apply(this, arguments);

	this._rotate = null;

	// 表示中かどうか
	this._is_in_back = false;

	// カーソルが上下に動く
	this._move = 0;
};
Util.inherit(ObjectArrowBack, BaseObject);

ObjectArrowBack.prototype.init = function(){
	BaseObject.prototype.init.apply(this, arguments);

	this._rotate = null;

	// 表示中かどうか
	this._is_in_back = false;

	// カーソルが上下に動く
	this._move = 0;

	// 画像
	this._image = this.core.image_loader.getImage("arrow");
};

ObjectArrowBack.prototype.setData = function(data) {
	BaseObject.prototype.setData.apply(this, arguments);

	// 矢印の角度
	this._rotate = data.rotate;

	// 位置
	this.setPosition(data.x, data.y);
};

ObjectArrowBack.prototype.update = function(){
	BaseObject.prototype.update.apply(this, arguments);

	// カーソルが上下に動く
	if (((this.frame_count/16)|0) % 2 === 0) {
		this._move += 1;
	}
	else {
		this._move -= 1;
	}
};



ObjectArrowBack.prototype.draw = function(){
	BaseObject.prototype.draw.apply(this, arguments);
	if (!this.isShow()) return;

	var ctx = this.core.ctx;
	var image = this._image;

	var width = image.width * SCALE;
	var height = image.height * SCALE;

	// 描画
	ctx.save();
	ctx.translate(this.x(), this.y());
	ctx.rotate(this._rotate);
	ctx.translate(this._move, 0);
	ctx.drawImage(image,
		-width/2,
		-height/2,
		width,
		height
	);
	ctx.restore();
};



ObjectArrowBack.prototype.getImmovableArea = function() {
	var area = new WalkImmovableArea(this.scene);
	area.init();
	area.setPosition(this.x(), this.y());
	area.setSize(0, 0);
	area.setParentID(this.id);

	return area;
};

// 3rd eye の光と当たり判定する
ObjectArrowBack.prototype.isCollisionWithLightIn3rdEye = function() {
	return true;
};
// サードアイに照らされたとき(サードアイ使用時)
ObjectArrowBack.prototype.onCollideWithLightIn3rdEye = function(){
	// 既に裏オブジェクトとして表示しているなら何もしない
	if (this._is_in_back) return;

	// 表示
	this._is_in_back = true;
};

// 3rd eye を使用解除した場合に呼ばれる
ObjectArrowBack.prototype.onUnUse3rdEye = function(){
	// 裏オブジェクトを表示しないようにする
	this.onNotCollideWithLightIn3rdEye();
};

// サードアイに照らされてないとき(サードアイ使用時)
ObjectArrowBack.prototype.onNotCollideWithLightIn3rdEye = function(){
	// 裏オブジェクトになってないなら何もしない
	if (!this._is_in_back) return;

	// 表オブジェクトになった
	this._is_in_back = false;
};

// サードアイに照らされているときのみ表示される
ObjectArrowBack.prototype.isShow = function() {
	return BaseObject.prototype.isShow.apply(this, arguments) && this._is_in_back;
};

ObjectArrowBack.prototype.collisionWidth = function(){
	return this._image.width * SCALE;
};

ObjectArrowBack.prototype.collisionHeight = function(){
	return this._image.height * SCALE;
};




module.exports = ObjectArrowBack;
