'use strict';

// TODO: use_eyedrops だけでなく、picture クラス(指定の1枚絵を表示する)
// としてしまっていいかも

var base_scene = require('./base');

var Util = require('../../hakurei').util;

var SceneSubStageJournal = function(core) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneSubStageJournal, base_scene);

SceneSubStageJournal.prototype.init = function(picture_name){
	base_scene.prototype.init.apply(this, arguments);
};

SceneSubStageJournal.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	// プレイに戻る
	if(this.frame_count > 120) {
		this.core.audio_loader.playSound("use_eyedrops");
		this.root().changeSubScene("play");
	}
};

SceneSubStageJournal.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	ctx.save();

	var scale = this.frame_count/30;

	if (scale > 1) scale = 1;

	var picture = this.core.image_loader.getImage("picture_use_eyedrops");

	var width = picture.width * 2/3 * scale;
	var height = picture.height * 2/3 * scale;

	ctx.translate(43, 731);
	ctx.drawImage(picture,
		0,
		-height,
		width,
		height
	);

	ctx.restore();

};
module.exports = SceneSubStageJournal;
