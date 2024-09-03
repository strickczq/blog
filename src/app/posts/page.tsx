import Link from 'next/link'
import { Typo } from '~/components/typo'
import { dayjsExt } from '~/lib/dayjs-ext'
import { type PostModel, getPosts } from '~/lib/posts'

const GroupHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex flex-row gap-4 items-center text-label-secondary">
    <Typo.p className="break-keep">{title}</Typo.p>
    <Typo.hr />
  </div>
)

const Post: React.FC<{ post: PostModel }> = ({ post }) => (
  <section>
    <Link className="flex flex-col" href={`/posts/${post.slug}`}>
      <Typo.h1>{post.frontmatter.title}</Typo.h1>
      <Typo.p className="text-label-secondary">
        {post.frontmatter.description}
      </Typo.p>
      <Typo.p className="text-label-tertiary">
        {dayjsExt(post.frontmatter.pubDate).fromNow()}
      </Typo.p>
    </Link>
  </section>
)

export default async function Page() {
  const posts = await getPosts()
  const sortedPosts = posts.sort((a, b) =>
    dayjsExt(b.frontmatter.pubDate).isBefore(dayjsExt(a.frontmatter.pubDate))
      ? -1
      : 1,
  )

  return (
    <div className="m-16 flex flex-col">
      <GroupHeader title="从新到旧浏览" />
      {sortedPosts.map((post) => (
        <Post key={post.slug} post={post} />
      ))}
    </div>
  )
}
