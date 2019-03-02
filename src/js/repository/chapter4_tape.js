'use strict';
var MasterRepositoryGenerator = require('../hakurei').Master.RepositoryGenerator;
var CONSTANT = require('../constant');
var data_list = require("../data/master/chapter4_tape");

var Chapter4TapeMasterRepository = MasterRepositoryGenerator.exec(
	{
		id: "string",
		audioName: "string",
	},
	{
		pk: "id",
		validate: CONSTANT.DEBUG.ON,
	},
	data_list);

module.exports = Chapter4TapeMasterRepository;
