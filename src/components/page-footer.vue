<script setup lang="ts">
const copyrightYear = useCopyrightYear(site.startYear)
</script>

<template>
  <footer
    flex="~ col"
    m="x-auto t-3 md:t-8"
    w-full
    max-w-3xl
    p="x-4 md:x-6 b-[env(safe-area-inset-bottom)]"
    border="t separator"
  >
    <div flex="~ row" justify-between items-center h="12 md:14">
      <p flex="~ row gap-1" text="xs secondary">
        <span>&copy; {{ copyrightYear }} {{ site.author }}</span>

        <template v-if="false">
          <span>|</span>
          <span>
            <a target="_blank" href="https://beian.miit.gov.cn" title="Beian">
              {{ site.beian }}
            </a>
          </span>
        </template>
      </p>

      <p flex="~ row gap-3" text="xs secondary">
        <span>{{ $t('footer.powered-by') }}</span>
        <a target="_blank" href="https://vercel.com" title="Vercel">
          <div i-simple-icons-vercel />
        </a>
        <a target="_blank" href="https://vitejs.dev" title="ViteJS">
          <div i-simple-icons-vite />
        </a>
        <a target="_blank" href="https://vuejs.org" title="VueJS">
          <div i-simple-icons-vuedotjs />
        </a>
        <a target="_blank" href="https://uno.antfu.me" title="UnoCSS">
          <div i-simple-icons-unocss />
        </a>
      </p>
    </div>
  </footer>
</template>
