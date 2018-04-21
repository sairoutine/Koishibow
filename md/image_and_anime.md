<!--
### 素材のダウンロード
Google Drive の`本番用画像`フォルダから、
フィールドに必要な、`背景画像` `オブジェクト画像` `参考画像`をダウンロードする

Google Drive の `アニメ > spritestudio` フォルダから
フィールドに必要な、`オブジェクトのアニメ`をダウンロードする
-->

# オブジェクト（アニメ有）
フィールド上で動くオブジェクトのアップロード方法  
動かないオブジェクト(画像を表示するだけ)は、[オブジェクト(アニメ無)](#オブジェクトアニメ無とフィールドの背景画像)を参照  
オブジェクトのうち、キャラクターについては、[キャラアニメ](#キャラアニメ)を参照  
### 1.
`public/image/chapterN/フィールド名`(Nは1桁の数字) のディレクトリを作成。  
その中に画像をアップロードする。
### 2.
`src/js/config/assets.js` に入れた画像を登録する。  
key名→`ファイル名から拡張子を削除したもの`  
登録方法の詳細は[画像のプログラム内での登録方法](#画像のプログラム内での登録方法)参照  
#### 3.
`src/js/data/anime/chapterN/フィールド名`(Nは1桁の数字)のディレクトリを作成。  
そのフィールド名のディレクトリの中に、オブジェクト名のディレクトリを作成。  
アニメ用のjsonファイルを全て入れる。  
#### 4.
`src/js/config/object_anime.js` に入れたアニメを登録する。  
key名→`chapterN-フィールド名-オブジェクト名-アニメ名`  
登録方法の詳細は[アニメのプログラム内での登録方法](#アニメのプログラム内での登録方法)参照  

# オブジェクト（アニメ無）とフィールドの背景画像
フィールド上で動かないオブジェクトのアップロード方法
### 1.
`public/image/chapterN/フィールド名`(Nは1桁の数字) のディレクトリを作成。  
その中に画像をアップロードする。  
### 2.
`src/js/config/assets.js` に入れた画像を登録する。  
key名→`ファイル名から拡張子を削除したもの`  
登録方法の詳細は[画像のプログラム内での登録方法](#画像のプログラム内での登録方法)参照  

# キャラアニメ
ゲーム上に登場するキャラクター(こいしやこころ、てゐ等)のアップロード方法
### 1.
`public/image/`に画像をアップロードする。
### 2.
`src/js/config/assets.js` に入れた画像を登録する。  
key名→`ファイル名から拡張子を削除したもの`  
登録方法の詳細は[画像のプログラム内での登録方法](#画像のプログラム内での登録方法)参照  
#### 3.
`src/js/data/anime/キャラ名`のディレクトリを作成。  
そのキャラ名のディレクトリの中に、アニメ用のjsonファイルを全て入れる。  
#### 4.
`src/js/config/object_anime.js` に入れたアニメを登録する。  
key名→`キャラ名-リアクション名`  
登録方法の詳細は[アニメのプログラム内での登録方法](#アニメのプログラム内での登録方法)参照  

# イベント用アニメ
イベントシーンで使用するアニメのアップロード方法。  
### 1.
`public/image/chapterN/event/イベント名`(Nは1桁の数字) のディレクトリを作成。  
その中に画像をアップロードする。  
### 2.
`src/js/config/assets.js` に入れた画像を登録する。  
key名→`ファイル名から拡張子を削除したもの`  
登録方法の詳細は[画像のプログラム内での登録方法](#画像のプログラム内での登録方法)参照  
#### 3.
`src/js/data/anime/chapterN/event/イベント名`(Nは1桁の数字)のディレクトリを作成。  
そのイベント名のディレクトリの中に、オブジェクト名のディレクトリを作成。  
アニメ用のjsonファイルを全て入れる。  

※ `src/js/config/object_anime.js` の編集は不要。

# イベント用画像
イベントシーンで使用する画像のアップロード方法。
### 1.
`public/image/chapterN/event/イベント名`(Nは1桁の数字) のディレクトリを作成。  
その中に画像をアップロードする。
### 2.
`src/js/config/assets.js` に入れた画像を登録する。  
key名→`ファイル名から拡張子を削除したもの`
登録方法の詳細は[画像のプログラム内での登録方法](#画像のプログラム内での登録方法)参照

# その他画像
## UI用画像
セリフウィンドウやサードアイの充血画像など。
### 1.
`public/image` にアップロードする。  
ファイル名は、`ui-` を先頭につける。
### 2.
`src/js/config/assets.js` に入れた画像を登録する。  
key名→`ファイル名から拡張子を削除したもの`  
登録方法の詳細は[画像のプログラム内での登録方法](#画像のプログラム内での登録方法)参照

## 1枚絵画像
こいしが目薬を指す1枚絵など
### 1.
`public/image/picture/` にアップロードする。  
ファイル名は `illust_NN.png`。NNは2桁の連番。
### 2.
`src/js/config/assets.js` に入れた画像を登録する。  
key名→`picture_` を先頭につける。  
登録方法の詳細は[画像のプログラム内での登録方法](#画像のプログラム内での登録方法)参照

<!--
## ジャーナル画像
フィールドでジャーナルを拾った際に表示される画像
### 1.
`public/image/journal/` にアップロードする。
ファイル名は `NNN.png`。NNNは3桁の連番。
### 2.
`src/js/config/assets.js` に入れた画像を登録する。
key名→`journalNNN` (NNNは3桁の連番)
登録方法の詳細は[画像のプログラム内での登録方法](#画像のプログラム内での登録方法)参照
-->

## アイテム画像
アイテムメニューで表示するアイテム画像
### 1.
`public/image/item/` にアップロードする。  
ファイル名は `icon_item_`。を先頭につける。
### 2.
`src/js/config/assets.js` に入れた画像を登録する。
**key名**
選択前：`item_NN` (NNは2桁の数字の連番)  
選択後：`item_NN_selected` (NNは2桁の数字の連番)  
登録方法の詳細は[画像のプログラム内での登録方法](#画像のプログラム内での登録方法)参照

# 共通
## 画像のプログラム内での登録方法
`src/js/config/assets.js` は  
「プログラム内での画像名」(key名)と、その画像がどこにあるかのファイルパスを紐付けるファイル。

書き方
```
	"key名":  require('../data/anime/から始まるアニメjsonのファイルパス'),
```
参考例
```
	"chapter1-10-obj-01": "./image/chapter1/chapter1-10/chapter1-10-obj-01.png",

	// アイテム 目薬
	"item_01":            "./image/item/icon_item_eyedrops01.png",
	"item_01_selected":   "./image/item/icon_item_eyedrops02.png",
```

 -  `/* ~~~ */` or `// ~~~ ` でコメントを記入できる。コメントはプログラムから無視される。
 -  key名やファイルパス以外の、半角スペースやタブはプログラムから無視される。
 -  key名は他の画像とは**重複できない**。

## アニメのプログラム内での登録方法
`src/js/config/object_anime.js` は、  
「プログラム内でのアニメ名」(key名)と、そのアニメがどこにあるかのファイルパスを紐付けるファイル。

書き方
```
	"key名":  require('../data/anime/から始まるアニメjsonのファイルパス'),
```
参考例
```
	"chapter1-04-obj-03-obj06":  require('../data/anime/chapter1/04/obj-03/obj06_anime_1.json'),

	/* にとり */
	"nitori-wait":          require('../data/anime/nitori/wait_anime_1'),
	"nitori-reverse_ura":   require('../data/anime/nitori/reverse_ura_anime_1'),
	"nitori-ura_wait":      require('../data/anime/nitori/ura_wait_anime_1'),
```

 -  `/* ~~~ */` or `// ~~~ ` でコメントを記入できる。コメントはプログラムから無視される。
 -  key名やファイルパス以外の、半角スペースやタブはプログラムから無視される。
 -  key名は他のアニメとは**重複できない**。

## 空ディレクトリの作成方法
git は空ディレクトリだけを作成できない。よって  
空フォルダと何かしらの空ファイルを同時に作る必要がある。  
空ファイル名は`.gitkeep` という名前にする。  
(`.gitkeep` ファイルは削除不要。作りっぱなしで放置して問題ない)  

手順はURL参考 http://maeokaka.hatenablog.jp/entry/2016/07/07/001441  

## git のコメントのルール
「chapter1-02-obj-06修正」みたいに 何のアニメor画像 を 追加/修正/削除 したのか書く。  
編集者の名前は不要。  
厳密なルールでないので、他に残したいコメントがあれば、それも好きに追記可。  