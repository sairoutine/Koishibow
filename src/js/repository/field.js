'use strict';
var MasterRepositoryGenerator = require('../hakurei').Master.RepositoryGenerator;
var CONSTANT = require('../constant');
var data_list = require("../data/master/field");

var FieldMasterRepository = MasterRepositoryGenerator.exec(
	{
		key:                "string",
		chapter:            "number",
		bgm:                "string",
		sub_bgms:           "array",
		event:              "string",
		subevent:           "string",
		rightStartPosition: "hash",
		leftStartPosition:  "hash",
		rightField:         "number",
		leftField:          "number",
		background:         "number",
		walkSound:          "number",
		objects:            "array",
	},
	{
		pk: "key",
		validate: CONSTANT.DEBUG.ON,
	},
	data_list);

module.exports = FieldMasterRepository;