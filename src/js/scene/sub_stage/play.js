'use strict';
var base_scene = require('./base');
var Util = require('../../hakurei').util;

var SceneSubStagePlay = function(core, stage) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneSubStagePlay, base_scene);

module.exports = SceneSubStagePlay;
