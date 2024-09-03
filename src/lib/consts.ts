export interface Friend {
  name: string
  description: string
  url: string
  favicon: string
}

export const site = {
  url: 'https://strick.me',
  title: "Strick's Blog",
  description: 'todo',
  author: 'Strick',
  startYear: 2022,
  contact: {
    email: 'strickczq@gmail.com',
    telegram: 'https://t.me/strickczq',
    github: 'https://github.com/strickczq',
  },
  giscus: {
    repo: 'strickczq/blog',
    repoId: 'R_kgDOGhA72g',
    category: 'Announcements',
    categoryId: 'DIC_kwDOGhA72s4CRZZG',
  },
  friends: <Friend[]>[],
  ossBaseUrl: 'https://object.strick.me/posts',
} as const
