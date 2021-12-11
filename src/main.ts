import { setupLayouts } from 'virtual:generated-layouts'
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from '~pages'

import App from './app.vue'

const routes = setupLayouts(generatedRoutes)

async function tryScrollToAnchor(id: string, timeout = 1000, delay = 100) {
  const escapedId = CSS.escape(encodeURIComponent(id))
  const escapedHash = `#${escapedId}`

  while (timeout > 0) {
    const el = document.querySelector(escapedHash)
    if (el) {
      el.scrollIntoView()
      break
    }
    await new Promise(resolve => setTimeout(resolve, delay))
    timeout = timeout - delay
  }
}

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior: to => {
      if (to.hash) {
        tryScrollToAnchor(to.hash.slice(1))
      }
    },
  },
  ctx => {
    modules.forEach(i => {
      i.install(ctx)
    })
  },
)
