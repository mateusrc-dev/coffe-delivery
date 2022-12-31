import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Button } from '../Button'
import { Container } from './styles'

interface CoffeeProps {
  tags: string[]
  title: string
  description: string
  price: string
  img: string
}

export function Coffee({ tags, title, description, price, img }: CoffeeProps) {
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
          <button>
            <Minus color="#8047F8" weight="fill" />
          </button>
          1
          <button>
            <Plus color="#8047F8" weight="fill" />
          </button>
        </span>
        <Button variant="primary" variantSvg="colorSvgOne">
          <ShoppingCart weight="fill" />
        </Button>
      </div>
    </Container>
  )
}
