'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

const color = 'rgba(14, 165, 233, 0.15)'

export function Spotlight({
  children,
}: {
  children: React.ReactNode
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove: React.MouseEventHandler = ({
    currentTarget,
    clientX,
    clientY,
  }) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className="group relative max-w-md rounded-xl bg-zinc-50 shadow-2xl"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(72px circle at ${mouseX}px ${mouseY}px, ${color}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  )
}
