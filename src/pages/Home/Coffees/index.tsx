import { useContext } from 'react'
import { CoffeeContext } from '../../../contexts/context'
import {
  AddandKeepOutCoffee,
  ButtonsChooseCoffee,
  ChooseCoffee,
  CoffeeContainer,
  CoffeeMenuHome,
  ContainerMenuHome,
  ShoppingCoffee,
} from './styles'
import { MenuCoffes } from '../../../db/DB'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function Coffee() {
  const { removeFromCart, addToCart, CountNUmbers } = useContext(CoffeeContext)
  return (
    <ContainerMenuHome>
      <strong>Nossos cafés</strong>

      <CoffeeMenuHome>
        {MenuCoffes.map((item) => (
          <>
            <CoffeeContainer key={item.id}>
              <img src={item.image} alt="" />
              <h2>{item.type}</h2>
              <h2>{item.type1}</h2>
              <h2>{item.type2}</h2>
              <span>{item.title}</span>
              <p>{item.description}</p>
              <ChooseCoffee>
                <p>
                  R$
                  <span>{item.price}</span>
                </p>
                <ButtonsChooseCoffee>
                  <AddandKeepOutCoffee>
                    <Plus onClick={() => addToCart(item)} />
                    <span>{CountNUmbers(item)}</span>
                    <Minus onClick={() => removeFromCart(item)} />
                  </AddandKeepOutCoffee>
                  <ShoppingCoffee>
                    <ShoppingCart />
                  </ShoppingCoffee>
                </ButtonsChooseCoffee>
              </ChooseCoffee>
            </CoffeeContainer>
          </>
        ))}
      </CoffeeMenuHome>
    </ContainerMenuHome>
  )
}
