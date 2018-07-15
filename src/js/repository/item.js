'use strict';
var MasterRepositoryGenerator = require('../hakurei').Master.RepositoryGenerator;
var CONSTANT = require('../constant');
var data_list = require("../data/master/item");

var ItemMasterRepository = MasterRepositoryGenerator.exec(
	{
		id:          "number",
		type:        "number",
		name:        "string",
		imageName:   "string",
		soundName:   "string",
		description: "string",
	},
	{
		pk: "id",
		validate: CONSTANT.DEBUG.ON,
	},
	data_list);

module.exports = ItemMasterRepository;
