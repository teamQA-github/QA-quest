# filter

# summary

テーブルデータを扱う際に便利なfillter()をご紹介します。  
テーブルデータで空白を除いた値を取得したい場合や、ある一定以上の値のみを抽出したデータを取得したい場合などに便利です！

### filter()
filter()は引数で渡された条件（callback関数）で抽出された、新しい配列を作成します。
条件（callback関数）は配列の要素を一つ一つに対して判定を行い、判定の結果がtrueとなった要素のみの配列を作成します。

```
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//条件（callback関数）
//引数のvalueには配列の要素が渡される。配列の要素数分この関数が呼び出される。
function isBigEnough(value) {
  return value > 6
}

//filter()の引数に条件（callback）を設定する
const result1 = words.filter(isBigEnough)
result1
//["exuberant", "destruction", "present"]

//V8ではアロー関数により簡潔に記載することも可能。簡単な条件の場合は積極的に活用しよう！
const result2 = words.filter(value => value.length > 6)
result2
//["exuberant", "destruction", "present"]
```

また、filter()は2次元配列にも利用可能です！ その場合は１つの要素が1行の配列であることに注意が必要です！！  
※3次元以上でも利用可能ですが、あまり3次元以上で利用されるケースは無いかと思います。
```
const words2 = [['spray', 'limit'], ['elite', 'exuberant'], ['destruction', 'present']];

//１つ１つの要素であるvalueが配列である点と、戻り値が多次元配列である点に注意する。
const result3 = words2.filter(value => value[0].length > 6);
result3
//[["destruction", "present"]]
```

# 課題
filter()を活用して①〜③の課題にチャレンジして見ましょう！  
１つの課題のみでもレビューを依頼してOKです〜

▼ スプレッドシート  
https://docs.google.com/spreadsheets/d/1O1lwcuayrZnFJr0OYrWTiwKXQNaxzSY-avJrFW-C1Zw/edit#gid=0  
シート「titanic」  
※上記のスプレッドシートは更新せずに、ご自身の Google Workspace に複製をしてください！

## 課題①
Cabin欄(K列)には空白行が複数存在します。空白以外のCabinの一覧となる配列を作成してください。  
※余裕があれば[flat()](https://github.com/teamQA-github/QA-quest/tree/main/GAS/flat_indexOf)も活用してみてください！

例)
```
// filter.gs

//更新対象のスプレッドシートのシート名
const SHEET_NAME = "titanic"

function getCabinList(){
  //課題をコーディングする
  
  loggler.log(cabin_list)
  //["C85", "C123", "E46",・・・,"C148"]
}
```

## 課題②
Sex欄(E列)からmale(男性)の人数を取得してください。

例)
```
function getMaleNum(){
  //課題をコーディングする
  
  loggler.log(male_num)
  //577
}
```

## 課題③
Survived欄が1(生存)かつ女性でのみ2次元配列を新たに作成してください。

例)
```
function getNewArry(){
  //課題をコーディングする
  
  loggler.log(new_arry)
  //配列なので結果記載は省略
}
```

# 蛇足
課題で利用しているデータはkaggleのチュートリアルで有名なタイタニックデータを利用しています。
