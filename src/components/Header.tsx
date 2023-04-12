import { HeaderContainer, RounedCoffeeCount } from './styles'
import logoCoffee from '../assets/logo-coffee.svg'
import {
  MapPin,
  MegaphoneSimple,
  ShoppingCart,
  ShoppingCartSimple,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../contexts/context'

export function Header() {
  const { totalQuantity } = useContext(CoffeeContext)
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <nav>
        <span>
          <MapPin size={24} />
          Porto Alegre, RS
        </span>

        <NavLink to="/checkout">
          <ShoppingCart size={24} />
          {totalQuantity > 0 && (
            <RounedCoffeeCount>{totalQuantity}</RounedCoffeeCount>
          )}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
