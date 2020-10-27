function getPassengerIdRow(num) {
    // PassengerId列を取得
    const passengerIds = SHEET.getRange("A:A").getValues();

    // 多次元配列をフラットにする
    // https://qiita.com/yarnaimo/items/cd663e46a1676678396d
    const flattenPassengerIds = [].concat(...passengerIds);

    // 指定PassengerIdの行番号を返す
    return flattenPassengerIds.indexOf(num);
}