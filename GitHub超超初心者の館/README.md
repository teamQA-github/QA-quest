# GitHub超超初心者の館
<img src="https://github.com/teamQA-github/QA-quest/blob/images/GitHub.jpg" width="500">

## Summary
GitHubなにそれおいしいの？って人でもGitHubを超超簡単に利用できるようになるための超超初心者の館です！  
push,pull,merge,fetch,clone,fork,get,diff、、、呪文のようなコマンドや難しい話はとりあえず置いておいて、、、  
とりあえず使ってみよう~がコンセプトです！！

なにこれ便利！！ってなったら、みんなも呪文(コマンド)を覚えて冒険(開発)に出発しよう！！！  
QA-questは安全地帯なのでどんな失敗しても怒られる心配はないです！！なので、安心してチャレンジ(失敗)しましょうww
※GASのQA-questに挑戦される方を対象とした内容となっています。

## GitHubのアカウント作成
すでにGitHubアカウントを所持している人は飛ばして下さい！

1. GitHubの公式HPを開く  
    https://github.co.jp/
1. GitHubに登録するボタンを押下する  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/GitHubHP.png" width="400">
1. アカウント情報を記載し、 `Create account`ボタンを押下する  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/account-create.png" width="200">
    * UsernameはアカウントのURLやログインIDEAに利用されます
1. `Next: select a plan` をクリックするとPlanを選ぶ画面に行きますが、この時点でGithubからメールがきていると思うので、  
    メールアドレスをVerifyしましょう！！（Planは選ばなくていいです。）  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/Veryfy-email.png" width="400">
1. すると新しいリポジトリ（フォルダのようなもの）を作成する画面になるので、試しに`my-github`というリポジトリを作ってみよう！  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/my-github.png" width="400">
    * リポジトリ名は単語と単語をハイフン’-‘で結ぶことが一般的です！！
1. 下記のようにリポジトリが作成できていればアカウント作成は完了です！  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/my-github-main.png" width="400">

## QA-questをForkする
Forkの意味はわからなくてOKです！とりあえず、下記の手順を実施しましょう！  
tesm-QAのGitHubから自分のGitHubにリポジトリを複製するようなイメージだけ持ってい頂ければ十分です。
GitHubのアカウント作成から引き続きで行っている場合は問題ないですが、ブラウザがGitHubにログインしている状態で実施して下さい。

1. QA-questのリポジトリを開く  
    https://github.com/teamQA-github/QA-quest
1. 画面右上にあるForkボタンを押下する  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/QA-quest-Fork.png" width="400">
1. モーダルが表示されるので、自分のアカウントIDを選択する
    * アカウントを作成したばかりの場合は、自分以外選択できないはずなのでモーダル自体が表示されないかも？？
1. リポジトリの複製が完了し、自身のアカウントIDにQA-questが作成されていれば成功  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/Fork-end.png" width="400">
    
## Google Apps Script GitHub アシスタントの導入
GASのスクリプトエディタ画面にて簡単にGitHubでソースコードのバージョン管理が可能なChromeの拡張機能   
<img src="https://github.com/teamQA-github/QA-quest/blob/images/GAS-github.png" width="400">

1. Google Apps Script GitHub アシスタントをChromeに追加する  
    https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo
1. 連携したいGASのスクリプトエディタを開く
1. `Login SCM`ボタンを押下する
1. GitHubの`username` `password`を入力しGitHubと連携する  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/loginSCM.png" width="200">
    * メールアドレスではなく、usernameの点に注意
    * `token`は未記入で問題なし
1. `Repository`を押下しForkしたQA-questを選択できれば設定は完了  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/repository.png" width="400">
    
## QA-questにチャレンジしよう！
基本的には新しいQA-questに挑戦する度に下記の手順を繰り返す形になります

### 課題用のブランチを作成する
1. ForkしたQA-questのリポジトリ画面を開く
1. 画面左上のリポジトリのプルダウンをクリックする。(初期表示ではmainと表示されているはず)  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/repo-main.png" width="400">
1. 表示されたモーダル内にあるテキストボックスに作成したいブランチ名を入力する  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/make-branch.png" width="200">  
    ブランチ名は任意ですが、推奨は課題名と同じ名前がわかりやすいかと！
    例:filter  
1. ブランチ名を入力すると`Create branch: [ブランチ名]`と表示されるのでクリックする  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/create-branch-filter.png" width="200">
1. リポジトリのプルダウンに作成したリポジトリ名で表示されていれば成功  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/filter-branch.png" width="150">

### 対応した課題をpushする
1. 課題の対応を行うスクリプトエディタを開く
    * 基本的には課題用のププレッドシートを複製し、そのスプレッドシートからスクリプトエディタを開くと良い
1. ForkしたQA-questのリポジトリを選択する  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/edita-repo.png" width="400">
1. 課題用に作成したブランチを選択する  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/edita-Branch.png" width="400">
    * ここで作成したリポジトリやブランチが表示されない人はスクリプトエディタを再描画(F5)して下さい！
1. 課題のREADMEに従いコーディングを行う
1. ある程度コーディングができたらPushするために↑ボタンを押下してみよう！  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/edita-push.png" width="400"> 
1. 更新差分を確認し、問題がなければコメントを記載してPushボタンを押下する  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/diff-Push.png" width="300">
    * コメントは更新内容を簡潔に記載するのが望ましいが、ここでは簡単な記載でOKです！
1. 何かしらコーディングを行い、前にPushした状態に戻したいときはPullをするために↓ボタンを押下してみよう！  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/edita-pull.png" width="400">
1. 更新差分を確認し、問題がなければコメントを記載してPullボタンを押下する  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/diff-Pull.png" width="300">
    * 画面が再描画されて前回Pushしたソースコードに戻っていれば成功！

### 課題をプルリクしてレビュー依頼する
1つでも課題が完成してPushまで行えていれば、プルリクを作成してレビュー依頼をしてみましょう！

1. レビューをしてほしいコードをPushする  
1. 課題用に作成したブランチをブラウザで開く
1. Pull requestsのタブを開き、`New pull request`ボタンを押下する  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/Pull-requests-new.png" width="400">
1. リクエスト先(左側)を`teamQA-github/QA-quest`の`main`を指定する
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/pull-request-to.png" width="500">
1. リクエスト元(右側)を`[Forkしたリポジトリ]`の`[課題用のブランチ]`を指定する  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/pull-request-from.png" width="500">
1. `Create Pull request`ボタンを押下する
1. プルリクのタイトルとコメント欄に入力を行し、`Create Pull request`ボタンを押下する  
    <img src="https://github.com/teamQA-github/QA-quest/blob/images/pull-request-comment.png" width="400">   
    * プルリクのタイトル(Pull Request名)は必ず課題名(フォルダ名)で依頼してください。  
    * プルリクのコメント蘭に`@teamQA-github/mentor`にメンションをお願いします。
1. プルリクが作成できたら、Slackの[#qa-quest](https://teamqa-talk.slack.com/archives/C01CQKESUER)チャンネルにプルリクのURLを添付してレビュー依頼をお願いします
1. レビューをしたら、コメントをしSlackでご連絡するので確認/コメント対応を行ってください
1. 対応が必要なコメントがなくなったら、**Mergeはせずに**プルリクをクローズしてください

## 最後に
ここで説明したGitの使用方法は少し特殊なGitHubの利用方法となっています。  
一般的な利用方法を学ぶための初心者の館も今後作成予定ですので、まずはGitHubを利用して見るところから始めてみて下さい〜
