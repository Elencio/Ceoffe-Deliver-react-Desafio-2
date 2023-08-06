import styled from 'styled-components'

export const ButtonOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const BaseOptions = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 12px;
  width: 178.67px;
  height: 51px;
  background: ${(props) => props.theme['base-input']};
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-button']};
  cursor: pointer;
  transition: background 0.2s;

  :hover {
    background: ${(props) => props.theme['base-hover']};
  }

  span {
    font-family: 'Roboto' sans-serif !important;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ButtonCreditCard = styled(BaseOptions)``
export const ButtonBank = styled(BaseOptions)``
export const ButtonMoney = styled(BaseOptions)``

export const Card = styled.div`
  color: ${(props) => props.theme['purple-dark']};
`

export const CardMoney = styled(Card)``
export const CardBank = styled(Card)``
export const CardCurrency = styled(Card)``

export const ContainerFormCheckout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 2rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  input {
    background: ${(props) => props.theme['base-input']};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      gap: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`
export const ContainerPaymentCardCheckout = styled(ContainerFormCheckout)``

export const DetailContainerOfPaymentAndLocation = styled.div`
  display: flex;
  gap: 1rem;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const DetailOfLocation = styled(DetailContainerOfPaymentAndLocation)``
export const DetailOfPayment = styled(DetailContainerOfPaymentAndLocation)``
