# next-shadcn-base

このリポジトリは Next.js / TypeScript / shadcn/ui ベースでプロジェクト開発を始めるための初期セットアップ一式を提供します。初期セットアップと開発フローの概要を以下にまとめます。

## 必要バージョン
- Node.js v20.9 以上（LTS。Next.js 16 では Node.js 18 はサポート対象外）
- npm （pnpm / Yarn は使用しません）

## 開発環境

このプロジェクトは **Cursor IDE** を前提として開発を行います。

### MCP サーバー設定

開発にあたり設定したMCPサーバーは以下の通りです：

- **figma-desktop**: Figmaデザインファイルとの連携
- **chrome-devtools**: ブラウザ開発者ツールとの連携
- **next-devtools**: Next.js開発サーバーとの連携
- **context7**: ライブラリドキュメント検索
- **shadcn**: shadcn/uiコンポーネント検索・追加

これらのMCPサーバーは開発支援AIが使用するためのツールを提供し、Figmaデザインの参照、ブラウザでの動作確認、Next.jsの診断、ライブラリドキュメントの検索、shadcn/uiコンポーネントの管理などを効率的に行えます。

## 初期セットアップ
1. 依存関係をインストール: `npm install`
2. 開発サーバーを起動: `npm run dev`
3. svgアイコンファイルの変更作業の場合は、別ターミナルでアイコン自動生成のウォッチャーを起動: `npm run watch:icons`

## よく使うスクリプト
- `npm run dev`: Next.js 開発サーバーを起動します。
- `npm run build`: 本番ビルドを作成します。
- `npm run lint`: Lint チェックを実行します。
- `npm run watch:icons`: `public/icons/*.svg` を監視し、変更があれば `src/components/ui/icon-definitions.ts` を再生成します。
- `npm run generate:icons`: 手動でアイコン定義を再生成したい場合に実行します。

## アイコン運用
- 新しい SVG アイコンは `public/icons/` に配置してください。
- 開発中は `npm run watch:icons` を常駐させることで、SVG 追加・更新時に `src/components/ui/icon-definitions.ts` が自動更新されます。
- 自動生成を忘れてコミットしないよう、PR 作成前に差分がないか確認してください。

## CSS / デザイントークン運用
- Figma からエクスポートしたデザイントークンを `tokens/` ディレクトリに配置します。
- トークン配置後は `node scripts/remove-japanese-tokens.mjs` を実行して余分な日本語ラベルを削除します。
- CSS ビルドのため `npx style-dictionary build` を実行します（出力先: `src/app/variables.css`）。
- 最後に `node scripts/postprocess-design-tokens.mjs` を実行し、`variables.css` の rem 値を 1/10 に調整しつつ、`--master-` などのカスタムプレフィックスを通常の `--` に統一します。

## Storybook 運用
- UI 仕様の共有やレビューが必要な場合はストーリーファイル（`.stories.tsx`）を作成してください。
- Storybook の起動コマンド: `npm run storybook`
- 既存コンポーネントに対応する Story を作るときは、コンポーネントと同階層に生成する想定で `npm run create-story src/components/ui/button.tsx` のように実行します。
- あるいは Storybook の UI から新規 Story を作成することも可能です。

## ドキュメント
詳細なコーディング規約やデザインガイドラインは `docs/frontend-guidelines.md` を参照してください。

### ドキュメントファイル一覧

プロジェクト内のマークダウンファイル（`.md`）とCursor設定ファイル（`.mdc`）の説明：

#### ルートディレクトリ

- **`README.md`**: プロジェクトの概要、セットアップ手順、よく使うスクリプト、アイコン運用、CSS/デザイントークン運用、Storybook運用などをまとめたドキュメント

- **`AGENTS.md`**: AIエージェント（開発支援AI）がこのプロジェクトで作業する際に従うべきルールとガイドライン。基本原則、フロントエンド開発ガイドラインへの参照、共通ルール（コード品質、コミットとPR、ドキュメント、開発設計ルール）、作業の進め方、トラブルシューティングなどを記載

#### `docs/` ディレクトリ

- **`docs/frontend-guidelines.md`**: フロントエンド開発に関する詳細なガイドライン。技術スタック（Next.js 16、React 19.2、TypeScript、Tailwind CSS v4など）、作業フロー、コーディング規約（TypeScript、CSS、コンポーネント、アイコン、画像・リンク、命名規則、HTML、Next.js 16の仕様）、デザイン・アクセシビリティ、Storybook/Docs、テスト、チェックリスト、トラブルシューティングなどを記載

#### `.cursor/` ディレクトリ

- **`.cursor/commands/refactor.md`**: Cursorコマンドとして `/refactor` で実行可能なリファクタリング作業用のファイル。開発設計ルールの要点をまとめており、詳細は `AGENTS.md` を参照する形式

- **`.cursor/commands/commit.md`**: Cursorコマンドとして `/commit` で実行可能なコミット作業用のファイル。未コミットの変更内容を確認し、コミットメッセージを作成してコミットを実行する

- **`.cursor/rules/config.mdc`**: Cursor IDE用の設定ファイル。作業開始前に必ず `AGENTS.md` の内容を確認するよう指示する設定が記載されている

## オリジナル UI コンポーネント
shadcn/ui に含まれない、このプロジェクト専用のコンポーネントと役割は次のとおりです。

- `Heading`: variant に応じて適切な見出しタグとタイポグラフィをマッピングする見出し用コンポーネント。
- `Text`: サイト共通の本文タイポグラフィ（サイズ・行間）を切り替えられるテキストコンポーネント。
- `TextLink`: テキストリンク向けのラッパー。下線有無のバリアントと左右アイコン表示に対応。
- `SectionContainer`: セクション全体を囲むカード風コンテナ。余白や境界線を統一。
- `Icon`: `public/icons` で管理するカスタム SVG を安全にインライン描画するためのラッパー。

## shared コンポーネント
`/src/components/shared` 配下にある共通パーツの一覧と用途です。

- `Gap`: Flex レイアウト間のスペーシングをトークンベースで制御するレイアウトユーティリティ。
- `PageHeader`: グローバルなページヘッダー（ロゴ表示など）を提供するプレースホルダーコンポーネント。
- `PageTopButton`: 画面右下に固定配置されるページトップへ戻るボタン。next/linkを使用し、URLハッシュを出さないスクロール実装。
