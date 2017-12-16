'use strict';

var base_scene = require('./base');

var Util = require('../../hakurei').util;

var SceneEventTrialLast = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneEventTrialLast, base_scene);

SceneEventTrialLast.prototype.isFadeIn = function(){
	return true;
};
SceneEventTrialLast.prototype.isFadeOut = function(){
	return true;
};

SceneEventTrialLast.prototype.background = function(){
	return "tobecontinued";
};

SceneEventTrialLast.prototype.scriptMap = function(){
	return {
		240: [
			{
				command: "change_scene",
				argument_list: ["title"],
			},
		]
	};
};




module.exports = SceneEventTrialLast;
