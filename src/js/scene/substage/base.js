'use strict';

var base_scene = require('../../hakurei').scene.base;

var Util = require('../../hakurei').util;

var SceneSceneSubStageBase = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneSceneSubStageBase, base_scene);

module.exports = SceneSceneSubStageBase;
