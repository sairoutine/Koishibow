'use strict';

var BaseScene = require('../hakurei').Scene.Base;
var TalkScenario = require('../logic/talk_scenario');
var TimeManager = require('../hakurei').Manager.Time;
var Util = require('../hakurei').Util;
var CONSTANT_BUTTON = require('../hakurei').Constant.Button;
var DrawSerif = require('../logic/draw_serif');

var CommonProcess = require('../logic/common_process');
var AnimeMap = require('../config/event_anime');
var EventTalkMasterRepository = require('../repository/event_talk');
var ObjectPoint = require('../hakurei').object.point;
var SS = require('../object/anime_object');
var BlackMist = require('../object/black_mist');

// event_talk scene 専用 sub scene
var SceneSubStagePlay        = require('./subeventtalk/play'); // ゲーム操作可能

// stage scene と共通の sub scene
var SceneSubStageShowJournal = require('./subcommon/show_journal'); // ジャーナル表示
var SceneSubStageGotItem     = require('./subcommon/got_item'); // アイテム獲得
var SceneSubStageUseItem     = require('./subcommon/use_item'); // アイテム使用
var SceneSubStagePicture     = require('./subcommon/picture');
var SceneSubStageBlackout    = require('./subcommon/blackout');

// クリックしてから次のセリフに移るまでの待機カウント
var NEXT_TO_SERIF_WAITING_COUNT = 6;

// 状態
var STATE_TALKING  = 1; // セリフ表示
var STATE_WAITING  = 2; // セリフ非表示
var STATE_JUNCTION = 3; // 会話の選択肢表示
var STATE_END      = 4; // 会話終了

var CONSTANT = require('../constant');

var SceneEventTalk = function(core) {
	BaseScene.apply(this, arguments);

	// event_talk 固有 start
	// 通常
	this.addSubScene("play", new SceneSubStagePlay(core));
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

	this.ss = new SS(this);
	// セリフ表示位置
	this._serif_position = new ObjectPoint(this);
	// 黒いもや
	this._black_mist = new BlackMist(this);
	// event_talk 固有 end

	// セリフ
	this._serif = TalkScenario.generateScenario(core);

	// フレーム数によるイベント管理
	this._time = new TimeManager();

	// 今、会話のどの選択肢を選んでいるか
	this._junction_focus_index = 0;

	this._state = STATE_WAITING;
};
Util.inherit(SceneEventTalk, BaseScene);

SceneEventTalk.prototype.init = function(event_name){
	BaseScene.prototype.init.apply(this, arguments);

	// event_talk 固有 start
	this._master = EventTalkMasterRepository.find(event_name);

	if (!this._master) {
		throw new Error("Can't find event master: " + event_name);
	}

	// フェードインする
	this.core.scene_manager.setFadeIn(120, "black");

	// フェードアウトする
	this.core.scene_manager.setFadeOut(120, "black");

	// BGM再生
	if (this._master.bgm()) {
		this.core.audio_loader.changeBGM(this._master.bgm());
	}

	// チャプター開始時のSE再生
	if (this._master.startSounds()) {
		this._playSounds(this._master.startSounds());
	}

	var serif_list = this._master.serifs();

	// ss の init
	this._initSS();

	this.removeAllObject();
	this._serif_position.init();
	this.addObjects([this.ss, this._serif_position]);

	// 黒い霧
	this._black_mist.init();

	// event_talk 固有 end

	// 今、会話のどの選択肢を選んでいるか
	this._junction_focus_index = 0;

	this._state = STATE_WAITING;

	// セリフデータの生成
	this._serif.init(serif_list);

	// event_talk 固有 start
	this._startSerif();

	this.changeSubScene("play");
	// event_talk 固有 end
};

SceneEventTalk.prototype._initSS = function(){
	this.ss.x(this.width/2);
	this.ss.y(this.height/2);

	var default_anime;
	if (this._master.startAnime()) {
		default_anime = this._master.startAnime();
	}
	else {
		default_anime = this._master.expAnimes()[0]; // 仮で最初のアニメを入れておく
	}

	var anime_conf = {
		default: AnimeMap[default_anime],
	};
	for (var i = 0, len = this._master.expAnimes().length; i < len; i++) {
		var anime_name = this._master.expAnimes()[i];
		anime_conf[anime_name] = AnimeMap[anime_name];
	}

	this.ss.setAnime(anime_conf);
	this.ss.init();
};
SceneEventTalk.prototype._startSerif = function(){
	var self = this;
	var start_function = function () {
		// セリフ再生開始
		if (self.isSerifAutoStart()) {
			// 表情を次へ
			self._serif.start();

			// 表情→セリフの順に再生するので、セリフ再生は一旦止める
			self._serif.pausePrintLetter();

			// 表情 再生
			self._actionExpression(function () {
				self._state = STATE_TALKING;

				// その後、止めたセリフ再生を再開
				self._serif.resumePrintLetter();
			});
		}
	};

	if (this._master.startAnime()) {
		// アニメ再生開始
		this.ss.playAnimationOnce(this._master.startAnime(), start_function);
	}
	else {
		// セリフ再生開始
		start_function();
	}
};


SceneEventTalk.prototype.update = function(){
	BaseScene.prototype.update.apply(this, arguments);

	this._time.update();

	// event_talk 固有 start
	// play sub scene でなければプレイヤーの入力を受け付けない
	if (!(this.currentSubScene() instanceof SceneSubStagePlay)) {
		return;
	}
	// event_talk 固有 end

	if(this._state === STATE_TALKING) {
		this._updateInTalking();
	}
	else if(this._state === STATE_WAITING) {
		// 何もしない
	}
	else if(this._state === STATE_JUNCTION) {
		this._updateInJunction();
	}
	else if(this._state === STATE_END) {
		// event_talk 固有 start
		var self = this;
		this._state = STATE_WAITING;

		// イベント終わりのSE再生
		if (this._master.endSounds()) {
			this._playSounds(this._master.endSounds());
		}

		// イベント終わりのアニメ再生
		if (this._master.endAnime()) {
			this.ss.playAnimationOnce(this._master.endAnime(), function () {
				self._endProcess();
			});
		}
		else {
			// N 秒後にイベント終了処理
			self._time.setTimeout(function () {
				self._endProcess();
			}, 60);
		}
		// event_talk 固有 end
	}
	else {
		throw new Error("illegal talking state: " + this._state);
	}

	// event_talk 固有 start
	this._black_mist.update();

	// 左クリック位置を出力
	if (CONSTANT.DEBUG.ON) {
		if(this.core.input_manager.isLeftClickPush()) {
			var x = this.core.input_manager.mousePositionX();
			var y = this.core.input_manager.mousePositionY();

			console.log("x: " + x + ", y: " + y);
		}
	}
	// event_talk 固有 end
};

SceneEventTalk.prototype._endProcess = function(){
	// BGM をフェードアウト
	if (this._master.bgm()) {
		this.core.audio_loader.fadeOutBGM(2);
	}

	// ユーザー定義の最後の処理
	CommonProcess.exec(this.core, this._master.endProcess());
};


// 会話中の処理
SceneEventTalk.prototype._updateInTalking = function(){
	if(!this._serif.isStart()) return;

	// 会話以外の処理
	this._updateProcess();
	// 会話処理
	this._updateTalk();
};

// 会話以外の処理
// 処理がなければ false を返す
SceneEventTalk.prototype._updateProcess = function(){
	// Z ボタンが押されたら
	// あるいは空文字 = オプションの内容だけ処理したい
	if(this._serif.getCurrentMaxLengthLetters() === 0 || this.core.input_manager.isKeyPush(CONSTANT_BUTTON.A)) {
		TalkScenario.processSerifOption(this, this._serif);
	}
};

// 会話の処理
SceneEventTalk.prototype._updateTalk = function(){
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.A)) {
		// 会話がもう終わりなら
		if(this._serif.isEnd()) {
			this._state = STATE_END;
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

// Nフレーム後に次のセリフへ
SceneEventTalk.prototype._gotoNextSerif = function(choice){
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

// 会話 選択肢の処理
SceneEventTalk.prototype._updateInJunction = function(){
	// Zボタン 選択肢の決定
	if(this.core.input_manager.isKeyPush(CONSTANT_BUTTON.A)) {
		// Nフレーム後に次のセリフへ
		this._gotoNextSerif(this._junction_focus_index);

		// 選んでる選択肢のリセット
		this._junction_focus_index = 0;
	}
	// ↑ボタン 選択肢の移動
	else if (this.core.input_manager.isKeyPush(CONSTANT_BUTTON.UP)) {
		this._junction_focus_index--;
	}
	// ↓ボタン 選択肢の移動
	else if (this.core.input_manager.isKeyPush(CONSTANT_BUTTON.DOWN)) {
		this._junction_focus_index++;
	}

	// 選択肢が上下はみ出ないように
	var junction_list = this._serif.getCurrentJunctionList();
	this._junction_focus_index = Util.clamp(this._junction_focus_index, 0, junction_list.length - 1);
};

SceneEventTalk.prototype.draw = function(){
	BaseScene.prototype.draw.apply(this, arguments);

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
	else if(this._state === STATE_END) {
		// 何もしない
	}

	// event_talk 固有 start
	this._black_mist.draw();
	// event_talk 固有 end
};

// event_talk 固有 start
SceneEventTalk.prototype._showMessage = function(){
	var option = this._serif.getCurrentOption();
	this._serif_position.setPosition(option.x, option.y);

	// セリフ取得
	var lines = this._serif.getCurrentPrintedSentences();
	var width = this._serif.getCurrentMaxLengthLetters();
	var height = this._serif.getCurrentSentenceNum();

	if (!lines.length) return;

	var ctx = this.core.ctx;
	var fukidashi = this.core.image_loader.getImage(this._master.serifWindow());
	DrawSerif.drawWindow(this._serif_position, ctx, fukidashi, lines, width, height);
	DrawSerif.drawText(this._serif_position, ctx, lines, width, height,
		// オプション
		{
			fontSize: this._serif.getCurrentOption().fontSize,
			fontName: this._serif.getCurrentOption().fontName,
		}
	);
};
// 会話 選択肢 表示
SceneEventTalk.prototype._showJunction = function() {
	if(!this._serif.isStart()) return;

	var option = this._serif.getCurrentOption();
	var obj = this._serif_position;
	obj.setPosition(option.x, option.y);

	// 表示
	var ctx = this.core.ctx;
	var junction_off = this.core.image_loader.getImage('junction_off');
	var junction_on  = this.core.image_loader.getImage('junction_on');

	var junction_list = this._serif.getCurrentJunctionList();
	DrawSerif.drawJunction(obj, ctx, junction_off, junction_on, junction_list, this._junction_focus_index);
};
// アニメ
SceneEventTalk.prototype._actionExpression = function(callback) {
	callback = callback || function () {};

	// SE 再生
	var option = this._serif.getCurrentOption();

	// sound 再生
	var sounds = option.sounds;
	this._playSounds(sounds);

	// 表情
	var expression = this._serif.getCurrentCharaExpressionByPosition();
	if(!expression) {
		// 表情終了を待たない分、N 秒だけ待つ
		this._time.setTimeout(function () {
			callback();
		}, NEXT_TO_SERIF_WAITING_COUNT);
		return;
	}

	if (option.loop) {
		this.ss.playAnimationInfinity(expression);

		// 表情終了を待たない分、N 秒だけ待つ
		this._time.setTimeout(function () {
			callback();
		}, NEXT_TO_SERIF_WAITING_COUNT);
	}
	else {
		this.ss.playAnimationOnce(expression, callback);
	}
};

// 引数
// [{sound: ~~~, frame: ~~~}, {sound: ~~~, frame: ~~~}]
SceneEventTalk.prototype._playSounds = function(sounds) {
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
};
// event_talk 固有 end

// black_mist が参照する
SceneEventTalk.prototype.isUsingEye = function(){
	return false;
};
// シーン開始時にセリフを開始させるかどうか
SceneEventTalk.prototype.isSerifAutoStart = function() {
	return true;
};


module.exports = SceneEventTalk;
