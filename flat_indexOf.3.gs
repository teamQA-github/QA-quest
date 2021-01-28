// flat_indexOf.gs
function getPassengerIdValue(num, title){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  
  const getColumn = getTitleCol(title) +1; //titleから列を取得
  //console.log(getColumn);
  const getRow = getPassengerIdRow(num) +1; //行を取得;
  //console.log(getRow);

  const getPassengerIdValue = sheet.getRange(getRow, getColumn).getValue();
  //console.log(getPassengerIdValue);
  
  return getPassengerIdValue;
}

function test(){

  console.log(getPassengerIdValue(1, "PassengerId"));
  // 1
  console.log(getPassengerIdValue(5, "Age"));
  // 35
  console.log(getPassengerIdValue(890, "Cabin"));
  // C148
}
