import Link from 'next/link'
import { Comment } from '~/components/comment'

import { Typo } from '~/components/typo'
import { dayjsExt } from '~/lib/dayjs-ext'
import { compileMdx } from '~/lib/mdx'
import { getPost, getPosts } from '~/lib/posts'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug.split('/'),
  }))
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slug = params.slug.join('/')
  const { frontmatter, source } = await getPost(slug)
  const content = await compileMdx(slug, source)

  return (
    <div className="m-16 flex flex-col">
      <Typo.h1>{frontmatter.title}</Typo.h1>

      {frontmatter.description && <Typo.p>{frontmatter.description}</Typo.p>}

      <Typo.p className="flex flex-row items-center gap-2 text-zinc-600">
        <Typo.italic>{dayjsExt(frontmatter.pubDate).fromNow()}</Typo.italic>
        {frontmatter.tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="bg-zinc-200 rounded-full px-2 py-0.5 text-xs font-semibold text-zinc-700"
          >
            {tag}
          </Link>
        ))}
      </Typo.p>

      <Typo.hr />

      <article>{content}</article>

      <div className="mt-8">
        <Comment />
      </div>
    </div>
  )
}
