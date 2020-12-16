// flat_indexOf.gs

// 更新対象のスプレッドシートのシート名
const SHEET_NAME = "titanic"

//課題②
function getPassengerIdRow(num){
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  const lastRow = sheet.getLastRow();
  const numbers = sheet.getRange("A:A").getValues();
  
  //console.log(numbers.flat());
  let passengerIdRow = numbers.flat().indexOf(num);
  return passengerIdRow;
}

function test2(num){

  console.log(getPassengerIdRow(1));
  // 1
  console.log(getPassengerIdRow(5));
  // 5
  console.log(getPassengerIdRow(0));
  // -1
}

