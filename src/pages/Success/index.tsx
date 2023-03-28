import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Image from '../../assets/LustrationImage.svg'
import {
  ContainerSuccessPayment,
  ContentHeader,
  InformationContainer,
  InfoDetails,
  InfoDetailsTitle,
  IconMapLine,
  IconTimer,
  IconDollar,
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
          <InfoDetailsTitle>
            <IconMapLine>
              <MapPin size={24} />
            </IconMapLine>

            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli,102</strong>
                <br />
              </span>
              <span> Farrapos-Porto Alegre, R$</span>
            </div>
          </InfoDetailsTitle>
          <InfoDetailsTitle>
            <IconTimer>
              <Timer size={24} />
            </IconTimer>

            <div>
              <span>Previsão de entrega </span>
              <strong>20 min - 30 min </strong>
            </div>
          </InfoDetailsTitle>
          <InfoDetailsTitle>
            <IconDollar>
              <CurrencyDollar size={24} />
            </IconDollar>

            <div>
              <span>Pagamento na entrega </span>
              <strong>Cartão de Crédito</strong>
            </div>
          </InfoDetailsTitle>
        </InfoDetails>

        <img src={Image} alt="" />
      </InformationContainer>
    </ContainerSuccessPayment>
  )
}
