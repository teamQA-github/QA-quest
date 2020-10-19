/*
関数概要
 2次元配列を連想配列に変換する関数

引数
 array 2次元配列

戻り値
 連想配列
———————————–*/
function arrayToObj(keys, array) {
    let arrayObj = new Array();
    for (let row in array) {
        let obj = new Object();
        for (let col in array[row]) {
            obj[keys[col]] = array[row][col];
        }
        arrayObj.push(obj);
    }
    return arrayObj;
}
