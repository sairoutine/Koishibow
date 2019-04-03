'use strict';
var MasterRepositoryGenerator = require('../hakurei').Master.RepositoryGenerator;
var CONSTANT = require('../constant');
var data_list = require("../data/master/field");

var FieldMasterRepository = MasterRepositoryGenerator.exec(
	{
		key:                  "string",
		chapter:              "number",
		bgm:                  "string",
		sub_bgms:             "array",
		initialProcess:       "hash",
		defaultStartPosition: "hash", // セーブしてゲーム開始した際の初期位置、その他での遷移での初期位置
		rightStartPosition:   "hash", // 右から来た場合のこいし初期位置
		leftStartPosition:    "hash", // 左から〃
		upStartPosition:      "hash", // 上から〃
		downStartPosition:    "hash", // 下から〃
		rightField:           "number",
		leftField:            "number",
		upField:              "number",
		downField:            "number",
		background:           "number",
		walkSound:            "number",
		objects:              "array",
	},
	{
		pk: "key",
		validate: CONSTANT.DEBUG.ON,
	},
	data_list);

module.exports = FieldMasterRepository;
