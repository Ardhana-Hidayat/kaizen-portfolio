// src/components/CustomCursor.jsx
import { useEffect, useRef, useState } from 'react'

const TRAIL_LENGTH = 10

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const trailsRef = useRef([])
  const posRef = useRef({ x: -100, y: -100 })
  const trailPosRef = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 }))
  )
  const rafRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.body.style.cursor = 'none'

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    // Hover detect on interactive elements
    const onOverInteractive = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select')) {
        setHovering(true)
      }
    }
    const onOutInteractive = () => setHovering(false)

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onOverInteractive)
    document.addEventListener('mouseout', onOutInteractive)

    // Animation loop
    const animate = () => {
      const target = posRef.current
      const trails = trailPosRef.current

      // Update trail positions (each follows the previous)
      trails[0].x += (target.x - trails[0].x) * 0.4
      trails[0].y += (target.y - trails[0].y) * 0.4

      for (let i = 1; i < TRAIL_LENGTH; i++) {
        trails[i].x += (trails[i - 1].x - trails[i].x) * 0.4
        trails[i].y += (trails[i - 1].y - trails[i].y) * 0.4
      }

      // Apply positions
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${target.x}px, ${target.y}px)`
      }
      trailsRef.current.forEach((el, i) => {
        if (!el) return
        const progress = 1 - i / TRAIL_LENGTH
        el.style.transform = `translate(${trails[i].x}px, ${trails[i].y}px) scale(${progress})`
        el.style.opacity = String(progress * 0.35)
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      document.body.style.cursor = ''
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onOverInteractive)
      document.removeEventListener('mouseout', onOutInteractive)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          willChange: 'transform',
          transition: 'opacity 0.2s',
          opacity: visible ? 1 : 0,
        }}
      >
        {/* Outer ring */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) scale(${clicking ? 0.7 : hovering ? 1.8 : 1})`,
            width: hovering ? '36px' : '28px',
            height: hovering ? '36px' : '28px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.5)',
            transition: 'width 0.2s, height 0.2s, transform 0.15s',
          }}
        />
        {/* Inner dot */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) scale(${clicking ? 0.5 : 1})`,
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            backgroundColor: 'white',
            transition: 'transform 0.1s',
          }}
        />
      </div>

      {/* Trail dots */}
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { trailsRef.current[i] = el }}
          className="fixed top-0 left-0 pointer-events-none z-[99998]"
          style={{
            willChange: 'transform, opacity',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'white',
            marginTop: '-3px',
            marginLeft: '-3px',
          }}
        />
      ))}
    </>
  )
}
