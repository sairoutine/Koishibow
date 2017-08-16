'use strict';
var base_object = require('../hakurei').object.base;
var util = require('../hakurei').util;
var CONSTANT = require('../constant');
var jsonData = require('../animetest');
var SS = require('../object/sprite_studio');


var Koishi = function (scene, parent) {
	base_object.apply(this, arguments);
};
util.inherit(Koishi, base_object);

Koishi.prototype.init = function(x, y) {
	base_object.prototype.init.apply(this, arguments);
	this.x(x);
	this.y(y);

	this.sprite = new SS(this.scene);
	this.sprite.init(x, y, jsonData, 0, {scale: 0.4});
};

Koishi.prototype.beforeDraw = function(){
	base_object.prototype.beforeDraw.apply(this, arguments);

	this.sprite.x(this.x());
	this.sprite.y(this.y());
	this.sprite.beforeDraw();
};
Koishi.prototype.draw = function(){
	base_object.prototype.draw.apply(this, arguments);
	this.sprite.draw();
};

module.exports = Koishi;
