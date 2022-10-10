'use strict';

var core = require('./hakurei').core;
var util = require('./hakurei').util;
var CONSTANT = require('./constant');

var StorageEvent   = require('./storage/event');
var StorageItem    = require('./storage/item');
var StorageJournal = require('./storage/journal');
var StoragePiece   = require('./storage/piece');
var StoragePlayer  = require('./storage/player');

var SceneTitle = require('./scene/title');
var SceneHowto = require('./scene/howto');
var SceneMusic = require('./scene/music');
var SceneStage = require('./scene/stage');
var SceneGameover = require('./scene/gameover');
var SceneLoading = require('./scene/loading');
var SceneMovie = require('./hakurei').scene.movie;
var SceneOpeningMovie = require('./scene/opening_movie');
var SceneEventTalk = require('./scene/event_talk');
var SceneEventTalkOld = require('./scene/event/event_talk_old');
var SceneEventMovie = require('./scene/event_movie');
var SceneEventForChapter0EncounterSatori = require('./scene/event/chapter0/encounter_satori');
var SceneEventForChapter0Last            = require('./scene/event/chapter0/last');
var SceneEventForTrialLast               = require('./scene/event/trial_last');
var SceneEventForChapter1SitAtBusstop    = require('./scene/event/chapter1/sit_at_busstop');
var SceneEventForChapter1TalkWithMobu    = require('./scene/event/chapter1/talk_with_mobu');
var SceneEventForChapter1PlayDoll        = require('./scene/event/chapter1/playdoll');
var SceneEventForChapter1PlayWithMurasa  = require('./scene/event/chapter1/play_with_murasa');
var SceneEventForChapter3GetupKoishi     = require('./scene/event/chapter3/getup_koishi');

var FieldMasterRepository = require('./repository/field');
var ItemMasterRepository = require('./repository/item');
var JournalMasterRepository = require('./repository/journal');
var EventMasterRepository = require('./repository/event_talk');
var OldEventMasterRepository = require('./repository/event_talk_old');


var Game = function(canvas) {
	core.apply(this, arguments);

	// シーン一覧
	this.scene_manager.addScene("loading", new SceneLoading(this));
	this.scene_manager.addScene("title", new SceneTitle(this));
	this.scene_manager.addScene("howto", new SceneHowto(this));
	this.scene_manager.addScene("music", new SceneMusic(this));
	this.scene_manager.addScene("stage", new SceneStage(this));
	this.scene_manager.addScene("gameover", new SceneGameover(this));
	if(CONSTANT.DEBUG.SOUND_OFF) {
		this.scene_manager.addScene("movie", new SceneMovie(this).mute());
	}
	else {
		this.scene_manager.addScene("movie", new SceneMovie(this));
	}
	this.scene_manager.addScene("event_talk", new SceneEventTalk(this));
	this.scene_manager.addScene("event_talk_old", new SceneEventTalkOld(this));
	if(CONSTANT.DEBUG.SOUND_OFF) {
		this.scene_manager.addScene("event_movie", new SceneEventMovie(this).mute());
	}
	else {
		this.scene_manager.addScene("event_movie", new SceneEventMovie(this));
	}

	// chapter 開始時のmovie
	this.scene_manager.addScene("opening_movie_chapter0", new SceneOpeningMovie(this).setArgs("chapter0"));
	this.scene_manager.addScene("opening_movie_chapter1", new SceneOpeningMovie(this).setArgs("chapter1"));
	this.scene_manager.addScene("opening_movie_chapter2", new SceneOpeningMovie(this).setArgs("chapter2"));
	this.scene_manager.addScene("opening_movie_chapter3", new SceneOpeningMovie(this).setArgs("chapter3"));
	this.scene_manager.addScene("opening_movie_chapter4", new SceneOpeningMovie(this).setArgs("chapter4"));
	this.scene_manager.addScene("opening_movie_chapter5", new SceneOpeningMovie(this).setArgs("chapter5"));
	this.scene_manager.addScene("opening_movie_chapter6", new SceneOpeningMovie(this).setArgs("chapter6"));

	this.scene_manager.addScene("event_for_chapter0_encounter_satori", new SceneEventForChapter0EncounterSatori(this));
	this.scene_manager.addScene("event_for_chapter0_last",             new SceneEventForChapter0Last(this));
	this.scene_manager.addScene("event_for_chapter1_sit_at_busstop", new SceneEventForChapter1SitAtBusstop(this));
	this.scene_manager.addScene("event_for_chapter1_talk_with_mobu", new SceneEventForChapter1TalkWithMobu(this));
	this.scene_manager.addScene("event_for_chapter1_playdoll", new SceneEventForChapter1PlayDoll(this));
	this.scene_manager.addScene("event_for_chapter1_play_with_murasa", new SceneEventForChapter1PlayWithMurasa(this));
	this.scene_manager.addScene("event_for_chapter3_getup_koishi", new SceneEventForChapter3GetupKoishi(this));
	// 体験版 終了
	this.scene_manager.addScene("event_for_trial_last",       new SceneEventForTrialLast(this));

	// セーブデータ
	this.save_manager.addClass("event",   StorageEvent);
	this.save_manager.addClass("item",    StorageItem);
	this.save_manager.addClass("journal", StorageJournal);
	this.save_manager.addClass("piece",   StoragePiece);
	this.save_manager.addClass("player",  StoragePlayer);
};
util.inherit(Game, core);


Game.prototype.init = function () {
	core.prototype.init.apply(this, arguments);

	// シーン遷移
	this.scene_manager.changeScene("loading");
};


Game.prototype.isSteam = function () {
	return CONSTANT.STEAM;
};

Game.prototype.setupDebug = function (dom) {
	if (!CONSTANT.DEBUG.ON) return;

	this.debug_manager.setOn(dom);

	// テキスト追加
	this.debug_manager.addMenuText("Zキー：決定、調べる");
	this.debug_manager.addMenuText("Xキー：キャンセル、サードアイ使用／解除、押しっぱなしでライトの移動");
	this.debug_manager.addMenuText("SPACEキー：メニュー開く／閉じる");

	this.debug_manager.addGitLatestCommitInfo("sairoutine", "Koishibow", "gh-pages");

	// ゲームスタート ボタン
	this.debug_manager.addMenuButton("Run", function (game) {
		game.startRun();
	});

	// ゲームストップ ボタン
	this.debug_manager.addMenuButton("Stop", function (game) {
		game.stopRun();
	});

	// キャプチャボタン
	this.debug_manager.addCaputureImageButton("画面キャプチャ");

	// フルスクリーン ボタン
	this.debug_manager.addMenuButton("最大化", function (game) {
		game.fullscreen();
	});

	// ゲームデータ消去ボタン
	this.debug_manager.addMenuButton("セーブクリア", function (game) {
		game.save_manager.del();
		game.reload();
	});

	this.debug_manager.addMenuButton("当たり判定表示", function (game) {
		game.debug_manager.setShowingCollisionAreaOn();
	});
	this.debug_manager.addMenuButton("当たり判定非表示", function (game) {
		game.debug_manager.setShowingCollisionAreaOff();
	});

	this.debug_manager.addMenuButton("移動制限範囲表示", function (game) {
		game.debug_manager.set("is_show_immovable_area", true);
	});
	this.debug_manager.addMenuButton("移動制限範囲非表示", function (game) {
		game.debug_manager.set("is_show_immovable_area", false);
	});

	this.debug_manager.addMenuButton("FPS表示", function (game) {
		game.debug_manager.setShowingFpsOn();
	});
	this.debug_manager.addMenuButton("FPS非表示", function (game) {
		game.debug_manager.setShowingFpsOff();
	});

	this.debug_manager.addNewLine();

	var amount = Math.floor(CONSTANT.MAX_3RDEYE_GAUGE/4);
	this.debug_manager.addMenuButton("SAN値+" + amount, function (game) {
		game.save_manager.player.gain3rdeyeGauge(amount);
	});
	this.debug_manager.addMenuButton("SAN値-" + amount, function (game) {
		game.save_manager.player.reduce3rdeyeGauge(amount);
	});
	this.debug_manager.addMenuButton("SAN値 全回復", function (game) {
		game.save_manager.player.gain3rdeyeGauge(CONSTANT.MAX_3RDEYE_GAUGE);
	});
	this.debug_manager.addMenuButton("SAN値 表示", function (game) {
		game.debug_manager.set("is_show_3rdeye_gauge", true);
	});
	this.debug_manager.addMenuButton("SAN値 非表示", function (game) {
		game.debug_manager.set("is_show_3rdeye_gauge", false);
	});

	this.debug_manager.addMenuButton("発達度+1", function (game) {
		game.save_manager.player.growUp();
	});
	this.debug_manager.addMenuButton("発達度-1", function (game) {
		game.save_manager.player.growDown();
	});
	this.debug_manager.addMenuButton("発達度 表示", function (game) {
		game.debug_manager.set("is_show_growth", true);
	});
	this.debug_manager.addMenuButton("発達度 非表示", function (game) {
		game.debug_manager.set("is_show_growth", false);
	});

	this.debug_manager.addNewLine();

	// フィールド一覧生成
	var field_list = FieldMasterRepository.all()
	var field_name_list = [];
	for (var i = 0, len = field_list.length; i < len; i++) {
		field_name_list.push({value: field_list[i].key()});
	}
	this.debug_manager.addMenuSelect("フィールド移動", field_name_list,
		function (game, value) {
			game.scene_manager.changeScene("stage", value);
		});

	// イベント(システム)(新)一覧生成
	var event_list = EventMasterRepository.all()
	var event_name_list = [];
	for (var k = 0; k < event_list.length; k++) {
		event_name_list.push({value: event_list[k].key()});
	}
	this.debug_manager.addMenuSelect("イベント再生", event_name_list,
		function (game, value) {
			game.scene_manager.changeScene("event_talk", value);
		});

	// イベント(システム)(旧)一覧生成
	var event_list = OldEventMasterRepository.all()
	var event_name_list = [];
	for (var l = 0; l < event_list.length; l++) {
		event_name_list.push({value: event_list[l].key()});
	}
	this.debug_manager.addMenuSelect("イベント(旧)再生", event_name_list,
		function (game, value) {
			game.scene_manager.changeScene("event_talk_old", value);
		});



	// アイテム一覧生成
	var item_list = ItemMasterRepository.all();
	var item_name_list = [];
	for (var j = 0; j < item_list.length; j++) {
		item_name_list.push({name: item_list[j].name(), value: item_list[j].id()});
	}
	this.debug_manager.addMenuSelect("アイテム獲得", item_name_list,
		function (game, value) {
			game.save_manager.item.addItem(value);
		});

	var journals = JournalMasterRepository.all();
	this.debug_manager.addMenuButton("ジャーナル全て獲得", function (game) {
		for (var i = 0; i < journals.length; i++) {
			game.save_manager.journal.addJournal(journals[i].id());
		}
	});

	this.debug_manager.addNewLine();

	this.debug_manager.addUploadFileButton("SE／BGM 挿入", function (game, type, dataurl) {
		if (!type.match('audio')) return;

		game.audio_loader.playSoundByDataURL(dataurl);
	}, "data_url");
};

module.exports = Game;
