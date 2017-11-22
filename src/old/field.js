var field_list = [
	require("./field/chapter0/myroom"),
	require("./field/chapter0/hospital_corridor1"),
	require("./field/chapter0/hospital_corridor2"),
	require("./field/chapter0/mansion_corridor1"),
	require("./field/chapter0/mansion_corridor2"),
	require("./field/chapter0/mansion_corridor3"),
	require("./field/chapter0/mansion_gallery1"),


];

var field_map = {};

for (var i = 0, len = field_list.length; i < len; i++) {
	var field = field_list[i];

	field_map[field.key] = field;

	// TODO: key 名が被ってたらデバッグではエラー
}
module.exports = field_map;

