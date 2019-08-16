'use strict';
var MasterRepositoryGenerator = require('../hakurei').Master.RepositoryGenerator;
var CONSTANT = require('../constant');
var data_list = require("../data/master/journal");

var JournalMasterRepository = MasterRepositoryGenerator.exec(
	{
		id: "string",
		no: "string",
		type: "number",
		title: "string",
		imageJa: "string",
		imageEn: "string",
		imageCh: "string",
	},
	{
		pk: "id",
		validate: CONSTANT.DEBUG.ON,
	},
	data_list);

module.exports = JournalMasterRepository;
