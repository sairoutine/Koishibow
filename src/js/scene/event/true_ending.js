'use strict';

var SERIF_WAITNG_COUNT = 95;

var Util = require('../../hakurei').Util;
var TimeManager = require('../../hakurei').Manager.Time;
var BaseScene = require('../../hakurei').Scene.Base;

var CONSTANT = require('../../constant');
var AnimeMap = require('../../config/event_anime');
var SS = require('../../object/anime_object');
var ScenarioManager = require('../../logic/scenario_manager');
var serif = require('../../data/true_ending');

var SceneTrueEnding = function(game) {
	BaseScene.apply(this, arguments);

	this._time = new TimeManager();

	this._ss = new SS(this);

	this._serif = new ScenarioManager(this.core, {
		typography_speed: CONSTANT.TYPOGRAPHY_SPEED,
	});

	var self = this;
	// セリフを1つ表示が終わったら
	this._serif.on("printend", function () {
		// N秒後に次のセリフを自動で再生する
		self._time.setTimeout(function () {
			if(self._serif.isEnd()) {
				// セリフが終わったらタイトルへ戻る
				self.core.scene_manager.changeScene("title");
			}
			else {
				// セリフを送る
				self._serif.next();

				// アニメ再生
				self._playCurrentAnime();

				self._executeCurrentOption();
			}
		}, SERIF_WAITNG_COUNT);
	});
};

Util.inherit(SceneTrueEnding, BaseScene);

SceneTrueEnding.prototype.init = function(){
	BaseScene.prototype.init.apply(this, arguments);
	this.removeAllObject();

	// セリフ初期化
	this._serif.init(serif);

	this._initSS(serif);

	this.addObjects([this._ss]);

	// セリフ開始
	this._serif.start();

	// アニメ再生
	this._playCurrentAnime();

	this._executeCurrentOption();
};

SceneTrueEnding.prototype._initSS = function(serif){
	// ss の init
	this._ss.x(this.width/2);
	this._ss.y(this.height/2);

	// 仮で最初のアニメを入れておく
	var anime_conf = {
		default: AnimeMap[serif[0].exp],
	};

	for (var i = 0, len = serif.length; i < len; i++) {
		var anime_name = serif[i].exp;
		if (anime_name) {
			anime_conf[anime_name] = AnimeMap[anime_name];
		}
	}

	this._ss.setAnime(anime_conf);
	this._ss.init();
};


SceneTrueEnding.prototype.update = function(){
	BaseScene.prototype.update.apply(this, arguments);

	this._time.update();
};

// 画面更新
SceneTrueEnding.prototype.draw = function(){
	BaseScene.prototype.draw.apply(this, arguments);

	// メッセージウィンドウ表示
	this._showMessageWindow();

	// 3rd eye アイコンUI表示
	this._show3rdeye();

	// メッセージ表示
	this._showMessage();
};

// 3rd eye アイコンUI表示
SceneTrueEnding.prototype._show3rdeye = function(){
	var ctx = this.core.ctx;
	var icon_name = this.core.image_loader.getImage("eye4"); // 充血した3rd eye を表示
	ctx.drawImage(icon_name,
		(CONSTANT.UI_3RDEYE_X - CONSTANT.UI_3RDEYE_WIDTH/2) *2/3,
		(CONSTANT.UI_3RDEYE_Y - CONSTANT.UI_3RDEYE_HEIGHT/2) *2/3,
		icon_name.width*2/3,
		icon_name.height*2/3);
};

// メッセージウィンドウ表示
SceneTrueEnding.prototype._showMessageWindow = function(){
	var ctx = this.core.ctx;
	var frame_name = this.core.image_loader.getImage("chapter6-event-ending04-frame-talk");
	ctx.drawImage(frame_name,
		0,
		(CONSTANT.UI_3RDEYE_Y - CONSTANT.UI_3RDEYE_HEIGHT/2) *2/3,
		frame_name.width*2/3,
		frame_name.height*2/3);

};

// セリフ表示
SceneTrueEnding.prototype._showMessage = function() {
	var ctx = this.core.ctx;

	// セリフの色
	var font_color = this._serif.getCurrentOption().font_color;
	if(font_color) {
		font_color = Util.hexToRGBString(font_color);
	}
	else {
		font_color = 'rgb(255, 255, 255)';
	}

	var x,y;
	// セリフ表示
	var lines = this._serif.getCurrentPrintedSentences();
	if (lines.length) {
		// セリフテキストの y 座標初期位置
		y = this.core.height - 45;

		for(var i = 0, len = lines.length; i < len; i++) {
			// セリフテキストの x 座標初期位置(中央になるよう配置)
			x = (this.core.width - this._serif.getCurrentMaxLengthLetters() * 24) / 2;

			ctx.save();
			ctx.font = "24px 'OradanoGSRR'";
			ctx.textAlign = 'left';

			ctx.fillStyle = font_color;
			ctx.fillText(lines[i], x, y); // 1行表示

			ctx.restore();

			y+= 30;
		}
	}

};

// アニメ再生
SceneTrueEnding.prototype._playCurrentAnime = function(){
	var exp = this._serif.getCurrentCharaExpressionByPosition();
	if (exp) {
		this._ss.playAnimationOnce(exp);
	}
};

SceneTrueEnding.prototype._executeCurrentOption = function(){
	// BGM 再生
	var bgm = this._serif.getCurrentOption().bgm;
	if (bgm) {
		this.core.audio_loader.changeBGM(bgm);
	}

	// SE 再生
	var sounds = this._serif.getCurrentOption().sounds;
	if (sounds) {
		for(var i = 0, len = sounds.length; i < len; i++) {
			this.core.audio_loader.playSound(sounds[i]);
		}
	}
};


module.exports = SceneTrueEnding;
