import css from './Stack.module.scss';
import { useStackData } from '../../../hooks/useFakeData/useFakeData'
import { BlockLayout } from '../../../components/BlockLayout';

export function Stack() {
  const { title, CreateStack, mainStackArr, secondStackArr } = useStackData(css)

  return (
    <BlockLayout title={title}>
      <div className={css.content}>
        {CreateStack(mainStackArr, 'main.mainStack')}
        {CreateStack(secondStackArr, 'main.secondStack')}
      </div>
    </BlockLayout>
  )
}