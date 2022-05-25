import { defineConfig } from "vite";
import { resolve } from "path";
import vue from '@vitejs/plugin-vue';

function pathResolve(dir) {
    return resolve(__dirname, ".", dir);
}

export default defineConfig({
    base: "",
    plugins: [vue()],
    resolve: {
        alias: {
            "/@": pathResolve("src"),
        }
    },
    optimizeDeps: {
        include: ['axios'],
    },
    css: {
        postcss: {
            plugins: [{
                postcssPlugin: 'internal:charset-removal',
                AtRule: {
                    charset: (atRule) => {
                        if (atRule.name === 'charset') {
                            atRule.remove();
                        }
                    }
                }
            }],
        },
    },
    build: {
        target: 'modules',
        outDir: 'dist',
        assetsDir: 'assets',
        minify: 'terser', // 混淆器
        chunkSizeWarningLimit: 1500,

    },
    server: {
        cors: true,
        open: true,
        port: 3005,
        host: "0.0.0.0",
        proxy: {
            '/api': {
                target: 'http://10.10.0.122:9300', //代理接口
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            '/hk': {
                target: 'http://10.10.181.60:11077', //代理接口
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/hk/, '')
            },
        }
    }
});