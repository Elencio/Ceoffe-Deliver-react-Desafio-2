import styled from 'styled-components'

export const ContainerCheckout = styled.div`
  margin-top: 4.5rem;
  display: flex;
  gap: 2rem;

  img {
    width: 64px;
    height: 64px;
  }

  strong {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ContainerHeaderCartCheckout = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

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
`

export const DetailOfLocation = styled(DetailContainerOfPaymentAndLocation)``
export const DetailOfPayment = styled(DetailContainerOfPaymentAndLocation)``

export const IconCurrenyDollar = styled.div`
  color: ${(props) => props.theme['purple-dark']};
`

export const IconMapPinLine = styled.div`
  color: ${(props) => props.theme['yellow-dark']};
`

export const BaseInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  gap: 4px;
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
`
export const Input1 = styled(BaseInput)`
  width: 200px;
  height: 42px;
`
export const Input2 = styled(BaseInput)`
  width: 560px;
  height: 42px;
`
export const Input3 = styled(BaseInput)`
  width: 200px;
  height: 42px;
`
export const Input4 = styled(BaseInput)`
  width: 348px;
  height: 42px;
`
export const Input5 = styled(BaseInput)`
  width: 200px;
  height: 42px;
`
export const Input6 = styled(BaseInput)`
  width: 276px;
  height: 42px;
`
export const Input7 = styled(BaseInput)`
  width: 60px;
  height: 42px;
`
export const ButtonOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
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

export const CheckingOutTheOptions = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;

  button {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 8px;
    gap: 4px;
    width: 368px;
    height: 46px;
    background: ${(props) => props.theme.yellow};
    border-radius: 6px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    font-stretch: 100;
    border: none;
    transition: background 0.2s;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const CardCheckingOut = styled.div`
  display: flex;
  gap: 3.125rem;
  margin-bottom: 2rem;

  &::after {
    content: '';
    display: flex;
    position: absolute;
    margin: 5.5rem 0;
    width: 368px;
    height: 0px;
    border: 1px solid ${(props) => props.theme['base-button']};
  }
`
export const CardOut = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const AddandKeepOut = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 0.5rem;
  width: 72px;
  height: 32px;
  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
`

export const OptionsCard = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    display: flex;
  }
`

export const Price = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  display: flex;
  color: ${(props) => props.theme['base-text']};
`

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  strong {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-text']};
  }
`
export const DeleteCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 0.25rem;
  cursor: pointer;
  width: 91px;
  height: 32px;
  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }
`

export const TotalPrices = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    display: flex;
    align-items: center;
    text-align: right;
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    display: flex;
    align-items: center;
    text-align: right;
    color: ${(props) => props.theme['base-text']};
  }
`
