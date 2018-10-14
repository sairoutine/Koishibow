'use strict';

var Common = require("./assets/common");
var Production = require("./assets/production");
var Util = require("../hakurei").Util;
var CONSTANT = require("../constant");

var AssetsConfig = {};
AssetsConfig.images = Util.assign(Common.images, CONSTANT.TRIAL ? {} : Production.images);
AssetsConfig.sounds = Util.assign(Common.sounds, CONSTANT.TRIAL ? {} : Production.sounds);
AssetsConfig.bgms   = Common.bgms.concat(CONSTANT.TRIAL ? [] : Production.bgms);
AssetsConfig.fonts  = Util.assign(Common.fonts,  CONSTANT.TRIAL ? {} : Production.fonts);

module.exports = AssetsConfig;
