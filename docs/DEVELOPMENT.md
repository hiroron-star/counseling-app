# 技術開発ガイド

このドキュメントは、カウンセリングアプリの開発を進めるための技術的な手順書です。

## 📋 目次

1. [開発環境のセットアップ](#開発環境のセットアップ)
2. [フェーズごとの実装手順](#フェーズごとの実装手順)
3. [よく使うコマンド](#よく使うコマンド)
4. [デプロイ手順](#デプロイ手順)

---

## 開発環境のセットアップ

### 1. プロジェクトのクローン

```bash
git clone https://github.com/hiroron-star/counseling-app.git
cd counseling-app
```

### 2. 環境ファイルの準備

```bash
cp .env.example .env
```

### 3. Docker Sailで起動

```bash
./vendor/bin/sail up -d
./vendor/bin/sail artisan key:generate
./vendor/bin/sail artisan migrate
./vendor/bin/sail npm install
```

### 4. 開発サーバー起動

```bash
# ターミナル1
./vendor/bin/sail up

# ターミナル2
./vendor/bin/sail npm run dev
```

http://localhost でアクセス可能

---

## フェーズごとの実装手順

### フェーズ1: 基盤構築

#### 1. データベース設計

マイグレーションファイルを作成：

```bash
# ユーザーテーブル（既存のusersを拡張）
./vendor/bin/sail artisan make:migration add_user_type_to_users_table

# 店舗テーブル
./vendor/bin/sail artisan make:migration create_stores_table

# 求人情報テーブル
./vendor/bin/sail artisan make:migration create_job_postings_table

# 相談テーブル
./vendor/bin/sail artisan make:migration create_consultations_table

# 回答テーブル
./vendor/bin/sail artisan make:migration create_answers_table
```

#### 2. モデルの作成

```bash
./vendor/bin/sail artisan make:model Store
./vendor/bin/sail artisan make:model JobPosting
./vendor/bin/sail artisan make:model Consultation
./vendor/bin/sail artisan make:model Answer
```

#### 3. 認証機能の実装

```bash
# Laravel BreezeまたはJetstreamを使用
./vendor/bin/sail composer require laravel/breeze --dev
./vendor/bin/sail artisan breeze:install react
./vendor/bin/sail npm install && ./vendor/bin/sail npm run build
```

userとofficeの認証を分ける場合は、カスタム認証を実装

#### 4. 基本レイアウトの作成

- `resources/js/Layouts/AppLayout.jsx` を作成
- ヘッダー・フッターを実装

---

### フェーズ2: 店舗関連機能

#### 1. Storeモデルとコントローラーの作成

```bash
./vendor/bin/sail artisan make:controller StoreController --resource
./vendor/bin/sail artisan make:request StoreRequest
```

#### 2. ルーティング設定

`routes/web.php` に追加：

```php
Route::middleware('auth')->group(function () {
    Route::resource('stores', StoreController::class);
});
```

#### 3. Reactページの作成

```bash
# resources/js/Pages/Stores/ フォルダを作成
# - Index.jsx (店舗一覧)
# - Show.jsx (店舗詳細)
# - Create.jsx (店舗登録)
# - Edit.jsx (店舗編集)
```

#### 4. 検索機能の実装

- StoreControllerに検索メソッドを追加
- エリア検索・キーワード検索を実装

---

### フェーズ3: 相談掲示板機能

#### 1. Consultationモデルとコントローラーの作成

```bash
./vendor/bin/sail artisan make:controller ConsultationController --resource
./vendor/bin/sail artisan make:request ConsultationRequest
```

#### 2. 相談一覧・詳細ページの実装

```bash
# resources/js/Pages/Consultations/
# - Index.jsx (相談一覧)
# - Show.jsx (相談詳細)
# - Create.jsx (相談投稿)
```

#### 3. 回答機能の実装

```bash
./vendor/bin/sail artisan make:controller AnswerController
```

- 回答投稿機能
- 回答の編集・削除機能

---

### フェーズ4: 求人情報機能

#### 1. JobPostingモデルとコントローラーの作成

```bash
./vendor/bin/sail artisan make:controller JobPostingController --resource
./vendor/bin/sail artisan make:request JobPostingRequest
```

#### 2. 求人情報ページの実装

```bash
# resources/js/Pages/JobPostings/
# - Index.jsx (求人一覧)
# - Show.jsx (求人詳細)
# - Create.jsx (求人投稿)
# - Edit.jsx (求人編集)
```

---

### フェーズ5: UI/UX改善・テスト

#### 1. レスポンシブ対応

- Material-UIのGridシステムを使用
- モバイル向けレイアウト調整

#### 2. エラーハンドリング

- バリデーションエラーの表示
- 404ページの実装

#### 3. テスト

```bash
./vendor/bin/sail artisan test
```

---

## よく使うコマンド

### Laravelコマンド

```bash
# マイグレーション
./vendor/bin/sail artisan migrate
./vendor/bin/sail artisan migrate:refresh

# モデル作成
./vendor/bin/sail artisan make:model ModelName

# コントローラー作成
./vendor/bin/sail artisan make:controller ControllerName

# マイグレーション作成
./vendor/bin/sail artisan make:migration migration_name

# シーダー作成（テストデータ）
./vendor/bin/sail artisan make:seeder SeederName
./vendor/bin/sail artisan db:seed

# ルート確認
./vendor/bin/sail artisan route:list

# キャッシュクリア
./vendor/bin/sail artisan cache:clear
./vendor/bin/sail artisan config:clear
./vendor/bin/sail artisan view:clear
```

### npmコマンド

```bash
# パッケージインストール
./vendor/bin/sail npm install

# 開発モード
./vendor/bin/sail npm run dev

# 本番ビルド
./vendor/bin/sail npm run build
```

### Docker Sailコマンド

```bash
# 起動
./vendor/bin/sail up -d

# 停止
./vendor/bin/sail down

# ログ確認
./vendor/bin/sail logs

# コンテナ内でコマンド実行
./vendor/bin/sail artisan [command]
./vendor/bin/sail npm [command]
```

---

## デプロイ手順

### AWS Lightsailへのデプロイ

#### 1. Lightsailインスタンス作成

- プラットフォーム: Linux/Unix
- インスタンスプラン: $10/月

#### 2. サーバーセットアップ

```bash
# システム更新
sudo apt update && sudo apt upgrade -y

# 必要なソフトウェアインストール
sudo apt install -y git nginx mysql-server php8.2-fpm php8.2-mysql php8.2-mbstring php8.2-xml php8.2-curl

# Composerインストール
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer

# Node.jsインストール
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

#### 3. プロジェクトのデプロイ

```bash
# プロジェクトをクローン
git clone https://github.com/hiroron-star/counseling-app.git
cd counseling-app

# .envファイルの設定
cp .env.example .env
nano .env

# 依存関係インストール
composer install --optimize-autoloader --no-dev
npm install
npm run build

# マイグレーション実行
php artisan migrate --force
php artisan key:generate

# パーミッション設定
sudo chown -R www-data:www-data storage bootstrap/cache
sudo chmod -R 775 storage bootstrap/cache
```

#### 4. Nginx設定

`/etc/nginx/sites-available/counseling-app` を作成：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/counseling-app/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

設定を有効化：

```bash
sudo ln -s /etc/nginx/sites-available/counseling-app /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 5. SSL証明書設定

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## コミットメッセージのルール

コミットメッセージには絵文字を使用して、変更内容をわかりやすくします。

### 使用ルール

コミットメッセージの先頭に絵文字を付けます：

```
✨ 新機能追加: 店舗検索機能を実装
🐛 バグ修正: ログイン時のエラーを修正
📚 ドキュメント追加: 開発ガイドを更新
```

### 絵文字一覧

| 絵文字 | 意味 | 使用例 |
|--------|------|--------|
| 🎉 | 初めてのコミット（Initial Commit） | `🎉 初回コミット` |
| 🔖 | バージョンタグ（Version Tag） | `🔖 v1.0.0` |
| ✨ | 新機能（New Feature） | `✨ 店舗検索機能を追加` |
| 🐛 | バグ修正（Bugfix） | `🐛 ログインエラーを修正` |
| ♻️ | リファクタリング（Refactoring） | `♻️ StoreControllerをリファクタリング` |
| 📚 | ドキュメント（Documentation） | `📚 仕様書を更新` |
| 🎨 | デザインUI/UX | `🎨 レスポンシブデザインを改善` |
| 🐎 | パフォーマンス（Performance） | `🐎 データベースクエリを最適化` |
| 🔧 | ツール（Tooling） | `🔧 ESLint設定を追加` |
| 🚨 | テスト（Tests） | `🚨 ユニットテストを追加` |
| 💩 | 非推奨追加（Deprecation） | `💩 古いAPIを非推奨化` |
| 🗑️ | 削除（Removal） | `🗑️ 未使用のファイルを削除` |
| 🚧 | WIP（Work In Progress） | `🚧 店舗登録機能の実装中` |

### コミットメッセージの形式

```
[絵文字] [簡潔な説明]

必要に応じて詳細な説明を追加
```

例：

```
✨ 店舗検索機能を実装

- エリア検索機能を追加
- キーワード検索機能を追加
- 検索結果一覧ページを作成
```

---

## 技術スタック

- **Laravel 12** - バックエンド
- **Inertia.js** - LaravelとReactの連携
- **React** - フロントエンド
- **Material-UI (MUI)** - UIコンポーネント
- **MySQL** - データベース
- **Docker Sail** - ローカル開発環境
- **AWS Lightsail** - 本番環境

---

**更新日:** 2025年1月

