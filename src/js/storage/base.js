'use strict';

var base_class = require('../hakurei').storage.base;
var Util = require('../hakurei').util;
var CONSTANT = require('../constant');

var StorageBase = function() {
	base_class.apply(this, arguments);

	this._data.__version = CONSTANT.VERSION;
};
Util.inherit(StorageBase, base_class);

module.exports = StorageBase;
