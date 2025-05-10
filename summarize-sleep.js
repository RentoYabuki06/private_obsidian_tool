const fs = require("fs/promises");
const matter = require("gray-matter");
const glob = require("glob");

// Vaultのパスと対象フォルダを指定（書き換えてOK）
const VAULT_PATH = "/Users/yourname/Documents/Obsidian Vault"; // ← あなたのVaultの絶対パス
const DAILY_DIR = `${VAULT_PATH}/Daily`; // Dailyノートがあるフォルダ

glob(`${DAILY_DIR}/**/*.md`, async (err, files) => {
  if (err) {
    console.error("❌ ファイル検索エラー:", err);
    return;
  }

  let total = 0;
  let count = 0;

  for (const file of files) {
    const content = await fs.readFile(file, "utf8");
    const parsed = matter(content);
    const sleep = parseFloat(parsed.data.sleep_hours);

    if (!isNaN(sleep)) {
      total += sleep;
      count++;
    }
  }

  if (count === 0) {
    console.log("😴 対象データが見つかりませんでした");
  } else {
    const avg = total / count;
    console.log(`📊 集計結果：`);
    console.log(`  件数          ：${count}件`);
    console.log(`  合計時間      ：${total.toFixed(2)} 時間`);
    console.log(`  平均睡眠時間  ：${avg.toFixed(2)} 時間`);
  }
});

