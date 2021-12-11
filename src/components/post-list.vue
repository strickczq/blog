<script setup lang="ts">
defineProps<{
  posts: Post[]
}>()

const dayjs = useLocalDayjs()
</script>

<template>
  <ul flex="~ col gap-6">
    <li
      v-for="{
        path,
        title,
        description,
        heroImage,
        heroCode,
        createdAt,
        tags,
      } in posts"
      :key="path"
    >
      <router-link :to="path">
        <s-card>
          <div flex="~ col">
            <img v-if="heroImage" :src="heroImage" w-full h-48 />
            <s-hero-code v-else-if="heroCode" :hero-code="heroCode" />

            <div flex="~ col gap-1" p="4 md:8">
              <p flex="~ row" justify-between>
                <span text="base primary" font-bold line-clamp-1 flex-1 mr-2>
                  {{ title }}
                </span>
                <span text="sm secondary">
                  {{ dayjs().to(createdAt) }}
                </span>
              </p>

              <p flex="~ row" justify-between>
                <span text="sm secondary" line-clamp-2 flex-1 mr-2>
                  {{ description }}
                </span>
                <span flex="~ row gap-1">
                  <s-tag v-for="tag in tags" :key="tag" :tag="tag" />
                </span>
              </p>
            </div>
          </div>
        </s-card>
      </router-link>
    </li>
  </ul>
</template>
