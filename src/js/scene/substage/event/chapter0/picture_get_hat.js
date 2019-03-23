'use strict';

// TODO: use_eyedrops だけでなく、picture クラス(指定の1枚絵を表示する)
// としてしまっていいかも

var base_scene = require('../../base');
var Util = require('../../../../hakurei').util;

var SceneSubStageGetHat = function(core) {
	base_scene.apply(this, arguments);
};
Util.inherit(SceneSubStageGetHat, base_scene);

SceneSubStageGetHat.prototype.init = function(next_field){
	base_scene.prototype.init.apply(this, arguments);

	// picture 表示後の遷移先フィールド
	this._next_field = next_field;

	this._pos_x = -this.root().width/2;
};
SceneSubStageGetHat.prototype.update = function(){
	base_scene.prototype.update.apply(this, arguments);

	if(this.frame_count <= 15) {
		this._pos_x += this.root().width/15;
	}
	else if(this.frame_count === 30) {
		this.core.audio_loader.playSound("touch");
	}
	else if(this.frame_count <= 90) {
		// 何もしない
	}
	else if(this.frame_count <= 105) {
		this._pos_x += this.root().width/15;
	}
	// プレイに戻る
	else if(this.frame_count > 120) {
		this.core.scene_manager.changeScene("stage", this._next_field);
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
