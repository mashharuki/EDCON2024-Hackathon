import {Octokit} from "octokit";
import {config} from "dotenv";

config();

const {GITHUB_ACCESS_TOKEN} = process.env;

// Octokitインスタンスを作成
const octokit = new Octokit({
  auth: GITHUB_ACCESS_TOKEN,
});

// コマンドライン引数からGitHubのユーザー名を取得
const username = process.argv[2];
const repo = process.argv[3];

/**
 * Githubのスターを取得するメソッド
 */
const getCommmits = async (username: string, repo: string) => {
  console.log(
    "=================================== [getStars START] ==================================="
  );

  // コミット数用の変数
  let totalCommits = 0;

  try {
    // スター数を取得する。
    await octokit.request("GET /repos/{owner}/{repo}/commits", {
      owner: username,
      repo: repo,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    console.log(`Total Stars: ${totalCommits}`);
  } catch (error) {
    console.error("Error fetching total stars:", error);
  } finally {
    console.log(
      "=================================== [getStars END] ==================================="
    );
    return totalCommits;
  }
};

/**
 * メインスクリプト
 */
async function main() {
  // 特定のリポジトリのコミット数を取得する
  const totalCommmits = await getCommmits(username, repo);
  console.log(`${username}'s totalCommmits: ${totalCommmits}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
