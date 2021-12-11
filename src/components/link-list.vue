<script setup lang="ts">
defineProps<{
  links: Link[]
}>()
</script>

<template>
  <ul flex="~ col gap-6">
    <li v-for="{ name, description, url, favicon } in links" :key="name">
      <a target="_blank" :href="url">
        <s-card>
          <div flex="~ row gap-2 md:gap-4" p="4 md:8">
            <img :src="favicon" :alt="favicon" w-12 h-12 rounded-full />
            <div flex="~ col">
              <span text="base primary" font-bold line-clamp-1 flex-1 mr-2>
                {{ name }}
              </span>
              <span text="sm secondary" line-clamp-2 flex-1 mr-2>
                {{ description }}
              </span>
            </div>
          </div>
        </s-card>
      </a>
    </li>
  </ul>
</template>
