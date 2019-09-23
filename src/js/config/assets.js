'use strict';

var Common = require("./assets/common");
var Production = require("./assets/production");

var CommonJA = require("./assets/ja/common");
var ProductionJA = require("./assets/ja/production");
var CommonEN = require("./assets/en/common");
var ProductionEN = require("./assets/en/production");
var CommonCH = require("./assets/ch/common");
var ProductionCH = require("./assets/ch/production");
var CommonTW = require("./assets/tw/common");
var ProductionTW = require("./assets/tw/production");

var Util = require("../hakurei").Util;
var CONSTANT = require("../constant");

var AssetsConfig = {};
AssetsConfig.images = Util.assign(Common.images, CONSTANT.TRIAL ? {} : Production.images);
AssetsConfig.sounds = Util.assign(Common.sounds, CONSTANT.TRIAL ? {} : Production.sounds);
AssetsConfig.bgms   = Common.bgms.concat(CONSTANT.TRIAL ? [] : Production.bgms);
AssetsConfig.fonts  = Util.assign(Common.fonts,  CONSTANT.TRIAL ? {} : Production.fonts);

if (CONSTANT.LANGUAGE === "ja") {
	AssetsConfig.images = Util.assign(AssetsConfig.images, CommonJA.images);
	AssetsConfig.images = Util.assign(AssetsConfig.images, CONSTANT.TRIAL ? {} : ProductionJA.images);

	AssetsConfig.fonts = Util.assign(AssetsConfig.fonts, CommonJA.fonts);
	AssetsConfig.fonts = Util.assign(AssetsConfig.fonts, CONSTANT.TRIAL ? {} : ProductionJA.fonts);
}
else if (CONSTANT.LANGUAGE === "en") {
	AssetsConfig.images = Util.assign(AssetsConfig.images, CommonEN.images);
	AssetsConfig.images = Util.assign(AssetsConfig.images, CONSTANT.TRIAL ? {} : ProductionEN.images);

	AssetsConfig.fonts = Util.assign(AssetsConfig.fonts, CommonEN.fonts);
	AssetsConfig.fonts = Util.assign(AssetsConfig.fonts, CONSTANT.TRIAL ? {} : ProductionEN.fonts);
}
else if (CONSTANT.LANGUAGE === "ch") {
	AssetsConfig.images = Util.assign(AssetsConfig.images, CommonCH.images);
	AssetsConfig.images = Util.assign(AssetsConfig.images, CONSTANT.TRIAL ? {} : ProductionCH.images);

	AssetsConfig.fonts = Util.assign(AssetsConfig.fonts, CommonCH.fonts);
	AssetsConfig.fonts = Util.assign(AssetsConfig.fonts, CONSTANT.TRIAL ? {} : ProductionCH.fonts);
}
else if (CONSTANT.LANGUAGE === "tw") {
	AssetsConfig.images = Util.assign(AssetsConfig.images, CommonTW.images);
	AssetsConfig.images = Util.assign(AssetsConfig.images, CONSTANT.TRIAL ? {} : ProductionTW.images);

	AssetsConfig.fonts = Util.assign(AssetsConfig.fonts, CommonTW.fonts);
	AssetsConfig.fonts = Util.assign(AssetsConfig.fonts, CONSTANT.TRIAL ? {} : ProductionTW.fonts);
}
else {
	throw new Error("Invaid language.");
}

module.exports = AssetsConfig;
