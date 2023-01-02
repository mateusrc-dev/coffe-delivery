import { useState } from 'react'
import CoffeeOne from '../../assets/Coffee.png'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
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
import Image from '../../assets/Illustration.svg'

const newRequestFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe seu CPF!'),
  street: zod.string().min(1, 'Escreva o nome da sua rua!'),
  number: zod.string().min(1, 'Insira o número da sua casa!'),
  complement: zod.string().min(0),
  district: zod.string().min(1, 'Insira o nome do seu bairro!'),
  city: zod.string().min(1, 'Insira o nome da sua cidade!'),
  state: zod.string().min(1, 'Insira o nome do seu estado!'),
})

type NewRequestFormData = zod.infer<typeof newRequestFormValidationSchema>

interface Address {
  cep?: string // aqui vai ficar os dados do endereço do cliente
  city?: string
  complement?: string
  district?: string
  number?: string
  state?: string
  street?: string
  finished?: string // aqui vai ficar a informação se a compra finalizou ou não
  payment?: string
}

export function Request() {
  const [click, setClick] = useState(true)
  const [address, setAddress] = useState<Address>({})
  const [payment, setPayment] = useState('')

  console.log(address)

  const { register, reset, handleSubmit, watch } = useForm<NewRequestFormData>({
    resolver: zodResolver(newRequestFormValidationSchema),
    defaultValues: {
      cep: '',
      city: '',
      complement: '',
      district: '',
      number: '',
      state: '',
      street: '',
    },
  })

  function handleCreateNewCycle(data: NewRequestFormData) {
    if (payment.length === 0) {
      alert('Escolha uma forma de pagamento!')
      return
    }
    const newPurchase: Address = {
      cep: data.cep,
      city: data.city,
      complement: data.complement,
      district: data.district,
      number: data.number,
      state: data.state,
      street: data.street,
      payment,
    }
    setAddress(newPurchase)
    reset()
    setClick(false)
  }

  function handlePaymentCredit() {
    setPayment('credit')
  }

  function handlePaymentDebit() {
    setPayment('debit')
  }

  function handlePaymentCash() {
    setPayment('cash')
  }

  const cep = watch('cep')
  console.log(cep)

  return (
    <RequestContainer>
      {click ? (
        <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
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
              <input
                className="cep"
                type="text"
                placeholder="CEP"
                {...register('cep')}
              />
              <input
                className="street"
                type="text"
                placeholder="Rua"
                {...register('street')}
              />
              <div className="numberAndComplement">
                <input
                  className="number"
                  type="text"
                  placeholder="Número"
                  {...register('number')}
                />
                <input
                  className="complement"
                  type="text"
                  placeholder="Complemento                                                   Opcional"
                  {...register('complement')}
                />
              </div>
              <div className="address">
                <input
                  className="district"
                  type="text"
                  placeholder="Bairro"
                  {...register('district')}
                />
                <input
                  className="city"
                  type="text"
                  placeholder="Cidade"
                  {...register('city')}
                />
                <input
                  className="state"
                  type="text"
                  placeholder="UF"
                  {...register('state')}
                />
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
                <button
                  className={payment === 'credit' ? 'active' : 'none'}
                  type="button"
                  onClick={handlePaymentCredit}
                >
                  <CreditCard size={16} color="#8047F8" /> CARTÃO DE CRÉDITO
                </button>
                <button
                  className={payment === 'debit' ? 'active' : 'none'}
                  type="button"
                  onClick={handlePaymentDebit}
                >
                  <Bank size={16} color="#8047F8" /> CARTÃO DE DÉBITO
                </button>
                <button
                  className={payment === 'cash' ? 'active' : 'none'}
                  type="button"
                  onClick={handlePaymentCash}
                >
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
              <button className="confirmRequest" type="submit">
                CONFIRMAR PEDIDO
              </button>
            </div>
          </div>
        </form>
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
