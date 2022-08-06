import { Container } from './Container/Container'
import { Header } from './Header/Header'

export const MainLayout = ({ children }) => {

  return (
    <div>
      <Header />
      <Container>{children}</Container>
    </div>
  )
}