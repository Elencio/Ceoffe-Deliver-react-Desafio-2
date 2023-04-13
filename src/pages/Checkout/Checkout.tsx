import {
  Bank,
  Cards,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import {
  ContainerCheckout,
  ButtonOptions,
  ContainerFormCheckout,
  ContainerHeaderCartCheckout,
  ContainerPaymentCardCheckout,
  DetailOfLocation,
  DetailOfPayment,
  IconCurrenyDollar,
  IconMapPinLine,
  Input1,
  Input2,
  Input3,
  Input4,
  Input5,
  Input6,
  Input7,
  ButtonCreditCard,
  ButtonBank,
  ButtonMoney,
  CardMoney,
  CardCurrency,
  CardBank,
  CheckingOutTheOptions,
  CardCheckingOut,
  CardOut,
  AddandKeepOut,
  OptionsCard,
  Price,
  Options,
  DeleteCard,
  TotalPrices,
  ButtonComponent,
} from './styles'
import { CoffeeContext } from '../../contexts/context'

export function Checkout() {
  const {
    cart,
    removeFromCart,
    addToCart,
    CountNUmbers,
    totalAmount,
    register,
    takeData,
    formData,
    handleSubmit,
    handleOptionSelect,
  } = useContext(CoffeeContext)

  let deliverAdd = 3.5

  if (totalAmount === 0) {
    deliverAdd = 0
  } else {
    deliverAdd = 3.5
  }

  const totalAmountToPaying = totalAmount + deliverAdd

  return (
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

            <form onSubmit={handleSubmit(takeData)} id="formData">
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
            </form>
          </ContainerFormCheckout>
          <ContainerPaymentCardCheckout>
            <DetailOfPayment>
              <IconCurrenyDollar>
                <CurrencyDollar size={22} />
              </IconCurrenyDollar>

              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </DetailOfPayment>

            <ButtonOptions>
              <ButtonCreditCard
                onClick={() =>
                  handleOptionSelect({ Option: 'Cartão de crédito' })
                }
              >
                <CardCurrency>
                  <CreditCard />
                </CardCurrency>
                <span>Cartão de crédito</span>
              </ButtonCreditCard>
              <ButtonBank
                onClick={() => handleOptionSelect({ Option: 'Banco' })}
              >
                <CardBank>
                  <Bank />
                </CardBank>
                <span>Banco</span>
              </ButtonBank>
              <ButtonMoney
                onClick={() => handleOptionSelect({ Option: 'Dinheiro' })}
              >
                <CardMoney>
                  <Money />
                </CardMoney>
                <span>dinheiro</span>
              </ButtonMoney>
            </ButtonOptions>
          </ContainerPaymentCardCheckout>
        </ContainerHeaderCartCheckout>
      </div>
      <div>
        <strong>Cafés selecionados</strong>
        <CheckingOutTheOptions>
          <CardCheckingOut>
            {cart.map((item) => (
              <>
                <CardOut key={item.product.id}>
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
                        <span>Remover</span>
                      </DeleteCard>
                    </OptionsCard>
                  </Options>
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
          <NavLink to="/Success">
            <ButtonComponent type="submit" form="formData">
              Finalizar Pedido
            </ButtonComponent>
          </NavLink>
        </CheckingOutTheOptions>
      </div>
    </ContainerCheckout>
  )
}
