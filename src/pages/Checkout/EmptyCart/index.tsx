import { ShoppingBag } from 'phosphor-react'
import { BagShopping, EmptyCartShopping } from './styles'
import { NavLink } from 'react-router-dom'

export function EmptyCart() {
  return (
    <EmptyCartShopping>
      <BagShopping>
        <ShoppingBag size={60} weight="fill" />
      </BagShopping>
      <strong>
        Seu carrinho está vazio no momento. Adicione alguns produtos para
        começar a fazer suas compras. E seja Feliz com os nossos cafes.
      </strong>

      <div>
        <span>Desfrute! </span>
        <NavLink to="/"> {''} escolha um café conosco</NavLink>
      </div>
    </EmptyCartShopping>
  )
}
