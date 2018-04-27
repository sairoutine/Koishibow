'use strict';

var base_scene = require('../hakurei').scene.base;
var Util = require('../hakurei').util;

var CONSTANT = require('../constant');

var SceneSubStagePlay = require('./substage/play'); // ゲーム操作可能
var SceneSubStageTalkWithObject = require('./substage/talk_with_object'); // こいし会話中
var SceneSubStageMenu = require('./substage/menu'); // アイテムメニュー
var SceneSubStageGameover = require('./substage/gameover'); // ゲームオーバー
var SceneSubStageJournal = require('./substage/journal'); // ジャーナル表示
var SceneSubStageJournalMenu = require('./substage/journal_menu'); // ジャーナル メニュー
var SceneSubStageGotItem = require('./substage/got_item'); // アイテム獲得
var SceneSubStageLock = require('./substage/lock');
var SceneSubStagePictureUseEyedrops = require('./substage/picture_use_eyedrops'); // 目薬使用1枚絵
var SceneSubStageEventChapter0GetHat = require('./substage/event/chapter0/get_hat');
var SceneSubStagePictureGetHat = require('./substage/picture_get_hat');
var SceneSubStageEventChapter0KokoroEncounter = require('./substage/event/chapter0/kokoro_encounter');
var SceneSubStageEventChapter0SatoriEncounterBegin = require('./substage/event/chapter0/satori_encounter_begin');
var SceneSubStageEventOpeningMovie = require('./substage/event/opening_movie');

var ItemMenuButton = require('../object/ui/item_menu_button');
var EyeButton = require('../object/ui/eye_button');

// 3rd eye の光
var Light3rdeye = require('../object/light_3rdeye');

var BlackMist = require('../object/black_mist');
var WhiteMist = require('../object/white_mist');

var Koishi = require('../object/koishi');

var ObjectStaticImage = require('../object/pieces/static_image');
var ObjectAnimeImage = require('../object/pieces/anime_image');
var ObjectJournal = require('../object/pieces/journal');
var ObjectAnimeEventImage = require('../object/pieces/anime_event_image');
var ObjectItem = require('../object/pieces/item');
var ObjectFieldChange = require('../object/pieces/field_change');
var ObjectAnimeDeadKoishi = require('../object/pieces/anime_dead_koishi');

var FieldMap = require('../config/field');

var SceneStage = function(core) {
	base_scene.apply(this, arguments);

	// ステージ上のオブジェクト一覧
	// TODO: 管理がしんどくなってきたら、piece_manager を用意する
	this.pieces = [];

	// 自機
	this.koishi = new Koishi(this);

	// こいしとステージ上のオブジェクト(描画のZ軸ソートに使う)
	this._koishi_and_pieces = [];

	// 3rd eye の光
	this.light_3rdeye = new Light3rdeye(this);

	// 画面の枠
	this.black_mist = new BlackMist(this);
	this.white_mist = new WhiteMist(this);

	// UI パーツ
	this.item_menu_button        = new ItemMenuButton(this);
	this.eye_button              = new EyeButton(this);

	// 3rd eye 使用中か否か
	this._is_using_eye = false;

	// 3rd eye ゲージが少なくなってきたときの画面点滅
	this._3rdeye_red_mask_alpha = 0;
	this._3rdeye_red_mask_alpha_rev = false;

	// 移動制限範囲
	this.walk_immovable_areas = [];

	// 通常
	this.addSubScene("play", new SceneSubStagePlay(core));
	// 会話中
	this.addSubScene("talk_with_object", new SceneSubStageTalkWithObject(core));
	// TODO:
	// menu -> item_menu
	// journal -> show_journal
	// アイテム メニュー
	this.addSubScene("menu", new SceneSubStageMenu(core));
	// ゲームオーバー
	this.addSubScene("gameover", new SceneSubStageGameover(core));
	// ジャーナル メニュー
	this.addSubScene("journal_menu", new SceneSubStageJournalMenu(core));
	// ジャーナルを読む
	this.addSubScene("journal", new SceneSubStageJournal(core));
	// アイテム獲得
	this.addSubScene("got_item", new SceneSubStageGotItem(core));
	// プレイヤーに何も操作させない
	this.addSubScene("lock", new SceneSubStageLock(core));
	// 目薬使用 1枚絵
	this.addSubScene("picture_use_eyedrops", new SceneSubStagePictureUseEyedrops(core));

	this.addSubScene("event_chapter0_get_hat", new SceneSubStageEventChapter0GetHat(core));
	this.addSubScene("picture_get_hat", new SceneSubStagePictureGetHat(core));
	this.addSubScene("event_chapter0_kokoro_encounter", new SceneSubStageEventChapter0KokoroEncounter(core));
	this.addSubScene("event_chapter0_satori_encounter_begin", new SceneSubStageEventChapter0SatoriEncounterBegin(core));

	// chapter 開始時のmovie
	this.addSubScene("event_opening_movie_chapter0", new SceneSubStageEventOpeningMovie(core).setArgs("./movie/chapter0.mp4", "stage", "TODO:"));
	this.addSubScene("event_opening_movie_chapter1", new SceneSubStageEventOpeningMovie(core).setArgs("./movie/chapter1.mp4", "stage", "chapter1_01"));
	this.addSubScene("event_opening_movie_chapter2", new SceneSubStageEventOpeningMovie(core).setArgs("./movie/chapter2.mp4", "stage", "TODO:"));
	this.addSubScene("event_opening_movie_chapter3", new SceneSubStageEventOpeningMovie(core).setArgs("./movie/chapter3.mp4", "stage", "TODO:"));
	this.addSubScene("event_opening_movie_chapter4", new SceneSubStageEventOpeningMovie(core).setArgs("./movie/chapter4.mp4", "stage", "TODO:"));
	this.addSubScene("event_opening_movie_chapter5", new SceneSubStageEventOpeningMovie(core).setArgs("./movie/chapter5.mp4", "stage", "TODO:"));
};
Util.inherit(SceneStage, base_scene);

SceneStage.prototype.init = function(field_name, from_field_name){
	base_scene.prototype.init.apply(this, arguments);

	from_field_name = from_field_name || null; // undefined -> null に変換

	// 現在のフィールド
	this.core.save_manager.player.setCurrentField(field_name);
	this.core.save_manager.save(); // シーン遷移時に全てのセーブデータを保存する

	// フィールドの情報
	var field_data = this.getFieldData();

	// サブシーン設定
	this.changeInitialSubScene();

	// ステージ上のオブジェクト一覧
	this._setupPieces();

	// 自機
	this.koishi.init();

	// こいしとステージ上のオブジェクト(描画のZ軸ソートに使う)
	this._koishi_and_pieces = this.pieces.concat(this.koishi);
	// z軸の降順ソート
	this._koishi_and_pieces.sort(function(a,b){
		if(a.z() < b.z()) return -1;
		if(a.z() > b.z()) return 1;
		return 0;
	});

	// 3rd eye の光
	this.light_3rdeye.init();

	// 画面の枠
	this.black_mist.init();
	this.white_mist.init();

	// UI パーツ
	this.item_menu_button.init();
	this.eye_button.init();

	// 3rd eye 使用中か否か
	this._is_using_eye = false;

	// 3rd eye ゲージが少なくなってきたときの画面点滅
	this._3rdeye_red_mask_alpha = 0;
	this._3rdeye_red_mask_alpha_rev = false;

	// フィールド開始時のこいしの初期位置の決定
	var pos;
	if (!from_field_name || field_data.left_field === from_field_name) {
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
		// フィールド遷移オブジェクト等で右でも左でもないところから遷移してきた場合
		pos = field_data.right_start_position;
		this.koishi.setPosition(pos.x, pos.y);
		this.koishi.setReflect(true);
	}


	if(this.core.audio_loader.isPlayingBGM(field_data.bgm)) {
		var sub_bgms = field_data.sub_bgms;
		if (!sub_bgms) sub_bgms = [];

		this.core.audio_loader.stopBGMWithout(field_data.bgm);
	}
	else {
		// BGM 止める
		this.core.audio_loader.stopBGM();
	}

	// フィールド移動時にフェードイン／アウトする
	this.core.scene_manager.setFadeIn(30,  "black");
	this.core.scene_manager.setFadeOut(30, "black");

};

SceneStage.prototype.changeInitialSubScene = function() {
	// フィールドの情報
	var field_data = this.getFieldData();

	if (!field_data) throw new Error(this.core.save_manager.player.getCurrentField() + " field does not exists");

	// subscene が設定されていて、未再生ならばそれを使う
	// そうでなければ通常の play シーン

	var subscene = field_data.event;
	if (!subscene || this.core.save_manager.event.isPlayedEvent(subscene)) {
		this.changeSubScene("play");
	}
	else {
		this.core.save_manager.event.setPlayedEvent(subscene);
		this.changeSubScene(subscene);
	}
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

	// ステージ上のオブジェクトに 3rd eye を使用したことを通知
	for (var i = 0, len = this.pieces.length; i < len; i++) {
		this.pieces[i].onUse3rdEye();
	}

	this.koishi.useEye();
};
SceneStage.prototype.switchEyeOff = function() {
	this._is_using_eye = false;

	// BGM を通常に戻す
	this.core.audio_loader.stopBGM("using_3rdeye");
	this.core.audio_loader.unMuteWithFadeInAllBGM(3); // N秒かけてフェードイン

	// ステージ上のオブジェクトに 3rd eye を使用解除したことを通知
	for (var i = 0, len = this.pieces.length; i < len; i++) {
		this.pieces[i].onUnUse3rdEye();
	}

	this.koishi.unUseEye();
};

SceneStage.prototype.beforeDraw = function() {
	var field_data = this.getFieldData();
	var i, len;

	// BGM 再生
	if(!this.isUsingEye() && this.frame_count >= 60) {
		if(!this.core.audio_loader.isPlayingBGM(field_data.bgm)) {
			// メインBGM 再生
			this.core.audio_loader.changeBGM(field_data.bgm);
		}

		var sub_bgms = field_data.sub_bgms;
		if (!sub_bgms) sub_bgms = [];

		// サブBGM
		for (i = 0, len = sub_bgms.length; i < len; i++) {
			var sub_bgm = sub_bgms[i];

			if(!this.core.audio_loader.isPlayingBGM(sub_bgm)) {
				this.core.audio_loader.addBGM(sub_bgm);
			}
		}
	}


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

	// ステージ上のオブジェクト一覧
	for (i = 0, len = this.pieces.length; i < len; i++) {
		this.pieces[i].beforeDraw();
	}
	// 自機
	this.koishi.beforeDraw();
	// 3rd eye の光
	if (this.isUsingEye()) {
		this.light_3rdeye.beforeDraw();
	}

	// サブシーン
	base_scene.prototype.beforeDraw.apply(this, arguments);

	// 画面の枠
	this.black_mist.beforeDraw();
	this.white_mist.beforeDraw();
	// UI パーツ
	this.item_menu_button.beforeDraw();
	this.eye_button.beforeDraw();

	for (i = 0, len = this.walk_immovable_areas.length; i < len; i++) {
		var obj = this.walk_immovable_areas[i];
		obj.beforeDraw();
	}
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

	// ステージ上のオブジェクト一覧
	// 自機
	var obj, i, len;
	for (i = 0, len = this._koishi_and_pieces.length; i < len; i++) {
		obj = this._koishi_and_pieces[i];
		obj.draw();
	}
	/*
	for (var i = 0, len = this.pieces.length; i < len; i++) {
		this.pieces[i].draw();
	}
	this.koishi.draw();
	*/

	// 3rd eye の光
	if (this.isUsingEye()) {
		this.light_3rdeye.draw();
	}

	// サブシーン描画
	base_scene.prototype.draw.apply(this, arguments);

	// 画面の枠
	this.black_mist.draw();
	this.white_mist.draw();
	// UI パーツ
	this.item_menu_button.draw();
	this.eye_button.draw();

	for (i = 0, len = this.walk_immovable_areas.length; i < len; i++) {
		obj = this.walk_immovable_areas[i];
		obj.draw();
	}

	// 3rd eye の使用状況に応じて赤いマスク
	this._draw3rdEyeEmergencyMask();
};

var BLINK_COUNT = 240; // 何フレーム毎にブリンクするか
var BLINK_INC = 20; // 赤く点滅する速度

// 3rd eye の使用状況に応じて赤いマスク
SceneStage.prototype._draw3rdEyeEmergencyMask = function() {
	// 充血レベルが最大のときのみ
	if (this.koishi.get3rdeyeBloodShotLevel() !== 4) return;

	// ブリンク開始
	if (this.frame_count % BLINK_COUNT === 0) {
		this._3rdeye_red_mask_alpha = 1;
		this._3rdeye_red_mask_alpha_rev = false;
	}

	// ブリンク開始してなければ何もしない
	if (this._3rdeye_red_mask_alpha <= 0) return;

	// 赤い色の上昇／下降
	if(this._3rdeye_red_mask_alpha_rev) {
		this._3rdeye_red_mask_alpha -= BLINK_INC;

		// 下限は0
		if(this._3rdeye_red_mask_alpha <= 0) {
			this._3rdeye_red_mask_alpha = 0;
		}
	}
	else {
		this._3rdeye_red_mask_alpha += BLINK_INC;

		// 折り返し
		if(this._3rdeye_red_mask_alpha >= 100) {
			this._3rdeye_red_mask_alpha_rev = true;
		}
	}

	var alpha = this._3rdeye_red_mask_alpha / 100;

	var ctx = this.core.ctx;
	ctx.save();

	ctx.fillStyle = 'red';
	ctx.globalAlpha = alpha * 0.2;
	ctx.fillRect(0, 0, this.width, this.height);

	ctx.restore();
};

SceneStage.prototype.isNoHat = function(){
	return this.currentSubScene() instanceof SceneSubStageEventChapter0GetHat;
};
SceneStage.prototype.getFieldData = function(){
	return FieldMap[this.core.save_manager.player.getCurrentField()];
};
SceneStage.prototype.getChapterNo = function(){
	return this.getFieldData().chapter;
};

// ステージ上のオブジェクト or 自機を取得
SceneStage.prototype.getPiece = function(name) {
	if (name === "koishi") return this.koishi;

	// 自機
	var obj, i, len;
	for (i = 0, len = this._koishi_and_pieces.length; i < len; i++) {
		obj = this._koishi_and_pieces[i];
		// TODO: O(1)
		if(obj.no === name) {
			return obj;
		}
	}

	return null;
};




SceneStage.prototype._setupPieces = function() {
	// 画面上のオブジェクト一覧
	this.pieces = [];
	// こいしが歩けない範囲
	this.walk_immovable_areas = [];

	var object_data_list = this._getObjectDataByFieldData();
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
		else if (data.type === CONSTANT.ITEM_TYPE) { // アイテム
			object = new ObjectItem(this);
		}
		else if (data.type === CONSTANT.FIELD_CHANGE_TYPE) { // フィールド遷移
			object = new ObjectFieldChange(this);
		}
		else if (data.type === CONSTANT.BUTTON_KOISHI_TYPE) {
			object = new ObjectAnimeDeadKoishi(this);
		}
		else {
			throw new Error ("Unknown object type error: " + data.type);
		}
		object.init();
		object.setData(data);
		this.pieces.push(object);

		this.walk_immovable_areas.push(object.getImmovableArea());
	}
};

SceneStage.prototype._getObjectDataByFieldData = function() {
	var field_data = this.getFieldData();
	var object_data_list = Array.prototype.concat.apply([], field_data.objects); // shallow copy

	if(field_data.right_field) {
		object_data_list.push({
			no: "right_field",
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "右へのフィールド移動",
			x: this.width - 48,
			y: this.height/2,
			width: 64,
			height: this.height,
			next_field_name: field_data.right_field,
		});
	}
	if(field_data.left_field) {
		object_data_list.push({
			no: "left_field",
			type: CONSTANT.FIELD_CHANGE_TYPE,
			name: "左へのフィールド移動",
			x: 48,
			y: this.height/2,
			width: 64,
			height: this.height,
			next_field_name: field_data.left_field,
		});
	}

	// ゲームオーバー用ボタンの目こいし
	if (this.core.save_manager.player.getLastGameoverField() === field_data.key) {
		object_data_list.push({
			no: "button_koishi",
			type: CONSTANT.BUTTON_KOISHI_TYPE,
			name: "ボタンの目のこいし",
			x: this.width/2,
			y: this.height/2,
		});

		// 一度表示したあとは削除
		this.core.save_manager.player.deleteLastGameoverField();
	}

	return object_data_list;
};

module.exports = SceneStage;
