'use strict';
var _ = require('i18n4v');
var base_scene = require('../../../hakurei').scene.base;
var ObjectPoint = require('../../../hakurei').object.point;
var SS = require('../../../object/anime_object');
var Util = require('../../../hakurei').util;
var CONSTANT_BUTTON = require('../../../hakurei').constant.button;
var CONSTANT = require('../../../constant');
var ScenarioManager = require('../../../hakurei').manager.scenario;
var BlackMist = require('../../../object/black_mist');
var DrawSerif = require('../../../logic/draw_serif');


var jsonDataOfEye1 = require('../../../data/anime/chapter0/event/encounter_satori/eye/obj01_anime_1');
var jsonDataOfEye2 = require('../../../data/anime/chapter0/event/encounter_satori/eye/obj02_anime_1');
var jsonDataOfEye3 = require('../../../data/anime/chapter0/event/encounter_satori/eye/obj03_anime_1');
var jsonDataOfSatori1 = require('../../../data/anime/chapter0/event/encounter_satori/satori/obj01_anime_1');
var jsonDataOfSatori2 = require('../../../data/anime/chapter0/event/encounter_satori/satori/obj02_anime_1');
var jsonDataOfSatori3 = require('../../../data/anime/chapter0/event/encounter_satori/satori/obj03_anime_1');
var jsonDataOfKoishiWait = require('../../../data/anime/koishi/wait_anime_1');

var SATORI_PULLED_HAND_ANIME = 1;
var SATORI_WAITING_ANIME     = 2;
var SATORI_LEAVE_SCENE_ANIME = 3;

var EYE_APPEAR_AND_BLINK_ANIME    = 1;
var EYE_WAITING_ANIME             = 2;
var EYE_SEE_RIGHT_AND_BLINK_ANIME = 3;

var SceneEventEncounterSatori = function(core) {
	base_scene.apply(this, arguments);

	// シーンの各種キャラ
	this.eye = new SS(this);
	this.satori = new SS(this);
	this.koishi = new SS(this);

	// 黒いもや
	this.black_mist = new BlackMist(this);

	// セリフ
	this._serif = new ScenarioManager(core, {
		typography_speed: CONSTANT.TYPOGRAPHY_SPEED,
	});

	// セリフの位置
	this.serif_position = new ObjectPoint(this);
	this.serif_position.setPosition(this.width - 350, 150);
};
Util.inherit(SceneEventEncounterSatori, base_scene);

// black_mist が参照する
SceneEventEncounterSatori.prototype.isUsingEye = function(){
	return false;
};
SceneEventEncounterSatori.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	// フェードインする
	this.core.scene_manager.setFadeIn(120, "black");

	// イベント再生後はフェードアウトする
	this.core.scene_manager.setFadeOut(120, "black");

	// BGM 止める
	this.core.audio_loader.stopBGM();


	this.initSatori();
	this.initEye();
	this.initKoishi();
	this.addObjects([this.eye, this.satori, this.koishi]);

	this.black_mist.init();

	this._serif.init([
		{"chara": "satori","serif":_("おいで")},
		{"chara": "satori","serif":_("あなたはいい子にならなきゃだめよ")},
	]);
};

SceneEventEncounterSatori.prototype.initSatori = function(){
	this.satori.x(this.width/2);
	this.satori.y(this.height/2);

	var anime_config = {
		default: jsonDataOfSatori1,
	};
	anime_config[SATORI_PULLED_HAND_ANIME] = jsonDataOfSatori1;
	anime_config[SATORI_WAITING_ANIME]     = jsonDataOfSatori2;
	anime_config[SATORI_LEAVE_SCENE_ANIME] = jsonDataOfSatori3;

	this.satori.setAnime(anime_config);

	this.satori.init();
	var ss = this.satori;
	var serif_manager = this._serif;

	// さとりが手を引かれるアニメの再生
	this.satori.playAnimationOnce(SATORI_PULLED_HAND_ANIME, function () {
		// 再生が終わったらセリフの再生を始める
		serif_manager.next();
		// さとりは待機アニメーションへ
		ss.playAnimationInfinity(SATORI_WAITING_ANIME);
	});

};
SceneEventEncounterSatori.prototype.initEye = function(){
	this.eye.x(this.width/2);
	this.eye.y(this.height/2);

	var anime_config = {
		default: jsonDataOfEye1,
	};
	anime_config[EYE_APPEAR_AND_BLINK_ANIME]    = jsonDataOfEye1;
	anime_config[EYE_WAITING_ANIME]             = jsonDataOfEye2;
	anime_config[EYE_SEE_RIGHT_AND_BLINK_ANIME] = jsonDataOfEye3;

	this.eye.setAnime(anime_config);

	this.eye.init();
	var ss = this.eye;

	// こいしがドアのスキマから目を覗かせる
	this.eye.playAnimationOnce(EYE_APPEAR_AND_BLINK_ANIME, function () {
		// 再生後は待機
		ss.playAnimationInfinity(EYE_WAITING_ANIME);
	});

};
SceneEventEncounterSatori.prototype.initKoishi = function(){
	this.koishi.x(180);
	this.koishi.y(370);

	this.koishi.setAnime({
		default: jsonDataOfKoishiWait,
	});
	this.koishi.init();
	this.koishi.playAnimationInfinity("default");
};





SceneEventEncounterSatori.prototype.update = function(){
	base_scene.prototype.update.apply(this, arguments);

	// BGM 再生
	if(this.frame_count === 1) {
		this.core.audio_loader.changeBGM("chapter0-event-encounter_satori");
	}
	this.black_mist.update();



	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z) || this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_X)) {
		if (this.eye.current_anime === EYE_WAITING_ANIME && this.satori.current_anime === SATORI_WAITING_ANIME) {
			// 目はさとりの方を見る
			this.eye.playAnimationOnce(EYE_SEE_RIGHT_AND_BLINK_ANIME);

			var satori = this.satori;
			var serif_manager = this._serif;

			// セリフを送る
			this.core.time_manager.setTimeout(function () {
				serif_manager.next();

			}, 0.2 * 60);
			// さとりが去っていく
			this.core.time_manager.setTimeout(function () {
				satori.playAnimationOnce(SATORI_LEAVE_SCENE_ANIME);
			}, 0.4 * 60);
		}
		else if (this.eye.current_anime === EYE_SEE_RIGHT_AND_BLINK_ANIME && this.satori.current_anime === SATORI_LEAVE_SCENE_ANIME) {
			// イベント終わりのSE再生
			this.core.audio_loader.playSound("event_out");
			// BGM をフェードアウト
			this.core.audio_loader.fadeOutBGM(2);
			// 次のシーンへ
			this.core.scene_manager.changeScene("stage", "chapter0_mansion_corridor2");
		}
	}

};
SceneEventEncounterSatori.prototype.draw = function(){

	this._showBackground();
	// キャラのアニメの表示
	base_scene.prototype.draw.apply(this, arguments);
	this._showMessage();
	this.black_mist.draw();
};

SceneEventEncounterSatori.prototype._showBackground = function(){
	var ctx = this.core.ctx;
	ctx.save();

	var background = this.core.image_loader.getImage("chapter0-mspassage-bg-002_event");

	ctx.drawImage(background,
		0,
		0,
		background.width,
		background.height,
		0,
		0,
		this.width,
		this.height
	);

	ctx.restore();
};

SceneEventEncounterSatori.prototype._showMessage = function(){
	if(!this._serif.isStart()) return;

	// セリフ取得
	var lines = this._serif.getCurrentPrintedSentences();
	if (!lines.length) return;

	var width_num = this._serif.getCurrentMaxLengthLetters();
	var height_num = this._serif.getCurrentSentenceNum();

	// メッセージウィンドウ表示
	var ctx = this.core.ctx;
	var fukidashi = this.core.image_loader.getImage('fukidashi_gray');
	DrawSerif.drawWindow(this.serif_position, ctx, fukidashi, lines, width_num, height_num);

	// メッセージ表示
	DrawSerif.drawText(this.serif_position, ctx, lines, width_num, height_num);
};


SceneEventEncounterSatori.prototype.isSerifAutoStart = function() {
	return false;
};


module.exports = SceneEventEncounterSatori;
