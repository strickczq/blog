<script setup lang="ts">
const { toggleLocale } = useLocale()
</script>

<template>
  <header
    pos="fixed top-0 inset-x-0"
    z-10
    flex="~ row"
    items-center
    h-12
    p="x-4 md:x-6"
    backdrop-blur-md
    border="b separator"
    text="base secondary"
  >
    <div pos="absolute inset-0" z--1 bg-page opacity-80 />

    <nav flex="~ row gap-3" items-center text-sm>
      <router-link
        v-for="name in ['home', 'about', 'links']"
        :key="name"
        :to="name === 'home' ? '/' : `/${name}`"
      >
        <span p-2 rounded-md hover:bg-secondary>
          {{ $t(`button.${name}`) }}
        </span>
      </router-link>
    </nav>

    <nav ml-auto flex="~ row gap-3" items-center>
      <button
        p-1
        rounded-md
        hover:bg-secondary
        :title="$t('button.toggle-mode')"
        @click="toggleDark()"
      >
        <div i-carbon-moon dark:i-carbon-sun />
      </button>

      <button
        p-1
        rounded-md
        hover:bg-secondary
        :title="$t('button.toggle-lang')"
        @click="toggleLocale()"
      >
        <div i-carbon-language />
      </button>
    </nav>
  </header>
</template>
