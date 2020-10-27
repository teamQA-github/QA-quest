function getPassengerIdValue(num, title) {
    // 行番号を取得
    const rowNum = Number(getPassengerIdRow(num)) + 1;

    // 列番号を取得
    const colNum = Number(getTitleCol(title)) + 1;

    // 検索した値を返す
    return SHEET.getRange(rowNum, colNum).getValue();
}