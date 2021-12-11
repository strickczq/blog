<script setup lang="ts">
const color = computed(() => (isDark.value ? '#18181b' : '#ffffff'))

useHead({
  title: site.title,
  meta: [
    { name: 'apple-mobile-web-app-title', content: site.title },
    { name: 'theme-color', content: color },
    { name: 'msapplication-TileColor', content: color },

    { property: 'og:site_name', content: site.title },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: site.title },

    { name: 'description', content: site.description },
    { property: 'og:description', content: site.description },
  ],
})
</script>

<template>
  <router-view />
</template>

<style src="uno.css" />
<style src="@unocss/reset/tailwind.css" />
<style src="~/styles/index.css" />
