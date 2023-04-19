import { MapPinLine } from 'phosphor-react'
import { useContext, useState, useEffect } from 'react'
import {
  ContainerCheckout,
  ContainerFormCheckout,
  ContainerHeaderCartCheckout,
  DetailOfLocation,
  FormContainer,
  IconMapPinLine,
  Input1,
  Input2,
  Input3,
  Input4,
  Input5,
  Input6,
  Input7,
} from './styles'
import { CoffeeContext } from '../../contexts/context'
import { PaymentMethods } from './PaymentMethods'
import { CheckoutForm } from './CheckoutForm'
import { EmptyCart } from './EmptyCart'

export function Checkout() {
  const { register, takeData, handleSubmit, cart } = useContext(CoffeeContext)

  const [isCartEmpty, setIsCartEmpty] = useState(cart.length === 0)

  useEffect(() => {
    setIsCartEmpty(cart.length === 0)
  }, [cart])

  return (
    <form onSubmit={handleSubmit(takeData)} id="formData">
      <ContainerCheckout>
        <div>
          <strong>Complete seu pedido</strong>
          <ContainerHeaderCartCheckout>
            <ContainerFormCheckout>
              <DetailOfLocation>
                <IconMapPinLine>
                  <MapPinLine size={22} />
                </IconMapPinLine>

                <div>
                  <span>Endereço de Entrega</span>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </DetailOfLocation>

              <FormContainer>
                <Input1
                  type="text"
                  id="streetInput"
                  placeholder="CEP"
                  {...register('CEP')}
                />

                <Input2
                  type="text"
                  id="Rua"
                  placeholder="Rua"
                  {...register('Rua')}
                />

                <div>
                  <Input3
                    type="text"
                    placeholder="Numero"
                    id="numero"
                    {...register('numero', { valueAsNumber: true })}
                  />

                  <Input4
                    type="text"
                    id="neighborhoodInput"
                    placeholder="Complemento Opcional"
                    {...register('complemento')}
                  />
                </div>
                <div>
                  <Input5
                    type="text"
                    placeholder="Bairro"
                    id="cityInput"
                    {...register('Bairro')}
                  />

                  <Input6
                    type="text"
                    id="stateInput"
                    placeholder="cidade"
                    {...register('cidade')}
                  />

                  <Input7
                    type="text"
                    id="amountInput"
                    placeholder="UF"
                    {...register('UF')}
                  />
                </div>
              </FormContainer>
            </ContainerFormCheckout>
            <PaymentMethods />
          </ContainerHeaderCartCheckout>
        </div>
        <div>{isCartEmpty ? <EmptyCart /> : <CheckoutForm />}</div>
      </ContainerCheckout>
    </form>
  )
}
