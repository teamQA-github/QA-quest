const SS = SpreadsheetApp.getActive();
const SHEET_NAME = "titanic";
const SHEET = SS.getSheetByName(SHEET_NAME);

function getCabinList(){
    // Cabin列を取得する
    const cabin_list = SHEET.getRange("K2:K").getValues();
    
    // 空白以外をフィルタする
    const result = cabin_list.filter(value => value[0] != "");
    
    // 2次元配列を1次元配列にする
    let array = new Array();
    for (let i in result) {
      array.push(result[i][0]);
    }
    
    // 結果
    console.log(array);
}

// 最初にflatを活用する版1
function getCabinListByFlat1(){
    // Cabin列を取得する
    const cabin_list = SHEET.getRange("K2:K").getValues();
    
    // 1次配列にする
    const cabin_list_flat = cabin_list.flat();
    
    // 空白以外をフィルタする
    const result = cabin_list_flat.filter(value => value != "");
    
    // 結果
    console.log(result);
}

// 最後にflatを活用する版2
function getCabinListByFlat2(){
    // Cabin列を取得する
    const cabin_list = SHEET.getRange("K2:K").getValues();
    
    // 空白以外をフィルタする
    const result = cabin_list.filter(value => value[0] != "");
    
    // 結果
    console.log(result.flat());
}
