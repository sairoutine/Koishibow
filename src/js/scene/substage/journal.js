'use strict';

var base_scene = require('./base');

var Util = require('../../hakurei').util;

var SceneSubStageJournal = function(core) {
	base_scene.apply(this, arguments);

	// 表示するジャーナル画像名
	this._picture_name = null;
};
Util.inherit(SceneSubStageJournal, base_scene);

SceneSubStageJournal.prototype.init = function(journal_id){
	base_scene.prototype.init.apply(this, arguments);

	// 表示するジャーナル画像名
	// NOTE: 画像名 = ジャーナルID
	this._picture_name = journal_id;
};

SceneSubStageJournal.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	// プレイに戻る
	if(this.core.input_manager.isLeftClickPush()) {
		this.core.audio_loader.playSound("show_journal");
		this.root().changeSubScene("play");
	}
};

SceneSubStageJournal.prototype.afterDraw = function(){
	base_scene.prototype.draw.apply(this, arguments);

	// ジャーナル画像 表示
	this._showPicture();

};
// ピクチャ表示
SceneSubStageJournal.prototype._showPicture = function() {
	var ctx = this.core.ctx;

	ctx.save();

	var picture = this.core.image_loader.getImage(this._picture_name);

	var width = picture.width * 2/3;
	var height = picture.height * 2/3;

	ctx.translate(this.root().width/2, this.root().height/2);
	ctx.drawImage(picture,
		-width/2,
		-height/2,
		width,
		height
	);

	ctx.restore();
};




module.exports = SceneSubStageJournal;
