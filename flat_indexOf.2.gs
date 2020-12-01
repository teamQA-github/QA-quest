// flat_indexOf.gs

// 更新対象のスプレッドシートのシート名
const SHEET_NAME = "titanic"

//課題②
function getPassengerIdRow(num){
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  const lastRow = sheet.getLastRow();
  const numbers = sheet.getRange(1,1,lastRow1,1).getValues();
  
  //console.log(numbers.flat());
  console.log(numbers.flat().indexOf(num));

}

function test(num){

  getPassengerIdRow(1)
  // 1
  getPassengerIdRow(5)
  // 5
  getPassengerIdRow(0)
  // -1
}

