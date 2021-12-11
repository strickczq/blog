<route lang="yaml">
meta:
  layout: default
</route>

<template>
  <page-main>
    <section flex="~ col">
      <div class="markdown">
        <h1>关于</h1>
        <p>欢迎来到 Strick 的小站～</p>
        <p>
          本博客已开源在
          <a target="_blank" href="https://github.com/strickczq/blog">GitHub</a>
          ，详情见
          <router-link to="/posts/blog-init">这篇博文</router-link>
          。
        </p>
      </div>

      <div class="markdown" pos="relative">
        <h2>我</h2>
        <img
          pos="absolute top-8 right-0"
          rounded-full
          w-24
          h-24
          src="/android-icon-144x144.png"
          alt="avatar"
        />
        <p>
          <code>Strick</code>
          是我的网名
        </p>
        <p>目前是深大计算机在读</p>
      </div>

      <div class="markdown" pos="relative">
        <h3>联系</h3>
      </div>

      <div flex="~ row gap-3 wrap" text="sm secondary">
        <a target="_blank" :href="`mailto:${site.email}`" title="Email">
          <span
            flex="~ row gap-2"
            p-2
            rounded-full
            items-center
            bg-container
            hover:bg-secondary
          >
            <div i-eva-email-outline text-xl />
            Email
          </span>
        </a>
        <a target="_blank" :href="site.telegramUrl" title="Telegram">
          <span
            flex="~ row gap-2"
            p-2
            rounded-full
            items-center
            bg-container
            hover:bg-secondary
          >
            <div i-simple-icons-telegram text-xl />
            Telegram
          </span>
        </a>

        <a target="_blank" :href="site.githubUrl" title="GitHub">
          <span
            flex="~ row gap-2"
            p-2
            rounded-full
            items-center
            bg-container
            hover:bg-secondary
          >
            <div i-simple-icons-github text-xl />
            GitHub
          </span>
        </a>
      </div>
    </section>
  </page-main>
</template>
