function getNewArry(){
    // シートのデータを取得する
    const passenger_list = SHEET.getDataRange().getValues();
    
    // ① 生存した乗客を抜き出す
    const result1 = passenger_list.filter(value => value[1] == 1);
    
    // ② ①から女性を抜き出す
    const result2 = result1.filter(value => value[4] == "female");
    
    // 結果
    console.log(result2);
    
}

// GASのフィルター機能を使ったパターン
function getNewArryByGASFilter(){
    // データ全体にフィルタをかける
    SHEET.getRange(1,1,SHEET.getLastRow(),SHEET.getLastColumn()).createFilter();
    
    // Survivedの0のチェックを外す
    let criteria;
    criteria = SpreadsheetApp.newFilterCriteria()
      .setHiddenValues([0])
      .build();
    SHEET.getFilter().setColumnFilterCriteria(2, criteria);
    
    // Sexのmaleのチェックを外す
    criteria = SpreadsheetApp.newFilterCriteria()
      .setHiddenValues(["male"])
      .build();
    SHEET.getFilter().setColumnFilterCriteria(5, criteria);
    
    // フィルタされたデータを取得する 
    // 参考:https://teratail.com/questions/220476
    const result = SHEET.getDataRange().getValues().filter(function(_, i) {return !SHEET.isRowHiddenByFilter(i + 1)});
    
    // 結果
    console.log(result);
    
    // フィルタを削除する
    SHEET.getFilter().remove();
}