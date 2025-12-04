import { fileURLToPath, URL } from 'node:url'
import { Vueless, TailwindCSS, UnpluginComponents } from "vueless/plugin-vite";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import mkcert from 'vite-plugin-mkcert'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  base: '/telegram-app/',
  plugins: [
    vue(),
    vueDevTools(),
    Vueless(),
    TailwindCSS(),
    UnpluginComponents(),
    // Creates a custom SSL certificate valid for the local machine.
    // Using this plugin requires admin rights on the first dev-mode launch.
    // https://www.npmjs.com/package/vite-plugin-mkcert
    process.env.HTTPS ? mkcert() : undefined,
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  publicDir: './public',
  build: {
    sourcemap: false,
    outDir: path.resolve(__dirname, process.env.VITE_OUTPUT_DIR || "dist"),
  },
  server: {
    // Exposes your dev server and makes it accessible for the devices in the same network.
    host: true,
  },
})
