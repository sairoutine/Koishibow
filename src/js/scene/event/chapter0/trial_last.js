'use strict';

var base_scene = require('../base');

var Util = require('../../../hakurei').util;

var SceneDefault = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneDefault, base_scene);

SceneDefault.prototype.isFadeIn = function(){
	return true;
};
SceneDefault.prototype.isFadeOut = function(){
	return true;
};

SceneDefault.prototype.background = function(){
	return "tobecontinued";
};

SceneDefault.prototype.scriptMap = function(){
	return {
		240: [
			{
				command: "change_scene",
				argument_list: ["title"],
			},
		]
	};
};




module.exports = SceneDefault;
