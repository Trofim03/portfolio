import { Container } from '../Container/Container'
import css from './Header.module.scss'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { ChangeLanguageButton } from '../ChangeLanguageButton/ChangeLanguageButton';
import { AnimatedBlock } from '../AnimateBlock/AnimatedBlock';
import { useEffect, useRef } from 'react';
import { ChangeThemeButton } from '../ChangeThemeButton/ChangeThemeButton';

export function Header() {
  const { t } = useTranslation();

  const ref = useRef(null)

  useEffect(() => {
    const root = document.getElementById('__next')
    if (ref.current && root) {
      root.style.paddingBottom = window.getComputedStyle(ref.current).height;
    }
  }, [ref.current])

  const links = [{ name: t("header.main"), link: "/" }, { name: t("header.portfolio"), link: "/portfolio" }]

  return (
    <header className={css.header} ref={ref}>
      <Container className={css.container}>
        {/* <nav className={css.nav}>
          {links.map((link, i) => (
            <AnimatedBlock plus={.1 * i} key={link.link + i}>
              <Link href={link.link}><a className={css.link}>{link.name}</a></Link>
            </AnimatedBlock>
          ))}
        </nav> */}
        <div className={css.btns}>
          <ChangeThemeButton />
          <ChangeLanguageButton />
        </div>
      </Container>
    </header>
  )
}