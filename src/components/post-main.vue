<script setup lang="ts">
defineProps<{
  frontmatter: FrontMatter
}>()

const dayjs = useLocalDayjs()
</script>

<template>
  <div flex="~ col">
    <article class="markdown">
      <h1>{{ frontmatter.title }}</h1>
    </article>

    <p flex="~ row gap-x-6 gap-y-2 wrap" items-center text="sm secondary">
      <em v-if="frontmatter.createdAt" flex="~ row gap-1" items-center>
        <div i-carbon-pen />
        {{
          $t('post.created-at', {
            time: dayjs().to(frontmatter.createdAt),
          })
        }}
      </em>

      <em v-if="frontmatter.updatedAt" flex="~ row gap-1" items-center>
        <div i-carbon-renew />
        {{
          $t('post.updated-at', {
            time: dayjs().to(frontmatter.updatedAt),
          })
        }}
      </em>

      <span
        v-if="frontmatter.tags && frontmatter.tags.length > 0"
        flex="~ row gap-1"
        items-center
      >
        <div i-carbon-tag-group />
        <s-tag v-for="tag in frontmatter.tags" :key="tag" :tag="tag" />
      </span>
    </p>

    <slot />
  </div>
</template>
