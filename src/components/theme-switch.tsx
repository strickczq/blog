'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

const spring = { type: 'spring', stiffness: 700, damping: 30, duration: 2 }

const animation = {
  scale: (v: boolean) => (v ? 1 : 0.8),
  opacity: (v: boolean) => (v ? 1 : 0.6),
  x: (v: boolean) => (v ? -8 : 12),
}

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const isOn = theme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-16 h-9" />
  }

  return (
    <button
      type="button"
      className={
        'transition-colors hover:text-blue-500 rounded-full overflow-hidden w-16 h-9 flex justify-center items-center'
      }
      onClick={() => setTheme(isOn ? 'light' : 'dark')}
    >
      <motion.div
        initial={false}
        animate={{
          opacity: animation.opacity(!isOn),
          x: -animation.x(!isOn),
          scale: animation.scale(!isOn),
        }}
        transition={spring}
      >
        <LuSun size={18} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: animation.opacity(isOn),
          x: animation.x(isOn),
          scale: animation.scale(isOn),
        }}
        transition={spring}
      >
        <LuMoon size={18} />
      </motion.div>
    </button>
  )
}
