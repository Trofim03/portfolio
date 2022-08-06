import { useState } from "react"
import { useTranslation } from "react-i18next"


export const ChangeThemeButton = () => {
  const { t } = useTranslation()
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  if (document) {

    const themeHandler = () => {
      theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    document.body.dataset.theme = theme

    return (
      <button onClick={() => themeHandler()}>
        {t(`current_theme`)}{t(`current_theme_${theme}`)}
      </button>
    )
  } else {
    return <></>
  }
}