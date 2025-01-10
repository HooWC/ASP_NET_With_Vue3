### Create Vue In WWW

```
MyMvcApp/
│
├── wwwroot/
│   └──frontend/               
│      └── src/                
│          └── main.js         
│          └── App.vue         
│      └── vite.config.js  # Build 出口在 js 文件夹里   
│      └── index.html       
│      └── package.json 
│ 
│   └──js/               
│      └── main.js          # Vue 出口
│      
├── Controllers/
│   └── HomeController.cs
├── Views/
│   └── Home/
│       └── Index.cshtml    # 引用 Vue 构建文件
```



Open a File Name : Frontend, and then CMD type install

```
npm create vue@latest
npm install
npm install vite-plugin-vue-devtools --save-dev
npm install vue-loader@next vue-router@next
```

index.html

```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/js/main.js"></script>
  </body>
</html>
```

package.json

```js
{
  "name": "vue",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.5.13"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.2.1",
    "vite": "^6.0.5",
    "vite-plugin-vue-devtools": "^7.7.0"
  }
}
```

vite.cofig.js

```js
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],  // 使用 vue 插件
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)), // 确保 src 目录存在
        },
    },
    build: {
        outDir: '../../js',  // 输出到 wwwroot/js 目录
        emptyOutDir: true,           // 清空旧的构建文件
        rollupOptions: {
            input: '/src/main.js',     // 确保输入文件为 main.js
            output: {
                entryFileNames: 'main.js',  // 入口文件为 main.js
                chunkFileNames: 'chunk.js', // 其他的 JS 代码块
                assetFileNames: '[name].[ext]'  // 静态资源文件名保持原样
            }
        }
    }
});
```

src/main.js

```js
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
```

src/App.vue

```vue
<template>
    <div>
        <h1>Welcome to Vue with Vite!</h1>
    </div>
</template>

<script setup>
    // Vue 组件逻辑
</script>
```





Home/Index.cshtml

```html
@{
    ViewData["Title"] = "Home Page";
    Layout = null;
}

<div id="app"></div>

<!-- 引入 Vue 构建后的 JS 文件 -->
<script src="~/js/main.js"></script>
```



```
npm run build
```

```
F5 run project
```

