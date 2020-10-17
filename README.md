# QA-quest

# QA-questとは？
- QAもくもく会メンバーに向けた学習用のコンテンツです。
- GASやpythonでの課題を提供する予定です。
- 課題のレビュー依頼はgitのプルリクが望ましいですが、SlackでURLやファイルを共有してのレビュー依頼でもOKとします。
- 課題自体に期限や締め切りは設けない予定なので、ご自身のペースで進めて見て下さい！
- 基本的なGit開発の流れや、OSSにプルリクを依頼する練習になるようなコンテンツを想定しています。  
※詳細なルールや運用などは随時更新していきます

# gitの対応方法
基本的にはSlackまたは、もくもく会でフォローします！

## gitでの環境立ち上げ手順
1. 自身のGitHubアカウントを用意/ログインする  
1. QA-questをForkする  
1. 自分のアカウントのリポジトリからQA-questをcloneする  
1. 本家(teamQA-github)をupstreamとして登録する  
`git remote add upstream https://github.com/teamQA-github/QA-quest.git`  
`git remote -v`を実行してupstreamが表示されることを確認できればOK

## 課題に対するプルリク手順
1. masterブランチにて、upstreamのリポジトリからfetch,mergeを行う
※環境立ち上げ直後の場合は不要
1. 課題対応用のbranchをmasterから作成する
1. 課題のREADME.mkに従ってコーディングを行う
1. git add & commit & pushする
1. 自身のGitHubのQA-quest画面からプルリクエストを作成する
    1. プルリクエストのrequest先を本家(teamQA-github)のmasterに指定する  
    ※request元はもちろん課題用に作成したbranchであること
    1. プルリクエストのタイトル(Pull Request名)は必ず課題名(フォルダ名)で依頼してください。
    1. プルリクエストのコメント蘭に`@teamQA-github/mentor`にメンションをお願いします。
1. Slackの#qa-questチャンネルにプルリクのURL共に投稿をお願いします。

# メモ
- seleniumやAirtestなどの検証自動化関連も取り扱っても良いかも？？
