// 更新対象のスプレッドシート情報
const SHEET_NAME = "テーブル"

/*
概要
 テストコード

参照
 Google Apps Script用のテストライブラリ「GASUnit」の紹介
 https://qiita.com/munieru_jp/items/101ee00c6906847df750

プロジェクトキー
 MSnMmw8hLWgjUG6uKSTQBEzVZgzu5bsVr
———————————–*/
const exports = GASUnit.exports
const assert = GASUnit.assert


function test_standard() {
    exports({
        "update-table-test": {
            "正常系": {
                "ID:1がステータス:対応完了に更新されていること": function () {
                    let up_data = { "ID": 1, "ステータス": "対応完了" };
                    updateTabele_standard(up_data);
                    let spreadsheet = SpreadsheetApp.getActive();
                    let values = spreadsheet.getSheetByName(SHEET_NAME).getDataRange().getValues();
                    let keys = values[0];
                    let arrayObj = arrayToObj(keys, values);
                    for (let i in arrayObj) {
                        if (arrayObj[i]["ID"] === 1) assert(arrayObj[i]["ステータス"] === "対応完了");
                    }
                }
            }
        }
    })
}

function test_challenge() {
    exports({
        "update-table-test": {
            "正常系": {
                "ID:1がステータス:対応完了に更新されていること": function () {
                    let up_data = { "ID": 1, "ステータス": "対応完了" };
                    updateTabele_challenge(up_data);
                    let spreadsheet = SpreadsheetApp.getActive();
                    let values = spreadsheet.getSheetByName(SHEET_NAME).getDataRange().getValues();
                    let keys = values[0];
                    let arrayObj = arrayToObj(keys, values);
                    for (let i in arrayObj) {
                        if (arrayObj[i]["ID"] === 1) assert(arrayObj[i]["ステータス"] === "対応完了");
                    }
                },
                "valueに改行が含まれていても更新されていること": function () {
                    let up_data = { "ID": 2, "不具合概要": "環境\n本番環境で不具合です。" };
                    updateTabele_challenge(up_data);
                    let spreadsheet = SpreadsheetApp.getActive();
                    let values = spreadsheet.getSheetByName(SHEET_NAME).getDataRange().getValues();
                    let keys = values[0];
                    let arrayObj = arrayToObj(keys, values);
                    for (let i in arrayObj) {
                        if (arrayObj[i]["ID"] === 2) assert(arrayObj[i]["不具合概要"] === "環境\n本番環境で不具合です。");
                    }
                },
                "IDが存在しない場合は新規行として追加されていること": function () {
                    let up_data = { "不具合概要": "新規不具合" };
                    updateTabele_challenge(up_data);
                    let spreadsheet = SpreadsheetApp.getActive();
                    let values = spreadsheet.getSheetByName(SHEET_NAME).getDataRange().getValues();
                    let keys = values[0];
                    let arrayObj = arrayToObj(keys, values);
                    for (let i in arrayObj) {
                        if (arrayObj[i]["不具合概要"] === "新規不具合") assert(arrayObj[i]["不具合概要"] === "新規不具合");
                    }
                }
            }
        }
    })
}