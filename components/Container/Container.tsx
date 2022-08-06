import css from './Container.module.scss'

interface ContainerProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={css.container + ` ${className ?? ''}`}>
      {children}
    </div>
  )
}