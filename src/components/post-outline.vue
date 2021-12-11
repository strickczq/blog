<script setup lang="ts">
import { HeaderAnchor } from '~/components/anchor-item.vue'

const anchor = ref<HeaderAnchor>({ level: 1, children: [] })
onMounted(() => {
  let parent: HeaderAnchor = { level: 1, children: [] }
  document
    .querySelectorAll<HTMLHeadingElement>('h2, h3, h4, h5, h6')
    .forEach(el => {
      if (el.textContent && el.id) {
        const level = +el.tagName[1]
        const title = el.textContent.replace(/^#\s*/, '')
        const hash = `#${el.id}`

        if (parent.level < level) {
          // step forward
          while (parent.level !== level - 1) {
            if (parent.children.length === 0) {
              parent.children.push({
                level: parent.level + 1,
                children: [],
                parent,
              })
            }
            parent = parent.children[parent.children.length - 1]
          }
        } else {
          // step backward
          while (parent.level !== level - 1) {
            parent = parent.parent!
          }
        }

        parent.children.push({
          level,
          data: { title, hash },
          children: [],
          parent,
        })
      }
    })

  // step backward to root
  while (parent.level !== 1) {
    parent = parent.parent!
  }

  anchor.value = parent
})

const activeAnchorHash = ref<string | undefined>()
provide('activeAnchorHash', activeAnchorHash)

onMounted(() => {
  const top = 0
  const bottom = window.innerHeight - 256
  const observer = new IntersectionObserver(
    entries => {
      const active = entries.find(e => e.isIntersecting)
      if (active) {
        activeAnchorHash.value = `#${active.target.id}`
      }
    },
    {
      rootMargin: `-${top}px 0px -${bottom}px 0px`,
    },
  )

  document
    .querySelectorAll<HTMLHeadingElement>('h2, h3, h4, h5, h6')
    .forEach((el, index) => {
      if (index === 0) {
        activeAnchorHash.value = `#${el.id}`
      }
      observer.observe(el)
    })
})
</script>

<template>
  <section flex="~ col gap-3" py-2>
    <h3 text-xl font-bold>{{ $t('outline') }}</h3>
    <anchor-item :anchor="anchor" />
  </section>
</template>
