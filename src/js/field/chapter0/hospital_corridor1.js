// 病院の廊下1(コンクリ、廃れてる感じ) 車椅子とかあったほうがいいかも
module.exports = {
	key: "chapter0_hospital_corridor1",
	name: "病院の廊下1",
	right_start_position: {x: 690, y: 540},
	left_start_position:  {x: 180, y: 540},
	right_field: "chapter0_hospital_corridor2",
	left_field: "chapter0_myroom",
	background: "chapter0-hospital_corridor1-bg-001",
	objects: [
		{image: "chapter0-hospital_corridor1-obj-01-01", name: "手術台", x: 555, y: 470, scale: 0.7},
		{image: "chapter0-hospital_corridor1-obj-02-01", name: "金庫",   x: 205, y: 300, scale: 0.7},
		{image: "chapter0-hospital_corridor1-obj-03-01", name: "バケツ", x: 230, y: 240, scale: 0.7},
		{image: "chapter0-hospital_corridor1-obj-04-01", name: "メス",   x: 830, y: 530, scale: 0.7},
	],
};
