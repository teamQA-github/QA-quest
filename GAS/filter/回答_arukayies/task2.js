function getMaleNum(){
    // Sex列を取得する
    const sex_list = SHEET.getRange("E2:E").getValues();
    
    // maleのみを抽出した配列を作成する
    const result = sex_list.filter(value => value[0] == "male");
    
    // 結果
    console.log(result.length);
}