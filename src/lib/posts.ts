import { getCollection, type CollectionEntry } from 'astro:content'

// biome-ignore format: this should not be formatted
type Split<S extends string, D extends string> =
    string extends S ? string[] :
    S extends '' ? [] :
    S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S]

export type PostId = CollectionEntry<'posts'>['id']
export type PostIdParts = Split<PostId, '.'>
export type PostSlug = PostIdParts[0]
export type PostLocale = PostIdParts[1]
export type PostExt = PostIdParts[2]

export type Post = {
  slug: PostSlug
  locale: PostLocale
  ext: PostExt
  frontmatter: CollectionEntry<'posts'>['data']
  render: CollectionEntry<'posts'>['render']
}

export const allPosts = (await getCollection('posts'))
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
  .map((post) => {
    const [slug, locale, ext] = post.id.split('.') as PostIdParts
    return {
      slug,
      locale,
      ext,
      frontmatter: post.data,
      render: post.render,
    }
  })

const exists = new Set<`${PostLocale}/${PostSlug}`>(
  allPosts.map((post) => `${post.locale}/${post.slug}` as const),
)

export function hasPost(slug: PostSlug, locale: PostLocale): boolean {
  return exists.has(`${locale}/${slug}`)
}
