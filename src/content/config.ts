import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    heroCode: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
})

export const collections = { posts }
