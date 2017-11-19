'use strict';
var base_scene = require('./base');
var Util = require('../../hakurei').util;

var SerifManager = require('../../hakurei').serif_manager;

var SceneSubStageTalk = function(core, stage) {
	base_scene.apply(this, arguments);

	this._picture = null;

};
Util.inherit(SceneSubStageTalk, base_scene);

SceneSubStageTalk.prototype.init = function(picture_name){
	base_scene.prototype.init.apply(this, arguments);

	this._picture = picture_name;
};

SceneSubStageTalk.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	// プレイに戻る
	if(this.core.input_manager.isLeftClickPush()) {
		this.core.playSound("show_journal");
		this.mainStage().changeSubScene("play");
	}
};

SceneSubStageTalk.prototype.draw = function(){
	base_scene.prototype.draw.apply(this, arguments);
	var ctx = this.core.ctx;

	// ピクチャ表示
	this._showPicture();

};
// ピクチャ表示
SceneSubStageTalk.prototype._showPicture = function() {
	if(!this._picture) return;
	var ctx = this.core.ctx;

	ctx.save();

	var picture = this.core.image_loader.getImage(this._picture);

	ctx.translate(this.mainStage().width/2, this.mainStage().height/2);
	ctx.drawImage(picture,
					-picture.width/3,
					-picture.height/3,
					picture.width * 2/3,
					picture.height * 2/3
	);

	ctx.restore();
};
module.exports = SceneSubStageTalk;
