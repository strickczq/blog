<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <page-header />
  <page-main>
    <article class="markdown" flex="~ col" items-center>
      <h1>
        <div i-carbon-warning />
      </h1>
      <h3>
        {{ $t('not-found') }}
      </h3>
      <div mt-3>
        <s-button
          type="tinted"
          :text="$t('button.back')"
          @click="router.back()"
        />
      </div>
    </article>
  </page-main>
  <Footer />
</template>
