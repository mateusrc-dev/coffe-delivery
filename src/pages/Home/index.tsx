import { Coffee } from '../../components/Coffee'
import { HeaderContainer } from '../../components/HeaderContainer'
import { Container } from './styles'
import CoffeeOne from '../../assets/Coffee.png'

export function Home() {
  return (
    <Container>
      <HeaderContainer />
      <h1 className="titleHome">Nossos cafés</h1>
      <div className="cofes">
        <Coffee
          tags={['TRADICIONAL']}
          img={CoffeeOne}
          title="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          price="9,90"
        />
      </div>
    </Container>
  )
}
