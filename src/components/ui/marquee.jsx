import React from 'react'
import { cn } from '@/lib/utils'

const Marquee = ({ children, className, reverse = false, pauseOnHover = false }) => {
  const items = React.Children.toArray(children)

  return (
    <div className={cn('group relative flex h-full w-full overflow-hidden [--marquee-duration:26s]', className)}>
      <div className={cn(
        'flex min-h-max w-full flex-col gap-5 animate-[marquee-vertical_var(--marquee-duration)_linear_infinite]',
        reverse && '[animation-direction:reverse]',
        pauseOnHover && 'group-hover:[animation-play-state:paused]',
      )}>
        {items.map((item, index) => React.cloneElement(item, { key: `first-${index}` }))}
        {items.map((item, index) => React.cloneElement(item, { key: `second-${index}`, 'aria-hidden': true }))}
      </div>
    </div>
  )
}

export { Marquee }
