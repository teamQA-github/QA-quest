# flat_indexOf

# summary

GASでスプレッドシートを操作する上で、とても便利な`flat()`と`indexOf()`をご紹介します。  

> flatはV8のバージョンで追加されたため、古いバージョンではエラーになります。

### flat()
多次元配列を指定した次元数に再結合し、新しい配列を生成する関数です。
>詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)を参照

```
//2次元の配列（getValuesで取得される形式）
const arr1 = [[0, 1], [2, 3], [4, 5]]

console.log(arr1.flat())
// [0, 1, 2, 3, 4, 5]

//多次元の配列(3次元)
const arr2 = [0, 1, [2, 3, [4, 5]]]

console.log(arr2.flat());
// [0, 1, 2, 3, [4, 5]]

console.log(arr2.flat(2));
// [0, 1, 2, 3, 4, 5]
```

### indexOf()
第一引数の値で配列を検索し一致する要素の最初のインデックスを返します。存在しない場合は -1 を返します。
また、第二引数で検索を開始する要素の位置を指定することができます。
>詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)を参照

```
const arr = ['OK', 'NG', 'OK', 'OK', 'NG'];

console.log(arr.indexOf('NG'));
// 1

console.log(arr.indexOf('YES'));
// -1

console.log(arr.indexOf('NG', 2));
// 4
```

>indexOf()はString(文字列)でも使用できるので、興味がある方は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)を参照

# なぜflat（）とindexOf()が便利なのか？
みなさんもスプレッドシートの表をGASで操作する場合に、特定の列や行に対して検索を行う場合があると思います。


=========================================================================

# 要件定義

スプレッドシートで作成された表に対して、連想配列で任意の行に更新を行う機能を作成する。  
更新対象行は連想配列の`key`に"ID"を指定することで`value`と一致する行を対象として指定し、  
"ID"以外の`key`で指定した値とタイトル行と一致した列を`value`の値で更新される。  

# 詳細仕様

1. 更新対象(表)の 1 行目はタイトル行で固定
1. 更新対象(表)のタイトルに重複と空白は存在しない（ただし末尾に空白列は存在し得る）
1. 更新対象(表)の１列目は ID 列で固定
1. 更新対象(表)の ID 列は数値の昇順でソートされている、かつ重複は存在しない
1. 更新対象(表)の途中に空白行は存在しない（ただし末尾に空白行は存在し得る）
1. 連想配列（引数）の`ID`の`value`には必ず表の ID 列に存在する数値が設定されるものとする
1. 連想配列（引数）の`ID`の`value`と更新対象のテーブルの ID 列で一致する行が更新対象
1. 連想配列（引数）の`key`と更新対象のテーブルのタイトル行が一致した列に`value`で更新する
1. 連想配列（引数）の`key`や`value`が空白（""）の場合はスキップする  
   ※基本的な更新対象(表)や連想配列（引数）は本文書下部の例を参照

# チャレンジ仕様

「要件定義」と「詳細仕様」の実装が対応できて余裕がある場合は、下記の仕様をコードに組み込んでみよう！  

1. 連想配列（引数）の`value`に改行（複数行）が含まれる場合も考慮する（`ID`は除く）
1. `key`に"ID"がインプットされなかった場合は、表の末尾に新規行として追加する（`key`のインプットがないタイトル列は空白）

例）  
▼ スプレッドシート  
https://docs.google.com/spreadsheets/d/1tH6X-KWD28_bdlAsFkQd1iqVcgpEHWU8omk0fjP6D5E/edit?usp=sharing  
※上記のスプレッドシートは更新せずに、ご自身の Google Workspace に複製をしてください！

▼ コード

```
// update-table.gs

// 更新対象のスプレッドシートのシート名
const SHEET_NAME = "テーブル"

function updateTabele(pu_data){
  //課題をコーディングする
}

function test(){
  let up_data = {"ID": 1, "ステータス": "対応中"};
  updateTabele(up_data)
  //シート「テーブル」のセルB2が”対応中”に更新される
}
```
