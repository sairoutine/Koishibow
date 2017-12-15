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
	var self = this;
	// こいしを移動
	self.scene.root().koishi.setMoveTarget(self, function () {
		// 移動後
		self.onAfterWalkToHere();
	});
};

// マウスオーバー時のイベント
ObjectBase.prototype.onCollisionWithMouseOver = function(point) {
	// マウスカーソルを変更
	this.core.changeCursorImage("ui_icon_pointer_02");
};

// こいし移動後の処理
ObjectBase.prototype.onAfterWalkToHere = function() {
};






module.exports = ObjectBase;
