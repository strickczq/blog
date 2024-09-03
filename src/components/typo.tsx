import { twc } from 'react-twc'

export const Typo = {
  p: twc.p`my-1 realtive`,

  h1: twc.h1`text-2xl font-bold mt-4 my-1`,
  h2: twc.h2`text-xl font-bold mt-3 my-1`,
  h3: twc.h3`text-lg font-bold mt-2 my-1`,
  h4: twc.h4`text-base font-bold mt-1 my-1`,
  a: twc.a`text-blue-600`,

  italic: twc.em`italic`,
  bold: twc.strong`font-bold`,
  underline: twc.u`underline`,
  strike: twc.s`line-through`,
  hr: twc.hr`my-0 w-full border-t border-zinc-200`,

  ul: twc.ul`list-disc pl-4 my-2`,
  ol: twc.ol`list-decimal pl-4 my-2`,
  li: twc.li`my-1`,

  pre: twc.pre`overflow-x-auto p-1 rounded-md group is-pre`,
  code: twc.code`
    font-mono
    p-0.5 group-[.is-pre]:p-0
    rounded-md group-[.is-pre]:rounded-none
    bg-zinc-200 group-[.is-pre]:bg-transparent
  `,

  // NextImage: Image,
}
