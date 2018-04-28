'use strict';
var base_object = require('../../hakurei').object.base;
var Util = require('../../hakurei').util;
var DrawSerif = require('../../logic/draw_serif');
var WalkImmovableArea = require('../walk_immovable_area');

// こいしがここまでオブジェクトに近づいたら、タッチできる
var TOUCH_AREA = 50;

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


// タッチ判定をするか否か
ObjectBase.prototype.isCheckInTouchArea = function(){
	return true;
};

// こいしとオブジェクトのタッチ判定
ObjectBase.prototype.checkIsInTouchArea = function(obj) {
	if (!this.isCollision(obj) || !obj.isCollision(this)) return false;
	if (!this.isCheckInTouchArea()) return false;

	var this_collsion_width  = this.collisionWidth(obj)  + TOUCH_AREA;
	var this_collsion_height = this.collisionHeight(obj) + TOUCH_AREA;

	if(Math.abs(this.collisionX() - obj.collisionX()) < this_collsion_width/2 + obj.collisionWidth(this)/2 &&
		Math.abs(this.collisionY() - obj.collisionY()) < this_collsion_height/2 + obj.collisionHeight(this)/2
	) {
		return true;
	}

	return false;
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
	area.setPosition(this.x(), this.y());
	if (this._position_type === "lying") {
		area.setSize(0, 0);
	}
	else {
		area.setSize(this.collisionWidth(), this.collisionHeight());
	}
	area.setParentID(this.id);

	return area;
};

// こいしに触られたときの処理
ObjectBase.prototype.onTouchByKoishi = function() {
};





// オブジェクトがセリフを表示する
ObjectBase.prototype.showMessage = function(text_lines, width_num, height_num, option){
	// メッセージウィンドウ表示
	this._showMessageWindow(text_lines, width_num, height_num, option);

	// メッセージ表示
	this._showText(text_lines, width_num, height_num, option);
};

// セリフウィンドウ表示
ObjectBase.prototype._showMessageWindow = function(lines, width_num, height_num, option){
	var ctx = this.core.ctx;
	var fukidashi = this.core.image_loader.getImage('fukidashi');

	DrawSerif.drawWindow(this, ctx, fukidashi, lines, width_num, height_num, option);
};
// セリフテキスト表示
ObjectBase.prototype._showText = function(lines, width_num, height_num, option) {
	var ctx = this.core.ctx;
	DrawSerif.drawText(this, ctx, lines, width_num, height_num, option);
};

// TODO: throw new Error にして、継承先に実装させる
ObjectBase.prototype.width = function() {
	return this.collisionWidth();
};
ObjectBase.prototype.height = function() {
	return this.collisionHeight();
};


module.exports = ObjectBase;
