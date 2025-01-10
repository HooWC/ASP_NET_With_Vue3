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
