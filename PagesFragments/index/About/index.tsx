import { useTranslation } from 'react-i18next'
import { AnimatedBlock } from '../../../components/AnimateBlock/AnimatedBlock'
import { AnimatedText } from '../../../components/AnimatedText/AnimatedText'
import { BlockLayout } from '../../../components/BlockLayout'
import { useAboutData } from '../../../hooks/useFakeData/useFakeData'
import Photo from '../../../public/photo.jpg'
import css from './About.module.scss'


export const IndexAbout = () => {
	const { t } = useTranslation()

	const { listArray, title } = useAboutData()

	const PhotoBlock = () => (
		<AnimatedBlock>
			<div>
				<img src={Photo.src} className={css.photo} />
			</div>
		</AnimatedBlock>
	)

	const Title = () => (
		<AnimatedBlock plus={.1}>
			<h1><AnimatedText text={`<h1> ${t('main.title')} </h1>`} formatted={true} loop={false} deleting={false} withoutCursor={false} /></h1>
		</AnimatedBlock>
	)

	const About = () => (
		<AnimatedBlock>
			<p>{t('main.about')}</p>
		</AnimatedBlock>
	)

	const List = () => (
		<ul className={css.list}>
			{listArray.map((elem, i) => (
				<AnimatedBlock plus={.1 * i} key={i}>
					<li>{elem}</li>
				</AnimatedBlock>
			))}
		</ul>
	)

	const Need = () => (
		<AnimatedBlock plus={.2}>
			<p>{t('main.need')}</p>
		</AnimatedBlock>
	)

	return (
		<BlockLayout title={title}>
			<div className={css.main}>
				<PhotoBlock />
				<div>
					<Title />
					<About />
					<List />
					<Need />
				</div>
			</div>
		</BlockLayout>

	)
}