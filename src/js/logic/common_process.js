'use strict';
/* 共通処理 */
// フィールド遷移時の処理と、イベント終了後の処理

// TOOD: フラグ管理を save_manager.scenario ではなく save_manager.flag にする

// 条件
var CriteriaList = {
	// アイテムを持っていれば
	existsItem: function (core, item_id) {
		return core.save_manager.item.existsItem(item_id) ? 0 : 1;
	},
	// 特定のイベントを再生済みなら
	isPlayedEvent: function (core, event_name) {
		return core.save_manager.event.isPlayedEvent(event_name) ? 0 : 1;
	},

	// id のフラグが立っている
	isPlayed: function (core, id) {
		return core.save_manager.scenario.getPlayedCount(id) ? 0 : 1;
	},

	/*
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
	*/
};

var ProcessList = {
	// 特定のフィールドに遷移
	changeField: function (core, field_name) {
		core.scene_manager.changeScene("stage", field_name);
	},
	// アイテムを削除
	deleteItem: function (core, item_id) {
		core.save_manager.item.reduceItem(item_id);
	},
	// 特定のシーンに戻る
	returnScene: function (core, scene_name) {
		core.scene_manager.returnScene(scene_name);
	},
	// イベントを再生する or シーン遷移
	changeScene: function (core, scene_name, varArgs) {
		var args = Array.prototype.slice.call(arguments); // convert arguments to array

		core = args.shift();
		core.scene_manager.setFadeOut(0); // フェードアウトしない
		core.scene_manager.changeScene.apply(core.scene_manager, args);
	},
	// イベントを再生する or シーン遷移
	changeSceneWithFadeout: function (core, scene_name, varArgs) {
		var args = Array.prototype.slice.call(arguments); // convert arguments to array

		core = args.shift();
		core.scene_manager.setFadeOut(60, "black");
		core.scene_manager.changeScene.apply(core.scene_manager, args);
	},
	// サブ イベントを再生する
	playSubEvent: function (core, event_name) {
		//core.save_manager.event.setPlayedEvent(scene);
		core.scene_manager.currentScene().changeSubScene(event_name);
	},
	// 会話を発生させる
	playTalk: function (core, serif_list) {
		core.scene_manager.currentScene().changeSubScene("talk_with_object", serif_list);
	},
	// フラグを立てる
	incrementPlayedFlag: function (core, flag_name) {
		core.save_manager.scenario.incrementPlayedCount(flag_name);
	},
	// フラグを下ろす
	resetPlayedFlag: function (core, flag_name) {
		core.save_manager.scenario.resetPlayedCount(flag_name);
	},
};

// 静的クラス
var CommonProcess = function() {};

/*
	// dataのフォーマット例
	// フィールド初回遷移時に1度だけ会話をしている
	[
		{"type": "criteria", "value": "isPlayed", "arguments": ["chapter3_07_access"], "process": [
			[],
			[
				{"type": "process", "value": "playTalk", "arguments": [
					[{"chara": "koishi","serif":"こんにちは"}],
				]},
				{"type": "process", "value": "incrementPlayedFlag", "arguments": ["chapter3_07_access"]}
			],
		]},
	]
*/
CommonProcess.exec = function (core, data) {
	var process_list = data.slice(); // array shallow copy

	while (process_list.length !== 0) {
		var process = process_list.shift();

		if (process.type === "criteria") {
			var criteria_func = CriteriaList[process.value];

			if(!criteria_func) {
				throw new Error("Unknown process value: " + process.value);
			}

			// 条件を満たしていれば
			var num = criteria_func.apply({}, [core].concat(process.arguments));

			var plist = process.process[num];

			if (plist) {
				process_list = process_list.concat(plist);
			}
		}
		else if (process.type === "process") {
			var process_func = ProcessList[process.value];

			if(!process_func) {
				throw new Error("Unknown process value: " + process.value);
			}

			process_func.apply({}, [core].concat(process.arguments))
		}
		else {
			throw new Error("Unknown process type: " + process.type);
		}
	}
};

module.exports = CommonProcess;
