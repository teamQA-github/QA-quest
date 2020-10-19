/*
概要
 引数で渡された連想配列を元に、スプレッドシートの表を更新する関数(標準仕様)
 https://github.com/teamQA-github/QA-quest/tree/main/GAS/update-table

引数
 pu_data 更新するデータ

戻り値
 なし
———————————–*/
function updateTabele_standard(pu_data) {
    // 引数のオブジェクトにIDが存在しない場合は処理を中止
    if (!pu_data["ID"]) {
        console.log(`引数のオブジェクトにIDが存在しません`);
        return false;
    }

    // シートの中身を2次元配列に入れる
    const spreadsheet = SpreadsheetApp.getActive();
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    let values = spreadsheet.getSheetByName(SHEET_NAME).getDataRange().getValues();

    // 1行目をキーとしてコピーする
    let keys = values[0];

    // 1行目を削除する
    values.splice(0, 1);

    // 2次元配列を連想配列にする
    let arrayObj = arrayToObj(keys, values);

    // IDが存在するかのフラグ
    let flag = true;
    for (let i in arrayObj) {
        // IDが存在する場合は、値を更新する
        if (arrayObj[i].ID === pu_data["ID"]) {
            flag = false;
            // キーが存在する場合は、値を更新する
            for (let key in keys) {
                if ([keys[key]] in pu_data) {
                    arrayObj[i][keys[key]] = pu_data[keys[key]];
                }
            }
        }
    }

    // 連想配列から2次元配列に戻す
    let result = arrayObjToArray(keys, arrayObj)

    // 2次元配列をシートに書き込む
    sheet.getRange(2, 1, result.length, result[0].length).setValues(result);
}