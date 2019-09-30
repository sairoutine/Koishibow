'use strict';
var MasterRepositoryGenerator = require('../hakurei').Master.RepositoryGenerator;
var CONSTANT = require('../constant');
var data_list = require("../data/master/event_talk_old");

var EventTalkOldMasterRepository = MasterRepositoryGenerator.exec(
	{
		key:        "string",
		chapter:    "number",
		serifWindow:"string",
		serifs:     "array",
		animeNum:   "number",
		bg:         "string",
		front:      "string",
		expAnimes:  "hash",
		startAnime: "string",
		endAnime:   "string",
		bgm:        "string",
		startSounds:"array",
		endSounds:  "array",
		endProcess: "array",
	},
	{
		pk: "key",
		validate: CONSTANT.DEBUG.ON,
	},
	data_list);

module.exports = EventTalkOldMasterRepository;
