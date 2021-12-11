<script setup lang="ts">
import GiscusComponent from '@giscus/vue'

const { locale } = useLocale()

defineProps<{
  frontmatter: FrontMatter
}>()
</script>

<template>
  <giscus-component
    host="https://giscus.app"
    :repo="site.giscus.repo"
    :repo-id="site.giscus.repoId"
    :category="site.giscus.category"
    :category-id="site.giscus.categoryId"
    strict="1"
    reactions-enabled="1"
    emit-metadata="1"
    input-position="bottom"
    mapping="specific"
    loading="lazy"
    :term="frontmatter.term"
    :theme="isDark ? 'dark' : 'light'"
    :lang="locale"
  />
</template>
