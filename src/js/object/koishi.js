'use strict';

var SPEED = 2;


var base_object = require('../hakurei').object.base;
var util = require('../hakurei').util;
var CONSTANT = require('../constant');
var jsonData = require('../anime/koishi_wait');
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
	this.x(x);
	this.y(y);
	this.sprite.init(x, y, jsonData, 0, {scale: 0.4});
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
			this._target_x = 0;
			this.setVelocity({magnitude:0, theta:0});
		}
	}
	if (this._target_y) {
		if (this.y() + SPEED >= this._target_y && this._target_y > this.y() - SPEED) {
			this._target_y = 0;
			this.setVelocity({magnitude:0, theta:0});
		}
	}

	// 一定以上の奥行きには移動できない
	if (this.y() < this.scene.height - 150) {
		this.y(this.scene.height - 150);
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

	if (this._target_x > this.x()) {
		this.sprite.setReflect(false);
	}
	else {
		this.sprite.setReflect(true);
	}
};

module.exports = Koishi;
