import styled from 'styled-components'

export const HeaderContainerHome = styled.div`
  padding: 4.5rem 0;
  display: flex;
  gap: 5rem;
  filter: blur();
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
`

export const ContainerOptionsHome = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ContainerCardHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const Containercard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
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
export const ContainerMenuHome = styled.div`
  strong {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeMenuHome = styled.div`
  margin-top: 3.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  align-items: center;
  justify-content: center;
`
export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 0;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  margin-bottom: 2rem;

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;

    text-transform: uppercase;
    color: ${(props) => props.theme['yellow-dark']};
    width: 81px;
    height: 21px;
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base-subtitle']};
  }

  img {
    margin-top: -3.5rem;
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
    padding: 0 1rem;
  }
`

export const ChooseCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const ButtonsChooseCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`
export const AddandKeepOutCoffee = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 0.5rem;
  width: 72px;
  height: 38px;
  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
`

export const ShoppingCoffee = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 38px;
  height: 38px;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
`

export const DescriptionCoffee = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  place-content: center;
`
