// flat_indexOf.gs

// 更新対象のスプレッドシートのシート名
const SHEET_NAME = "titanic"

//課題①
function getTitleCol(title){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  const values = sheet.getRange("1:1").getValues();
  //sheet.getRange("A:A")でも可
  //より細かく指定する方法：getRange(開始行, 開始列, 何行選択するか, 何列選択するか) https://qiita.com/sakaimo/items/ba5594208c254fa528dc
  
  console.log(values);
  let getTitle = values.flat().indexOf(title);
  return getTitle;
}

function test(){
  
  console.log(getTitleCol("PassengerId"));
  // 0
  console.log(getTitleCol("Age"));
  // 5
  console.log(getTitleCol("notitle"));
  // -1
}