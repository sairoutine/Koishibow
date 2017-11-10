'use strict';
var base_object = require('../../hakurei').object.base;
var Util = require('../../hakurei').util;

var ObjectBase = function(core) {
	base_object.apply(this, arguments);

	this._z = 0;
	this._position_type = null;
};
Util.inherit(ObjectBase, base_object);

ObjectBase.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._z = 0;
	this._position_type = null;
};


ObjectBase.prototype.z = function() {
	if (this._position_type) {
		return 10000;
	}
	else {
		return this._z;
	}
};

ObjectBase.prototype.setZ = function(z) {
	this._z = z;
};

ObjectBase.prototype.addPositionType = function(type) {
	this._position_type = type;
};




module.exports = ObjectBase;
