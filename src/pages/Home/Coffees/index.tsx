import { useContext } from 'react'
import { CoffeeContext } from '../../../contexts/context'
import {
  AddandKeepOutCoffee,
  ButtonsChooseCoffee,
  ChooseCoffee,
  CoffeeContainer,
  CoffeeMenuHome,
  ContainerMenuHome,
  Containeritems,
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
              {item.type && (
                <Containeritems>
                  {item.type.map((t) => (
                    <h2 key={item.id}>{t}</h2>
                  ))}
                </Containeritems>
              )}
              <span>{item.title}</span>
              <p>{item.description}</p>
              <ChooseCoffee>
                <div>
                  <strong>R$</strong> {''}
                  <span>{item.price}</span>
                </div>
                <ButtonsChooseCoffee>
                  <AddandKeepOutCoffee>
                    <Plus onClick={() => addToCart(item)} />
                    <strong>{CountNUmbers(item)}</strong>
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
