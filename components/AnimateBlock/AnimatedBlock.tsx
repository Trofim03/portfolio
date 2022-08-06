import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

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

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setWasInView(true)
    }
  }, [inView])

  return (
    <motion.div className={className} ref={ref} key={`${wasInView}`} variants={variants} initial='initial' animate="animate" transition={{ duration: .3 + plus }}>
      {children}
    </motion.div>
  )
}