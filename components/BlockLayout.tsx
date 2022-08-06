import { AnimatedText } from "./AnimatedText/AnimatedText"

export interface IBlockLayout {
  children: JSX.Element | JSX.Element[];
  title?: string
}

export const BlockLayout = ({ children, title }: IBlockLayout) => (
  <div>
    <AnimatedText text={`<${title}>`} formatted={true} loop={false} deleting={false} />
    {children}
    <AnimatedText text={`</${title}>`} formatted={true} loop={false} deleting={false} />
  </div>
)