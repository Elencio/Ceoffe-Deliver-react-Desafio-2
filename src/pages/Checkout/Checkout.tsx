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
import Cofee1 from '../../assets/Coffee1.svg'

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
} from './styles'

export function Checkout() {
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

            <form action="">
              <Input1 type="text" placeholder="Rua" />
              <Input2 type="text" placeholder="Número" />
              <div>
                <Input3 type="text" placeholder="Complemento" />
                <Input4 type="text" placeholder="Bairro" />
              </div>
              <div>
                <Input5 type="text" placeholder="Cidade" />
                <Input6 type="text" placeholder="Estado" />
                <Input7 type="text" placeholder="R$" />
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
              <ButtonCreditCard>
                <CardCurrency>
                  <CreditCard />
                </CardCurrency>
                <span>Cartão de crédito</span>
              </ButtonCreditCard>
              <ButtonBank>
                <CardBank>
                  <Bank />
                </CardBank>
                <span>Cartão de crédito</span>
              </ButtonBank>
              <ButtonMoney>
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
            <CardOut>
              <img src={Cofee1} alt="" />
              <Options>
                <strong>Expresso Tradicional</strong>
                <OptionsCard>
                  <AddandKeepOut>
                    <Minus />
                    <span>1</span>
                    <Plus />
                  </AddandKeepOut>
                  <DeleteCard>
                    <div>
                      <Trash />
                    </div>
                    <span>Remover</span>
                  </DeleteCard>
                </OptionsCard>
              </Options>
            </CardOut>
            <Price>R$ 9,90</Price>
          </CardCheckingOut>
          <CardCheckingOut>
            <CardOut>
              <img src={Cofee1} alt="" />
              <Options>
                <strong>Latte</strong>
                <OptionsCard>
                  <AddandKeepOut>
                    <Minus />
                    <span>1</span>
                    <Plus />
                  </AddandKeepOut>
                  <DeleteCard>
                    <div>
                      <Trash />
                    </div>
                    <span>Remover</span>
                  </DeleteCard>
                </OptionsCard>
              </Options>
            </CardOut>
            <Price>R$ 9,90</Price>
          </CardCheckingOut>
          <TotalPrices>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>{' '}
            </div>
            <div>
              {' '}
              <strong>Total </strong>
              <strong>R$ 33,20</strong>{' '}
            </div>
          </TotalPrices>
          <NavLink to="/Success">
            <button> Finalizar Pedido</button>
          </NavLink>
        </CheckingOutTheOptions>
      </div>
    </ContainerCheckout>
  )
}
