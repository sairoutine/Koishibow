'use strict';

// プレイヤーに何も操作させない

var base_scene = require('./base');
var Util = require('../../hakurei').util;

var SceneSubStageLock = function(core) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneSubStageLock, base_scene);

module.exports = SceneSubStageLock;
