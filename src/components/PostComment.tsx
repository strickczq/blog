import Giscus from '@giscus/solid'
import { useStore } from '@nanostores/solid'

import { site } from '~/lib/consts'
import { $theme } from '~/stores/theme'

export function PostComment() {
  const theme = useStore($theme)

  return (
    <Giscus
      repo={site.giscus.repo}
      repoId={site.giscus.repoId}
      category={site.giscus.category}
      categoryId={site.giscus.categoryId}
      strict="1"
      reactions-enabled="1"
      emit-metadata="1"
      input-position="bottom"
      theme={theme()}
      mapping="pathname"
    />
  )
}
