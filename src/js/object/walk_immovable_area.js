'use strict';
var base_object = require('../hakurei').object.base;
var Util = require('../hakurei').util;

var WalkImmovableArea = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(WalkImmovableArea, base_object);

WalkImmovableArea.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
	this._width  = null;
	this._height = null;
	this.__id    = null;
};

WalkImmovableArea.prototype.setSize = function(width, height) {
	this._width  = width;
	this._height = height;
};
WalkImmovableArea.prototype.setParentID = function(id) {
	this.__id  = id;
};

WalkImmovableArea.prototype.collisionWidth = function(){
	return this._width;
};

WalkImmovableArea.prototype.collisionHeight = function(){
	return this._height;
};

// オーバーライド
WalkImmovableArea.prototype.draw = function() {
	// 移動不可能範囲のデバッグ表示
	if (this.core.debug_manager.get("is_show_immovable_area")) {
		this._drawCollisionArea("red");
	}

	for(var i = 0, len = this.objects.length; i < len; i++) {
		this.objects[i].draw();
	}
};


module.exports = WalkImmovableArea;
