'use strict';
var base_object = require('./anime_image');
var Util = require('../../hakurei').util;
var AnimeMap = require('../../config/object_anime');

var ObjectSuspendedTree = function(core) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectSuspendedTree, base_object);

ObjectSuspendedTree.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);

	if(this.core.save_manager.scenario.getPlayedCount("chapter1_03-afterWork")) {
		this.ss.setAnime({
			default: AnimeMap[data.after_anime],
		});
		this.ss.init();
	}
};

module.exports = ObjectSuspendedTree;
