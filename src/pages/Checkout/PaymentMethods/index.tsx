import { useContext } from 'react'
import { CoffeeContext } from '../../../contexts/context'
import {
  ButtonBank,
  ButtonCreditCard,
  ButtonMoney,
  ButtonOptions,
  CardBank,
  CardCurrency,
  CardMoney,
  ContainerPaymentCardCheckout,
  DetailOfPayment,
} from './styles'
import { IconCurrenyDollar } from '../styles'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

export function PaymentMethods() {
  const { handleOptionSelect } = useContext(CoffeeContext)

  return (
    <ContainerPaymentCardCheckout>
      <DetailOfPayment>
        <IconCurrenyDollar>
          <CurrencyDollar size={22} />
        </IconCurrenyDollar>

        <div>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </DetailOfPayment>

      <ButtonOptions>
        <ButtonCreditCard
          onClick={() => handleOptionSelect({ Option: 'Cartão de crédito' })}
        >
          <CardCurrency>
            <CreditCard />
          </CardCurrency>
          <span>Cartão de crédito</span>
        </ButtonCreditCard>
        <ButtonBank
          onClick={() => handleOptionSelect({ Option: 'Cartao de Debito' })}
        >
          <CardBank>
            <Bank />
          </CardBank>
          <span>Cartao de Debito</span>
        </ButtonBank>
        <ButtonMoney onClick={() => handleOptionSelect({ Option: 'Dinheiro' })}>
          <CardMoney>
            <Money />
          </CardMoney>
          <span>dinheiro</span>
        </ButtonMoney>
      </ButtonOptions>
    </ContainerPaymentCardCheckout>
  )
}
