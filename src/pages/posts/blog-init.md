---
title: '博客初始化'
term: 'blog-init'
description: '鸽了挺久，终于搭建了个还算「能用」的博客。'
heroCode: "fn init() {\n    println!(\"Hello, my blog!\");\n}"
createdAt: '2022-09-15'
tags: ['blog', 'frontend', 'vue']
---

鸽了挺久，终于搭建了个还算「能用」的博客。
虽然还有许多不完善的地方，但是感觉目前这样还蛮符合自己的想法的。

本博客已开源在 [GitHub](https://github.com/strickczq/blog) 。

## 技术栈

没有用现成的博客框架，而是利用自己积累已久的前端知识，
基于 [vitesse](https://github.com/antfu/vitesse) 这个 `Vue` 模版，自己搭建了一套。

主要使用的技术栈如下:

- UI 框架 - [Vue 3](https://vuejs.org/) (`setup` + `组合式 API` + `ref 语法糖`)
- 构建工具 - [Vite](https://vitejs.dev) 和 `Vite SSG` `AutoImports` 等众多插件
- CSS 引擎 - [UnoCSS](https://github.com/antfu/unocss) (`Attributify` 属性化模式 + `Iconify` 图标库)
- 评论系统 - [Giscus](https://giscus.app/)
- 部署平台 - [Vercel](https://vercel.com/)

话说回来，最开始我学的第一个 UI 框架是 `Vue 2`，后来实在是觉得难用，转投 `React` 了。
最近两个月尝试了 `Vue 3` 的 `Composition API`，心智负担大大降低，瞬间爱上了。

#### 静态站点插件

博客网站 SEO 方面是很重要的，尤其是使用了像 `Vue` 这种前端框架。

为了部署的方便，就没有选择 SSR 而是选择了 SSG。

`Vite SSG` 是一个给 `Vue 3` 用的静态站点生成插件。
它相比于 `VitePress`，可以掌控的地方更多。

#### 自动导入插件

之前学 `Swift` 的时候就很羡慕 `Swift` 语言不需要导入一个个的文件。
在同一个工程内，所有的函数和类都是可以直接调用的。
这样的好处就是，不需要关心文件的依赖关系，只需要关注代码本身就行了。

这个语言特性其实对**重构**特别友好，因为你可以随意的**移动**、**重命名**文件，
而不用担心会不会影响到其他文件的依赖关系。
可以很方便地从一个长文件中抽取出一些函数和类，放到另一个文件中。

而在 `JavaScript` 中，有了下面这两个插件，就可以实现类似的功能了。

- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

它们最绝的地方在于，在帮忙自动导入的同时，还能生成 `d.ts` 文件，
这样就不用担心 `TypeScript` 项目中一堆 `any` 了。

#### 页面路由、 布局 和 Markdown 插件

在 `Vue 3` 中，路由的实现方式是通过 `Vue Router` 这个库来实现的。
但是，使用这个库还需要手动管理路由。

除此之外，还有 Markdown 文件的导入问题

- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) -
  根据文件夹结构自动生成路由
- [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) -
  页面复用布局
- [vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-vue-markdown) -
  将 Markdown 文件转换为 Vue 组件，从而被正确渲染

#### CSS 引擎

以前我是用 `TailwindCSS` 的，直到最近发现了 `UnoCSS` 这个项目。它的特点是：

- 速度快！它是基于 `Vite` 的，所以启动速度很快
- 定制性强！各种预设 `preset` 可以直接用

  - [unocss-preset-uno](https://github.com/antfu/unocss/tree/main/packages/preset-uno) -
    默认的 `preset`，包含了大部分常用的功能，兼容 `TailwindCSS` 和 `WindiCSS`
  - [unocss-preset-attributify]() -
    类似 `WindiCSS` 的功能，可以把样式写成 dom 元素的属性
  - [unocss-preset-icons]() -
    可以用类似 `<div i-carbon-logo-github />` 这样来使用图标库，无需导入。（有点 `Swift` 使用 `SF Symbols` 的感觉了）

样式全部都是自己写的，掌控力满满～

## 部署

虽然我有一个备案的域名和服务器，但是我觉得原来的域名有点长，
这次正好在 `Namesilo` 看到了合适的 `.me` 域名，就入手了一个。

不过不知道什么时候开始，`.me` 域名在国内好像不能备案了？

既然没有备案，只能用国外的服务器了，那就用 `Vercel` 吧！

只需要把代码 `push` 到 `GitHub` 上，就能自动触发 `Vercel` 的部署流程，非常方便。
