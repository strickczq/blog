<script setup lang="ts">
import type { Ref } from 'vue'

export interface HeaderAnchor {
  level: number
  data?: {
    title: string
    hash: string
  }
  children: HeaderAnchor[]
  parent?: HeaderAnchor
}

defineProps<{
  anchor: HeaderAnchor
}>()

const activeAnchorHash = inject<Ref<string | undefined>>('activeAnchorHash')
</script>

<template>
  <ul v-if="anchor.children.length > 0" flex="~ col gap-2" text="sm primary">
    <li
      v-for="child in anchor.children"
      :key="child.data?.hash"
      flex="~ col gap-2"
    >
      <router-link
        v-if="child.data"
        :class="activeAnchorHash === child.data.hash && 'text-accent font-bold'"
        hover:text-accent
        :to="child.data.hash"
      >
        {{ child.data.title }}
      </router-link>
      <anchor-item :anchor="child" />
    </li>
  </ul>
</template>

<style scoped lang="postcss">
ul ul {
  @apply ml-4;
}
</style>
