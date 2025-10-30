# next-shadcn-base

このリポジトリは Next.js / TypeScript / shadcn/ui ベースでプロジェクト開発を始めるための初期セットアップ一式を提供します。初期セットアップと開発フローの概要を以下にまとめます。

## 必要バージョン
- Node.js v20.9 以上（LTS。Next.js 16 では Node.js 18 はサポート対象外）
- npm （pnpm / Yarn は使用しません）

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
