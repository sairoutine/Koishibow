'use strict';
var MasterRepositoryGenerator = require('../hakurei').Master.RepositoryGenerator;
var CONSTANT = require('../constant');
var data_list = require("../data/master/event_talk_old");

var EventTalkOldMasterRepository = MasterRepositoryGenerator.exec(
	{
		key:        "string",
		serifWindow:"string",
		serifs:     "array",
		animeNum:   "number",
		bg:   "string",
		expAnimes:  "hash",
		startAnime: "string",
		endAnime:   "string",
		bgm:        "string",
		startSE:    "string",
		endSE:      "string",
		endProcess: "array",
	},
	{
		pk: "key",
		validate: CONSTANT.DEBUG.ON,
	},
	data_list);

module.exports = EventTalkOldMasterRepository;