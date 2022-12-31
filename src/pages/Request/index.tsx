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
} from 'phosphor-react'
import { RequestContainer } from './styles'

export function Request() {
  return (
    <RequestContainer>
      <div className="enterData">
        <h2>Complete seu pedido</h2>
        <div className="containerData">
          <h3>
            <MapPinLine size={22} color="#C47F17" /> Endereço de entrega
          </h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
          <input className="cep" type="text" placeholder="CEP" />
          <input className="street" type="text" placeholder="Rua" />
          <div className="numberAndComplement">
            <input className="number" type="text" placeholder="Número" />
            <input type="complement" placeholder="Complemento Opcional" />
          </div>
          <div className="address">
            <input className="district" type="text" placeholder="Bairro" />
            <input className="city" type="text" placeholder="Cidade" />
            <input className="state" type="text" placeholder="UF" />
          </div>
        </div>
        <div className="payment">
          <h3>
            <CurrencyDollar size={22} color="#8047F8" /> Pagamento
          </h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <div className="formOfPayment">
            <span className="credit">
              <CreditCard size={16} color="#8047F8" /> CARTÃO DE CRÉDITO
            </span>
            <span className="debit">
              <Bank size={16} color="#8047F8" /> CARTÃO DE DÉBITO
            </span>
            <span className="cash">
              <Money size={16} color="#8047F8" /> DINHEIRO
            </span>
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
              <span>
                <Minus /> 1 <Plus />
              </span>
              <button>
                <Trash size={16} color="#8047F8" /> REMOVER
              </button>
            </div>
            <span>R$ 9,90</span>
          </div>
        </div>
        <div className="fullItems">
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </div>
        <div className="delivery">
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>
      </div>
      <div className="fullPrice">
        <span>Total</span>
        <span>R$ 33,20</span>
      </div>
    </RequestContainer>
  )
}
