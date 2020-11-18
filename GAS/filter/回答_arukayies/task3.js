function getNewArry(){
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