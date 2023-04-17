import { MapPinLine } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
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

export function Checkout() {
  const { register, takeData, handleSubmit } = useContext(CoffeeContext)

  return (
    <form onSubmit={handleSubmit(takeData)}>
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
                    placeholder="Complemento"
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
        <div>
          <CheckoutForm />
        </div>
      </ContainerCheckout>
    </form>
  )
}
