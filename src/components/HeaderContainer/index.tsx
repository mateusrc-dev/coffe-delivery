import { Container, HomeHeader, ItemContainer } from './styles'
import Imagem from '../../assets/Imagem.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function HeaderContainer() {
  return (
    <Container>
      <HomeHeader>
        <div className="main">
          <div className="content">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <div className="wrapper">
            <ItemContainer variant="#C47F17">
              <div className="icon">
                <ShoppingCart weight="fill" size={16} color="#ffffff" />
              </div>
              <p>Compra simples e segura</p>
            </ItemContainer>
            <ItemContainer variant="#574F4D">
              <div className="icon">
                <Package weight="fill" size={16} color="#ffffff" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </ItemContainer>
            <ItemContainer variant="#DBAC2C">
              <div className="icon">
                <Timer weight="fill" size={16} color="#ffffff" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </ItemContainer>
            <ItemContainer variant="#8047F8">
              <div className="icon">
                <Coffee weight="fill" size={16} color="#ffffff" />
              </div>
              <p>O café chega fresquinho até você</p>
            </ItemContainer>
          </div>
        </div>
        <img src={Imagem} alt="imagem de um copo com o nome coffe delivery" />
      </HomeHeader>
    </Container>
  )
}
