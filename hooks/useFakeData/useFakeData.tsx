import { useTranslation } from "react-i18next"

import icons from './icons';

import { AnimatedBlock } from "../../components/AnimateBlock/AnimatedBlock"
import { cssType, ContactsInputsType, VertLineProps, HorLineProps, ICard } from "./interfaces"

const dateFormat = (date: number) => date > 10 ? date : "0" + date

export function useAboutData() {
  const { t } = useTranslation()

  const title = 'About'

  const listArray = [
    `${t('main.listOne')}`,
    `${t('main.listTwo')}`,
    `${t('main.listThree')}`
  ]

  return { listArray, title }
}

export function useContactsData(css: cssType, openInputs: string[]) {
  const title = "Contacts"

  const inputs: ContactsInputsType = [
    {
      type: "text",
      name: "firstName",
      required: true,
      elem: "input",
      className: (id: string) => `${css.inputBlock} ${openInputs.includes(id) ? css.open : ''}`
    },
    {
      type: "text",
      name: "lastName",
      required: true,
      elem: "input",
      className: (id: string) => `${css.inputBlock} ${openInputs.includes(id) ? css.open : ''}`
    },
    {
      type: "tel",
      name: "phone",
      required: false,
      mask: "+7\ (999) 999 99 99",
      elem: "InputMask",
      className: (id: string) => `${css.inputBlock} ${openInputs.includes(id) ? css.open : ''}`
    },
    {
      type: "email",
      name: "email",
      required: true,
      elem: "input",
      className: (id: string) => `${css.inputBlock} ${openInputs.includes(id) ? css.open : ''}`
    },
    {
      type: "text",
      name: "telegram",
      required: false,
      elem: "input",
      className: (id: string) => `${css.inputBlock} ${openInputs.includes(id) ? css.open : ''}`
    },
    {
      type: "text",
      name: "message",
      required: false,
      elem: "textarea",
      className: (id: string) => `${css.inputBlock} ${css.textareaBlock} ${openInputs.includes(id) ? css.open : ''}`
    },
  ]

  return {
    title,
    inputs
  }
}

export function useExperienceData(css: cssType) {
  const { t } = useTranslation()

  const diffDates = (start: Date, end = new Date()) => Math.ceil(Math.abs(start.getTime() - end.getTime()) / (1000 * 3600 * 24))

  const title = "Experience"

  const points = [
    {
      title: "start",
      start: new Date('2021 02 13'),
      end: new Date('2021 12 28'),
      link: ""
    },
    {
      title: "etalon",
      start: new Date('2021 12 28'),
      end: new Date('2022 02 22'),
      link: 'https://vk.com/etalonidea',
    },
    {
      title: "NC",
      start: new Date('2022 02 23'),
      link: 'https://nordclan.com/',
    },
    {
      title: "now",
      start: new Date(),
      link: '',
    },
  ]

  const VertLine = ({ height }: VertLineProps) => {
    return (
      <div className={css.line} style={{ height }} />
    )
  }
  const HorLine = ({ date, title, link }: HorLineProps) => {
    return (
      <div className={css.point}>
        <div className={css.pointLine}>
          <p>{`${dateFormat(date.getDate())} ${t(`main.dates.${date.getMonth()}`)} ${date.getFullYear()}`}</p>
          <div />
          {link ?
            <a href={link} target="_blank">
              <icons.LinkSvg />
              {t(`main.exp.titles.${title}`)}
            </a>
            :
            <p>{t(`main.exp.titles.${title}`)}</p>
          }
        </div>
      </div>
    )
  }

  return {
    title,
    points,
    VertLine,
    HorLine,
    diffDates
  }
}

export function useStackData(css: cssType) {
  const { t } = useTranslation()

  const title = 'Stack'

  const GetCard = (el: ICard, i: number) => {
    return (
      <AnimatedBlock plus={.1 * i} key={i} className={css.card}>
        <a href={el.link} target="blank">
          {el.icon}
          <p>{el.name}</p>
        </a>
      </AnimatedBlock>
    )
  }

  const mainStackArr: ICard[] = [
    {
      name: 'React',
      icon: <icons.ReactSvg />,
      link: "https://ru.reactjs.org/"
    },
    {
      name: 'Redux',
      icon: <icons.ReduxSvg />,
      link: 'https://redux.js.org/',
    },
    {
      name: 'TypeScript',
      icon: <icons.TSSvg />,
      link: 'https://www.typescriptlang.org/'
    },
  ]

  const secondStackArr: ICard[] = [
    {
      name: 'JavaScript',
      icon: <icons.JSSvg />,
      link: 'https://ru.wikipedia.org/wiki/JavaScript'
    },
    {
      name: 'HTML5',
      icon: <icons.HTMLSvg />,
      link: 'https://ru.wikipedia.org/wiki/HTML5'
    },
    {
      name: 'CSS3',
      icon: <icons.CSSSvg />,
      link: 'https://ru.wikipedia.org/wiki/CSS'
    },
    {
      name: 'Sass',
      icon: <icons.SASSSvg />,
      link: 'https://sass-scss.ru/'
    },
    {
      name: 'Gulp',
      icon: <icons.GulpSvg />,
      link: 'https://gulpjs.com/'
    },
    {
      name: 'WebPack',
      icon: <icons.WebPackSvg />,
      link: 'https://webpack.js.org/'
    },
    {
      name: 'WordPress',
      icon: <icons.WPSvg />,
      link: 'https://wordpress.com/ru/'
    },
    {
      name: 'Node.js',
      icon: <icons.NodeSvg />,
      link: 'https://nodejs.org/en/'
    },
    {
      name: 'Git',
      icon: <icons.GitSvg />,
      link: 'https://ru.wikipedia.org/wiki/Git'
    },
    {
      name: 'Docker',
      icon: <icons.DockerSvg />,
      link: 'https://www.docker.com/'
    },
  ]

  const CreateStack = (stackArr: ICard[], path: string) => (
    <div className={css.stackBlock}>
      <AnimatedBlock className={css.stackTitle}>
        <h2>{t(path)}</h2>
      </AnimatedBlock>
      <ul className={css.cardList}>
        {stackArr.map((el, i) => GetCard(el, i))}
      </ul>
    </div>
  )

  return {
    title,
    mainStackArr,
    secondStackArr,
    CreateStack
  }
}

export function useMyLinksData(css: cssType) {
  const title = "MyLinks"

  const links = [
    {
      link: 'https://github.com/Trofim03',
      icon: <icons.GitLinkSVG />
    },
    {
      link: 'https://vk.com/beautiful_curse',
      icon: <icons.VKLinkSVG />
    },
    {
      link: 'https://api.whatsapp.com/send?phone=79615243191',
      icon: <icons.WhatsAppLinkSVG />
    },
    {
      link: 'https://t.me/TrofimIv',
      icon: <icons.TGLinkSVG />
    },
    {
      link: 'mailto:troxa.5071iv@mail.ru',
      icon: <icons.MailLinkSVG />
    },
  ]

  const createLinks = () => {
    return links.map((link, i) => (
      <AnimatedBlock plus={.1 * i} className={css.link}>
        <a href={link.link} target="_blank" key={i}>
          {link.icon}
        </a>
      </AnimatedBlock>
    ))
  }

  return {
    title,
    createLinks,
  }
}
