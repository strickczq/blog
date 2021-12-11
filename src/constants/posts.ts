export const posts: Post[] = Object.entries(
  import.meta.glob<FrontMatter>('../pages/posts/*.md', {
    eager: true,
  }),
)
  .map(([path, frontmatter]) => {
    // ../pages/posts/**/*.md -> /posts/**/*
    path = path.match(/\.\.\/pages(\/posts\/.*)\.md$/)![1]
    console.log(path)
    return { path, ...frontmatter }
  })
  .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
