'use strict';
var MasterRepositoryGenerator = require('../hakurei').Master.RepositoryGenerator;
var CONSTANT = require('../constant');
var data_list = require("../data/master/chapter");

var ChapterMasterRepository = MasterRepositoryGenerator.exec(
	{
		key:          "string",
		no:           "number",
		openingMovie: "string",
		firstField:   "string",
	},
	{
		pk: "key",
		validate: CONSTANT.DEBUG.ON,
	},
	data_list);

module.exports = ChapterMasterRepository;
