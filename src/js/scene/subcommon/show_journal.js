'use strict';

// ジャーナル表示

var base_scene = require('./base');

var Util = require('../../hakurei').util;
var JournalMasterRepository = require('../../repository/journal');
var CONSTANT_BUTTON = require('../../hakurei').constant.button;
var CONSTANT = require('../../constant');

var SceneSubStageJournal = function(core) {
	base_scene.apply(this, arguments);

	// 表示するジャーナル画像名
	this._picture_name = null;
};
Util.inherit(SceneSubStageJournal, base_scene);

SceneSubStageJournal.prototype.init = function(journal_id, return_subscene){
	base_scene.prototype.init.apply(this, arguments);

	// 表示するジャーナル画像名
	this._picture_name = null;

	// 再生後の戻り先サブシーン
	this._return_subscene = return_subscene || "play";

	// 英語版
	if (CONSTANT.LANGUAGE === 'en') {
		this._picture_name = JournalMasterRepository.find(journal_id).imageEn();
	}
	// 簡体字版
	else if (CONSTANT.LANGUAGE === 'ch') {
		this._picture_name = JournalMasterRepository.find(journal_id).imageCh();
	}
	// 繁体字版
	else if (CONSTANT.LANGUAGE === 'tw') {
		this._picture_name = JournalMasterRepository.find(journal_id).imageTw();
	}
	// 日本語版
	else {
		this._picture_name = JournalMasterRepository.find(journal_id).imageJa();
	}

	// 音を再生
	this.core.audio_loader.playSound("show_journal");
};

SceneSubStageJournal.prototype.update = function(){
	base_scene.prototype.update.apply(this, arguments);

	// プレイに戻る
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.A) || this.core.input_manager.isKeyPush(CONSTANT_BUTTON.B)) {
		this.core.audio_loader.playSound("show_journal");
		this.root().returnSubScene(this._return_subscene);
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
