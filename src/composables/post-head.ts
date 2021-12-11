export function usePostHead(frontmatter: FrontMatter) {
  const keywords = frontmatter.tags?.join(',')

  useHead({
    title: frontmatter.title,
    meta: [
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: frontmatter.title },
      { property: 'og:image', content: frontmatter.heroImage },
      { name: 'description', content: frontmatter.description },
      { property: 'og:description', content: frontmatter.description },
      { name: 'keywords', content: keywords },
      { property: 'og:keywords', content: keywords },
      { property: 'article:author', content: site.author },
    ],
    link: [
      { rel: 'preconnect', href: 'https://giscus.app' },
      { rel: 'dns-prefetch', href: 'https://avatars.githubusercontent.com' },
    ],
  })
}
