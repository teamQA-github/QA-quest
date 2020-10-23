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
    // シートオブジェクトを取得
    const sheet = SS.getSheetByName(SHEET_NAME_TEST１);
    
    // シートの最終列を取得
    const lastCol = sheet.getLastColumn();
    
    // 1行目のタイトル行を取得
    const titles = sheet.getRange(1,2,1,lastCol).getValues();

    // ID列を取得
    const ids = sheet.getRange("A:A").getValues();

    // 更新対象のIDの行番号を取得
    let targetRow;
    for (let i in ids) {
      if (ids[i] == pu_data["ID"]) {
        targetRow = Number(i)+1;
      }
    }

    // 更新対象のID行を取得
    let targetValues = sheet.getRange(targetRow,2,1,lastCol).getValues();

    // 引数のkeyに値が存在する場合は、targetValuesを更新
    for (let i in titles[0]) {
      if (titles[0][i] in pu_data) {
        targetValues[0][i] = pu_data[titles[0][i]];
      }
    }
    
    // 更新対象のID行のみ更新
    sheet.getRange(targetRow, 2, 1 ,lastCol).setValues(targetValues);
}