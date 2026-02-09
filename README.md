# portfolio
このリポジトリは自分の作品やその作品の開発ログを記すサイト、つまりポートフォリオサイトの構成要素が入っています。

## ディレクトリ構成について
.
└── src：webサイトを構成する全ての要素が置かれている/
    ├── assets：画像やフォントなど静的なファイルが置かれている
    ├── components：再利用可能なUIパーツのAstroコンポーネント、およびそれに紐づくCSSファイルが置かれている
    ├── layouts：全てのwebページで共通のHTML構造（ヘッダー、フッター、ナビゲーションなど）を定義するAstroコンポーネントが置かれている。
    ├── pages：各WebページのルートとなるAstroファイル、およびそのページに固有のCSSファイルや関連コンポーネントが置かれている。
    │   ├── index.astro：トップページを構成するAstroファイル
    │   ├── works.astro：作った作品を展示するWebページを構成するAstroファイル
    │   ├── dev-log.astro：ゲーム等の開発記録を書くWebページを構成するAstroファイル
    │   └── sns.astro：githubやxなど私のSNSを表すWebページを構成するAstroファイル
    └── gloval-styles：サイト全体で共通するグローバルなCSS（Normalize.css、基本スタイル、それらを@layerでまとめるmain.cssなど）が置かれている。