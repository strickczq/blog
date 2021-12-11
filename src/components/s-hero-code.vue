<script setup lang="ts">
defineProps<{
  heroCode: string
}>()
</script>

<template>
  <div w-full h-40 bg-page flex justify-center items-center>
    <span
      text="lg md:2xl transparent"
      font="bold mono"
      whitespace-pre-wrap
      bg="clip-text gradient-to-br"
      from-emerald-600
      dark:from-emerald-300
      via-cyan-600
      dark:via-cyan-300
      to-neutral-300
      dark:to-white
    >
      {{ heroCode }}
    </span>
  </div>
</template>
