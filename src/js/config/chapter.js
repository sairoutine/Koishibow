'use strict';
var CONSTANT = require('../constant');
var chapter_list = [
	{
		key: "chapter0",
		opening_movie: "./movie/chapter0.mp4",
		first_field: "chapter0_myroom",
	},
	{
		key: "chapter1",
		opening_movie: "./movie/chapter1.mp4",
		first_field: "chapter1_01",
	},
	{
		key: "chapter2",
		opening_movie: "./movie/chapter2.mp4",
		first_field: null,
	},
	{
		key: "chapter3",
		opening_movie: "./movie/chapter3.mp4",
		first_field: null,
	},
	{
		key: "chapter4",
		opening_movie: "./movie/chapter4.mp4",
		first_field: null,
	},
	{
		key: "chapter5",
		opening_movie: "./movie/chapter5.mp4",
		first_field: null,
	},
	{
		key: "chapter6",
		opening_movie: "./movie/chapter6.mp4",
		first_field: null,
	},
];

var chapter_map = {};

for (var i = 0, len = chapter_list.length; i < len; i++) {
	var chapter = chapter_list[i];

	// key 名が被ってたらデバッグではエラー
	if(CONSTANT.DEBUG.ON) {
		if(chapter_map[chapter.key]) {
			throw new Error("duplicate chapter key name: ". chapter.key);
		}
	}

	chapter_map[chapter.key] = chapter;
}
module.exports = chapter_map;

