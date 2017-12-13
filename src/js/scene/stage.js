'use strict';

var base_scene = require('../hakurei').scene.base;
var Util = require('../hakurei').util;

var CONSTANT = require('../constant');

var SceneSubStagePlay = require('./substage/play'); // ゲーム操作可能
var SceneSubStageTalk = require('./substage/talk'); // こいし会話中
var SceneSubStageMenu = require('./substage/menu'); // アイテムメニュー
var SceneSubStageJournal = require('./substage/journal'); // ジャーナル表示
//var SceneSubStageObjectDetail = require('./substage/object_detail'); // オブジェクト詳細

var RightNextFieldButton = require('../object/ui/right_next_field_button');
var LeftNextFieldButton = require('../object/ui/left_next_field_button');
var ItemMenuButton = require('../object/ui/item_menu_button');
var EyeButton = require('../object/ui/eye_button');

var BlackMist = require('../object/black_mist');

var Koishi = require('../object/koishi');

var ObjectStaticImage = require('../object/pieces/static_image');
var ObjectAnimeImage = require('../object/pieces/anime_image');
var ObjectJournal = require('../object/pieces/journal');
var ObjectAnimeEventImage = require('../object/pieces/anime_event_image');

var FieldMap = require('../config/field');

var SceneStage = function(core) {
	base_scene.apply(this, arguments);

	// 自機
	this.koishi = new Koishi(this);

	// ステージ上のオブジェクト一覧
	this.pieces = [];

	// UI パーツ
	this.right_next_field_button = new RightNextFieldButton(this);
	this.left_next_field_button  = new LeftNextFieldButton(this);
	this.item_menu_button        = new ItemMenuButton(this);
	this.eye_button              = new EyeButton(this);

	// 画面の枠
	this.black_mist = new BlackMist(this);

	// 3rd eye 使用中か否か
	this._is_using_eye = false;


	// 通常
	this.addSubScene("play", new SceneSubStagePlay(core));
	// 会話中
	this.addSubScene("talk", new SceneSubStageTalk(core));
	// アイテムメニュー
	this.addSubScene("menu", new SceneSubStageMenu(core));
	// ジャーナルを読む
	this.addSubScene("journal", new SceneSubStageJournal(core));
	// オブジェクト詳細
	//this.addSubScene("object_detail", new SceneSubStageObjectDetail(core));
};
Util.inherit(SceneStage, base_scene);

SceneStage.prototype.init = function(field_name, from_field_name){
	base_scene.prototype.init.apply(this, arguments);

	from_field_name = from_field_name || null; // undefined -> null に変換

	// 現在のフィールド
	this.core.save_manager.setCurrentField(field_name);
	this.core.save_manager.save();

	// フィールドの情報
	var field_data = this.getFieldData();

	// 自機
	this.koishi.init();

	// ステージ上のオブジェクト一覧
	this._setupPieces();

	// UI パーツ
	this.right_next_field_button.init();
	this.left_next_field_button.init();
	this.item_menu_button.init();
	this.eye_button.init();

	// 画面の枠
	this.black_mist.init();

	// 3rd eye 使用中か否か
	this._is_using_eye = false;

	// こいしの初期位置

	// フィールド開始時のこいしの初期位置の決定
	var pos;
	if (field_data.left_field === from_field_name) {
		// 左のフィールドからきた場合
		pos = field_data.left_start_position;
		this.koishi.setPosition(pos.x, pos.y);
	}
	else if (field_data.right_field === from_field_name) {
		// 右のフィールドからきた場合
		pos = field_data.right_start_position;
		this.koishi.setPosition(pos.x, pos.y);
		this.koishi.setReflect(true);
	}
	else {
		// あり得ない想定
		throw new Error("illegal field data.");
	}

	// BGM 止める
	if(!this.core.audio_loader.isPlayingBGM(field_data.bgm)) {
		// 今流れているBGMを止める
		this.core.stopBGM();
		// 指定フレーム数からBGM再生
		this.setWaitToStartBGM(field_data.bgm, 60);

	}

	// フィールド移動時にフェードイン／アウトする
	this.setFadeIn(30,  "black");
	this.setFadeOut(30, "black");


	this.changeSubScene("play");
};

SceneStage.prototype.isUsingEye = function() {
	return this._is_using_eye;
};

SceneStage.prototype.switchEyeOn = function() {
	this._is_using_eye = true;

	// SE 再生
	this.core.audio_loader.playSound("use_3rdeye");

	// BGM 変更
	this.core.audio_loader.muteAllBGM();
	this.core.audio_loader.addBGM("using_3rdeye");

	this.koishi.useEye();
};
SceneStage.prototype.switchEyeOff = function() {
	this._is_using_eye = false;

	// BGM を通常に戻す
	this.core.audio_loader.stopBGM("using_3rdeye");
	this.core.audio_loader.unMuteWithFadeInAllBGM(3); // N秒かけてフェードイン

	this.koishi().unUseEye();
};

SceneStage.prototype.beforeDraw = function() {
	var field_data = this.getFieldData();

	// chapter 0 で3rd eye を使用していないときのみ
	// ランダムノイズ再生
	// N秒ごとにN%の確率で再生
	if (field_data.chapter === 0 && !this.isUsingEye()) {
		if(this.core.frame_count % CONSTANT.CHAPTER0.NOISE_SOUND_INTERVAL_COUNT === 0) {
			if (Util.getRandomInt(100) <= CONSTANT.CHAPTER0.NOISE_SOUND_PROB) {
				var sound_name = CONSTANT.CHAPTER0.NOISE_SOUND_LIST[ Util.getRandomInt(0, CONSTANT.CHAPTER0.NOISE_SOUND_LIST.length - 1) ];
				this.core.audio_loader.playSound(sound_name);
			}
		}
	}

	// 左クリック位置を出力
	if (CONSTANT.DEBUG.ON) {
		if(this.core.input_manager.isLeftClickPush()) {
			var x = this.core.input_manager.mousePositionX();
			var y = this.core.input_manager.mousePositionY();

			console.log("x: " + x + ", y: " + y);
		}
	}

	// 自機
	this.koishi.beforeDraw();
	// ステージ上のオブジェクト一覧
	for (var i = 0, len = this.pieces.length; i < len; i++) {
		this.pieces[i].beforeDraw();
	}
	// UI パーツ
	this.right_next_field_button.beforeDraw();
	this.left_next_field_button.beforeDraw();
	this.item_menu_button.beforeDraw();
	this.eye_button.beforeDraw();
	// 画面の枠
	this.black_mist.beforeDraw();

	// サブシーン
	base_scene.prototype.beforeDraw.apply(this, arguments);
};

// 画面更新
SceneStage.prototype.draw = function(){
	var field_data = this.getFieldData();
	var ctx = this.core.ctx;

	// 背景描画
	var bg = this.core.image_loader.getImage(field_data.background);
	ctx.save();
	ctx.drawImage(bg,
		0,
		0,
		bg.width,
		bg.height,
		0,
		0,
		this.width,
		this.height
	);
	ctx.restore();

	// 自機
	this.koishi.draw();
	// ステージ上のオブジェクト一覧
	for (var i = 0, len = this.pieces.length; i < len; i++) {
		this.pieces[i].draw();
	}
	// UI パーツ
	this.right_next_field_button.draw();
	this.left_next_field_button.draw();
	this.item_menu_button.draw();
	this.eye_button.draw();
	// 画面の枠
	this.black_mist.draw();

	// サブシーン描画
	base_scene.prototype.draw.apply(this, arguments);
};

SceneStage.prototype.getFieldData = function(){
	return FieldMap[this.core.save_manager.getCurrentField()];
};

SceneStage.prototype._setupPieces = function() {
	var field_data = this.getFieldData();

	this.pieces = [];

	var object_data_list = field_data.objects;

	for (var i = 0, len = object_data_list.length; i < len; i++) {
		var data = object_data_list[i];
		var object;
		if (data.type === CONSTANT.STATIC_IMAGE_TYPE) { // 静止オブジェクト
			object = new ObjectStaticImage(this);
		}
		else if (data.type === CONSTANT.ANIME_IMAGE_TYPE) { // サードアイを当てると動くオブジェクト
			object = new ObjectAnimeImage(this);
		}
		else if (data.type === CONSTANT.JOURNAL_TYPE) { // ジャーナル
			object = new ObjectJournal(this);
		}
		else if (data.type === CONSTANT.ANIME_EVENT_IMAGE_TYPE) { // イベント発生オブジェクト
			object = new ObjectAnimeEventImage(this);
		}
		object.init();
		object.setData(data);
		this.pieces.push(object);
	}
};

module.exports = SceneStage;
