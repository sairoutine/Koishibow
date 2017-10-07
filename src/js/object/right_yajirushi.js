'use strict';
var base_object = require('../hakurei').object.base;
var Util = require('../hakurei').util;

var ObjectRightYajirushi = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectRightYajirushi, base_object);

ObjectRightYajirushi.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this.setPosition();
};

ObjectRightYajirushi.prototype.onCollision = function(obj){
	// フィールド遷移
	this.scene.mainStage().setFadeOut(30, "black");
	this.core.changeScene("stage", this.scene.mainStage().field().right_field, false);
};

ObjectRightYajirushi.prototype.setPosition = function(){
	this.x(this.scene.mainStage().width - 48);
	this.y(this.scene.mainStage().height/2);
};

ObjectRightYajirushi.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;
	ctx.save();
	/*
	// 仮で四角形を描画
	ctx.fillStyle = 'rgb( 255, 255, 255 )' ;
	ctx.globalAlpha = 0.4;
	ctx.fillRect(this.getCollisionLeftX(), this.getCollisionUpY(), this.collisionWidth(), this.collisionHeight());
	*/

	// フィールド遷移矢印 表示
	ctx.font = "96px 'Migu'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 255, 255, 255 )';
	ctx.fillText("▶", this.x(), this.y() + 20);

	ctx.restore();
};



ObjectRightYajirushi.prototype.collisionWidth = function(){
	return 128;
};

ObjectRightYajirushi.prototype.collisionHeight = function(){
	return 128;
};

module.exports = ObjectRightYajirushi;
