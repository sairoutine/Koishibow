'use strict';
const fs = require('fs');
const rs = fs.createReadStream('./tw.json');
const rl = require('readline');
const rli = rl.createInterface(rs, {});

let pairsAry = [];
let pairs = [];
let l = '';
// 読み込んだファイルを一行ずつ処理
rli.on('line', (line) => {
	// 空白、改行を削除
	l = line.trim();
	// 先頭の " と末尾の ", を削除
	l = l.slice(1, -2);
	// keyとvalueを含めた文字列を配列に分割
	pairs = l.split('": "');

	// \" " として返す
	pairs = pairs.map((val) => { return val.replace(/\\"/g, "\"").replace(/\\n/g, "\n").trim(); });

	// keyとvalueが存在する配列だけ格納
	if (pairs.length === 2) pairsAry.push(pairs);
});

let resultObj = {};
// 読み込みが終了したら実行
rli.on('close', () => {
	let key, value;
	pairsAry.forEach((val) => {
		key = val[0];
		value = val[1];
		if (resultObj.hasOwnProperty(key)) {
			if (value) {
				resultObj[key] = value;
			}
		} else {
			// keyが存在しない場合は、新規でvalueをセット
			resultObj[key] = value;
		}
	});
	// JSONファイルとして、書き出し
	fs.writeFile('tw.json', JSON.stringify(resultObj, null, "\t\t"));
});

