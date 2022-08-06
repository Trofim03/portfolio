import { AnimatedBlock } from "../../../components/AnimateBlock/AnimatedBlock";
import css from './Experience.module.scss'
import { useExperienceData } from '../../../hooks/useFakeData/useFakeData'
import { BlockLayout } from "../../../components/BlockLayout";

export function Experience() {
  const { title, points, VertLine, HorLine, diffDates } = useExperienceData(css)

  return (
    <BlockLayout title={title}>
      <div className={css.content}>
        {points.map((point, i) => {
          return (
            <AnimatedBlock key={i + point.title}>
              <HorLine date={point.start} title={point.title} link={point.link} />
              <VertLine height={diffDates(point.start, point?.end)} />
            </AnimatedBlock>
          )
        })}
      </div>
    </BlockLayout>
  )
}