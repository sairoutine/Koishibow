'use strict';
// 	下を見る	不	30	15	0.5秒
var jsonDataOfReactionLookBottom = require('../../data/anime/koishi/reaction_look_bottom_anime_1');
// 	前を見る	不	30	15	0.5秒
var jsonDataOfReactionLookFront = require('../../data/anime/koishi/reaction_look_front_anime_1');
//	上を見る	不	30	15	0.5秒
var jsonDataOfReactionLookTop = require('../../data/anime/koishi/reaction_look_top_anime_1');
//	触る、物を取る	不	30	15	0.5秒
var jsonDataOfReactionTouch = require('../../data/anime/koishi/reaction_touch_anime_1');
//	YES、うなずく	不	30	15	0.5秒
var jsonDataOfReactionYes = require('../../data/anime/koishi/reaction_yes_anime_1');
//	座る	可能	45	1.5秒
var jsonDataOfReactionSit = require('../../data/anime/koishi/sit_anime_1');
// 斧使用(chapter5 用)
var jsonDataOfAxe = require('../../data/anime/koishi/reaction_ax_anime_1');

module.exports = [
	// 触る
	{
		name: "touch",
		anime: jsonDataOfReactionTouch,
		sound: "touch",
	},
	// 下を見る
	{
		name: "look_bottom",
		anime: jsonDataOfReactionLookBottom,
		sound: "",
	},
	// 前を見る
	{
		name: "look_front",
		anime: jsonDataOfReactionLookFront,
		sound: "",
	},
	// 上を見る
	{
		name: "look_top",
		anime: jsonDataOfReactionLookTop,
		sound: "",
	},
	// うなづく
	{
		name: "yes",
		anime: jsonDataOfReactionYes,
		sound: "",
	},
	// 座る
	{
		name: "sit",
		anime: jsonDataOfReactionSit,
		sound: "",
	},
	// 斧使用(chapter5)
	{
		name: "use_axe",
		anime: jsonDataOfAxe,
		sound: "",
	},
];

