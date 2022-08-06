import { AnimatedText } from "./AnimatedText/AnimatedText"

interface IBlockLayout {
  children: JSX.Element | JSX.Element[] | string;
  title: string
}

export const BlockLayout = ({ children, title }: IBlockLayout) => (
  <div>
    <AnimatedText text={`<${title}>`} formatted={true} loop={false} deleting={false} />
    {children}
    <AnimatedText text={`</${title}>`} formatted={true} loop={false} deleting={false} />
  </div>
)