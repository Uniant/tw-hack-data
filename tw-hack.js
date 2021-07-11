/*
これはjavascriptから取得できるtwitter乗っ取りアプリ名リストです。
不適切な言葉が含まれておりますが、ご了承ください。
定期的に変更していきます。
*/

var app_info = document.getElementsByClassName("app-info")[0].textContent //アプリ名が入ってる要素を取得

var n_list = ["あなたの価値早見表",
"コミュニケーション能力",
"小学知識テスト",
"日本語ボキャブラリーテスト",
"あなたの性的情報一覧",
"あなたにあるもの、ないもの",
"リアル結婚年齢",
"あなたの理想の恋人像",
"世界最強の顔採点大診断！",
"センター試験",
"セック○診断",
"診断",
"あなたは一生何人と♡♡をする？",
"エッチ度検査",
"あなたの顔採点",
"人生採点",
"採点",
"最新型 『顔面採点診断』",
"あなたの性的嗜好一覧",
"あなたのお値段",
"顔面ランク",
"あなたと相性が良い人の誕生日ベスト",
"あなたのモテモテ度点数",
"あなたの夜は何点",
"周りから思われている事",
"ックスした時の満足度は",
"あなたに似合う曲を調べったー",
"異性からみたあなたの印象",
"あなたを女子高生化してみた",
"あなたあるある",
"モテ度点数表",
"点数表",
"成績表",
"Popularity App.",
"バズ情報局！",
"twinewss",
"TWIPICKS",
"トレンド速報+",
"NEWSJP",
"TWEETJAPAN",
"twitte news+",
"twitter news",
"JustTweet!!",
"ツイッタラー！",
"ツイッターLOG",
"TWILOG202",
"人気ツイートタイム！",
"JAPSNS",
"Roun' Year Fun!",
"twitter.com/",]


    for(var i = 0;i < n_list.length;i++){ //n_listの数回ループ
       if(app_info.indexOf(n_list[i]) != -1){ //乗っ取りアプリの名前が含まれてたら
        document.getElementById("var_share").textContent = "1"
       }
    }
