# Koishibow
[![Build Status](https://travis-ci.org/sairoutine/Koishibow.svg?branch=gh-pages)](https://travis-ci.org/sairoutine/Koishibow)

# 各種ドキュメント
**ビルドモードについて**  
`Web体験版モード` と `完成版モード` の2種類のモードでゲームデータをビルドすることがあります。
Web体験版と完成版のどちらで使用する素材かによって素材を入れるディレクトリが異なります。

| モード    | 遊べる内容 | ディレクトリ名 |
|-----------|------------|----------------|
| Web体験版 | chapter0~1 | common         |
| 完成版    | chapter0~6 | production     |

よって以下のドキュメントで、ディレクトリ名に `モード` とあれば、  
 - chapter 全編通して必要な素材→ `common`
 - chapter2~6 のみで必要な素材→ `production`

に読み替えてください。どちらに置くか迷ったならとりあえず `common` においておけば大丈夫です。

[画像・アニメ素材のアップロード](./md/image_and_anime.md)  
[フィールドの追加](./md/field.md)  
[サウンド素材のアップロード](./md/audio.md)  
[ビルド方法](./md/build.md)  
[開発方法](./md/development.md)  
