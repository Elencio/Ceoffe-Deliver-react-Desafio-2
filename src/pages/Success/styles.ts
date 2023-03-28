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
  width: 434px;
  border: 1px solid #dcf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px 36px;
`
export const InfoDetailsTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  strong {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const IconBase = styled.div`
  display: flex;
  align-items: center;
  width: 32px;
  height: 32px;
  justify-content: center;
  border-radius: 1000px;
  color: ${(props) => props.theme.white};
`
export const IconMapLine = styled(IconBase)`
  background: ${(props) => props.theme.purple};
`
export const IconTimer = styled(IconBase)`
  background: ${(props) => props.theme.yellow};
`
export const IconDollar = styled(IconBase)`
  background: ${(props) => props.theme['yellow-dark']};
`
