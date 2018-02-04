'use strict';
var CONSTANT = require('../constant');

var JournalList = [
	{
		id: "journal001",
		type: CONSTANT.JOURNAL.IMAGE,
		title: "ジャーナル1 タイトル",
		image: "journal001",
	},
	{
		id: "journal002",
		type: CONSTANT.JOURNAL.IMAGE,
		title: "未獲得",
		image: "journal002",
	},
	{
		id: "journal003",
		type: CONSTANT.JOURNAL.IMAGE,
		title: "ジャーナル3 タイトル",
		image: "journal003",
	},
	{
		id: "journal004",
		type: CONSTANT.JOURNAL.IMAGE,
		title: "ジャーナル4 タイトル",
		image: "journal004",
	},
	{
		id: "journal005",
		type: CONSTANT.JOURNAL.IMAGE,
		title: "ジャーナル5 タイトル",
		image: "journal005",
	},

	{
		id: "journal006",
		type: CONSTANT.JOURNAL.IMAGE,
		title: "未獲得",
		image: "journal006",
	},
	{
		id: "journal007",
		type: CONSTANT.JOURNAL.IMAGE,
		title: "未獲得",
		image: "journal006",
	},
	{
		id: "journal008",
		type: CONSTANT.JOURNAL.IMAGE,
		title: "未獲得",
		image: "journal006",
	},
	{
		id: "journal009",
		type: CONSTANT.JOURNAL.IMAGE,
		title: "未獲得",
		image: "journal006",
	},
	{
		id: "journal010",
		type: CONSTANT.JOURNAL.IMAGE,
		title: "未獲得",
		image: "journal006",
	},
];

var Journal = {};
for (var i = 0, len = JournalList.length; i < len; i++) {
	var conf = JournalList[i];
	if(Journal[conf.id]) throw new Error ("journal ID: " + conf.id + "is duplicated");

	Journal[conf.id] = conf;
}

module.exports = Journal;
