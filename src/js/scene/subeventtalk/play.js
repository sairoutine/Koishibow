'use strict';

var base_scene = require('./base');

var Util = require('../../hakurei').util;

var SceneSubEventTalkPlay = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneSubEventTalkPlay, base_scene);

module.exports = SceneSubEventTalkPlay;
