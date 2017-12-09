'use strict';

var base_scene = require('../hakurei').scene.base;
var Util = require('../hakurei').util;

var CONSTANT = require('../constant');

var SceneSubStagePlay = require('./substage/play'); // ゲーム操作可能
var SceneSubStageTalk = require('./substage/talk'); // こいし会話中
var SceneSubStageMenu = require('./substage/menu'); // アイテムメニュー
var SceneSubStagePaper = require('./substage/journal'); // ジャーナル表示
//var SceneSubStagePaper = require('./substage/object_detail'); // オブジェクト詳細
/*
var Koishi = require('../object/koishi');

var ObjectStaticImage = require('../object/object/static_image');
var ObjectAnimeImage = require('../object/object/anime_image');
var ObjectPaper = require('../object/object/paper');
var ObjectAnimeEventImage = require('../object/object/anime_event_image');

var LeftYajirushi = require('../object/left_yajirushi');
var RightYajirushi = require('../object/right_yajirushi');
var ItemButton = require('../object/item_button');
var Eye = require('../object/eye');

var jsonDataOfBlackMist = require('../anime/black_mist/eff01_anime_1');
var jsonDataOfRedMist = require('../anime/black_mist/eff02_anime_1');
var SS = require('../object/sprite_studio');

var FieldMap = require('../field');
*/

var SceneStage = function(core) {
	base_scene.apply(this, arguments);

};
Util.inherit(SceneStage, base_scene);

module.exports = SceneStage;
