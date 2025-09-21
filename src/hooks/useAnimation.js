import { useState, useEffect, useCallback } from 'react'

export function useAnimation() {
  const [isAnimating, setIsAnimating] = useState(true)
  const [animationSpeed, setAnimationSpeed] = useState(1)
  const [danceMode, setDanceMode] = useState('normal') // 'normal', 'slow', 'fast', 'crazy'

  const toggleAnimation = useCallback(() => {
    setIsAnimating(prev => !prev)
  }, [])

  const changeSpeed = useCallback((speed) => {
    setAnimationSpeed(speed)
  }, [])

  const changeDanceMode = useCallback((mode) => {
    setDanceMode(mode)
    switch (mode) {
      case 'slow':
        setAnimationSpeed(0.5)
        break
      case 'fast':
        setAnimationSpeed(1.5)
        break
      case 'crazy':
        setAnimationSpeed(2)
        break
      default:
        setAnimationSpeed(1)
    }
  }, [])

  // 키보드 단축키 지원
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key.toLowerCase()) {
        case ' ':
          event.preventDefault()
          toggleAnimation()
          break
        case '1':
          changeDanceMode('normal')
          break
        case '2':
          changeDanceMode('slow')
          break
        case '3':
          changeDanceMode('fast')
          break
        case '4':
          changeDanceMode('crazy')
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [toggleAnimation, changeDanceMode])

  return {
    isAnimating,
    animationSpeed,
    danceMode,
    toggleAnimation,
    changeSpeed,
    changeDanceMode
  }
}