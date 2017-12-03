'use strict';

var base_scene = require('../hakurei').scene.base;

var Util = require('../hakurei').util;

var SceneDefault = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneDefault, base_scene);

module.exports = SceneDefault;
