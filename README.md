# Obsidian Sleep Summary CLI

ObsidianのVault内にあるMarkdown形式の日次ノートから、YAMLフロントマターに記録された `sleep_hours` を読み取り、月ごとの平均睡眠時間を計算するCLIツールです。

---

## 🛠 インストール

```bash
git clone https://github.com/yourname/obsidian-sleep-summary.git
cd obsidian-sleep-summary
npm install
````

---

## 📁 ディレクトリ構成

```
obsidian-sleep-summary/
├── summarize-sleep.js  # 集計処理本体
├── package.json        # 依存管理
└── README.md           # このファイル
```

---

## ⚙️ 使い方

### 1. Vaultのパスを設定

`summarize-sleep.js` の上部にある以下の2行を、**あなたの環境に合わせて変更**してください：

```js
const VAULT_PATH = "/Users/yourname/Documents/Obsidian Vault";
const DAILY_DIR = `${VAULT_PATH}/Daily`;
```

### 2. 実行

```bash
node summarize-sleep.js
```

結果例：

```
📊 集計結果：
  件数          ：20件
  合計時間      ：150.00 時間
  平均睡眠時間  ：7.50 時間
```

---

## 🔍 前提条件

* 各日次ノートのYAML Frontmatterに `sleep_hours` を数値として記載していること：

```markdown
---
date: 2025-05-10
sleep_hours: 7.5
---
```

---

## 📦 依存ライブラリ

* [`gray-matter`](https://www.npmjs.com/package/gray-matter)：MarkdownファイルからYAMLを抽出
* [`glob`](https://www.npmjs.com/package/glob)：Vault内の`.md`ファイルをパターン検索

---

## 💡 将来的にできること（TODO）

* 月別の出力に対応（例：`2025-05`のみ対象にする）
* `bench_press` や `focus_hours` の追加集計
* 本文中への `{{sleep_hours}}` 差し込み
* Markdown形式でレポート出力（`Monthly_Review.md` など）

---

## 📝 ライセンス

MIT（または自分用なら明記不要）

