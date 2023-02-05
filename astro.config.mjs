import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import compress from 'astro-compress';
import { VitePWA } from 'vite-plugin-pwa';

import { SITE } from './src/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  output: 'static',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    compress({
      css: true,
      html: {
        removeAttributeQuotes: false,
      },
      img: true,
      js: true,
      svg: true,
    }),
    react()
  ],
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: [
          'robots.txt',
          '*.svg',
          '*.png'
        ],
        manifest: {
          name: 'GDSC SJEC',
          short_name: 'GDSC SJEC',
          start_url: '/',
          display: 'fullscreen',
          orientation: 'any',
          background_color: '#0f172a',
          theme_color: '#0f172a',
          icons: [
            {
              src: '/icons/android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/icons/android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/icons/android-chrome-maskable-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any maskable',
            },
            {
              src: '/icons/android-chrome-maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
        workbox: {
          globDirectory: 'dist',
          globPatterns: ['**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico,lottie}'],
        },
        // Don't fallback on document based (e.g. `/some-page`) requests
        // This removes an errant console.log message from showing up.
        navigateFallback: undefined
      })
    ],
    ssr: {
      external:  ['svgo']
    },
    assetsInclude: "**/*.lottie",
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
