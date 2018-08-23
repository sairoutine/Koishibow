'use strict';
var MasterRepositoryGenerator = require('../hakurei').Master.RepositoryGenerator;
var CONSTANT = require('../constant');
var data_list = require("../data/master/event_talk");

var EventTalkMasterRepository = MasterRepositoryGenerator.exec(
	{
		// TODO: フェードイン・フェードアウトするしないを設定できる
		key:        "string",
		serifWindow:"string",
		serifs:     "array",
		expAnimes:  "array",
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

module.exports = EventTalkMasterRepository;
