'use strict';
var base_object = require('../../hakurei').object.base;
var Util = require('../../hakurei').util;

var ObjectBase = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectBase, base_object);

ObjectBase.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
};

ObjectBase.prototype.onCollision = function(point) {
	if(this.core.input_manager.isLeftClickPush()) {
		this.onCollisionWithClick(point);
	}
	else {
		this.onCollisionWithMouseOver(point);
	}
};

// パラメータをオブジェクトに設定する
ObjectBase.prototype.setData = function(data) {
};
// マウスクリック時のイベント
ObjectBase.prototype.onCollisionWithClick = function(point) {
};

// マウスオーバー時のイベント
ObjectBase.prototype.onCollisionWithMouseOver = function(point) {
};

module.exports = ObjectBase;
