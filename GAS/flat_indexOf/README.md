# flat_indexOf

# summary

GAS でスプレッドシートを操作する上で、とても便利な`flat()`と`indexOf()`をご紹介します。

> flat は V8 のバージョンで追加されたため、古いバージョンではエラーになります。

### flat()

多次元配列を指定した次元数に再結合し、新しい配列を生成する関数です。

> 詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)を参照

```
//2次元の配列(getValuesで取得される形式)
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

第一引数の値で配列を検索し一致する要素で最初のインデックスを返します。存在しない場合は -1 を返します。
また、第二引数で検索を開始する要素の位置を指定することができます。
注意点として indexOf()は多次元配列には使用ができず、必ず -1 が返されてしまいます。

> 詳細は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)を参照

```
const arr = ['OK', 'NG', 'OK', 'OK', 'NG'];

console.log(arr.indexOf('NG'));
// 1

console.log(arr.indexOf('YES'));
// -1

console.log(arr.indexOf('NG', 2));
// 4
```

> indexOf()は String(文字列)でも使用できるので、興味がある方は[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)を参照

# なぜ flat()と indexOf()が便利なのか？

みなさんもスプレッドシートの表を GAS で操作する場合に、特定の列や行に対して検索を行う場合があると思います。
操作したい表を`getValues()`で取得した 2 次元配列対して、for ループと if 文で検索処理を実装する方法が簡単に思いつく処理ではないでしょうか？
しかし、`flat()`と`indexOf()`を使用することで for ループと if 文を使用するよりも、効率的かつシンプルに実装が可能となります！

# 課題

`flat()`と`indexOf()`を駆使して、下記のスプレッドシートに対して ①〜③ の課題にチャレンジして見ましょう！
１つの課題のみでもレビューを依頼して OK です〜

▼ スプレッドシート
https://docs.google.com/spreadsheets/d/1YjXzwA34C2hjLxVVIqcgqzS4wUHzXLlMHsoM3Sn7l2o/edit?usp=sharing
シート「titanic」
※上記のスプレッドシートは更新せずに、ご自身の Google Workspace に複製をしてください！

## 課題 ①

表 1 行目のタイトル行に対して、引数で渡された文字列と一致する列番号を返す関数を実装してみましょう！
A 列が 0 と返却されるように実装してください。

例)

```
// flat_indexOf.gs

// 更新対象のスプレッドシートのシート名
const SHEET_NAME = "titanic"

function getTitleCol(title){
  //課題をコーディングする
}

function test(){

  getTitleCol("PassengerId")
  // 0
  getTitleCol("Age")
  // 5
  getTitleCol("notitle")
  // -1
}
```

## 課題 ②

表 1 列目の PassengerId 列に対して、引数で渡された数値と一致する行番号を返す関数を実装してみましょう！
A 列が 0 と返却されるように実装してください。

### ヒント

`getValues()`は 1 列分を取得したとしても多次元配列で取得されてしまいます。
多次元配列では`indexOf()`が使用できないのでどうすれば良いか考えて見ましょう！

例)

```
// flat_indexOf.gs

function getPassengerIdRow(num){
  //課題をコーディングする
}

function test(){

  getPassengerIdRow(1)
  // 1
  getPassengerIdRow(5)
  // 5
  getPassengerIdRow(0)
  // -1
}
```

## 課題 ③

第一引数で渡された数値と一致する PassengerId の行に対して、第二引数で渡されたタイトルの値を返却する関数を実装して見ましょう！

### ヒント

タイトル行と PassengerId が一致した行は離れていても、検索したタイトル行の列と返却する値の列は同じです。

例)

```
// flat_indexOf.gs

function getPassengerIdRow(num){
  //課題をコーディングする
}

function test(){

  getPassengerIdRow(1, "PassengerId")
  // 1
  getPassengerIdRow(5, "Age")
  // 35
  getPassengerIdRow(890, "Cabin")
  // C148
}
```

# 蛇足

課題で利用しているデータは kaggle のチュートリアルで有名なタイタニックデータを利用しています。
