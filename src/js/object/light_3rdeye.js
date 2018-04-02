'use strict';

// anchor (画像上でのライトの出力位置)
var LIGHT_ANCHOR_X = -13;
var LIGHT_ANCHOR_Y = -336;

// こいし基準から、光をどの地点を基準に回転させるか
// (こいしのサードアイの位置)
var PIVOT_LIGHT_X_FROM_KOISHI = 70;
var PIVOT_LIGHT_Y_FROM_KOISHI = -110 + 170;

// 当たり判定のこいしからの距離
var CIRCLE1_POS_DISTANCE_FROM_KOISHI = 336;
var CIRCLE2_POS_DISTANCE_FROM_KOISHI = 100;

// 光の当たり判定サイズ(円の半径)
var CIRCLE1_RADIUS = 180;
var CIRCLE2_RADIUS = 60;



var base_object = require('../hakurei').object.base;
var Util = require('../hakurei').util;
var CONSTANT_BUTTON = require('../hakurei').constant.button;

var ObjectLight3rdeye = function(core) {
	base_object.apply(this, arguments);

	this._radian = null;
	this._pivot_x = null;
	this._pivot_y = null;

	this._light_y = 0;
};
Util.inherit(ObjectLight3rdeye, base_object);

ObjectLight3rdeye.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._radian = null;
	this._pivot_x = null;
	this._pivot_y = null;

	this._light_y = 0;
};

ObjectLight3rdeye.prototype.beforeDraw = function(){
	base_object.prototype.beforeDraw.apply(this, arguments);

	if(this.core.input_manager.isKeyDown(CONSTANT_BUTTON.BUTTON_X)) {
		if (this.core.input_manager.isKeyDown(CONSTANT_BUTTON.BUTTON_UP)) {
			this._light_y-=10;
		}
		else if (this.core.input_manager.isKeyDown(CONSTANT_BUTTON.BUTTON_DOWN)) {
			this._light_y+=10;
		}
	}
};

// ライトの角度、位置
ObjectLight3rdeye.prototype._updateLightPosition = function(){
	// ライトの角度、位置
	var pos = this._calcLightPositionFromKoishi();

	this._radian = pos.radian;
	this._pivot_x = pos.x;
	this._pivot_y = pos.y;
};

// ライトの角度、位置
ObjectLight3rdeye.prototype._calcLightPositionFromKoishi = function(){
	// こいしからマウスまでの角度(radian)
	var rad = this._calcRadianFromKoishiToMouse();

	// ライトの稼働角度には制限がある
	if (this.scene.koishi.isReflect()) {
		if (-Math.PI*7/9 < rad && rad < 0) { rad = -Math.PI*7/9; }
		else if(0 <= rad && rad < Math.PI*6/9) { rad = Math.PI*6/9; }
	}
	else {
		if (rad < -Math.PI*2/9) rad = -Math.PI*2/9;
		else if (Math.PI*3/9 < rad) rad = Math.PI*3/9;

	}

	// ライトの回転基準位置
	var x,y;
	if (this.scene.koishi.isReflect()) {
		x = this.scene.koishi.x() - PIVOT_LIGHT_X_FROM_KOISHI;
		y = this.scene.koishi.y() + PIVOT_LIGHT_Y_FROM_KOISHI;
	}
	else {
		x = this.scene.koishi.x() + PIVOT_LIGHT_X_FROM_KOISHI;
		y = this.scene.koishi.y() + PIVOT_LIGHT_Y_FROM_KOISHI;
	}

	return {
		radian: rad,
		x: x,
		y: y,
	};
};



ObjectLight3rdeye.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);

	// ライトの角度、位置 更新
	// (beforeDraw に置くと、最初1フレームだけ_updateLightPosition が呼ばれないまま draw されるから)
	this._updateLightPosition();

	// 画面全体を少し暗くする
	this._drawDarker();

	// ライト描画
	this._drawLight();

	// デバッグモードだとライトの当たり判定を表示する
	if (this.core.debug_manager.isShowingCollisionArea()) {
		this._drawLightCollision();
	}
};

// 画面全体を少し暗くする
ObjectLight3rdeye.prototype._drawDarker = function() {
	var ctx = this.core.ctx;

	ctx.save();
	ctx.fillStyle = 'black';
	ctx.globalAlpha = 0.3;
	ctx.fillRect(0, 0, this.width, this.height);
	ctx.restore();
};

// ライト描画
ObjectLight3rdeye.prototype._drawLight = function(){
	var ctx = this.core.ctx;

	var light = this.core.image_loader.getImage("light");
	ctx.save();

	//console.log(this._radian / Math.PI);

	// ライトの回転基準位置
	ctx.translate(this._pivot_x, this._pivot_y);

	// 回転
	ctx.rotate(this._radian);

	// 合成方法
	ctx.globalCompositeOperation = "overlay";

	/*
	 * DEBUG用 ライトの合成方法指定
	if (this.core.debug_manager.get('light_global_composite')) {
		ctx.globalCompositeOperation = this.core.debug_manager.get('light_global_composite');
	}
	else {
		ctx.globalCompositeOperation = "overlay";
	}
	*/

	// 描画
	ctx.drawImage(light, LIGHT_ANCHOR_X, LIGHT_ANCHOR_Y);

	ctx.restore();
};

// こいしからマウスまでの角度(radian)
ObjectLight3rdeye.prototype._calcRadianFromKoishiToMouse = function(){
	var ax = this.scene.koishi.isReflect() ? -200 : 200;
	var ay = this._light_y;
	var rad = Math.atan2(ay, ax);
	return rad;
};

ObjectLight3rdeye.prototype._drawLightCollision = function(){
	var map1 = {
		x: this._pivot_x + CIRCLE1_POS_DISTANCE_FROM_KOISHI * Math.cos(this._radian),
		y: this._pivot_y+ CIRCLE1_POS_DISTANCE_FROM_KOISHI * Math.sin(this._radian),
	};
	var map2 = {
		x: this._pivot_x + CIRCLE2_POS_DISTANCE_FROM_KOISHI * Math.cos(this._radian),
		y: this._pivot_y + CIRCLE2_POS_DISTANCE_FROM_KOISHI * Math.sin(this._radian),
	};

	var ctx = this.core.ctx;
	ctx.save();

	ctx.globalCompositeOperation = "overlay";

	ctx.beginPath();
	ctx.arc(map1.x, map1.y,CIRCLE1_RADIUS,0,2*Math.PI);
	ctx.arc(map2.x, map2.y,CIRCLE2_RADIUS,0,2*Math.PI);
	ctx.fill();

	ctx.restore();
};


ObjectLight3rdeye.prototype.checkCollisionWithPieces = function(pieces){
	// フィールドの各種オブジェクトとサードアイの光の当たり判定
	for (var i = pieces.length - 1; i >= 0; i--) { // i の大きい方が手前なので
		var piece = pieces[i];
		if (piece.isCollisionWithLightIn3rdEye()) {
			if(this.intersectWithPiece(piece)) {
				piece.onCollideWithLightIn3rdEye();
			}
			else {
				piece.onNotCollideWithLightIn3rdEye();
			}
		}
	}

	return false;
};

ObjectLight3rdeye.prototype.intersectWithPiece = function (piece) {
	var map1 = {
		x: this._pivot_x + CIRCLE1_POS_DISTANCE_FROM_KOISHI * Math.cos(this._radian),
		y: this._pivot_y+ CIRCLE1_POS_DISTANCE_FROM_KOISHI * Math.sin(this._radian),
	};
	var map2 = {
		x: this._pivot_x + CIRCLE2_POS_DISTANCE_FROM_KOISHI * Math.cos(this._radian),
		y: this._pivot_y + CIRCLE2_POS_DISTANCE_FROM_KOISHI * Math.sin(this._radian),
	};

	// 1つ目の円
	if(Math.pow(map1.x-piece.getCollisionLeftX(), 2)  + Math.pow(map1.y-piece.getCollisionUpY(), 2) <= Math.pow(CIRCLE1_RADIUS, 2) ||
	   Math.pow(map1.x-piece.getCollisionLeftX(), 2)  + Math.pow(map1.y-piece.getCollisionDownY(), 2) <= Math.pow(CIRCLE1_RADIUS, 2) ||
	   Math.pow(map1.x-piece.getCollisionRightX(), 2) + Math.pow(map1.y-piece.getCollisionUpY(), 2) <= Math.pow(CIRCLE1_RADIUS, 2) ||
	   Math.pow(map1.x-piece.getCollisionRightX(), 2) + Math.pow(map1.y-piece.getCollisionDownY(), 2) <= Math.pow(CIRCLE1_RADIUS, 2)) {
		return true;
	}

	// 2つ目の円
	if(Math.pow(map2.x-piece.getCollisionLeftX(), 2)  + Math.pow(map2.y-piece.getCollisionUpY(), 2) <= Math.pow(CIRCLE2_RADIUS, 2) ||
	   Math.pow(map2.x-piece.getCollisionLeftX(), 2)  + Math.pow(map2.y-piece.getCollisionDownY(), 2) <= Math.pow(CIRCLE2_RADIUS, 2) ||
	   Math.pow(map2.x-piece.getCollisionRightX(), 2) + Math.pow(map2.y-piece.getCollisionUpY(), 2) <= Math.pow(CIRCLE2_RADIUS, 2) ||
	   Math.pow(map2.x-piece.getCollisionRightX(), 2) + Math.pow(map2.y-piece.getCollisionDownY(), 2) <= Math.pow(CIRCLE2_RADIUS, 2)) {
		return true;
	}

	return false;
};

module.exports = ObjectLight3rdeye;
