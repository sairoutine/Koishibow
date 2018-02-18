'use strict';
var base_object = require('../../hakurei').object.base;
var Util = require('../../hakurei').util;
var DrawSerif = require('../../logic/draw_serif');
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

var TOUCH_AREA = 50;
ObjectBase.prototype.checkIsInTouchArea = function(obj) {
	if (!this.isCollision(obj) || !obj.isCollision(this)) return false;

	var this_collsion_width  = this.collisionWidth(obj)  + TOUCH_AREA;
	var this_collsion_height = this.collisionHeight(obj) + TOUCH_AREA;

	if(Math.abs(this.x() - obj.x()) < this_collsion_width/2 + obj.collisionWidth(this)/2 &&
		Math.abs(this.y() - obj.y()) < this_collsion_height/2 + obj.collisionHeight(this)/2) {
		return true;
	}

	return false;
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






ObjectBase.prototype.showMessage = function(text_lines){
	// メッセージウィンドウ表示
	this._showMessageWindow(text_lines);

	// メッセージ表示
	this._showText(text_lines);
};

// セリフウィンドウ表示
ObjectBase.prototype._showMessageWindow = function(lines){
	var ctx = this.core.ctx;
	var fukidashi = this.core.image_loader.getImage('fukidashi');

	DrawSerif.drawWindow(this, ctx, fukidashi, lines);
};
// セリフテキスト表示
ObjectBase.prototype._showText = function(lines) {
	var ctx = this.core.ctx;
	DrawSerif.drawText(this, ctx, lines);
};

module.exports = ObjectBase;
