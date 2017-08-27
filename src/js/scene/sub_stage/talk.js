'use strict';
var base_scene = require('./base');
var Util = require('../../hakurei').util;

var SceneSubStageTalk = function(core, stage) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneSubStageTalk, base_scene);






// セリフウィンドウ表示
SceneSubStageTalk.prototype._showMessageWindow = function(){
	var ctx = this.core.ctx;
	ctx.save();

	var x = this.parent.koishi().x() - 0;
	var y = this.parent.koishi().y() - 330;

	var fukidashi = this.core.image_loader.getImage('fukidashi');

	// TODO: 実装
	if(false) {
		x = -x; // 反転
		ctx.transform(-1, 0, 0, 1, fukidashi.width, 0); // 左右反転
	}

	ctx.drawImage(fukidashi,
					x,
					y,
					fukidashi.width * 0.4,
					fukidashi.height * 0.4
	);
	ctx.restore();
};



module.exports = SceneSubStageTalk;
