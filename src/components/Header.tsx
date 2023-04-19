import { CartAmount, HeaderContainer, RounedCoffeeCount } from './styles'
import logoCoffee from '../assets/logo-coffee.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../contexts/context'

export function Header() {
  const { totalQuantity } = useContext(CoffeeContext)
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffee} alt="" />
      </NavLink>
      <nav>
        <span>
          <MapPin size={24} />
          Porto Alegre, RS
        </span>

        <NavLink to="/checkout">
          <CartAmount>
            <ShoppingCart size={24} weight="fill" />
            {totalQuantity > 0 && (
              <RounedCoffeeCount>{totalQuantity}</RounedCoffeeCount>
            )}
          </CartAmount>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
