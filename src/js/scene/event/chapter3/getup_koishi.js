'use strict';

// 3-1 こいし起床

var base_scene = require('../../../hakurei').scene.base;
var ObjectPoint = require('../../../hakurei').object.point;
var SS = require('../../../object/anime_object');
var Util = require('../../../hakurei').util;
var CONSTANT_BUTTON = require('../../../hakurei').constant.button;
var ScenarioManager = require('../../../hakurei').manager.scenario;
var BlackMist = require('../../../object/black_mist');
var DrawSerif = require('../../../logic/draw_serif');
var TimeManager = require('../../../hakurei').Manager.Time;

var PieceContainer = require('../../../object/piece_container');


// クリックしてから次のセリフに移るまでの待機カウント
var NEXT_TO_SERIF_WAITING_COUNT = 6;

// 状態
var STATE_TALKING  = 1; // セリフ表示
var STATE_WAITING  = 2; // セリフ非表示

var jsonDataOfKoishi1  = require('../../../data/anime/chapter3/event/chapter3-01-event-01/chapter3-01-event-01-koishi/obj01_anime_1');
var jsonDataOfKoishi2  = require('../../../data/anime/chapter3/event/chapter3-01-event-01/chapter3-01-event-01-koishi/obj02_anime_1');

var SceneEventPlayDoll = function(core) {
	base_scene.apply(this, arguments);
	// シーンの各種キャラ
	this.koishi = new SS(this);

	// ステージ上のオブジェクト一覧
	this.piece_container = new PieceContainer(this);

	this._state = STATE_WAITING;

	// 黒いもや
	this.black_mist = new BlackMist(this);

	// セリフ
	this._serif = new ScenarioManager();

	// セリフの位置
	this.serif_position_of_koishi = new ObjectPoint(this);
	this.serif_position_of_koishi.setPosition(this.width/2 - 10, 150);

};
Util.inherit(SceneEventPlayDoll, base_scene);

SceneEventPlayDoll.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	// シーンの各種キャラ
	this.koishi = new SS(this);

	// ステージ上のオブジェクト一覧
	this.piece_container.init("chapter3_01");


	this._state = STATE_WAITING;

	// フェードインする
	this.core.scene_manager.setFadeIn(60, "black");

	// イベント再生後はフェードアウトする
	this.core.scene_manager.setFadeOut(60, "black");

	// BGM 止めない
	//this.core.audio_loader.stopBGM();

	this.initKoishi();
	this.removeAllObject();
	this.addObjects([this.koishi]);

	this.black_mist.init();

	this._time = new TimeManager(this.core);
	this._time.setFrameCountFunction(function () {
		return self.frame_count;
	});

	this._serif.init([
		{"chara": "koishi", "exp": "chapter3-01-event-01-koishi", "serif":"あれ", "option": {"sounds": [
			{"name": "chapter3-myroom-getup_koishi01", "frame": 30},
		]}},
		{"chara": "koishi", "exp": null, "serif":"またへんなかんじ"},
		{"chara": "koishi", "exp": "chapter3-01-event-02-koishi", "serif":"さむい！", "option": {"sounds": [
			{"name": "chapter3-myroom-getup_koishi02", "frame": 25},
			{"name": "chapter3-myroom-getup_koishi03", "frame": 90},
		]}},
		{"chara": "koishi", "exp": null, "serif":"置いて行かれたわ"},
	]);

	this._serif.start();
	this._state = STATE_WAITING;
	this._serif.pausePrintLetter();
	var self = this;
	// 表情 再生
	self._actionExpression(function () {
		self._state = STATE_TALKING;

		// その後、止めたセリフ再生を再開
		self._serif.resumePrintLetter();
	});
};

SceneEventPlayDoll.prototype.initKoishi = function(){
	this.koishi.x(this.width/2 + 10);
	this.koishi.y(this.height/2); // こいしの位置

	var anime_config = {
		default: jsonDataOfKoishi1,
	};
	anime_config["chapter3-01-event-01-koishi"] = jsonDataOfKoishi1;
	anime_config["chapter3-01-event-02-koishi"] = jsonDataOfKoishi2;
	this.koishi.setAnime(anime_config);
	this.koishi.init();

};




SceneEventPlayDoll.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

	this._time.executeEvents();

	// ステージ上のオブジェクト一覧
	this.piece_container.beforeDraw();


	if(this._state === STATE_TALKING) {
		this._updateInTalking();
	}
	else if(this._state === STATE_WAITING) {
		// 何もしない
	}
	else {
		throw new Error("illegal talking state: " + this._state);
	}

	this.black_mist.beforeDraw();
};
// Nフレーム後に次のセリフへ
SceneEventPlayDoll.prototype._gotoNextSerif = function(choice){
	var self = this;

	self._state = STATE_WAITING;

	// 表情を次へ
	self._serif.next(choice);

	// 表情→セリフの順に再生するので、セリフ再生は一旦止める
	self._serif.pausePrintLetter();

	// 表情 再生
	self._actionExpression(function () {
		self._state = STATE_TALKING;

		// その後、止めたセリフ再生を再開
		self._serif.resumePrintLetter();
	});
};




SceneEventPlayDoll.prototype.draw = function(){

	this._showBackground();

	// ステージ上のオブジェクトと自機の描画
	// NOTE: オブジェクトとオブジェクトの間に自機がいることもあるので一緒に描画している
	this.piece_container.draw();

	// キャラのアニメの表示
	base_scene.prototype.draw.apply(this, arguments);

	// セリフ送り待機中は表示しない
	if(this._state === STATE_TALKING) {
		// セリフ表示
		this._showMessage();
	}
	else if(this._state === STATE_WAITING) {
		// 何も表示しない
	}
	this.black_mist.draw();
};
// 会話中の処理
SceneEventPlayDoll.prototype._updateInTalking = function(){
	// Z ボタンが押されたら
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
		// 会話がもう終わりなら
		if(this._serif.isEnd()) {
			// 戻る
			this.core.scene_manager.returnScene("stage");
		}
		// 会話 継続中
		else {
			// Nフレーム後に次のセリフへ
			this._gotoNextSerif();
		}
	}
};

SceneEventPlayDoll.prototype._showMessage = function(){
	// 現在喋っているオブジェクト名(こいしの場合は koishi)
	var chara_name = this._serif.getCurrentCharaNameByPosition();
	// オブジェクトを取得
	var obj;
	if (chara_name === "koishi") {
		obj = this.serif_position_of_koishi;
	}
	else {
		return;
	}

	// セリフ取得
	var lines = this._serif.getCurrentPrintedSentences();
	var width = this._serif.getCurrentMaxLengthLetters();
	var height = this._serif.getCurrentSentenceNum();

	if (!lines.length) return;

	var ctx = this.core.ctx;
	var fukidashi = this.core.image_loader.getImage('fukidashi');
	DrawSerif.drawWindow(obj, ctx, fukidashi, lines, width, height);
	DrawSerif.drawText(obj, ctx, lines, width, height);
};


SceneEventPlayDoll.prototype._showBackground = function(){
	var ctx = this.core.ctx;
	ctx.save();

	var background = this.core.image_loader.getImage("chapter0-myroom-bg-001");

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

// アニメ
SceneEventPlayDoll.prototype._actionExpression = function(callback) {
	callback = callback || function () {};
	// 表情
	var expression = this._serif.getCurrentCharaExpressionByPosition();
	if(!expression) {
		// 表情終了を待たない分、N 秒だけ待つ
		this._time.setTimeout(function () {
			callback();
		}, NEXT_TO_SERIF_WAITING_COUNT);
		return;
	}

	var option = this._serif.getCurrentOption();

	// sound 再生
	// [{sound: ~~~, frame: ~~~}, {sound: ~~~, frame: ~~~}]
	var sounds = this._serif.getCurrentOption().sounds;
	if (sounds) {
		for (var i = 0, len = sounds.length; i < len; i++) {
			var sound = sounds[i].name;
			var frame = sounds[i].frame || 1; // 0だと再生されない

			(function(core, sound, frame) {
				var audio_loader = core.audio_loader;
				core.time_manager.setTimeout(function () {
					audio_loader.playSound(sound);
				}, frame);
			})(this.core, sound, frame);
		}
	}

	if (option.loop) {
		this.koishi.playAnimationInfinity(expression);

		// 表情終了を待たない分、N 秒だけ待つ
		this._time.setTimeout(function () {
			callback();
		}, NEXT_TO_SERIF_WAITING_COUNT);
	}
	else {
		this.koishi.playAnimationOnce(expression, callback);
	}
};

// black_mist が参照する
SceneEventPlayDoll.prototype.isUsingEye = function(){
	return false;
};

module.exports = SceneEventPlayDoll;
