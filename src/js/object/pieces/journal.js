'use strict';
var base_object = require('./acquirable_base');
var Util = require('../../hakurei').util;

var ObjectJournal = function(core) {
	base_object.apply(this, arguments);

	this._journal_id = null;
};
Util.inherit(ObjectJournal, base_object);

ObjectJournal.prototype.init = function(){
	base_object.prototype.init.apply(this, arguments);

	this._journal_id = null;
};

ObjectJournal.prototype.setData = function(data) {
	base_object.prototype.setData.apply(this, arguments);

	// 表示するジャーナル画像
	this._journal_id = data.journal_id;
};

ObjectJournal.prototype.acquire = function() {
	// ジャーナル獲得
	this.core.save_manager.journal.addJournal(this._journal_id);

	// ジャーナル画像表示シーンへ遷移
	this.scene.root().changeSubScene("journal", this._journal_id);

	// 音を再生
	this.core.audio_loader.playSound("show_journal");
};

module.exports = ObjectJournal;
