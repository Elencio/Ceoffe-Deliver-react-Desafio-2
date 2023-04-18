import { useContext } from 'react'
import { CoffeeContext } from '../../../contexts/context'
import {
  AddandKeepOut,
  ButtonComponent,
  CardCheckingOut,
  CardOut,
  CheckingOutTheOptions,
  DeleteCard,
  Options,
  OptionsCard,
  TotalPrices,
  Card,
  Price,
} from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function CheckoutForm() {
  const {
    cart,
    removeFromCart,
    addToCart,
    CountNUmbers,
    totalAmount,
    removeCart,
    JustToResetTheForm,
  } = useContext(CoffeeContext)

  let deliverAdd = 3.5

  if (totalAmount === 0) {
    deliverAdd = 0
  } else {
    deliverAdd = 3.5
  }

  const DisabledButton = !totalAmount
  const totalAmountToPaying = totalAmount + deliverAdd
  return (
    <div>
      <strong>Cafés selecionados</strong>
      <CheckingOutTheOptions>
        <CardCheckingOut>
          {cart.map((item) => (
            <>
              <CardOut key={item.product.id}>
                <Card>
                  <img src={item.product.image} alt="" />
                  <Options>
                    <strong>{item.product.title}</strong>
                    <OptionsCard>
                      <AddandKeepOut>
                        <Minus onClick={() => removeFromCart(item.product)} />
                        <span>{CountNUmbers(item.product)}</span>
                        <Plus onClick={() => addToCart(item.product)} />
                      </AddandKeepOut>
                      <DeleteCard>
                        <div>
                          <Trash />
                        </div>
                        <span onClick={() => removeCart(item.product.id)}>
                          Remover
                        </span>
                      </DeleteCard>
                    </OptionsCard>
                  </Options>
                </Card>
                <Price>R$ 9,90</Price>
              </CardOut>
            </>
          ))}
        </CardCheckingOut>
        <TotalPrices>
          <div>
            <span>Total de itens</span>
            <span>R$ {totalAmount}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ {deliverAdd}</span>{' '}
          </div>
          <div>
            {' '}
            <strong>Total </strong>
            <strong>R$ {totalAmountToPaying}</strong>{' '}
          </div>
        </TotalPrices>
        <NavLink to="/Success" onClick={JustToResetTheForm}>
          <ButtonComponent disabled={DisabledButton}>
            Finalizar Pedido
          </ButtonComponent>
        </NavLink>
      </CheckingOutTheOptions>
    </div>
  )
}
