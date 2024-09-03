import Link from 'next/link'
import type { IconType } from 'react-icons'
import { SiNextdotjs, SiTailwindcss, SiVercel } from 'react-icons/si'

import { cn } from '~/lib/cn'
import { site } from '~/lib/consts'

const PoweredByIcon: React.FC<{
  title: string
  href: string
  Icon: IconType
}> = ({ title, href, Icon }) => (
  <Link className="hover:text-zinc-500" href={href} title={title}>
    <Icon size={12} />
  </Link>
)

export function Footer() {
  const nowYear = new Date().getFullYear()

  return (
    <footer
      className={cn(
        'flex flex-col items-center',
        'w-full mx-auto',
        'px-4 md:px-6 pb-[env(safe-area-inset-bottom)]',
        'border-t border-zinc-200',
      )}
    >
      <div
        className={cn(
          'w-full max-w-3xl',
          'flex flex-row justify-between items-center',
          'h-10 md:h-12',
          'text-xs text-zinc-600',
        )}
      >
        <div className="flex flex-row gap-1">
          <span>{`© ${site.startYear} - ${nowYear} ${site.author}`}</span>
        </div>

        <div className="flex flex-row gap-3 items-center">
          <span>Powered by</span>
          <PoweredByIcon
            title="Vercel"
            href="https://vercel.com"
            Icon={SiVercel}
          />
          <PoweredByIcon
            title="Next.js"
            href="https://nextjs.org"
            Icon={SiNextdotjs}
          />
          <PoweredByIcon
            title="Tailwind CSS"
            href="https://tailwindcss.com"
            Icon={SiTailwindcss}
          />
        </div>
      </div>
    </footer>
  )
}
