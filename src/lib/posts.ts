import matter from 'gray-matter'
import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { z } from 'zod'

const postDir = path.join(process.cwd(), 'public', 'static', 'posts')
const readPostSource = async (slug: string) => {
  const bundleDir = path.join(postDir, `${slug}.textbundle`)

  // get all `text.*`
  const textAsterisks = (await readdir(bundleDir, { withFileTypes: true })) //
    .filter((dirent) => dirent.name.startsWith('text.'))

  if (textAsterisks.length === 0) {
    throw new Error(`No \`text.*\` found in ${bundleDir}`)
  }
  if (textAsterisks.length > 1) {
    throw new Error(`Multiple \`text.*\` found in ${bundleDir}`)
  }

  const textAsterisk = textAsterisks[0]
  if (textAsterisk.isDirectory()) {
    throw new Error(`\`${textAsterisk.name}\` is a directory in ${bundleDir}`)
  }

  const textPath = path.join(bundleDir, textAsterisk.name)
  return await readFile(textPath, 'utf-8')
}

const frontmatterSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  pubDate: z.string(),
  tags: z
    .array(z.string())
    .optional()
    .default(() => []),
})

export type Frontmatter = z.infer<typeof frontmatterSchema>
export type PostModel = {
  slug: string
  frontmatter: Frontmatter
  source: string
}

export async function getPost(slug: string): Promise<PostModel> {
  const source = await readPostSource(slug)
  const { data } = matter(source)
  return {
    slug,
    frontmatter: frontmatterSchema.parse(data),
    source,
  }
}

export async function getPosts(): Promise<PostModel[]> {
  const dirents = (await readdir(postDir, { withFileTypes: true })) //
    .filter((dirent) => dirent.isDirectory())
    .filter((dirent) => dirent.name.endsWith('.textbundle'))

  return Promise.all(
    dirents.map(async (dirent) => {
      const slug = dirent.name.replace(/\.textbundle$/, '')
      return await getPost(slug)
    }),
  )
}
