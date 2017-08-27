'use strict';
var base_scene = require('./base');
var Util = require('../../hakurei').util;

var SceneSubStagePlay = function(core, stage) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneSubStagePlay, base_scene);

SceneSubStagePlay.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	// フィールド遷移矢印
	ctx.font = "48px 'Migu'";
	ctx.textAlign = 'center';
	ctx.textBaseAlign = 'middle';
	ctx.fillStyle = 'rgb( 255, 255, 255 )';
	ctx.fillText("◀", 0 + 24, this.height/2);
	ctx.fillText("▶", this.width - 24, this.height/2);
};






module.exports = SceneSubStagePlay;
