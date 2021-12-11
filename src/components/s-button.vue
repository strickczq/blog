<script setup lang="ts">
defineProps<{
  type: 'plain' | 'tinted' | 'filled'
  text: string
}>()

defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button
    rounded-full
    :class="[
      type === 'plain' && 'text-accent',
      type === 'tinted' && 'text-accent bg-container',
      type === 'filled' && 'text-white bg-accent',
    ]"
    @click="$emit('click')"
  >
    <span flex m="x-3 y-1" text-sm>
      {{ text }}
    </span>
  </button>
</template>
