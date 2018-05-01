'use strict';
var CONSTANT = require('../constant');

var Item = {};

Item["01"] = {
	type: CONSTANT.ITEM.EYEDROPS,
	name: "目薬",
	image_name: "item_01",
	description: "おめめがよくなるお薬。ちょっとこわい",
};
Item["02"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "マッチ",
	image_name: "item_02",
	description: "よいこは火遊びしてはいけません。",
};
Item["03"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "じょうろ",
	image_name: "item_03",
	description: "からっぽ。",
};
Item["04"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "じょうろ",
	image_name: "item_04",
	description: "まんぱん。",
};
Item["05"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "はしご",
	image_name: "item_05",
	description: "はしごのしたをくぐってはいけません。",
};
Item["06"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "みどりいろのぐねぐね",
	image_name: "item_06",
	description: "ひんやり",
};
Item["07"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "マイク",
	image_name: "item_07",
	description: "大きな音！うるさい！",
};
Item["08"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "熊手",
	image_name: "item_08",
	description: "おっきなフォーク",
};
Item["09"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "竹とんぼ",
	image_name: "item_09",
	description: "よくとぶよ",
};
Item["10"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "こわいおめん",
	image_name: "item_10",
	description: "こわい",
};
Item["11"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "チョコレートの箱",
	image_name: "item_11",
	description: "”人生はチョコレートの箱”",
};
Item["12"] = {
	type: CONSTANT.ITEM.NON_USABLE,
	name: "人形",
	image_name: "item_12",
	description: "へんな子！",
};

module.exports = Item;

