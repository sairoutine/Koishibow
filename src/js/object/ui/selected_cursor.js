'use strict';

// 選択中カーソル

var base_object = require('../../hakurei').object.sprite;
var Util = require('../../hakurei').util;

var ObjectSelectedCursor = function(core) {
	base_object.apply(this, arguments);
	this._is_show = false;
	this._move_y = 0;
};
Util.inherit(ObjectSelectedCursor, base_object);

ObjectSelectedCursor.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._is_show = false;
	this._move_y = 0;
};

ObjectSelectedCursor.prototype.y = function() {
	return base_object.prototype.y.apply(this, arguments) + this._move_y;
};



ObjectSelectedCursor.prototype.isShow = function() {
	return this._is_show;
};

ObjectSelectedCursor.prototype.show = function() {
	this._is_show = true;
};
ObjectSelectedCursor.prototype.hide = function() {
	this._is_show = false;
};

ObjectSelectedCursor.prototype.update = function(){
	base_object.prototype.update.apply(this, arguments);

	// カーソルが上下に動く
	if (((this.frame_count/16)|0) % 2 === 0) {
		this._move_y += 1;
	}
	else {
		this._move_y -= 1;
	}
};



// 現状、表示UIとしてしか使ってないので、当たり判定不要
ObjectSelectedCursor.prototype.isCollision = function() {
	return false;
};

ObjectSelectedCursor.prototype.spriteName = function(){
	return "arrow";
};
ObjectSelectedCursor.prototype.spriteIndices = function(){
	return [{x: 0, y: 0}];
};
ObjectSelectedCursor.prototype.spriteWidth = function(){
	return 136;
};
ObjectSelectedCursor.prototype.spriteHeight = function(){
	return 124;
};
ObjectSelectedCursor.prototype.scaleHeight = function(){
	return 1/3;
};
ObjectSelectedCursor.prototype.scaleWidth = function(){
	return 1/3;
};

ObjectSelectedCursor.prototype.rotateAdjust = function(){
	return 90;
};

module.exports = ObjectSelectedCursor;
