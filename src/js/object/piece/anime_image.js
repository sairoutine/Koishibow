'use strict';
var base_scene = require('../../hakurei').object.base;
var Util = require('../../hakurei').util;

var ObjectPieceAnimeImage = function(core) {
	base_scene.apply(this, arguments);

	this.image = null;
	this.scale = 1;
};
Util.inherit(ObjectPieceAnimeImage, base_scene);

ObjectPieceAnimeImage.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	this.image = null;
	this.scale = 1;
};

ObjectPieceAnimeImage.prototype.onCollision = function(obj){
	// 会話するオブジェクトなので、クリックしたら会話する
	//this.scene.mainStage().changeSubScene("talk");
};

ObjectPieceAnimeImage.prototype.draw = function(){
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



ObjectPieceAnimeImage.prototype.collisionWidth = function(){
	return 100;
};

ObjectPieceAnimeImage.prototype.collisionHeight = function(){
	return 100;
};

ObjectPieceAnimeImage.prototype.addImage = function(image_name, scale){
	this.image = image_name;
	this.scale = scale || 1;
};

module.exports = ObjectPieceAnimeImage;
