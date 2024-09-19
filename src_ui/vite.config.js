import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src_ui',
    },
  },
  build: {
    rollupOptions: {
      external: ['/src_ui/main.js'],
    },
  },
});
