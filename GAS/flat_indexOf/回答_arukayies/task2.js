function getPassengerIdRow(num) {
    // PassengerId列を取得
    const passengerIds = SHEET.getRange("A:A").getValues();

    // 多次元配列をフラットにする
    const flattenPassengerIds = passengerIds.flat();

    // 指定PassengerIdの行番号を返す
    return flattenPassengerIds.indexOf(num);
}