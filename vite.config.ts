import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Vue from '@vitejs/plugin-vue'
import Anchor from 'markdown-it-anchor'
import LinkAttributes from 'markdown-it-link-attributes'
import Prism from 'markdown-it-prism'
import path from 'path'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Pages from 'vite-plugin-pages'
import { VitePWA } from 'vite-plugin-pwa'
import Layouts from 'vite-plugin-vue-layouts'
import Markdown from 'vite-plugin-vue-markdown'
import generateSitemap from 'vite-ssg-sitemap'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
        'pinia',
      ],
      dts: 'src/types/auto-imports.d.ts',
      dirs: ['src/constants', 'src/composables', 'src/stores'],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/types/components.d.ts',
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

    // https://github.com/antfu/vite-plugin-vue-markdown
    Markdown({
      headEnabled: true,
      wrapperComponent: 'PostDetail',
      wrapperClasses: '',
      markdownItSetup(md) {
        md.use(Prism, {})
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
        md.use(Anchor, {
          permalink: Anchor.permalink.ariaHidden({
            placement: 'before',
          }),
        })
      },
      frontmatterOptions: {},
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: "Strick's Blog",
        short_name: 'Strick',
        icons: [
          {
            src: '/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
            density: '0.75',
          },
          {
            src: '/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            density: '1.0',
          },
          {
            src: '/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            density: '1.5',
          },
          {
            src: '/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            density: '2.0',
          },
          {
            src: '/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            density: '3.0',
          },
          {
            src: '/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            density: '4.0',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest}'],
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect(),
  ],

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    onFinished() {
      generateSitemap()
    },
  },

  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', /vue-i18n/],
  },
})
