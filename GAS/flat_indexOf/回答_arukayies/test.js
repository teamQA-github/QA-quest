// 更新対象のスプレッドシート情報
const SS = SpreadsheetApp.getActive();
const SHEET_NAME = "titanic";
const SHEET = SS.getSheetByName(SHEET_NAME);

/*
概要
 テストコード

参照
 Google Apps Script用のテストライブラリ「GASUnit」の紹介
 https://qiita.com/munieru_jp/items/101ee00c6906847df750

プロジェクトキー
 MSnMmw8hLWgjUG6uKSTQBEzVZgzu5bsVr
———————————–*/
const exports = GASUnit.exports;
const assert = GASUnit.assert;


function test_task1() {
    exports({
        "test_task1": {
            "表1行目のタイトル行に対して、引数で渡された文字列と一致する列番号が返されていること": {
                "PassengerIdが列番号0なこと": function () {
                    assert(getTitleCol("PassengerId") == 0);
                },
                "Ageが列番号5なこと": function () {
                    assert(getTitleCol("Age") == 5);
                },
                "notitleは-1なこと": function () {
                    assert(getTitleCol("notitle") == -1);
                }
            }
        }
    })
}

function test_task2() {
    exports({
        "test_task2": {
            "引数で渡された数値と一致する行番号が返されていること": {
                "PassengerId1の行番号が１なこと": function () {
                    assert(getPassengerIdRow(1) == 1);
                },
                "PassengerId5の行番号が5なこと": function () {
                    assert(getPassengerIdRow(5) == 5);
                },
                "PassengerId0は-1なこと": function () {
                    assert(getPassengerIdRow(0) == -1);
                }
            }
        }
    })
}

function test_task3() {
    exports({
        "test_task3": {
            "第一引数で渡された数値と一致するPassengerIdの行に対して、第二引数で渡されたタイトルの値が返却されていること": {
                "PassengerId1のPassengerIdの値が１なこと": function () {
                    assert(getPassengerIdValue(1, "PassengerId") == 1);
                },
                "PassengerId5のAgeの値が35なこと": function () {
                    assert(getPassengerIdValue(5, "Age") == 35);
                },
                "PassengerId890のCabinの値がC148なこと": function () {
                    assert(getPassengerIdValue(890, "Cabin") == "C148");
                }
            }
        }
    })
}