'use strict';

var base_scene = require('../hakurei').scene.base;
var Util = require('../hakurei').util;

var CONSTANT = require('../constant');

// stage scene 専用 sub scene
var SceneSubStagePlay                              = require('./substage/play'); // ゲーム操作可能
var SceneSubStageTalkWithObject                    = require('./substage/talk_with_object'); // こいし会話中
var SceneSubStageMenuItem                          = require('./substage/menu_item'); // アイテムメニュー
var SceneSubStageMenuJournal                       = require('./substage/menu_journal'); // ジャーナル メニュー
var SceneSubStageLock                              = require('./substage/lock');
var SceneSubStagePictureUseEyedrops                = require('./substage/picture_use_eyedrops'); // 目薬使用1枚絵
var SceneSubStageEventChapter0PictureGetHat        = require('./substage/event/chapter0/picture_get_hat');
var SceneSubStageEventChapter0KokoroEncounter      = require('./substage/event/chapter0/kokoro_encounter');
var SceneSubStageEventChapter1TouchHashigo         = require('./substage/event/chapter1/touch_hashigo');

// event_talk scene と共通の sub scene
var SceneSubStageShowJournal                       = require('./subcommon/show_journal'); // ジャーナル表示
var SceneSubStageGotItem                           = require('./subcommon/got_item'); // アイテム獲得
var SceneSubStageUseItem                           = require('./subcommon/use_item'); // アイテム使用
var SceneSubStagePicture                           = require('./subcommon/picture');
var SceneSubStageBlackout                          = require('./subcommon/blackout');

var ItemMenuButton = require('../object/ui/item_menu_button');
var EyeButton = require('../object/ui/eye_button');

var EyeButton = require('../object/ui/eye_button');

// サードアイを使用できないときのセリフ
var CANT_USE_3RDEYE_SERIF_LIST = require('../data/cant_use_3rdeye_serif');

// 3rd eye の光
var Light3rdeye = require('../object/light_3rdeye');
// フィールド上のオブジェクト一覧
var PieceContainer = require('../object/piece_container');

var WhiteMist = require('../object/white_mist');
var DarkMist = require('../object/dark_mist');
var SnowMist = require('../object/snow_mist');
var BlackMist = require('../object/black_mist');

var Koishi = require('../object/koishi');

var FieldMasterRepository = require('../repository/field');

var CommonProcess = require('../logic/common_process');

var SceneStage = function(core) {
	base_scene.apply(this, arguments);

	// ステージ上のオブジェクト一覧
	this.piece_container = new PieceContainer(this);

	// 自機
	this.koishi = new Koishi(this);

	// 3rd eye の光
	this.light_3rdeye = new Light3rdeye(this);

	// 画面の枠
	this.white_mist = new WhiteMist(this);
	this.dark_mist  = new DarkMist(this);
	this.snow_mist  = new SnowMist(this);
	this.black_mist = new BlackMist(this); // NOTE: 最前面にすること

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
	// アイテム メニュー
	this.addSubScene("menu_item", new SceneSubStageMenuItem(core));
	// ジャーナル メニュー
	this.addSubScene("menu_journal", new SceneSubStageMenuJournal(core));
	// ジャーナルを読む
	this.addSubScene("show_journal", new SceneSubStageShowJournal(core));
	// アイテム獲得
	this.addSubScene("got_item", new SceneSubStageGotItem(core));
	// アイテム使用
	this.addSubScene("use_item", new SceneSubStageUseItem(core));
	// 1枚絵表示
	this.addSubScene("picture", new SceneSubStagePicture(core));
	// 暗転
	this.addSubScene("blackout", new SceneSubStageBlackout(core));
	// プレイヤーに何も操作させない
	this.addSubScene("lock", new SceneSubStageLock(core));
	// 目薬使用 1枚絵
	this.addSubScene("picture_use_eyedrops", new SceneSubStagePictureUseEyedrops(core));

	// chapter0 帽子獲得 1枚絵
	this.addSubScene("picture_get_hat", new SceneSubStageEventChapter0PictureGetHat(core));

	this.addSubScene("event_chapter0_kokoro_encounter", new SceneSubStageEventChapter0KokoroEncounter(core));
	this.addSubScene("touch_hashigo", new SceneSubStageEventChapter1TouchHashigo(core));
};
Util.inherit(SceneStage, base_scene);

SceneStage.prototype.init = function(field_name, from_field_name){
	base_scene.prototype.init.apply(this, arguments);

	// null にすると、upStartPosition に null が設定されている場合があるので、
	// そのif 分岐が true になってしまう。そのため undefined
	from_field_name = from_field_name || undefined;

	// 現在のフィールド
	this.core.save_manager.player.setCurrentField(field_name);
	this.core.save_manager.save(); // シーン遷移時に全てのセーブデータを保存する

	// フィールドの情報
	var field_data = this.getFieldData();

	if (!field_data) {
		throw new Error("Can't find field data. field key: " + this.core.save_manager.player.getCurrentField());
	}

	// 自機
	this.koishi.init();

	// ステージ上のオブジェクト一覧
	this.piece_container.init(this.core.save_manager.player.getCurrentField(), this.koishi);

	// 移動制限範囲
	this.walk_immovable_areas = this.piece_container.getWalkImmovableAreas();

	// 3rd eye の光
	this.light_3rdeye.init();

	// 画面の枠
	this.white_mist.init();
	this.dark_mist.init();
	this.snow_mist.init();
	this.black_mist.init();

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
	if (field_data.leftField() === from_field_name) {
		// 左のフィールドからきた場合
		pos = field_data.leftStartPosition();
		this.koishi.setPosition(pos.x, pos.y);
	}
	else if (field_data.rightField() === from_field_name) {
		// 右のフィールドからきた場合
		pos = field_data.rightStartPosition();
		this.koishi.setPosition(pos.x, pos.y);
		this.koishi.setReflect(true);
	}
	else if (field_data.upField() === from_field_name) {
		// 上のフィールドからきた場合
		pos = field_data.upStartPosition();
		this.koishi.setPosition(pos.x, pos.y);
	}
	else if (field_data.downField() === from_field_name) {
		// 下のフィールドからきた場合
		pos = field_data.downStartPosition();
		this.koishi.setPosition(pos.x, pos.y);
	}
	else {
		// フィールド遷移オブジェクト等で右でも左でもないところから遷移してきた場合
		// セーブしてゲームを開始した場合
		pos = field_data.defaultStartPosition();
		this.koishi.setPosition(pos.x, pos.y);

		if (pos.isTowardLeft) {
			this.koishi.setReflect(true);
		}
	}

	// BGM が設定されていればBGM再生
	if (field_data.bgm()) {
		this.playBGM(field_data.bgm(), field_data.sub_bgms());
	}

	// フィールド移動時にフェードイン／アウトする
	this.core.scene_manager.setFadeIn(30,  "black");
	this.core.scene_manager.setFadeOut(30, "black");

	this.changeSubScene("play");

	// フィールド固有の初期処理
	this._executeInitialProcess();
};

// フィールド固有の初期処理
SceneStage.prototype._executeInitialProcess = function() {
	// フィールドの情報
	var field_data = this.getFieldData();

	if (!field_data) throw new Error(this.core.save_manager.player.getCurrentField() + " field does not exists");

	if(!field_data.initialProcess()) return;

	CommonProcess.exec(this.core, field_data.initialProcess());
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
	this.piece_container.notifyUse3rdEye();

	this.koishi.useEye();
};
SceneStage.prototype.switchEyeOff = function() {
	this._is_using_eye = false;

	// BGM を通常に戻す
	this.core.audio_loader.stopBGM("using_3rdeye");
	this.core.audio_loader.unMuteAllBGM();

	// ステージ上のオブジェクトに 3rd eye を使用解除したことを通知
	this.piece_container.notifyUnUse3rdEye();

	this.koishi.unUseEye();
};

// サードアイを使用できない動作をこいしがする
SceneStage.prototype.cantUseEye = function() {
	this.changeSubScene("talk_with_object", CANT_USE_3RDEYE_SERIF_LIST);
};



SceneStage.prototype.playBGM = function(main_bgm, sub_bgms) {
	var sub_bgms = sub_bgms || [];

	var field_data = this.getFieldData();

	if(this.core.audio_loader.isPlayingBGM(main_bgm)) {
		// 同じBGMのフィールドに遷移した場合、メインBGMは継続したままになる

		// 元のフィールドのサブBGMだけ止める
		this.core.audio_loader.stopBGMWithout(main_bgm);

		// 今のフィールドのサブBGMだけ再生
		this._playSubBGM(sub_bgms);
	}
	else {
		// メイン／サブ BGM 止める
		this.core.audio_loader.stopBGM();

		// メイン／サブ BGM 再生
		var _this = this;
		this.core.time_manager.setTimeout(function () {
			// 60秒経過後にフィールドを移動していた／別のシーンに遷移していた場合、
			// 移動先フィールドのBGM再生処理に任せる
			if (_this.getFieldData() !== field_data || _this !== _this.core.scene_manager.currentScene()) return;

			// メインBGM 再生
			if (main_bgm) {
				_this.core.audio_loader.addBGM(main_bgm);
			}

			// サブBGM 再生
			_this._playSubBGM(sub_bgms);

			// 60秒経つまでの間に、プレイヤーがサードアイを使用していた場合
			if(_this.isUsingEye()) {
				// メイン／サブ BGMはミュートにしておく
				// サードアイを解除したときに再生されるようにするため
				_this._muteMainAndSubBGM(main_bgm, sub_bgms);
			}
		}, 60);
	}
};

SceneStage.prototype._playSubBGM = function(sub_bgms) {
	// サブBGM
	for (var i = 0, len = sub_bgms.length; i < len; i++) {
		var sub_bgm = sub_bgms[i];

		if(!this.core.audio_loader.isPlayingBGM(sub_bgm)) {
			this.core.audio_loader.addBGM(sub_bgm);
		}
	}
};

SceneStage.prototype._muteMainAndSubBGM = function(main_bgm, sub_bgms) {
	// サブBGM ミュート
	for (var i = 0, len = sub_bgms.length; i < len; i++) {
		var sub_bgm = sub_bgms[i];
		this.core.audio_loader.muteBGM(sub_bgm);
	}

	// メインBGM ミュート
	if (main_bgm) {
		this.core.audio_loader.muteBGM(main_bgm);
	}
};


// chapter に応じたノイズ再生
SceneStage.prototype._playNoise = function() {
	// chapter 0 or 4 で3rd eye を使用していないときのみ
	// ランダムノイズ再生
	// N秒ごとにN%の確率で再生

	// 3rd eye を使用していれば再生しない
	if(this.isUsingEye()) return;

	var field_data = this.getFieldData();

	var interval, prob, list;
	if (field_data.chapter() === 0) {
		interval = CONSTANT.CHAPTER0.NOISE_SOUND_INTERVAL_COUNT
		prob     = CONSTANT.CHAPTER0.NOISE_SOUND_PROB
		list     = CONSTANT.CHAPTER0.NOISE_SOUND_LIST
	}
	else if (field_data.chapter() === 4) {
		interval = CONSTANT.CHAPTER4.NOISE_SOUND_INTERVAL_COUNT
		prob     = CONSTANT.CHAPTER4.NOISE_SOUND_PROB
		list     = CONSTANT.CHAPTER4.NOISE_SOUND_LIST
	}
	else {
		// chapter0, 4 以外では再生しない
		return;
	}

	if(this.core.frame_count % interval  === 0) {
		if (Util.getRandomInt(100) <= prob) {
			var sound_name = list[ Util.getRandomInt(0, list.length - 1) ];
			this.core.audio_loader.playSound(sound_name);
		}
	}
};


SceneStage.prototype.update = function() {
	// chapter に応じたノイズ再生
	this._playNoise();

	// 左クリック位置を出力
	if (CONSTANT.DEBUG.ON) {
		if(this.core.input_manager.isLeftClickPush()) {
			var x = this.core.input_manager.mousePositionX();
			var y = this.core.input_manager.mousePositionY();

			console.log("x: " + x + ", y: " + y);
		}
	}

	// ステージ上のオブジェクト一覧
	this.piece_container.update();

	// 自機
	this.koishi.update();
	// 3rd eye の光
	if (this.isUsingEye()) {
		this.light_3rdeye.update();
	}

	// サブシーン
	base_scene.prototype.update.apply(this, arguments);

	// 画面の枠
	this.white_mist.update();
	this.dark_mist.update();
	this.snow_mist.update();
	this.black_mist.update();
	// UI パーツ
	this.item_menu_button.update();
	this.eye_button.update();

	for (var i = 0, len = this.walk_immovable_areas.length; i < len; i++) {
		var obj = this.walk_immovable_areas[i];
		obj.update();
	}
};

// 画面更新
SceneStage.prototype.draw = function(){
	var field_data = this.getFieldData();
	var ctx = this.core.ctx;

	// 背景は設定しないこともできる
	if (field_data.background()) {
		// 背景描画
		var bg = this.core.image_loader.getImage(field_data.background());
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
	}

	// ステージ上のオブジェクトと自機の描画
	// NOTE: オブジェクトとオブジェクトの間に自機がいることもあるので一緒に描画している
	this.piece_container.draw();

	// 3rd eye の光
	if (this.isUsingEye()) {
		this.light_3rdeye.draw();
	}

	// サブシーン描画
	base_scene.prototype.draw.apply(this, arguments);

	// 画面の枠
	this.white_mist.draw();
	this.dark_mist.draw();
	this.snow_mist.draw();
	this.black_mist.draw();
	// UI パーツ
	this.item_menu_button.draw();
	this.eye_button.draw();

	for (var i = 0, len = this.walk_immovable_areas.length; i < len; i++) {
		var obj = this.walk_immovable_areas[i];
		obj.draw();
	}

	// 3rd eye の使用状況に応じて赤いマスク
	this._draw3rdEyeEmergencyMask();

	// デバッグ用の発達度表示
	this._drawDebugGrowth();
};

// デバッグ用の発達度表示
SceneStage.prototype._drawDebugGrowth = function() {
	if(!this.core.debug_manager.get("is_show_growth")) return;

	var growth = this.core.save_manager.player.getGrowth();

	var ctx = this.core.ctx;
	ctx.save();
	ctx.fillStyle = "white";
	ctx.font = "24px 'MyFont'";
	ctx.fillText("発達度" + growth, 0, this.height - 10);
	ctx.restore();
};




var BLINK_COUNT = 240; // 何フレーム毎にブリンクするか
var BLINK_INC = 20; // 赤く点滅する速度

// 3rd eye の使用状況に応じて赤いマスク
SceneStage.prototype._draw3rdEyeEmergencyMask = function() {
	// 充血レベルが最大のときのみ
	if (this.koishi.get3rdeyeBloodShotLevel() !== 4) return;

	// 目を使えないときは表示しない(chapter4)
	if(!this.eye_button.isShow()) return;

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
	var field = this.getFieldData();
	return field.key() === "chapter0_myroom_before_get_hat" || field.key() === "chapter6_myroom_before_get_hat";
};

SceneStage.prototype.getFieldData = function(){
	return FieldMasterRepository.find(this.core.save_manager.player.getCurrentField());
};
SceneStage.prototype.getChapterNo = function(){
	return this.getFieldData().chapter();
};

// ステージ上のオブジェクト or 自機を取得
SceneStage.prototype.getPiece = function(name) {
	if (name === "koishi") return this.koishi;

	return this.piece_container.get(name);
};

module.exports = SceneStage;
