// vite.config.js
import { defineConfig } from 'vite';
import htmlMinifier from 'vite-plugin-html-minifier';

export default defineConfig({
    plugins: [
        htmlMinifier({
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: true,
        }),
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3001', // Replace with your backend server (e.g., Vercel dev server)
                changeOrigin: true,
                // rewrite: (path) => path.replace(/^\/api/, '/api'),
            },
        },
    },
});