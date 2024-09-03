import Link from 'next/link'
import { twc } from 'react-twc'
import { Spotlight } from '~/components/spotlight'
import { ThemeSwitch } from '~/components/theme-switch'

const Capsule = twc.div`rounded-full overflow-hidden border border-gray-300`
const StyledLink = twc(Link)`px-4 py-2 transition-colors hover:text-blue-400`

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 flex justify-center items-center text-sm font-medium">
      <Capsule>
        <Spotlight>
          <nav className="flex flex-row px-4">
            <StyledLink href="/">首页</StyledLink>
            <StyledLink href="/posts">文章</StyledLink>
            <ThemeSwitch />
          </nav>
        </Spotlight>
      </Capsule>
    </header>
  )
}
