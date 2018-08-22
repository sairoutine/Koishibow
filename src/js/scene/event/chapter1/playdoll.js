'use strict';
var _ = require('i18n4v');

// 1-7 子どもたちへ遊びを提案

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
var STATE_JUNCTION = 3; // 会話の選択肢表示



var jsonDataOfChr1 = require('../../../data/anime/chapter1/event/playdoll/chr/obj01_anime_1');
var jsonDataOfChr2 = require('../../../data/anime/chapter1/event/playdoll/chr/obj02_anime_1');
var jsonDataOfChr3 = require('../../../data/anime/chapter1/event/playdoll/chr/obj03_anime_1');
var jsonDataOfChr4 = require('../../../data/anime/chapter1/event/playdoll/chr/obj04_anime_1');
var jsonDataOfChr5 = require('../../../data/anime/chapter1/event/playdoll/chr/obj05_anime_1');
var jsonDataOfChr6 = require('../../../data/anime/chapter1/event/playdoll/chr/obj06_anime_1');
var jsonDataOfChr7 = require('../../../data/anime/chapter1/event/playdoll/chr/obj07_anime_1');
var jsonDataOfChr8 = require('../../../data/anime/chapter1/event/playdoll/chr/obj08_anime_1');
var jsonDataOfChrSelect01_1 = require('../../../data/anime/chapter1/event/playdoll/chr/select01_1_anime_1');
var jsonDataOfChrSelect02_1 = require('../../../data/anime/chapter1/event/playdoll/chr/select02_1_anime_1');
var jsonDataOfChrSelect02_2 = require('../../../data/anime/chapter1/event/playdoll/chr/select02_2_anime_1');
var jsonDataOfKoishi1 = require('../../../data/anime/chapter1/event/playdoll/koishi/obj01_anime_1');
var jsonDataOfKoishi2 = require('../../../data/anime/chapter1/event/playdoll/koishi/obj02_anime_1');
var jsonDataOfKoishi3 = require('../../../data/anime/chapter1/event/playdoll/koishi/obj03_anime_1');
var jsonDataOfKoishi4 = require('../../../data/anime/chapter1/event/playdoll/koishi/obj04_anime_1');
var jsonDataOfKoishi5 = require('../../../data/anime/chapter1/event/playdoll/koishi/obj05_anime_1');
var jsonDataOfKoishi6 = require('../../../data/anime/chapter1/event/playdoll/koishi/obj06_anime_1');
var jsonDataOfKoishi7 = require('../../../data/anime/chapter1/event/playdoll/koishi/obj07_anime_1');
var jsonDataOfKoishi8 = require('../../../data/anime/chapter1/event/playdoll/koishi/obj08_anime_1');
var jsonDataOfKoishiSelect01_1 = require('../../../data/anime/chapter1/event/playdoll/koishi/select01_1_anime_1');
var jsonDataOfKoishiSelect02_1 = require('../../../data/anime/chapter1/event/playdoll/koishi/select02_1_anime_1');
var jsonDataOfKoishiSelect02_2 = require('../../../data/anime/chapter1/event/playdoll/koishi/select02_2_anime_1');

var SceneEventPlayDoll = function(core) {
	base_scene.apply(this, arguments);
	// シーンの各種キャラ
	this.chr = new SS(this);
	this.koishi = new SS(this);


	this._state = STATE_WAITING;
	this._junction_focus_index = 0;
	this._is_gameover = false;

	// 黒いもや
	this.black_mist = new BlackMist(this);

	// セリフ
	this._serif = new ScenarioManager();

	// セリフの位置
	this.serif_position_of_murasa = new ObjectPoint(this);
	this.serif_position_of_murasa.setPosition(this.width - 400, 200);
	this.serif_position_of_kogasa = new ObjectPoint(this);
	this.serif_position_of_kogasa.setPosition(this.width - 200, 200);
	this.serif_position_of_kyoko = new ObjectPoint(this);
	this.serif_position_of_kyoko.setPosition(this.width - 300, 200);
	this.serif_position_of_koishi = new ObjectPoint(this);
	this.serif_position_of_koishi.setPosition(300, 200);
	this.serif_position_of_koishi_junction = new ObjectPoint(this);
	this.serif_position_of_koishi_junction.setPosition(450, 550);

};
Util.inherit(SceneEventPlayDoll, base_scene);

SceneEventPlayDoll.prototype.init = function(){
	base_scene.prototype.init.apply(this, arguments);

	// シーンの各種キャラ
	this.chr = new SS(this);
	this.koishi = new SS(this);


	this._state = STATE_WAITING;
	this._junction_focus_index = 0;
	this._is_gameover = false;

	// フェードインする
	this.core.scene_manager.setFadeIn(120, "black");

	// イベント再生後はフェードアウトする
	this.core.scene_manager.setFadeOut(120, "black");

	// BGM 止めない
	//this.core.audio_loader.stopBGM();


	this.initChr();
	this.initKoishi();
	this.removeAllObject();
	this.addObjects([this.chr, this.koishi]);

	this.black_mist.init();

	this._serif.init([
		{"chara": null,"serif":"", "option": {"is_next": 1}},
		{"chara": "murasa","serif":_("あ！")},
		{"chara": "kyoko","serif":_(".............")},
		{"chara": null,"serif":"", "option": {"is_next": 2}},
		{"chara": null,"serif":"", "option": {"is_next": 3}},
		{"chara": "koishi","serif":_(".............")},
		{"chara": null,"serif":"", "option": {"is_next": 4}},
		{"chara": "kogasa","serif":_("変なの")},
		{"chara": null,"serif":"", "option": {"is_next": 5}},
		{"chara": null,"serif":"", "option": {"is_next": 6}},
		{"chara": "koishi","serif":_("ねえ、にんぎょうごっこしましょ！")},
		{"chara": "murasa","serif":_("なにそれえ")},
		{"chara": "koishi","serif":_("見てて")},
		{"chara": null,"serif":"", "option": {"is_next": 7, "sound": "fall"}},
		{"chara": null,"serif":"", "option": {"is_next": 8}},
		{"chara": "murasa","serif":_("そんなのつまんないじゃん"), "junction": [
			"あいてのきもちになる",
			"もうおうちにかえる"
		]},
		{"type": "junction_serif", "serifs": [
			[
				{"chara": null,"serif":"", "option": {"is_next": "select_01_1"}},
			],
			[
				{"chara": null,"serif":"", "option": {"is_next": "select_02_1", "setGameover": true}},
				{"chara": "koishi","serif":_("ふん！")},
				{"chara": "koishi","serif":_("この楽しさがわからないなんて")},
				{"chara": "koishi","serif":_("なんて馬鹿なのかしら")},
				{"chara": "murasa","serif":_("なんなの？")},
				{"chara": "murasa","serif":_("あっち行ってよ！")},
				{"chara": "koishi","serif":_("こんなとこくるんじゃなかったわ")},
				{"chara": null,"serif":"", "option": {"is_next": "select_02_2"}},
				{"chara": "murasa","serif":_("へんなこ！")},
			],
		]},
	]);

	this._serif.start();
	this._state = STATE_TALKING;
};

SceneEventPlayDoll.prototype.initChr = function(){
	this.chr.x(this.width/2);
	this.chr.y(this.height/2);

	var anime_config = {
		default: jsonDataOfChr1,
	};
	anime_config[1] = jsonDataOfChr1;
	anime_config[2] = jsonDataOfChr2;
	anime_config[3] = jsonDataOfChr3;
	anime_config[4] = jsonDataOfChr4;
	anime_config[5] = jsonDataOfChr5;
	anime_config[6] = jsonDataOfChr6;
	anime_config[7] = jsonDataOfChr7;
	anime_config[8] = jsonDataOfChr8;
	anime_config.select_01_1 = jsonDataOfChrSelect01_1;
	anime_config.select_02_1 = jsonDataOfChrSelect02_1;
	anime_config.select_02_2 = jsonDataOfChrSelect02_2;

	this.chr.setAnime(anime_config);
	this.chr.init();

};
SceneEventPlayDoll.prototype.initKoishi = function(){
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
	anime_config[6] = jsonDataOfKoishi6;
	anime_config[7] = jsonDataOfKoishi7;
	anime_config[8] = jsonDataOfKoishi8;
	anime_config.select_01_1 = jsonDataOfKoishiSelect01_1;
	anime_config.select_02_1 = jsonDataOfKoishiSelect02_1;
	anime_config.select_02_2 = jsonDataOfKoishiSelect02_2;


	this.koishi.setAnime(anime_config);
	this.koishi.init();

};




SceneEventPlayDoll.prototype.beforeDraw = function(){
	base_scene.prototype.beforeDraw.apply(this, arguments);
	if(this._state === STATE_TALKING) {
		this._updateInTalking();
	}
	else if(this._state === STATE_WAITING) {
		// 何もしない
	}
	else if(this._state === STATE_JUNCTION) {
		this._updateInJunction();
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

	self.core.time_manager.setTimeout(function () {
		self._state = STATE_TALKING;

		// セリフを送る
		self._serif.next(choice);

		if (self._serif.getCurrentOption().setGameover){
			self._is_gameover = true;
		}

		var sound = self._serif.getCurrentOption().sound;
		if (sound){
			// fall だけ 50フレーム再生を遅らせる
			self.core.time_manager.setTimeout(function () {
				self.core.audio_loader.playSound(sound);
			}, 50);
		}



		// アニメ進行
		var is_next = self._serif.getCurrentOption().is_next;
		if (is_next) {
			if (is_next === 3 || is_next === 4 || is_next === 6 || is_next === 8 || is_next === "select_02_1") {
				self.koishi.playAnimationInfinity(is_next);
				self.chr.playAnimationInfinity(is_next);
				self._serif.next(choice);
			}
			else {
				self.koishi.playAnimationOnce(is_next);
				self.chr.playAnimationOnce(is_next, function () {
					if (!self._serif.isEnd()) {
						self._gotoNextSerif(choice);
					}
				});
			}

		}

	}, NEXT_TO_SERIF_WAITING_COUNT);
};
// 会話 選択肢の処理
SceneEventPlayDoll.prototype._updateInJunction = function(){
	// Zボタン 選択肢の決定
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
		// Nフレーム後に次のセリフへ
		this._gotoNextSerif(this._junction_focus_index);

		// 選んでる選択肢のリセット
		this._junction_focus_index = 0;
	}
	// ↑ボタン 選択肢の移動
	else if (this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_UP)) {
		this._junction_focus_index--;
	}
	// ↓ボタン 選択肢の移動
	else if (this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_DOWN)) {
		this._junction_focus_index++;
	}

	// 選択肢が上下はみ出ないように
	var junction_list = this._serif.getCurrentJunctionList();
	this._junction_focus_index = Util.clamp(this._junction_focus_index, 0, junction_list.length - 1);
};




SceneEventPlayDoll.prototype.draw = function(){

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
	else if(this._state === STATE_JUNCTION) {
		// 会話 選択肢 表示
		this._showJunction();
	}

	this.black_mist.draw();
};
// 会話中の処理
SceneEventPlayDoll.prototype._updateInTalking = function(){
	// Z ボタンが押されたら
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.BUTTON_Z)) {
		// 会話がもう終わりなら
		if(this._serif.isEnd()) {
			if (this._is_gameover) {
				// 間違い
				this.core.save_manager.reload();
				this.core.scene_manager.changeScene("title");
			}
			else {
				// 正解
				this.core.scene_manager.changeScene("stage", "chapter1_07");
			}
		}
		// 会話 継続中
		else {
			// 会話への回答の選択肢があるなら、次のセリフには進めずに
			// 選択肢を表示する
			if(this._serif.isCurrentSerifExistsJunction()) {
				this._state = STATE_JUNCTION;
			}
			// 次のセリフへ
			else {
				// Nフレーム後に次のセリフへ
				this._gotoNextSerif();
			}
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
	else if (chara_name === "kogasa") {
		obj = this.serif_position_of_kogasa;
	}
	else if (chara_name === "murasa") {
		obj = this.serif_position_of_murasa;
	}
	else if (chara_name === "kyoko") {
		obj = this.serif_position_of_kyoko;
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

// 会話 選択肢 表示
SceneEventPlayDoll.prototype._showJunction = function() {
	if(!this._serif.isStart()) return;

	// こいしを取得
	var obj = this.serif_position_of_koishi_junction;
	// 表示
	var ctx = this.core.ctx;
	var junction_off = this.core.image_loader.getImage('junction_off');
	var junction_on  = this.core.image_loader.getImage('junction_on');

	var junction_list = this._serif.getCurrentJunctionList();
	DrawSerif.drawJunction(obj, ctx, junction_off, junction_on, junction_list, this._junction_focus_index);
};

SceneEventPlayDoll.prototype._showBackground = function(){
	var ctx = this.core.ctx;
	ctx.save();

	var background = this.core.image_loader.getImage("chapter1-07-bg-001");

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
SceneEventPlayDoll.prototype.isUsingEye = function(){
	return false;
};

module.exports = SceneEventPlayDoll;
