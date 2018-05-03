'use strict';
var CONSTANT = require('../constant');

var Item = {};

Item["01"] = {
	type: CONSTANT.ITEM.EYEDROPS,
	name: "目薬",
	image_name: "item_01",
	sound_name: "got_item_common",
	description: "おめめがよくなるお薬。ちょっとこわい",
};
Item["02"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "マッチ",
	image_name: "item_02",
	sound_name: "got_item_common",
	description: "よいこは火遊びしてはいけません。",
};
Item["03"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "じょうろ",
	image_name: "item_03",
	sound_name: "got_item_common",
	description: "からっぽ。",
};
Item["04"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "じょうろ",
	image_name: "item_04",
	sound_name: "got_item_common",
	description: "まんぱん。",
};
Item["05"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "はしご",
	image_name: "item_05",
	sound_name: "got_item_radder",
	description: "はしごのしたをくぐってはいけません。",
};
Item["06"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "みどりいろのぐねぐね",
	image_name: "item_06",
	sound_name: "got_item_common",
	description: "ひんやり",
};
Item["07"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "マイク",
	image_name: "item_07",
	sound_name: "got_item_boombox",
	description: "大きな音！うるさい！",
};
Item["08"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "熊手",
	image_name: "item_08",
	sound_name: "got_item_common",
	description: "おっきなフォーク",
};
Item["09"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "竹とんぼ",
	image_name: "item_09",
	sound_name: "got_item_common",
	description: "よくとぶよ",
};
Item["10"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "こわいおめん",
	image_name: "item_10",
	sound_name: "got_item_common",
	description: "こわい",
};
Item["11"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "チョコレートの箱",
	image_name: "item_11",
	sound_name: "got_item_common",
	description: "”人生はチョコレートの箱”",
};
Item["12"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "人形",
	image_name: "item_12",
	sound_name: "got_item_common",
	description: "へんな子！",
};

module.exports = Item;

