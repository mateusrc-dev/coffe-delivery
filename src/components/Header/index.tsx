import { MapPin, ShoppingCart } from 'phosphor-react'
import { Button } from '../Button'
import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { RequestContext } from '../../contexts/contextRequest'

export function Header() {
  const { request } = useContext(RequestContext)

  console.log(request)

  return (
    <HeaderContainer>
      <NavLink className="linkLogo" to="/" title="ir para a página inicial">
        <img className="logo" src={Logo} alt="logo coffe-delivery" />
      </NavLink>
      <div className="requestAndLocalization">
        <div className="localization">
          <MapPin size={22} color="#8047f8" weight="fill" />
          <p>Teresina, PI</p>
        </div>
        <NavLink className="link" to="/request" title="ver pedidos">
          {request.length === 0 ? (
            <Button variant="secondary" variantSvg="colorSvgTwo">
              <ShoppingCart weight="fill" />
            </Button>
          ) : (
            <div className="button">
              <div className="amountRequest">
                <p>{request.length}</p>
              </div>
              <Button variant="secondary" variantSvg="colorSvgTwo">
                <ShoppingCart weight="fill" />
              </Button>
            </div>
          )}
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
