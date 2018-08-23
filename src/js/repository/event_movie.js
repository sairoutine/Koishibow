'use strict';
var MasterRepositoryGenerator = require('../hakurei').Master.RepositoryGenerator;
var CONSTANT = require('../constant');
var data_list = require("../data/master/event_movie");

var EventMovieMasterRepository = MasterRepositoryGenerator.exec(
	{
		key:          "string",
		path: "string",
		isStopBGM:   "string",
	},
	{
		pk: "key",
		validate: CONSTANT.DEBUG.ON,
	},
	data_list);

module.exports = EventMovieMasterRepository;
