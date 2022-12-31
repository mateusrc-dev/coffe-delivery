import { HomeContainer, HomeHeader } from './styles'
import Imagem from '../../assets/Imagem.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <HomeHeader>
        <div className="content">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="wrapper">
            <div className="item">
              <div className="icon">
                <ShoppingCart weight="fill" size={16} color="#ffffff" />
              </div>
              <p>Compra simples e segura</p>
            </div>
            <div className="item">
              <div className="icon">
                <Package weight="fill" size={16} color="#ffffff" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className="item">
              <div className="icon">
                <Timer weight="fill" size={16} color="#ffffff" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className="item">
              <div className="icon">
                <Coffee weight="fill" size={16} color="#ffffff" />
              </div>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
        <img src={Imagem} alt="imagem de um copo com o nome coffe delivery" />
      </HomeHeader>
    </HomeContainer>
  )
}
