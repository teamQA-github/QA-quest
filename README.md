# QA-quest

# QA-quest とは？

- QA もくもく会メンバーに向けた学習用のコンテンツです。
- GAS や python での課題を提供する予定です。
- 課題のレビュー依頼は git のプルリクが望ましいですが、Slack で URL やファイルを共有してのレビュー依頼でも OK とします。
- 課題自体に期限や締め切りは設けない予定なので、ご自身のペースで進めて見て下さい！
- 基本的な Git 開発の流れや、OSS にプルリクを依頼する練習になるようなコンテンツを想定しています。
  ※詳細なルールや運用などは随時更新していきます

# 参加方法

1. [#qa-quest](https://teamqa-talk.slack.com/archives/C01CQKESUER)のチャンネルに参加をする
1. 課題フォルダの README の説明に従って、個人の環境で課題を実施する。
1. メンターにレビューを依頼する （現時点のメンターは花上のみですが、今後はメンター役も増やしたい）
   - git のプルリクでの依頼をする場合は[git の対応方法](#gitの対応方法)を参照
   - git 以外でレビュー依頼したい場合は、`＠hiroyuki.hanaue`にメンションをつけて [#qa-quest](https://teamqa-talk.slack.com/archives/C01CQKESUER)のチャンネルから依頼してください。
     依頼時に作成した GAS の URL などを添付して共有してください。
1. レビューをしたら、

# git の対応方法

基本的には Slack または、もくもく会でフォローします！
git を使用できない方は、git の対応は不要です！！ Git に興味がある方は下記のサイトがおすすめです〜

▼Git 超入門講座
https://datawokagaku.com/github_register/

## git での環境立ち上げ手順

1. 自身の GitHub アカウントを用意/ログインする
1. QA-quest を Fork する
1. 自分のアカウントのリポジトリから QA-quest を clone する
1. 本家(teamQA-github)を upstream として登録する
   `git remote add upstream https://github.com/teamQA-github/QA-quest.git`
   `git remote -v`を実行して upstream が表示されることを確認できれば OK

## プルリクでのレビュー依頼手順

1. main ブランチにて、upstream のリポジトリから fetch,merge を行う
   ※環境立ち上げ直後の場合は不要
1. 課題対応用の branch を main から作成する
1. 課題の README.mk に従ってコーディングを行う
1. git add & commit & push する
1. 自身の GitHub の QA-quest 画面からプルリクエストを作成する
   1. プルリクエストの request 先を本家(teamQA-github)の main に指定する
      ※request 元はもちろん課題用に作成した branch であること
   1. プルリクエストのタイトル(Pull Request 名)は必ず課題名(フォルダ名)で依頼してください。
   1. プルリクエストのコメント蘭に`@teamQA-github/mentor`にメンションをお願いします。
1. Slack の[#qa-quest](https://teamqa-talk.slack.com/archives/C01CQKESUER)チャンネルにプルリクの URL を添付してレビュー依頼をお願いします。

# メモ

- selenium や Airtest などの検証自動化関連も取り扱っても良いかも？？
