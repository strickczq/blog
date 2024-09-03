import type * as hast from 'hast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

export type RehypeRewriteSrcOptions = {
  rewrite: (url: string) => string
}

export const rehypeRewriteSrc: Plugin<[RehypeRewriteSrcOptions], hast.Root> = ({
  rewrite,
}) => {
  return (tree: hast.Root) => {
    visit(tree, 'element', (node) => {
      switch (node.tagName) {
        case 'img':
          node.properties.src = rewrite(node.properties.src as string)
          break
        case 'video':
          node.properties.src = rewrite(node.properties.src as string)
          break
        case 'a':
          node.properties.href = rewrite(node.properties.href as string)
          break
      }
    })
  }
}
