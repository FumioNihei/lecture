

```powershell
npm run build
```

`dist/sample`がそれ．開いて`_astro`を参照している部分のパスを変更しないといけない．

これは以下で解決可能（ありがとうchat gpt）

✅ 解決方法①：`base` 設定で相対パスに変更する
`astro.config.mjs` に `base` オプションを追加して、相対パスで出力するように設定できます。

```js
コピーする
編集する
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  base: './', // 👈 これを追加！
});
```
そのあと再度ビルド：

```bash
コピーする
編集する
npm run build
これで index.html 内の CSS/JS の参照が ./_astro/... のように相対パスになり、ローカルで開いてもスタイルが崩れないようになります。
```