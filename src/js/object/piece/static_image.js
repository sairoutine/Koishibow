'use strict';
var base_scene = require('../../hakurei').object.base;
var Util = require('../../hakurei').util;

var ObjectPiece = function(core) {
	base_scene.apply(this, arguments);

	this.image = null;
	this.scale = 1;
};
Util.inherit(ObjectPiece, base_scene);

ObjectPiece.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	this.image = null;
	this.scale = 1;
};

ObjectPiece.prototype.onCollision = function(obj){
	// 会話するオブジェクトなので、クリックしたら会話する
	this.scene.mainStage().changeSubScene("talk");
};

ObjectPiece.prototype.draw = function(){
	if (!this.image) return;
	var ctx = this.core.ctx;
	var SCALE = 0.3;
	// 背景描画
	var image = this.core.image_loader.getImage(this.image);
	ctx.save();
	ctx.drawImage(image,
					this.x(),
					this.y(),
					image.width * this.scale,
					image.height * this.scale);
	ctx.restore();



	/*
	// 仮で四角形を描画
	var ctx = this.core.ctx;
	ctx.save();
	ctx.fillStyle = 'rgb( 255, 255, 255 )' ;
	ctx.globalAlpha = 0.4;
	ctx.fillRect(this.getCollisionLeftX(), this.getCollisionUpY(), this.collisionWidth(), this.collisionHeight());
	ctx.restore();
	*/
};



ObjectPiece.prototype.collisionWidth = function(){
	return 100;
};

ObjectPiece.prototype.collisionHeight = function(){
	return 100;
};

ObjectPiece.prototype.addImage = function(image_name, scale){
	this.image = image_name;
	this.scale = scale || 1;
};

module.exports = ObjectPiece;
