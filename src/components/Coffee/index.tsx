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
      <p>{description}</p>
      <div className="finishedBuy">
        <span>R$ {price}</span>
        <span>
          <Minus />
          1
          <Plus />
        </span>
        <Button variant="primary" variantSvg="colorSvgOne">
          <ShoppingCart weight="fill" />
        </Button>
      </div>
    </Container>
  )
}
