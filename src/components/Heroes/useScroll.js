import { useEffect, useState } from 'react'

const SCROLL_DEFAULTS = typeof window === 'undefined' ? { scrollX: 0, scrollY: 0 } : window

export default function useScroll() {
  const [scroll, setScroll] = useState({
    scrollX: SCROLL_DEFAULTS.scrollX,
    scrollY: SCROLL_DEFAULTS.scrollY,
  })
  useEffect(() => {
    const scrollListener = () => {
      setScroll({ scrollX: Math.max(window.scrollX), scrollY: Math.max(window.scrollY) })
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', scrollListener)
      return () => window.removeEventListener('scroll', scrollListener)
    }

    return
  })
  return scroll
}
