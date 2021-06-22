import React, { useEffect, useRef, useState } from 'react'

const HOVER_DEBOUNCE_MS = 100

export function disableMouseEvent(event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}

export const NavSubMenuLink = ({ name, videoName }) => {
  const playerRef = useRef(null)

  const [isHovering, setIsHovering] = useState(false)
  const [shouldPlay, setShouldPlay] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    if (isHovering) {
      const timeout = setTimeout(() => setShouldPlay(true), HOVER_DEBOUNCE_MS)
      return () => {
        clearTimeout(timeout)
        setShouldPlay(false)
      }
    }

    return undefined
  }, [isHovering])

  useEffect(() => {
    if (shouldPlay) {
      playerRef.current.play().catch(() => {})
      return () => {
        playerRef.current.pause()
        // playerRef.current.currentTime = 0
        // playerRef.current.load()
      }
    }

    return undefined
  }, [shouldPlay, hasLoaded])

  const onMouseEnter = () => setIsHovering(true)
  const onMouseLeave = () => setIsHovering(false)
  const onLoad = () => setHasLoaded(true)

  return (
    <li>
      <a href="#" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <video onLoad={onLoad} src={videoName} type="video/mp4" muted loop ref={playerRef} onContextMenu={disableMouseEvent} />
        <span>{name}</span>
      </a>
    </li>
  )
}

export default NavSubMenuLink
