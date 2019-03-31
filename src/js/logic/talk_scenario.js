'use strict';
// フィールド上での会話・イベント中での会話中に行われる処理と分岐

var ScenarioManager = require('../logic/scenario_manager');
var CONSTANT = require('../constant');

// 静的クラス
var TalkScenario = function() {};

// 分岐条件登録済みの Scenario インスタンスを生成
TalkScenario.generateScenario = function (core) {
	return new ScenarioManager(core, {
		typography_speed: CONSTANT.TYPOGRAPHY_SPEED,
		// 会話で使う条件分岐
		criteria: {
			// アイテムを持っていれば
			existsItem: function (core, item_id) {
				return core.save_manager.item.existsItem(item_id) ? 0 : 1;
			},
			// アイテムすべて持っていれば
			existsItemAll: function (core, item_ids) {
				var args = Array.prototype.slice.call(arguments); // convert arguments to array
				core = args.shift();
				for (var i = 0, len = args.length; i < len; i++) {
					if(!core.save_manager.item.existsItem(args[i])) { // 1つでも持っていなければ
						return 1;
					}
				}

				return 0;
			},
			// id のセリフを再生済かどうか
			isPlayed: function (core, id) {
				return core.save_manager.scenario.getPlayedCount(id) ? 0 : 1;
			},

			// max_num まで1ずつ上昇し、それを超えると最初に戻る
			circulate: function (core, id, max_num) {
				var index = core.save_manager.scenario.getPlayedCount(id);

				core.save_manager.scenario.incrementPlayedCount(id);

				return index % max_num;
			},
			// max_num まで1ずつ上昇し、それを超えると最大値を返し続ける
			limit: function (core, id, max_num) {
				var index = core.save_manager.scenario.getPlayedCount(id);

				if (index >= max_num) return max_num;

				core.save_manager.scenario.incrementPlayedCount(id);

				return index;
			},
			// アイテムを持っていれば
			growth: function (core) {
				return core.save_manager.player.getGrowth() - 1;
			},

		}
	});
};


// セリフオプションに登録された「セリフ以外の処理」を処理
// NOTE:
// scene は talk_with_object, got_item, use_item, picture サブシーンを登録している必要がある
// かつ現在のsubscene は talk_with_object である必要がある(遷移先サブシーンからtalk_with_objectに戻ってくるため)
TalkScenario.processSerifOption = function (scene, serif) {
	var option = serif.getCurrentOption();
	var scene_manager = scene.core.scene_manager;

	// ムービーイベントを再生
	if (option.playEventMovie) {
		scene_manager.setFadeOut(0);
		scene_manager.changeScene("event_movie", option.playEventMovie);
		return;
	}
	// 別のシーンへ遷移
	else if (option.changeScene) {
		if (option.changeScene instanceof Array) {
			scene.core.scene_manager.changeScene.apply(scene.core.scene_manager, option.changeScene);
		}
		else {
			scene.core.scene_manager.changeScene(option.changeScene);
		}

		return;
	}
	// 別のフィールドへ遷移
	else if (option.changeField) {
		scene.core.scene_manager.changeScene("stage", option.changeField);
		return;
	}
	// 別のイベントを再生
	else if (option.playEvent) {
		scene.core.scene_manager.setFadeOut(0);
		scene.core.scene_manager.changeScene("event_talk", option.playEvent);
		return;
	}
	// 別のイベントを再生(旧)
	else if (option.playEventOld) {
		scene.core.scene_manager.setFadeOut(0);
		scene.core.scene_manager.changeScene("event_talk_old", option.playEventOld);
		return;
	}
	// アイテム獲得
	else if (option.getItem) {
		// アイテム追加
		scene.core.save_manager.item.addItem(option.getItem);

		// アイテム獲得のみ、別のシーンへ遷移と組み合わせられる
		if (option.changeField) {
			scene.core.scene_manager.changeScene("stage", option.changeField);
			return;
		}
		else {
			// アイテム獲得演出へ遷移
			scene.changeSubScene("got_item", option.getItem, "talk_with_object");
			return;
		}
	}
	// アイテム使用
	else if (option.useItem) {
		var use_item_id = option.useItem;

		scene.core.save_manager.item.reduceItem(use_item_id);

		// アイテム使用演出へ遷移
		scene.changeSubScene("use_item", use_item_id, "talk_with_object");
		return;
	}
	// 1枚絵を表示
	else if (option.showPicture) {
		// セリフ終わり
		scene.changeSubScene("picture", option.showPicture, "talk_with_object");
		return;
	}
	// フラグを下ろす
	else if (option.resetFlag) {
		scene.core.save_manager.scenario.resetPlayedCount(option.resetFlag);
		return;
	}
	// アイテムを削除
	else if (option.deleteItem) {
		var delete_item_id = option.deleteItem;
		scene.core.save_manager.item.reduceItem(delete_item_id);
		return;
	}
	// ジャーナル獲得
	else if (option.getJournal) {
		// 既にジャーナルを獲得済みであれば何もしない
		if (scene.core.save_manager.journal.existsJournal(option.getJournal)) return;

		// ジャーナルをまとめた本を所持してなければ一緒に獲得
		if (!scene.core.save_manager.item.existsItem(CONSTANT.ITEM_JOURNAL_BOOK_ID)) {
			scene.core.save_manager.item.addItem(CONSTANT.ITEM_JOURNAL_BOOK_ID);
		}

		// ジャーナル獲得
		scene.core.save_manager.journal.addJournal(option.getJournal);

		// ジャーナル画像表示シーンへ遷移
		scene.changeSubScene("show_journal", option.getJournal, "talk_with_object");

		return;
	}
	// 暗転
	else if (option.blackout) {
		scene.changeSubScene("blackout", "talk_with_object");
		return;
	}
};





module.exports = TalkScenario;
