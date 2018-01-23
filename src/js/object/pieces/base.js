'use strict';
var base_object = require('../../hakurei').object.base;
var Util = require('../../hakurei').util;
var WalkImmovableArea = require('../walk_immovable_area');

var ObjectBase = function(core) {
	base_object.apply(this, arguments);

	this._z = 0;
	this._position_type = null;
	this.no = null;
};
Util.inherit(ObjectBase, base_object);

ObjectBase.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._z = 0;
	this._position_type = null;
	this.no = null;
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

ObjectBase.prototype.z = function(){
	return this._z;
};

// パラメータをオブジェクトに設定する
ObjectBase.prototype.setData = function(data) {
	// オブジェクトID(フィールド内で一意)
	this.no = data.no;

	if (data.position_type === "front") {
		this._z = 10000; // TODO: 固定値やめる
	}
	else if (data.position_type === "lying") {
		this._position_type = "lying";
	}
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
ObjectBase.prototype.getImmovableArea = function() {
	var area = new WalkImmovableArea(this.scene);
	area.init();
	area.setPosition(this.x(), this.y() + this.collisionHeight()/4);
	if (this._position_type === "lying") {
		area.setSize(0, 0);
	}
	else {
		area.setSize(this.collisionWidth(), this.collisionHeight()/2);
	}
	area.setParentID(this.id);

	return area;
};













module.exports = ObjectBase;
