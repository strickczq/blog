'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'
import { site } from '~/lib/consts'

export function Comment() {
  const { theme } = useTheme()

  return (
    <Giscus
      id="comments"
      repo={site.giscus.repo}
      repoId={site.giscus.repoId}
      category={site.giscus.category}
      categoryId={site.giscus.categoryId}
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="bottom"
      theme={theme === 'dark' ? 'dark' : 'light'}
      lang="zh-CN"
    />
  )
}
