# このレポジトリで解決したいのは下記エラー

`[Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. See <URL>`

# 参考URL

- [マウスによるスクロールやスマホのスワイプを制御するjs(passive: false) – なんかいろいろデザインする人](https://reiwinn-web.net/2018/05/21/マウスによるスクロールやスマホのスワイプを制/)
- [[Javascript]各ブラウザでマウスホイールの操作を検知する « Codaholic](http://codaholic.org/?p=1139)

- [jQuery無しでイージングアニメーションを伴う機能をつくろう！その3（スムーススクロール・前編） | フロントエンドBlog | ミツエーリンクス](https://www.mitsue.co.jp/knowledge/blog/frontend/201801/18_1027.html)
- [jQuery無しでイージングアニメーションを伴う機能をつくろう！その4（スムーススクロール・後編） | フロントエンドBlog | ミツエーリンクス](https://www.mitsue.co.jp/knowledge/blog/frontend/201802/19_1618.html)

- [jQueryの .on でハマった話 - Qiita](https://qiita.com/mikene_koko/items/1bad20518cc7408bbbf9)

# 解決しました

1. jQueryをすべてVanillaで書き直そうとする
2. 途中までつくるがイージングの設定`easeOutCirc`の実装方法がわからず詰む
3. `addEventListener`でjQueryのコードを囲めることに気づく
4. 無事解決

# 実行環境（2019.11.18現在）

- Windows10
- Chrome 最新版
- Firefox 最新版
- IE11