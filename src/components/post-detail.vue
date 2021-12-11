<script setup lang="ts">
const props = defineProps<{
  frontmatter: FrontMatter
}>()

usePostHead(props.frontmatter)
const isXL = useMediaQuery('(min-width:1280px)')
</script>

<template>
  <section>
    <img
      v-if="frontmatter.heroImage"
      :src="frontmatter.heroImage"
      alt="heroImage"
    />
    <s-hero-code
      v-else-if="frontmatter.heroCode"
      :hero-code="frontmatter.heroCode"
    />
  </section>

  <div flex="~ col xl:row justify-between">
    <aside xl:min-w-64 xl:flex-1 />

    <page-main>
      <section>
        <post-main :frontmatter="frontmatter">
          <hr />

          <template v-if="!isXL">
            <post-outline />
            <hr />
          </template>

          <article class="markdown">
            <slot />
          </article>
        </post-main>
      </section>

      <section m="t-6 md:t-16">
        <post-comment :frontmatter="frontmatter" />
      </section>
    </page-main>

    <aside v-if="isXL" flex-1 pos="relative" flex="~ col" items-center>
      <div w-64 pos="sticky top-64">
        <post-outline />
      </div>
    </aside>
  </div>
</template>
