import { ShoppingCart } from 'phosphor-react'
import { Button } from '../components/Button'
import { ButtonTwo } from '../components/ButtonTwo'

export function Home() {
  return (
    <div>
      <h1> Olá mundo! </h1>
      <Button variant="primary" variantSvg="colorSvgOne">
        <ShoppingCart weight="fill" />
      </Button>
      <Button variant="secondary" variantSvg="colorSvgTwo">
        <ShoppingCart weight="fill" />
      </Button>
      <ButtonTwo>LABEL</ButtonTwo>
    </div>
  )
}
