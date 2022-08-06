import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import css from './AnimatedBlock.module.scss';

interface AnimatedBlockProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  plus?: number;
}

const variants = {
  initial: {
    opacity: 0,
    y: 25
  },
  animate: {
    opacity: 1,
    y: 0
  }
}

export function AnimatedBlock({ children, className = '', plus = 0 }: AnimatedBlockProps) {

  const [wasInView, setWasInView] = useState(false)
  const [newClassName, setNewClassName] = useState(`${className} ${css.block}`)

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setWasInView(true)
    }
  }, [inView])

  useEffect(() => {
    if (wasInView) {
      setTimeout(() => {
        setNewClassName(`${className} ${css.block} ${css.wasInView}`)
      }, plus * 1000)
    }
  }, [wasInView])

  return (
    <div className={newClassName} ref={ref}>
      {children}
    </div>
  )
}