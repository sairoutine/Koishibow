'use strict';
var MasterRepositoryGenerator = require('../hakurei').Master.RepositoryGenerator;
var CONSTANT = require('../constant');
var data_list = require("../master/journal");

var JournalMasterRepository = MasterRepositoryGenerator.exec(
	{
		id: "string",
		type: "number",
		title: "string",
		image: "string",
	},
	{
		pk: "id",
		validate: CONSTANT.DEBUG.ON,
	},
	data_list);

module.exports = JournalMasterRepository;
