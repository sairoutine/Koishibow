var anime_list = [
	require('./anime/chapter0/myroom/obj-02-01/obj01_anime_1'),
	require('./anime/chapter0/myroom/obj-02-01/obj02_anime_1'),
	require('./anime/chapter0/myroom/obj-02-01/obj03_anime_1'),
];

var anime_map = {};

for (var i = 0, len = anime_list.length; i < len; i++) {
	var anime = anime_list[i];
	// index = 0 のみ有効
	anime_map[anime[0].name] = anime;

	// TODO: key 名が被ってたらデバッグではエラー
}
module.exports = anime_map;

