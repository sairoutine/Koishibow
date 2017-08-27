'use strict';
var base_scene = require('./base');
var Util = require('../../hakurei').util;

var SceneSubStageTalk = function(core, stage) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneSubStageTalk, base_scene);

module.exports = SceneSubStageTalk;
