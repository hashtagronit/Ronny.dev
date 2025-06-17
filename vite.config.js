import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: "/ronny.dev/",
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Portfolio of Ronit Raj - Web Developer & Programmer',
        short_name: 'My Portfolio',
        "start_url": "/ronny.dev/",
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4e90ff',
        icons: [
          {
            src: '/favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon'
          }
        ]
      }
    })
  ],
  build: {
    outDir: 'dist',
  }
});
