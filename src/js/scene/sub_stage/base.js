'use strict';
var base_scene = require('../stage_base');
var Util = require('../../hakurei').util;

var SceneSubStageBase = function(core, stage) { // stage は stage_base class を継承したオブジェクト
	base_scene.apply(this, arguments);
};
Util.inherit(SceneSubStageBase, base_scene);

SceneSubStageBase.prototype.koishi = function(){
	return this.parent.koishi();
};

SceneSubStageBase.prototype.mainStage = function(){
	return this.parent.mainStage();
};




module.exports = SceneSubStageBase;
