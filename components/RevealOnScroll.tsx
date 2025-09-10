'use client'

import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { ReactNode } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  direction?: 'up' | 'left' | 'right' | 'scale'
  delay?: number
  className?: string
  randomDelay?: boolean
  organic?: boolean
}

export default function RevealOnScroll({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '',
  randomDelay = false,
  organic = true
}: RevealOnScrollProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  })

  const getRevealClasses = () => {
    const baseClasses = className
    const hiddenClass = direction === 'left' ? 'reveal-hidden-left' : 
                       direction === 'right' ? 'reveal-hidden-right' :
                       direction === 'scale' ? 'reveal-hidden-scale' : 
                       'reveal-hidden'
    const visibleClass = direction === 'left' ? 'reveal-visible-left' : 
                        direction === 'right' ? 'reveal-visible-right' :
                        direction === 'scale' ? 'reveal-visible-scale' : 
                        'reveal-visible'
    
    return `${baseClasses} ${isIntersecting ? visibleClass : hiddenClass}`
  }

  const getDelay = () => {
    return delay
  }

  return (
    <div 
      ref={ref} 
      className={getRevealClasses()}
      style={{ 
        transitionDelay: `${getDelay()}ms`,
        willChange: organic ? 'transform, opacity, filter' : 'auto'
      }}
    >
      {children}
    </div>
  )
}
