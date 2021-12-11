<route lang="yaml">
meta:
  layout: default
</route>

<template>
  <page-main>
    <article class="markdown">
      <h1>友链</h1>
      <p>朋友们的博客</p>
    </article>

    <section m="y-6 md:y-12">
      <link-list :links="site.links" />
    </section>
  </page-main>
</template>
