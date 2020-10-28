function getTitleCol(title) {
    // 1行目のタイトル行を取得する
    const titles = SHEET.getRange("1:1").getValues()

    // ２次元配列をフラットにする
    const flatTitles = titles.flat();

    // 指定文字の位置を返す
    return flatTitles.indexOf(title);
}