'use strict';

// TODO: use_eyedrops だけでなく、picture クラス(指定の1枚絵を表示する)
// としてしまっていいかも

var base_scene = require('../../../substage/base');

var Util = require('../../../../hakurei').util;

var SceneSubStageGetHat = function(core) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneSubStageGetHat, base_scene);

SceneSubStageGetHat.prototype.init = function(picture_name){
	base_scene.prototype.init.apply(this, arguments);

	this._pos_x = -this.root().width/2;
};
SceneSubStageGetHat.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	if(this.frame_count <= 15) {
		this._pos_x += this.root().width/15;
	}
	else if(this.frame_count === 30) {
		this.core.audio_loader.playSound("chapter0_myroom-get_hat");
	}
	else if(this.frame_count <= 90) {
		// 何もしない
	}
	else if(this.frame_count <= 105) {
		this._pos_x += this.root().width/15;
	}
	// プレイに戻る
	else if(this.frame_count > 120) {
		this.core.changeScene("stage", "chapter0_myroom");
	}
};

SceneSubStageGetHat.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	ctx.save();

	var picture = this.core.image_loader.getImage("picture_get_hat");
	var width = picture.width * 2/3;
	var height = picture.height * 2/3;

	ctx.translate(this._pos_x, this.root().height/2);
	ctx.drawImage(picture,
		-width/2,
		-height/2,
		width,
		height
	);

	ctx.restore();

};
module.exports = SceneSubStageGetHat;
