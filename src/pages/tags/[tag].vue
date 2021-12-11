<script setup lang="ts">
const props = defineProps<{
  tag: string
}>()

const tagPosts = computed(() =>
  posts.filter(({ tags }) => tags?.includes(props.tag)),
)
</script>

<route lang="yaml">
meta:
  layout: default
</route>

<template>
  <page-main>
    <article class="markdown">
      <h1>{{ $t(`tag.${tag}`) }}</h1>
    </article>

    <section m="y-6 md:y-12">
      <post-list :posts="tagPosts" />
    </section>
  </page-main>
</template>
