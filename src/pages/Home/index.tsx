import { Coffee } from '../../components/Coffee'
import { HeaderContainer } from '../../components/HeaderContainer'
import { Container } from './styles'
import { useState } from 'react'
import CoffeeOne from '../../assets/Coffee.png'
import Coffee2 from '../../assets/Coffee2.png'
import Coffee3 from '../../assets/Coffee3.png'
import Coffee4 from '../../assets/Coffee4.png'
import Coffee5 from '../../assets/Coffee5.png'
import Coffee6 from '../../assets/Coffee6.png'
import Coffee7 from '../../assets/Coffee7.png'
import Coffee8 from '../../assets/Coffee8.png'
import Coffee9 from '../../assets/Coffee9.png'
import Coffee10 from '../../assets/Coffee10.png'
import Coffee11 from '../../assets/Coffee11.png'
import Coffee12 from '../../assets/Coffee12.png'
import Coffee13 from '../../assets/Coffee13.png'
import Coffee14 from '../../assets/Coffee14.png'

interface Coffees {
  title: string
  price: string
  img: string
  amount: number
}

export function Home() {
  const [request, setRequest] = useState<Coffees[]>([])

  console.log(request)

  function handleNewRequest(
    title: string,
    price: string,
    img: string,
    amount: number,
  ) {
    const newCoffee: Coffees = {
      title,
      price,
      img,
      amount,
    }
    setRequest((state) => [...state, newCoffee])
  }

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
          handleNewRequest={handleNewRequest}
        />
        <Coffee
          tags={['TRADICIONAL']}
          img={Coffee2}
          title="Expresso Americano"
          description="Expresso diluído, menos intenso que o tradicional"
          price="9,90"
          handleNewRequest={handleNewRequest}
        />
        <Coffee
          tags={['TRADICIONAL']}
          img={Coffee3}
          title="Expresso Cremoso"
          description="Café expresso tradicional com espuma cremosa"
          price="9,90"
          handleNewRequest={handleNewRequest}
        />
        <Coffee
          tags={['TRADICIONAL', 'GELADO']}
          img={Coffee4}
          title="Expresso Gelado"
          description="Bebida preparada com café expresso e cubos de gelo"
          price="9,90"
          handleNewRequest={handleNewRequest}
        />
        <Coffee
          tags={['TRADICIONAL', 'COM LEITE']}
          img={Coffee5}
          title="Café com Leite"
          description="Meio a meio de expresso tradicional com leite vaporizado"
          price="9,90"
          handleNewRequest={handleNewRequest}
        />
        <Coffee
          tags={['TRADICIONAL', 'COM LEITE']}
          img={Coffee6}
          title="Latte"
          description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
          price="9,90"
          handleNewRequest={handleNewRequest}
        />
        <Coffee
          tags={['TRADICIONAL', 'COM LEITE']}
          img={Coffee7}
          title="Capuccino"
          description="Bebida com canela feita de doses iguais de café, leite e espuma"
          price="9,90"
          handleNewRequest={handleNewRequest}
        />
        <Coffee
          tags={['TRADICIONAL', 'COM LEITE']}
          img={Coffee8}
          title="Macchiato"
          description="Café expresso misturado com um pouco de leite quente e espuma"
          price="9,90"
          handleNewRequest={handleNewRequest}
        />
        <Coffee
          tags={['TRADICIONAL', 'COM LEITE']}
          img={Coffee9}
          title="Mocaccino"
          description="Café expresso com calda de chocolate, pouco leite e espuma"
          price="9,90"
          handleNewRequest={handleNewRequest}
        />
        <Coffee
          tags={['ESPECIAL', 'COM LEITE']}
          img={Coffee10}
          title="Chocolate Quente"
          description="Bebida feita com chocolate dissolvido no leite quente e café"
          price="9,90"
          handleNewRequest={handleNewRequest}
        />
        <Coffee
          tags={['ESPECIAL', 'ALCOÓLICO', 'GELADO']}
          img={Coffee11}
          title="Cubano"
          description="Drink gelado de café expresso com rum, creme de leite e hortelã"
          price="9,90"
          handleNewRequest={handleNewRequest}
        />
        <Coffee
          tags={['ESPECIAL']}
          img={Coffee12}
          title="Havaiano"
          description="Bebida adocicada preparada com café e leite de coco"
          price="9,90"
          handleNewRequest={handleNewRequest}
        />
        <Coffee
          tags={['ESPECIAL']}
          img={Coffee13}
          title="Árabe"
          description="Bebida preparada com grãos de café árabe e especiarias"
          price="9,90"
          handleNewRequest={handleNewRequest}
        />
        <Coffee
          tags={['ESPECIAL', 'ALCOÓLICO']}
          img={Coffee14}
          title="Irlandês"
          description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
          price="9,90"
          handleNewRequest={handleNewRequest}
        />
      </div>
    </Container>
  )
}
