// flat_indexOf.gs

// 更新対象のスプレッドシートのシート名
const SHEET_NAME = "titanic"

function getTitleCol(title){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  const c_length = sheet.getLastColumn();
  const values = sheet.getRange(1,1,1,c_length).getValues();
  //getRange(開始行, 開始列, 何行選択するか, 何列選択するか) https://qiita.com/sakaimo/items/ba5594208c254fa528dc
  
  console.log(values);
  const titlelist = values.flat();
  console.log(titlelist.indexOf(title));
}

function setTitle(){
  let title = "PassengerId"
  getTitleCol(title);
}