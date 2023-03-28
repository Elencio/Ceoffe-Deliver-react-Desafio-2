import styled from 'styled-components'

export const ContainerSuccessPayment = styled.div`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`
export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  strong {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }
`

export const InformationContainer = styled.div`
  display: flex;
  gap: 6.375rem;
`
export const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border: 1px solid
    linear-gradient(
      101deg,
      rgba(219, 172, 44, 1) 100%,
      rgba(128, 71, 248, 1) 100%
    );
  border-radius: 6px 36px;
`
