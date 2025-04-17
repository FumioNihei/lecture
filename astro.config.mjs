// @ts-check
import { defineConfig } from 'astro/config';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://fumionihei.github.io/',
  base: 'lecture',
  integrations: [expressiveCode({
    plugins: [pluginLineNumbers()],
    themes: ['github-light-default'],
    
  })]
});