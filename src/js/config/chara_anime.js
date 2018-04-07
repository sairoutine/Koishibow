'use strict';
// 	下を見る	不	30	15	0.5秒
var jsonDataOfReactionLookBottom = require('../data/anime/koishi/reaction_look_bottom_anime_1');
// 	前を見る	不	30	15	0.5秒
var jsonDataOfReactionLookFront = require('../data/anime/koishi/reaction_look_front_anime_1');
//	上を見る	不	30	15	0.5秒
var jsonDataOfReactionLookTop = require('../data/anime/koishi/reaction_look_top_anime_1');
//	触る、物を取る	不	30	15	0.5秒
var jsonDataOfReactionTouch = require('../data/anime/koishi/reaction_touch_anime_1');
//	YES、うなずく	不	30	15	0.5秒
var jsonDataOfReactionYes = require('../data/anime/koishi/reaction_yes_anime_1');
//	座る	可能	45	1.5秒
var jsonDataOfReactionSit = require('../data/anime/koishi/sit_anime_1');


var CharaAnimeConfig = {};

CharaAnimeConfig.KoishiAction = {
	// 触る
	touch: {
		anime: jsonDataOfReactionTouch,
		sound: "touch",
	},
	// 下を見る
	look_bottom: {
		anime: jsonDataOfReactionLookBottom,
		sound: "",
	},
	// 前を見る
	look_front: {
		anime: jsonDataOfReactionLookFront,
		sound: "",
	},
	// 上を見る
	look_top: {
		anime: jsonDataOfReactionLookTop,
		sound: "",
	},
	// うなづく
	yes: {
		anime: jsonDataOfReactionYes,
		sound: "",
	},
	// 座る
	sit: {
		anime: jsonDataOfReactionSit,
		sound: "",
	},
};

// Koishi クラスの jsonAnimeMap 用
CharaAnimeConfig.Koishi = {};
for (var key in CharaAnimeConfig.KoishiAction) {
	CharaAnimeConfig.Koishi[key] = CharaAnimeConfig.KoishiAction[key].anime;
}
module.exports = CharaAnimeConfig;
