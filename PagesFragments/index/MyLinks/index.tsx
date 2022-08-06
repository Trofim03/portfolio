import { BlockLayout } from '../../../components/BlockLayout';
import { useMyLinksData } from '../../../hooks/useFakeData/useFakeData';
import css from './MyLinks.module.scss';

export const MyLinks = () => {

  const { title, createLinks } = useMyLinksData(css)

  return (
    <BlockLayout title={title}>
      <div className={css.main}>
        {createLinks()}
      </div>
    </BlockLayout>
  )
}