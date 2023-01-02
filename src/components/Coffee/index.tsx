import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Button } from '../Button'
import { Container } from './styles'
import { useContext, useEffect, useState } from 'react'
import { RequestContext } from '../../contexts/contextRequest'

interface CoffeeProps {
  tags: string[]
  title: string
  description: string
  price: string
  img: string
  handleNewRequest: (
    title: string,
    price: string,
    img: string,
    amount: number,
  ) => void
}

export function Coffee({
  tags,
  title,
  description,
  price,
  img,
  handleNewRequest,
}: CoffeeProps) {
  const [amount, setAmount] = useState<number>(1)
  const { request, handleAmount } = useContext(RequestContext)

  function handleClick() {
    handleNewRequest(title, price, img, amount)
  }

  function handleAmountAdd() {
    setAmount((state) => state + 1)
    handleAmount(amount + 1, img)
  }

  function handleAmountSub() {
    if (amount === 1) {
      return amount
    } else {
      setAmount((state) => state - 1)
      handleAmount(amount - 1, img)
    }
  }

  const requestCurrent: any = request.find((item) => item.img === img)

  useEffect(() => {
    if (requestCurrent) {
      setAmount(requestCurrent.amount)
    }
  }, [amount, requestCurrent])

  return (
    <Container>
      <img className="img" src={img} alt="imagem do café" />
      <div className="tags">
        {tags.map((tag) => (
          <div className="tag" key={String(tag)}>
            <p>{tag}</p>
          </div>
        ))}
      </div>
      <h2>{title}</h2>
      <p className="description">{description}</p>
      <div className="finishedBuy">
        <span className="price">
          R$ <span className="Price">{price}</span>
        </span>
        <span className="amountItems">
          <button onClick={handleAmountSub}>
            <Minus color="#8047F8" weight="fill" />
          </button>
          {requestCurrent ? requestCurrent?.amount : amount}
          <button onClick={handleAmountAdd}>
            <Plus color="#8047F8" weight="fill" />
          </button>
        </span>
        <Button
          onClick={handleClick}
          variant="primary"
          variantSvg="colorSvgOne"
          disabled={!!requestCurrent}
        >
          <ShoppingCart weight="fill" />
        </Button>
      </div>
    </Container>
  )
}
