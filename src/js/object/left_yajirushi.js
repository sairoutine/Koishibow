'use strict';
var base_object = require('../hakurei').object.base;
var Util = require('../hakurei').util;
var CONSTANT = require('../constant');

var ObjectLeftYajirushi = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectLeftYajirushi, base_object);

ObjectLeftYajirushi.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);
	this.setPosition();
};


ObjectLeftYajirushi.prototype.onCollision = function(obj){
	// フィールド遷移
	this.scene.mainStage().setFadeOut(30, "black");
	this.core.changeScene("stage", this.scene.mainStage().field().left_field, true);
};

ObjectLeftYajirushi.prototype.setPosition = function(){
	this.x(48);
	this.y(this.scene.mainStage().height/2);
};

ObjectLeftYajirushi.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);

	// デバッグ用の仮描画する
	if (!CONSTANT.DEBUG.ON) return;


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
	ctx.fillText("◀", this.x(), this.y() + 20);

	ctx.restore();
};



ObjectLeftYajirushi.prototype.collisionWidth = function(){
	return 128;
};

ObjectLeftYajirushi.prototype.collisionHeight = function(){
	return 128;
};

module.exports = ObjectLeftYajirushi;
