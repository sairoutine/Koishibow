'use strict';

/* 会話で消費するアイテム */

var base_object = require('./base');
var Util = require('../../hakurei').util;

var ObjectMenuItemNonUsable = function(scene) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectMenuItemNonUsable, base_object);

// 使用できるか否か判定
ObjectMenuItemNonUsable.prototype.isEnableToUse = function() {
	return false;
};

module.exports = ObjectMenuItemNonUsable;
