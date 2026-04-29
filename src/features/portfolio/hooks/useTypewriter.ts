import { useEffect, useState } from 'react'

interface TypewriterOptions {
  speed?: number
  startDelay?: number
}

export function useTypewriter(text: string, options: TypewriterOptions = {}) {
  const { speed = 70, startDelay = 150 } = options
  const [value, setValue] = useState('')

  useEffect(() => {
    let index = 0
    let intervalId: number | undefined

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1
        setValue(text.slice(0, index))

        if (index >= text.length && intervalId) {
          window.clearInterval(intervalId)
        }
      }, speed)
    }, startDelay)

    return () => {
      window.clearTimeout(timeoutId)

      if (intervalId) {
        window.clearInterval(intervalId)
      }
    }
  }, [speed, startDelay, text])

  return value
}
