type UserModule = (ctx: import('vite-ssg').ViteSSGContext) => void

interface FrontMatter {
  title: string
  term: string
  description: string
  createdAt: string
  updatedAt?: string
  heroImage?: string
  heroCode?: string
  tags?: string[]
}

interface Post extends FrontMatter {
  path: string
}

interface Link {
  name: string
  description: string
  url: string
  favicon: string
}
