'use strict';

/* ジャーナルをまとめた本 */

var base_object = require('./base');
var Util = require('../../hakurei').util;

var ObjectMenuItemJournalBook = function(scene) {
	base_object.apply(this, arguments);
};
Util.inherit(ObjectMenuItemJournalBook, base_object);

// アイテムが使用されたとき
ObjectMenuItemJournalBook.prototype.use = function(){
	// 音を再生
	this.core.audio_loader.playSound("show_journal");

	// ジャーナル一覧画面へ
	this.scene.root().changeSubScene("journal_menu");
};

module.exports = ObjectMenuItemJournalBook;
