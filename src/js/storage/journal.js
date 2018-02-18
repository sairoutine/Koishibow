'use strict';

// セーブデータ
var base_class = require('../hakurei').storage.base;
var Util = require('../hakurei').util;

var StorageJournal = function() {
	base_class.apply(this, arguments);
};
Util.inherit(StorageJournal, base_class);

// セーブファイル名
StorageJournal.KEY = function() {
	return "3rdeye_journal";
};

// 取得しているジャーナル一覧を取得
StorageJournal.prototype.getJournalList = function() {
	var list = this.get("journal_list");

	if(!list) list = [];

	return list;
};

// 取得しているジャーナル一覧を取得
StorageJournal.prototype.getJournal = function(index){
	var list = this.getJournalList();

	return list[index];
};

// ジャーナルを追加(追加したジャーナルのindexを返す)
StorageJournal.prototype.addJournal = function(journal_id){
	var list = this.getJournalList();

	list.push(journal_id);
	this.set("journal_list", list);
	return list.length - 1;
};
module.exports = StorageJournal;