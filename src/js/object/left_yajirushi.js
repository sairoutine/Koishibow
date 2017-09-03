'use strict';
var base_scene = require('../hakurei').object.base;
var Util = require('../hakurei').util;

var ObjectLeftYajirushi = function(core) {
	base_scene.apply(this, arguments);
};
Util.inherit(ObjectLeftYajirushi, base_scene);

ObjectLeftYajirushi.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);
	this.setPosition();
};


ObjectLeftYajirushi.prototype.onCollision = function(obj){
	// フィールド遷移
	this.scene.mainStage().setFadeOut(30, "black");
	this.core.changeScene("stage", this.scene.mainStage().field().left_field, true);
};

ObjectLeftYajirushi.prototype.setPosition = function(){
	this.x(24);
	this.y(this.scene.mainStage().height/2);
};

ObjectLeftYajirushi.prototype.draw = function(){
	var ctx = this.core.ctx;
	ctx.save();
	/*
	// 仮で四角形を描画
	ctx.fillStyle = 'rgb( 255, 255, 255 )' ;
	ctx.globalAlpha = 0.4;
	ctx.fillRect(this.getCollisionLeftX(), this.getCollisionUpY(), this.collisionWidth(), this.collisionHeight());
	*/

	// フィールド遷移矢印 表示
	ctx.font = "48px 'Migu'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 255, 255, 255 )';
	ctx.fillText("◀", this.x(), this.y() + 20);

	ctx.restore();
};



ObjectLeftYajirushi.prototype.collisionWidth = function(){
	return 64;
};

ObjectLeftYajirushi.prototype.collisionHeight = function(){
	return 64;
};

module.exports = ObjectLeftYajirushi;
