'use strict';
var MasterRepositoryGenerator = require('../hakurei').Master.RepositoryGenerator;
var CONSTANT = require('../constant');
var data_list = require("../data/master/koishi_action");

var KoishiActionMasterRepository = MasterRepositoryGenerator.exec(
	{
		name:  "string",
		anime: "object",
		sound: "string",
	},
	{
		pk: "name",
		validate: CONSTANT.DEBUG.ON,
	},
	data_list);

module.exports = KoishiActionMasterRepository;
