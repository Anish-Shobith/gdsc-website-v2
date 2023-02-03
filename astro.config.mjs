import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import compress from 'astro-compress';

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
    ssr: {
      external:  ['svgo']
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
