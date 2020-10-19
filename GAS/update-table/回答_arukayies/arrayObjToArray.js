/*
関数概要
 連想配列を2次元配列に変換する関数

引数
 arrayObj 2次元配列

戻り値
 連想配列
———————————–*/
function arrayObjToArray(keys, arrayObj) {
    let result = new Array();
    for (let i in arrayObj) {
        let array = new Array();
        for (let key in keys) {
            array.push(arrayObj[i][keys[key]]);
        }
        result.push(array);
    }
    return result;
}
