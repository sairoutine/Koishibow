'use strict';

/* ジャーナルをまとめた本 */

var base_object = require('./base');
var Util = require('../../hakurei').util;

var ObjectMenuItemJournalBook = function(scene) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectMenuItemJournalBook, base_object);

module.exports = ObjectMenuItemJournalBook;
