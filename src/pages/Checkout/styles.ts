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
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.75rem;
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
