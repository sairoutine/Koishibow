'use strict';

// anchor (画像上でのライトの出力位置)
var LIGHT_ANCHOR_X = -13;
var LIGHT_ANCHOR_Y = -336;

// こいし基準から、光をどの地点を基準に回転させるか
// (こいしのサードアイの位置)
var PIVOT_LIGHT_X_FROM_KOISHI = 70;
var PIVOT_LIGHT_Y_FROM_KOISHI = -110;

// 当たり判定のこいしからの距離
var CIRCLE1_POS_DISTANCE_FROM_KOISHI = 336;
var CIRCLE2_POS_DISTANCE_FROM_KOISHI = 100;

// 光の当たり判定サイズ(円の半径)
var CIRCLE1_RADIUS = 180;
var CIRCLE2_RADIUS = 60;



var base_object = require('../hakurei').object.base;
var Util = require('../hakurei').util;

var ObjectLight3rdeye = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectLight3rdeye, base_object);

ObjectLight3rdeye.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
};

ObjectLight3rdeye.prototype.beforeDraw = function(){
	base_object.prototype.beforeDraw.apply(this, arguments);

};

ObjectLight3rdeye.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);

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

	// ライトの角度、位置
	var pos = this._calcLightPositionFromKoishi();

	//console.log(pos.radian / Math.PI);

	// ライトの回転基準位置
	ctx.translate(pos.x, pos.y);

	// 回転
	ctx.rotate(pos.radian);

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
		y = this.scene.koishi.y() +PIVOT_LIGHT_Y_FROM_KOISHI;
	}
	else {
		x = this.scene.koishi.x() + PIVOT_LIGHT_X_FROM_KOISHI;
		y = this.scene.koishi.y() +PIVOT_LIGHT_Y_FROM_KOISHI;
	}

	return {
		radian: rad,
		x: x,
		y: y,
	};
};

// こいしからマウスまでの角度(radian)
ObjectLight3rdeye.prototype._calcRadianFromKoishiToMouse = function(){
	var x = this.core.input_manager.mousePositionX();
	var y = this.core.input_manager.mousePositionY();

	var ax = x - this.scene.koishi.x();
	var ay = y - this.scene.koishi.y();
	var rad = Math.atan2(ay, ax);

	return rad;
};

ObjectLight3rdeye.prototype._drawLightCollision = function(){
	// ライトの角度、位置
	var pos = this._calcLightPositionFromKoishi();

	var map1 = {
		x: pos.x + CIRCLE1_POS_DISTANCE_FROM_KOISHI * Math.cos(pos.radian),
		y: pos.y + CIRCLE1_POS_DISTANCE_FROM_KOISHI * Math.sin(pos.radian),
	};
	var map2 = {
		x: pos.x + CIRCLE2_POS_DISTANCE_FROM_KOISHI * Math.cos(pos.radian),
		y: pos.y + CIRCLE2_POS_DISTANCE_FROM_KOISHI * Math.sin(pos.radian),
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



ObjectLight3rdeye.prototype.onCollision = function(obj) {

};




module.exports = ObjectLight3rdeye;




/*
// 静的クラス
var CreateDarkerImage = function() {};

CreateDarkerImage.check = function (piece, main_stage) {
	// 光の当たり判定の円の位置と大きさ(2つある)
	var R1 = 180;
	var R2 = 60;
	var map1 = main_stage.calcLightCollisionPosition(336);
	var map2 = main_stage.calcLightCollisionPosition(100);

	// 1つ目の円
	if(Math.pow(map1.x-piece.getCollisionLeftX(), 2)  + Math.pow(map1.y-piece.getCollisionUpY(), 2) <= Math.pow(R1, 2) ||
	   Math.pow(map1.x-piece.getCollisionLeftX(), 2)  + Math.pow(map1.y-piece.getCollisionDownY(), 2) <= Math.pow(R1, 2) ||
	   Math.pow(map1.x-piece.getCollisionRightX(), 2) + Math.pow(map1.y-piece.getCollisionUpY(), 2) <= Math.pow(R1, 2) ||
	   Math.pow(map1.x-piece.getCollisionRightX(), 2) + Math.pow(map1.y-piece.getCollisionDownY(), 2) <= Math.pow(R1, 2)) {
		return true;
	}

	// 2つ目の円
	if(Math.pow(map2.x-piece.getCollisionLeftX(), 2)  + Math.pow(map2.y-piece.getCollisionUpY(), 2) <= Math.pow(R2, 2) ||
	   Math.pow(map2.x-piece.getCollisionLeftX(), 2)  + Math.pow(map2.y-piece.getCollisionDownY(), 2) <= Math.pow(R2, 2) ||
	   Math.pow(map2.x-piece.getCollisionRightX(), 2) + Math.pow(map2.y-piece.getCollisionUpY(), 2) <= Math.pow(R2, 2) ||
	   Math.pow(map2.x-piece.getCollisionRightX(), 2) + Math.pow(map2.y-piece.getCollisionDownY(), 2) <= Math.pow(R2, 2)) {
		return true;
	}

	return false;
};


module.exports = CreateDarkerImage;
*/
