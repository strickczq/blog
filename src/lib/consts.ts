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
  friends: <Friend[]>[
    {
      name: 'Hailay',
      description: '一个喜欢玩计算机的理想主义者',
      url: 'https://hailay.site',
      favicon: 'https://hailay.site/favicon.ico',
    },
  ],
} as const
