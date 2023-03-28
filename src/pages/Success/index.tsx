import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Image from '../../assets/LustrationImage.svg'
import {
  ContainerSuccessPayment,
  ContentHeader,
  InformationContainer,
  InfoDetails,
} from './styles'

export function Success() {
  return (
    <ContainerSuccessPayment>
      <ContentHeader>
        <strong>Uhu! Pedido confirmado</strong>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </ContentHeader>

      <InformationContainer>
        <InfoDetails>
          <div>
            <div>
              <MapPin size={24} />
              <span>Entrega em Rua João Daniel Martinelli, 102Farrapos</span>
            </div>
            <div>
              <Timer />
              <span>Previsão de entrega 20 min - 30 min </span>
            </div>
            <div>
              <CurrencyDollar size={24} />
              <span>Pagamento na entrega Cartão de Crédito</span>
            </div>
          </div>
        </InfoDetails>

        <img src={Image} alt="" />
      </InformationContainer>
    </ContainerSuccessPayment>
  )
}
