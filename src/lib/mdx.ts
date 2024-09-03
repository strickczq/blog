import { compileMDX } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import remarkToc from 'remark-toc'

import { Typo } from '~/components/typo'
import { rehypeRewriteSrc } from '~/lib/rehype-rewrite-src'

export async function compileMdx(slug: string, source: string) {
  const { content } = await compileMDX({
    source,
    components: Typo,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkToc],
        rehypePlugins: [
          [rehypePrettyCode, { theme: 'one-dark-pro' }],
          [rehypeRewriteSrc, { rewrite: rewrite(slug) }],
        ],
      },
    },
  })
  return content
}

/// possible paths:
///   - absolute paths:
///     - `https://example.com/test.png` -> `https://example.com/test.png`
///     - `/assets/test.png` -> `/assets/test.png`
///   - relative paths:
///     - `assets/test.png` -> `/static/posts/${slug}.textbundle/assets/test.png`
///     - `./assets/test.png` -> `/static/posts/${slug}.textbundle/assets/test.png`
const rewrite = (slug: string) => (path: string) => {
  // absolute paths
  if (path.startsWith('http') || path.startsWith('/')) {
    return path
  }

  // relative paths
  const transformed = path.startsWith('./') ? path.slice(2) : path
  return `/static/posts/${slug}.textbundle/${transformed}`
}
