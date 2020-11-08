# filter

# summary

テーブルデータを扱う際に便利なfillter()をご紹介します。  
テーブルデータで空白を除いた値を取得したい場合や、ある一定以上の値のみを抽出したデータを取得したい場合などに便利です！

### filter()
filter()は引数で渡された条件（callback関数）で抽出された、新しい配列を作成します。
条件（callback関数）は配列の要素を一つ一つに対して判定を行い、判定の結果がtrueとなった要素のみの配列を作成します。

```
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

#条件（callback関数）
#引数のvalueには配列の要素が渡される。配列の要素数分この関数が呼び出される。
function isBigEnough(value) {
  return value > 6
}

#filter()の引数に条件（callback）を設定する
const result1 = words.filter(isBigEnough)
result1
// ["exuberant", "destruction", "present"]

#V8ではアロー関数により簡潔に記載することも可能。簡単な条件の場合は積極的に活用しよう！
const result2 = words.filter(value => value.length > 6)
result2
// ["exuberant", "destruction", "present"]
```

また、filter()は2次元配列にも利用可能です！
その場合は１つの要素が1行の配列であることに注意が必要です！！
※3次元以上でも利用可能ですが、あまり3次元以上で利用されるケースは無いかと思います。
```
const words2 = [['spray', 'limit'], ['elite', 'exuberant'], ['destruction', 'present']];

# １つ１つの要素であるvalueが配列である点と、戻り値が多次元配列である点に注意する。
const result3 = words2.filter(value => value[0].length > 6);
result3
//  [["destruction", "present"]]
```

# 課題
filter()を活用して①〜③の課題にチャレンジして見ましょう！  
１つの課題のみでもレビューを依頼してOKです〜

▼ スプレッドシート  
https://docs.google.com/spreadsheets/d/1O1lwcuayrZnFJr0OYrWTiwKXQNaxzSY-avJrFW-C1Zw/edit#gid=0  
シート「titanic」
※上記のスプレッドシートは更新せずに、ご自身の Google Workspace に複製をしてください！

## 課題①
Cabin欄(K列)には

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
## 課題②
表1列目のPassengerId列に対して、引数で渡された数値と一致する行番号を返す関数を実装してみましょう！  
A列が0と返却されるように実装してください。

### ヒント
`getValues()`は1列分を取得したとしても多次元配列で取得されてしまいます。  
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

## 課題③
第一引数で渡された数値と一致するPassengerIdの行に対して、第二引数で渡されたタイトルの値を返却する関数を実装して見ましょう！

### ヒント
タイトル行とPassengerIdが一致した行は離れていても、検索したタイトル行の列と返却する値の列は同じです。

例)
```
// flat_indexOf.gs

function getPassengerIdValue(num){
  //課題をコーディングする
}

function test(){

  getPassengerIdValue(1, "PassengerId")
  // 1
  getPassengerIdValue(5, "Age")
  // 35
  getPassengerIdValue(890, "Cabin")
  // C148
}
```

# 蛇足
課題で利用しているデータはkaggleのチュートリアルで有名なタイタニックデータを利用しています。
