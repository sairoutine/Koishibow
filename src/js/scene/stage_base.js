'use strict';
var base_scene = require('../hakurei').scene.base;
var Util = require('../hakurei').util;
var SceneStageBase = function(core) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneStageBase, base_scene);

module.exports = SceneStageBase;
