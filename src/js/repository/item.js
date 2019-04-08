'use strict';
var MasterRepositoryGenerator = require('../hakurei').Master.RepositoryGenerator;
var CONSTANT = require('../constant');
var data_list = require("../data/master/item");

var ItemMasterRepository = MasterRepositoryGenerator.exec(
	{
		id:              "number",
		type:            "number",
		name:            "string",
		isShowChapter4:  "boolean",
		imageName:       "string",
		soundName:       "string",
		descriptionText: "string",
		examineText:     "string",
	},
	{
		pk: "id",
		validate: CONSTANT.DEBUG.ON,
	},
	data_list);

module.exports = ItemMasterRepository;
