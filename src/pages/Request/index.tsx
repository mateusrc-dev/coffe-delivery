import CoffeeOne from '../../assets/Coffee.png'
import {
  Minus,
  Plus,
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
  MapPin,
  Timer,
} from 'phosphor-react'
import { RequestContainer } from './styles'
import { useState } from 'react'
import Image from '../../assets/Illustration.svg'

export function Request() {
  const [click, setClick] = useState(true)

  function handleClick() {
    if (click === true) {
      setClick(false)
    } else {
      setClick(true)
    }
  }

  return (
    <RequestContainer>
      {click ? (
        <main>
          <div className="enterData">
            <h2>Complete seu pedido</h2>
            <div className="containerData">
              <div className="informations">
                <MapPinLine size={22} color="#C47F17" />
                <div className="Informations">
                  <h3>Endereço de entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </div>
              <input className="cep" type="text" placeholder="CEP" />
              <input className="street" type="text" placeholder="Rua" />
              <div className="numberAndComplement">
                <input className="number" type="text" placeholder="Número" />
                <input
                  className="complement"
                  type="text"
                  placeholder="Complemento                                                   Opcional"
                />
              </div>
              <div className="address">
                <input className="district" type="text" placeholder="Bairro" />
                <input className="city" type="text" placeholder="Cidade" />
                <input className="state" type="text" placeholder="UF" />
              </div>
            </div>
            <div className="payment">
              <div className="paymentContainer">
                <CurrencyDollar size={22} color="#8047F8" />
                <div className="paymentContainerTwo">
                  <h3>Pagamento</h3>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </div>
              <div className="formOfPayment">
                <button className="credit">
                  <CreditCard size={16} color="#8047F8" /> CARTÃO DE CRÉDITO
                </button>
                <button className="debit">
                  <Bank size={16} color="#8047F8" /> CARTÃO DE DÉBITO
                </button>
                <button className="cash">
                  <Money size={16} color="#8047F8" /> DINHEIRO
                </button>
              </div>
            </div>
          </div>
          <div className="selectedCoffees">
            <h2>Cafés selecionados</h2>
            <div className="ContainerCoffees">
              <div className="coffee">
                <img src={CoffeeOne} alt="imagem do café" />
                <div className="content">
                  <p>Expresso Tradicional</p>
                  <div className="amountAndButton">
                    <span className="amountItem">
                      <button>
                        <Minus color="#8047F8" weight="fill" />
                      </button>
                      1
                      <button>
                        <Plus color="#8047F8" weight="fill" />
                      </button>
                    </span>
                    <button className="button">
                      <Trash size={16} color="#8047F8" /> REMOVER
                    </button>
                  </div>
                </div>
                <span className="price">R$ 9,90</span>
              </div>
              <div className="coffee">
                <img src={CoffeeOne} alt="imagem do café" />
                <div className="content">
                  <p>Expresso Tradicional</p>
                  <div className="amountAndButton">
                    <span className="amountItem">
                      <button>
                        <Minus color="#8047F8" weight="fill" />
                      </button>
                      1
                      <button>
                        <Plus color="#8047F8" weight="fill" />
                      </button>
                    </span>
                    <button className="button">
                      <Trash size={16} color="#8047F8" /> REMOVER
                    </button>
                  </div>
                </div>
                <span className="price">R$ 9,90</span>
              </div>
              <div className="fullItems">
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div className="delivery">
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div className="fullPrice">
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
              <button onClick={handleClick} className="confirmRequest">
                CONFIRMAR PEDIDO
              </button>
            </div>
          </div>
        </main>
      ) : (
        <section className="secondPage">
          <div className="columnOne">
            <h1 className="titleRequestPage">Uhu, pedido confirmado</h1>
            <p className="titleRequestPageTwo">
              Agora é só aguardar que logo o café chegará até você
            </p>
            <div className="requestFinished">
              <div className="inner">
                <div className="itemRequestOne">
                  <div className="svg">
                    <MapPin weight="fill" size={16} color="#fafafa" />
                  </div>
                  <div className="details">
                    <p>
                      Entrega em{' '}
                      <strong>Rua João Daniel Martinelli, 102</strong>
                    </p>
                    <p>Farrapos - Porto Alegre, RS</p>
                  </div>
                </div>
                <div className="itemRequestTwo">
                  <div className="svg">
                    <Timer weight="fill" size={16} color="#fafafa" />
                  </div>
                  <div className="details">
                    <p>Previsão de entrega</p>
                    <p>
                      <strong>20 min - 30 min</strong>
                    </p>
                  </div>
                </div>
                <div className="itemRequestThree">
                  <div className="svg">
                    <CurrencyDollar weight="fill" size={16} color="#fafafa" />
                  </div>
                  <div className="details">
                    <p>Pagamento na entrega</p>
                    <p>
                      <strong>Cartão de Crédito</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={Image} alt="imagem de um motoqueiro fazendo a entrega" />
        </section>
      )}
    </RequestContainer>
  )
}
