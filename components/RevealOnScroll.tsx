'use client'

import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { ReactNode } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  direction?: 'up' | 'left' | 'right' | 'scale'
  delay?: number
  className?: string
}

export default function RevealOnScroll({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: RevealOnScrollProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px 0px -80px 0px',
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

  return (
    <div 
      ref={ref} 
      className={getRevealClasses()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
