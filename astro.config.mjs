import { defineConfig } from 'astro/config'
import unocss from '@unocss/astro'
import solidJs from '@astrojs/solid-js'
import mdx from '@astrojs/mdx'
import i18n from '@astrolicious/i18n'

import { site } from './src/lib/consts'

// https://astro.build/config
export default defineConfig({
  site: site.url,
  integrations: [
    solidJs(),
    unocss({ injectReset: true }),
    mdx(),
    i18n({
      defaultLocale: 'en',
      locales: ['en', 'zh'],
      sitemap: true,
    }),
  ],
})
