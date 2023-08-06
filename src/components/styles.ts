import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
  }

  span {
    width: 10rem;
    height: 2.5rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['purple-light']};
    border-radius: 6px;
    color: ${(props) => props.theme['purple-dark']};
  }

  a:focus {
    outline: none;
    box-shadow: 0 0 0 0;
  }

  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 0 1.2rem;
    nav {
      align-items: center;

      span {
        display: none;
      }
    }
  }
`

export const RounedCoffeeCount = styled.div`
  position: relative;
  margin-top: -2rem;
  margin-left: 2rem;
  width: 1.25rem;
  height: 1.25rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: ${(props) => props.theme['yellow-dark']};
  position: absolute;
  color: ${(props) => props.theme.white};
`

export const CartAmount = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;
  color: ${(props) => props.theme['yellow-dark']};

  @media (max-width: 768px) {
    position: static;
  }
`
