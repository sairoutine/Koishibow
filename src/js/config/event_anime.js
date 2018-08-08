'use strict';
var anime_map = {
	// 新イベント
	"chapter3-08-event-04-obj01": require('../data/anime/chapter3/event/chapter3-08-event-04/chapter3-08-event-04/obj01_anime_1'),
	"chapter3-08-event-04-obj02": require('../data/anime/chapter3/event/chapter3-08-event-04/chapter3-08-event-04/obj02_anime_1'),
	"chapter3-08-event-04-obj03": require('../data/anime/chapter3/event/chapter3-08-event-04/chapter3-08-event-04/obj03_anime_1'),
	"chapter3-08-event-04-obj04": require('../data/anime/chapter3/event/chapter3-08-event-04/chapter3-08-event-04/obj04_anime_1'),

	"chapter3-09-event-01-obj01": require('../data/anime/chapter3/event/chapter3-09-event-01/chapter3-09-event-01/obj01_anime_1'),
	"chapter3-09-event-01-obj02": require('../data/anime/chapter3/event/chapter3-09-event-01/chapter3-09-event-01/obj02_anime_1'),



	"chapter3-13-event-01-obj01": require('../data/anime/chapter3/event/chapter3-13-event-01/chapter3-13-event-01/obj01_anime_1'),
	"chapter3-13-event-01-obj02": require('../data/anime/chapter3/event/chapter3-13-event-01/chapter3-13-event-01/obj02_anime_1'),
	"chapter3-13-event-01-obj03": require('../data/anime/chapter3/event/chapter3-13-event-01/chapter3-13-event-01/obj03_anime_1'),

	"chapter3-13-event-03-obj01": require('../data/anime/chapter3/event/chapter3-13-event-03/chapter3-13-event-03/obj01_anime_1'),
	"chapter3-13-event-03-obj02": require('../data/anime/chapter3/event/chapter3-13-event-03/chapter3-13-event-03/obj02_anime_1'),
	"chapter3-13-event-03-obj03": require('../data/anime/chapter3/event/chapter3-13-event-03/chapter3-13-event-03/obj03_anime_1'),
	"chapter3-13-event-03-obj04": require('../data/anime/chapter3/event/chapter3-13-event-03/chapter3-13-event-03/obj04_anime_1'),

	"chapter3-13-event-04-obj01": require('../data/anime/chapter3/event/chapter3-13-event-04/chapter3-13-event-04/obj01_anime_1'),
	"chapter3-13-event-04-obj02": require('../data/anime/chapter3/event/chapter3-13-event-04/chapter3-13-event-04/obj02_anime_1'),
	"chapter3-13-event-04-obj03": require('../data/anime/chapter3/event/chapter3-13-event-04/chapter3-13-event-04/obj03_anime_1'),
	"chapter3-13-event-04-obj04": require('../data/anime/chapter3/event/chapter3-13-event-04/chapter3-13-event-04/obj04_anime_1'),
	"chapter3-13-event-04-obj05": require('../data/anime/chapter3/event/chapter3-13-event-04/chapter3-13-event-04/obj05_anime_1'),
	"chapter3-13-event-04-obj06": require('../data/anime/chapter3/event/chapter3-13-event-04/chapter3-13-event-04/obj06_anime_1'),
	"chapter3-13-event-04-obj07": require('../data/anime/chapter3/event/chapter3-13-event-04/chapter3-13-event-04/obj07_anime_1'),
	"chapter3-13-event-04-obj08": require('../data/anime/chapter3/event/chapter3-13-event-04/chapter3-13-event-04/obj08_anime_1'),
	"chapter3-13-event-04-obj09": require('../data/anime/chapter3/event/chapter3-13-event-04/chapter3-13-event-04/obj09_anime_1'),


	// 旧イベント
	"chapter3-08-event-01-obj-01": require('../data/anime/chapter3/event/chapter3-08-event-01/obj-01/obj01_anime_1'),
	"chapter3-08-event-01-obj-02": require('../data/anime/chapter3/event/chapter3-08-event-01/obj-02/obj01_anime_1'),
	"chapter3-08-event-01-koishi-obj01": require('../data/anime/chapter3/event/chapter3-08-event-01/koishi/obj01_anime_1'),
	"chapter3-08-event-01-satori-obj01": require('../data/anime/chapter3/event/chapter3-08-event-01/satori/obj01_anime_1'),
	"chapter3-08-event-01-koishi-obj02": require('../data/anime/chapter3/event/chapter3-08-event-01/koishi/obj02_anime_1'),
	"chapter3-08-event-01-satori-obj02": require('../data/anime/chapter3/event/chapter3-08-event-01/satori/obj02_anime_1'),
	"chapter3-08-event-01-koishi-obj03": require('../data/anime/chapter3/event/chapter3-08-event-01/koishi/obj03_anime_1'),
	"chapter3-08-event-01-satori-obj03": require('../data/anime/chapter3/event/chapter3-08-event-01/satori/obj03_anime_1'),
	"chapter3-08-event-01-koishi-obj04": require('../data/anime/chapter3/event/chapter3-08-event-01/koishi/obj04_anime_1'),
	"chapter3-08-event-01-satori-obj04": require('../data/anime/chapter3/event/chapter3-08-event-01/satori/obj04_anime_1'),
	"chapter3-08-event-01-koishi-obj05": require('../data/anime/chapter3/event/chapter3-08-event-01/koishi/obj05_anime_1'),
	"chapter3-08-event-01-satori-obj05": require('../data/anime/chapter3/event/chapter3-08-event-01/satori/obj05_anime_1'),
	"chapter3-08-event-01-koishi-obj06": require('../data/anime/chapter3/event/chapter3-08-event-01/koishi/obj06_anime_1'),
	"chapter3-08-event-01-satori-obj06": require('../data/anime/chapter3/event/chapter3-08-event-01/satori/obj06_anime_1'),
	"chapter3-08-event-01-koishi-obj07": require('../data/anime/chapter3/event/chapter3-08-event-01/koishi/obj07_anime_1'),
	"chapter3-08-event-01-satori-obj07": require('../data/anime/chapter3/event/chapter3-08-event-01/satori/obj07_anime_1'),
	"chapter3-08-event-01-koishi-obj08": require('../data/anime/chapter3/event/chapter3-08-event-01/koishi/obj08_anime_1'),
	"chapter3-08-event-01-satori-obj08": require('../data/anime/chapter3/event/chapter3-08-event-01/satori/obj08_anime_1'),
	"chapter3-08-event-01-koishi-obj09": require('../data/anime/chapter3/event/chapter3-08-event-01/koishi/obj09_anime_1'),
	"chapter3-08-event-01-satori-obj09": require('../data/anime/chapter3/event/chapter3-08-event-01/satori/obj09_anime_1'),
	"chapter3-08-event-01-koishi-obj10": require('../data/anime/chapter3/event/chapter3-08-event-01/koishi/obj10_anime_1'),
	"chapter3-08-event-01-satori-obj10": require('../data/anime/chapter3/event/chapter3-08-event-01/satori/obj10_anime_1'),
};

module.exports = anime_map;

