<script setup lang="ts">
defineProps<{
  tag: string
}>()
</script>

<template>
  <router-link :to="`/tags/${tag}`">
    <span
      flex
      p="x-2 y-1"
      bg-secondary
      text="xs secondary"
      font-bold
      rounded-full
    >
      {{ $t(`tag.${tag}`) }}
    </span>
  </router-link>
</template>
