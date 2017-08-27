'use strict';
var base_scene = require('../hakurei').scene.base;
var Util = require('../hakurei').util;

var SceneStageBase = function(core) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneStageBase, base_scene);


SceneStageBase.prototype.koishi = function(){
	throw new Error("koishi method must be implemented");
};

SceneStageBase.prototype.mainStage = function(){
	throw new Error("mainStage method must be implemented");
};




module.exports = SceneStageBase;
