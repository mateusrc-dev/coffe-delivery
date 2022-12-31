import { MapPin, ShoppingCart } from 'phosphor-react'
import { Button } from '../Button'
import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="ir para a página inicial">
        <img className="logo" src={Logo} alt="logo coffe-delivery" />
      </NavLink>
      <div className="requestAndLocalization">
        <div className="localization">
          <MapPin size={22} color="#8047f8" weight="fill" />
          <p>Teresina, PI</p>
        </div>
        <NavLink to="/request" title="ver pedidos">
          <Button variant="secondary" variantSvg="colorSvgTwo">
            <ShoppingCart weight="fill" />
          </Button>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
