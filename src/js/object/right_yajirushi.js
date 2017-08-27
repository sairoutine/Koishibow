'use strict';
var base_scene = require('../hakurei').object.base;
var Util = require('../hakurei').util;

var ObjectRightYajirushi = function(core) {
	base_scene.apply(this, arguments);
};
Util.inherit(ObjectRightYajirushi, base_scene);

ObjectRightYajirushi.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	this.setPosition();
};

ObjectRightYajirushi.prototype.onCollision = function(obj){
	// フィールド遷移
	this.scene.mainStage().setFadeOut(30, "black");
	this.core.changeScene("stage");
};

ObjectRightYajirushi.prototype.setPosition = function(x, y){
	this.x(this.scene.mainStage().width - 24);
	this.y(this.scene.mainStage().height/2);
};

ObjectRightYajirushi.prototype.draw = function(){
	// 仮で四角形を描画
	var ctx = this.core.ctx;
	ctx.save();
	ctx.fillStyle = 'rgb( 255, 255, 255 )' ;
	ctx.globalAlpha = 0.4;
	ctx.fillRect(this.getCollisionLeftX(), this.getCollisionUpY(), this.collisionWidth(), this.collisionHeight());

	// フィールド遷移矢印 表示
	ctx.font = "48px 'Migu'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 255, 255, 255 )';
	ctx.fillText("▶", this.x(), this.y() + 20);

	ctx.restore();
};



ObjectRightYajirushi.prototype.collisionWidth = function(){
	return 64;
};

ObjectRightYajirushi.prototype.collisionHeight = function(){
	return 64;
};

module.exports = ObjectRightYajirushi;
