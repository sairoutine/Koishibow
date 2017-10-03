'use strict';

// こいしの歩く速度
var SPEED = 2;

// こいしの歩ける奥行き制限(px)
var WALK_DEPTH_LIMIT = 300;



var base_object = require('../hakurei').object.base;
var util = require('../hakurei').util;
var CONSTANT = require('../constant');
var jsonDataOfWait = require('../anime/koishi/wait_anime_1');
var jsonDataOfWalk = require('../anime/koishi/walk_anime_1');
var SS = require('../object/sprite_studio');


var Koishi = function (scene, parent) {
	base_object.apply(this, arguments);

	this.sprite = new SS(this.scene);
};
util.inherit(Koishi, base_object);

Koishi.prototype.init = function() {
	base_object.prototype.init.apply(this, arguments);

	this._target_x = 0;
	this._target_y = 0;

	this.setVelocity({magnitude:0, theta:0});
};

Koishi.prototype.setPosition = function(x, y) {
	base_object.prototype.setPosition.apply(this, arguments);
	this.sprite.init(x, y, jsonDataOfWait, 0, {scale: 0.6});
};

Koishi.prototype.setWait = function() {
	this.sprite.changeAnimation(jsonDataOfWait);
};
Koishi.prototype.setWalk = function() {
	this.sprite.changeAnimation(jsonDataOfWalk);
};




Koishi.prototype.setReflect = function(flag) {
	this.sprite.setReflect(flag);
};




Koishi.prototype.beforeDraw = function(){
	base_object.prototype.beforeDraw.apply(this, arguments);

	// update sprite
	this.sprite.x(this.x());
	this.sprite.y(this.y());
	this.sprite.beforeDraw();

	// move
	if (this._target_x) {
		if (this.x() + SPEED >= this._target_x && this._target_x > this.x() - SPEED) {
			// end move
			this._target_x = 0;
			this.setVelocity({magnitude:0, theta:0});

			this.setWait();
		}
	}
	if (this._target_y) {
		if (this.y() + SPEED >= this._target_y && this._target_y > this.y() - SPEED) {
			// end move
			this._target_y = 0;
			this.setVelocity({magnitude:0, theta:0});

			this.setWait();
		}
	}

	// 一定以上の奥行きには移動できない
	if (this.y() < this.scene.height - WALK_DEPTH_LIMIT) {
		this.y(this.scene.height - WALK_DEPTH_LIMIT);
	}
};
Koishi.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	this.sprite.draw();
};

Koishi.prototype.setMoveTarget = function(x, y) {
	base_object.prototype.beforeDraw.apply(this, arguments);
	var ax = x - this.x();
	var ay = y - this.y();

	var theta = util.radianToTheta(Math.atan2(ay, ax));

	this.setVelocity({magnitude:SPEED, theta:theta});

	this._target_x = x;
	this._target_y = y;

	this.setWalk();
	if (this._target_x > this.x()) {
		this.sprite.setReflect(false);
	}
	else {
		this.sprite.setReflect(true);
	}
};

module.exports = Koishi;
