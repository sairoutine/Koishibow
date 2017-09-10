'use strict';
var base_scene = require('../../hakurei').object.base;
var Util = require('../../hakurei').util;

var ObjectPiece = function(core) {
	base_scene.apply(this, arguments);
};
Util.inherit(ObjectPiece, base_scene);

ObjectPiece.prototype.onCollision = function(obj){
	// 会話するオブジェクトなので、クリックしたら会話する
	this.scene.mainStage().changeSubScene("talk");
};

ObjectPiece.prototype.draw = function(){
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

module.exports = ObjectPiece;
