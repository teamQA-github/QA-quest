// 更新対象のスプレッドシート情報
const SS = SpreadsheetApp.getActive();
const SHEET_NAME = "テーブル"

// テスト用のスプレッドシート情報
const SHEET_NAME_TEST１ = "test_standard"

/*
概要
 テストコード

参照
 Google Apps Script用のテストライブラリ「GASUnit」の紹介
 https://qiita.com/munieru_jp/items/101ee00c6906847df750

プロジェクトキー
 MSnMmw8hLWgjUG6uKSTQBEzVZgzu5bsVr
———————————–*/
const exports = GASUnit.exports
const assert = GASUnit.assert


function test_standard() {
    exports({
        "update-table-test": {
            "{ID:1, ステータス:対応完了}で更新": {
                "ID1のステータスが対応完了に更新されていること": function () {
                    const up_data = { "ID": 1, "ステータス": "対応完了" };
                    updateTabele_standard(up_data);
                    const sheet = SS.getSheetByName(SHEET_NAME_TEST１);
                    assert(sheet.getRange("B2").getValue() === "対応完了");
                }
            },
            "{ID:2, ステータス:クローズ, 優先度:3}で更新": {
                "ID2のステータスがクローズに更新されていること": function () {
                    const up_data = { "ID": 2, "ステータス": "クローズ", "優先度": "3" };
                    updateTabele_standard(up_data);
                    const sheet = SS.getSheetByName(SHEET_NAME_TEST１);
                    assert(sheet.getRange("B3").getValue() === "クローズ");
                },
                "ID2の優先度が3に更新されていること": function () {
                    const sheet = SS.getSheetByName(SHEET_NAME_TEST１);
                    assert(sheet.getRange("D3").getValue() === 3);
                }
            },
            "{ID:3, ステータス:再オープン, 不具合概要:アプリクラッシュ, 優先度:0}で更新": {
                "ID3のステータスが再オープンに更新されていること": function () {
                    const up_data = { "ID": 3, "ステータス": "再オープン", "不具合概要": "アプリクラッシュ", "優先度": "０" };
                    updateTabele_standard(up_data);
                    const sheet = SS.getSheetByName(SHEET_NAME_TEST１);
                    assert(sheet.getRange("B4").getValue() === "再オープン");
                },
                "ID3の不具合概要がアプリクラッシュに更新されていること": function () {
                    const sheet = SS.getSheetByName(SHEET_NAME_TEST１);
                    assert(sheet.getRange("C4").getValue() === "アプリクラッシュ");
                },
                "ID3の優先度が0に更新されていること": function () {
                    const sheet = SS.getSheetByName(SHEET_NAME_TEST１);
                    assert(sheet.getRange("D4").getValue() === 0);
                }
            }
        }
    })
}

function test_challenge() {
}