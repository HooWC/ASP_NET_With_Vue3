import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],  // ʹ�� vue ���
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)), // ȷ�� src Ŀ¼����
        },
    },
    build: {
        outDir: '../../js',  // ����� wwwroot/js Ŀ¼
        emptyOutDir: true,           // ��վɵĹ����ļ�
        rollupOptions: {
            input: '/src/main.js',     // ȷ�������ļ�Ϊ main.js
            output: {
                entryFileNames: 'main.js',  // ����ļ�Ϊ main.js
                chunkFileNames: 'chunk.js', // ������ JS �����
                assetFileNames: '[name].[ext]'  // ��̬��Դ�ļ�������ԭ��
            }
        }
    }
});
