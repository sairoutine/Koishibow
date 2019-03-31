'use strict';

var Base = require('../hakurei').Manager.Scenario;
var Util = require('../hakurei').Util;

var Scenario = function() {
	Base.apply(this, arguments);
};
Util.inherit(Scenario, Base);

// 継承先で上書き
Scenario.prototype._setupCurrentSerifScript = function () {
	// ここがカスタム部分
	var script = this._convertSerifScript(this._script[this._progress]);

	this._setupChara(script);
	this._setupBackground(script);
	this._setupJunction(script);
	this._setupOption(script);

	this._saveSerifPlayed(script);

	if(typeof script.serif === "string") {
		this._setupSerif(script);
	}
	else {
		// If serif is empty, show chara without talking and next
		if(!this.isEnd()) {
			this.next();
		}
	}
};

// 発達度に応じて、セリフスクリプトの serif を書き換える
Scenario.prototype._convertSerifScript = function (script) {
	var growth = this.core.save_manager.player.getGrowth();

	if (script.serif1 && script.serif2 && script.serif3 && script.serif4) {
		var new_script = Util.shallowCopyHash(script);
		new_script.serif = script["serif" + growth];

		return new_script;
	}
	else {
		return script;
	}
};

module.exports = Scenario;
