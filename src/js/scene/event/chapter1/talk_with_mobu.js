'use strict';

// 1-7 フラッシュバック

var base_scene = require('../../../hakurei').scene.base;
var ObjectPoint = require('../../../hakurei').object.point;
var SS = require('../../../object/anime_object');
var Util = require('../../../hakurei').util;
var CONSTANT_BUTTON = require('../../../hakurei').constant.button;
var ScenarioManager = require('../../../hakurei').manager.scenario;
var BlackMist = require('../../../object/black_mist');
var DrawSerif = require('../../../logic/draw_serif');

// クリックしてから次のセリフに移るまでの待機カウント
var NEXT_TO_SERIF_WAITING_COUNT = 6;

// 状態
var STATE_TALKING  = 1; // セリフ表示
var STATE_WAITING  = 2; // セリフ非表示



var jsonDataOfMobu1 = require('../../../data/anime/chapter1/event/talk_with_mobu/mobu/obj01_anime_1');
var jsonDataOfMobu2 = require('../../../data/anime/chapter1/event/talk_with_mobu/mobu/obj02_anime_1');
var jsonDataOfMobu3 = require('../../../data/anime/chapter1/event/talk_with_mobu/mobu/obj03_anime_1');
var jsonDataOfMobu4 = require('../../../data/anime/chapter1/event/talk_with_mobu/mobu/obj04_anime_1');
var jsonDataOfMobu5 = require('../../../data/anime/chapter1/event/talk_with_mobu/mobu/obj05_anime_1');
var jsonDataOfKoishi1 = require('../../../data/anime/chapter1/event/talk_with_mobu/koishi/obj01_anime_1');
var jsonDataOfKoishi2 = require('../../../data/anime/chapter1/event/talk_with_mobu/koishi/obj02_anime_1');
var jsonDataOfKoishi3 = require('../../../data/anime/chapter1/event/talk_with_mobu/koishi/obj03_anime_1');
var jsonDataOfKoishi4 = require('../../../data/anime/chapter1/event/talk_with_mobu/koishi/obj04_anime_1');
var jsonDataOfKoishi5 = require('../../../data/anime/chapter1/event/talk_with_mobu/koishi/obj05_anime_1');

var SceneEventTalkWithMobu = function(core) {
	base_scene.apply(this, arguments);

	this._state = STATE_TALKING;
	this._anime_num = 1;

	// シーンの各種キャラ
	this.mobu = new SS(this);
	this.koishi = new SS(this);

	// 黒いもや
	this.black_mist = new BlackMist(this);

	// セリフ
	this._serif = new ScenarioManager();

	// セリフの位置
	this.serif_position_of_mobu = new ObjectPoint(this);
	this.serif_position_of_mobu.setPosition(this.width - 300, 200);
	this.serif_position_of_koishi = new ObjectPoint(this);
	this.serif_position_of_koishi.setPosition(300, 200);
};
Util.inherit(SceneEventTalkWithMobu, base_scene);

SceneEventTalkWithMobu.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	this._state = STATE_TALKING;
	this._anime_num = 1;

	// フェードインする
	this.core.scene_manager.setFadeIn(120, "black");

	// イベント再生後はフェードアウトする
	this.core.scene_manager.setFadeOut(120, "black");

	// BGM 止める
	this.core.audio_loader.stopBGM();


	this.initMobu();
	this.initKoishi();
	this.removeAllObject();
	this.addObjects([this.mobu, this.koishi]);

	this.black_mist.init();

	this._serif.init([
		{"chara": "koishi","serif":"ねえ、人形ごっこしましょ！", "option": {"is_next": true}},
		{"chara": "koishi","serif":"お気に入りの子供をかわいがるの", "option": {"is_next": true}},
		{"chara": "mobu","serif":"やぁよ", "option": {"is_next": false}},
		{"chara": "mobu","serif":"私たちいまから縄跳びで遊ぶの", "option": {"is_next": false}},
		{"chara": "koishi","serif":"そうなの？", "option": {"is_next": false}},
		{"chara": "koishi","serif":"それより人形遊びのほうが賢いし素敵よ", "option": {"is_next": false}},
		{"chara": "koishi","serif":"なわとびなんて汚くなるし人生を無駄にしてる", "option": {"is_next": false}},
		{"chara": "koishi","serif":"頭おかしいのね！", "option": {"is_next": false}},
		{"chara": "mobu","serif":"なんでそんなこと言われなきゃならないの？", "option": {"is_next": false}},
		{"chara": "mobu","serif":"バカにしに来たわけ？", "option": {"is_next": false}},
		{"chara": "koishi","serif":"もういい", "option": {"is_next": true}},
	]);
};

SceneEventTalkWithMobu.prototype.initMobu = function(){
	this.mobu.x(this.width/2);
	this.mobu.y(this.height/2);

	var anime_config = {
		default: jsonDataOfMobu1,
	};
	anime_config[1] = jsonDataOfMobu1;
	anime_config[2] = jsonDataOfMobu2;
	anime_config[3] = jsonDataOfMobu3;
	anime_config[4] = jsonDataOfMobu4;
	anime_config[5] = jsonDataOfMobu5;

	this.mobu.setAnime(anime_config);
	this.mobu.init();

	this.mobu.playAnimationOnce(this._anime_num);
};
SceneEventTalkWithMobu.prototype.initKoishi = function(){
	this.koishi.x(this.width/2);
	this.koishi.y(this.height/2);

	var anime_config = {
		default: jsonDataOfKoishi1,
	};
	anime_config[1] = jsonDataOfKoishi1;
	anime_config[2] = jsonDataOfKoishi2;
	anime_config[3] = jsonDataOfKoishi3;
	anime_config[4] = jsonDataOfKoishi4;
	anime_config[5] = jsonDataOfKoishi5;

	this.koishi.setAnime(anime_config);
	this.koishi.init();

	var self = this;
	this.koishi.playAnimationOnce(this._anime_num, function () {
		self._serif.start();
		// アニメ進行
		if (self._serif.getCurrentOption().is_next) {
			self._anime_num++;

			if (self._anime_num === 2 || self._anime_num === 3 || self._anime_num === 4) {
				self.koishi.playAnimationInfinity(self._anime_num);
				self.mobu.playAnimationInfinity(self._anime_num);
			}
			else {
				self.koishi.playAnimationOnce(self._anime_num);
				self.mobu.playAnimationOnce(self._anime_num);
			}
		}
	});

};




SceneEventTalkWithMobu.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);

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
SceneEventTalkWithMobu.prototype._gotoNextSerif = function(choice){
	var self = this;

	self._state = STATE_WAITING;

	self.core.time_manager.setTimeout(function () {
		self._state = STATE_TALKING;

		// セリフを送る
		self._serif.next(choice);

		// アニメ進行
		if (self._serif.getCurrentOption().is_next) {
			self._anime_num++;
			if (self._anime_num === 2 || self._anime_num === 3 || self._anime_num === 4) {
				self.koishi.playAnimationInfinity(self._anime_num);
				self.mobu.playAnimationInfinity(self._anime_num);
			}
			else {
				self.koishi.playAnimationOnce(self._anime_num);
				self.mobu.playAnimationOnce(self._anime_num);
			}
		}


	}, NEXT_TO_SERIF_WAITING_COUNT);
};



SceneEventTalkWithMobu.prototype.draw = function(){

	this._showBackground();
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
SceneEventTalkWithMobu.prototype._updateInTalking = function(){
	// Z ボタンが押されたら
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
		// 会話がもう終わりなら
		if(this._serif.isEnd()) {
			this._state = STATE_WAITING;

			this._anime_num++;
			this.koishi.playAnimationOnce(this._anime_num);
			this.mobu.playAnimationOnce(this._anime_num);
			var self = this;
			self.core.time_manager.setTimeout(function () {
				self.core.scene_manager.changeScene("stage", "chapter1_07");
			}, 60);
		}
		// 会話 継続中
		else {
			// Nフレーム後に次のセリフへ
			this._gotoNextSerif();
		}
	}
};

SceneEventTalkWithMobu.prototype._showMessage = function(){
	// 現在喋っているオブジェクト名(こいしの場合は koishi)
	var chara_name = this._serif.getCurrentCharaNameByPosition();

	// オブジェクトを取得
	var obj;
	if (chara_name === "koishi") {
		obj = this.serif_position_of_koishi;
	}
	else {
		obj = this.serif_position_of_mobu;
	}

	// セリフ取得
	var lines = this._serif.getCurrentPrintedSentences();
	var width = this._serif.getCurrentMaxLengthLetters();
	var height = this._serif.getCurrentSentenceNum();

	if (!lines.length) return;

	var ctx = this.core.ctx;
	var fukidashi = this.core.image_loader.getImage('fukidashi_dark');
	DrawSerif.drawWindow(obj, ctx, fukidashi, lines, width, height);
	DrawSerif.drawText(obj, ctx, lines, width, height);
};








SceneEventTalkWithMobu.prototype._showBackground = function(){
	var ctx = this.core.ctx;
	ctx.save();

	var background = this.core.image_loader.getImage("chapter1-07-event-bg-001");

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
// black_mist が参照する
SceneEventTalkWithMobu.prototype.isUsingEye = function(){
	return false;
};

module.exports = SceneEventTalkWithMobu;
