import TypeIt from "typeit-react";

import css from './AnimatedText.module.scss'

interface AnimatedTextProps {
  text: string;
  formatted: boolean;
  loop?: boolean;
  deleting?: boolean;
  withoutCursor?: boolean;
}

export function AnimatedText({ text, formatted = false, loop = true, deleting = true, withoutCursor = true }: AnimatedTextProps) {
  const options = {
    speed: 100,
    waitUntilVisible: true,
    loop: loop
  }

  const handler = (instance) => {
    const newText = formatted ? text.replaceAll('<', '&lt;').replaceAll('>', '&gt;') : text
    if (deleting) {
      instance.type(newText).pause(1000).delete(text.length).pause(500);
    } else {
      instance.type(newText)
    }

    return instance;
  }

  return (
    <TypeIt options={options} getBeforeInit={handler} className={withoutCursor ? css.cursorOff : ""} />
  )
}