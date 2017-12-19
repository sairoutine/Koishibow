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
	// 移動不可であればクリックできないので
	// マウスカーソルは変更しない
	if (!this.scene.root().isEnableToMove()) return;

	// マウスカーソルを変更
	this.core.changeCursorImage("ui_icon_pointer_02");
};

// パラメータをオブジェクトに設定する
ObjectBase.prototype.setData = function(data) {
};

// こいし移動後の処理
ObjectBase.prototype.onAfterWalkToHere = function() {
};

// 3rd eye の光と当たり判定する
ObjectBase.prototype.isCollisionWithLightIn3rdEye = function(point) {
	return false;
};
// サードアイに照らされたとき(サードアイ使用時)
ObjectBase.prototype.onCollideWithLightIn3rdEye = function(){
};

// サードアイに照らされてないとき(サードアイ使用時)
ObjectBase.prototype.onNotCollideWithLightIn3rdEye = function(){
};

// 3rd eye を使用した場合に呼ばれる
ObjectBase.prototype.onUse3rdEye = function(){
};

// 3rd eye を使用解除した場合に呼ばれる
ObjectBase.prototype.onUnUse3rdEye = function(){
};








module.exports = ObjectBase;
