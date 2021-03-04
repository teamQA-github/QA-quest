// filter.gs

//更新対象のスプレッドシートのシート名
const SHEET_NAME = "titanic"

//課題①
//空白を除く条件
function notBlank(value){
  return value != 0;
}

function getCabinList(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  const data = sheet.getRange("K2:K").getValues(); //K1はタイトル

  let Cabin = data.flat(); //配列にする
  console.log(Cabin);

  //空白以外を取得する
  //const cabin_list = Cabin.filter(notBlank);　//条件をcallbackする
  const cabin_list = Cabin.filter(value => value.length != 0 );　//関数を使わず1行で処理する
  console.log(cabin_list);
  //["C85", "C123", "E46",・・・,"C148"]
}

//課題②
//maleのみを指定する条件
function getMale(value){
  return value == "male";
}

function getMaleNum(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  const data = sheet.getRange("E2:E").getValues();

  const Sex = data.flat(); //配列にする
  console.log(Sex);

  //maleのみ取得する
  const list = Sex.filter(getMale);
  //const list = Sex.filter(value => value == "male") 　//条件関数を使わない場合
  console.log(list);
  //maleの数を数える　= 数えたい要素のみの配列の長さを取得する
  const male_num = list.length;

  //const male_num = list.filter(value => value =="male").length; //filter〜1行で書く場合
  console.log(male_num)
  //577
}

//課題③
function getNewArry(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_NAME);
  const data = sheet.getRange("A:L").getValues();
  
  //生存者のみで絞る
  const survived_list = data.filter(value => value[1] == 1 );
  console.log(survived_list);
  //さらにfemaleのみで絞る
  const new_arry = survived_list.filter(value => value[4] == "female" );
  //const survived_list = data.filter(value => value[1] == 1 && value[4] == "female")　//1行で絞り込む方法
  
  console.log(new_arry);
}