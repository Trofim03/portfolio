import { IBlockLayout } from './BlockLayout'
import { Container } from './Container/Container'
import { Header } from './Header/Header'

export const MainLayout = ({ children }: IBlockLayout) => {

  return (
    <div>
      <Header />
      <Container>{children}</Container>
    </div>
  )
}