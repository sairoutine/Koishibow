'use strict';
var base_scene = require('../stage_base');
var Util = require('../hakurei').util;
var SceneSubStageBase = function(core) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneSubStageBase, base_scene);

module.exports = SceneSubStageBase;
