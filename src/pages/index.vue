<route lang="yaml">
meta:
  layout: default
</route>

<template>
  <page-main>
    <article class="markdown">
      <h1>{{ $t('home.title') }}</h1>
      <p>{{ $t('home.desc') }}</p>
    </article>

    <section m="y-6 md:y-12">
      <post-list :posts="posts" />
    </section>
  </page-main>
</template>
