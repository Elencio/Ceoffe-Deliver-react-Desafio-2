import styled from 'styled-components'

export const HeaderContainerHome = styled.div`
  padding: 4.5rem 0;
  display: flex;
  gap: 5rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2.5rem 0;
    gap: 3rem;
  }
`

export const HeaderContentHome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  span {
    font-family: 'Roboto' sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }

  @media screen and (max-width: 768px) {
    strong {
      font-size: 25px;
    }
    span {
      font-size: 18px;
    }
  }
`
export const ContainerOptionsHome = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }

  @media screen and (max-width: 768px) {
    /* Styles for screens with a maximum width of 768px or less */
    /* For example, you can change the flex-direction to column for smaller screens */
    flex-direction: column;
    gap: 1rem;
  }
`

export const Containercard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`

export const ContainerCardHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`
export const CardBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
  width: 32px;
  height: 32px;
`
export const Shoppingcart = styled(CardBase)`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-dark']};
`

export const Timercart = styled(CardBase)`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};
`

export const Packagecart = styled(CardBase)`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['base-text']};
`
export const Coffecart = styled(CardBase)`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.purple};
`
