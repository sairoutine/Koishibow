# Koishibow
[![Build Status](https://travis-ci.org/sairoutine/Koishibow.svg?branch=gh-pages)](https://travis-ci.org/sairoutine/Koishibow)

# フィールドの追加の仕方
## ビジュアル
### 素材のダウンロード
Google Drive の`本番用画像`フォルダから、
フィールドに必要な、`背景画像` `オブジェクト画像` `参考画像`をダウンロードする

Google Drive の `アニメ > spritestudio` フォルダから
フィールドに必要な、`オブジェクトのアニメ`をダウンロードする

### 素材の配置

#### 1.
`public/image/` に フィールド名のディレクトリを作成。
その中に、`背景画像` `オブジェクト画像` `オブジェクトのアニメ` 用の画像を全て入れる。

#### 2.
`src/js/config/assets.js` に入れた画像を登録する。
プログラム内での命名-> **ファイル名から拡張子を削除したもの**

#### 3.
`src/js/data/anime/` にフィールド名のディレクトリを作成。
さらにその中にオブジェクト名のディレクトリを作成。
`オブジェクトのアニメ` 用のアニメjsonを全て入れる。

#### 4.
`src/js/config/object_anime.js` に入れたアニメを登録する。
プログラム内での命名-> `chapterN-フィールド名-オブジェクト名-アニメ名`

### フィールドデータの作成
※ `ssアニメリスト.xlsx` を参考

`src/js/data/field/` にフィールドのデータを入れて、`src/js/config/field.js`を編集する。

## サウンド
TODO:

# ビルド方法
## PC向け完成版
TODO:
## PC向け体験版
TODO:
## Web向け体験版
TODO:

# 開発方法
```
gulp watch_without_minify
gulp build_without_minify
```

デバッグモードON
```
# debug オプションを true にする
vim src/js/debug_constant.js
# main.min.js の読み込みを main.js に変更
vim public/index.html
```
